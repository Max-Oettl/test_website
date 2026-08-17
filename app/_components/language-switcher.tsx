"use client";

import { usePathname, useRouter } from "next/navigation";
import { startTransition, useEffect, useRef } from "react";

import type { Locale } from "../_i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  compact?: boolean;
};

function LanguageFlag({ language }: { language: Locale }) {
  return (
    <span
      aria-hidden="true"
      className="block h-5 w-5 shrink-0 rounded-full bg-cover bg-center"
      style={{ backgroundImage: `url('/icons/flag-${language}.svg')` }}
    />
  );
}

export function LanguageSwitcher({
  locale,
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const winnsteinMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      const menu = winnsteinMenuRef.current;

      if (
        menu?.open &&
        event.target instanceof Node &&
        !menu.contains(event.target)
      ) {
        menu.removeAttribute("open");
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        winnsteinMenuRef.current?.removeAttribute("open");
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

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
      className={`language-switcher inline-flex items-center gap-2 ${
        compact
          ? "w-full justify-center rounded-xl border border-slate-200 px-3 py-2.5"
          : "px-1"
      }`}
      aria-label={locale === "de" ? "Sprache auswählen" : "Select language"}
    >
      <div className="language-switcher-standard inline-flex items-center gap-2">
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

      <details
        ref={winnsteinMenuRef}
        className="language-switcher-winnstein group/language relative hidden"
      >
        <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-sm px-2.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-[#edf5f8] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan [&::-webkit-details-marker]:hidden">
          <LanguageFlag language={locale} />
          <span>{locale.toUpperCase()}</span>
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-3.5 w-3.5 text-slate-600 transition-transform group-open/language:rotate-180"
            fill="none"
          >
            <path
              d="m4 6 4 4 4-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        </summary>

        <div className="absolute top-[calc(100%+0.55rem)] right-0 z-50 min-w-40 border border-line-soft bg-white p-1.5 shadow-[0_18px_44px_rgba(7,20,48,0.14)]">
          {(["de", "en"] as const).map((language) => (
            <button
              key={language}
              type="button"
              onClick={(event) => {
                event.currentTarget.closest("details")?.removeAttribute("open");
                void switchLanguage(language);
              }}
              aria-pressed={locale === language}
              className={`flex w-full items-center gap-3 border-l-[3px] px-3 py-2.5 text-left text-sm font-semibold outline-none transition-[background-color,border-color,color] duration-150 hover:border-brand-cyan hover:bg-[#d5ecf7] hover:text-brand-ink focus-visible:border-brand-cyan focus-visible:bg-[#d5ecf7] focus-visible:text-brand-ink focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-cyan active:bg-[#bfe3f2] ${
                locale === language
                  ? "border-brand-cyan bg-[#edf5f8] text-brand-ink"
                  : "border-transparent text-slate-600"
              }`}
            >
              <LanguageFlag language={language} />
              <span>{language === "de" ? "Deutsch" : "English"}</span>
            </button>
          ))}
        </div>
      </details>
    </div>
  );
}
