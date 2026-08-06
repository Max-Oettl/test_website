import Image from "next/image";
import Link from "next/link";

import type { DetailPage } from "../_content/migration-pages";
import { localizeHref, type Locale } from "../_i18n/config";

export type KnowledgeTopicSlug =
  | "planung"
  | "schwachstellenanalyse"
  | "absicherung"
  | "erprobung"
  | "prognosen"
  | "design-of-experiments"
  | "risikomanagement";

type KnowledgeTheme = {
  index: string;
  label: Record<Locale, string>;
  core: Record<Locale, string>;
  result: Record<Locale, string>;
  diagramTitle: Record<Locale, string>;
  imageSrc: string;
  imageAlt: Record<Locale, string>;
  accentText: string;
  accentBorder: string;
  accentBg: string;
  gradient: string;
};

const knowledgeThemes: Record<KnowledgeTopicSlug, KnowledgeTheme> = {
  planung: {
    index: "01",
    label: { de: "Ziele und Rahmen", en: "Targets and framework" },
    core: {
      de: "Anforderungen, Nutzung und Kostenrahmen werden in technische Zuverlässigkeitsziele übersetzt.",
      en: "Requirements, use cases and cost constraints are translated into technical reliability targets.",
    },
    result: {
      de: "Belastbare Zielwerte, klare Nachweiskriterien und weniger spätere Grundsatzdiskussionen.",
      en: "Robust targets, clear evidence criteria and fewer late-stage fundamental debates.",
    },
    diagramTitle: {
      de: "Anforderungs- und Kostenrahmen",
      en: "Requirement and cost framework",
    },
    imageSrc: "/graphics/knowledge/planning.png",
    imageAlt: {
      de: "Generierte technische Grafik zur Zuverlässigkeitsplanung mit Anforderungen, Kostenrahmen und Produktstrategie",
      en: "Generated technical graphic for reliability planning with requirements, cost framework and product strategy",
    },
    accentText: "text-cyan-700",
    accentBorder: "border-cyan-200",
    accentBg: "bg-cyan-50",
    gradient: "from-cyan-500 to-sky-700",
  },
  schwachstellenanalyse: {
    index: "02",
    label: { de: "Ausfallmechanismen", en: "Failure mechanisms" },
    core: {
      de: "Kritische Bauteile, Fehlerursachen und Lastfälle werden strukturiert priorisiert.",
      en: "Critical components, failure causes and load cases are prioritised systematically.",
    },
    result: {
      de: "Gezieltere Tests, bessere Maßnahmen und weniger blinde Erprobung.",
      en: "More targeted tests, better measures and less blind testing effort.",
    },
    diagramTitle: { de: "Fehlerbaum und FMEA-Logik", en: "Fault tree and FMEA logic" },
    imageSrc: "/graphics/knowledge/weak-point-analysis.png",
    imageAlt: {
      de: "Generierte technische Grafik zur Schwachstellenanalyse mit Bauteilquerschnitt, Fehlerpfaden und markierten Ausfallstellen",
      en: "Generated technical graphic for weak-point analysis with component section, failure paths and highlighted weak points",
    },
    accentText: "text-rose-700",
    accentBorder: "border-rose-200",
    accentBg: "bg-rose-50",
    gradient: "from-rose-500 to-slate-900",
  },
  absicherung: {
    index: "03",
    label: { de: "Nachweisführung", en: "Evidence logic" },
    core: {
      de: "Methoden, Tests und Dokumentation werden zu einer nachvollziehbaren Nachweislogik verbunden.",
      en: "Methods, tests and documentation are connected into a traceable evidence logic.",
    },
    result: {
      de: "Technisch belastbare Freigaben statt einzelner, schwer interpretierbarer Testergebnisse.",
      en: "Technically robust release decisions instead of isolated, hard-to-interpret test results.",
    },
    diagramTitle: { de: "Absicherungskette", en: "Validation chain" },
    imageSrc: "/graphics/knowledge/validation.png",
    imageAlt: {
      de: "Generierte technische Grafik zur Zuverlässigkeitsabsicherung mit Test, Datenbewertung, Dokumentation und Nachweisführung",
      en: "Generated technical graphic for reliability validation with testing, data evaluation, documentation and evidence",
    },
    accentText: "text-emerald-700",
    accentBorder: "border-emerald-200",
    accentBg: "bg-emerald-50",
    gradient: "from-emerald-500 to-cyan-800",
  },
  erprobung: {
    index: "04",
    label: { de: "Tests und Lasten", en: "Tests and loads" },
    core: {
      de: "Prüfprogramme werden aus realer Nutzung, Lastkollektiven und Ausfallmechanismen abgeleitet.",
      en: "Test programmes are derived from real use, load collectives and failure mechanisms.",
    },
    result: {
      de: "Aussagekräftige Tests mit klarer Entscheidungskraft für Entwicklung und Freigabe.",
      en: "Meaningful tests with clear decision value for development and release.",
    },
    diagramTitle: { de: "Lastkollektiv und Prüfstrategie", en: "Load collective and test strategy" },
    imageSrc: "/graphics/knowledge/testing.png",
    imageAlt: {
      de: "Generierte technische Grafik zur Zuverlässigkeitserprobung mit Prüfstand, Lastprofilen und Umwelteinflüssen",
      en: "Generated technical graphic for reliability testing with test bench, load profiles and environmental influences",
    },
    accentText: "text-blue-700",
    accentBorder: "border-blue-200",
    accentBg: "bg-blue-50",
    gradient: "from-blue-500 to-cyan-700",
  },
  prognosen: {
    index: "05",
    label: { de: "Daten und Modelle", en: "Data and models" },
    core: {
      de: "Prüf- und Felddaten werden mit Lebensdauermodellen und Unsicherheit bewertet.",
      en: "Test and field data are evaluated with lifetime models and uncertainty.",
    },
    result: {
      de: "Verantwortbare Aussagen zu Lebensdauer, Ausfallwahrscheinlichkeit und Restunsicherheit.",
      en: "Responsible statements on lifetime, failure probability and residual uncertainty.",
    },
    diagramTitle: { de: "Prognose mit Konfidenzband", en: "Prediction with confidence band" },
    imageSrc: "/graphics/knowledge/prediction.png",
    imageAlt: {
      de: "Generierte technische Grafik zu Lebensdauerprognosen mit Datenpunkten, Modellfläche und Konfidenzband",
      en: "Generated technical graphic for lifetime prediction with data points, model surface and confidence band",
    },
    accentText: "text-indigo-700",
    accentBorder: "border-indigo-200",
    accentBg: "bg-indigo-50",
    gradient: "from-indigo-500 to-slate-900",
  },
  "design-of-experiments": {
    index: "M1",
    label: { de: "Versuchsplanung", en: "Experimental design" },
    core: {
      de: "Faktoren, Zielgrößen und Wechselwirkungen werden systematisch untersucht.",
      en: "Factors, responses and interactions are investigated systematically.",
    },
    result: {
      de: "Mehr Erkenntnis pro Versuch und robustere Entscheidungen in Testing und Optimierung.",
      en: "More insight per experiment and more robust decisions in testing and optimisation.",
    },
    diagramTitle: { de: "Faktorraum und Antwortfläche", en: "Factor space and response surface" },
    imageSrc: "/graphics/knowledge/doe.png",
    imageAlt: {
      de: "Generierte technische Grafik zu Design of Experiments mit Faktorraum, Versuchsmatrix und Antwortfläche",
      en: "Generated technical graphic for Design of Experiments with factor space, test matrix and response surface",
    },
    accentText: "text-amber-700",
    accentBorder: "border-amber-200",
    accentBg: "bg-amber-50",
    gradient: "from-amber-500 to-cyan-800",
  },
  risikomanagement: {
    index: "M2",
    label: { de: "Risiko und Priorität", en: "Risk and priority" },
    core: {
      de: "Ausfallmechanismen, Konsequenzen, Eintrittswahrscheinlichkeit und Nachweisbarkeit werden zusammen bewertet.",
      en: "Failure mechanisms, consequences, probability and demonstrability are evaluated together.",
    },
    result: {
      de: "Priorisierte Risiken, sinnvolle Maßnahmen und nachvollziehbare Restunsicherheit.",
      en: "Prioritised risks, meaningful measures and traceable residual uncertainty.",
    },
    diagramTitle: { de: "Risikomatrix mit Maßnahmenpfad", en: "Risk matrix with action path" },
    imageSrc: "/graphics/knowledge/risk-management.png",
    imageAlt: {
      de: "Generierte technische Grafik zum Risikomanagement mit Risikomatrix, Maßnahmenpfad und technischer Komponente",
      en: "Generated technical graphic for risk management with risk matrix, mitigation path and technical component",
    },
    accentText: "text-teal-700",
    accentBorder: "border-teal-200",
    accentBg: "bg-teal-50",
    gradient: "from-teal-500 to-slate-900",
  },
};

const fallbackTheme = knowledgeThemes.planung;

const knowledgeLinks: Record<Locale, Array<{ label: string; href: string }>> = {
  de: [
    { label: "Planung", href: "/wissen/planung" },
    { label: "Schwachstellenanalyse", href: "/wissen/schwachstellenanalyse" },
    { label: "Absicherung", href: "/wissen/absicherung" },
    { label: "Erprobung", href: "/wissen/erprobung" },
    { label: "Prognosen", href: "/wissen/prognosen" },
    { label: "DoE", href: "/wissen/design-of-experiments" },
    { label: "Risikomanagement", href: "/wissen/risikomanagement" },
  ],
  en: [
    { label: "Planning", href: "/wissen/planung" },
    { label: "Weak-point analysis", href: "/wissen/schwachstellenanalyse" },
    { label: "Validation", href: "/wissen/absicherung" },
    { label: "Testing", href: "/wissen/erprobung" },
    { label: "Predictions", href: "/wissen/prognosen" },
    { label: "DoE", href: "/wissen/design-of-experiments" },
    { label: "Risk management", href: "/wissen/risikomanagement" },
  ],
};

export function getKnowledgeTheme(slug: string) {
  return knowledgeThemes[slug as KnowledgeTopicSlug] ?? fallbackTheme;
}

function themeBadgeLabel(locale: Locale, index: string) {
  if (index.startsWith("M")) {
    return locale === "de" ? "Methode" : "Method";
  }

  return index;
}

function resolveHref(locale: Locale, href: string) {
  return href.startsWith("http") ? href : localizeHref(locale, href);
}

export function KnowledgeDiagram({
  slug,
  locale,
  compact = false,
}: {
  slug: string;
  locale: Locale;
  compact?: boolean;
}) {
  const theme = getKnowledgeTheme(slug);

  return (
    <figure
      className={[
        "relative overflow-hidden rounded-[2rem] border bg-white shadow-sm",
        compact ? "p-3" : "p-4 sm:p-5",
        theme.accentBorder,
      ].join(" ")}
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.gradient}`} />
      <div className="relative overflow-hidden rounded-[1.55rem] bg-slate-50">
        <Image
          src={theme.imageSrc}
          alt={theme.imageAlt[locale]}
          width={1600}
          height={1000}
          sizes={
            compact
              ? "(min-width: 1024px) 46vw, 100vw"
              : "(min-width: 1024px) 48vw, 100vw"
          }
          className={[
            "h-auto w-full object-cover",
            compact ? "aspect-[1.62/1]" : "aspect-[1.62/1]",
          ].join(" ")}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/62 via-slate-950/18 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
          <figcaption className="max-w-[70%] text-xs font-black uppercase tracking-[0.18em] text-white drop-shadow-sm sm:text-sm">
            {theme.diagramTitle[locale]}
          </figcaption>
          <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-black text-slate-950 shadow-sm backdrop-blur">
            {themeBadgeLabel(locale, theme.index)}
          </span>
        </div>
      </div>
    </figure>
  );
}

export function KnowledgeDetailTemplate({ locale, page }: { locale: Locale; page: DetailPage }) {
  const theme = getKnowledgeTheme(page.slug);
  const isGerman = locale === "de";
  const relatedLinks =
    page.related?.length
      ? page.related
      : knowledgeLinks[locale].filter((link) => !link.href.endsWith(page.slug));

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbfd_0%,#eef5f8_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <Link
              href={localizeHref(locale, "/wissen")}
              className="text-sm font-bold text-cyan-800 transition-colors hover:text-slate-950"
            >
              {isGerman ? "← Zur Wissensübersicht" : "← Back to knowledge overview"}
            </Link>
            <p className={`mt-10 text-sm font-black uppercase tracking-[0.28em] ${theme.accentText}`}>
              {theme.label[locale]}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              {page.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  {isGerman ? "Kernfrage" : "Core question"}
                </p>
                <p className="mt-3 text-sm leading-7 font-semibold text-slate-800">
                  {theme.core[locale]}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  {isGerman ? "Ergebnis" : "Outcome"}
                </p>
                <p className="mt-3 text-sm leading-7 font-semibold text-slate-800">
                  {theme.result[locale]}
                </p>
              </div>
            </div>
          </div>

          <KnowledgeDiagram slug={page.slug} locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-400">
                {isGerman ? "Kurz gesagt" : "In brief"}
              </p>
              <p className="mt-5 text-xl leading-9 font-semibold text-slate-900">
                {page.lead}
              </p>
              <div className="mt-7 grid gap-3">
                {page.proofPoints.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <span aria-hidden="true" className="brand-list-dash" />
                    <p className="text-sm leading-7 font-medium text-slate-700">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </aside>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className={`text-sm font-black uppercase tracking-[0.24em] ${theme.accentText}`}>
                {isGerman ? "Fachliche Einordnung" : "Technical context"}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                {isGerman
                  ? "Worauf es bei diesem Thema ankommt"
                  : "What matters for this topic"}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                {isGerman
                  ? "Die folgenden Punkte sind keine festen Prozessschritte. Sie zeigen die zentralen Aspekte, die technisch bewertet, miteinander verbunden und sauber dokumentiert werden sollten."
                  : "The following points are not fixed process steps. They highlight the key aspects that should be technically assessed, connected and documented."}
              </p>
            </div>

            {page.sections.map((section) => (
              <article
                key={section.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className={`h-1.5 bg-gradient-to-r ${theme.gradient}`} />
                <div className="grid gap-5 p-7 sm:p-8 md:grid-cols-[3.25rem_1fr]">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${theme.accentBorder} ${theme.accentBg}`}
                    aria-hidden="true"
                  >
                    <svg
                      className={`h-6 w-6 ${theme.accentText}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12.5 9.2 16.5 19 6.8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M5 19H19"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.7"
                        opacity="0.38"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-xs font-black uppercase tracking-[0.22em] ${theme.accentText}`}>
                      {isGerman ? "Zentraler Aspekt" : "Key aspect"}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                      {section.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {section.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300 lg:grid-cols-[1fr_0.8fr] lg:p-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">
                {isGerman ? "Projektbezug" : "Project relevance"}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                {page.ctaTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                {page.ctaText}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={resolveHref(locale, page.primaryCta.href)}
                  target={page.primaryCta.external ? "_blank" : undefined}
                  rel={page.primaryCta.external ? "noopener noreferrer" : undefined}
                  className="brand-chamfer-control inline-flex items-center justify-center bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
                >
                  {page.primaryCta.label}
                </Link>
                {page.secondaryCta ? (
                  <Link
                    href={resolveHref(locale, page.secondaryCta.href)}
                    target={page.secondaryCta.external ? "_blank" : undefined}
                    rel={page.secondaryCta.external ? "noopener noreferrer" : undefined}
                    className="brand-action brand-action-outline inline-flex items-center justify-center border border-white/15 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
                  >
                    {page.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-400">
                {isGerman ? "Weiterdenken" : "Continue with"}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {relatedLinks.slice(0, 6).map((link) => (
                  <Link
                    key={link.href}
                    href={resolveHref(locale, link.href)}
                    target={"external" in link && link.external ? "_blank" : undefined}
                    rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                    className="brand-chamfer-control-sm border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300 hover:text-cyan-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
