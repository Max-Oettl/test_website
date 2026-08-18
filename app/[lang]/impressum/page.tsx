import { LegalDocumentPage, type LegalSection } from "../../_components/legal-document-page";
import { resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const linkClassName =
  "font-semibold text-brand-marine underline decoration-brand-steel-cyan underline-offset-4 transition-colors hover:text-brand-steel-cyan";

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);

  return buildLocalizedMetadata({
    locale,
    path: "/impressum",
    title:
      locale === "de"
        ? "Impressum | RelTest Solutions GmbH"
        : "Legal notice | RelTest Solutions GmbH",
    description:
      locale === "de"
        ? "Impressum und Anbieterkennzeichnung der RelTest Solutions GmbH mit Kontakt-, Register- und Vertretungsangaben."
        : "Legal notice and provider information for RelTest Solutions GmbH, including contact, company register and representation details.",
  });
}

function GermanSections(): LegalSection[] {
  return [
    {
      id: "anbieter",
      title: "Anbieter und Kontakt",
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
        </address>
      ),
    },
    {
      id: "vertretung-register",
      title: "Vertretung und Register",
      content: (
        <div className="space-y-3">
          <p>
            <strong className="text-brand-marine">Geschäftsführer:</strong> Dr.-Ing. Kevin Lucan
          </p>
          <p>
            <strong className="text-brand-marine">Registergericht:</strong> Amtsgericht Stuttgart
            <br />
            <strong className="text-brand-marine">Handelsregisternummer:</strong> HRB 784611
            <br />
            <strong className="text-brand-marine">Steuer-Nr.:</strong> 56465/03531
          </p>
        </div>
      ),
    },
    {
      id: "redaktionell-verantwortlich",
      title: "Verantwortlich für redaktionelle Inhalte",
      content: (
        <p>
          Verantwortlich im Sinne des § 18 Abs. 2 Medienstaatsvertrag (MStV):
          <br />
          Dr.-Ing. Kevin Lucan, RelTest Solutions GmbH, Steglen 26, 71083 Herrenberg.
        </p>
      ),
    },
    {
      id: "haftung-inhalte",
      title: "Haftung für Inhalte",
      content: (
        <div className="space-y-5">
          <p>
            Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt recherchiert und erstellt. Fehler können dennoch nicht vollständig ausgeschlossen werden. Hinweise und Korrekturen senden Sie bitte an {" "}
            <a className={linkClassName} href="mailto:info@reltest-solutions.com">
              info@reltest-solutions.com
            </a>
            .
          </p>
          <p>
            Eine Gewähr für Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen wird nicht übernommen. Die Nutzung der Inhalte erfolgt auf eigene Verantwortung. Verbindliche technische oder vertragliche Aussagen entstehen erst im Rahmen einer individuellen Vereinbarung.
          </p>
        </div>
      ),
    },
    {
      id: "externe-links",
      title: "Externe Links",
      content: (
        <div className="space-y-5">
          <p>
            Diese Website enthält Verweise auf externe Websites Dritter. Auf deren Inhalte hat die RelTest Solutions GmbH keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
          <p>
            Die verlinkten Seiten wurden bei der erstmaligen Verknüpfung auf erkennbare Rechtsverstöße geprüft. Eine dauerhafte inhaltliche Kontrolle ist ohne konkrete Anhaltspunkte nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links entfernt.
          </p>
        </div>
      ),
    },
    {
      id: "verbraucherstreitbeilegung",
      title: "Verbraucherstreitbeilegung",
      content: (
        <p>
          Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG): Die RelTest Solutions GmbH ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      ),
    },
    {
      id: "urheberrecht",
      title: "Urheberrecht und Nutzung der Inhalte",
      content: (
        <p>
          Die von der RelTest Solutions GmbH erstellten Inhalte, Texte und die redaktionelle Struktur dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung außerhalb der gesetzlichen Schranken bedürfen der vorherigen schriftlichen Zustimmung der RelTest Solutions GmbH.
        </p>
      ),
    },
    {
      id: "ki-inhalte",
      title: "Hinweis zu generierten Bildinhalten",
      content: (
        <p>
          Auf dieser Website werden teilweise KI-generierte oder KI-bearbeitete Bilder und Grafiken verwendet. Sie dienen der visuellen Erläuterung fachlicher Inhalte und stellen keine dokumentierten Kundenprojekte oder konkreten Messsituationen dar, sofern dies nicht ausdrücklich anders gekennzeichnet ist.
        </p>
      ),
    },
    {
      id: "realisierung",
      title: "Technische Realisierung",
      content: (
        <address className="not-italic">
          RelTest Solutions GmbH
          <br />
          Steglen 26, 71083 Herrenberg
          <br />
          <a className={linkClassName} href="mailto:info@reltest-solutions.com">
            info@reltest-solutions.com
          </a>
        </address>
      ),
    },
  ];
}

function EnglishSections(): LegalSection[] {
  return [
    {
      id: "provider",
      title: "Provider and contact details",
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
        </address>
      ),
    },
    {
      id: "representation-register",
      title: "Representation and company register",
      content: (
        <div className="space-y-3">
          <p>
            <strong className="text-brand-marine">Managing Director:</strong> Dr.-Ing. Kevin Lucan
          </p>
          <p>
            <strong className="text-brand-marine">Register court:</strong> Stuttgart Local Court
            <br />
            <strong className="text-brand-marine">Commercial register number:</strong> HRB 784611
            <br />
            <strong className="text-brand-marine">Tax number:</strong> 56465/03531
          </p>
        </div>
      ),
    },
    {
      id: "editorial-responsibility",
      title: "Responsibility for editorial content",
      content: (
        <p>
          Responsible pursuant to Section 18 (2) of the German Interstate Media Treaty (MStV):
          <br />
          Dr.-Ing. Kevin Lucan, RelTest Solutions GmbH, Steglen 26, 71083 Herrenberg, Germany.
        </p>
      ),
    },
    {
      id: "content-liability",
      title: "Liability for content",
      content: (
        <div className="space-y-5">
          <p>
            The content of this website is researched and prepared with the greatest possible care. Nevertheless, errors cannot be excluded entirely. Please send corrections or comments to {" "}
            <a className={linkClassName} href="mailto:info@reltest-solutions.com">
              info@reltest-solutions.com
            </a>
            .
          </p>
          <p>
            No warranty is given for the accuracy, completeness or currency of the information provided. Use of the content is at the user&apos;s own responsibility. Binding technical or contractual statements arise only from an individual agreement.
          </p>
        </div>
      ),
    },
    {
      id: "external-links",
      title: "External links",
      content: (
        <div className="space-y-5">
          <p>
            This website contains links to external third-party websites. RelTest Solutions GmbH has no influence over their content. The respective provider or operator is responsible for the content of each linked page.
          </p>
          <p>
            Linked pages were checked for evident legal violations when the link was first created. Permanent monitoring is not reasonable without specific indications. Links will be removed if RelTest Solutions GmbH becomes aware of a legal violation.
          </p>
        </div>
      ),
    },
    {
      id: "consumer-dispute-resolution",
      title: "Consumer dispute resolution",
      content: (
        <p>
          Notice pursuant to Section 36 of the German Consumer Dispute Resolution Act (VSBG): RelTest Solutions GmbH is neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>
      ),
    },
    {
      id: "copyright",
      title: "Copyright and use of content",
      content: (
        <p>
          The content, text and editorial structure created by RelTest Solutions GmbH are protected by German copyright law. Reproduction, modification, distribution or other use beyond the limits permitted by law requires prior written consent from RelTest Solutions GmbH.
        </p>
      ),
    },
    {
      id: "generated-content",
      title: "Notice on generated visual content",
      content: (
        <p>
          This website uses some AI-generated or AI-edited images and graphics. They support the visual explanation of technical content and do not document customer projects or specific measurement situations unless expressly identified as such.
        </p>
      ),
    },
    {
      id: "implementation",
      title: "Technical implementation",
      content: (
        <address className="not-italic">
          RelTest Solutions GmbH
          <br />
          Steglen 26, 71083 Herrenberg, Germany
          <br />
          <a className={linkClassName} href="mailto:info@reltest-solutions.com">
            info@reltest-solutions.com
          </a>
        </address>
      ),
    },
  ];
}

export default async function LegalNoticePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const isGerman = locale === "de";

  return (
    <LegalDocumentPage
      eyebrow={isGerman ? "Impressum" : "Legal notice"}
      title={isGerman ? "Impressum der RelTest Solutions GmbH" : "Legal notice of RelTest Solutions GmbH"}
      description={
        isGerman
          ? "Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG) sowie weitere rechtliche Hinweise zu diesem Internetangebot."
          : "Provider information pursuant to Section 5 of the German Digital Services Act (DDG) and further legal information concerning this website."
      }
      navigationLabel={isGerman ? "Inhalt" : "Contents"}
      updatedLabel={isGerman ? "Stand" : "Last updated"}
      updated={isGerman ? "18. August 2026" : "18 August 2026"}
      sections={isGerman ? GermanSections() : EnglishSections()}
    />
  );
}
