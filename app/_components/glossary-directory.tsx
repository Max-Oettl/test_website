"use client";

import Link from "next/link";
import {
  useDeferredValue,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import type { GlossaryEntry } from "../_content/knowledge-content";
import { localizeHref, type Locale } from "../_i18n/config";
import {
  getGlossaryEntryId,
  normalizeGlossarySearch,
} from "../_lib/glossary";
import type { SiteSearchEntry } from "../_lib/site-search-index";

type GlossaryDirectoryProps = {
  entries: readonly GlossaryEntry[];
  siteEntries: readonly SiteSearchEntry[];
  locale: Locale;
};

const copy = {
  de: {
    clear: "Suche zurücksetzen",
    empty:
      "Zu dieser Suche wurden weder Website-Inhalte noch Glossarbegriffe gefunden. Versuchen Sie einen kürzeren oder allgemeineren Begriff.",
    eyebrow: "Website-Suche und Glossar",
    label: "Website und Glossar durchsuchen",
    placeholder: "Begriff suchen, zum Beispiel Weibull oder FMEA",
    siteResults: "Seiten und Inhalte",
    glossaryResults: "Glossar",
    openPage: "Seite öffnen",
  },
  en: {
    clear: "Clear search",
    empty:
      "No website content or glossary term matches this search. Try a shorter or more general term.",
    eyebrow: "Website search and glossary",
    label: "Search the website and glossary",
    placeholder: "Search for a term, for example Weibull or FMEA",
    siteResults: "Pages and content",
    glossaryResults: "Glossary",
    openPage: "Open page",
  },
} as const;

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

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
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

export function GlossaryDirectory({
  entries,
  siteEntries,
  locale,
}: GlossaryDirectoryProps) {
  const strings = copy[locale];
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = normalizeGlossarySearch(deferredQuery);
  const queryParts = useMemo(
    () => normalizedQuery.split(/\s+/).filter(Boolean),
    [normalizedQuery],
  );

  const indexedEntries = useMemo(
    () =>
      entries.map((entry) => ({
        ...entry,
        searchValue: normalizeGlossarySearch(
          `${entry.term} ${entry.definition}`,
        ),
      })),
    [entries],
  );

  const indexedSiteEntries = useMemo(
    () =>
      siteEntries.map((entry) => ({
        ...entry,
        normalizedTitle: normalizeGlossarySearch(entry.title),
        normalizedDescription: normalizeGlossarySearch(entry.description),
        searchValue: normalizeGlossarySearch(
          `${entry.title} ${entry.description} ${entry.category} ${entry.searchText}`,
        ),
      })),
    [siteEntries],
  );

  const allLetters = useMemo(
    () =>
      Array.from(
        new Set(
          entries.map((entry) => entry.term[0].toLocaleUpperCase(locale)),
        ),
      ),
    [entries, locale],
  );

  const filteredEntries = useMemo(() => {
    if (!normalizedQuery) {
      return indexedEntries;
    }

    return indexedEntries.filter((entry) =>
      queryParts.every((part) => entry.searchValue.includes(part)),
    );
  }, [indexedEntries, normalizedQuery, queryParts]);

  const siteResults = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return indexedSiteEntries
      .filter((entry) =>
        queryParts.every((part) => entry.searchValue.includes(part)),
      )
      .map((entry) => {
        let score = 0;

        if (entry.normalizedTitle === normalizedQuery) score += 100;
        if (entry.normalizedTitle.startsWith(normalizedQuery)) score += 50;
        if (entry.normalizedTitle.includes(normalizedQuery)) score += 30;
        if (entry.normalizedDescription.includes(normalizedQuery)) score += 15;

        score += queryParts.reduce(
          (total, part) =>
            total +
            (entry.normalizedTitle.includes(part) ? 8 : 0) +
            (entry.normalizedDescription.includes(part) ? 3 : 0),
          0,
        );

        return { ...entry, score };
      })
      .sort(
        (a, b) =>
          b.score - a.score || a.title.localeCompare(b.title, locale),
      )
      .slice(0, 10);
  }, [indexedSiteEntries, locale, normalizedQuery, queryParts]);

  const groups = useMemo(() => {
    const result = new Map<string, typeof filteredEntries>();

    for (const entry of indexedEntries) {
      const letter = entry.term[0].toLocaleUpperCase(locale);
      const letterEntries = result.get(letter) ?? [];
      letterEntries.push(entry);
      result.set(letter, letterEntries);
    }

    return result;
  }, [indexedEntries, locale]);

  function clearSearch() {
    setQuery("");
    inputRef.current?.focus();
  }

  return (
    <div>
      <section
        id="glossar-suche"
        className="scroll-mt-28 border border-brand-marine/15 border-t-4 border-t-brand-steel-cyan bg-brand-steel-cyan-10/35 p-5 sm:p-7"
        aria-labelledby={`${inputId}-title`}
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,.8fr)] lg:items-end">
          <div>
            <p className="font-winnstein-display text-xs font-bold uppercase tracking-[0.15em] text-brand-steel-cyan">
              {strings.eyebrow}
            </p>
            <h2
              id={`${inputId}-title`}
              className="mt-2 font-winnstein-display text-2xl font-bold tracking-[-0.025em] text-brand-marine sm:text-3xl"
            >
              {strings.label}
            </h2>
          </div>

          <div>
            <label htmlFor={inputId} className="sr-only">
              {strings.label}
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-steel-cyan">
                <SearchIcon />
              </span>
              <input
                ref={inputRef}
                id={inputId}
                type="text"
                enterKeyHint="search"
                value={query}
                autoComplete="off"
                placeholder={strings.placeholder}
                className="min-h-14 w-full border border-brand-marine/20 bg-white py-3 pl-12 pr-14 text-base text-brand-marine outline-none placeholder:text-brand-marine/50 focus:border-brand-steel-cyan focus:ring-2 focus:ring-brand-steel-cyan/25"
                onChange={(event) => setQuery(event.target.value)}
              />
              {query ? (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label={strings.clear}
                  title={strings.clear}
                  className="absolute right-1.5 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-xl leading-none text-brand-marine/60 transition-colors hover:text-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
                >
                  <span aria-hidden="true">×</span>
                </button>
              ) : null}
            </div>
          </div>
        </div>

      </section>

      {normalizedQuery ? (
        <div className="mt-8">
          <p className="sr-only" aria-live="polite">
            {locale === "de"
              ? `${siteResults.length + filteredEntries.length} Treffer gefunden`
              : `${siteResults.length + filteredEntries.length} results found`}
          </p>

          {siteResults.length ? (
            <section aria-labelledby={`${inputId}-site-results`}>
              <div className="flex items-end justify-between gap-5 border-b border-brand-marine/20 pb-4">
                <h2
                  id={`${inputId}-site-results`}
                  className="font-winnstein-display text-2xl font-bold text-brand-marine sm:text-3xl"
                >
                  {strings.siteResults}
                </h2>
                <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                  {siteResults.length}
                </span>
              </div>
              <div className="divide-y divide-brand-marine/15 border-b border-brand-marine/20">
                {siteResults.map((entry) => (
                  <Link
                    key={entry.href}
                    href={localizeHref(locale, entry.href)}
                    className="group grid gap-4 px-1 py-6 transition-colors hover:bg-brand-steel-cyan-10/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-5"
                  >
                    <span className="min-w-0">
                      <span className="block font-winnstein-display text-xs font-bold uppercase tracking-[0.12em] text-brand-steel-cyan">
                        {entry.category}
                      </span>
                      <span className="mt-2 block font-winnstein-display text-xl font-bold text-brand-marine sm:text-2xl">
                        {entry.title}
                      </span>
                      <span className="mt-2 block max-w-3xl text-sm leading-6 text-brand-marine/70 sm:text-base sm:leading-7">
                        {entry.description}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors group-hover:text-brand-steel-cyan">
                      {strings.openPage}
                      <ArrowIcon />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {filteredEntries.length ? (
            <section
              aria-labelledby={`${inputId}-glossary-results`}
              className={siteResults.length ? "mt-12" : ""}
            >
              <div className="flex items-end justify-between gap-5 border-b border-brand-marine/20 pb-4">
                <h2
                  id={`${inputId}-glossary-results`}
                  className="font-winnstein-display text-2xl font-bold text-brand-marine sm:text-3xl"
                >
                  {strings.glossaryResults}
                </h2>
                <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                  {filteredEntries.length}
                </span>
              </div>
              <dl className="divide-y divide-brand-marine/15 border-b border-brand-marine/20">
                {filteredEntries.map((entry) => (
                  <div
                    key={entry.term}
                    className="grid gap-3 px-1 py-6 sm:px-5 md:grid-cols-[minmax(190px,.6fr)_minmax(0,1.4fr)] md:gap-10"
                  >
                    <dt className="font-winnstein-display text-xl font-semibold text-brand-marine">
                      {entry.term}
                    </dt>
                    <dd className="text-base leading-7 text-brand-marine/80">
                      {entry.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {!siteResults.length && !filteredEntries.length ? (
            <div className="border-b border-brand-marine/20 py-14 text-center">
              <p className="mx-auto max-w-2xl text-base leading-7 text-brand-marine/70">
                {strings.empty}
              </p>
              <button
                type="button"
                onClick={clearSearch}
                className="brand-action mt-6 min-h-12 bg-brand-marine px-5 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-2"
              >
                {strings.clear}
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <>
          <nav
            className="mt-8 flex flex-wrap gap-2 border-b border-brand-marine/20 pb-7"
            aria-label={
              locale === "de" ? "Glossar-Buchstaben" : "Glossary letters"
            }
          >
            {allLetters.map((letter) => (
              <a
                key={letter}
                href={`#glossar-${letter}`}
                className="flex min-h-11 min-w-11 items-center justify-center border border-brand-marine/15 bg-white px-3 font-winnstein-display text-base font-bold text-brand-marine transition-colors hover:border-brand-steel-cyan hover:bg-brand-steel-cyan hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
              >
                {letter}
              </a>
            ))}
          </nav>

          {[...groups.entries()].map(([letter, letterEntries]) => (
            <section
              key={letter}
              id={`glossar-${letter}`}
              className="scroll-mt-28 border-b border-brand-marine/20 py-12"
            >
              <div className="grid gap-8 sm:grid-cols-[80px_1fr]">
                <h2 className="font-winnstein-display text-5xl font-semibold text-brand-steel-cyan">
                  {letter}
                </h2>
                <dl>
                  {letterEntries.map((entry, index) => (
                    <div
                      key={entry.term}
                      id={getGlossaryEntryId(entry.term)}
                      className={`${
                        index ? "border-t border-brand-marine/20" : ""
                      } grid scroll-mt-32 gap-3 py-6 md:grid-cols-[minmax(190px,.6fr)_minmax(0,1.4fr)] md:gap-10`}
                    >
                      <dt className="font-winnstein-display text-xl font-semibold text-brand-marine">
                        {entry.term}
                      </dt>
                      <dd className="text-base leading-7 text-brand-marine/80">
                        {entry.definition}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
