import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import nodemailer from "nodemailer";
import ts from "typescript";

// Generate previews from the production template. No SMTP connection or .env access.
const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const templateSource = await readFile(
  join(projectRoot, "app/api/contact/confirmation-email.ts"),
  "utf8",
);
const { outputText } = ts.transpileModule(templateSource, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { createConfirmationEmail } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);
const logo = await readFile(
  join(projectRoot, "public/branding/reltest-email-logo.png"),
);
const logoDataUrl = `data:image/png;base64,${logo.toString("base64")}`;
const outputDirectory = await mkdtemp(join(tmpdir(), "reltest-contact-email-"));
const transport = nodemailer.createTransport({ streamTransport: true, buffer: true });

for (const locale of ["de", "en"]) {
  const email = createConfirmationEmail({
    locale,
    name: "Max Mustermann",
    topic: locale === "de" ? "Technische Projektanfrage" : "Technical project inquiry",
  });
  const browserHtml = email.html.replace("cid:reltest-logo", logoDataUrl);
  const style = browserHtml.match(/<style>[\s\S]*?<\/style>/)?.[0];
  const body = browserHtml.match(/<body\b[^>]*>([\s\S]*?)<\/body>/)?.[1];
  if (!style || !body) throw new Error("Email template styles or body not found");

  // Preserve the actual styles and markup in the in-conversation preview.
  const fragment = [style, body.trim(), ""].join("\n");
  const message = await transport.sendMail({
    from: { name: "RelTest Solutions", address: "info@reltest-solutions.com" },
    to: { name: "Max Mustermann", address: "max.mustermann@example.com" },
    replyTo: { name: "RelTest Solutions", address: "info@reltest-solutions.com" },
    subject: email.subject,
    text: email.text,
    html: email.html,
    attachments: [{
      filename: "reltest-logo.png",
      content: logo,
      cid: "reltest-logo",
      contentDisposition: "inline",
      contentType: "image/png",
    }],
    headers: {
      "Auto-Submitted": "auto-generated",
      "X-Auto-Response-Suppress": "All",
    },
  });
  await Promise.all([
    writeFile(join(outputDirectory, `reltest-email-${locale}.html`), browserHtml),
    writeFile(join(outputDirectory, `reltest-email-${locale}-preview.html`), fragment),
    writeFile(join(outputDirectory, `reltest-email-${locale}.eml`), message.message),
  ]);
}

console.log(`E-Mail-Vorschau (DE/EN): ${outputDirectory}`);
console.log("Nur lokale Beispieldaten. Es wurde keine E-Mail versendet.");
