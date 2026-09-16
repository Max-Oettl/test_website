import Image from "next/image";
import Link from "next/link";

import { BrandLineWatermark } from "../../_components/brand-line-watermark";
import { PageClosingCta } from "../../_components/page-closing-cta";
import { getDetailPages } from "../../_content/migration-pages";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

type ReliabilitySignal = {
  source: string;
  date: string;
  title: string;
  summary: string;
  href: string;
  image: string;
  imageAlt: string;
};

const reliabilitySignals: Record<Locale, ReliabilitySignal[]> = {
  de: [
    {
      source: "NIST Technical Note 2376",
      date: "7. Mai 2026",
      title: "Vergleichbarkeit von Prüfergebnissen zwischen Laboren absichern",
      summary:
        "Der Laborvergleich zeigt: Vergleichbare Prüfaufbauten garantieren noch keine übereinstimmenden Ergebnisse. Eine dokumentierte Maschinenkonfiguration und ein ungepaarter t-Test für zwei Stichproben helfen, systematische Unterschiede zwischen Laboren sichtbar zu machen.",
      href: "https://www.nist.gov/publications/third-charpy-interlaboratory-comparison-between-nist-and-anand-testing-machine-services",
      image: "/graphics/news/charpy-interlaboratory-comparison.webp",
      imageAlt: "Charpy-Pendelprüfstand mit drei gekerbten Metallproben",
    },
    {
      source: "NASA Safety & Mission Assurance",
      date: "8. April 2026",
      title: "Software-Risiken über System- und Programmgrenzen hinweg bewerten",
      summary:
        "Die NASA-Auswertung wurde mithilfe generativer KI aus programmübergreifenden Gefährdungsdaten erstellt. Relevant ist das wiederkehrende Muster: Fehler in Kommandos, Daten, Timing und Konfiguration können auch redundante Systeme gemeinsam betreffen.",
      href: "https://sma.nasa.gov/news/articles/newsitem/2026/04/08/reducing-risk-in-software-driven-hazards-across-nasa-programs-how-software-assurance-and-iv-v-strengthens-mission-safety",
      image: "/graphics/news/software-assurance-avionics.webp",
      imageAlt:
        "Zwei verbundene Avionik-Rechner in einem technischen Labor",
    },
    {
      source: "IEC TC 56",
      date: "November 2025",
      title: "Normungsarbeit zu Prüfprinzipien, Felddaten, FTA und FMEA",
      summary:
        "Die laufenden Arbeiten zeigen, welche Themen für belastbare Zuverlässigkeitsentscheidungen weiter standardisiert werden: statistische Prüfprinzipien, Prognosedaten, Felddatenerfassung sowie FTA und FMEA.",
      href: "https://tc56.iec.ch/working-group-activities/",
      image: "/graphics/news/dependability-standards-work.webp",
      imageAlt:
        "Elektronische Baugruppe neben einer schematischen Fehlerbaumanalyse",
    },
  ],
  en: [
    {
      source: "NIST Technical Note 2376",
      date: "7 May 2026",
      title: "Establishing comparability of test results across laboratories",
      summary:
        "The comparison shows that identical test methods do not automatically produce comparable results. A consistent machine configuration and an unpaired two-sample test help reveal systematic differences between laboratories.",
      href: "https://www.nist.gov/publications/third-charpy-interlaboratory-comparison-between-nist-and-anand-testing-machine-services",
      image: "/graphics/news/charpy-interlaboratory-comparison.webp",
      imageAlt:
        "Charpy pendulum impact tester with three notched metal specimens",
    },
    {
      source: "NASA Safety & Mission Assurance",
      date: "8 April 2026",
      title: "Assessing software risk across system and programme boundaries",
      summary:
        "NASA used generative AI to analyse cross-programme hazard data. The relevant finding is the recurring pattern: faults in commands, data, timing and configuration can affect redundant systems through common causes.",
      href: "https://sma.nasa.gov/news/articles/newsitem/2026/04/08/reducing-risk-in-software-driven-hazards-across-nasa-programs-how-software-assurance-and-iv-v-strengthens-mission-safety",
      image: "/graphics/news/software-assurance-avionics.webp",
      imageAlt:
        "Two connected avionics computers in an engineering laboratory",
    },
    {
      source: "IEC TC 56",
      date: "November 2025",
      title: "Standards work on test principles, field data, FTA and FMEA",
      summary:
        "The ongoing work highlights the topics being standardised for defensible reliability decisions: statistical test principles, reliability prediction data, field-data collection, FTA and FMEA.",
      href: "https://tc56.iec.ch/working-group-activities/",
      image: "/graphics/news/dependability-standards-work.webp",
      imageAlt:
        "Electronic assembly beside a schematic fault-tree analysis",
    },
  ],
};

const newsTypes: Record<Locale, Record<string, string>> = {
  de: {
    "webinar-beschleunigte-lebensdauertests": "Webinar",
    "kooperation-holland-innovative": "Kooperation",
    "rams-award": "Auszeichnung",
    "webinar-effiziente-lebensdauertestplanung": "Webinar",
    "smart-data-produktdesign": "Fachbeitrag",
  },
  en: {
    "webinar-beschleunigte-lebensdauertests": "Webinar",
    "kooperation-holland-innovative": "Collaboration",
    "rams-award": "Recognition",
    "webinar-effiziente-lebensdauertestplanung": "Webinar",
    "smart-data-produktdesign": "Technical article",
  },
};

const copy = {
  de: {
    metadata: {
      title: "Aktuelles zu Zuverlässigkeitstechnik | RelTest",
      description:
        "Webinare, Fachbeiträge und Unternehmensmeldungen von RelTest sowie ausgewählte Primärquellen aus Forschung, Normung und technischer Praxis.",
    },
    hero: {
      eyebrow: "Aktuelles",
      title: "Aktuelles von RelTest und aus der Zuverlässigkeitstechnik.",
      text: "Eigene Webinare, Fachbeiträge, Kooperationen und Auszeichnungen sowie ausgewählte Originalquellen aus Forschung, Normung und technischer Praxis – klar getrennt und fachlich eingeordnet.",
    },
    own: {
      title: "Direkt von RelTest",
      text: "Webinare, Fachbeiträge, Kooperationen und Auszeichnungen aus dem RelTest-Archiv – mit Veröffentlichungsdatum und fachlichem Kontext.",
      feature: "Ausgewählter Beitrag",
      link: "Beitrag ansehen",
      imageAlt:
        "RelTest-Ingenieur bewertet Messdaten an einem technischen Prüfstand",
    },
    field: {
      title: "Aus Forschung, Normung und technischer Praxis",
      text: "Wir sichten öffentlich zugängliche Primärquellen und fassen zusammen, was sich daraus für Zuverlässigkeitsprojekte ableiten lässt.",
      assessmentLabel: "RelTest-Einordnung",
      visualLabel: "Symbolbild",
      link: "Originalquelle öffnen",
    },
    cta: {
      title: "Was bedeutet das für Ihr Projekt?",
      text: "Wir prüfen mit Ihnen, welche Folgen neue Anforderungen, Erkenntnisse oder Daten für Risikoanalyse, Erprobung und Nachweisstrategie haben.",
    },
  },
  en: {
    metadata: {
      title: "Reliability Engineering News and Insights | RelTest",
      description:
        "Webinars, technical articles and company updates from RelTest, plus selected primary sources from research, standards and engineering practice.",
    },
    hero: {
      eyebrow: "News",
      title: "News from RelTest and the field of reliability engineering.",
      text: "Our webinars, technical articles, collaborations and awards sit alongside selected original sources from research, standards and engineering practice—clearly separated and technically assessed.",
    },
    own: {
      title: "Directly from RelTest",
      text: "Webinars, technical articles, collaborations and awards from the RelTest archive—with publication dates and technical context.",
      feature: "Selected contribution",
      link: "View contribution",
      imageAlt:
        "RelTest engineer reviewing measurement data at a technical test rig",
    },
    field: {
      title: "From research, standards and engineering practice",
      text: "We review publicly available primary sources and summarise what can be derived from them for reliability projects.",
      assessmentLabel: "RelTest assessment",
      visualLabel: "Illustrative image",
      link: "Open original source",
    },
    cta: {
      title: "What does this mean for your project?",
      text: "Together, we examine how new requirements, findings or data affect risk analysis, testing and the demonstration strategy.",
    },
  },
} as const;

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

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
      <path
        d="M11 3h6v6m0-6-8 8M16 11v5H4V4h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);

  return buildLocalizedMetadata({
    locale,
    path: "/aktuelles",
    title: copy[locale].metadata.title,
    description: copy[locale].metadata.description,
  });
}

export default async function NewsPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const items = getDetailPages("news", locale);
  const [featuredItem, ...otherItems] = items;
  const labels = copy[locale];

  return (
    <div className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <BrandLineWatermark placement="knowledge" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
            {labels.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.8rem]">
            {labels.hero.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76">
            {labels.hero.text}
          </p>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section
        id="reltest-news"
        aria-labelledby="reltest-news-title"
        className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 border-b border-brand-marine/20 pb-9 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <h2
                id="reltest-news-title"
                className="max-w-4xl font-winnstein-display text-4xl leading-none font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
              >
                {labels.own.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-brand-marine/72 lg:justify-self-end">
              {labels.own.text}
            </p>
          </div>

          <div className="mt-10 grid border border-brand-marine/20 lg:grid-cols-[1.08fr_.92fr]">
            {featuredItem ? (
              <article className="group grid min-w-0 border-b border-brand-marine/20 lg:grid-rows-[18rem_1fr] lg:border-r lg:border-b-0">
                <div className="relative min-h-64 overflow-hidden bg-brand-marine">
                  <Image
                    src={
                      featuredItem.visual?.src ??
                      "/team/reliability-test-laboratory.jpg"
                    }
                    alt={featuredItem.visual?.alt ?? labels.own.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 53vw, 100vw"
                  />
                  <div className="absolute inset-y-0 left-0 w-2 bg-brand-steel-cyan" />
                </div>
                <div className="brand-panel-cut-bottom-right relative flex min-h-80 flex-col bg-white px-6 py-8 sm:px-9 sm:py-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-winnstein-display text-sm font-bold tracking-[0.1em] text-brand-marine">
                      {newsTypes[locale][featuredItem.slug] ?? featuredItem.eyebrow}
                      {featuredItem.publishedAt ? (
                        <>
                          <span aria-hidden="true"> · </span>
                          <time dateTime={featuredItem.publishedAtIso}>
                            {featuredItem.publishedAt}
                          </time>
                        </>
                      ) : null}
                    </p>
                    <p className="font-winnstein-display text-xs font-bold tracking-[0.1em] text-brand-marine/75">
                      {labels.own.feature}
                    </p>
                  </div>
                  <h3 className="mt-6 max-w-2xl font-winnstein-display text-3xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-4xl">
                    {featuredItem.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-brand-marine/70">
                    {featuredItem.description}
                  </p>
                  <Link
                    href={localizeHref(locale, `/aktuelles/${featuredItem.slug}`)}
                    className="mt-auto inline-flex min-h-12 w-fit items-center gap-5 border border-brand-marine px-5 py-3 pt-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:border-brand-steel-cyan hover:bg-brand-steel-cyan hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-2"
                  >
                    {labels.own.link}
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ) : null}

            <div className="divide-y divide-brand-marine/20">
              {otherItems.map((item) => (
                <article
                  key={item.slug}
                  className="group relative flex min-h-48 flex-col px-6 py-7 transition-colors hover:bg-brand-steel-cyan-10/45 sm:px-8"
                >
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-brand-steel-cyan transition-transform duration-300 group-hover:scale-y-100" />
                  <p className="font-winnstein-display text-xs font-bold tracking-[0.1em] text-brand-marine">
                    {newsTypes[locale][item.slug] ?? item.eyebrow}
                    {item.publishedAt ? (
                      <>
                        <span aria-hidden="true"> · </span>
                        <time dateTime={item.publishedAtIso}>
                          {item.publishedAt}
                        </time>
                      </>
                    ) : null}
                  </p>
                  <h3 className="mt-3 font-winnstein-display text-2xl leading-tight font-bold tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-brand-marine/68">
                    {item.description}
                  </p>
                  <Link
                    href={localizeHref(locale, `/aktuelles/${item.slug}`)}
                    className="mt-auto inline-flex items-center gap-4 pt-5 font-winnstein-display text-sm font-bold text-brand-marine transition-colors group-hover:text-brand-marine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
                  >
                    {labels.own.link}
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="reliability-news"
        aria-labelledby="reliability-news-title"
        className="border-y border-brand-marine/15 bg-brand-steel-cyan-10 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-brand-marine/25 pb-10">
            <div>
              <h2
                id="reliability-news-title"
                className="max-w-5xl font-winnstein-display text-4xl leading-none font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
              >
                {labels.field.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-brand-marine/72">
                {labels.field.text}
              </p>
            </div>
          </div>

          <div className="mt-10 border border-brand-marine/20">
            {reliabilitySignals[locale].map((signal, index) => (
              <article
                key={signal.href}
                className={`${index ? "border-t border-brand-marine/20" : ""} group grid bg-white/55 lg:grid-cols-[minmax(15rem,.55fr)_minmax(0,1.9fr)]`}
              >
                <div className="flex h-full flex-col border-b border-brand-marine/15 bg-white lg:border-r lg:border-b-0">
                  <div className="relative h-52 shrink-0 overflow-hidden border-b border-brand-marine/15 bg-brand-marine sm:h-60 lg:h-56">
                    <Image
                      src={signal.image}
                      alt={signal.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      sizes="(min-width: 1024px) 20vw, 100vw"
                    />
                    <span className="absolute bottom-3 left-3 bg-brand-marine/90 px-3 py-1.5 font-winnstein-display text-[0.68rem] font-bold tracking-[0.08em] text-white backdrop-blur-sm">
                      {labels.field.visualLabel}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-6 py-6 lg:px-7">
                    <p className="font-winnstein-display text-sm leading-5 font-bold text-brand-marine">
                      {signal.source}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-brand-marine">
                      {signal.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col px-6 py-7 lg:px-10 lg:py-9">
                  <h3 className="font-winnstein-display text-2xl leading-tight font-bold tracking-[-0.025em] sm:text-3xl">
                    {signal.title}
                  </h3>
                  <div className="mt-5 border-l-2 border-brand-steel-cyan pl-5">
                    <p className="font-winnstein-display text-xs font-bold tracking-[0.1em] text-brand-marine">
                      {labels.field.assessmentLabel}
                    </p>
                    <p className="mt-3 text-base leading-7 text-brand-marine/72">
                      {signal.summary}
                    </p>
                  </div>
                  <a
                    href={signal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${labels.field.link}: ${signal.title}`}
                    className="mt-auto inline-flex min-h-12 w-fit items-center gap-4 border-b border-brand-steel-cyan pt-6 pb-1 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-marine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
                  >
                    {labels.field.link}
                    <ExternalLinkIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageClosingCta
        locale={locale}
        title={labels.cta.title}
        description={labels.cta.text}
      />
    </div>
  );
}
