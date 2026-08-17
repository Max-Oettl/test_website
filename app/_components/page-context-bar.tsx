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
  const currentIndicator = locale === "de" ? "Aktuell" : "Current";

  return (
    <nav
      aria-label={
        locale === "de" ? "Aktuelle Seitenposition" : "Current page location"
      }
      className={`page-context-bar sticky z-[45] w-full border-b-2 bg-white/[0.98] shadow-[0_10px_28px_rgba(20,36,82,0.08)] backdrop-blur-md ${
        isEducation ? "border-brand-education" : "border-brand-steel-cyan"
      }`}
    >
      <div className="mx-auto flex min-h-12 max-w-7xl items-center gap-2.5 px-5 sm:gap-3 sm:px-6 lg:px-8">
        <span className="hidden shrink-0 font-winnstein-display text-[0.65rem] font-bold tracking-[0.12em] text-brand-marine/55 uppercase sm:inline">
          {currentIndicator}
        </span>
        <Link
          href={localizeHref(locale, sectionHref)}
          className={`shrink-0 font-winnstein-display text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isEducation
              ? "text-brand-education hover:text-brand-marine focus-visible:ring-brand-education"
              : "text-brand-steel-cyan hover:text-brand-marine focus-visible:ring-brand-steel-cyan"
          }`}
        >
          {sectionLabel}
        </Link>
        <span
          aria-hidden="true"
          className={
            isEducation ? "text-brand-education" : "text-brand-steel-cyan"
          }
        >
          /
        </span>
        <span
          aria-current="page"
          className={`min-w-0 truncate border-l-2 px-2.5 py-1 font-winnstein-display text-sm font-semibold text-brand-marine sm:px-3 ${
            isEducation
              ? "border-brand-education bg-brand-education/[0.08]"
              : "border-brand-steel-cyan bg-brand-steel-cyan-10"
          }`}
          title={currentLabel}
        >
          {currentLabel}
        </span>
      </div>
    </nav>
  );
}
