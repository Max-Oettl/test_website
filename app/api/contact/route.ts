import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import nodemailer, { type Transporter } from "nodemailer";

import { createConfirmationEmail } from "./confirmation-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const maximumRequestSize = 16_384;
const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaximum = 4;
const maximumRateLimitEntries = 10_000;
const emailLogoPath = join(
  process.cwd(),
  "public",
  "branding",
  "reltest-email-logo.png",
);

const audiences = ["company", "private", "public"] as const;
const topics = [
  "project",
  "training",
  "education",
  "literature",
  "general",
] as const;
const locales = ["de", "en"] as const;

type Audience = (typeof audiences)[number];
type ContactLocale = (typeof locales)[number];
type Topic = (typeof topics)[number];

type ValidContactRequest = {
  audience: Audience;
  company: string;
  email: string;
  locale: ContactLocale;
  message: string;
  name: string;
  phone: string;
  topic: Topic;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimits = new Map<string, RateLimitEntry>();

const mailCopy = {
  de: {
    audience: {
      company: "Unternehmen",
      private: "Privatperson",
      public: "Hochschule oder öffentliche Einrichtung",
    },
    topic: {
      project: "Technische Projektanfrage",
      training: "Vor-Ort-Schulung",
      education: "RelTest Education / E-Learning",
      literature: "Fachliteratur oder Vortrag",
      general: "Allgemeine Anfrage",
    },
    labels: {
      audience: "Anfrage als",
      company: "Unternehmen / Organisation",
      email: "E-Mail",
      language: "Formularsprache",
      message: "Nachricht",
      name: "Name",
      phone: "Telefon",
      topic: "Anliegen",
    },
    language: "Deutsch",
    subject: "Website-Anfrage",
  },
  en: {
    audience: {
      company: "Company",
      private: "Private individual",
      public: "University or public institution",
    },
    topic: {
      project: "Technical project inquiry",
      training: "On-site training",
      education: "RelTest Education / e-learning",
      literature: "Technical literature or speaking request",
      general: "General inquiry",
    },
    labels: {
      audience: "Inquiry as",
      company: "Company / organisation",
      email: "Email",
      language: "Form language",
      message: "Message",
      name: "Name",
      phone: "Phone",
      topic: "Subject",
    },
    language: "English",
    subject: "Website inquiry",
  },
} as const;

let transporter: Transporter | undefined;
let transporterConfigurationKey = "";
let emailLogoPromise: Promise<Buffer> | undefined;

function jsonResponse(body: object, status: number, headers?: HeadersInit) {
  const responseHeaders = new Headers(headers);
  responseHeaders.set("Cache-Control", "no-store");

  return Response.json(body, {
    status,
    headers: responseHeaders,
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getString(record: Record<string, unknown>, key: string) {
  const value = record[key];
  return typeof value === "string" ? value.trim() : "";
}

function isOneOf<T extends string>(
  value: string,
  allowedValues: readonly T[],
): value is T {
  return allowedValues.includes(value as T);
}

function isValidEmail(value: string) {
  return (
    value.length <= 254 &&
    !value.includes("\r") &&
    !value.includes("\n") &&
    /^[^\s@<>,;:"\\]+@(?:[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?\.)+[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?$/i.test(value)
  );
}

function validateContactRequest(value: unknown): ValidContactRequest | null {
  if (!isRecord(value)) {
    return null;
  }

  const audience = getString(value, "audience");
  const company = getString(value, "company");
  const email = getString(value, "email").toLowerCase();
  const locale = getString(value, "locale");
  const message = getString(value, "message");
  const name = getString(value, "name");
  const phone = getString(value, "phone");
  const topic = getString(value, "topic");

  if (
    !isOneOf(audience, audiences) ||
    !isOneOf(locale, locales) ||
    !isOneOf(topic, topics) ||
    value.privacy !== true ||
    name.length < 2 ||
    name.length > 120 ||
    company.length > 160 ||
    (audience !== "private" && company.length === 0) ||
    !isValidEmail(email) ||
    phone.length > 60 ||
    message.length < 20 ||
    message.length > 5_000
  ) {
    return null;
  }

  return {
    audience,
    company,
    email,
    locale,
    message,
    name,
    phone,
    topic,
  };
}

function hasSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) {
    return false;
  }

  const requestUrl = new URL(request.url);
  // Never accept an arbitrary forwarded host as an additional trusted origin.
  return origin === requestUrl.origin;
}

function getRateLimitKey(request: Request) {
  const clientAddress =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown";

  return createHash("sha256")
    .update(`reltest-contact:${clientAddress}`)
    .digest("hex");
}

function isRateLimited(key: string) {
  const now = Date.now();
  for (const [entryKey, entry] of rateLimits) {
    if (entry.resetAt <= now) rateLimits.delete(entryKey);
  }
  const current = rateLimits.get(key);

  if (!current || current.resetAt <= now) {
    if (rateLimits.size >= maximumRateLimitEntries) return true;
    rateLimits.set(key, {
      count: 1,
      resetAt: now + rateLimitWindowMs,
    });
    return false;
  }

  if (current.count >= rateLimitMaximum) {
    return true;
  }

  current.count += 1;
  return false;
}

function getMailConfiguration() {
  const host = process.env.SMTP_HOST?.trim();
  const password = process.env.SMTP_PASSWORD;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER?.trim();
  const from = process.env.MAIL_FROM?.trim();
  const confirmationFrom = process.env.MAIL_CONFIRMATION_FROM?.trim();
  const to = process.env.MAIL_TO?.trim();

  if (
    !host ||
    !password ||
    !user ||
    !isValidEmail(from ?? "") ||
    !isValidEmail(confirmationFrom ?? "") ||
    !isValidEmail(to ?? "") ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65_535
  ) {
    return null;
  }

  return {
    confirmationFrom,
    from,
    host,
    password,
    port,
    secure: process.env.SMTP_SECURE !== "false",
    to,
    user,
  };
}

function getTransporter(
  configuration: NonNullable<ReturnType<typeof getMailConfiguration>>,
) {
  const configurationKey = [
    configuration.host,
    configuration.port,
    configuration.secure,
    configuration.user,
  ].join(":");

  if (!transporter || transporterConfigurationKey !== configurationKey) {
    transporter = nodemailer.createTransport({
      host: configuration.host,
      port: configuration.port,
      secure: configuration.secure,
      requireTLS: !configuration.secure,
      auth: {
        user: configuration.user,
        pass: configuration.password,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
    transporterConfigurationKey = configurationKey;
  }

  return transporter;
}

function getEmailLogo() {
  emailLogoPromise ??= readFile(emailLogoPath);
  return emailLogoPromise;
}

function formatMessage(data: ValidContactRequest) {
  const copy = mailCopy[data.locale];

  return [
    `${copy.labels.language}: ${copy.language}`,
    `${copy.labels.audience}: ${copy.audience[data.audience]}`,
    `${copy.labels.topic}: ${copy.topic[data.topic]}`,
    "",
    `${copy.labels.name}: ${data.name}`,
    `${copy.labels.company}: ${data.company || "–"}`,
    `${copy.labels.email}: ${data.email}`,
    `${copy.labels.phone}: ${data.phone || "–"}`,
    "",
    `${copy.labels.message}:`,
    data.message,
  ].join("\n");
}

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return jsonResponse({ error: "Invalid request origin" }, 403);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > maximumRequestSize) {
    return jsonResponse({ error: "Request too large" }, 413);
  }

  let body: unknown;
  try {
    // Count actual UTF-8 bytes and stop reading oversized/chunked bodies early.
    const reader = request.body?.getReader();
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    if (reader) {
      try {
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          bytes += value.byteLength;
          if (bytes > maximumRequestSize) {
            await reader.cancel();
            return jsonResponse({ error: "Request too large" }, 413);
          }
          chunks.push(value);
        }
      } finally {
        reader.releaseLock();
      }
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8")) as unknown;
  } catch {
    return jsonResponse({ error: "Invalid request body" }, 400);
  }

  if (isRecord(body) && getString(body, "website")) {
    return jsonResponse({ ok: true }, 200);
  }

  const contactRequest = validateContactRequest(body);
  if (!contactRequest) {
    return jsonResponse({ error: "Invalid form data" }, 400);
  }

  if (isRateLimited(getRateLimitKey(request))) {
    return jsonResponse(
      { error: "Too many requests" },
      429,
      { "Retry-After": String(rateLimitWindowMs / 1000) },
    );
  }

  const mailConfiguration = getMailConfiguration();
  if (!mailConfiguration) {
    return jsonResponse({ error: "Mail service is not configured" }, 503);
  }

  const copy = mailCopy[contactRequest.locale];

  try {
    await getTransporter(mailConfiguration).sendMail({
      from: {
        name: "RelTest Website",
        address: mailConfiguration.from,
      },
      to: mailConfiguration.to,
      replyTo: {
        name: contactRequest.name,
        address: contactRequest.email,
      },
      subject: `${copy.subject}: ${copy.topic[contactRequest.topic]}`,
      text: formatMessage(contactRequest),
    });
  } catch (error) {
    console.error(
      "Contact form email delivery failed:",
      error instanceof Error ? error.message : "Unknown SMTP error",
    );
    return jsonResponse({ error: "Mail delivery failed" }, 502);
  }

  const confirmationEmail = createConfirmationEmail({
    locale: contactRequest.locale,
    name: contactRequest.name,
    topic: copy.topic[contactRequest.topic],
  });
  let confirmationSent = true;

  try {
    await getTransporter(mailConfiguration).sendMail({
      from: {
        name: "RelTest Solutions",
        address: mailConfiguration.confirmationFrom,
      },
      to: {
        name: contactRequest.name,
        address: contactRequest.email,
      },
      replyTo: {
        name: "RelTest Solutions",
        address: mailConfiguration.to,
      },
      subject: confirmationEmail.subject,
      text: confirmationEmail.text,
      html: confirmationEmail.html,
      attachments: [
        {
          filename: "reltest-logo.png",
          content: await getEmailLogo(),
          cid: "reltest-logo",
          contentDisposition: "inline",
          contentType: "image/png",
        },
      ],
      headers: {
        "Auto-Submitted": "auto-generated",
        "X-Auto-Response-Suppress": "All",
      },
    });
  } catch (error) {
    confirmationSent = false;
    console.error(
      "Contact confirmation email delivery failed:",
      error instanceof Error ? error.message : "Unknown SMTP error",
    );
  }

  return jsonResponse({ ok: true, confirmationSent }, 200);
}
