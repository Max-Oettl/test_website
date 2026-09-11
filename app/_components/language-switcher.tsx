"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  startTransition,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";

import type { Locale } from "../_i18n/config";
import { switchLocalePathname } from "../_i18n/routes";

type LanguageSwitcherProps = {
  locale: Locale;
  compact?: boolean;
};

const minimumSwitchDuration = 260;

function LanguageFlag({ language }: { language: Locale }) {
  return (
    <span
      aria-hidden="true"
      className="block h-5 w-5 shrink-0 rounded-full bg-cover bg-center"
      style={{ backgroundImage: `url('/icons/flag-${language}.svg')` }}
    />
  );
}

function LanguageSwitchOverlay({
  locale,
  nextLocale,
}: {
  locale: Locale;
  nextLocale: Locale;
}) {
  const statusText =
    locale === "de" ? "Sprache wird gewechselt" : "Switching language";

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="fixed inset-0 z-[100] grid place-items-center bg-brand-marine/20 px-5 backdrop-blur-[2px]"
    >
      <div className="w-full max-w-[17rem] border border-brand-steel-cyan/25 bg-white px-6 py-5 text-center shadow-[0_18px_50px_rgba(20,36,82,0.18)]">
        <div className="flex items-center justify-center gap-3 text-sm font-bold tracking-[0.12em] text-brand-marine">
          <LanguageFlag language={locale} />
          <span>{locale.toUpperCase()}</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 text-brand-steel-cyan"
            fill="none"
          >
            <path
              d="M5 12h14m-5-5 5 5-5 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
          <LanguageFlag language={nextLocale} />
          <span>{nextLocale.toUpperCase()}</span>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-brand-marine/75">
          <span
            aria-hidden="true"
            className="h-4 w-4 animate-spin rounded-full border-2 border-brand-steel-cyan/25 border-t-brand-steel-cyan motion-reduce:animate-none"
          />
          <span>{statusText}&hellip;</span>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function LanguageSwitcher({
  locale,
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const winnsteinMenuRef = useRef<HTMLDetailsElement>(null);
  const [switchingLocale, setSwitchingLocale] = useState<Locale | null>(null);
  const activeSwitchingLocale =
    switchingLocale === locale ? null : switchingLocale;

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
    if (nextLocale === locale || activeSwitchingLocale) {
      return;
    }

    setSwitchingLocale(nextLocale);

    const nextPathname = switchLocalePathname(pathname, nextLocale);
    const nextPath =
      typeof window === "undefined"
        ? nextPathname
        : `${nextPathname}${window.location.search}${window.location.hash}`;

    await Promise.allSettled([
      fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: nextLocale }),
      }),
      new Promise((resolve) => window.setTimeout(resolve, minimumSwitchDuration)),
    ]);

    startTransition(() => {
      router.push(nextPath);
    });
  }

  function handleLanguageClick(
    event: MouseEvent<HTMLAnchorElement>,
    nextLocale: Locale,
  ) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    void switchLanguage(nextLocale);
  }

  return (
    <div
      className={`language-switcher inline-flex items-center gap-2 ${
        compact
          ? "w-auto justify-start rounded-xl border border-slate-200 px-3 py-2.5"
          : "px-1"
      }`}
      aria-label={locale === "de" ? "Sprache auswählen" : "Select language"}
      aria-busy={activeSwitchingLocale !== null}
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
            <Link
              href={switchLocalePathname(pathname, language)}
              onClick={(event) => handleLanguageClick(event, language)}
              aria-current={locale === language ? "true" : undefined}
              className={`relative py-1 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                locale === language
                  ? "text-slate-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-cyan-500"
                  : "text-slate-400 hover:text-cyan-800"
              } ${activeSwitchingLocale ? "pointer-events-none opacity-60" : ""}`}
            >
              {language}
            </Link>
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
            <Link
              key={language}
              href={switchLocalePathname(pathname, language)}
              onClick={(event) => {
                event.currentTarget.closest("details")?.removeAttribute("open");
                handleLanguageClick(event, language);
              }}
              aria-current={locale === language ? "true" : undefined}
              className={`flex w-full items-center gap-3 border-l-[3px] px-3 py-2.5 text-left text-sm font-semibold outline-none transition-[background-color,border-color,color] duration-150 hover:border-brand-cyan hover:bg-[#d5ecf7] hover:text-brand-ink focus-visible:border-brand-cyan focus-visible:bg-[#d5ecf7] focus-visible:text-brand-ink focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-cyan active:bg-[#bfe3f2] ${
                locale === language
                  ? "border-brand-cyan bg-[#edf5f8] text-brand-ink"
                  : "border-transparent text-slate-600"
              } ${activeSwitchingLocale ? "pointer-events-none opacity-60" : ""}`}
            >
              <LanguageFlag language={language} />
              <span>{language === "de" ? "Deutsch" : "English"}</span>
            </Link>
          ))}
        </div>
      </details>

      {activeSwitchingLocale ? (
        <LanguageSwitchOverlay
          locale={locale}
          nextLocale={activeSwitchingLocale}
        />
      ) : null}
    </div>
  );
}
