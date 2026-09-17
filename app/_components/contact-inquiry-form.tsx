"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

import { localizeHref, type Locale } from "../_i18n/config";

type ContactInquiryFormProps = {
  locale: Locale;
  initialTopic?: TopicKey;
};

const formCopy = {
  de: {
    eyebrow: "Projektanfrage",
    title: "Beschreiben Sie kurz, worum es geht.",
    intro:
      "Einige Eckdaten helfen uns, Ihre Anfrage direkt fachlich einzuordnen. Eine fertige Leistungsbeschreibung ist nicht erforderlich.",
    response: "Wir melden uns in der Regel innerhalb von zwei Werktagen persönlich zurück.",
    audienceLegend: "Sie fragen an als",
    audiences: {
      company: "Unternehmen",
      private: "Privatperson",
      public: "Hochschule oder öffentliche Einrichtung",
    },
    topic: "Anliegen",
    topicPlaceholder: "Bitte auswählen",
    topics: {
      project: "Technische Projektanfrage",
      training: "Vor-Ort-Schulung",
      education: "RelTest Education / E-Learning",
      literature: "Fachliteratur oder Vortrag",
      general: "Allgemeine Anfrage",
    },
    name: "Vor- und Nachname",
    company: "Unternehmen / Organisation",
    companyOptional: "Optional für Privatpersonen",
    email: "E-Mail-Adresse",
    phone: "Telefon",
    phoneOptional: "Optional",
    message: "Worum geht es bei Ihrem Produkt, Projekt oder Anliegen?",
    messageHint:
      "Hilfreich sind Produkt oder System, anstehende Entscheidung, Projektphase sowie bereits vorhandene Daten oder Versuche.",
    privacyPrefix: "Ich habe die",
    privacyLink: "Datenschutzerklärung",
    privacySuffix:
      "gelesen. Meine Angaben werden zur Bearbeitung der Anfrage verarbeitet.",
    submit: "Anfrage senden",
    submitting: "Anfrage wird gesendet …",
    successTitle: "Anfrage erfolgreich versendet",
    success:
      "Vielen Dank. Eine Eingangsbestätigung wurde an Ihre E-Mail-Adresse gesendet. Wir melden uns in der Regel innerhalb von zwei Werktagen persönlich bei Ihnen.",
    partialSuccessTitle: "Anfrage erfolgreich übermittelt",
    partialSuccess:
      "Ihre Anfrage ist bei RelTest eingegangen. Die automatische E-Mail-Bestätigung konnte jedoch nicht versendet werden. Wir melden uns trotzdem persönlich bei Ihnen.",
    error:
      "Die Anfrage konnte gerade nicht versendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an",
    rateLimitError: "Es wurden bereits mehrere Anfragen gesendet. Bitte warten Sie bis zu 15 Minuten oder schreiben Sie direkt an",
    validationError: "Bitte prüfen Sie Ihre Angaben und die Pflichtfelder. Alternativ erreichen Sie uns unter",
    diagnosticLabel: "Technische Diagnose (Testphase):",
    fallback: "info@reltest-solutions.com",
  },
  en: {
    eyebrow: "Project inquiry",
    title: "Tell us briefly what you need.",
    intro:
      "A few key details help us route your inquiry to the right technical context. You do not need a finished specification.",
    response: "We usually respond personally within two business days.",
    audienceLegend: "You are contacting us as",
    audiences: {
      company: "Company",
      private: "Private individual",
      public: "University or public institution",
    },
    topic: "Subject",
    topicPlaceholder: "Please select",
    topics: {
      project: "Technical project inquiry",
      training: "On-site training",
      education: "RelTest Education / e-learning",
      literature: "Technical literature or speaking request",
      general: "General inquiry",
    },
    name: "Full name",
    company: "Company / organisation",
    companyOptional: "Optional for private individuals",
    email: "Email address",
    phone: "Phone",
    phoneOptional: "Optional",
    message: "What is your product, project or inquiry about?",
    messageHint:
      "Useful context includes the product or system, the decision ahead, the project phase and any existing data or tests.",
    privacyPrefix: "I have read the",
    privacyLink: "privacy policy",
    privacySuffix:
      "and understand that my details will be processed to handle this inquiry.",
    submit: "Send inquiry",
    submitting: "Sending inquiry …",
    successTitle: "Inquiry sent successfully",
    success:
      "Thank you. A confirmation has been sent to your email address. We usually respond personally within two business days.",
    partialSuccessTitle: "Inquiry received successfully",
    partialSuccess:
      "Your inquiry has reached RelTest, but the automated email confirmation could not be sent. We will still respond to you personally.",
    error:
      "Your inquiry could not be sent at the moment. Please try again or email us directly at",
    rateLimitError: "Several inquiries have already been sent. Please wait up to 15 minutes or email us directly at",
    validationError: "Please check your details and the required fields. Alternatively, email us at",
    diagnosticLabel: "Technical diagnosis (testing phase):",
    fallback: "info@reltest-solutions.com",
  },
} as const;

const diagnosticCopy = {
  de: {
    CONFIG_INVALID: "Mindestens eine Mail-Umgebungsvariable fehlt oder ist ungültig. Prüfen Sie die Variablen im richtigen Vercel-Projekt für Production und deployen Sie danach erneut.",
    INVALID_ORIGIN: "Die Anfrage wurde wegen einer abweichenden Website-Adresse abgewiesen. Prüfen Sie die aufgerufene Domain und eventuelle Weiterleitungen.",
    REQUEST_TOO_LARGE: "Die Anfrage überschreitet die zulässige Größe des Formulars.",
    SMTP_AUTH_DISABLED: "Microsoft 365 blockiert die SMTP-Anmeldung. Prüfen Sie SMTP AUTH für das Anmeldepostfach sowie Security Defaults beziehungsweise Richtlinien für Passwort-Anmeldung.",
    SMTP_AUTH_FAILED: "Microsoft 365 hat die SMTP-Anmeldung abgelehnt. Prüfen Sie SMTP_USER, SMTP_PASSWORD und die SMTP-Freigabe des Anmeldepostfachs.",
    SMTP_SEND_AS_DENIED: "Microsoft 365 erlaubt dem SMTP-Benutzer nicht, als die konfigurierte Absenderadresse zu senden. Prüfen Sie die Berechtigung „Senden als“ für diese Adresse.",
    SMTP_CONNECTION_FAILED: "Der SMTP-Server war nicht erreichbar oder die Verbindung ist abgelaufen. Prüfen Sie SMTP_HOST und SMTP_PORT; Details stehen in den Vercel-Runtime-Logs.",
    SMTP_TLS_FAILED: "Der sichere Verbindungsaufbau zum SMTP-Server ist gescheitert. Für Microsoft 365 auf Port 587 muss SMTP_SECURE auf false stehen.",
    EMAIL_ASSET_MISSING: "Die Logo-Datei für die Eingangsbestätigung wurde auf dem Server nicht gefunden.",
    MAIL_UNKNOWN: "Der Mailversand ist aus einem anderen Grund gescheitert. Die genaue Serverantwort steht in den Vercel-Runtime-Logs unter /api/contact.",
  },
  en: {
    CONFIG_INVALID: "At least one mail environment variable is missing or invalid. Check the Production variables in the correct Vercel project and redeploy.",
    INVALID_ORIGIN: "The request was rejected because the website address did not match. Check the domain and any redirects.",
    REQUEST_TOO_LARGE: "The inquiry exceeds the allowed form size.",
    SMTP_AUTH_DISABLED: "Microsoft 365 is blocking SMTP sign-in. Check SMTP AUTH for the login mailbox, Security Defaults, and policies for password authentication.",
    SMTP_AUTH_FAILED: "Microsoft 365 rejected the SMTP sign-in. Check SMTP_USER, SMTP_PASSWORD, and SMTP access for the login mailbox.",
    SMTP_SEND_AS_DENIED: "Microsoft 365 does not allow the SMTP user to send as the configured sender. Check the Send As permission for that address.",
    SMTP_CONNECTION_FAILED: "The SMTP server could not be reached or the connection timed out. Check SMTP_HOST and SMTP_PORT; details are in Vercel Runtime Logs.",
    SMTP_TLS_FAILED: "The secure SMTP connection failed. For Microsoft 365 on port 587, SMTP_SECURE must be false.",
    EMAIL_ASSET_MISSING: "The logo file for the confirmation email was not found on the server.",
    MAIL_UNKNOWN: "Email delivery failed for another reason. Check the exact server response in Vercel Runtime Logs under /api/contact.",
  },
} as const;

type DiagnosticCode = keyof typeof diagnosticCopy.de;

function readDiagnosticCode(value: unknown): DiagnosticCode | null {
  return typeof value === "string" && Object.hasOwn(diagnosticCopy.de, value)
    ? value as DiagnosticCode
    : null;
}

type TopicKey = keyof typeof formCopy.de.topics;
type SubmissionStatus =
  | "idle"
  | "submitting"
  | "success"
  | "partial-success"
  | "error";

const topicKeys = [
  "project",
  "training",
  "education",
  "literature",
  "general",
] as const satisfies readonly TopicKey[];

function isTopicKey(value: string | null): value is TopicKey {
  return value !== null && topicKeys.includes(value as TopicKey);
}

const fieldClassName =
  "mt-1.5 min-h-13 w-full border border-brand-marine/20 bg-white px-4 py-3 text-base text-brand-marine outline-none transition-colors placeholder:text-sm placeholder:text-brand-marine/30 focus:border-brand-steel-cyan focus:ring-2 focus:ring-brand-steel-cyan/15";

const pairedFieldLabelClassName =
  "flex h-full flex-col font-winnstein-display text-sm font-semibold";
const pairedFieldCaptionClassName = "block";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="M4 10h11m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="m4.5 10.2 3.3 3.3 7.7-7.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactInquiryForm({
  locale,
  initialTopic,
}: ContactInquiryFormProps) {
  const copy = formCopy[locale];
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [failureReason, setFailureReason] = useState<"error" | "rateLimitError" | "validationError">("error");
  const [diagnosticCode, setDiagnosticCode] = useState<DiagnosticCode | null>(null);
  const [audience, setAudience] = useState("company");
  const [selectedTopic, setSelectedTopic] = useState<"" | TopicKey>(
    initialTopic ?? "",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionStatus === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    setSubmissionStatus("submitting");
    setFailureReason("error");
    setDiagnosticCode(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audience: value("audience"),
          company: value("company"),
          email: value("email"),
          locale,
          message: value("message"),
          name: value("name"),
          phone: value("phone"),
          privacy: data.get("privacy") === "on",
          topic: value("topic"),
          website: value("website"),
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        confirmationSent?: boolean;
        diagnosticCode?: unknown;
      } | null;
      if (response.ok && !result) {
        throw new Error("Contact request returned no valid response");
      }
      setDiagnosticCode(readDiagnosticCode(result?.diagnosticCode));

      if (!response.ok) {
        setFailureReason(response.status === 429 ? "rateLimitError" : response.status === 400 ? "validationError" : "error");
        throw new Error(`Contact request failed with status ${response.status}`);
      }

      form.reset();
      setAudience("company");
      setSelectedTopic("");
      setSubmissionStatus(
        result?.confirmationSent === false ? "partial-success" : "success",
      );
    } catch {
      setSubmissionStatus("error");
    }
  }

  return (
    <section
      id="anfrageformular"
      className="scroll-mt-28 bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-brand-marine/15 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative overflow-hidden bg-brand-marine p-7 text-white sm:p-10 lg:p-12">
          <span className="absolute top-0 left-0 h-1.5 w-28 bg-brand-steel-cyan" />
          <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/74">
            {copy.intro}
          </p>
          <p className="mt-10 border-t border-white/18 pt-6 font-winnstein-display text-sm font-semibold leading-6 text-white/90">
            {copy.response}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-brand-steel-cyan-10 p-7 sm:p-10 lg:p-12">
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <fieldset>
            <legend className="font-winnstein-display text-sm font-bold text-brand-marine">
              {copy.audienceLegend}
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {(Object.keys(copy.audiences) as Array<keyof typeof copy.audiences>).map(
                (key) => (
                  <label
                    key={key}
                    className="flex min-h-14 cursor-pointer items-center gap-3 border border-brand-marine/18 bg-white px-4 py-3 text-sm font-semibold transition-colors has-[:checked]:border-brand-steel-cyan has-[:checked]:bg-brand-steel-cyan-10"
                  >
                    <input
                      type="radio"
                      name="audience"
                      value={key}
                      checked={audience === key}
                      onChange={() => setAudience(key)}
                      className="size-4 accent-brand-steel-cyan"
                    />
                    {copy.audiences[key]}
                  </label>
                ),
              )}
            </div>
          </fieldset>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className={pairedFieldLabelClassName}>
              <span className={pairedFieldCaptionClassName}>{copy.topic}</span>
              <select
                name="topic"
                required
                value={selectedTopic}
                onChange={(event) =>
                  setSelectedTopic(event.target.value as "" | TopicKey)
                }
                className={fieldClassName}
              >
                <option value="" disabled>
                  {copy.topicPlaceholder}
                </option>
                {(Object.keys(copy.topics) as Array<keyof typeof copy.topics>).map((key) => (
                  <option key={key} value={key}>
                    {copy.topics[key]}
                  </option>
                ))}
              </select>
            </label>

            <label className={pairedFieldLabelClassName}>
              <span className={pairedFieldCaptionClassName}>{copy.name}</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                minLength={2}
                maxLength={120}
                required
                className={fieldClassName}
              />
            </label>

            <label className={pairedFieldLabelClassName}>
              <span className={pairedFieldCaptionClassName}>{copy.company}</span>
              <input
                name="company"
                type="text"
                autoComplete="organization"
                required={audience !== "private"}
                maxLength={160}
                placeholder={copy.companyOptional}
                className={fieldClassName}
              />
            </label>

            <label className={pairedFieldLabelClassName}>
              <span className={pairedFieldCaptionClassName}>{copy.email}</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                className={fieldClassName}
              />
            </label>

            <label className="font-winnstein-display text-sm font-semibold sm:col-span-2">
              {copy.phone}
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={60}
                placeholder={copy.phoneOptional}
                className={fieldClassName}
              />
            </label>

            <label className="font-winnstein-display text-sm font-semibold sm:col-span-2">
              {copy.message}
              <textarea
                name="message"
                required
                minLength={20}
                maxLength={5000}
                rows={7}
                placeholder={copy.messageHint}
                className={`${fieldClassName} resize-y`}
              />
            </label>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-brand-marine/72">
            <input
              type="checkbox"
              name="privacy"
              required
              className="mt-1 size-4 shrink-0 accent-brand-steel-cyan"
            />
            <span>
              {copy.privacyPrefix}{" "}
              <Link
                href={localizeHref(locale, "/datenschutz")}
                className="font-semibold text-brand-marine underline decoration-brand-steel-cyan underline-offset-4"
              >
                {copy.privacyLink}
              </Link>{" "}
              {copy.privacySuffix}
            </span>
          </label>

          <div className="mt-8">
            <button
              type="submit"
              disabled={submissionStatus === "submitting"}
              aria-busy={submissionStatus === "submitting"}
              className="brand-action inline-flex min-h-12 shrink-0 items-center justify-between gap-5 whitespace-nowrap bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-steel-cyan/25 disabled:cursor-wait disabled:opacity-65 hover:text-brand-marine"
            >
              {submissionStatus === "submitting" ? copy.submitting : copy.submit}
              <ArrowIcon />
            </button>
          </div>

          {submissionStatus === "success" ||
          submissionStatus === "partial-success" ? (
            <div
              className={`mt-6 flex items-start gap-4 border border-l-4 px-4 py-4 text-brand-marine shadow-[0_10px_28px_rgba(3,19,52,0.08)] sm:px-5 ${
                submissionStatus === "success"
                  ? "border-brand-education/35 bg-brand-education/[0.08]"
                  : "border-brand-steel-cyan/45 bg-brand-steel-cyan-10"
              }`}
              role="status"
              aria-live="polite"
            >
              <span
                className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-white ${
                  submissionStatus === "success"
                    ? "bg-brand-education"
                    : "bg-brand-steel-cyan"
                }`}
              >
                <SuccessIcon />
              </span>
              <span>
                <strong className="block font-winnstein-display text-base leading-6">
                  {submissionStatus === "success"
                    ? copy.successTitle
                    : copy.partialSuccessTitle}
                </strong>
                <span className="mt-1 block text-sm leading-6 text-brand-marine/76">
                  {submissionStatus === "success"
                    ? copy.success
                    : copy.partialSuccess}
                </span>
                {submissionStatus === "partial-success" && diagnosticCode ? (
                  <span className="mt-2 block text-sm leading-6 text-brand-marine/76">
                    <strong>{copy.diagnosticLabel}</strong> {diagnosticCopy[locale][diagnosticCode]} ({diagnosticCode})
                  </span>
                ) : null}
              </span>
            </div>
          ) : null}

          {submissionStatus === "error" ? (
            <p
              className="mt-5 border-l-2 border-red-600 pl-4 text-sm leading-6 text-brand-marine"
              role="alert"
            >
              {copy[failureReason]}{" "}
              <a
                href="mailto:info@reltest-solutions.com"
                className="font-semibold underline decoration-brand-steel-cyan underline-offset-4"
              >
                {copy.fallback}
              </a>
              .
              {diagnosticCode ? (
                <span className="mt-2 block">
                  <strong>{copy.diagnosticLabel}</strong> {diagnosticCopy[locale][diagnosticCode]} ({diagnosticCode})
                </span>
              ) : null}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export function ContactInquiryFormFromQuery({
  locale,
}: ContactInquiryFormProps) {
  const searchParams = useSearchParams();
  const requestedTopic = searchParams.get("topic");

  return (
    <ContactInquiryForm
      locale={locale}
      initialTopic={isTopicKey(requestedTopic) ? requestedTopic : undefined}
    />
  );
}
