import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";
import { PageClosingCta } from "./page-closing-cta";
import type { SolutionServicePage } from "../_content/solution-service-pages";
import { localizeHref, type Locale } from "../_i18n/config";

type Props = {
  locale: Locale;
  page: SolutionServicePage;
};

const labels = {
  de: {
    overview: "Leistungsübersicht",
    discuss: "Projekt besprechen",
    work: "Was wir bearbeiten",
    result: "Was Sie erhalten",
    serviceOverview: "Alle Leistungen",
    contact: "Anfrage starten",
  },
  en: {
    overview: "Service overview",
    discuss: "Discuss your project",
    work: "What we work on",
    result: "What you receive",
    serviceOverview: "All services",
    contact: "Start an inquiry",
  },
} as const;

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

export function SolutionServiceDetailPage({ locale, page }: Props) {
  const text = labels[locale];

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full border border-brand-steel-cyan/20" />
        <div className="absolute -left-8 bottom-16 h-48 w-48 rounded-full border border-brand-steel-cyan/15" />

        <div className="relative mx-auto grid max-w-7xl xl:grid-cols-[56%_44%]">
          <div className="flex min-w-0 flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <h1 className="max-w-4xl font-winnstein-display text-4xl leading-[1.06] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.35rem]">
              {page.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
              {page.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localizeHref(locale, "/kontakt")}
                className="brand-action inline-flex min-h-14 items-center justify-between gap-7 bg-brand-steel-cyan px-7 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-[#0a729d]"
              >
                {text.discuss}
                <ArrowIcon />
              </Link>
              <Link
                href="#leistungsbausteine"
                className="brand-action brand-action-outline inline-flex min-h-14 items-center justify-between gap-5 border border-white/35 px-6 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/8"
              >
                {text.overview}
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[25rem] border-t border-white/15 xl:min-h-[39rem] xl:border-t-0 xl:border-l">
            <Image
              src={page.hero.image}
              alt={page.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 44vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,52,.38),transparent_52%),linear-gradient(0deg,rgba(3,19,52,.3),transparent_48%)]" />
          </div>
        </div>

        <nav
          aria-label={text.overview}
          className="relative border-t border-white/15"
        >
          <div className="mx-auto grid max-w-7xl sm:grid-cols-2 xl:grid-cols-4">
            {page.topics.items.map((topic) => (
              <Link
                key={topic.id}
                href={`#${topic.id}`}
                className="flex min-h-20 min-w-0 items-center justify-between gap-5 border-r border-b border-white/15 px-5 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-white/8 sm:px-8 xl:border-b-0"
              >
                <span className="min-w-0 hyphens-auto [overflow-wrap:anywhere]">
                  {topic.title}
                </span>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </nav>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section
        id="leistungsbausteine"
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid min-w-0 gap-7 border-b border-brand-marine/15 pb-10 xl:grid-cols-[0.86fr_1.14fr] xl:items-end">
            <h2 className="min-w-0 max-w-3xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] hyphens-auto sm:text-4xl lg:text-5xl">
              {page.topics.title}
            </h2>
            <p className="min-w-0 max-w-3xl text-lg leading-8 text-brand-marine/72 hyphens-auto [overflow-wrap:anywhere] xl:justify-self-end">
              {page.topics.description}
            </p>
          </div>

          <div className="hidden grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.12fr)_minmax(0,1fr)] border-x border-b border-brand-marine/15 bg-brand-marine-10 px-8 py-4 text-sm font-bold text-brand-marine/65 xl:grid">
            <span />
            <span>{text.work}</span>
            <span>{text.result}</span>
          </div>

          <div className="border-l border-brand-marine/15">
            {page.topics.items.map((topic) => (
              <article
                id={topic.id}
                key={topic.id}
                className="scroll-mt-28 grid min-w-0 border-r border-b border-brand-marine/15 xl:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.12fr)_minmax(0,1fr)]"
              >
                <div className="flex min-w-0 flex-col items-start gap-5 bg-brand-marine-10 p-6 lg:p-8">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-white ring-1 ring-brand-marine/10">
                    <Image
                      src={topic.icon}
                      alt=""
                      width={30}
                      height={30}
                      className="h-8 w-8"
                    />
                  </span>
                  <h3 className="min-w-0 max-w-full font-winnstein-display text-xl leading-tight font-bold hyphens-auto [overflow-wrap:anywhere] sm:text-2xl">
                    {topic.title}
                  </h3>
                </div>
                <div className="min-w-0 p-6 lg:p-8">
                  <p className="mb-3 text-sm font-bold text-brand-marine/55 xl:hidden">
                    {text.work}
                  </p>
                  <p className="min-w-0 text-base leading-8 text-brand-marine/76 hyphens-auto [overflow-wrap:anywhere]">
                    {topic.work}
                  </p>
                </div>
                <div className="min-w-0 border-t border-brand-marine/15 bg-brand-steel-cyan-10 p-6 lg:p-8 xl:border-t-0 xl:border-l">
                  <p className="mb-3 text-sm font-bold text-brand-marine/55 xl:hidden">
                    {text.result}
                  </p>
                  <p className="min-w-0 text-base leading-8 font-medium text-brand-marine hyphens-auto [overflow-wrap:anywhere]">
                    {topic.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-marine-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <h2 className="max-w-3xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {page.situations.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-marine/72">
              {page.situations.description}
            </p>
            <div className="mt-10 border-t border-brand-marine/15">
              {page.situations.items.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-3 border-b border-brand-marine/15 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8"
                >
                  <h3 className="font-winnstein-display text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-base leading-8 text-brand-marine/72">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="bg-brand-marine p-7 text-white sm:p-9 lg:p-10">
            <h2 className="font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.025em]">
              {page.deliverables.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              {page.deliverables.description}
            </p>
            <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {page.deliverables.items.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-2 py-5 sm:grid-cols-[2.5rem_1fr]"
                >
                  <span
                    aria-hidden="true"
                    className="brand-list-dash"
                  />
                  <div>
                    <h3 className="font-winnstein-display text-base font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/68">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 border-y border-brand-marine/15 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <h2 className="font-winnstein-display text-2xl leading-tight font-bold sm:text-3xl">
              {page.knowledge.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-brand-marine/70">
              {page.knowledge.description}
            </p>
          </div>
          <div className="grid border-l border-brand-marine/15 sm:grid-cols-3">
            {page.knowledge.links.map((link) => (
              <Link
                key={link.href}
                href={localizeHref(locale, link.href)}
                className="flex min-h-24 min-w-0 items-center justify-between gap-4 border-r border-y border-brand-marine/15 px-5 py-4 font-winnstein-display text-sm font-bold transition-colors hover:bg-brand-steel-cyan-10 sm:border-y-0"
              >
                <span className="min-w-0 hyphens-auto [overflow-wrap:anywhere]">
                  {link.label}
                </span>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageClosingCta
        title={page.cta.title}
        description={page.cta.text}
        primary={{
          href: localizeHref(locale, "/kontakt"),
          label: text.contact,
        }}
        secondary={{
          href: localizeHref(locale, "/leistungen"),
          label: text.serviceOverview,
        }}
      />
    </main>
  );
}
