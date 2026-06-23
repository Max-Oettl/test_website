import Link from "next/link";

import {
  getKnowledgeTheme,
  KnowledgeDiagram,
} from "../../_components/knowledge-detail-template";
import { getSiteContent } from "../../_content/site-content";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const processTopics = [
  "planung",
  "schwachstellenanalyse",
  "absicherung",
  "erprobung",
  "prognosen",
] as const;

const methodTopics = ["design-of-experiments", "risikomanagement"] as const;

type Topic = ReturnType<typeof getSiteContent>["pages"]["knowledge"]["topics"][number];

function topicById(topics: readonly Topic[], id: string) {
  return topics.find((topic) => topic.id === id);
}

function topicBadgeLabel(locale: Locale, index: string) {
  if (index.startsWith("M")) {
    return locale === "de" ? "Methode" : "Method";
  }

  return locale === "de" ? `Phase ${index}` : `Phase ${index}`;
}

function KnowledgeMap({ locale, topics }: { locale: Locale; topics: readonly Topic[] }) {
  const isGerman = locale === "de";
  const labels = {
    title: isGerman ? "Fachlandkarte" : "Knowledge map",
    clickHint: isGerman
      ? "Klicken Sie auf ein Themenfeld, um die Fachseite zu öffnen."
      : "Click a topic field to open the technical page.",
    clickable: isGerman ? "Klickbare Übersicht" : "Clickable overview",
    process: isGerman ? "Prozessfelder" : "Process fields",
    methods: isGerman ? "Methoden" : "Methods",
    method: isGerman ? "Methode" : "Method",
    open: isGerman ? "Fachseite öffnen" : "Open page",
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-700">
            {labels.title}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 font-medium text-slate-600">
            {labels.clickHint}
          </p>
        </div>
        <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-800">
          {labels.clickable}
        </span>
      </div>
      <p className="mt-6 text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
        {labels.process}
      </p>
      <div className="mt-6 grid gap-3">
        {processTopics.map((id, index) => {
          const topic = topicById(topics, id);
          const theme = getKnowledgeTheme(id);

          if (!topic) {
            return null;
          }

          return (
            <Link
              key={id}
              href={localizeHref(locale, `/wissen/${id}`)}
              className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100"
              aria-label={`${labels.open}: ${topic.title}`}
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r text-sm font-black text-white shadow-sm ${theme.gradient}`}>
                {index + 1}
              </span>
              <span>
                <span className="block text-sm font-bold text-slate-950 group-hover:text-cyan-800">
                  {topic.title}
                </span>
                <span className="mt-1 block text-xs font-medium text-slate-500">
                  {theme.label[locale]}
                </span>
              </span>
              <span className="hidden rounded-full bg-white px-3 py-1.5 text-xs font-black text-slate-500 ring-1 ring-slate-200 transition group-hover:bg-cyan-50 group-hover:text-cyan-800 group-hover:ring-cyan-200 sm:inline-flex">
                →
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-6 text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
        {labels.methods}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {methodTopics.map((id) => {
          const topic = topicById(topics, id);
          const theme = getKnowledgeTheme(id);

          if (!topic) {
            return null;
          }

          return (
            <Link
              key={id}
              href={localizeHref(locale, `/wissen/${id}`)}
              className={`group rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 ${theme.accentBorder} ${theme.accentBg}`}
              aria-label={`${labels.open}: ${topic.title}`}
            >
              <span className={`rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] ring-1 ring-current/10 ${theme.accentText}`}>
                {labels.method}
              </span>
              <span className="mt-3 block text-sm font-bold text-slate-950">
                {topic.title}
              </span>
              <span className={`mt-2 block text-xs font-semibold ${theme.accentText}`}>
                {theme.label[locale]}
              </span>
              <span className="mt-4 inline-flex items-center text-xs font-black text-slate-600 transition group-hover:text-cyan-800">
                {labels.open} <span className="ml-2">→</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const page = getSiteContent(locale).pages.knowledge;

  return buildLocalizedMetadata({
    locale,
    path: "/wissen",
    title:
      locale === "de"
        ? "Wissen zu Zuverlässigkeitstechnik und DoE | RelTest"
        : "Reliability Engineering and DoE Knowledge | RelTest",
    description: page.intro.description,
  });
}

export default async function KnowledgePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const page = getSiteContent(locale).pages.knowledge;
  const isGerman = locale === "de";

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbfd_0%,#eef5f8_100%)]">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-700">
              {page.intro.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
              {page.intro.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              {page.intro.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {(isGerman
                ? [
                    ["7", "Fachthemen"],
                    ["DoE", "Versuchsplanung"],
                    ["Risiko", "Priorisierung"],
                  ]
                : [
                    ["7", "Technical topics"],
                    ["DoE", "Experimental design"],
                    ["Risk", "Prioritisation"],
                  ]
              ).map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-black tracking-[-0.05em] text-slate-950">
                    {value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <KnowledgeMap locale={locale} topics={page.topics} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
              {isGerman ? "Themen vertiefen" : "Explore topics"}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {isGerman
                ? "Technisches Wissen so aufbereitet, dass daraus Projektentscheidungen werden."
                : "Technical knowledge structured to support project decisions."}
            </h2>
          </div>
          <Link
            href={localizeHref(locale, "/leistungen")}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-800"
          >
            {isGerman ? "Passende Leistungen ansehen" : "View related services"}
          </Link>
        </div>

        <div className="grid gap-7">
          {page.topics.map((topic, index) => {
            const theme = getKnowledgeTheme(topic.id);

            return (
              <article
                key={topic.id}
                id={topic.id}
                className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`rounded-full border px-3 py-1 text-xs font-black ${theme.accentBorder} ${theme.accentBg} ${theme.accentText}`}>
                        {topicBadgeLabel(locale, theme.index)}
                      </span>
                      <span className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                        {theme.label[locale]}
                      </span>
                    </div>
                    <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                      {topic.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                      {topic.description}
                    </p>
                    <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                      <p className="text-sm font-bold text-slate-900">
                        {theme.result[locale]}
                      </p>
                    </div>
                    <Link
                      href={localizeHref(locale, `/wissen/${topic.id}`)}
                      className="mt-7 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                    >
                      {isGerman ? "Fachseite öffnen" : "Open technical page"}
                    </Link>
                  </div>

                  <KnowledgeDiagram slug={topic.id} locale={locale} compact />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
                  {isGerman ? "Vom Wissen ins Projekt" : "From knowledge to project"}
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  {isGerman
                    ? "Wenn aus einem Fachthema eine konkrete Entscheidung werden soll, ist RelTest der richtige Sparringspartner."
                    : "When a technical topic has to become a concrete decision, RelTest is the right sparring partner."}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                  {page.preparation.description}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href={localizeHref(locale, "/kontakt")}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
                >
                  {page.preparation.contactCta}
                </Link>
                <Link
                  href={localizeHref(locale, "/leistungen")}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
                >
                  {page.preparation.servicesCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
