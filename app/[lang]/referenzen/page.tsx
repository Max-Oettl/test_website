import Link from "next/link";

import { BrandLineWatermark } from "../../_components/brand-line-watermark";
import { PageClosingCta } from "../../_components/page-closing-cta";
import {
  localizeHref,
  resolveLocale,
  type Locale,
} from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const referenceGroups = [
  {
    key: "mobility",
    names: [
      "Mercedes-AMG",
      "Bosch",
      "Daimler Truck",
      "hofer powertrain",
      "Hyundai Motor Company",
      "Knorr-Bremse",
      "Mercedes-Benz",
      "Nidec GPM",
      "Porsche",
      "ZF Friedrichshafen",
    ],
  },
  {
    key: "industry",
    names: [
      "Burckhardt Compression",
      "EKK Eagle Industry",
      "Kostyrka",
      "mtu Solutions",
      "Optibelt",
      "Walther Flender Group",
      "Weber-Hydraulik",
    ],
  },
  {
    key: "electronics",
    names: [
      "ASYS Group",
      "ebm-papst",
      "Leybold",
      "PI (Physik Instrumente)",
      "Testo",
      "VAT Group",
      "Zeiss SMT",
    ],
  },
  {
    key: "energyConsumer",
    names: ["Bosch", "Kärcher", "Miele", "SMA Solar Technology", "Stihl", "V-Zug"],
  },
  {
    key: "medical",
    names: ["Aesculap", "Leica Biosystems", "Miele", "Olympus"],
  },
] as const;

const referencesCopy = {
  de: {
    metadata: {
      title: "Referenzen und Branchenerfahrung | RelTest",
      description:
        "Ausgewählte Referenzen zeigen die Branchenerfahrung von RelTest in Zuverlässigkeitstechnik, Erprobung und technischer Absicherung.",
    },
    hero: {
      eyebrow: "Referenzen",
      title: "Projektreferenzen von RelTest",
      description:
        "RelTest arbeitet mit Unternehmen, deren Produkte hohe Anforderungen an Lebensdauer, Qualität und technische Nachweisführung erfüllen müssen. Die Referenzen zeigen die Breite dieser Erfahrung über unterschiedliche Produkte, Branchen und Entwicklungsbedingungen hinweg.",
    },
    references: {
      eyebrow: "Zusammenarbeit",
      title: "Projekterfahrung nach Branchen",
      groupLabels: {
        mobility: "Automotive und Mobilität",
        industry: "Maschinen- und Anlagenbau",
        electronics: "Elektronik, Präzision und Produktion",
        energyConsumer: "Energie- und Gebrauchssysteme",
        medical: "Medizintechnik und Life Science",
      },
      noteTitle: "Hinweis zur Einordnung",
      noteText:
        "Die genannten Unternehmen stehen für ausgewählte Projekt- und Zusammenarbeitserfahrung von RelTest. Die Nennung ordnet keine konkrete Aufgabenstellung einem Unternehmen zu und ist nicht als Empfehlung oder öffentliche Bewertung durch das jeweilige Unternehmen zu verstehen.",
    },
    common: {
      eyebrow: "Branchenübergreifender Ansatz",
      title: "Produkt, Risiko, Tests und Daten verbinden.",
      description:
        "RelTest überträgt keine Standardschablone auf jedes Projekt. Wiederkehrend ist jedoch die methodische Verbindung von Produktverständnis, Risiko, Erprobung und Datenbewertung.",
      items: [
        "Anforderungen und Systemgrenzen zuerst klären.",
        "Ausfallmechanismen und Unsicherheiten sichtbar machen.",
        "Versuche, Betriebsdaten und Modelle gemeinsam bewerten.",
        "Ergebnisse für Entwicklung, Freigabe und Management dokumentieren.",
      ],
      links: [
        { label: "Leistungsfelder ansehen", href: "/leistungen" },
        { label: "Branchen im Detail", href: "/branchen" },
        { label: "Fachwissen vertiefen", href: "/wissen" },
      ],
    },
    cta: {
      title: "Passende Projekterfahrung besprechen.",
      description:
        "In einem ersten Gespräch ordnen wir gemeinsam ein, welche Methoden, Projekterfahrungen und nächsten Schritte für Ihr Produkt sinnvoll sind.",
    },
  },
  en: {
    metadata: {
      title: "References and Industry Experience | RelTest",
      description:
        "Selected references demonstrate RelTest's industry experience in reliability engineering, testing and technical validation.",
    },
    hero: {
      eyebrow: "References",
      title: "RelTest project references",
      description:
        "RelTest works with companies whose products must meet demanding requirements for lifetime, quality and technical evidence. The references show the breadth of this experience across different products, sectors and development conditions.",
    },
    references: {
      eyebrow: "Collaboration",
      title: "Project experience by industry",
      groupLabels: {
        mobility: "Automotive and mobility",
        industry: "Mechanical and plant engineering",
        electronics: "Electronics, precision and production",
        energyConsumer: "Energy and consumer systems",
        medical: "Medical technology and life science",
      },
      noteTitle: "How to interpret this selection",
      noteText:
        "The companies named represent selected project and collaboration experience of RelTest. The listing does not assign a specific task to any company and should not be understood as an endorsement or public assessment by the company concerned.",
    },
    common: {
      eyebrow: "Cross-sector approach",
      title: "Connect product, risk, testing and data.",
      description:
        "RelTest does not apply the same standard template to every project. What remains consistent is the methodical connection of product understanding, risk, testing and data evaluation.",
      items: [
        "Clarify requirements and system boundaries first.",
        "Make failure mechanisms and uncertainties visible.",
        "Evaluate tests, operational data and models together.",
        "Document results for development, release and management.",
      ],
      links: [
        { label: "Explore our services", href: "/leistungen" },
        { label: "Explore industry sectors", href: "/branchen" },
        { label: "Deepen your technical knowledge", href: "/wissen" },
      ],
    },
    cta: {
      title: "Discuss relevant project experience.",
      description:
        "In an initial consultation, we identify the methods, project experience and next steps that make sense for your product.",
    },
  },
} as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none">
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

function getCopy(locale: Locale) {
  return referencesCopy[locale];
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const copy = getCopy(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/referenzen",
    title: copy.metadata.title,
    description: copy.metadata.description,
  });
}

export default async function ReferencesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const copy = getCopy(locale);

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <BrandLineWatermark placement="expertise" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
            {copy.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl font-winnstein-display text-4xl leading-[1.08] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.8rem]">
            {copy.hero.title}
          </h1>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-white/78">
            {copy.hero.description}
          </p>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {copy.references.eyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {copy.references.title}
            </h2>
          </div>

          <div className="mt-12 overflow-hidden border-t border-brand-marine/20">
            {referenceGroups.map((group) => {
              const headingId = `reference-group-${group.key}`;

              return (
                <section
                  key={group.key}
                  aria-labelledby={headingId}
                  className="grid gap-7 border-b border-brand-marine/20 px-5 py-9 even:bg-brand-steel-cyan-10 sm:px-6 lg:grid-cols-[minmax(14rem,0.45fr)_minmax(0,1.55fr)] lg:gap-8 lg:px-8 lg:py-10"
                >
                  <div>
                    <span
                      aria-hidden="true"
                      className="block h-0.5 w-12 bg-brand-steel-cyan"
                    />
                    <h3
                      id={headingId}
                      className="mt-4 font-winnstein-display text-xl leading-tight font-bold sm:text-2xl"
                    >
                      {copy.references.groupLabels[group.key]}
                    </h3>
                  </div>
                  <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
                    {group.names.map((name) => (
                      <li
                        key={name}
                        className="text-[1.05rem] leading-7 font-semibold text-brand-marine/82"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <aside className="mt-10 border-l-4 border-brand-steel-cyan bg-brand-steel-cyan-10 px-6 py-5 sm:px-8">
            <h3 className="font-winnstein-display text-base font-bold">{copy.references.noteTitle}</h3>
            <p className="mt-2 max-w-5xl text-sm leading-7 text-brand-marine/68">
              {copy.references.noteText}
            </p>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-marine px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <BrandLineWatermark placement="solutions" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
          <div>
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {copy.common.eyebrow}
            </p>
            <h2 className="mt-4 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {copy.common.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">{copy.common.description}</p>
          </div>
          <div>
            <ul className="border-t border-white/20">
              {copy.common.items.map((item) => (
                <li key={item} className="flex gap-4 border-b border-white/20 py-5 text-base leading-7 text-white/86">
                  <span aria-hidden="true" className="mt-[0.7rem] h-0.5 w-5 shrink-0 bg-brand-steel-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <nav
              aria-label={locale === "de" ? "Weiterführende Inhalte" : "Related content"}
              className="mt-8 flex flex-wrap gap-x-8 gap-y-4"
            >
              {copy.common.links.map((link) => (
                <Link
                  key={link.href}
                  href={localizeHref(locale, link.href)}
                  className="inline-flex items-center gap-3 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold text-white transition-colors hover:text-brand-steel-cyan"
                >
                  {link.label}
                  <ArrowIcon />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <PageClosingCta locale={locale} title={copy.cta.title} description={copy.cta.description} />
    </main>
  );
}
