import Link from "next/link";

import { localizeHref, type Locale } from "../_i18n/config";

type PageContextBarProps = {
  accent?: "solutions" | "education";
  currentLabel: string;
  locale: Locale;
  sectionHref: string;
  sectionLabel: string;
};

export function PageContextBar({
  accent = "solutions",
  currentLabel,
  locale,
  sectionHref,
  sectionLabel,
}: PageContextBarProps) {
  const isEducation = accent === "education";
  const overviewLabel = locale === "de" ? "Zur Übersicht" : "Back to overview";
  const currentIndicator =
    locale === "de" ? "Aktuelle Seite" : "Current page";

  return (
    <nav
      aria-label={
        locale === "de"
          ? "Bereichsübersicht und aktuelle Seite"
          : "Section overview and current page"
      }
      className={`page-context-bar sticky z-[45] w-full border-b-2 bg-white/[0.98] shadow-[0_10px_28px_rgba(20,36,82,0.08)] backdrop-blur-md ${
        isEducation ? "border-brand-education" : "border-brand-steel-cyan"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-7xl items-center px-3 sm:px-6 lg:px-8">
        <Link
          href={localizeHref(locale, sectionHref)}
          aria-label={`${overviewLabel}: ${sectionLabel}`}
          className={`group -ml-2 flex min-w-0 max-w-[58%] shrink-0 self-stretch items-center gap-3 border-r px-2 pr-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset sm:max-w-none sm:px-3 sm:pr-6 ${
            isEducation
              ? "border-brand-education/25 hover:bg-brand-education/[0.08] focus-visible:ring-brand-education"
              : "border-brand-steel-cyan/25 hover:bg-brand-steel-cyan-10 focus-visible:ring-brand-steel-cyan"
          }`}
        >
          <span
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-colors group-hover:text-white ${
              isEducation
                ? "border-brand-education text-brand-education group-hover:bg-brand-education"
                : "border-brand-steel-cyan text-brand-steel-cyan group-hover:bg-brand-steel-cyan"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
            >
              <path
                d="M19 12H5m6-6-6 6 6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </span>
          <span className="min-w-0 font-winnstein-display leading-tight">
            <span
              className={`block text-[0.62rem] font-bold tracking-[0.1em] uppercase ${
                isEducation
                  ? "text-brand-education"
                  : "text-brand-steel-cyan"
              }`}
            >
              {overviewLabel}
            </span>
            <span className="mt-1 block truncate text-sm font-bold text-brand-marine">
              {sectionLabel}
            </span>
          </span>
        </Link>
        <span className="min-w-0 flex-1 px-3 font-winnstein-display leading-tight sm:px-5">
          <span className="block text-[0.62rem] font-bold tracking-[0.1em] text-brand-marine/50 uppercase">
            {currentIndicator}
          </span>
          <span
            aria-current="page"
            className="mt-1 block truncate text-xs font-semibold text-brand-marine sm:text-sm"
            title={currentLabel}
          >
            {currentLabel}
          </span>
        </span>
      </div>
    </nav>
  );
}
