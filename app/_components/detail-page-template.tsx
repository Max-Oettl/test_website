import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";
import { BrandLineWatermark } from "./brand-line-watermark";

import type { DetailPage } from "../_content/migration-pages";
import { localizeHref, type Locale } from "../_i18n/config";

type DetailPageTemplateProps = {
  locale: Locale;
  page: DetailPage;
};

function resolveHref(locale: Locale, href: string) {
  return href.startsWith("http") ? href : localizeHref(locale, href);
}

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

export function DetailPageTemplate({ locale, page }: DetailPageTemplateProps) {
  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <BrandLineWatermark placement="knowledge" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <Link
            href={localizeHref(locale, "/aktuelles")}
            className="inline-flex items-center gap-3 font-winnstein-display text-sm font-bold text-brand-steel-cyan transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span>
            {locale === "de" ? "Alle Beiträge" : "All news"}
          </Link>
          <p className="mt-10 font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
            {page.eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.8rem]">
            {page.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76">
            {page.description}
          </p>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-20">
          <div>
            <p className="max-w-4xl text-xl leading-9 font-medium text-brand-marine">
              {page.lead}
            </p>

            {page.visual ? (
              <figure className="mt-12 border border-brand-marine/18 bg-brand-steel-cyan-10 p-5">
                <Image
                  src={page.visual.src}
                  alt={page.visual.alt}
                  width={920}
                  height={540}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 760px"
                />
                {page.visual.caption ? (
                  <figcaption className="mt-4 border-l-2 border-brand-steel-cyan pl-4 text-sm leading-6 text-brand-marine/64">
                    {page.visual.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            <div className="mt-12 border-t border-brand-marine/18">
              {page.sections.map((section) => (
                <article
                  key={section.title}
                  className="grid gap-4 border-b border-brand-marine/18 py-8 sm:grid-cols-[0.62fr_1.38fr] sm:gap-8"
                >
                  <h2 className="font-winnstein-display text-2xl leading-tight font-bold tracking-[-0.025em]">
                    {section.title}
                  </h2>
                  <p className="text-base leading-8 text-brand-marine/72">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:border-l lg:border-brand-marine/18 lg:pl-10">
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {page.proofPointsTitle}
            </p>
            <ul className="mt-6 border-t border-brand-marine/18">
              {page.proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-4 border-b border-brand-marine/18 py-5 text-sm leading-7 font-medium text-brand-marine"
                >
                  <span aria-hidden="true" className="text-brand-steel-cyan">—</span>
                  {point}
                </li>
              ))}
            </ul>

            {page.related?.length ? (
              <div className="mt-12">
                <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
                  {locale === "de" ? "Verwandte Themen" : "Related topics"}
                </p>
                <div className="mt-5 flex flex-col border-t border-brand-marine/18">
                  {page.related.map((link) => (
                    <Link
                      key={link.href}
                      href={resolveHref(locale, link.href)}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between gap-5 border-b border-brand-marine/18 py-4 font-winnstein-display text-sm font-bold transition-colors hover:text-brand-steel-cyan"
                    >
                      {link.label}
                      <ArrowIcon />
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="border-t border-line-soft bg-brand-steel-cyan-10 px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="brand-panel-cut-bottom-right relative mx-auto grid max-w-7xl gap-8 overflow-hidden bg-white px-7 py-9 sm:px-10 sm:py-11 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-14 lg:py-12">
          <span aria-hidden="true" className="absolute top-0 left-0 h-1 w-28 bg-brand-steel-cyan" />
          <div>
            <h2 className="max-w-4xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {page.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-brand-marine/72">
              {page.ctaText}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-72">
            <Link
              href={resolveHref(locale, page.primaryCta.href)}
              target={page.primaryCta.external ? "_blank" : undefined}
              rel={page.primaryCta.external ? "noopener noreferrer" : undefined}
              className="brand-action inline-flex min-h-12 w-full items-center justify-between gap-5 bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan"
            >
              {page.primaryCta.label}
              <ArrowIcon />
            </Link>
            {page.secondaryCta ? (
              <Link
                href={resolveHref(locale, page.secondaryCta.href)}
                target={page.secondaryCta.external ? "_blank" : undefined}
                rel={page.secondaryCta.external ? "noopener noreferrer" : undefined}
                className="brand-action brand-action-outline brand-action-outline-light inline-flex min-h-12 w-full items-center justify-between gap-5 px-6 py-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan"
              >
                {page.secondaryCta.label}
                <ArrowIcon />
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
