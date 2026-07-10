"use client";

import { usePathname, useRouter } from "next/navigation";
import { startTransition } from "react";

import type { Locale } from "../_i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  compact?: boolean;
};

export function LanguageSwitcher({
  locale,
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  async function switchLanguage(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const nextPathname = segments.join("/") || `/${nextLocale}`;
    const nextPath =
      typeof window === "undefined"
        ? nextPathname
        : `${nextPathname}${window.location.search}${window.location.hash}`;

    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: nextLocale }),
    });

    startTransition(() => {
      router.push(nextPath);
    });
  }

  return (
    <div
      className={`inline-flex items-center gap-2 ${
        compact
          ? "w-full justify-center rounded-xl border border-slate-200 px-3 py-2.5"
          : "px-1"
      }`}
      aria-label={locale === "de" ? "Sprache auswählen" : "Select language"}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3c-2.3 2.5-3.5 5.5-3.5 9S9.7 18.5 12 21" />
      </svg>
      {(["de", "en"] as const).map((language) => (
        <span key={language} className="inline-flex items-center gap-2">
          {language === "en" ? (
            <span aria-hidden="true" className="h-4 w-px bg-slate-200" />
          ) : null}
          <button
            type="button"
            onClick={() => switchLanguage(language)}
            aria-pressed={locale === language}
            className={`relative py-1 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
              locale === language
                ? "text-slate-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-cyan-500"
                : "text-slate-400 hover:text-cyan-800"
            }`}
          >
            {language}
          </button>
        </span>
      ))}
    </div>
  );
}
