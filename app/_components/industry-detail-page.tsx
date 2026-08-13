import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";
import type { IndustryDetailContent } from "../_content/industry-detail-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { PageClosingCta } from "./page-closing-cta";

type Props = {
  locale: Locale;
  content: IndustryDetailContent;
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0"
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

function ReliabilityIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="24" cy="24" r="13" />
        <circle cx="24" cy="24" r="5" />
        <path d="M24 5v7M24 36v7M5 24h7M36 24h7M35 13 30 18M18 30l-5 5" />
      </g>
    </svg>
  );
}

function RiskIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M24 5 39 11v11c0 9-6.1 16.3-15 21-8.9-4.7-15-12-15-21V11L24 5Z" />
        <path d="m17 24 5 5 10-11" />
      </g>
    </svg>
  );
}

function DataIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M8 38h32M10 34V10M14 30l8-8 6 4 9-12" />
        <circle cx="14" cy="30" r="2" />
        <circle cx="22" cy="22" r="2" />
        <circle cx="28" cy="26" r="2" />
        <circle cx="37" cy="14" r="2" />
      </g>
    </svg>
  );
}

const serviceIcons = [ReliabilityIcon, RiskIcon, DataIcon] as const;

export function IndustryDetailPage({ locale, content }: Props) {
  const labels =
    locale === "de"
      ? {
          eyebrow: "Branchenkompetenz",
          industries: "Alle Branchen",
          serviceLink: "Leistung im Detail",
          context: "Fachlicher Kontext",
          questions: "Aus dem Projektalltag",
        }
      : {
          eyebrow: "Industry expertise",
          industries: "All industries",
          serviceLink: "Explore service",
          context: "Engineering context",
          questions: "From project practice",
        };

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[minmax(0,0.88fr)_minmax(30rem,1.12fr)]">
          <div className="flex min-w-0 flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <Link
              href={localizeHref(locale, "/branchen")}
              className="inline-flex w-fit items-center gap-3 font-winnstein-display text-sm font-bold text-brand-steel-cyan"
            >
              <span aria-hidden="true">←</span>
              {labels.industries}
            </Link>
            <p className="mt-9 font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {labels.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.65rem]">
              {content.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
              {content.heroLead}
            </p>
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="brand-action mt-9 inline-flex min-h-14 w-fit items-center justify-between gap-8 bg-brand-steel-cyan px-7 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-marine"
            >
              {content.heroCta}
              <ArrowIcon />
            </Link>
          </div>

          <div className="relative min-h-[29rem] border-t border-white/15 lg:min-h-[44rem] lg:border-t-0 lg:border-l">
            <Image
              src={content.heroImage}
              alt={content.heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,52,.54),transparent_48%),linear-gradient(0deg,rgba(3,19,52,.38),transparent_55%)]" />
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <h2 className="max-w-3xl font-winnstein-display text-3xl leading-[1.13] font-bold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {content.decisionTitle}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-brand-marine/72 lg:border-l lg:border-brand-marine/18 lg:pl-10">
              {content.decisionText}
            </p>
          </div>

          <div className="relative mt-14 grid border-t border-l border-brand-marine/18 md:grid-cols-2 xl:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 left-0 hidden h-px bg-brand-steel-cyan xl:block"
            />
            {content.decisionPath.map((step, index) => (
              <article
                key={step.label}
                className="relative border-r border-b border-brand-marine/18 p-6 sm:p-7"
              >
                <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-winnstein-display text-xl font-bold">
                  {step.label}
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-marine/68">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f8] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-brand-marine/16 pb-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
            <h2 className="font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {content.servicesTitle}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-brand-marine/72 lg:justify-self-end">
              {content.servicesLead}
            </p>
          </div>

          <div className="border-x border-brand-marine/16 bg-white">
            {content.services.map((service, index) => {
              const ServiceIcon = serviceIcons[index] ?? ReliabilityIcon;

              return (
                <article
                  key={service.title}
                  className="grid border-b border-brand-marine/16 lg:grid-cols-[5.5rem_minmax(15rem,0.7fr)_minmax(0,1.3fr)_auto]"
                >
                  <div className="flex items-start justify-center p-6 text-brand-steel-cyan lg:border-r lg:border-brand-marine/16">
                    <ServiceIcon />
                  </div>
                  <h3 className="px-6 pb-2 font-winnstein-display text-2xl leading-tight font-bold lg:flex lg:items-center lg:border-r lg:border-brand-marine/16 lg:py-8">
                    {service.title}
                  </h3>
                  <div className="px-6 py-6 lg:px-8 lg:py-8">
                    <p className="max-w-3xl text-base leading-8 text-brand-marine/72">
                      {service.text}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {service.topics.map((topic) => (
                        <span
                          key={topic}
                          className="border-b border-brand-steel-cyan/55 pb-1 text-sm font-semibold text-brand-marine/82"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={localizeHref(locale, service.href)}
                    className="group flex min-h-16 items-center justify-between gap-5 border-t border-brand-marine/16 px-6 font-winnstein-display text-sm font-bold transition-colors hover:bg-brand-marine hover:text-white lg:min-h-full lg:w-48 lg:border-t-0 lg:border-l"
                  >
                    {labels.serviceLink}
                    <span className="text-brand-steel-cyan transition-transform group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)]">
            <div>
              <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
                {labels.questions}
              </p>
              <h2 className="mt-4 max-w-xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
                {content.questionsTitle}
              </h2>
              <div className="mt-8 h-1 w-14 bg-brand-steel-cyan" />
            </div>
            <div className="border-t border-brand-marine/18">
              {content.questions.map((item, index) => (
                <article
                  key={item.question}
                  className="grid gap-3 border-b border-brand-marine/18 py-7 sm:grid-cols-[3rem_minmax(0,0.78fr)_minmax(0,1.22fr)] sm:gap-6"
                >
                  <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                    0{index + 1}
                  </span>
                  <h3 className="font-winnstein-display text-lg leading-7 font-bold">
                    {item.question}
                  </h3>
                  <p className="text-base leading-7 text-brand-marine/70">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-marine px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <div>
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {labels.context}
            </p>
            <h2 className="mt-4 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {content.contextTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">
              {content.contextText}
            </p>
          </div>
          <div className="grid border-t border-l border-white/20 sm:grid-cols-2">
            {content.contextTerms.map((term) => (
              <div
                key={term}
                className="flex min-h-24 items-center gap-4 border-r border-b border-white/20 p-5"
              >
                <span
                  aria-hidden="true"
                  className="brand-list-dash brand-list-dash-center"
                />
                <span className="font-winnstein-display text-sm leading-6 font-bold">
                  {term}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageClosingCta
        title={content.ctaTitle}
        description={content.ctaText}
        primary={{
          href: localizeHref(locale, "/kontakt"),
          label: content.ctaLabel,
        }}
      />
    </main>
  );
}
