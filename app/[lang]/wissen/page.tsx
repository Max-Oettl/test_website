import Image from "next/image";
import Link from "next/link";

import { BrandLineWatermark } from "../../_components/brand-line-watermark";
import { PageClosingCta } from "../../_components/page-closing-cta";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = { params: Promise<{ lang: string }> };

type ProcessItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  imageTitle: string;
  imageBrief: string;
};

type ProcessImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const processImages: Record<Locale, Record<string, ProcessImageAsset>> = {
  de: {
    planung: {
      src: "/wissen/uebersicht/planung-de.png",
      width: 1672,
      height: 941,
      alt: "Diagramm zum Entscheidungsraum der Zuverlässigkeitsplanung mit Zuverlässigkeitskosten, Folgekosten und akzeptablen Kosten",
    },
    schwachstellenanalyse: {
      src: "/wissen/uebersicht/schwachstellenanalyse-de.png",
      width: 1672,
      height: 941,
      alt: "Badewannenkurve zur Schwachstellenanalyse mit Frühausfällen, Zufallsausfällen und Verschleißausfällen",
    },
    erprobung: {
      src: "/wissen/uebersicht/erprobung-de.png",
      width: 2172,
      height: 724,
      alt: "Vergleich von Worst-Case-, einsatzbezogenen und synthetischen Lastkollektiven für die Zuverlässigkeitserprobung",
    },
    absicherung: {
      src: "/wissen/uebersicht/absicherung-de.png",
      width: 1672,
      height: 941,
      alt: "Technisches Diagramm zur Zuverlässigkeitsabsicherung vom Bauteilmodell bis zum Systemnachweis",
    },
    prognosen: {
      src: "/wissen/uebersicht/reliability-prediction-overview.png",
      width: 760,
      height: 680,
      alt: "Veranschaulichung einer Zuverlässigkeitsprognose aus Versuchs- und Felddaten mit statistischem Lebensdauermodell",
    },
  },
  en: {
    planung: {
      src: "/wissen/uebersicht/planung-en.png",
      width: 1672,
      height: 941,
      alt: "Reliability planning decision-space diagram comparing reliability costs, failure costs and acceptable customer costs",
    },
    schwachstellenanalyse: {
      src: "/wissen/uebersicht/schwachstellenanalyse-en.png",
      width: 1672,
      height: 941,
      alt: "Bathtub curve for weak-point analysis showing early, random and wear-out failures",
    },
    erprobung: {
      src: "/wissen/uebersicht/erprobung-en.png",
      width: 1748,
      height: 900,
      alt: "Comparison of worst-case, use-specific and synthetic load profiles for reliability testing",
    },
    absicherung: {
      src: "/wissen/uebersicht/absicherung-en.png",
      width: 1672,
      height: 941,
      alt: "Technical reliability assurance diagram from component models to system verification",
    },
    prognosen: {
      src: "/wissen/uebersicht/reliability-prediction-overview.png",
      width: 760,
      height: 680,
      alt: "Reliability prediction based on test and field data using a statistical lifetime model",
    },
  },
};

const lifecycleImages: Record<Locale, ProcessImageAsset> = {
  de: {
    src: "/wissen/uebersicht/lebenszyklus-de.png",
    width: 1536,
    height: 1024,
    alt: "Lebensdauerbegleitendes Zuverlässigkeitsmanagement mit qualitativen und quantitativen Methoden entlang des Produktlebenszyklus",
  },
  en: {
    src: "/wissen/uebersicht/lebenszyklus-en.png",
    width: 1484,
    height: 1060,
    alt: "Lifecycle reliability management with qualitative and quantitative methods across the product lifecycle",
  },
};

const copy: Record<
  Locale,
  {
    metadata: { title: string; description: string };
    hero: { title: string; intro: string; link: string };
    introduction: { title: string; paragraphs: string[] };
    foundation: { eyebrow: string; title: string; text: string; link: string };
    lifecycle: {
      eyebrow: string;
      title: string;
      intro: string;
      stages: string[];
      imageTitle: string;
      imageBrief: string;
    };
    definition: { label: string; text: string; terms: string[] };
    processIntro: { eyebrow: string; title: string; text: string };
    processLink: string;
    processes: ProcessItem[];
    closing: { title: string; description: string; primary: string; secondary: string };
  }
> = {
  de: {
    metadata: {
      title: "Zuverlässigkeitstechnik: Planung, Erprobung und Prognose | RelTest",
      description:
        "Grundlagen der Zuverlässigkeitstechnik: Zuverlässigkeitsplanung, Schwachstellenanalyse, Erprobung, Absicherung und Zuverlässigkeitsprognose verständlich eingeordnet.",
    },
    hero: {
      title: "Zuverlässigkeit über den Produktlebenszyklus verstehen.",
      intro:
        "Zuverlässigkeitstechnik verbindet Anforderungen, Risiken, Versuche und Felddaten zu belastbaren Entscheidungen in Entwicklung und Freigabe.",
      link: "Die fünf Teilprozesse ansehen",
    },
    introduction: {
      title: "Eine durchgängige Ingenieurdisziplin",
      paragraphs: [
        "Reliability Engineering betrachtet die Nicht-Funktionsfähigkeit technischer Produkte und die Ursachen ihrer Ausfälle. Es verbindet Statistik und Wahrscheinlichkeitstheorie mit klassischem Maschinenbau und moderner Produktentwicklung.",
        "Ziel ist nicht nur, Fehler zu beschreiben. Technische Probleme sollen früh erkannt, systematisch bewertet und über den gesamten Produktlebenszyklus wirksam beherrscht werden.",
      ],
    },
    foundation: {
      eyebrow: "Grundlagenbeitrag",
      title: "Zuverlässigkeitstechnik",
      text:
        "Was Zuverlässigkeit bedeutet, wie Anforderungen, Kennzahlen und Methoden zusammenhängen und weshalb der Produktlebenszyklus den fachlichen Rahmen bildet.",
      link: "Grundlagen vertiefen",
    },
    lifecycle: {
      eyebrow: "Gesamtprozess",
      title: "Lebensdauerbegleitendes Zuverlässigkeitsmanagement",
      intro:
        "Qualitative und quantitative Methoden greifen von der ersten Anforderung bis zur Felderfahrung ineinander. So bleibt Zuverlässigkeit über alle Entwicklungsphasen hinweg steuerbar.",
      stages: ["Konzeption", "Entwurf", "Ausarbeitung", "Fertigung", "Kundeneinsatz", "Wiederverwendung"],
      imageTitle: "Zuverlässigkeitsmanagement im Produktlebenszyklus",
      imageBrief:
        "Platz für eine Prozessgrafik mit qualitativen Methoden oberhalb und quantitativen Methoden unterhalb der Entwicklungsphasen.",
    },
    definition: {
      label: "Begriffsdefinition",
      text:
        "„Zuverlässigkeit ist die Wahrscheinlichkeit, dass ein Produkt seine geforderte Funktion über eine definierte Zeit unter festgelegten Einsatz- und Umgebungsbedingungen ohne Ausfall erfüllt.“",
      terms: ["Funktion", "Zeit", "Bedingungen", "Wahrscheinlichkeit"],
    },
    processIntro: {
      eyebrow: "Fünf Teilprozesse",
      title: "Von der Planung bis zur belastbaren Prognose",
      text:
        "Die fünf Themen bilden den fachlichen Kern der Zuverlässigkeitstechnik. Je nach Produkt und Entwicklungsstand werden sie einzeln vertieft oder als durchgängiger Prozess verbunden.",
    },
    processLink: "Thema vertiefen",
    processes: [
      {
        slug: "planung",
        eyebrow: "01 / Anforderungen und Zielsystem",
        title: "Zuverlässigkeitsplanung",
        summary:
          "Zu Beginn werden messbare Zuverlässigkeitsanforderungen aus Kundenbedarf, Gesetzgebung und Produktstrategie abgeleitet. Daraus entstehen Ziele, Verantwortlichkeiten und ein belastbarer Nachweisplan.",
        imageTitle: "Entscheidungsraum der Zuverlässigkeitsplanung",
        imageBrief:
          "Platz für die bestehende Grafik zu Zuverlässigkeitskosten, Folgekosten und akzeptablen Kosten aus Kundensicht.",
      },
      {
        slug: "schwachstellenanalyse",
        eyebrow: "02 / Risiken und Fehlerursachen",
        title: "Schwachstellenanalyse",
        summary:
          "Potenzielle Fehlerursachen und kritische Funktionen werden frühzeitig identifiziert. FMEA, FTA, Reviews und Felderfahrung helfen, Risiken zu priorisieren und Verbesserungen gezielt auszurichten.",
        imageTitle: "Schwachstellen über die Lebensdauer erkennen",
        imageBrief:
          "Platz für die bestehende Darstellung zur Badewannenkurve und zur Wirkung qualitativer Maßnahmen.",
      },
      {
        slug: "erprobung",
        eyebrow: "03 / Versuche und Lebensdauer",
        title: "Zuverlässigkeitserprobung",
        summary:
          "Versuche prüfen Funktion und Lebensdauer unter repräsentativen Belastungen. Lastkollektive, Stichproben und Prüfzeiten werden so gewählt, dass mit vertretbarem Aufwand belastbare Aussagen entstehen.",
        imageTitle: "Lastkollektive und Prüfplanung",
        imageBrief:
          "Platz für die bestehende Grafik zu Worst-Case-, einsatzbezogenen und synthetischen Lastkollektiven.",
      },
      {
        slug: "absicherung",
        eyebrow: "04 / Nachweis und Freigabe",
        title: "Zuverlässigkeitsabsicherung",
        summary:
          "Berechnungen, Modelle, Versuchsergebnisse und Felddaten werden zu einem nachvollziehbaren Nachweis zusammengeführt. So lässt sich die Erfüllung definierter Anforderungen fundiert bewerten und dokumentieren.",
        imageTitle: "Vom Bauteil zum Systemnachweis",
        imageBrief:
          "Platz für die bestehende Grafik zur Zusammenführung von Bauteilzuverlässigkeiten und Ausfallquoten auf Systemebene.",
      },
      {
        slug: "prognosen",
        eyebrow: "05 / Daten und Vorhersage",
        title: "Zuverlässigkeitsprognose",
        summary:
          "Versuchs- und Felddaten werden statistisch ausgewertet und in Lebensdauermodelle überführt. Die Prognose quantifiziert Ausfallverhalten, Restlebensdauer und Unsicherheit für technische Entscheidungen.",
        imageTitle: "Datenbasis der Zuverlässigkeitsprognose",
        imageBrief:
          "Platz für eine Grafik, die Versuchsdaten und Felddaten mit einem Lebensdauer- oder Prognosemodell verbindet.",
      },
    ],
    closing: {
      title: "Welche Zuverlässigkeitsfrage beschäftigt Ihr Projekt?",
      description:
        "Im ersten Gespräch ordnen wir ein, welcher Teilprozess und welche methodische Tiefe für Ihre Entscheidung sinnvoll sind.",
      primary: "Anfrage starten",
      secondary: "Solutions ansehen",
    },
  },
  en: {
    metadata: {
      title: "Reliability Engineering: Planning, Testing and Prediction | RelTest",
      description:
        "Reliability engineering fundamentals covering reliability planning, weak-point analysis, testing, assurance and reliability prediction.",
    },
    hero: {
      title: "Understand reliability across the product life cycle.",
      intro:
        "Reliability engineering connects requirements, risks, testing and field data to support robust development and release decisions.",
      link: "Explore the five sub-processes",
    },
    introduction: {
      title: "An integrated engineering discipline",
      paragraphs: [
        "Reliability engineering examines the non-functionality of technical products and the causes of failure. It combines statistics and probability theory with mechanical engineering and modern product development.",
        "The goal is not merely to describe failures. Technical problems need to be identified early, assessed systematically and controlled effectively throughout the product life cycle.",
      ],
    },
    foundation: {
      eyebrow: "Foundation article",
      title: "Reliability engineering",
      text:
        "Understand what reliability means, how requirements, metrics and methods connect, and why the product life cycle provides the technical framework.",
      link: "Explore the fundamentals",
    },
    lifecycle: {
      eyebrow: "Overall process",
      title: "Reliability management throughout the product life cycle",
      intro:
        "Qualitative and quantitative methods interact from the initial requirement through to field experience, keeping reliability manageable across all development phases.",
      stages: ["Concept", "Design", "Development", "Production", "Field use", "Reuse"],
      imageTitle: "Reliability management across the product life cycle",
      imageBrief:
        "Space for a process graphic showing qualitative methods above and quantitative methods below the development phases.",
    },
    definition: {
      label: "Definition",
      text:
        "“Reliability is the probability that a product performs its required function without failure for a defined period under specified operating and environmental conditions.”",
      terms: ["Function", "Time", "Conditions", "Probability"],
    },
    processIntro: {
      eyebrow: "Five sub-processes",
      title: "From planning to robust prediction",
      text:
        "These five topics form the technical core of reliability engineering. Depending on the product and development stage, they can be addressed individually or connected in one integrated process.",
    },
    processLink: "Explore topic",
    processes: [
      {
        slug: "planung",
        eyebrow: "01 / Requirements and targets",
        title: "Reliability planning",
        summary:
          "Measurable reliability requirements are derived from customer needs, legislation and product strategy. They define targets, responsibilities and a robust verification plan.",
        imageTitle: "Reliability planning decision space",
        imageBrief:
          "Space for the existing diagram comparing reliability costs, failure costs and acceptable customer costs.",
      },
      {
        slug: "schwachstellenanalyse",
        eyebrow: "02 / Risks and failure causes",
        title: "Weak-point analysis",
        summary:
          "Potential failure causes and critical functions are identified early. FMEA, FTA, reviews and field experience help prioritise risks and target improvements.",
        imageTitle: "Identifying weak points over the life cycle",
        imageBrief:
          "Space for the existing bathtub curve and the effect of qualitative reliability measures.",
      },
      {
        slug: "erprobung",
        eyebrow: "03 / Testing and lifetime",
        title: "Reliability testing",
        summary:
          "Tests assess function and lifetime under representative loads. Load profiles, samples and test durations are selected to generate robust evidence efficiently.",
        imageTitle: "Load profiles and test planning",
        imageBrief:
          "Space for the existing graphic on worst-case, use-specific and synthetic load profiles.",
      },
      {
        slug: "absicherung",
        eyebrow: "04 / Verification and release",
        title: "Reliability assurance",
        summary:
          "Calculations, models, test results and field data are combined in a traceable verification case, supporting a robust assessment and documented release decision.",
        imageTitle: "From component to system verification",
        imageBrief:
          "Space for the existing graphic combining component reliability and failure rates at system level.",
      },
      {
        slug: "prognosen",
        eyebrow: "05 / Data and prediction",
        title: "Reliability prediction",
        summary:
          "Test and field data are analysed statistically and translated into lifetime models. Predictions quantify failure behaviour, remaining life and uncertainty for technical decisions.",
        imageTitle: "Data basis for reliability prediction",
        imageBrief:
          "Space for a graphic connecting test and field data with a lifetime or prediction model.",
      },
    ],
    closing: {
      title: "Which reliability question is your project facing?",
      description:
        "In an initial discussion, we identify the relevant sub-process and the right methodological depth for your decision.",
      primary: "Start an enquiry",
      secondary: "Explore Solutions",
    },
  },
};

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = copy[locale];

  return buildLocalizedMetadata({
    locale,
    path: "/wissen",
    title: content.metadata.title,
    description: content.metadata.description,
  });
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const knowledgeHeroImages: Record<Locale, ProcessImageAsset> = {
  de: {
    src: "/wissen/uebersicht/wissen-header-de.png",
    alt: "Zuverlässigkeit und ihre Dimensionen Erfolgswahrscheinlichkeit, Haltbarkeit, Verlässlichkeit, Qualität über die Zeit und Verfügbarkeit zur Funktionserfüllung",
    width: 1536,
    height: 1024,
  },
  en: {
    src: "/wissen/uebersicht/wissen-header-en.png",
    alt: "Reliability and its dimensions probability of success, durability, dependability, quality over time and availability to perform a function",
    width: 1536,
    height: 1024,
  },
};

function ProcessImage({
  image,
  compact = false,
  featured = false,
}: {
  image: ProcessImageAsset;
  compact?: boolean;
  featured?: boolean;
}) {
  return (
    <figure className={`relative flex items-center justify-center ${featured ? "h-full min-h-[300px]" : "mx-auto min-h-[260px] w-full max-w-[620px] lg:h-[380px] lg:min-h-[380px]"}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={`h-auto object-contain ${featured ? "w-full max-h-[680px]" : compact ? "w-[78%] max-w-[360px] max-h-[300px]" : "w-full max-h-[380px]"}`}
      />
    </figure>
  );
}

function ProcessSection({ item, index, locale, linkLabel }: { item: ProcessItem; index: number; locale: Locale; linkLabel: string }) {
  const content = (
    <div className="flex h-full flex-col py-4 lg:px-10 lg:py-4">
      <p className="font-winnstein-display text-sm font-semibold tracking-[0.08em] text-brand-steel-cyan">{item.eyebrow}</p>
      <h3 className="mt-4 font-winnstein-display text-3xl font-bold leading-tight text-brand-marine sm:text-4xl">{item.title}</h3>
      <p className="mt-5 max-w-2xl text-base leading-8 text-brand-marine/75">{item.summary}</p>
      <Link
        href={localizeHref(locale, `/wissen/${item.slug}`)}
        className="group mt-7 inline-flex w-fit items-center gap-8 border-b border-brand-steel-cyan pb-2 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan lg:mt-auto"
      >
        {linkLabel}
        <ArrowIcon />
      </Link>
    </div>
  );
  const media = (
    <ProcessImage
      image={processImages[locale][item.slug]}
      compact={item.slug === "prognosen"}
    />
  );

  return (
    <article className="grid gap-6 border-t border-brand-marine-20 py-8 lg:grid-cols-2 lg:items-stretch lg:gap-0 lg:py-10">
      {index % 2 === 0 ? (
        <>
          {content}
          {media}
        </>
      ) : (
        <>
          <div className="h-full lg:order-2">{content}</div>
          <div className="lg:order-1">{media}</div>
        </>
      )}
    </article>
  );
}

export default async function KnowledgePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = copy[locale];

  return (
    <>
      <header className="relative overflow-hidden bg-brand-marine text-white">
        <div className="knowledge-watermark-mask pointer-events-none absolute inset-0">
          <BrandLineWatermark placement="knowledge" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[minmax(0,.92fr)_minmax(420px,1.08fr)] lg:items-center lg:px-8 lg:py-16">
        <div>
          <h1 className="max-w-3xl font-winnstein-display text-5xl font-bold leading-[1.06] tracking-[-0.03em] sm:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.78]">{content.hero.intro}</p>
          <a href="#teilprozesse" className="mt-8 inline-flex items-center gap-8 border-b border-brand-steel-cyan pb-2 font-winnstein-display text-sm font-bold text-white hover:text-brand-steel-cyan">
            {content.hero.link}
            <ArrowIcon />
          </a>
        </div>
        <figure className="relative flex min-h-[300px] items-center justify-center lg:min-h-[440px]">
          <Image
            src={knowledgeHeroImages[locale].src}
            alt={knowledgeHeroImages[locale].alt}
            width={knowledgeHeroImages[locale].width}
            height={knowledgeHeroImages[locale].height}
            preload
            sizes="(min-width: 1280px) 860px, (min-width: 1024px) 60vw, 100vw"
            className="h-auto max-h-[460px] w-full object-contain mix-blend-screen lg:max-h-[520px] lg:w-[140%] lg:max-w-none lg:-translate-x-[5%]"
          />
        </figure>
      </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </header>

      <main>
        <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
              <h2 className="max-w-xl font-winnstein-display text-4xl font-bold leading-tight text-brand-marine sm:text-5xl">
                {content.introduction.title}
              </h2>
              <div className="grid gap-6 text-lg leading-8 text-brand-marine/75 md:grid-cols-2 md:gap-10">
                {content.introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>

            <Link
              href={localizeHref(locale, "/wissen/zuverlaessigkeitstechnik")}
              className="group mt-12 grid gap-5 border-y border-brand-marine-20 py-7 transition-colors hover:border-brand-steel-cyan sm:grid-cols-[minmax(15rem,.72fr)_minmax(0,1.28fr)_auto] sm:items-center sm:gap-8"
            >
              <div>
                <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
                  {content.foundation.eyebrow}
                </p>
                <h2 className="mt-2 font-winnstein-display text-2xl font-bold text-brand-marine transition-colors group-hover:text-brand-steel-cyan sm:text-3xl">
                  {content.foundation.title}
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-7 text-brand-marine/75">
                {content.foundation.text}
              </p>
              <span className="inline-flex items-center gap-5 font-winnstein-display text-sm font-bold text-brand-marine transition-colors group-hover:text-brand-steel-cyan">
                {content.foundation.link}
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </section>

        <section className="bg-brand-steel-cyan-10 px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div>
                <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">{content.lifecycle.eyebrow}</p>
                <h2 className="mt-4 font-winnstein-display text-4xl font-bold leading-tight text-brand-marine sm:text-5xl">{content.lifecycle.title}</h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-brand-marine/75">{content.lifecycle.intro}</p>
            </div>
            <div className="mt-12">
              <ProcessImage image={lifecycleImages[locale]} featured />
            </div>
          </div>
        </section>

        <section className="bg-brand-marine px-6 py-14 text-white lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.38fr_1.62fr] lg:items-center">
            <p className="font-winnstein-display text-sm font-semibold tracking-[0.08em] text-brand-steel-cyan">{content.definition.label}</p>
            <div>
              <p className="max-w-5xl font-winnstein-display text-2xl font-semibold leading-relaxed sm:text-3xl">{content.definition.text}</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6">
                {content.definition.terms.map((term) => <span key={term} className="font-winnstein-display text-sm font-semibold text-white/72">— {term}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="teilprozesse" className="scroll-mt-24 bg-white px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 pb-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div>
                <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">{content.processIntro.eyebrow}</p>
                <h2 className="mt-4 font-winnstein-display text-4xl font-bold leading-tight text-brand-marine sm:text-5xl">{content.processIntro.title}</h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-brand-marine/75">{content.processIntro.text}</p>
            </div>
            {content.processes.map((item, index) => (
              <ProcessSection key={item.slug} item={item} index={index} locale={locale} linkLabel={content.processLink} />
            ))}
          </div>
        </section>
      </main>

      <PageClosingCta
        locale={locale}
        title={content.closing.title}
        description={content.closing.description}
      />
    </>
  );
}
