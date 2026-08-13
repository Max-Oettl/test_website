import Link from "next/link";

import { BrandLineWatermark } from "../../_components/brand-line-watermark";
import { KnowledgeMediaPlaceholder } from "../../_components/knowledge-media-placeholder";
import { getKnowledgeArticles, type KnowledgeMedia } from "../../_content/knowledge-content";
import { localizeHref, resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  return buildLocalizedMetadata({
    locale,
    path: "/wissen",
    title:
      locale === "de"
        ? "Wissen zu Zuverlässigkeitstechnik, DoE und Risiko | RelTest"
        : "Reliability Engineering, DoE and Risk Knowledge | RelTest",
    description:
      locale === "de"
        ? "Fachwissen zu Zuverlässigkeitstechnik, Planung, Schwachstellenanalyse, Erprobung, Absicherung, Prognosen, DoE und technischem Risikomanagement."
        : "Technical knowledge on reliability engineering, planning, weak-point analysis, testing, assurance, prediction, DoE and risk management.",
  });
}

export default async function KnowledgePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const isGerman = locale === "de";
  const articles = getKnowledgeArticles(locale);
  const overview = articles[0];
  const foundationMedia = overview.heroMedia;
  const overviewHeroMedia: KnowledgeMedia = {
    src: "/graphics/wissen/reliability-product-development-overview.png",
    ratio: "wide",
    label: isGerman
      ? "Zuverlässigkeit in der Produktentwicklung"
      : "Reliability in product development",
    brief: isGerman
      ? "Anforderungen, Risiken, Modelle, Versuche, Daten und Nachweise greifen im Entwicklungsprozess ineinander."
      : "Requirements, risks, models, tests, data and evidence work together throughout product development.",
    alt: isGerman
      ? "Technisches Übersichtsbild eines elektromechanischen Produkts, das Anforderungen, Risikoanalyse, Modellbildung, Erprobung, Datenanalyse, Nachweis und Felderfahrung im Produktentwicklungsprozess verbindet."
      : "Technical overview of an electromechanical product connecting requirements, risk analysis, modelling, testing, data analysis, verification and field experience throughout product development.",
    caption: isGerman
      ? "Zuverlässigkeit entsteht, wenn Anforderungen, Risiken, Modelle, Versuche, Daten und Nachweise über die Produktentwicklung hinweg zusammengeführt werden."
      : "Reliability emerges when requirements, risks, models, tests, data and evidence are connected throughout product development.",
  };
  const fields = articles.filter((article) =>
    ["planung", "schwachstellenanalyse", "erprobung", "absicherung", "prognosen"].includes(article.slug),
  );
  const methods = articles.filter((article) =>
    ["design-of-experiments", "risikomanagement"].includes(article.slug),
  );

  return (
    <>
      <header className="relative overflow-hidden bg-[var(--solution-marine)] font-winnstein-body text-white">
        <BrandLineWatermark placement="knowledge" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 py-16 lg:grid-cols-[minmax(0,.9fr)_minmax(420px,.82fr)] lg:items-center lg:px-12 lg:py-20">
          <div>
            <p className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)]">
              {isGerman ? "Technisches Wissen" : "Technical knowledge"}
            </p>
            <h1 className="mt-4 max-w-4xl font-winnstein-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
              {isGerman
                ? "Zuverlässigkeit verstehen. Methoden sicher einordnen."
                : "Understand reliability. Apply methods with confidence."}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/[0.78]">
              {isGerman
                ? "Dieser Bereich erklärt die fachlichen Grundlagen hinter belastbaren Entwicklungs-, Prüf- und Freigabeentscheidungen. Die Inhalte stammen aus der bisherigen RelTest-Wissenswelt und werden hier in einer klaren, zusammenhängenden Struktur weitergeführt."
                : "This section explains the technical foundations behind defensible development, testing and release decisions. It continues the established RelTest knowledge base in a clear and connected structure."}
            </p>
            <Link
              href={localizeHref(locale, `/wissen/${overview.slug}`)}
              className="brand-action mt-9 inline-flex items-center gap-8 bg-[var(--solution-steel-cyan)] px-6 py-4 font-winnstein-display text-sm font-semibold text-[var(--solution-marine)]"
            >
              {isGerman ? "Grundlagen der Zuverlässigkeit" : "Reliability fundamentals"} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <KnowledgeMediaPlaceholder media={overviewHeroMedia} dark preload locale={locale} />
        </div>
        <div className="relative h-1.5 bg-brand-steel-cyan" aria-hidden="true" />
      </header>

      <main className="font-winnstein-body">
        <section className="mx-auto max-w-6xl px-6 pt-16 lg:px-8 lg:pt-24">
          <Link
            href={localizeHref(locale, `/wissen/${overview.slug}`)}
            className="group grid overflow-hidden border-y border-[var(--solution-marine-20)] lg:grid-cols-[.78fr_1.22fr]"
          >
            <div className="flex flex-col justify-center py-10 pr-0 lg:pr-14">
              <p className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)]">
                {isGerman ? "01 / Zuverlässigkeitstechnik" : "01 / Reliability engineering"}
              </p>
              <h2 className="mt-3 font-winnstein-display text-4xl font-semibold leading-tight text-[var(--solution-marine)]">
                {overview.navLabel}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--solution-marine-80)]">{overview.lead}</p>
              <span className="mt-7 font-winnstein-display font-semibold text-[var(--solution-steel-cyan)] underline decoration-transparent underline-offset-8 transition group-hover:decoration-current">
                {isGerman ? "Grundlagen vertiefen" : "Explore the fundamentals"} <span className="ml-5" aria-hidden="true">→</span>
              </span>
            </div>
            <KnowledgeMediaPlaceholder
              media={foundationMedia}
              className="my-8 lg:my-0"
              frameClassName="!aspect-[16/10] lg:!aspect-[16/9]"
              locale={locale}
            />
          </Link>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)]">
              {isGerman ? "Fachfelder" : "Technical fields"}
            </p>
            <h2 className="mt-3 font-winnstein-display text-4xl font-semibold leading-tight text-[var(--solution-marine)]">
              {isGerman
                ? "Je nach Fragestellung greifen unterschiedliche Perspektiven ineinander."
                : "Different perspectives come together depending on the engineering question."}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--solution-marine-80)]">
              {isGerman
                ? "Die Themen sind keine vorgeschriebene Prozesskette. Sie markieren eigenständige Arbeitsfelder, die in realen Projekten gezielt kombiniert werden."
                : "These topics are not a prescribed process chain. They are distinct fields that are combined as required in real projects."}
            </p>
          </div>

          <nav className="mt-14 border-t border-[var(--solution-marine-20)]" aria-label={isGerman ? "Wissensthemen" : "Knowledge topics"}>
            {fields.map((article, index) => (
              <Link
                key={article.slug}
                href={localizeHref(locale, `/wissen/${article.slug}`)}
                className="group grid gap-3 border-b border-[var(--solution-marine-20)] py-7 sm:grid-cols-[minmax(210px,.7fr)_minmax(0,1.3fr)_auto] sm:items-center sm:gap-8"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)]">0{index + 2}</span>
                  <h3 className="font-winnstein-display text-2xl font-semibold text-[var(--solution-marine)] transition group-hover:text-[var(--solution-steel-cyan)]">
                    {article.navLabel}
                  </h3>
                </div>
                <p className="text-base leading-7 text-[var(--solution-marine-80)]">{article.lead}</p>
                <span aria-hidden="true" className="text-2xl text-[var(--solution-steel-cyan)]">→</span>
              </Link>
            ))}
          </nav>
        </section>

        <section className="bg-[var(--solution-marine-10)]">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[.58fr_1.42fr]">
              <div>
                <p className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)]">
                  {isGerman ? "Querschnittsmethoden" : "Cross-cutting methods"}
                </p>
                <h2 className="mt-3 font-winnstein-display text-4xl font-semibold text-[var(--solution-marine)]">
                  {isGerman ? "Versuche planen und Risiken beherrschen" : "Plan experiments and manage risk"}
                </h2>
              </div>
              <div className="border-t border-[var(--solution-marine-20)]">
                {methods.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={localizeHref(locale, `/wissen/${article.slug}`)}
                    className="group block border-b border-[var(--solution-marine-20)] py-7"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="flex items-baseline gap-5">
                          <span className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)]">0{index + 7}</span>
                          <h3 className="font-winnstein-display text-2xl font-semibold text-[var(--solution-marine)] group-hover:text-[var(--solution-steel-cyan)]">
                            {article.navLabel}
                          </h3>
                        </div>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--solution-marine-80)]">{article.lead}</p>
                      </div>
                      <span aria-hidden="true" className="text-2xl text-[var(--solution-steel-cyan)]">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="border-t-4 border-[var(--solution-steel-cyan)] pt-7">
              <h2 className="font-winnstein-display text-3xl font-semibold text-[var(--solution-marine)]">
                {isGerman ? "Begriffe präzise nachschlagen" : "Look up key terms precisely"}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--solution-marine-80)]">
                {isGerman
                  ? "Das Glossar erklärt zentrale Kennzahlen, Methoden und Fachbegriffe aus Zuverlässigkeit, Lebensdauer und Risikomanagement."
                  : "The glossary explains key metrics, methods and terms from reliability, lifetime and risk management."}
              </p>
              <Link href={localizeHref(locale, "/glossar")} className="mt-6 inline-flex font-winnstein-display font-semibold text-[var(--solution-steel-cyan)] underline underline-offset-8">
                {isGerman ? "Glossar öffnen" : "Open glossary"} <span className="ml-5" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="border-t-4 border-[var(--solution-marine)] pt-7">
              <h2 className="font-winnstein-display text-3xl font-semibold text-[var(--solution-marine)]">
                {isGerman ? "Anwendungswissen aus der Praxis" : "Applied knowledge from practice"}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--solution-marine-80)]">
                {isGerman
                  ? "Vertiefende Beiträge zu Smart Data, beschleunigten Lebensdauertests und effizienter Testplanung finden Sie unter Aktuelles."
                  : "Further articles on smart data, accelerated lifetime testing and efficient test planning are available under News."}
              </p>
              <Link href={localizeHref(locale, "/aktuelles")} className="mt-6 inline-flex font-winnstein-display font-semibold text-[var(--solution-steel-cyan)] underline underline-offset-8">
                {isGerman ? "Fachbeiträge ansehen" : "View technical articles"} <span className="ml-5" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
