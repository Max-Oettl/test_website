import Image from "next/image";
import Link from "next/link";

import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";

type HomeHeroProps = {
  locale: Locale;
};

const heroContent = {
  de: {
    questions: [
      "Feldausfälle?",
      "Unerwartete Streuung?",
      "Unsichere Lebensdauerprognosen?",
    ],
    description:
      "RelTest unterstützt Unternehmen, wenn technische Unsicherheit zu Projekt-, Kosten- oder Haftungsrisiken wird: als Beratungspartner, langfristige Entwicklungsbegleitung, Inhouse-Schulung oder digitales Lernangebot.",
    offers: [
      {
        title: "Beratung",
        description: "Zuverlässigkeit, DoE, Testplanung, Risikoanalyse und Datenbewertung.",
        href: "/leistungen/beratung",
      },
      {
        title: "Langfristige Kooperation",
        description: "Methoden, Reviews, Dokumentation und Absicherung nach Stand der Technik.",
        href: "/leistungen/langfristige-kooperation",
      },
      {
        title: "Schulungen vor Ort",
        description: "Praxisnahe Seminare für Entwicklungs-, Erprobungs- und Qualitätsteams.",
        href: "/weiterbildung/seminare",
      },
      {
        title: "RelTest Education",
        description: "Strukturiertes E-Learning für Ingenieurinnen und Ingenieure.",
        href: "/weiterbildung/academy",
      },
    ],
    imageAlt:
      "RelTest Beratungssituation mit technischer Analyse, Bauteilbewertung und Risikomatrix",
    knowledgeCta: "Fachthemen einordnen",
  },
  en: {
    questions: [
      "Field failures?",
      "Unexpected variation?",
      "Uncertain lifetime forecasts?",
    ],
    description:
      "RelTest supports companies when technical uncertainty becomes a project, cost or liability risk: as a consulting partner, long-term development support, in-house training provider or digital learning offer.",
    offers: [
      {
        title: "Consulting",
        description: "Reliability, DoE, test planning, risk analysis and data evaluation.",
        href: "/leistungen/beratung",
      },
      {
        title: "Long-term partnership",
        description: "Methods, reviews, documentation and state-of-the-art validation.",
        href: "/leistungen/langfristige-kooperation",
      },
      {
        title: "On-site training",
        description: "Practical seminars for development, testing and quality teams.",
        href: "/weiterbildung/seminare",
      },
      {
        title: "RelTest Education",
        description: "Structured e-learning for engineers.",
        href: "/weiterbildung/academy",
      },
    ],
    imageAlt:
      "RelTest consulting situation with technical analysis, component review and risk matrix",
    knowledgeCta: "Classify technical topics",
  },
} as const;

export function HomeHero({ locale }: HomeHeroProps) {
  const { hero } = getSiteContent(locale);
  const text = heroContent[locale];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfdfe_0%,#eef4f7_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_8%,rgba(8,145,178,0.11),transparent_27rem)]" />
      <div className="hero-editorial-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.35),transparent)]" />

      <div className="relative mx-auto grid max-w-[94rem] gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.82fr)] lg:gap-0 lg:px-8 lg:py-24 xl:grid-cols-[minmax(0,1fr)_minmax(31rem,0.74fr)]">
        <div className="relative z-10 flex min-w-0 flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 max-w-[60rem] font-semibold tracking-[-0.066em] text-slate-950">
            {text.questions.map((question, index) => (
              <span
                key={question}
                className={`block text-[clamp(3rem,4.75vw,5.15rem)] leading-[0.98] text-balance drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] ${
                  index > 0 ? "mt-4 sm:mt-5" : ""
                } ${index === 1 ? "lg:whitespace-nowrap" : ""}`}
              >
                {question}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-3xl border-l-4 border-cyan-600 pl-6 text-lg leading-8 font-medium text-slate-700">
            {text.description}
          </p>

          <div className="mt-7 grid max-w-3xl gap-3 sm:grid-cols-2">
            {text.offers.map((offer) => (
              <Link
                key={offer.title}
                href={localizeHref(locale, offer.href)}
                className="group rounded-[1.4rem] border border-slate-200/90 bg-white/78 p-4 shadow-sm ring-1 ring-white/80 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/80"
              >
                <span className="text-base font-semibold tracking-[-0.03em] text-slate-950">
                  {offer.title}
                </span>
                <span className="mt-2 block text-sm leading-6 font-medium text-slate-600">
                  {offer.description}
                </span>
                <span className="mt-3 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 transition-colors group-hover:text-slate-950">
                  {hero.secondaryCta}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-slate-300 transition-colors hover:bg-cyan-800"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href={localizeHref(locale, "/leistungen")}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
            >
              {hero.secondaryCta}
            </Link>
            <Link
              href={localizeHref(locale, "/wissen")}
              className="inline-flex items-center justify-center rounded-full px-3 py-4 text-sm font-bold text-cyan-800 transition-colors hover:text-slate-950"
            >
              {text.knowledgeCta}
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="relative z-0 min-w-0 lg:-ml-32 lg:pt-7 xl:-ml-44">
          <div className="relative min-h-[24rem] overflow-hidden rounded-[2.1rem] opacity-65 mix-blend-multiply sm:min-h-[30rem] lg:min-h-[35rem]">
            <Image
              src="/team/home-engineering-consulting.png"
              alt={text.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 43vw, (min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[52%_50%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#fbfdfe_0%,rgba(251,253,254,0.66)_20%,rgba(251,253,254,0.14)_48%,rgba(251,253,254,0.06)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,253,254,0.16)_0%,rgba(251,253,254,0)_48%,rgba(238,244,247,0.26)_100%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
