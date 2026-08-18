import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";

import type { DetailPage } from "../_content/migration-pages";
import { localizeHref, type Locale } from "../_i18n/config";
import { absoluteUrl, siteUrl } from "../_seo/metadata";
import { PageContextBar } from "./page-context-bar";

type PersonProfilePageProps = {
  locale: Locale;
  page: DetailPage;
};

const podcastUrl =
  "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan";
const calendlyUrl = "https://calendly.com/kevin-lucan";
const reliabilityTestsBookUrl =
  "https://link.springer.com/book/9783662729663";
const reliabilityBookUrl =
  "https://link.springer.com/book/10.1007/978-3-662-65024-0";
const berndUniversityProfileUrl =
  "https://www.ima.uni-stuttgart.de/institut/team/Bertsche/";

type BerndPublication = {
  year: string;
  title: string;
  context: string;
  credit?: string;
  href: string;
  linkLabel: string;
  cover?: string;
  coverAlt?: string;
};

const berndPublicationCopy: Record<
  Locale,
  {
    booksTitle: string;
    booksLead: string;
    articlesTitle: string;
    articlesLead: string;
    sourceNote: string;
    sourceLabel: string;
    books: BerndPublication[];
    articles: BerndPublication[];
  }
> = {
  de: {
    booksTitle: "Weitere Fachbücher und Buchbeiträge",
    booksLead:
      "Die Auswahl zeigt die fachliche Breite von den Grundlagen der Zuverlässigkeitstechnik über mechatronische Systeme und Fahrzeuggetriebe bis zur Lebensdauerermittlung und integrierten Produktentwicklung.",
    articlesTitle: "Ausgewählte Fachartikel und Konferenzbeiträge",
    articlesLead:
      "Peer-reviewte Arbeiten dokumentieren aktuelle Methoden für Zuverlässigkeitsmodelle, Absicherungsplanung, Lastkollektive und nachhaltige technische Systeme.",
    sourceNote:
      "Die Auswahl basiert auf dem Publikationsverzeichnis der Universität Stuttgart und den jeweiligen Verlags- und Konferenzseiten. Sie zeigt zentrale Arbeiten, ist aber keine vollständige Bibliografie.",
    sourceLabel: "Publikationsverzeichnis der Universität Stuttgart",
    books: [
      {
        year: "2024",
        title:
          "Praktische Ermittlung von Lebensdauer- und Zuverlässigkeitsmodellen für Zahnriemengetriebe",
        context:
          "Fachbuch zu experimenteller Lebensdauerermittlung und belastbaren Zuverlässigkeitsmodellen für industrielle Zahnriemengetriebe.",
        href: "https://link.springer.com/book/10.1007/978-3-662-67345-4",
        linkLabel: "Fachbuch bei Springer ansehen",
        cover: "/publications/bernd/zahnriemengetriebe-cover.jpg",
        coverAlt:
          "Cover des Fachbuchs Praktische Ermittlung von Lebensdauer- und Zuverlässigkeitsmodellen für Zahnriemengetriebe",
      },
      {
        year: "2022",
        title: "Integrated Design Engineering",
        credit: "Mitautor der Buchkapitel: Prof. Dr.-Ing. Bernd Bertsche",
        context:
          "Bernd Bertsche verfasste die Kapitel „Instandhaltbarkeit“ mit Frank Müller und Martin Dazer sowie „Erfüllungsattribute“ mit Martin Dazer und Sándor Vajna.",
        href: "https://link.springer.com/book/10.1007/978-3-662-60439-7",
        linkLabel: "Bernds Buchbeiträge bei Springer ansehen",
        cover: "/publications/bernd/integrated-design-engineering-cover.jpg",
        coverAlt:
          "Cover des Sammelbands Integrated Design Engineering mit zwei Buchkapiteln von Bernd Bertsche",
      },
      {
        year: "2019",
        title: "Fahrzeuggetriebe",
        context:
          "Das Standardwerk verbindet Auslegung, Konstruktion und Zuverlässigkeitsbetrachtung moderner Fahrzeuggetriebe.",
        href: "https://link.springer.com/book/10.1007/978-3-662-58883-3",
        linkLabel: "Fachbuch bei Springer ansehen",
        cover: "/publications/bernd/fahrzeuggetriebe-cover.jpg",
        coverAlt: "Cover des Fachbuchs Fahrzeuggetriebe",
      },
      {
        year: "2009",
        title: "Zuverlässigkeit mechatronischer Systeme",
        context:
          "Grundlagen und Bewertungsmethoden für die frühe Entwicklung komplexer mechatronischer Systeme.",
        href: "https://link.springer.com/book/10.1007/978-3-540-85091-5",
        linkLabel: "Fachbuch bei Springer ansehen",
        cover: "/publications/bernd/zuverlaessigkeit-mechatronischer-systeme-cover.jpg",
        coverAlt: "Cover des Fachbuchs Zuverlässigkeit mechatronischer Systeme",
      },
      {
        year: "2008",
        title: "Reliability in Automotive and Mechanical Engineering",
        context:
          "Englischsprachiges Referenzwerk zur Bestimmung der Zuverlässigkeit von Bauteilen und technischen Systemen.",
        href: "https://link.springer.com/book/10.1007/978-3-540-34282-3",
        linkLabel: "Englische Ausgabe bei Springer ansehen",
        cover: "/publications/bernd/reliability-automotive-mechanical-engineering-cover.jpg",
        coverAlt: "Cover of Reliability in Automotive and Mechanical Engineering",
      },
      {
        year: "2007",
        title: "Entwicklung und Erprobung innovativer Produkte – Rapid Prototyping",
        context:
          "Herausgegebenes Fachbuch zur beschleunigten Entwicklung, Erprobung und Absicherung innovativer Produkte.",
        href: "https://link.springer.com/book/10.1007/978-3-540-69880-7",
        linkLabel: "Fachbuch bei Springer ansehen",
        cover: "/publications/bernd/rapid-prototyping-cover.jpg",
        coverAlt: "Cover des Fachbuchs Entwicklung und Erprobung innovativer Produkte – Rapid Prototyping",
      },
    ],
    articles: [
      {
        year: "2023",
        title:
          "Parameter assessment for reliability modeling of machine components using heuristic screening",
        context:
          "Methodik zur effizienten Parameterauswahl für Zuverlässigkeitsmodelle von Maschinenkomponenten.",
        href: "https://link.springer.com/article/10.1007/s10010-023-00711-5",
        linkLabel: "Fachartikel ansehen",
      },
      {
        year: "2022",
        title:
          "Reliability Demonstration Test Planning for Field Load Spectra",
        context:
          "Optimale Versuchsparameter für reale Lastkollektive unter individuellen Kosten- und Zeitgrenzen.",
        href: "https://doi.org/10.1109/RAMS51457.2022.9894007",
        linkLabel: "Konferenzbeitrag ansehen",
      },
      {
        year: "2022",
        title:
          "Reliability-Based Decision Methodology for Stress-Strength Optimization of Machine Components",
        context:
          "Zuverlässigkeitsbasierte Entscheidungen für die robuste Stress-Strength-Auslegung von Maschinenkomponenten.",
        href: "https://doi.org/10.1109/RAMS51457.2022.9894019",
        linkLabel: "Konferenzbeitrag ansehen",
      },
      {
        year: "2022",
        title:
          "Efficient Reliability Demonstration using the Probability of Test Success and Bayes Theorem",
        context:
          "Effiziente Nachweisplanung durch Test-Erfolgswahrscheinlichkeit und die Nutzung von Vorwissen.",
        href: "https://www.iapsam.org/PSAM16/papers/AL3-PSAM16.pdf",
        linkLabel: "Konferenzbeitrag als PDF ansehen",
      },
      {
        year: "2022",
        title:
          "Reliability as a Key Driver for a Sustainable Design of Adaptive Load-Bearing Structures",
        context:
          "Zuverlässigkeit als methodischer Hebel für nachhaltige adaptive Tragstrukturen.",
        href: berndUniversityProfileUrl,
        linkLabel: "Publikation im Universitätsprofil ansehen",
      },
      {
        year: "2020",
        title:
          "Reliability-Test Planning Considering Multiple Failure Mechanisms and System Levels",
        context:
          "Systematische Wahl von Testebene, Testtyp und Konfiguration bei mehreren Ausfallmechanismen.",
        href: berndUniversityProfileUrl,
        linkLabel: "Publikation im Universitätsprofil ansehen",
      },
    ],
  },
  en: {
    booksTitle: "Further books and book contributions",
    booksLead:
      "The selection spans the foundations of reliability engineering, mechatronic systems and vehicle transmissions through to lifetime modelling and integrated product development.",
    articlesTitle: "Selected journal and conference papers",
    articlesLead:
      "Peer-reviewed work documents current methods for reliability modelling, demonstration planning, field load spectra and sustainable technical systems.",
    sourceNote:
      "This selection is based on the University of Stuttgart publication record and the respective publisher and conference pages. It highlights central works but is not a complete bibliography.",
    sourceLabel: "University of Stuttgart publication record",
    books: [
      {
        year: "2024",
        title:
          "Praktische Ermittlung von Lebensdauer- und Zuverlässigkeitsmodellen für Zahnriemengetriebe",
        context:
          "German reference book on experimental lifetime assessment and robust reliability models for industrial timing-belt drives.",
        href: "https://link.springer.com/book/10.1007/978-3-662-67345-4",
        linkLabel: "View the book at Springer",
        cover: "/publications/bernd/zahnriemengetriebe-cover.jpg",
        coverAlt:
          "Cover of the book Praktische Ermittlung von Lebensdauer- und Zuverlässigkeitsmodellen für Zahnriemengetriebe",
      },
      {
        year: "2022",
        title: "Integrated Design Engineering",
        credit: "Chapter co-author: Prof. Dr.-Ing. Bernd Bertsche",
        context:
          "Bernd Bertsche co-authored the chapters Maintainability with Frank Müller and Martin Dazer, and Fulfilment Attributes with Martin Dazer and Sándor Vajna.",
        href: "https://link.springer.com/book/10.1007/978-3-662-60439-7",
        linkLabel: "View Bernd's chapters at Springer",
        cover: "/publications/bernd/integrated-design-engineering-cover.jpg",
        coverAlt:
          "Cover of the edited volume Integrated Design Engineering containing two chapters co-authored by Bernd Bertsche",
      },
      {
        year: "2019",
        title: "Fahrzeuggetriebe",
        context:
          "German standard reference connecting the design, engineering and reliability assessment of modern vehicle transmissions.",
        href: "https://link.springer.com/book/10.1007/978-3-662-58883-3",
        linkLabel: "View the book at Springer",
        cover: "/publications/bernd/fahrzeuggetriebe-cover.jpg",
        coverAlt: "Cover of the German reference book Fahrzeuggetriebe",
      },
      {
        year: "2009",
        title: "Zuverlässigkeit mechatronischer Systeme",
        context:
          "Foundations and assessment methods for complex mechatronic systems in early development phases.",
        href: "https://link.springer.com/book/10.1007/978-3-540-85091-5",
        linkLabel: "View the book at Springer",
        cover: "/publications/bernd/zuverlaessigkeit-mechatronischer-systeme-cover.jpg",
        coverAlt: "Cover of the German book Zuverlässigkeit mechatronischer Systeme",
      },
      {
        year: "2008",
        title: "Reliability in Automotive and Mechanical Engineering",
        context:
          "English-language reference book for determining component and system reliability.",
        href: "https://link.springer.com/book/10.1007/978-3-540-34282-3",
        linkLabel: "View the English edition at Springer",
        cover: "/publications/bernd/reliability-automotive-mechanical-engineering-cover.jpg",
        coverAlt: "Cover of Reliability in Automotive and Mechanical Engineering",
      },
      {
        year: "2007",
        title: "Entwicklung und Erprobung innovativer Produkte – Rapid Prototyping",
        context:
          "Edited German reference book on accelerating the development, testing and validation of innovative products.",
        href: "https://link.springer.com/book/10.1007/978-3-540-69880-7",
        linkLabel: "View the book at Springer",
        cover: "/publications/bernd/rapid-prototyping-cover.jpg",
        coverAlt: "Cover of the German book Entwicklung und Erprobung innovativer Produkte – Rapid Prototyping",
      },
    ],
    articles: [
      {
        year: "2023",
        title:
          "Parameter assessment for reliability modeling of machine components using heuristic screening",
        context:
          "A method for efficiently selecting parameters for reliability models of machine components.",
        href: "https://link.springer.com/article/10.1007/s10010-023-00711-5",
        linkLabel: "View the journal article",
      },
      {
        year: "2022",
        title:
          "Reliability Demonstration Test Planning for Field Load Spectra",
        context:
          "Optimal test parameters for real-world load spectra under individual cost and time constraints.",
        href: "https://doi.org/10.1109/RAMS51457.2022.9894007",
        linkLabel: "View the conference paper",
      },
      {
        year: "2022",
        title:
          "Reliability-Based Decision Methodology for Stress-Strength Optimization of Machine Components",
        context:
          "Reliability-based decisions for robust stress-strength design of machine components.",
        href: "https://doi.org/10.1109/RAMS51457.2022.9894019",
        linkLabel: "View the conference paper",
      },
      {
        year: "2022",
        title:
          "Efficient Reliability Demonstration using the Probability of Test Success and Bayes Theorem",
        context:
          "Efficient demonstration planning through probability of test success and the use of prior knowledge.",
        href: "https://www.iapsam.org/PSAM16/papers/AL3-PSAM16.pdf",
        linkLabel: "View the conference paper as PDF",
      },
      {
        year: "2022",
        title:
          "Reliability as a Key Driver for a Sustainable Design of Adaptive Load-Bearing Structures",
        context:
          "Reliability as a methodological driver for sustainable adaptive load-bearing structures.",
        href: berndUniversityProfileUrl,
        linkLabel: "View the publication in the university profile",
      },
      {
        year: "2020",
        title:
          "Reliability-Test Planning Considering Multiple Failure Mechanisms and System Levels",
        context:
          "Systematic selection of test level, test type and configuration for multiple failure mechanisms.",
        href: berndUniversityProfileUrl,
        linkLabel: "View the publication in the university profile",
      },
    ],
  },
};

const profileCopy = {
  de: {
    backLabel: "Zurück zu Wir sind RelTest",
    kevin: {
      role: "Geschäftsführer, Gründer und direkter Ansprechpartner",
      narrativeTitle: "Technische Tiefe, die im Projekt ankommt.",
      evidenceTitle: "Kevin im Gespräch.",
      evidenceText:
        "Der Ingenieurshelden-Podcast vermittelt einen persönlichen Eindruck von seinem Werdegang, seiner technischen Denkweise und seinem Verständnis guter Zusammenarbeit.",
      podcastLabel: "Podcast anhören",
      contactLabel: "Termin mit Kevin vereinbaren",
      topicsLabel: "Fachliche Schwerpunkte von Kevin Lucan",
    },
    bernd: {
      role: "Gründer, Mentor und prägender Zuverlässigkeitsexperte",
      narrativeTitle: "Wissen, das die Zuverlässigkeitstechnik geprägt hat.",
      collaborationLabel:
        "Wissenschaft und Praxis · in fachlicher Zusammenarbeit mit RelTest",
      evidenceTitle: "Publizierte Expertise.",
      evidenceText:
        "Fachbücher, Herausgeberschaften und peer-reviewte Beiträge dokumentieren Bernd Bertsches Arbeit von den Grundlagen der Zuverlässigkeitstechnik bis zu moderner Testplanung und nachhaltiger Produktentwicklung.",
      booksLabel: "Ausgewählte Fachbücher von Bernd Bertsche",
      contactLabel: "Fachliches Gespräch anfragen",
      topicsLabel: "Fachliche Schwerpunkte von Bernd Bertsche",
    },
  },
  en: {
    backLabel: "Back to About RelTest",
    kevin: {
      role: "Managing Director, founder and direct contact",
      narrativeTitle: "Technical depth that delivers in projects.",
      evidenceTitle: "A conversation with Kevin.",
      evidenceText:
        "The Ingenieurshelden podcast offers a personal impression of his professional path, technical thinking and understanding of effective collaboration.",
      podcastLabel: "Listen to the podcast",
      contactLabel: "Schedule a meeting with Kevin",
      topicsLabel: "Kevin Lucan's areas of expertise",
    },
    bernd: {
      role: "Founder, mentor and leading reliability expert",
      narrativeTitle: "Knowledge that has shaped reliability engineering.",
      collaborationLabel:
        "Research and practice · in technical collaboration with RelTest",
      evidenceTitle: "Published expertise.",
      evidenceText:
        "Books, edited volumes and peer-reviewed papers document Bernd Bertsche's work from the foundations of reliability engineering to modern demonstration planning and sustainable product development.",
      booksLabel: "Selected reference books by Bernd Bertsche",
      contactLabel: "Request a technical conversation",
      topicsLabel: "Bernd Bertsche's areas of expertise",
    },
  },
} satisfies Record<Locale, object>;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
    >
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ProfileLink({
  href,
  children,
  external = false,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={
        primary
          ? "brand-action inline-flex min-h-12 items-center justify-center gap-3 bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan"
          : "inline-flex items-center gap-3 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan"
      }
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

function PublicationCollection({
  locale,
  title,
  lead,
  items,
}: {
  locale: Locale;
  title: string;
  lead: string;
  items: BerndPublication[];
}) {
  return (
    <div className="mt-14 border-t border-line-soft pt-10 lg:mt-16 lg:pt-12">
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
        <h3 className="font-winnstein-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
          {title}
        </h3>
        <p className="max-w-3xl text-base leading-8 text-copy-muted">{lead}</p>
      </div>

      <div className="mt-8 grid gap-px overflow-hidden border border-line-soft bg-line-soft md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={`${item.year}-${item.title}`}
            className={`flex flex-col bg-white p-6 sm:p-7 ${
              item.cover ? "min-h-[34rem]" : "min-h-80"
            }`}
          >
            {item.cover ? (
              <div className="mb-6 flex h-52 items-center justify-center bg-brand-steel-cyan-10 p-4">
                <Image
                  src={item.cover}
                  alt={item.coverAlt ?? item.title}
                  width={316}
                  height={479}
                  sizes="(min-width: 1024px) 14rem, (min-width: 768px) 30vw, 60vw"
                  className="h-full w-auto object-contain shadow-[0_18px_32px_-18px_rgba(20,36,82,.55)]"
                />
              </div>
            ) : (
              <div className="relative mb-6 flex h-32 items-center justify-between overflow-hidden bg-brand-marine px-6 text-white">
                <svg aria-hidden="true" viewBox="0 0 72 84" className="h-20 w-16 text-brand-steel-cyan" fill="none">
                  <path d="M11 3h35l15 15v63H11V3Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M46 3v16h15M21 34h30M21 45h30M21 56h22" stroke="currentColor" strokeWidth="2" />
                  <path d="m21 69 7-7 7 4 10-12 7 6" stroke="white" strokeWidth="2" />
                </svg>
                <div className="text-right">
                  <p className="font-winnstein-display text-xs font-semibold tracking-[0.12em] text-brand-steel-cyan uppercase">
                    {locale === "de" ? "Fachbeitrag" : "Research paper"}
                  </p>
                  <p className="mt-2 font-winnstein-display text-2xl font-bold">{item.year}</p>
                </div>
                <span className="absolute right-0 bottom-0 h-1 w-24 bg-brand-steel-cyan" />
              </div>
            )}
            <p className="font-winnstein-display text-sm font-semibold tracking-[0.08em] text-brand-steel-cyan">
              {item.year}
            </p>
            {item.credit ? (
              <p className="mt-4 border-l-2 border-brand-steel-cyan pl-3 font-winnstein-display text-sm font-bold leading-6 text-brand-marine">
                {item.credit}
              </p>
            ) : null}
            <h4 className={`${item.credit ? "mt-3" : "mt-4"} font-winnstein-display text-xl font-bold leading-7 tracking-[-0.02em]`}>
              {item.title}
            </h4>
            <p className="mt-4 text-sm leading-7 text-copy-muted">
              {item.context}
            </p>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-3 pt-7 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan"
            >
              <span className="border-b border-brand-steel-cyan pb-1">
                {item.linkLabel}
              </span>
              <ArrowIcon />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

function PodcastWaveformGraphic({ locale }: { locale: Locale }) {
  const caption =
    locale === "de"
      ? "Gespräch über Ingenieurpraxis und Verantwortung"
      : "A conversation about engineering practice and responsibility";

  const waveform = [
    18, 26, 15, 35, 22, 42, 28, 54, 32, 45, 24, 36, 60, 86, 52, 30, 48,
    66, 40, 28, 44, 72, 38, 26, 42, 30, 48, 34, 24, 20,
  ];

  return (
    <figure
      aria-label={caption}
      className="flex flex-col justify-center px-6 py-8 sm:px-8 lg:py-10"
    >
      <svg aria-hidden="true" viewBox="0 0 760 270" className="mx-auto w-full max-w-xl" fill="none">
        <g transform="translate(28 39)">
          <rect x="22" y="0" width="70" height="122" rx="35" fill="white" />
          <path d="M22 32h25M22 54h25M22 76h25M67 32h25M67 54h25M67 76h25" stroke="#142452" strokeWidth="8" />
          <path d="M8 75v14c0 35 22 57 49 57s49-22 49-57V75" stroke="#568BE0" strokeWidth="10" strokeLinecap="round" />
          <path d="M57 146v31M27 181h60" stroke="#568BE0" strokeWidth="10" strokeLinecap="round" />
        </g>
        <g transform="translate(180 108)" stroke="#568BE0" strokeWidth="8" strokeLinecap="round">
          {waveform.map((height, index) => {
            const x = index * 18;
            return <path key={`${height}-${index}`} d={`M${x} ${-height / 2}v${height}`} />;
          })}
        </g>
      </svg>
    </figure>
  );
}

export function PersonProfilePage({
  locale,
  page,
}: PersonProfilePageProps) {
  const copy = profileCopy[locale];
  const isKevin = page.slug === "kevin-lucan";
  const personCopy = isKevin ? copy.kevin : copy.bernd;
  const profilePath = `/ueber-uns/${page.slug}`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl(`/${locale}${profilePath}#person`),
    name: page.title,
    jobTitle: personCopy.role,
    description: page.metaDescription,
    image: page.visual ? absoluteUrl(page.visual.src) : undefined,
    url: absoluteUrl(`/${locale}${profilePath}`),
    sameAs: isKevin ? [podcastUrl] : [berndUniversityProfileUrl],
    worksFor: {
      "@type": "Organization",
      name: "RelTest Solutions GmbH",
      url: siteUrl,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universität Stuttgart",
      url: "https://www.uni-stuttgart.de/",
    },
    knowsAbout: page.proofPoints,
  };

  return (
    <div className="overflow-x-clip bg-white font-winnstein-body text-brand-marine">
      <section className="border-b border-line-soft bg-[linear-gradient(115deg,#ffffff_0%,#ffffff_58%,#e7f3f8_100%)]">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <Link
            href={localizeHref(locale, "/ueber-uns")}
            className="inline-flex items-center gap-3 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan"
          >
            <span aria-hidden="true">←</span>
            {copy.backLabel}
          </Link>

          <div className="mt-10 grid overflow-hidden border border-line-soft bg-white shadow-[0_30px_80px_-50px_rgba(3,19,52,0.52)] lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="font-winnstein-display text-base font-semibold text-brand-steel-cyan">
                {personCopy.role}
              </p>
              <h1 className="mt-4 font-winnstein-display text-[2.35rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-copy-muted">
                {page.description}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-copy-soft">
                {page.lead}
              </p>
              <div className="mt-9">
                <ProfileLink
                  href={
                    isKevin
                      ? calendlyUrl
                      : localizeHref(locale, "/kontakt")
                  }
                  external={isKevin}
                  primary
                >
                  {personCopy.contactLabel}
                </ProfileLink>
              </div>
            </div>

            {page.visual ? (
              <div className="relative min-h-[25rem] lg:min-h-[38rem]">
                <Image
                  src={page.visual.src}
                  alt={page.visual.alt}
                  fill
                  priority
                  className={`object-cover ${
                    isKevin
                      ? "object-[50%_8%] lg:object-[50%_10%]"
                      : "object-[50%_20%] lg:object-[50%_34%]"
                  }`}
                  sizes="(min-width: 1024px) 43vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-marine/25 via-transparent to-transparent" />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <PageContextBar
        locale={locale}
        sectionHref="/ueber-uns"
        sectionLabel={locale === "de" ? "Wir sind RelTest" : "About RelTest"}
        currentLabel={page.title}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <h2 className="max-w-3xl font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {personCopy.narrativeTitle}
            </h2>
            <div className="mt-8 max-w-3xl space-y-6">
              {page.sections.map((section) => (
                <p
                  key={section.title}
                  className="text-base leading-8 text-copy-muted"
                >
                  {section.body}
                </p>
              ))}
            </div>
          </div>

          <ul
            aria-label={personCopy.topicsLabel}
            className="divide-y divide-line-soft border-y border-line-soft"
          >
            {page.proofPoints.map((point) => (
              <li
                key={point}
                className="grid grid-cols-[1rem_1fr] items-center gap-4 py-5"
              >
                <span
                  aria-hidden="true"
                  className="brand-list-dash brand-list-dash-center"
                />
                <span className="font-winnstein-display text-base font-semibold leading-6">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {isKevin ? (
        <section className="border-t border-line-soft bg-white">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="brand-panel-cut-bottom-right grid overflow-hidden rounded-tl-2xl bg-brand-marine text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="p-8 sm:p-10 lg:p-12">
                <h2 className="font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                  {personCopy.evidenceTitle}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                  {personCopy.evidenceText}
                </p>
                <div className="mt-8">
                  <Link
                    href={podcastUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-action inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 py-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:bg-brand-steel-cyan-10"
                  >
                    {copy.kevin.podcastLabel}
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
              <PodcastWaveformGraphic locale={locale} />
            </div>
          </div>
        </section>
      ) : (
        <section
          id={locale === "de" ? "fachbuecher" : "books"}
          className="scroll-mt-28 border-y border-line-soft bg-surface-muted"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="font-winnstein-display text-sm font-semibold leading-6 text-brand-steel-cyan">
                  {copy.bernd.collaborationLabel}
                </p>
                <h2 className="mt-3 font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                  {personCopy.evidenceTitle}
                </h2>
                <p className="mt-5 text-base leading-8 text-copy-muted">
                  {personCopy.evidenceText}
                </p>
              </div>

              <div
                aria-label={copy.bernd.booksLabel}
                className="grid grid-cols-2 divide-x divide-line-soft border border-line-soft bg-white"
              >
                <Link
                  href={reliabilityTestsBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[25rem] items-center justify-center p-6 transition-colors hover:bg-brand-steel-cyan-10 sm:p-8"
                >
                  <Image
                    src="/book-reliability-tests-cover.webp"
                    alt={
                      locale === "de"
                        ? "Fachbuch Zuverlässigkeitstests für eine effiziente und entwicklungsbegleitende Absicherung von Bauteilen und Systemen"
                        : "Reference book on reliability tests for efficient validation during component and system development"
                    }
                    width={368}
                    height={504}
                    className="h-auto max-h-[23rem] w-auto shadow-[0_20px_35px_-20px_rgba(3,19,52,0.55)] transition-transform duration-500 group-hover:-translate-y-1"
                  />
                </Link>
                <Link
                  href={reliabilityBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[25rem] items-center justify-center p-6 transition-colors hover:bg-brand-steel-cyan-10 sm:p-8"
                >
                  <Image
                    src="/book-reliability-cover.jpg"
                    alt={
                      locale === "de"
                        ? "Fachbuch Zuverlässigkeit im Fahrzeug- und Maschinenbau"
                        : "Reference book Reliability in Automotive and Mechanical Engineering"
                    }
                    width={478}
                    height={683}
                    className="h-auto max-h-[23rem] w-auto shadow-[0_20px_35px_-20px_rgba(3,19,52,0.55)] transition-transform duration-500 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            <PublicationCollection
              locale={locale}
              title={berndPublicationCopy[locale].booksTitle}
              lead={berndPublicationCopy[locale].booksLead}
              items={berndPublicationCopy[locale].books}
            />

            <PublicationCollection
              locale={locale}
              title={berndPublicationCopy[locale].articlesTitle}
              lead={berndPublicationCopy[locale].articlesLead}
              items={berndPublicationCopy[locale].articles}
            />

            <p className="mt-10 max-w-4xl border-l-2 border-brand-steel-cyan pl-5 text-sm leading-7 text-copy-soft">
              {berndPublicationCopy[locale].sourceNote}{" "}
              <Link
                href={berndUniversityProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-marine underline decoration-brand-steel-cyan underline-offset-4 transition-colors hover:text-brand-steel-cyan"
              >
                {berndPublicationCopy[locale].sourceLabel}
              </Link>
            </p>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
