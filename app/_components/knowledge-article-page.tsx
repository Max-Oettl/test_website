import Image from "next/image";
import Link from "next/link";

const knowledgeHeaderImages = {
  de: {
    zuverlaessigkeitstechnik: { src: "/graphics/wissen/technical-plots/reliability-engineering-motor-de.png", width: 1536, height: 1024, alt: "Zuverlässigkeitstechnik vom technischen Anforderungsdokument über Prüfobjekt und Prüfdaten bis zur abgesicherten Entscheidung" },
    planung: { src: "/wissen/uebersicht/planung-de.png", width: 1672, height: 941, alt: "Diagramm zum Entscheidungsraum der Zuverlässigkeitsplanung mit Zuverlässigkeitskosten, Folgekosten und akzeptablen Kosten" },
    schwachstellenanalyse: { src: "/wissen/uebersicht/schwachstellenanalyse-de.png", width: 1672, height: 941, alt: "Badewannenkurve zur Schwachstellenanalyse mit Frühausfällen, Zufallsausfällen und Verschleißausfällen" },
    erprobung: { src: "/wissen/uebersicht/erprobung-de.png", width: 2172, height: 724, alt: "Vergleich von Worst-Case-, einsatzbezogenen und synthetischen Lastkollektiven für die Zuverlässigkeitserprobung" },
    absicherung: { src: "/wissen/uebersicht/absicherung-de.png", width: 1672, height: 941, alt: "Technisches Diagramm zur Zuverlässigkeitsabsicherung vom Bauteilmodell bis zum Systemnachweis" },
    prognosen: { src: "/wissen/uebersicht/reliability-prediction-overview.png", width: 760, height: 680, alt: "Veranschaulichung einer Zuverlässigkeitsprognose aus Versuchs- und Felddaten mit statistischem Lebensdauermodell" },
  },
  en: {
    zuverlaessigkeitstechnik: { src: "/graphics/wissen/technical-plots/reliability-engineering-motor-en.png", width: 1536, height: 1024, alt: "Reliability engineering from technical requirements through test object and test data to a substantiated decision" },
    planung: { src: "/wissen/uebersicht/planung-en.png", width: 1672, height: 941, alt: "Reliability planning decision-space diagram comparing reliability costs, failure costs and acceptable customer costs" },
    schwachstellenanalyse: { src: "/wissen/uebersicht/schwachstellenanalyse-en.png", width: 1672, height: 941, alt: "Bathtub curve for weak-point analysis showing early, random and wear-out failures" },
    erprobung: { src: "/wissen/uebersicht/erprobung-en.png", width: 1748, height: 900, alt: "Comparison of worst-case, use-specific and synthetic load profiles for reliability testing" },
    absicherung: { src: "/wissen/uebersicht/absicherung-en.png", width: 1672, height: 941, alt: "Technical reliability assurance diagram from component models to system verification" },
    prognosen: { src: "/wissen/uebersicht/reliability-prediction-overview.png", width: 760, height: 680, alt: "Reliability prediction based on test and field data using a statistical lifetime model" },
  },
} as const;

import type { KnowledgeArticle, KnowledgeMedia } from "../_content/knowledge-content";
import { getKnowledgeArticles } from "../_content/knowledge-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { KnowledgeMediaPlaceholder } from "./knowledge-media-placeholder";
import { SectionRailNavigation } from "./section-rail-navigation";

type Props = {
  article: KnowledgeArticle;
  locale: Locale;
};

const mediaWidthClasses: Record<
  NonNullable<KnowledgeMedia["maxWidth"]>,
  string
> = {
  tiny: "mx-auto w-full max-w-lg",
  small: "mx-auto w-full max-w-2xl",
  compact: "mx-auto w-full max-w-4xl",
  standard: "mx-auto w-full max-w-5xl",
  wide: "mx-auto w-full max-w-6xl",
};

export function KnowledgeArticlePage({ article, locale }: Props) {
  const isGerman = locale === "de";
  const articles = getKnowledgeArticles(locale);
  const related = article.related
    .map((slug) => articles.find((item) => item.slug === slug))
    .filter((item): item is KnowledgeArticle => Boolean(item));
  const isQuantitative = ["prognosen", "design-of-experiments", "erprobung"].includes(article.slug);
  const isDiagnostic = ["schwachstellenanalyse", "risikomanagement"].includes(article.slug);
  const headerImage = knowledgeHeaderImages[locale][article.slug as keyof (typeof knowledgeHeaderImages)[Locale]];
  const sectionIdPrefix = `knowledge-${article.slug}`;
  const sectionNavigationItems = article.sections.map((section, index) => ({
    href: `#${sectionIdPrefix}-${index + 1}`,
    label: section.heading,
    number: String(index + 1).padStart(2, "0"),
  }));

  return (
    <>
      <header className="bg-[var(--solution-marine)] font-winnstein-body text-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 lg:grid-cols-[minmax(0,.92fr)_minmax(360px,.68fr)] lg:items-center lg:px-12 lg:py-20">
          <div>
            <Link
              href={localizeHref(locale, "/wissen")}
              className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)] underline decoration-transparent underline-offset-8 transition hover:decoration-current"
            >
              {isGerman ? "Wissen im Überblick" : "Knowledge overview"} <span aria-hidden="true">←</span>
            </Link>
            <p className="mt-12 font-winnstein-display text-sm font-semibold tracking-[0.08em] text-[var(--solution-steel-cyan)]">
              {article.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-winnstein-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.65rem]">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/[0.78]">
              {article.lead}
            </p>
          </div>
          {headerImage ? (
            <figure className="relative flex min-h-[240px] w-full max-w-[560px] items-center justify-center justify-self-center lg:min-h-[300px]">
              <Image
                src={headerImage.src}
                alt={headerImage.alt}
                width={headerImage.width}
                height={headerImage.height}
                sizes="(min-width: 1024px) 48vw, 100vw"
                preload
                className="h-auto max-h-[360px] w-full object-contain [filter:brightness(1.06)_invert(1)_hue-rotate(180deg)] mix-blend-screen"
              />
            </figure>
          ) : (
            <KnowledgeMediaPlaceholder media={article.heroMedia} dark preload locale={locale} />
          )}
        </div>
      </header>

      <main className="font-winnstein-body">
        {article.definition ? (
          <section className="border-b border-[var(--solution-marine-20)] bg-white">
            <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
              <p className="border-l-4 border-[var(--solution-steel-cyan)] pl-6 font-winnstein-display text-2xl font-medium leading-relaxed text-[var(--solution-marine)] sm:text-3xl">
                {article.definition}
              </p>
            </div>
          </section>
        ) : null}

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:px-8 lg:py-20 xl:grid-cols-[13rem_minmax(0,1fr)] xl:gap-16">
          <SectionRailNavigation
            ariaLabel={
              isGerman
                ? `Abschnitte in ${article.navLabel}`
                : `Sections in ${article.navLabel}`
            }
            items={sectionNavigationItems}
            title={article.navLabel}
          />

          <article className="min-w-0">
            {article.sections.map((section, index) => (
              <section
                id={`${sectionIdPrefix}-${index + 1}`}
                key={section.heading}
                className={`scroll-mt-36 ${index > 0 ? "mt-20 border-t border-[var(--solution-marine-20)] pt-16" : ""}`}
              >
                <div className={`${isDiagnostic ? "lg:grid-cols-[minmax(280px,.72fr)_minmax(0,1.28fr)] xl:grid-cols-[minmax(320px,.75fr)_minmax(0,1.25fr)]" : "lg:grid-cols-[minmax(220px,.55fr)_minmax(0,1.45fr)] xl:grid-cols-[minmax(340px,.75fr)_minmax(0,1.25fr)]"} grid gap-7 xl:gap-12`}>
                  <h2 className="min-w-0 break-words font-winnstein-display text-3xl font-semibold leading-tight text-[var(--solution-marine)] hyphens-none">
                    {section.heading}
                  </h2>
                  <div>
                    <div className="space-y-6 text-lg leading-8 text-[var(--solution-marine-80)]">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets?.length ? (
                      <ul className="mt-8 space-y-3 border-y border-[var(--solution-marine-20)] py-6">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-4 text-base leading-7 text-[var(--solution-marine)]">
                            <span aria-hidden="true" className="mt-[.8em] h-0.5 w-4 shrink-0 bg-[var(--solution-steel-cyan)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
                {section.media ? (
                  <div
                    className={`${
                      section.media.maxWidth
                        ? mediaWidthClasses[section.media.maxWidth]
                        : isQuantitative
                          ? "-mx-0 lg:-mx-16"
                          : ""
                    } mt-10`}
                  >
                    {section.media.lead ? (
                      <p className="mb-5 max-w-4xl border-l-2 border-[var(--solution-steel-cyan)] pl-5 text-base font-medium leading-7 text-[var(--solution-marine)]">
                        {section.media.lead}
                      </p>
                    ) : null}
                    <KnowledgeMediaPlaceholder media={section.media} />
                  </div>
                ) : null}
              </section>
            ))}
          </article>
        </div>

        <section className="bg-[var(--solution-marine-10)]">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-16">
            <div className="flex flex-col justify-between gap-6 border-b border-[var(--solution-marine-20)] pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)]">
                  {isGerman ? "Zusammenhänge" : "Related knowledge"}
                </p>
                <h2 className="mt-2 font-winnstein-display text-3xl font-semibold text-[var(--solution-marine)]">
                  {isGerman ? "Fachlich weiterdenken" : "Continue the technical perspective"}
                </h2>
              </div>
              <Link
                href={localizeHref(locale, article.service.href)}
                className="brand-action inline-flex w-fit items-center gap-7 bg-[var(--solution-marine)] px-6 py-4 font-winnstein-display text-sm font-semibold text-white"
              >
                {article.service.label} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <nav aria-label={isGerman ? "Verwandte Wissensthemen" : "Related knowledge topics"}>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={localizeHref(locale, `/wissen/${item.slug}`)}
                  className="group flex items-center justify-between gap-6 border-b border-[var(--solution-marine-20)] py-6"
                >
                  <span className="font-winnstein-display text-xl font-semibold text-[var(--solution-marine)] group-hover:text-[var(--solution-steel-cyan)]">
                    {item.navLabel}
                  </span>
                  <span aria-hidden="true" className="text-2xl text-[var(--solution-steel-cyan)]">→</span>
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </main>
    </>
  );
}
