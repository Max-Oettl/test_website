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
  relevance: string;
  href: string;
};

const reliabilitySignals: Record<Locale, ReliabilitySignal[]> = {
  de: [
    {
      source: "NASA Safety & Mission Assurance",
      date: "8. April 2026",
      title: "Software-Risiken über System- und Programmgrenzen hinweg bewerten",
      summary:
        "Eine programmübergreifende NASA-Auswertung zeigt wiederkehrende Risiken durch fehlerhafte Kommandos, Daten-, Timing- und Konfigurationsfehler sowie Common-Cause-Ausfälle in redundanten Systemen.",
      relevance:
        "Für Reliability Engineering unterstreicht das die Bedeutung von unabhängiger Verifikation, gezielter Fehlerinjektion und durchgängiger Rückverfolgbarkeit.",
      href: "https://sma.nasa.gov/news/articles/newsitem/2026/04/08/reducing-risk-in-software-driven-hazards-across-nasa-programs-how-software-assurance-and-iv-v-strengthens-mission-safety",
    },
    {
      source: "NIST Technical Note 2376",
      date: "7. Mai 2026",
      title: "Vergleichbarkeit von Prüfergebnissen zwischen Laboren absichern",
      summary:
        "NIST und Anand Testing Machine Services vergleichen Charpy-Prüfungen mit gleicher Maschinenkonfiguration und bewerten Laborunterschiede mit einem statistischen Zwei-Stichproben-Test.",
      relevance:
        "Das Beispiel zeigt, warum Prüfmittel, Randbedingungen und statistische Vergleichslogik gemeinsam dokumentiert werden müssen.",
      href: "https://www.nist.gov/publications/third-charpy-interlaboratory-comparison-between-nist-and-anand-testing-machine-services",
    },
    {
      source: "IEC TC 56",
      date: "November 2025",
      title: "Normungsarbeit zu Prüfprinzipien, Felddaten, FTA und FMEA",
      summary:
        "Die Dependability-Arbeitsgruppe der IEC arbeitet unter anderem an statistischen Prüfprinzipien, der Prognose von Zuverlässigkeitsdaten elektronischer Komponenten, Felddatenerfassung, FTA und FMEA.",
      relevance:
        "Die Themen zeigen, wie eng Prüfplanung, Datenqualität, Risikoanalyse und Prognose in der aktuellen Normungsarbeit zusammenrücken.",
      href: "https://tc56.iec.ch/working-group-activities/",
    },
  ],
  en: [
    {
      source: "NASA Safety & Mission Assurance",
      date: "8 April 2026",
      title: "Assessing software risk across system and programme boundaries",
      summary:
        "A NASA cross-programme assessment identifies recurring risks from erroneous commands, data, timing and configuration faults, as well as common-cause failures in redundant systems.",
      relevance:
        "For reliability engineering, the findings reinforce the value of independent verification, targeted fault injection and end-to-end traceability.",
      href: "https://sma.nasa.gov/news/articles/newsitem/2026/04/08/reducing-risk-in-software-driven-hazards-across-nasa-programs-how-software-assurance-and-iv-v-strengthens-mission-safety",
    },
    {
      source: "NIST Technical Note 2376",
      date: "7 May 2026",
      title: "Establishing comparability of test results across laboratories",
      summary:
        "NIST and Anand Testing Machine Services compare Charpy tests using the same machine configuration and assess interlaboratory differences with a statistical two-sample test.",
      relevance:
        "The example demonstrates why equipment, boundary conditions and the statistical comparison method need to be documented together.",
      href: "https://www.nist.gov/publications/third-charpy-interlaboratory-comparison-between-nist-and-anand-testing-machine-services",
    },
    {
      source: "IEC TC 56",
      date: "November 2025",
      title: "Standards work on test principles, field data, FTA and FMEA",
      summary:
        "The IEC dependability working group is progressing work on statistical test principles, reliability data prediction for electronic components, field-data collection, FTA and FMEA.",
      relevance:
        "These activities show how closely test planning, data quality, risk analysis and prediction are connected in current standardisation work.",
      href: "https://tc56.iec.ch/working-group-activities/",
    },
  ],
};

const copy = {
  de: {
    metadata: {
      title: "Aktuelles zu Reliability Engineering | RelTest",
      description:
        "Aktuelles von RelTest sowie kuratierte Entwicklungen aus Zuverlässigkeitstechnik, Erprobung, Normung und technischer Absicherung.",
    },
    hero: {
      eyebrow: "Aktuelles",
      title: "Aktuelles aus Reliability Engineering.",
      text: "Eigene Beiträge, Webinare und Kooperationen treffen auf sorgfältig ausgewählte Entwicklungen aus Forschung, Normung und technischer Praxis.",
    },
    own: {
      eyebrow: "Von RelTest",
      title: "Beiträge und Webinare von RelTest",
      text: "Hier finden Sie fachliche Impulse und Neuigkeiten aus unserem Netzwerk. Jeder Beitrag führt direkt zur technischen Einordnung des Themas.",
      link: "Beitrag lesen",
    },
    field: {
      eyebrow: "Reliability im Blick",
      title: "Normen, Forschung und Branchenentwicklungen",
      text: "Eine redaktionelle Auswahl öffentlich zugänglicher Primärquellen. Wir ordnen ein, weshalb die Meldungen für Zuverlässigkeitsprojekte relevant sind.",
      relevance: "Einordnung für die Praxis",
      link: "Originalquelle öffnen",
    },
    cta: {
      title: "Auswirkungen auf Ihr Projekt klären",
      text: "Wir ordnen ein, welche Konsequenzen sich daraus für Risikoanalyse, Erprobung, Datenbewertung oder Nachweisführung ergeben.",
    },
  },
  en: {
    metadata: {
      title: "Reliability Engineering News | RelTest",
      description:
        "News from RelTest and curated developments in reliability engineering, testing, standardisation and technical assurance.",
    },
    hero: {
      eyebrow: "News",
      title: "News from reliability engineering.",
      text: "Our own articles, webinars and collaborations meet carefully selected developments from research, standardisation and engineering practice.",
    },
    own: {
      eyebrow: "From RelTest",
      title: "Articles and webinars from RelTest",
      text: "Explore technical perspectives and news from our network. Each article connects the update to its engineering context.",
      link: "Read article",
    },
    field: {
      eyebrow: "Reliability in focus",
      title: "Standards, research and industry developments",
      text: "An editorial selection of publicly available primary sources, with a concise view of why each development matters for reliability projects.",
      relevance: "Engineering relevance",
      link: "Open original source",
    },
    cta: {
      title: "Clarify the impact on your project",
      text: "We assess what it means for risk analysis, testing, data evaluation or technical evidence.",
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
  const labels = copy[locale];

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <BrandLineWatermark placement="knowledge" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
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

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 border-b border-brand-marine/18 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
                {labels.own.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
                {labels.own.title}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-brand-marine/72 lg:justify-self-end">
              {labels.own.text}
            </p>
          </div>

          <div className="mt-12 grid border-t border-l border-brand-marine/18 md:grid-cols-2">
            {items.map((item, index) => (
              <article
                key={item.slug}
                className="group relative flex min-h-72 flex-col border-r border-b border-brand-marine/18 bg-white px-7 py-8 sm:px-9"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-steel-cyan transition-transform duration-300 group-hover:scale-x-100" />
                <p className="font-winnstein-display text-xs font-bold tracking-[0.08em] text-brand-steel-cyan">
                  {String(index + 1).padStart(2, "0")} · {item.eyebrow}
                </p>
                <h3 className="mt-5 font-winnstein-display text-2xl leading-tight font-bold tracking-[-0.025em] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-brand-marine/70">
                  {item.description}
                </p>
                <Link
                  href={localizeHref(locale, `/aktuelles/${item.slug}`)}
                  className="mt-auto inline-flex items-center gap-4 pt-8 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan"
                >
                  {labels.own.link}
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-steel-cyan-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
                {labels.field.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
                {labels.field.title}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-brand-marine/72 lg:justify-self-end">
              {labels.field.text}
            </p>
          </div>

          <div className="mt-12 border-t border-brand-marine/20">
            {reliabilitySignals[locale].map((signal) => (
              <article
                key={signal.href}
                className="grid gap-6 border-b border-brand-marine/20 py-9 lg:grid-cols-[0.34fr_0.9fr_1.1fr] lg:gap-10"
              >
                <div>
                  <p className="font-winnstein-display text-sm font-bold text-brand-marine">
                    {signal.source}
                  </p>
                  <p className="mt-2 text-sm text-brand-marine/58">{signal.date}</p>
                </div>
                <div>
                  <h3 className="font-winnstein-display text-2xl leading-tight font-bold tracking-[-0.025em]">
                    {signal.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-brand-marine/72">
                    {signal.summary}
                  </p>
                </div>
                <div className="border-l-2 border-brand-steel-cyan pl-6">
                  <p className="font-winnstein-display text-xs font-bold tracking-[0.08em] text-brand-steel-cyan">
                    {labels.field.relevance}
                  </p>
                  <p className="mt-3 text-base leading-7 text-brand-marine/72">
                    {signal.relevance}
                  </p>
                  <a
                    href={signal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-4 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan"
                  >
                    {labels.field.link}
                    <ArrowIcon />
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
    </main>
  );
}
