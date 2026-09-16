type ConfirmationEmailInput = {
  locale: "de" | "en";
  name: string;
  topic: string;
};

const websiteUrl = "https://reltest-solutions.com";
const contactPhone = "+49 711 25253531";
const contactPhoneHref = "tel:+4971125253531";

const confirmationCopy = {
  de: {
    subject: "Ihre Anfrage bei RelTest Solutions ist eingegangen",
    preheader:
      "Wir haben Ihre Anfrage erhalten und melden uns in der Regel innerhalb von zwei Werktagen.",
    eyebrow: "Eingangsbestätigung",
    title: "Vielen Dank für Ihre Anfrage.",
    greeting: "Guten Tag",
    intro:
      "Wir haben Ihre Nachricht erhalten. Vielen Dank für Ihr Interesse an RelTest Solutions und das Vertrauen in unser Team.",
    topicLabel: "Ihr Anliegen",
    responseTitle: "So geht es weiter",
    response:
      "Wir prüfen Ihr Anliegen und melden uns in der Regel innerhalb von zwei Werktagen persönlich bei Ihnen.",
    reply:
      "Wenn Sie noch Informationen ergänzen möchten, antworten Sie einfach direkt auf diese E-Mail.",
    closing: "Freundliche Grüße",
    team: "Ihr Team von RelTest Solutions",
    website: "RelTest-Website öffnen",
    phone: "Telefon",
    automated:
      "Diese E-Mail wurde automatisch als Bestätigung Ihrer Anfrage versendet.",
  },
  en: {
    subject: "We have received your inquiry to RelTest Solutions",
    preheader:
      "We have received your inquiry and usually respond within two business days.",
    eyebrow: "Inquiry confirmation",
    title: "Thank you for your inquiry.",
    greeting: "Hello",
    intro:
      "We have received your message. Thank you for your interest in RelTest Solutions and for placing your trust in our team.",
    topicLabel: "Your inquiry",
    responseTitle: "What happens next",
    response:
      "We will review your inquiry and usually respond personally within two business days.",
    reply:
      "If you would like to add further information, simply reply directly to this email.",
    closing: "Kind regards",
    team: "Your RelTest Solutions team",
    website: "Visit the RelTest website",
    phone: "Phone",
    automated:
      "This email was sent automatically to confirm receipt of your inquiry.",
  },
} as const;

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

export function createConfirmationEmail({
  locale,
  name,
  topic,
}: ConfirmationEmailInput) {
  const copy = confirmationCopy[locale];
  const safeName = escapeHtml(name);
  const safeTopic = escapeHtml(topic);

  const text = [
    `${copy.greeting} ${name},`,
    "",
    copy.intro,
    "",
    `${copy.topicLabel}: ${topic}`,
    "",
    `${copy.responseTitle}:`,
    copy.response,
    "",
    copy.reply,
    "",
    copy.closing,
    copy.team,
    "",
    "RelTest Solutions GmbH",
    "Steglen 26, 71083 Herrenberg",
    `${copy.phone}: ${contactPhone}`,
    "info@reltest-solutions.com",
    websiteUrl,
    "",
    copy.automated,
  ].join("\n");

  const html = `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <title>${copy.subject}</title>
    <style>
      #reltest-confirmation table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
      #reltest-confirmation td { font-family:Arial,Helvetica,sans-serif; }
      @media only screen and (max-width:480px) {
        #reltest-confirmation .email-outer { padding:12px 8px !important; }
        #reltest-confirmation .email-padding { padding-left:20px !important; padding-right:20px !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#EAF5FB;color:#142452;font-family:Arial,Helvetica,sans-serif;">
    <div id="reltest-confirmation" lang="${locale}" style="color-scheme:light;font-family:Arial,Helvetica,sans-serif;text-align:left;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">${copy.preheader}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#EAF5FB;">
      <tr>
        <td class="email-outer" align="center" style="padding:24px 12px;">
          <!--[if mso]><table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0"><tr><td><![endif]-->
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;table-layout:fixed;background:#FFFFFF;border:1px solid #D0D3DC;">
            <tr>
              <td class="email-padding" style="padding:18px 32px;background:#FFFFFF;">
                <img src="cid:reltest-logo" width="190" height="79" alt="RelTest" style="display:block;width:190px;max-width:100%;height:auto;border:0;">
              </td>
            </tr>
            <tr>
              <td class="email-padding" style="padding:28px 32px 30px;background:#142452;">
                <p style="margin:0 0 10px;color:#D5ECF7;font-size:14px;line-height:22px;font-weight:400;">${copy.eyebrow}</p>
                <h1 style="margin:0;color:#FFFFFF;font-size:28px;line-height:36px;font-weight:700;">${copy.title}</h1>
              </td>
            </tr>
            <tr>
              <td height="4" style="height:4px;background:#2EA1CF;font-size:0;line-height:0;mso-line-height-rule:exactly;">&nbsp;</td>
            </tr>
            <tr>
              <td class="email-padding" style="padding:28px 32px 0;overflow-wrap:anywhere;word-wrap:break-word;">
                <p style="margin:0 0 16px;color:#142452;font-size:16px;line-height:26px;font-weight:400;">${copy.greeting} ${safeName},</p>
                <p style="margin:0;color:#435075;font-size:16px;line-height:26px;">${copy.intro}</p>
              </td>
            </tr>
            <tr>
              <td class="email-padding" style="padding:24px 32px 0;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;background:#EAF5FB;border-left:3px solid #2EA1CF;">
                  <tr>
                    <td style="padding:16px 20px;overflow-wrap:anywhere;word-wrap:break-word;">
                      <p style="margin:0 0 4px;color:#435075;font-size:14px;line-height:22px;">${copy.topicLabel}</p>
                      <p style="margin:0;color:#142452;font-size:16px;line-height:26px;font-weight:700;">${safeTopic}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="email-padding" style="padding:24px 32px 0;">
                <h2 style="margin:0 0 8px;color:#142452;font-size:16px;line-height:26px;font-weight:700;">${copy.responseTitle}</h2>
                <p style="margin:0;color:#435075;font-size:16px;line-height:26px;">${copy.response}</p>
                <p style="margin:16px 0 0;color:#435075;font-size:16px;line-height:26px;">${copy.reply}</p>
              </td>
            </tr>
            <tr>
              <td class="email-padding" style="padding:24px 32px 28px;">
                <p style="margin:0;color:#435075;font-size:16px;line-height:26px;">${copy.closing}<br><strong style="color:#142452;">${copy.team}</strong></p>
              </td>
            </tr>
            <tr>
              <td class="email-padding" style="padding:24px 32px;background:#E7E9EE;border-top:1px solid #D0D3DC;overflow-wrap:anywhere;word-wrap:break-word;">
                <p style="margin:0 0 8px;color:#142452;font-size:14px;line-height:22px;font-weight:700;">RelTest Solutions GmbH</p>
                <p style="margin:0 0 12px;color:#435075;font-size:14px;line-height:22px;">Steglen 26 · 71083 Herrenberg<br>${copy.phone}: <a href="${contactPhoneHref}" style="color:#142452;text-decoration:underline;">${contactPhone}</a><br><a href="mailto:info@reltest-solutions.com" style="color:#142452;text-decoration:underline;">info@reltest-solutions.com</a></p>
                <p style="margin:0 0 16px;font-size:14px;line-height:22px;"><a href="${websiteUrl}" style="color:#142452;text-decoration:underline;">${copy.website}</a></p>
                <p style="margin:0;color:#435075;font-size:14px;line-height:22px;">${copy.automated}</p>
              </td>
            </tr>
          </table>
          <!--[if mso]></td></tr></table><![endif]-->
        </td>
      </tr>
    </table>
    </div>
  </body>
</html>`;

  return {
    html,
    subject: copy.subject,
    text,
  };
}
