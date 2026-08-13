import Link from "next/link";

import { getGlossary } from "../../_content/knowledge-content";
import { localizeHref, resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  return buildLocalizedMetadata({
    locale,
    path: "/glossar",
    title: locale === "de" ? "Glossar Zuverlässigkeitstechnik | RelTest" : "Reliability Engineering Glossary | RelTest",
    description:
      locale === "de"
        ? "Zentrale Begriffe aus Zuverlässigkeitstechnik, Lebensdaueranalyse, DoE, Erprobung und Risikomanagement verständlich erklärt."
        : "Key terms in reliability engineering, lifetime analysis, DoE, testing and risk management explained clearly.",
  });
}

export default async function GlossaryPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const isGerman = locale === "de";
  const entries = [...getGlossary(locale)].sort((a, b) => a.term.localeCompare(b.term, locale));
  const groups = entries.reduce((result, entry) => {
    const letter = entry.term[0].toLocaleUpperCase(locale);
    const letterEntries = result.get(letter) ?? [];
    letterEntries.push(entry);
    result.set(letter, letterEntries);
    return result;
  }, new Map<string, typeof entries>());

  return (
    <>
      <header className="bg-[var(--solution-marine)] font-winnstein-body text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <Link href={localizeHref(locale, "/wissen")} className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)] underline decoration-transparent underline-offset-8 hover:decoration-current">
            {isGerman ? "Wissen im Überblick" : "Knowledge overview"} <span aria-hidden="true">←</span>
          </Link>
          <p className="mt-12 font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)]">{isGerman ? "Glossar" : "Glossary"}</p>
          <h1 className="mt-4 max-w-4xl font-winnstein-display text-5xl font-semibold leading-tight sm:text-6xl">
            {isGerman ? "Fachbegriffe klar und kompakt erklärt." : "Technical terms explained clearly and concisely."}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            {isGerman
              ? "Ein Nachschlagewerk für zentrale Begriffe aus Zuverlässigkeitstechnik, Lebensdauer, Erprobung, DoE und technischem Risikomanagement."
              : "A reference for key terms from reliability engineering, lifetime, testing, DoE and technical risk management."}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14 font-winnstein-body lg:px-8 lg:py-20">
        <nav className="flex flex-wrap gap-x-6 gap-y-3 border-b border-[var(--solution-marine-20)] pb-7" aria-label={isGerman ? "Glossar-Buchstaben" : "Glossary letters"}>
          {[...groups.keys()].map((letter) => (
            <a key={letter} href={`#glossar-${letter}`} className="font-winnstein-display text-lg font-semibold text-[var(--solution-steel-cyan)] underline decoration-transparent underline-offset-8 hover:decoration-current">
              {letter}
            </a>
          ))}
        </nav>

        {[...groups.entries()].map(([letter, letterEntries]) => (
          <section key={letter} id={`glossar-${letter}`} className="scroll-mt-28 border-b border-[var(--solution-marine-20)] py-12">
            <div className="grid gap-8 sm:grid-cols-[80px_1fr]">
              <h2 className="font-winnstein-display text-5xl font-semibold text-[var(--solution-steel-cyan)]">{letter}</h2>
              <dl>
                {letterEntries.map((entry, index) => (
                  <div key={entry.term} className={`${index ? "border-t border-[var(--solution-marine-20)]" : ""} grid gap-3 py-6 md:grid-cols-[minmax(190px,.6fr)_minmax(0,1.4fr)] md:gap-10`}>
                    <dt className="font-winnstein-display text-xl font-semibold text-[var(--solution-marine)]">{entry.term}</dt>
                    <dd className="text-base leading-7 text-[var(--solution-marine-80)]">{entry.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
