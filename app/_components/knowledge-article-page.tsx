import Link from "next/link";

import type { KnowledgeArticle } from "../_content/knowledge-content";
import { getKnowledgeArticles } from "../_content/knowledge-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { KnowledgeMediaPlaceholder } from "./knowledge-media-placeholder";

type Props = {
  article: KnowledgeArticle;
  locale: Locale;
};

export function KnowledgeArticlePage({ article, locale }: Props) {
  const isGerman = locale === "de";
  const articles = getKnowledgeArticles(locale);
  const related = article.related
    .map((slug) => articles.find((item) => item.slug === slug))
    .filter((item): item is KnowledgeArticle => Boolean(item));
  const isQuantitative = ["prognosen", "design-of-experiments", "erprobung"].includes(article.slug);
  const isDiagnostic = ["schwachstellenanalyse", "risikomanagement"].includes(article.slug);

  return (
    <>
      <header className={`${isQuantitative ? "bg-white text-[var(--solution-marine)]" : "bg-[var(--solution-marine)] text-white"} font-winnstein-body`}>
        <div className={`${isQuantitative ? "lg:grid-cols-1" : "lg:grid-cols-[minmax(0,.92fr)_minmax(420px,.78fr)] lg:items-center"} mx-auto grid max-w-[1440px] gap-10 px-6 py-14 lg:px-12 lg:py-20`}>
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
            <p className={`mt-7 max-w-3xl text-lg leading-8 ${isQuantitative ? "text-[var(--solution-marine-80)]" : "text-white/[0.78]"}`}>
              {article.lead}
            </p>
          </div>
          <KnowledgeMediaPlaceholder media={article.heroMedia} dark={!isQuantitative} preload className={isQuantitative ? "mt-2" : ""} />
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

        <article className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
          {article.sections.map((section, index) => (
            <section
              key={section.heading}
              className={`${index > 0 ? "mt-20 border-t border-[var(--solution-marine-20)] pt-16" : ""}`}
            >
              <div className={`${isDiagnostic ? "lg:grid-cols-[minmax(280px,.72fr)_minmax(0,1.28fr)]" : "lg:grid-cols-[minmax(220px,.55fr)_minmax(0,1.45fr)]"} grid gap-7`}>
                <h2 className="font-winnstein-display text-3xl font-semibold leading-tight text-[var(--solution-marine)]">
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
                <div className={`${isQuantitative ? "-mx-0 lg:-mx-16" : ""} mt-10`}>
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
