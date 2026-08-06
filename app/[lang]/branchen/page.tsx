import Image from "next/image";
import Link from "next/link";

import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const industriesContent = {
  de: {
    metaTitle: "Branchen für Reliability Engineering | RelTest Solutions",
    metaDescription:
      "Zuverlässigkeitstechnik, Risikomanagement, Erprobung und Datenanalyse für Automotive, Maschinenbau, Elektronik, Medizintechnik und weitere technische Branchen.",
    hero: {
      eyebrow: "Branchen",
      title: "Zuverlässigkeit kennt keine Branchengrenzen.",
      description:
        "Produkte, Einsatzbedingungen und Nachweispflichten unterscheiden sich. Die zentrale Aufgabe bleibt: technische Risiken früh verstehen und Entscheidungen auf belastbare Daten stützen.",
    },
    overview: {
      eyebrow: "Anwendungsfelder",
      title: "Branchenspezifische Herausforderungen. Methodisch belastbare Antworten.",
      description:
        "RelTest überträgt Zuverlässigkeitstechnik nicht schematisch. Prüfstrategie, Datenanalyse und Absicherung werden an Produkt, Nutzung und Entwicklungsstand angepasst.",
      linkLabel: "Branche vertiefen",
    },
    items: [
      {
        slug: "automotive",
        title: "Automotive",
        description:
          "Hohe Stückzahlen, kurze Entwicklungszyklen und Sicherheitsanforderungen machen belastbare Prüf- und Nachweisstrategien entscheidend.",
        image: "/industries/automotive.png",
        alt: "Automotive-Antriebsstrang in einem technischen Prüfumfeld",
      },
      {
        slug: "maschinenbau",
        title: "Maschinenbau",
        description:
          "Variable Lasten, Verschleiß und lange Nutzungszeiten verlangen eine realistische Lebensdauerbewertung und wirtschaftliche Erprobung.",
        image: "/industries/maschinenbau.png",
        alt: "Mechanisches Getriebe für industrielle Anwendungen",
      },
      {
        slug: "elektronische-produkte",
        title: "Elektronische Produkte",
        description:
          "Temperatur, Feuchte, Alterung und Bauteilstreuung müssen gemeinsam bewertet werden, damit Tests relevante Ausfallmechanismen treffen.",
        image: "/industries/elektronische-produkte.png",
        alt: "Elektronische Baugruppe während einer technischen Messung",
      },
      {
        slug: "halbleiterindustrie",
        title: "Halbleiterindustrie",
        description:
          "Enge Prozessfenster und hohe Datendichte erfordern eine saubere Trennung von Streuung, Einflussgrößen und tatsächlichen Risiken.",
        image: "/industries/halbleiterindustrie.png",
        alt: "Halbleiter-Wafer in einer präzisen Fertigungsumgebung",
      },
      {
        slug: "konsumgueter",
        title: "Consumer-Technik",
        description:
          "Vielfältige Nutzung trifft auf hohe Kundenerwartungen und Kostendruck. Zuverlässigkeit muss deshalb früh und effizient abgesichert werden.",
        image: "/industries/consumer-technik-v2.png",
        alt: "Consumer-Elektronik in einem Zuverlässigkeitslabor",
      },
      {
        slug: "erneuerbare-energien",
        title: "Erneuerbare Energien",
        description:
          "Lange Betriebszeiten, wechselnde Umweltbedingungen und schwer zugängliche Systeme erhöhen die Bedeutung belastbarer Prognosen.",
        image: "/industries/erneuerbare-energien.png",
        alt: "Technische Komponenten für erneuerbare Energiesysteme",
      },
      {
        slug: "medizintechnik",
        title: "Medizintechnik",
        description:
          "Technische Risiken, Nachweise und Dokumentation müssen konsequent zusammenspielen, weil Ausfälle unmittelbare Folgen haben können.",
        image: "/industries/medizintechnik-v2.png",
        alt: "Medizintechnisches System in einem technischen Labor",
      },
      {
        slug: "luft-und-raumfahrt",
        title: "Luft- und Raumfahrt",
        description:
          "Hohe Sicherheitsanforderungen verlangen nachvollziehbare Risikobewertungen, robuste Nachweise und lückenlose technische Argumentation.",
        image: "/industries/luft-und-raumfahrt-v2.png",
        alt: "Luft- und Raumfahrtkomponente während einer Präzisionsprüfung",
      },
      {
        slug: "produktionstechnik",
        title: "Produktionstechnik",
        description:
          "Stillstände wirken direkt auf Ausbringung, Qualität und Kosten. Betriebs- und Ausfalldaten machen kritische Komponenten früh sichtbar.",
        image: "/expertise/lab-review.png",
        alt: "Ingenieurteam bei der Analyse eines industriellen Prüfsystems",
      },
    ],
    cta: {
      title: "Ihre Branche stellt eigene Anforderungen?",
      description:
        "Wir ordnen gemeinsam ein, welche Risiken, Daten und Nachweise für Ihr Produkt tatsächlich entscheidend sind.",
      primary: "Projekt besprechen",
      secondary: "Leistungen ansehen",
    },
  },
  en: {
    metaTitle: "Industries for Reliability Engineering | RelTest Solutions",
    metaDescription:
      "Reliability engineering, risk management, testing and data analysis for automotive, mechanical engineering, electronics, medical technology and other technical industries.",
    hero: {
      eyebrow: "Industries",
      title: "Reliability has no industry boundaries.",
      description:
        "Products, operating conditions and evidence requirements differ. The central task remains the same: understand technical risks early and base decisions on robust data.",
    },
    overview: {
      eyebrow: "Fields of application",
      title: "Industry-specific challenges. Methodologically robust answers.",
      description:
        "RelTest does not apply reliability engineering as a standard template. Test strategy, data analysis and validation are adapted to the product, its use and its development status.",
      linkLabel: "Explore industry",
    },
    items: [
      {
        slug: "automotive",
        title: "Automotive",
        description:
          "High volumes, short development cycles and safety requirements make robust test and evidence strategies essential.",
        image: "/industries/automotive.png",
        alt: "Automotive powertrain in a technical test environment",
      },
      {
        slug: "maschinenbau",
        title: "Mechanical engineering",
        description:
          "Variable loads, wear and long operating periods require realistic lifetime assessment and economical testing.",
        image: "/industries/maschinenbau.png",
        alt: "Mechanical gearbox for industrial applications",
      },
      {
        slug: "elektronische-produkte",
        title: "Electronic products",
        description:
          "Temperature, humidity, ageing and component variation must be assessed together so that tests address relevant failure mechanisms.",
        image: "/industries/elektronische-produkte.png",
        alt: "Electronic assembly during technical measurement",
      },
      {
        slug: "halbleiterindustrie",
        title: "Semiconductor industry",
        description:
          "Tight process windows and high data density demand a clear separation of variation, influencing factors and actual risks.",
        image: "/industries/halbleiterindustrie.png",
        alt: "Semiconductor wafer in a precision manufacturing environment",
      },
      {
        slug: "konsumgueter",
        title: "Consumer technology",
        description:
          "Diverse use meets high customer expectations and cost pressure. Reliability therefore needs to be validated early and efficiently.",
        image: "/industries/consumer-technik-v2.png",
        alt: "Consumer electronics in a reliability laboratory",
      },
      {
        slug: "erneuerbare-energien",
        title: "Renewable energy",
        description:
          "Long operating periods, changing environmental conditions and hard-to-access systems increase the importance of robust predictions.",
        image: "/industries/erneuerbare-energien.png",
        alt: "Technical components for renewable energy systems",
      },
      {
        slug: "medizintechnik",
        title: "Medical technology",
        description:
          "Technical risks, evidence and documentation must work together consistently because failures can have immediate consequences.",
        image: "/industries/medizintechnik-v2.png",
        alt: "Medical technology system in a technical laboratory",
      },
      {
        slug: "luft-und-raumfahrt",
        title: "Aerospace",
        description:
          "High safety requirements demand traceable risk assessments, robust evidence and complete technical reasoning.",
        image: "/industries/luft-und-raumfahrt-v2.png",
        alt: "Aerospace component undergoing precision testing",
      },
      {
        slug: "produktionstechnik",
        title: "Production technology",
        description:
          "Downtime directly affects output, quality and costs. Operating and failure data reveal critical components early.",
        image: "/expertise/lab-review.png",
        alt: "Engineering team analysing an industrial test system",
      },
    ],
    cta: {
      title: "Does your industry have its own requirements?",
      description:
        "Together, we identify which risks, data and evidence are truly decisive for your product.",
      primary: "Discuss your project",
      secondary: "View services",
    },
  },
} as const;

function getContent(locale: Locale) {
  return industriesContent[locale];
}

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
  const content = getContent(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/branchen",
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function IndustriesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const heroImages = content.items.slice(0, 4);

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[minmax(0,0.9fr)_minmax(30rem,1.1fr)]">
          <div className="flex min-w-0 flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.8rem]">
              {content.hero.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76">
              {content.hero.description}
            </p>
            <div className="mt-10 h-1 w-16 bg-brand-steel-cyan" />
          </div>
          <div className="grid min-h-[30rem] grid-cols-2 border-t border-white/15 lg:min-h-[39rem] lg:border-t-0 lg:border-l">
            {heroImages.map((industry) => (
              <div
                key={industry.slug}
                className="relative min-h-60 overflow-hidden border-r border-b border-white/15"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 28vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-marine/45" />
                <span className="absolute inset-x-0 bottom-0 p-5 font-winnstein-display text-sm font-bold">
                  {industry.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end">
            <div>
              <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
                {content.overview.eyebrow}
              </p>
              <h2 className="mt-4 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
                {content.overview.title}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-brand-marine/72 lg:border-l lg:border-brand-marine/18 lg:pl-10">
              {content.overview.description}
            </p>
          </div>

          <div className="mt-12 grid border-t border-l border-brand-marine/18 md:grid-cols-2 xl:grid-cols-3">
            {content.items.map((industry, index) => (
              <article
                key={industry.slug}
                className="group flex min-h-full flex-col border-r border-b border-brand-marine/18 bg-white"
              >
                <Link
                  href={localizeHref(locale, `/branchen/${industry.slug}`)}
                  className="relative block aspect-[16/9] overflow-hidden"
                  aria-label={`${content.overview.linkLabel}: ${industry.title}`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-marine/48 via-transparent to-transparent" />
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                    0{index + 1}
                  </span>
                  <h2 className="mt-3 font-winnstein-display text-2xl leading-snug font-bold">
                    {industry.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-brand-marine/70">
                    {industry.description}
                  </p>
                  <Link
                    href={localizeHref(locale, `/branchen/${industry.slug}`)}
                    className="mt-auto inline-flex w-fit items-center gap-4 border-b border-brand-steel-cyan pt-7 pb-1 font-winnstein-display text-sm font-bold"
                  >
                    {content.overview.linkLabel}
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-marine px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="max-w-4xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {content.cta.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">
              {content.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="brand-action inline-flex min-h-12 items-center justify-between gap-6 bg-brand-steel-cyan px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-marine"
            >
              {content.cta.primary}
              <ArrowIcon />
            </Link>
            <Link
              href={localizeHref(locale, "/leistungen")}
              className="brand-action brand-action-outline inline-flex min-h-12 items-center justify-between gap-6 border border-white/30 px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:border-white"
            >
              {content.cta.secondary}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
