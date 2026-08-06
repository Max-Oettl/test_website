import Image from "next/image";
import Link from "next/link";

import type { DetailPage } from "../_content/migration-pages";
import { localizeHref, type Locale } from "../_i18n/config";

type EducationDetailPageProps = {
  locale: Locale;
  page: DetailPage;
};

const detailVisuals: Record<
  string,
  {
    src: string;
    position: string;
  }
> = {
  "doe-praxisorientierte-statistische-versuchsplanung": {
    src: "/team/img-0071.jpg",
    position: "object-center",
  },
  "zuverlaessigkeit-erprobung-fuer-praktiker": {
    src: "/team/img-0107.png",
    position: "object-center",
  },
  "entwicklung-absicherung-elektronischer-komponenten": {
    src: "/team/img-0139.jpg",
    position: "object-center",
  },
};

const editorialCopy = {
  de: {
    format: "Vor-Ort-Schulung",
    overview: "Inhalte im Überblick",
    outcomeTitle: "Was Ihr Team aus der Schulung mitnimmt",
    related: "Passende Themen",
    back: "Alle Education-Angebote",
    imageAltPrefix: "RelTest Schulung zu",
  },
  en: {
    format: "On-site training",
    overview: "Content at a glance",
    outcomeTitle: "What your team takes away",
    related: "Related topics",
    back: "All Education offers",
    imageAltPrefix: "RelTest training on",
  },
} as const;

function resolveHref(locale: Locale, href: string) {
  return href.startsWith("http") ? href : localizeHref(locale, href);
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
    >
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

export function EducationDetailPage({
  locale,
  page,
}: EducationDetailPageProps) {
  const copy = editorialCopy[locale];
  const visual = detailVisuals[page.slug] ?? {
    src: "/team/img-0107.png",
    position: "object-center",
  };

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[minmax(0,0.96fr)_minmax(30rem,1.04fr)]">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <Link
              href={localizeHref(locale, "/education")}
              className="inline-flex w-fit items-center gap-3 font-winnstein-display text-sm font-bold text-brand-education transition-colors hover:text-white"
            >
              <span aria-hidden="true">←</span>
              {copy.back}
            </Link>
            <p className="mt-10 font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-education">
              {copy.format}
            </p>
            <h1 className="mt-4 max-w-4xl font-winnstein-display text-4xl leading-[1.05] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.75rem]">
              {page.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76">
              {page.description}
            </p>
          </div>
          <div className="relative min-h-[25rem] border-t border-white/15 lg:min-h-[39rem] lg:border-t-0 lg:border-l">
            <Image
              src={visual.src}
              alt={`${copy.imageAltPrefix} ${page.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className={`object-cover ${visual.position}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,52,.25),transparent_50%)]" />
          </div>
        </div>
        <div className="h-2 bg-brand-education" />
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.55fr)]">
          <div>
            <p className="max-w-4xl text-xl leading-9 font-medium text-brand-marine/85 sm:text-2xl sm:leading-10">
              {page.lead}
            </p>
            <div className="mt-12 border-t border-brand-marine/20">
              {page.sections.map((section, index) => (
                <article
                  key={section.title}
                  className="grid gap-4 border-b border-brand-marine/20 py-8 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="font-winnstein-display text-2xl leading-snug font-bold tracking-[-0.025em]">
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-base leading-8 text-brand-marine/70">
                      {section.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="h-fit border-t-4 border-brand-education bg-brand-steel-cyan-10 p-7 lg:sticky lg:top-32">
            <h2 className="font-winnstein-display text-2xl font-bold">
              {copy.overview}
            </h2>
            <ul className="mt-6 divide-y divide-brand-marine/15 border-y border-brand-marine/15">
              {page.proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-4 py-4 text-sm leading-6 font-semibold"
                >
                  <span
                    aria-hidden="true"
                    className="brand-list-dash brand-list-dash-education"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={resolveHref(locale, page.primaryCta.href)}
              target={page.primaryCta.external ? "_blank" : undefined}
              rel={page.primaryCta.external ? "noopener noreferrer" : undefined}
              className="brand-action mt-7 inline-flex min-h-12 w-full items-center justify-between gap-5 bg-brand-marine px-5 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan"
            >
              {page.primaryCta.label}
              <ArrowIcon />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-brand-steel-cyan-10 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
            {copy.outcomeTitle}
          </h2>
          <div className="mt-10 grid border-t border-brand-marine/20 md:grid-cols-3">
            {page.sections.map((section, index) => (
              <div
                key={section.title}
                className="border-b border-brand-marine/20 py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="font-winnstein-display text-3xl font-bold text-brand-education">
                  0{index + 1}
                </span>
                <p className="mt-4 text-base leading-7 font-semibold">
                  {section.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {page.related?.length ? (
        <section className="bg-white px-5 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 border-y border-brand-marine/15 py-7 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="font-winnstein-display text-xl font-bold">
              {copy.related}
            </h2>
            <div className="flex flex-wrap gap-x-7 gap-y-4">
              {page.related.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(locale, link.href)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-3 border-b border-brand-steel-cyan pb-1 text-sm font-semibold"
                >
                  {link.label}
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-brand-marine px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em]">
              {page.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">
              {page.ctaText}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={resolveHref(locale, page.primaryCta.href)}
              target={page.primaryCta.external ? "_blank" : undefined}
              rel={page.primaryCta.external ? "noopener noreferrer" : undefined}
              className="brand-action inline-flex min-h-12 items-center justify-between gap-6 bg-brand-education px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-[#008f48]"
            >
              {page.primaryCta.label}
              <ArrowIcon />
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
                className="brand-action brand-action-outline inline-flex min-h-12 items-center justify-between gap-6 border border-white/30 px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:border-white"
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
