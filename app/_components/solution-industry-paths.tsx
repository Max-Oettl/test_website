import Link from "next/link";

import { getSolutionIndustryPaths } from "../_content/solution-industry-paths";
import { localizeHref, type Locale } from "../_i18n/config";

type Props = {
  locale: Locale;
  serviceSlug: string;
};

const labels = {
  de: {
    eyebrow: "Leistungspakete in der Praxis",
    title: "Konkrete Leitpfade nach Branche",
    description:
      "Die Branchenseiten zeigen, wie RelTest Anforderungen, Risiken, Erprobung und Daten im jeweiligen technischen Umfeld zu einem belastbaren Vorgehen verbindet.",
    all: "Alle Branchen ansehen",
    path: "Leitpfad",
    open: "Branchen-Leitpfad ansehen",
  },
  en: {
    eyebrow: "Service packages in practice",
    title: "Concrete pathways by industry",
    description:
      "The industry pages show how RelTest connects requirements, risks, testing and data into a robust approach for each technical environment.",
    all: "View all industries",
    path: "Pathway",
    open: "View industry pathway",
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

export function SolutionIndustryPaths({ locale, serviceSlug }: Props) {
  const paths = getSolutionIndustryPaths(locale, serviceSlug);
  const text = labels[locale];

  if (paths.length === 0) {
    return null;
  }

  return (
    <section
      id="branchen-leitpfade"
      aria-labelledby={`branchen-leitpfade-${serviceSlug}`}
      className="scroll-mt-28 bg-brand-steel-cyan-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 border-b border-brand-marine/15 pb-9 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] lg:items-end">
          <div>
            <p className="font-winnstein-display text-xs font-bold tracking-[0.15em] text-brand-marine uppercase">
              {text.eyebrow}
            </p>
            <h2
              id={`branchen-leitpfade-${serviceSlug}`}
              className="mt-4 max-w-3xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl"
            >
              {text.title}
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-8 text-brand-marine/72">
              {text.description}
            </p>
            <Link
              href={localizeHref(locale, "/branchen")}
              className="mt-5 inline-flex items-center gap-3 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold transition-colors hover:text-brand-marine"
            >
              {text.all}
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="grid border-l border-brand-marine/15 bg-white lg:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={`${path.industrySlug}-${path.serviceTitle}`}
              href={localizeHref(locale, path.href)}
              className="group flex min-w-0 flex-col border-r border-b border-brand-marine/15 p-6 transition-colors hover:bg-brand-steel-cyan-10 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-steel-cyan sm:p-7"
            >
              <p className="font-winnstein-display text-sm font-bold text-brand-marine">
                {path.industryTitle}
              </p>
              <h3 className="mt-4 min-w-0 font-winnstein-display text-xl leading-tight font-bold hyphens-auto [overflow-wrap:anywhere] sm:text-2xl">
                {path.serviceTitle}
              </h3>
              <p className="mt-4 min-w-0 text-base leading-7 text-brand-marine/70 hyphens-auto [overflow-wrap:anywhere]">
                {path.serviceText}
              </p>

              <div className="mt-7 border-t border-brand-marine/15 pt-5">
                <p className="font-winnstein-display text-[0.68rem] font-bold tracking-[0.12em] text-brand-marine/75 uppercase">
                  {text.path}
                </p>
                <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold text-brand-marine/76">
                  {path.steps.map((step, index) => (
                    <li key={step} className="inline-flex items-center gap-2">
                      {index > 0 ? (
                        <span aria-hidden="true" className="text-brand-steel-cyan">
                          →
                        </span>
                      ) : null}
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <span className="mt-7 inline-flex items-center justify-between gap-5 border-t border-brand-marine/15 pt-5 font-winnstein-display text-sm font-bold">
                {text.open}
                <span className="text-brand-marine transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
