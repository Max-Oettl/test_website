import Image from "next/image";

import { PageIntro } from "../../_components/page-intro";
import { SectionHeading } from "../../_components/section-heading";
import { ServiceCard } from "../../_components/service-card";
import { serviceCardImages } from "../../_content/service-card-assets";
import { getSiteContent } from "../../_content/site-content";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const servicePageEnhancements = {
  de: {
    structureLabel: "Portfolio-Logik",
    structureTitle: "Vier Angebote, ein fachlicher Kern.",
    structureDescription:
      "Die Leistungsformen unterscheiden sich bewusst: Beratung, Weiterbildung, digitale Academy und langfristige Kooperation. Die technischen Methoden werden je nach Zielsetzung gezielt darin eingesetzt.",
    structureItems: [
      "passende Leistungsform wählen",
      "technische Fragestellung einordnen",
      "Nachweise und Umsetzung absichern",
    ],
    methodLabel: "Fachthemen",
    methodTitle: "Methoden sind kein Zusatzpaket, sondern Teil der Lösung.",
    methodDescription:
      "DoE, Datenanalyse, Risikomanagement und Zuverlässigkeitsmethoden werden nicht isoliert verkauft. Sie werden dort eingesetzt, wo sie im Projekt die belastbarste Aussage liefern.",
    methodVisualAlt:
      "Technische Grafik eines Reliability-Engineering-Zyklus mit Analyse, Erprobung und Absicherung",
  },
  en: {
    structureLabel: "Portfolio logic",
    structureTitle: "Four offers, one technical core.",
    structureDescription:
      "The service formats are intentionally different: consulting, professional training, digital Academy and long-term partnership. The technical methods are applied where they create the strongest project value.",
    structureItems: [
      "select the right service format",
      "classify the technical question",
      "secure evidence and implementation",
    ],
    methodLabel: "Technical methods",
    methodTitle: "Methods are not add-ons. They are part of the solution.",
    methodDescription:
      "DoE, data analysis, risk management and reliability methods are not sold as isolated modules. They are used where they produce the most robust project evidence.",
    methodVisualAlt:
      "Technical Reliability Engineering cycle graphic with analysis, testing and validation",
  },
} as const satisfies Record<
  Locale,
  {
    structureLabel: string;
    structureTitle: string;
    structureDescription: string;
    structureItems: readonly string[];
    methodLabel: string;
    methodTitle: string;
    methodDescription: string;
    methodVisualAlt: string;
  }
>;

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const page = getSiteContent(locale).pages.services;

  return buildLocalizedMetadata({
    locale,
    path: "/leistungen",
    title:
      locale === "de"
        ? "Leistungen für Zuverlässigkeitstechnik | RelTest"
        : "Reliability Engineering Services | RelTest",
    description: page.intro.description,
  });
}

export default async function ServicesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getSiteContent(locale);
  const page = content.pages.services;
  const enhancements = servicePageEnhancements[locale];
  const serviceImages = serviceCardImages[locale];

  return (
    <>
      <PageIntro {...page.intro} />
      <section className="relative overflow-hidden bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="hero-editorial-grid absolute inset-0 opacity-80" />
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute -right-28 bottom-24 h-72 w-72 rounded-full bg-slate-300/45 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,0.52fr)] lg:items-end">
            <SectionHeading {...page.overview} />
            <aside className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-cyan-300">
                {enhancements.structureLabel}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                {enhancements.structureTitle}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {enhancements.structureDescription}
              </p>
              <div className="mt-6 space-y-3">
                {enhancements.structureItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {content.services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                image={serviceImages[service.href]}
                href={localizeHref(locale, service.href)}
                ctaLabel={content.common.learnMore}
              />
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-100 blur-3xl" />
              <Image
                src="/graphics/reliability-engineering-cycle.svg"
                alt={enhancements.methodVisualAlt}
                width={520}
                height={360}
                className="relative h-auto w-full"
              />
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">
                {enhancements.methodLabel}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                {enhancements.methodTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {enhancements.methodDescription}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {content.methodHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
