import { GlossaryDirectory } from "../../_components/glossary-directory";
import { getGlossary } from "../../_content/knowledge-content";
import { resolveLocale } from "../../_i18n/config";
import { getSiteSearchEntries } from "../../_lib/site-search-index";
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
  const siteEntries = getSiteSearchEntries(locale);

  return (
    <>
      <header className="bg-[var(--solution-marine)] font-winnstein-body text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-14">
          <p className="font-winnstein-display text-sm font-semibold text-[var(--solution-steel-cyan)]">{isGerman ? "Glossar" : "Glossary"}</p>
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

      <div className="mx-auto max-w-5xl px-6 py-14 font-winnstein-body lg:px-8 lg:py-20">
        <GlossaryDirectory
          entries={entries}
          siteEntries={siteEntries}
          locale={locale}
        />
      </div>
    </>
  );
}
