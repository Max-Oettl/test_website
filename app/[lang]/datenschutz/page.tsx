import Link from "next/link";

import { LegalDocumentPage, type LegalSection } from "../../_components/legal-document-page";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const linkClassName =
  "font-semibold text-brand-marine underline decoration-brand-steel-cyan underline-offset-4 transition-colors hover:text-brand-steel-cyan";
const listClassName = "list-disc space-y-2 pl-5 marker:text-brand-steel-cyan";

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);

  return buildLocalizedMetadata({
    locale,
    path: "/datenschutz",
    title:
      locale === "de"
        ? "Datenschutzerklärung | RelTest Solutions GmbH"
        : "Privacy policy | RelTest Solutions GmbH",
    description:
      locale === "de"
        ? "Datenschutzerklärung der RelTest Solutions GmbH zu Websitebesuch, Kontaktaufnahme, Terminbuchung mit Calendly und Betroffenenrechten."
        : "Privacy policy of RelTest Solutions GmbH covering website visits, contact requests, Calendly scheduling and data subject rights.",
  });
}

function GermanSections(locale: Locale): LegalSection[] {
  return [
    {
      id: "ueberblick",
      title: "Datenschutz auf einen Blick",
      content: (
        <div className="space-y-5">
          <p>
            Die folgenden Hinweise erläutern, welche personenbezogenen Daten beim Besuch dieser Website und bei einer Kontaktaufnahme verarbeitet werden. Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich identifiziert werden können.
          </p>
          <div>
            <h3 className="font-winnstein-display font-bold text-brand-marine">Wie werden Daten erfasst?</h3>
            <p className="mt-2">
              Daten werden erhoben, wenn Sie uns diese mitteilen, etwa per E-Mail, Telefon, vorbereitetem Anfrageformular oder bei einer Terminbuchung. Daneben fallen beim Aufruf der Website technisch notwendige Verbindungsdaten an.
            </p>
          </div>
          <div>
            <h3 className="font-winnstein-display font-bold text-brand-marine">Wofür werden Daten genutzt?</h3>
            <p className="mt-2">
              Wir verarbeiten Daten zur sicheren Bereitstellung der Website, zur Bearbeitung von Anfragen, zur Vorbereitung oder Durchführung von Verträgen und – sofern Sie dies nutzen – zur Organisation eines Gesprächstermins.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "verantwortlicher",
      title: "Verantwortlicher",
      content: (
        <address className="not-italic">
          <strong className="font-winnstein-display text-brand-marine">RelTest Solutions GmbH</strong>
          <br />
          Steglen 26
          <br />
          71083 Herrenberg
          <br />
          Deutschland
          <br />
          <br />
          Telefon: {" "}
          <a className={linkClassName} href="tel:+4971125253531">
            +49 711 25253531
          </a>
          <br />
          E-Mail: {" "}
          <a className={linkClassName} href="mailto:info@reltest-solutions.com">
            info@reltest-solutions.com
          </a>
          <br />
          <br />
          Weitere Unternehmensangaben finden Sie im {" "}
          <Link className={linkClassName} href={localizeHref(locale, "/impressum")}>
            Impressum
          </Link>
          .
        </address>
      ),
    },
    {
      id: "hosting",
      title: "Hosting und technische Bereitstellung",
      content: (
        <div className="space-y-5">
          <p>
            Diese Website wird über einen externen Hostingdienstleister bereitgestellt. Der Hoster verarbeitet Daten nur, soweit dies zur Erfüllung seiner Leistungspflichten und zur sicheren, schnellen und stabilen Auslieferung der Website erforderlich ist. Soweit erforderlich, erfolgt die Verarbeitung auf Grundlage eines Vertrags über Auftragsverarbeitung.
          </p>
          <p>
            Beim Aufruf der Website können insbesondere IP-Adresse, Zeitpunkt und Dauer des Zugriffs, aufgerufene URL, Referrer-URL, Browsertyp, Betriebssystem, Geräteinformationen und HTTP-Status in Server-Logdateien verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der technischen Funktionsfähigkeit, IT-Sicherheit und Fehleranalyse. Logdaten werden gelöscht, sobald sie für diese Zwecke nicht mehr benötigt werden, sofern keine gesetzlichen Aufbewahrungspflichten oder konkrete Sicherheitsvorfälle entgegenstehen.
          </p>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "Cookies und Spracheinstellung",
      content: (
        <div className="space-y-5">
          <p>
            Die Website verwendet ein technisch notwendiges Cookie mit dem Namen <code className="bg-brand-steel-cyan-10 px-1.5 py-0.5 text-sm text-brand-marine">NEXT_LOCALE</code>. Es speichert Ihre gewählte Sprache für bis zu zwölf Monate und ermöglicht die Weiterleitung auf die passende Sprachversion. Das Cookie ist als HttpOnly und SameSite=Lax gesetzt und wird in der Produktionsumgebung nur über eine verschlüsselte Verbindung übertragen.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse besteht in einer konsistenten und nutzerfreundlichen Sprachwahl. Weitere Cookies können durch Calendly gesetzt oder ausgelesen werden, wenn der eingebettete Buchungsbereich geladen wird. Einzelheiten finden Sie im Abschnitt zur Terminbuchung.
          </p>
        </div>
      ),
    },
    {
      id: "kontakt",
      title: "Kontaktformular, E-Mail und Telefon",
      content: (
        <div className="space-y-5">
          <p>
            Das sichtbare Anfrageformular bereitet derzeit auf Ihrem Gerät eine E-Mail an RelTest Solutions vor. Die eingegebenen Angaben werden nicht über einen eigenen Formularserver der Website versendet. Beim Absenden öffnet sich Ihr E-Mail-Programm; erst mit dem dortigen Versand werden Name, Kontaktdaten, Organisation, Anliegen und Nachricht per E-Mail an uns übermittelt.
          </p>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage und für Anschlussfragen. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage der Vertragsanbahnung oder Vertragsdurchführung dient. In anderen Fällen beruht sie auf Art. 6 Abs. 1 lit. f DSGVO, wobei unser berechtigtes Interesse in der sachgerechten Bearbeitung Ihrer Anfrage liegt, oder auf Art. 6 Abs. 1 lit. a DSGVO, sofern eine Einwilligung eingeholt wurde.
          </p>
          <p>
            Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungsfristen, vertraglichen Pflichten oder berechtigten Interessen an einer weiteren Speicherung bestehen.
          </p>
        </div>
      ),
    },
    {
      id: "calendly",
      title: "Terminbuchung mit Calendly",
      content: (
        <div className="space-y-5">
          <p>
            Auf der Kontaktseite ist der Terminbuchungsdienst Calendly eingebunden. Anbieter ist Calendly LLC, 115 E Main St., Ste A1B, Buford, GA 30518, USA. Wenn der Buchungsbereich angezeigt wird, stellt Ihr Browser eine Verbindung zu Calendly her. Dabei können insbesondere IP-Adresse, Browser- und Geräteinformationen, Zeitpunkt und aufgerufene Seite an Calendly übermittelt sowie Cookies oder vergleichbare Technologien eingesetzt werden.
          </p>
          <p>
            Wenn Sie einen Termin buchen, verarbeitet Calendly die von Ihnen eingegebenen Angaben, etwa Name, E-Mail-Adresse, Termin, Zeitzone und freiwillige Mitteilungen, um die Buchung durchzuführen und Bestätigungen zu versenden. Die Verarbeitung der Buchungsdaten erfolgt zur Durchführung vorvertraglicher Maßnahmen beziehungsweise zur Vertragserfüllung gemäß Art. 6 Abs. 1 lit. b DSGVO. Soweit für das Laden des eingebetteten Dienstes eine Einwilligung erforderlich ist, ist Art. 6 Abs. 1 lit. a DSGVO maßgeblich.
          </p>
          <p>
            Eine Verarbeitung in den USA oder in weiteren Drittländern ist möglich. Calendly verweist für Datenübermittlungen unter anderem auf das EU-US Data Privacy Framework und Standardvertragsklauseln. Weitere Informationen finden Sie in der {" "}
            <a
              className={linkClassName}
              href="https://calendly.com/legal/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung von Calendly
            </a>
            . Alternativ können Sie die Kontaktwege per E-Mail oder Telefon nutzen.
          </p>
        </div>
      ),
    },
    {
      id: "analyse",
      title: "Webanalyse und Marketing-Tracking",
      content: (
        <p>
          In der derzeitigen Fassung der neuen Website werden keine Dienste wie Google Analytics, Google Tag Manager oder Matomo und keine Werbe- oder Profiling-Tracker eingesetzt. Sollte sich dies ändern, wird diese Datenschutzerklärung vor der Aktivierung angepasst und – soweit erforderlich – eine Einwilligung eingeholt.
        </p>
      ),
    },
    {
      id: "externe-links",
      title: "Externe Links und Medienangebote",
      content: (
        <div className="space-y-5">
          <p>
            Die Website enthält normale Links zu externen Angeboten, beispielsweise RelTest Education, Springer, LinkedIn oder Podcast-Plattformen. Beim bloßen Besuch dieser Website werden über solche Links keine Daten an den jeweiligen Anbieter übertragen. Erst wenn Sie einen externen Link öffnen, gelten die Datenschutzbestimmungen des Zielanbieters.
          </p>
          <p>
            Externe Videos, Social-Media-Feeds oder Karten werden in der derzeitigen Website nicht automatisch als aktive Drittanbieter-Widgets geladen.
          </p>
        </div>
      ),
    },
    {
      id: "schriften",
      title: "Schriftarten",
      content: (
        <p>
          Die auf dieser Website verwendeten Web-Schriftarten werden durch die Website selbst ausgeliefert. Beim Seitenaufruf wird keine Verbindung zu Google Fonts oder Adobe Fonts aufgebaut.
        </p>
      ),
    },
    {
      id: "rechte",
      title: "Ihre Datenschutzrechte",
      content: (
        <div className="space-y-5">
          <p>Im Rahmen der gesetzlichen Voraussetzungen haben Sie insbesondere folgende Rechte:</p>
          <ul className={listClassName}>
            <li>Auskunft über die von uns verarbeiteten personenbezogenen Daten,</li>
            <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten,</li>
            <li>Löschung Ihrer Daten, soweit keine gesetzlichen Gründe entgegenstehen,</li>
            <li>Einschränkung der Verarbeitung,</li>
            <li>Datenübertragbarkeit bei automatisierter Verarbeitung auf Grundlage einer Einwilligung oder eines Vertrags,</li>
            <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft,</li>
            <li>Widerspruch gegen eine Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO aus Gründen, die sich aus Ihrer besonderen Situation ergeben.</li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte genügt eine Nachricht an {" "}
            <a className={linkClassName} href="mailto:info@reltest-solutions.com">
              info@reltest-solutions.com
            </a>
            . Die Rechtmäßigkeit der Verarbeitung bis zu einem Widerruf bleibt unberührt.
          </p>
        </div>
      ),
    },
    {
      id: "beschwerde",
      title: "Beschwerderecht und Widerspruch",
      content: (
        <div className="space-y-5">
          <p>
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist insbesondere die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
          </p>
          <p className="border-l-2 border-brand-steel-cyan pl-5 font-semibold text-brand-marine">
            Werden Daten auf Grundlage berechtigter Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch einlegen. Wir verarbeiten die betroffenen Daten dann nicht weiter, es sei denn, zwingende schutzwürdige Gründe oder die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen rechtfertigen die weitere Verarbeitung.
          </p>
        </div>
      ),
    },
    {
      id: "sicherheit",
      title: "SSL-/TLS-Verschlüsselung und Datensicherheit",
      content: (
        <div className="space-y-5">
          <p>
            Diese Website nutzt eine SSL-/TLS-Verschlüsselung. Dadurch können Daten, die Sie an die Website übermitteln, während der Übertragung grundsätzlich nicht von Dritten mitgelesen werden.
          </p>
          <p>
            Eine Datenübertragung im Internet, insbesondere per E-Mail, kann dennoch Sicherheitslücken aufweisen. Ein lückenloser Schutz vor dem Zugriff Dritter ist technisch nicht möglich.
          </p>
        </div>
      ),
    },
    {
      id: "aktualisierung",
      title: "Aktualisierung dieser Datenschutzerklärung",
      content: (
        <p>
          Wir passen diese Datenschutzerklärung an, wenn sich Funktionen, eingesetzte Dienstleister oder rechtliche Anforderungen ändern. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.
        </p>
      ),
    },
  ];
}

function EnglishSections(locale: Locale): LegalSection[] {
  return [
    {
      id: "overview",
      title: "Privacy at a glance",
      content: (
        <div className="space-y-5">
          <p>
            This notice explains which personal data is processed when you visit this website or contact us. Personal data is any information that can be used to identify you personally.
          </p>
          <div>
            <h3 className="font-winnstein-display font-bold text-brand-marine">How is data collected?</h3>
            <p className="mt-2">
              Data is collected when you provide it to us, for example by email, phone, the inquiry form prepared in your email application or a scheduling request. Technical connection data is also generated when the website is accessed.
            </p>
          </div>
          <div>
            <h3 className="font-winnstein-display font-bold text-brand-marine">How is data used?</h3>
            <p className="mt-2">
              We process data to provide the website securely, answer inquiries, prepare or perform contracts and, if you choose this option, organise a meeting.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "controller",
      title: "Controller",
      content: (
        <address className="not-italic">
          <strong className="font-winnstein-display text-brand-marine">RelTest Solutions GmbH</strong>
          <br />
          Steglen 26
          <br />
          71083 Herrenberg
          <br />
          Germany
          <br />
          <br />
          Phone: {" "}
          <a className={linkClassName} href="tel:+4971125253531">
            +49 711 25253531
          </a>
          <br />
          Email: {" "}
          <a className={linkClassName} href="mailto:info@reltest-solutions.com">
            info@reltest-solutions.com
          </a>
          <br />
          <br />
          Further company details are available in the {" "}
          <Link className={linkClassName} href={localizeHref(locale, "/impressum")}>
            legal notice
          </Link>
          .
        </address>
      ),
    },
    {
      id: "hosting",
      title: "Hosting and technical delivery",
      content: (
        <div className="space-y-5">
          <p>
            This website is delivered through an external hosting provider. The provider processes data only as necessary to perform its services and to deliver the website securely, quickly and reliably. Where required, processing is governed by a data processing agreement.
          </p>
          <p>
            When the website is accessed, server logs may process the IP address, access time and duration, requested URL, referrer URL, browser type, operating system, device information and HTTP status. The legal basis is Article 6(1)(f) GDPR. Our legitimate interests are technical operation, IT security and error analysis. Log data is deleted when no longer required for these purposes, unless statutory retention duties or a specific security incident require longer storage.
          </p>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "Cookies and language preference",
      content: (
        <div className="space-y-5">
          <p>
            The website uses a technically necessary cookie called <code className="bg-brand-steel-cyan-10 px-1.5 py-0.5 text-sm text-brand-marine">NEXT_LOCALE</code>. It stores your selected language for up to twelve months and allows the site to direct you to the appropriate language version. The cookie is set as HttpOnly and SameSite=Lax and, in production, is transmitted only over an encrypted connection.
          </p>
          <p>
            The legal basis is Article 6(1)(f) GDPR; our legitimate interest is a consistent and user-friendly language selection. Calendly may set or read additional cookies when its embedded scheduling area is loaded. Details are provided in the scheduling section.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Inquiry form, email and phone",
      content: (
        <div className="space-y-5">
          <p>
            The inquiry form currently prepares an email to RelTest Solutions on your device. The information entered is not submitted through a form server operated by this website. Submitting the form opens your email application; your name, contact details, organisation, subject and message are transferred to us only when you send that email.
          </p>
          <p>
            If you contact us by email or phone, we process your information to respond and manage follow-up questions. Processing is based on Article 6(1)(b) GDPR where the inquiry concerns pre-contractual steps or performance of a contract. In other cases, it is based on Article 6(1)(f) GDPR and our legitimate interest in handling inquiries effectively, or on Article 6(1)(a) GDPR where consent has been requested.
          </p>
          <p>
            Data is deleted when the processing purpose no longer applies and no statutory retention period, contractual duty or legitimate interest requires further storage.
          </p>
        </div>
      ),
    },
    {
      id: "calendly",
      title: "Scheduling with Calendly",
      content: (
        <div className="space-y-5">
          <p>
            The contact page embeds the Calendly scheduling service. The provider is Calendly LLC, 115 E Main St., Ste A1B, Buford, GA 30518, USA. When the scheduling area is displayed, your browser establishes a connection to Calendly. This may transmit your IP address, browser and device information, access time and page URL and may involve cookies or similar technologies.
          </p>
          <p>
            When you schedule a meeting, Calendly processes the details you provide, such as your name, email address, chosen time, time zone and optional message, to arrange the meeting and send confirmations. Booking data is processed to take pre-contractual steps or perform a contract under Article 6(1)(b) GDPR. Where consent is required to load the embedded service, Article 6(1)(a) GDPR applies.
          </p>
          <p>
            Data may be processed in the United States or other third countries. Calendly refers to the EU-US Data Privacy Framework and Standard Contractual Clauses for international transfers. Further information is available in {" "}
            <a
              className={linkClassName}
              href="https://calendly.com/legal/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendly&apos;s privacy notice
            </a>
            . You can alternatively contact us by email or phone.
          </p>
        </div>
      ),
    },
    {
      id: "analytics",
      title: "Analytics and marketing tracking",
      content: (
        <p>
          The current version of the new website does not use Google Analytics, Google Tag Manager, Matomo, advertising trackers or profiling trackers. If this changes, this privacy policy will be updated before activation and consent will be requested where required.
        </p>
      ),
    },
    {
      id: "external-links",
      title: "External links and media services",
      content: (
        <div className="space-y-5">
          <p>
            The website contains ordinary links to external services such as RelTest Education, Springer, LinkedIn and podcast platforms. Simply visiting this website does not transfer data through those links. Once you open an external link, the privacy policy of the destination provider applies.
          </p>
          <p>
            External videos, social feeds and maps are not automatically loaded as active third-party widgets in the current website.
          </p>
        </div>
      ),
    },
    {
      id: "fonts",
      title: "Fonts",
      content: (
        <p>
          Web fonts used by this website are delivered by the website itself. Visiting a page does not establish a connection to Google Fonts or Adobe Fonts.
        </p>
      ),
    },
    {
      id: "rights",
      title: "Your data protection rights",
      content: (
        <div className="space-y-5">
          <p>Subject to the statutory requirements, you have the following rights in particular:</p>
          <ul className={listClassName}>
            <li>access to your personal data processed by us,</li>
            <li>rectification of inaccurate data and completion of incomplete data,</li>
            <li>erasure where no statutory reason prevents deletion,</li>
            <li>restriction of processing,</li>
            <li>data portability for automated processing based on consent or a contract,</li>
            <li>withdrawal of consent with effect for the future,</li>
            <li>objection to processing based on Article 6(1)(e) or (f) GDPR for reasons arising from your particular situation.</li>
          </ul>
          <p>
            To exercise your rights, email {" "}
            <a className={linkClassName} href="mailto:info@reltest-solutions.com">
              info@reltest-solutions.com
            </a>
            . Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.
          </p>
        </div>
      ),
    },
    {
      id: "complaints",
      title: "Right to lodge a complaint and object",
      content: (
        <div className="space-y-5">
          <p>
            You have the right to lodge a complaint with a data protection supervisory authority, in particular in the member state of your habitual residence, place of work or the location of the alleged infringement.
          </p>
          <p className="border-l-2 border-brand-steel-cyan pl-5 font-semibold text-brand-marine">
            Where data is processed on the basis of legitimate interests under Article 6(1)(f) GDPR, you may object at any time for reasons arising from your particular situation. We will then cease processing unless compelling legitimate grounds or the establishment, exercise or defence of legal claims justify continued processing.
          </p>
        </div>
      ),
    },
    {
      id: "security",
      title: "SSL/TLS encryption and data security",
      content: (
        <div className="space-y-5">
          <p>
            This website uses SSL/TLS encryption. As a result, data transmitted to the website generally cannot be read by third parties while in transit.
          </p>
          <p>
            Data transmission over the internet, particularly by email, may nevertheless have security vulnerabilities. Complete protection against access by third parties is not technically possible.
          </p>
        </div>
      ),
    },
    {
      id: "updates",
      title: "Updates to this privacy policy",
      content: (
        <p>
          We update this privacy policy when website functions, service providers or legal requirements change. The version published on this page at the relevant time applies.
        </p>
      ),
    },
  ];
}

export default async function PrivacyPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const isGerman = locale === "de";

  return (
    <LegalDocumentPage
      eyebrow={isGerman ? "Datenschutz" : "Privacy"}
      title={isGerman ? "Datenschutzerklärung" : "Privacy policy"}
      description={
        isGerman
          ? "Informationen zur Verarbeitung personenbezogener Daten beim Besuch der RelTest-Website, bei Kontaktanfragen und bei der Terminbuchung."
          : "Information about how personal data is processed when you visit the RelTest website, submit an inquiry or schedule a meeting."
      }
      navigationLabel={isGerman ? "Inhalt" : "Contents"}
      updatedLabel={isGerman ? "Stand" : "Last updated"}
      updated={isGerman ? "18. August 2026" : "18 August 2026"}
      sections={isGerman ? GermanSections(locale) : EnglishSections(locale)}
    />
  );
}
