import { PageIntro } from "../../_components/page-intro";
import { resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const glossary = {
  de: [
    ["Zuverlässigkeit", "Wahrscheinlichkeit, dass ein Produkt seine Funktion unter definierten Bedingungen über eine definierte Zeit erfüllt."],
    ["Lebensdauer", "Zeit oder Nutzung bis zu einem definierten Ausfallkriterium."],
    ["B10-Wert", "Zeitpunkt, zu dem statistisch 10 Prozent einer Population ausgefallen sind."],
    ["MTTF", "Mean Time To Failure, also mittlere Zeit bis zum Ausfall nicht reparierbarer Einheiten."],
    ["Weibull-Analyse", "Statistische Methode zur Bewertung von Lebensdauer- und Ausfalldaten."],
    ["DoE", "Design of Experiments, statistische Versuchsplanung zur effizienten Untersuchung von Einflussgrößen."],
    ["FMEA", "Methode zur systematischen Analyse potenzieller Fehlerarten und ihrer Folgen."],
    ["FTA", "Fault Tree Analysis, also Fehlerbaumanalyse zur strukturierten Ursachenbetrachtung."],
    ["Health Monitoring", "Überwachung technischer Zustände, um Veränderungen oder Risiken früh zu erkennen."],
  ],
  en: [
    ["Reliability", "Probability that a product performs its function under defined conditions for a defined period."],
    ["Lifetime", "Time or usage until a defined failure criterion is reached."],
    ["B10 value", "Point in time at which statistically 10 percent of a population has failed."],
    ["MTTF", "Mean Time To Failure for non-repairable units."],
    ["Weibull analysis", "Statistical method for evaluating lifetime and failure data."],
    ["DoE", "Design of Experiments, statistical experimental design for efficient factor investigation."],
    ["FMEA", "Method for systematically analysing potential failure modes and their effects."],
    ["FTA", "Fault Tree Analysis for structured root-cause reasoning."],
    ["Health monitoring", "Monitoring of technical states to detect changes or risks early."],
  ],
} as const;

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);

  return buildLocalizedMetadata({
    locale,
    path: "/glossar",
    title:
      locale === "de"
        ? "Glossar Zuverlässigkeitstechnik | RelTest"
        : "Reliability Engineering Glossary | RelTest",
    description:
      locale === "de"
        ? "Glossar mit zentralen Begriffen aus Zuverlässigkeitstechnik, Lebensdaueranalyse, DoE, Erprobung und Risikomanagement."
        : "Glossary of key terms in reliability engineering, lifetime analysis, DoE, testing and risk management.",
  });
}

export default async function GlossaryPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const entries = glossary[locale];

  return (
    <>
      <PageIntro
        eyebrow={locale === "de" ? "Glossar" : "Glossary"}
        title={
          locale === "de"
            ? "Zentrale Begriffe der Zuverlässigkeitstechnik kurz erklärt."
            : "Key reliability engineering terms explained briefly."
        }
        description={
          locale === "de"
            ? "Das Glossar erhält die bisherige Glossar-URL und bietet eine SEO-fähige Grundlage, die später mit tieferen Fachartikeln verknüpft werden kann."
            : "The glossary retains the former glossary URL and provides an SEO-ready foundation that can later link to deeper technical articles."
        }
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {entries.map(([term, description]) => (
            <article
              key={term}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {term}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
