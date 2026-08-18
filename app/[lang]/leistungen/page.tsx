import Link from "next/link";

import { AiAwareImage as Image } from "../../_components/ai-aware-image";
import { BrandLineWatermark } from "../../_components/brand-line-watermark";
import { serviceCardImages } from "../../_content/service-card-assets";
import { getSiteContent } from "../../_content/site-content";
import { PageClosingCta } from "../../_components/page-closing-cta";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const servicesCopy = {
  de: {
    hero: {
      title: "Engineering für belastbare Produkt\u00adentscheidungen.",
      description:
        "RelTest unterstützt Unternehmen bei Zuverlässigkeit, technischer Absicherung und datenbasierten Entscheidungen: punktuell in einer Fachfrage oder dauerhaft als verantwortlicher Engineering Partner.",
      primaryCta: "Projekt besprechen",
      secondaryCta: "Leistungsfelder ansehen",
      imageAlt:
        "RelTest Ingenieure besprechen Zuverlässigkeit, Risiken und technische Absicherung",
    },
    overview: {
      title: "Wobei RelTest konkret unterstützt",
      description:
        "Drei fachliche Leistungsfelder schaffen Klarheit über Zuverlässigkeit, Risiken und Daten. Wenn eine dauerhafte Einbindung sinnvoll ist, übernimmt RelTest definierte Engineering-Arbeitspakete im Projekt.",
      cta: "Leistung im Detail",
    },
    partnership: {
      title: "Ein Engineering Partner, der für Ergebnisse einsteht.",
      description:
        "RelTest kann mehr übernehmen als Beratung und einzelne Analysen. Als fester Engineering Partner bearbeiten wir klar abgegrenzte Arbeitspakete, liefern prüfbare Ergebnisse und führen die zugehörige technische Dokumentation.",
      responsibility:
        "Leistungsumfang, Schnittstellen, Abnahme und Haftung werden vor Projektbeginn eindeutig vereinbart. Innerhalb dieses vertraglich definierten Rahmens übernimmt RelTest Verantwortung für die eigenen Arbeitsergebnisse.",
      points: [
        "klar definierte Engineering-Arbeitspakete",
        "prüfbare Ergebnisse und geregelte Abnahme",
        "nachvollziehbare Berechnungen und Dokumentation",
        "vertraglich festgelegter Verantwortungs- und Haftungsumfang",
      ],
      cta: "Projektpartnerschaft ansehen",
      imageAlt:
        "Systemgrafik einer Engineering-Partnerschaft mit Zuverlässigkeitstechnik, Risikomanagement, Test, Datenanalyse, Dokumentation und Rechtssicherheit",
    },
    methods: {
      title: "Methoden passend zur technischen Entscheidung",
      description:
        "DoE, FMEA, Lebensdatenanalyse oder Zuverlässigkeitsnachweise sind keine isolierten Pakete. Wir setzen die Methode ein, die zur Fragestellung, Datenlage und Projektphase passt.",
    },
    contact: {
      title: "Welche Unterstützung braucht Ihr Projekt?",
      description:
        "In einem ersten Gespräch klären wir die technische Fragestellung, den sinnvollen Leistungsumfang und ob eine punktuelle Beratung oder eine feste Projektpartnerschaft besser passt.",
      cta: "Anfrage starten",
    },
  },
  en: {
    hero: {
      title: "Engineering for robust product decisions.",
      description:
        "RelTest supports companies with reliability, technical assurance and data-based decisions: for a specific technical question or continuously as an accountable engineering partner.",
      primaryCta: "Discuss a project",
      secondaryCta: "Explore service areas",
      imageAlt:
        "RelTest engineers discussing reliability, risks and technical assurance",
    },
    overview: {
      title: "Where RelTest provides concrete support",
      description:
        "Three technical service areas create clarity around reliability, risks and data. When continuous involvement is the better fit, RelTest takes ownership of defined engineering work packages.",
      cta: "Explore this service",
    },
    partnership: {
      title: "An engineering partner that stands behind its results.",
      description:
        "RelTest can take on more than consulting and individual analyses. As a dedicated engineering partner, we deliver clearly defined work packages, verifiable results and the associated technical documentation.",
      responsibility:
        "Scope, interfaces, acceptance and liability are agreed before the project begins. Within this contractually defined framework, RelTest assumes responsibility for its own engineering deliverables.",
      points: [
        "clearly defined engineering work packages",
        "verifiable results and agreed acceptance",
        "traceable calculations and documentation",
        "contractually defined responsibility and liability",
      ],
      cta: "Explore project partnership",
      imageAlt:
        "System diagram of an engineering partnership covering reliability, risk management, testing, data analysis, documentation and legal certainty",
    },
    methods: {
      title: "Methods selected for the technical decision",
      description:
        "DoE, FMEA, life data analysis and reliability evidence are not isolated packages. We use the method that fits the question, available data and project phase.",
    },
    contact: {
      title: "What kind of support does your project need?",
      description:
        "In an initial conversation, we clarify the technical question, a suitable scope and whether focused consulting or a long-term project partnership is the better fit.",
      cta: "Start an inquiry",
    },
  },
} as const satisfies Record<Locale, object>;

const serviceIcons: Record<string, string> = {
  "/leistungen/zuverlaessigkeitstechnik":
    "/concepts/landingpage-ingenics-kacheln/icon-target.svg",
  "/leistungen/risikomanagement":
    "/concepts/landingpage-ingenics-kacheln/icon-shield.svg",
  "/leistungen/datenanalyse-prognostik":
    "/concepts/landingpage-ingenics-kacheln/icon-database.svg",
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
    >
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

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);

  return buildLocalizedMetadata({
    locale,
    path: "/leistungen",
    title:
      locale === "de"
        ? "Engineering-Leistungen & Projektpartnerschaft | RelTest"
        : "Engineering Services & Project Partnership | RelTest",
    description:
      locale === "de"
        ? "Zuverlässigkeitstechnik, Risikomanagement, Test und Datenanalyse sowie verantwortliche Engineering-Projektpartnerschaft für technische Produkte."
        : "Reliability engineering, risk management, testing and data analysis, plus accountable engineering project partnership for technical products.",
  });
}

export default async function ServicesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getSiteContent(locale);
  const copy = servicesCopy[locale];
  const serviceImages = serviceCardImages[locale];
  const technicalServices = content.services.slice(0, 3);

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <BrandLineWatermark placement="solutions" />

        <div className="relative mx-auto grid max-w-7xl xl:grid-cols-[58%_42%]">
          <div className="flex min-w-0 flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <h1 className="max-w-4xl font-winnstein-display text-4xl leading-[1.06] font-bold tracking-[-0.035em] hyphens-manual sm:text-5xl lg:text-[3.2rem] xl:text-[3.4rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl break-words text-lg leading-8 text-white/78">
              {copy.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localizeHref(locale, "/kontakt")}
                className="brand-action inline-flex min-h-14 items-center justify-between gap-7 bg-brand-steel-cyan px-7 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-[#0a729d]"
              >
                {copy.hero.primaryCta}
                <ArrowIcon />
              </Link>
              <Link
                href="#leistungsfelder"
                className="brand-action brand-action-outline inline-flex min-h-14 items-center justify-between gap-5 border border-white/35 px-6 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/8"
              >
                {copy.hero.secondaryCta}
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[25rem] border-t border-white/15 xl:min-h-[42rem] xl:border-t-0 xl:border-l">
            <Image
              src="/team/home-engineering-consulting.png"
              alt={copy.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,52,.34),transparent_50%),linear-gradient(0deg,rgba(3,19,52,.35),transparent_48%)]" />
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section
        id="leistungsfelder"
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 border-b border-brand-marine/15 pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <h2 className="max-w-3xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {copy.overview.title}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-brand-marine/72 lg:justify-self-end">
              {copy.overview.description}
            </p>
          </div>

          <div className="grid border-l border-brand-marine/15 md:grid-cols-3">
            {technicalServices.map((service) => {
              const visual = serviceImages[service.href];
              const icon = serviceIcons[service.href];

              return (
                <article
                  key={service.href}
                  className="group flex min-h-full flex-col border-r border-b border-brand-marine/15 bg-white"
                >
                  {visual ? (
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-brand-marine/18" />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <div className="flex h-14 w-14 items-center justify-center bg-brand-steel-cyan-10">
                      {icon ? (
                        <Image
                          src={icon}
                          alt=""
                          width={30}
                          height={30}
                          className="h-8 w-8"
                        />
                      ) : null}
                    </div>
                    <h2 className="mt-7 font-winnstein-display text-2xl leading-tight font-bold tracking-[-0.025em] sm:text-3xl md:min-h-20 xl:min-h-0">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-brand-marine/72 md:min-h-48 lg:min-h-40 xl:min-h-32">
                      {service.description}
                    </p>
                    <ul className="mt-7 divide-y divide-brand-marine/15 border-y border-brand-marine/15">
                      {service.topics.map((topic) => (
                        <li
                          key={topic}
                          className="py-3 text-sm leading-6 font-semibold md:flex md:min-h-13 md:items-center"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={localizeHref(locale, service.href)}
                      className="mt-auto inline-flex w-fit items-center gap-5 border-b-2 border-brand-steel-cyan pt-8 pb-2 font-winnstein-display text-sm font-bold"
                    >
                      {copy.overview.cta}
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-steel-cyan-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="brand-panel-cut-bottom-right mx-auto grid max-w-7xl border border-brand-marine/15 bg-white lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative aspect-[2/3] bg-white lg:aspect-auto lg:min-h-[46rem]">
            <Image
              src="/services/engineering-partnership-pictogram.png"
              alt={copy.partnership.imageAlt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-contain object-center p-3 sm:p-5"
            />
          </div>
          <div className="relative flex flex-col justify-center bg-brand-marine p-7 text-white sm:p-10 lg:p-14">
            <span className="absolute left-0 top-0 h-full w-1.5 bg-brand-steel-cyan" />
            <h2 className="font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {copy.partnership.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/82">
              {copy.partnership.description}
            </p>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {copy.partnership.points.map((point) => (
                <li
                  key={point}
                  className="flex min-h-24 items-start gap-4 border border-white/15 bg-white/[0.055] p-5 font-winnstein-display text-base leading-6 font-bold text-white"
                >
                  <span aria-hidden="true" className="brand-list-dash" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href={localizeHref(
                locale,
                "/leistungen/langfristige-kooperation",
              )}
              className="brand-action mt-9 inline-flex min-h-14 w-full items-center justify-between gap-7 bg-brand-steel-cyan px-7 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-[#0a729d] sm:w-fit"
            >
              {copy.partnership.cta}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <h2 className="font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {copy.methods.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-brand-marine/72">
              {copy.methods.description}
            </p>
          </div>
          <ul className="grid border-t border-brand-marine/20 sm:grid-cols-2">
            {content.methodHighlights.map((method, index) => (
              <li
                key={method}
                className={`border-b border-brand-marine/20 py-5 text-base font-semibold ${
                  index % 2 === 0 ? "sm:pr-8" : "sm:border-l sm:pl-8"
                }`}
              >
                {method}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageClosingCta
        locale={locale}
        title={copy.contact.title}
        description={copy.contact.description}
      />
    </main>
  );
}
