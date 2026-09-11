import Link from "next/link";

import type { Locale } from "../_i18n/config";

type SiteSearchProps = {
  compact?: boolean;
  glossaryHref: string;
  locale: Locale;
};

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="10.8"
        cy="10.8"
        r="6.8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m16 16 4.2 4.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function SiteSearch({
  compact = false,
  glossaryHref,
  locale,
}: SiteSearchProps) {
  const label =
    locale === "de"
      ? "Website und Glossar durchsuchen"
      : "Search the website and glossary";

  return (
    <Link
      href={glossaryHref}
      aria-label={label}
      title={label}
      className={`group flex min-h-12 min-w-12 items-center justify-center text-brand-marine transition-colors hover:bg-brand-steel-cyan-10 hover:text-brand-steel-cyan focus-visible:bg-brand-steel-cyan-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan ${
        compact ? "w-12" : ""
      }`}
    >
      <SearchIcon />
      <span className="sr-only">{label}</span>
    </Link>
  );
}
