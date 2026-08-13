import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";

import type { DetailPage } from "../_content/migration-pages";
import { localizeHref, type Locale } from "../_i18n/config";
import { PageIntro } from "./page-intro";

type DetailPageTemplateProps = {
  locale: Locale;
  page: DetailPage;
};

function resolveHref(locale: Locale, href: string) {
  return href.startsWith("http") ? href : localizeHref(locale, href);
}

export function DetailPageTemplate({ locale, page }: DetailPageTemplateProps) {
  return (
    <>
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            {page.visual ? (
              <figure className="mb-8 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                <Image
                  src={page.visual.src}
                  alt={page.visual.alt}
                  width={920}
                  height={540}
                  className="h-auto w-full"
                />
                {page.visual.caption ? (
                  <figcaption className="mt-3 text-xs leading-5 font-medium text-slate-500">
                    {page.visual.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              {page.proofPointsTitle}
            </p>
            <div className="mt-6 grid gap-3">
              {page.proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl bg-slate-50 px-4 py-4 ring-1 ring-slate-200"
                >
                  <div className="flex gap-3">
                    <span aria-hidden="true" className="brand-list-dash" />
                    <p className="text-sm leading-7 font-medium text-slate-700">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div>
            <p className="text-xl leading-9 font-medium text-slate-800">
              {page.lead}
            </p>
            <div className="mt-10 grid gap-5">
              {page.sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {page.related?.length ? (
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              {locale === "de" ? "Verwandte Themen" : "Related topics"}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {page.related.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(locale, link.href)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="brand-chamfer-control-sm border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.58fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                {page.ctaTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                {page.ctaText}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={resolveHref(locale, page.primaryCta.href)}
                target={page.primaryCta.external ? "_blank" : undefined}
                rel={page.primaryCta.external ? "noopener noreferrer" : undefined}
                className="brand-chamfer-control inline-flex items-center justify-center bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                {page.primaryCta.label}
              </Link>
              {page.secondaryCta ? (
                <Link
                  href={resolveHref(locale, page.secondaryCta.href)}
                  target={page.secondaryCta.external ? "_blank" : undefined}
                  rel={
                    page.secondaryCta.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="brand-action brand-action-outline inline-flex items-center justify-center border border-white/15 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
                >
                  {page.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
