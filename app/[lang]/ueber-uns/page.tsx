import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "../../_components/page-intro";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

type AboutCard = {
  title: string;
  description: string;
};

type AboutLinkCard = AboutCard & {
  href: string;
  label: string;
  external?: boolean;
};

type AboutImageCard = AboutCard & {
  src: string;
  alt: string;
};

const aboutContent: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    intro: {
      eyebrow: string;
      title: string;
      description: string;
    };
    practice: {
      eyebrow: string;
      title: string;
      description: string;
      imageAlt: string;
    };
    facts: AboutCard[];
    positioning: {
      eyebrow: string;
      title: string;
      description: string;
      cards: AboutCard[];
    };
    method: {
      eyebrow: string;
      title: string;
      description: string;
      steps: AboutCard[];
    };
    trust: {
      eyebrow: string;
      title: string;
      description: string;
      cards: AboutLinkCard[];
    };
    gallery: {
      eyebrow: string;
      title: string;
      description: string;
      images: AboutImageCard[];
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  }
> = {
  de: {
    metaTitle: "Wir sind RelTest | Reliability Engineering Beratung",
    metaDescription:
      "RelTest Solutions ist ein spezialisierter Engineering-Partner für Zuverlässigkeitstechnik, Erprobung, DoE, Datenanalyse und methodische Absicherung.",
    intro: {
      eyebrow: "Wir sind RelTest",
      title:
        "Ein spezialisierter Engineering-Partner für belastbare Zuverlässigkeitsentscheidungen.",
      description:
        "RelTest Solutions unterstützt Industrieunternehmen dabei, technische Unsicherheit strukturiert einzuordnen: von Anforderungen, Ausfallmechanismen und Versuchsplanung bis zu Datenanalyse, Nachweisführung und langfristiger Entwicklungsbegleitung.",
    },
    practice: {
      eyebrow: "RelTest in der Praxis",
      title:
        "Wir verbinden technische Erfahrung, statistische Methodik und Verantwortung im Projekt.",
      description:
        "Unsere Arbeit entsteht dort, wo Produkt, Daten und Entscheidung zusammenkommen: in Entwicklungsprojekten, an Prüfständen, in Workshops und in der gemeinsamen Bewertung technischer Risiken.",
      imageAlt:
        "RelTest Beratungssituation mit technischen Zeichnungen, Risikomatrix und Produktdaten",
    },
    facts: [
      {
        title: "Beratung seit 2016",
        description:
          "RelTest Solutions begleitet Unternehmen seit 2016 bei technischen Zuverlässigkeits- und Absicherungsthemen.",
      },
      {
        title: "Jahrzehnte Facherfahrung",
        description:
          "Im Umfeld von RelTest kommen langjährige Erfahrung aus Zuverlässigkeitstechnik, Statistik, Erprobung und industrieller Anwendung zusammen.",
      },
      {
        title: "Fokus auf B2B Engineering",
        description:
          "Die Arbeit richtet sich an technische Entscheider, Projektleiter, Entwicklung, Erprobung, Qualität und Geschäftsführung.",
      },
    ],
    positioning: {
      eyebrow: "Wofür wir stehen",
      title: "Technische Tiefe, klare Methodik und belastbare Entscheidungen.",
      description:
        "RelTest versteht sich nicht als allgemeine Unternehmensberatung, sondern als spezialisierter Engineering-Partner für Produkte, bei denen Lebensdauer, Ausfallrisiken und Nachweisführung entscheidend sind.",
      cards: [
        {
          title: "Zuverlässigkeit als Engineering-Aufgabe",
          description:
            "Ausfallrisiken werden nicht isoliert betrachtet, sondern mit Anforderungen, Lasten, Ausfallmechanismen, Teststrategie und Datenbewertung verbunden.",
        },
        {
          title: "Statistik mit Produktverständnis",
          description:
            "Methoden wie Lebensdaueranalyse, DoE und Prognostik werden so eingesetzt, dass sie echte technische Entscheidungen unterstützen.",
        },
        {
          title: "Nachvollziehbare Absicherung",
          description:
            "Ergebnisse sollen nicht nur rechnerisch plausibel sein, sondern auch dokumentiert, erklärbar und im Projektkontext belastbar bleiben.",
        },
      ],
    },
    method: {
      eyebrow: "Arbeitsweise",
      title: "Strukturiert genug für belastbare Nachweise, pragmatisch genug für reale Projekte.",
      description:
        "Unsere Arbeit beginnt mit dem technischen Problem und endet nicht bei einer einzelnen Analyse. Entscheidend ist, dass Methoden, Daten und Dokumentation zu einer tragfähigen Entscheidungsgrundlage zusammenfinden.",
      steps: [
        {
          title: "Technische Fragestellung klären",
          description:
            "Welche Risiken, Anforderungen, Randbedingungen und Entscheidungen stehen wirklich im Mittelpunkt?",
        },
        {
          title: "Geeignete Methodik wählen",
          description:
            "Zuverlässigkeitsplanung, Erprobung, DoE, Datenanalyse oder Risikomanagement werden passend zur Fragestellung kombiniert.",
        },
        {
          title: "Ergebnisse entscheidbar machen",
          description:
            "Analysen werden so aufbereitet, dass Entwicklung, Qualität, Einkauf oder Management sie konkret nutzen können.",
        },
        {
          title: "Dokumentation mitdenken",
          description:
            "Nachweise, Annahmen und Entscheidungswege werden nachvollziehbar dokumentiert, statt nur als einzelne Ergebniszahl stehen zu bleiben.",
        },
      ],
    },
    trust: {
      eyebrow: "Vertrauensanker",
      title: "Fachliche Substanz sichtbar machen.",
      description:
        "Für technische B2B-Kunden zählt nicht nur, was angeboten wird, sondern ob die fachliche Grundlage glaubwürdig ist. Deshalb verknüpft die Website Leistungen mit nachweisbaren Kompetenzsignalen.",
      cards: [
        {
          title: "Springer-Fachbuch",
          description:
            "Das Fachbuch zur Zuverlässigkeit im Fahrzeug- und Maschinenbau zeigt die wissenschaftliche und praktische Tiefe hinter dem Themenfeld.",
          href: "/literatur",
          label: "Zur Literatur",
        },
        {
          title: "Podcast-Einblick",
          description:
            "Der Podcast mit Geschäftsführer Dr.-Ing. Kevin Lucan bietet einen persönlichen Zugang zu Haltung, Werdegang und technischem Denken.",
          href: "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan",
          label: "Podcast öffnen",
          external: true,
        },
        {
          title: "Referenzen",
          description:
            "Kundenlogos und Projektumfeld zeigen, dass RelTest in anspruchsvollen industriellen Kontexten arbeitet.",
          href: "/referenzen",
          label: "Referenzen ansehen",
        },
        {
          title: "Weiterbildung",
          description:
            "Seminare und Academy machen Methodenwissen nicht nur verfügbar, sondern im Unternehmen anwendbar.",
          href: "/weiterbildung",
          label: "Weiterbildung ansehen",
        },
      ],
    },
    gallery: {
      eyebrow: "Arbeitskontexte",
      title: "Kompetenz zeigt sich in konkreten Situationen.",
      description:
        "RelTest arbeitet nicht abstrakt über Zuverlässigkeit, sondern an realen technischen Fragestellungen: im Austausch mit Teams, an Daten, an Bauteilen und in der methodischen Vorbereitung von Entscheidungen.",
      images: [
        {
          title: "Beratung und Entscheidungsgrundlagen",
          description:
            "Technische Risiken werden gemeinsam eingeordnet und in belastbare nächste Schritte übersetzt.",
          src: "/about/consulting-simulation-review.png",
          alt: "Technische Beratungssituation mit Produktdaten und Risikomatrix",
        },
        {
          title: "Erprobung und Produktverständnis",
          description:
            "Ausfallmechanismen, Prüfstände und reale Randbedingungen bleiben Teil der Analyse.",
          src: "/about/component-review.png",
          alt: "Ingenieurteam bespricht Zuverlässigkeitsfragen an einem Prüfstand",
        },
        {
          title: "Erprobung und Datenbewertung",
          description:
            "Schulungen und Workshops schaffen ein gemeinsames Methodenverständnis im Unternehmen.",
          src: "/about/testbench-data-review.png",
          alt: "RelTest Seminar zur Zuverlässigkeitstechnik vor Ort",
        },
      ],
    },
    cta: {
      title: "Sie möchten einschätzen, ob RelTest zu Ihrem Thema passt?",
      description:
        "Ein erstes Gespräch hilft, technische Fragestellung, Projektphase und passende Unterstützung schnell einzuordnen.",
      primary: "Projekt besprechen",
      secondary: "Leistungen ansehen",
    },
  },
  en: {
    metaTitle: "About RelTest | Reliability Engineering Consulting",
    metaDescription:
      "RelTest Solutions is a specialised engineering partner for reliability engineering, testing, DoE, data analysis and robust validation.",
    intro: {
      eyebrow: "About RelTest",
      title:
        "A specialised engineering partner for robust reliability decisions.",
      description:
        "RelTest Solutions helps industrial companies structure technical uncertainty: from requirements, failure mechanisms and test planning to data analysis, evidence and long-term development support.",
    },
    practice: {
      eyebrow: "RelTest in practice",
      title:
        "We combine technical experience, statistical methodology and project responsibility.",
      description:
        "Our work happens where product, data and decision meet: in development projects, at test benches, in workshops and in the joint evaluation of technical risks.",
      imageAlt:
        "RelTest consulting situation with technical drawings, risk matrix and product data",
    },
    facts: [
      {
        title: "Consulting since 2016",
        description:
          "RelTest Solutions has supported companies with technical reliability and validation topics since 2016.",
      },
      {
        title: "Decades of expertise",
        description:
          "RelTest brings together long-standing experience in reliability engineering, statistics, testing and industrial application.",
      },
      {
        title: "B2B engineering focus",
        description:
          "The work addresses technical decision-makers, project leaders, development, testing, quality and management.",
      },
    ],
    positioning: {
      eyebrow: "What we stand for",
      title: "Technical depth, clear methodology and robust decisions.",
      description:
        "RelTest is not a general management consultancy. It is a specialised engineering partner for products where lifetime, failure risk and evidence are decisive.",
      cards: [
        {
          title: "Reliability as an engineering task",
          description:
            "Failure risks are connected with requirements, loads, failure mechanisms, test strategy and data evaluation.",
        },
        {
          title: "Statistics with product understanding",
          description:
            "Methods such as lifetime analysis, DoE and prognostics are applied so they support real technical decisions.",
        },
        {
          title: "Traceable validation",
          description:
            "Results should not only be mathematically plausible, but also documented, explainable and robust in the project context.",
        },
      ],
    },
    method: {
      eyebrow: "How we work",
      title: "Structured enough for evidence, pragmatic enough for real projects.",
      description:
        "Our work starts with the technical problem and does not stop at a single analysis. The decisive point is that methods, data and documentation form a reliable decision basis.",
      steps: [
        {
          title: "Clarify the technical question",
          description:
            "Which risks, requirements, boundary conditions and decisions are actually at the centre?",
        },
        {
          title: "Select suitable methods",
          description:
            "Reliability planning, testing, DoE, data analysis and risk management are combined according to the question.",
        },
        {
          title: "Make results decision-ready",
          description:
            "Analyses are prepared so development, quality, purchasing or management can use them concretely.",
        },
        {
          title: "Think documentation through",
          description:
            "Evidence, assumptions and decision paths are documented traceably instead of ending as isolated result numbers.",
        },
      ],
    },
    trust: {
      eyebrow: "Trust signals",
      title: "Making technical substance visible.",
      description:
        "For technical B2B customers, it matters not only what is offered, but whether the technical foundation is credible. The website therefore connects services with visible expertise signals.",
      cards: [
        {
          title: "Springer reference book",
          description:
            "The reference on reliability in automotive and mechanical engineering demonstrates scientific and practical depth.",
          href: "/literatur",
          label: "View literature",
        },
        {
          title: "Podcast insight",
          description:
            "The podcast with Managing Director Dr.-Ing. Kevin Lucan gives a personal impression of mindset, background and technical thinking.",
          href: "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan",
          label: "Open podcast",
          external: true,
        },
        {
          title: "References",
          description:
            "Customer logos and project context show that RelTest works in demanding industrial environments.",
          href: "/referenzen",
          label: "View references",
        },
        {
          title: "Training",
          description:
            "Seminars and the Academy make methodological knowledge available and applicable inside the organisation.",
          href: "/weiterbildung",
          label: "View training",
        },
      ],
    },
    gallery: {
      eyebrow: "Working contexts",
      title: "Expertise becomes visible in concrete situations.",
      description:
        "RelTest does not treat reliability as an abstract topic. The work focuses on real technical questions: with teams, data, components and methodical preparation of decisions.",
      images: [
        {
          title: "Consulting and decision bases",
          description:
            "Technical risks are structured together and translated into robust next steps.",
          src: "/about/consulting-simulation-review.png",
          alt: "Technical consulting situation with product data and risk matrix",
        },
        {
          title: "Testing and product understanding",
          description:
            "Failure mechanisms, test benches and real boundary conditions remain part of the analysis.",
          src: "/about/component-review.png",
          alt: "Engineering team discussing reliability questions at a test bench",
        },
        {
          title: "Testing and data evaluation",
          description:
            "Training and workshops create a shared methodological understanding inside the company.",
          src: "/about/testbench-data-review.png",
          alt: "RelTest on-site seminar on reliability engineering",
        },
      ],
    },
    cta: {
      title: "Would you like to assess whether RelTest fits your topic?",
      description:
        "An initial conversation helps clarify the technical question, project phase and suitable support quickly.",
      primary: "Discuss your project",
      secondary: "View services",
    },
  },
};

function resolveHref(locale: Locale, href: string) {
  return href.startsWith("http") ? href : localizeHref(locale, href);
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = aboutContent[locale];

  return buildLocalizedMetadata({
    locale,
    path: "/ueber-uns",
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function AboutPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = aboutContent[locale];
  const methodImageAlt =
    locale === "de"
      ? "Whiteboard mit Ausfallmöglichkeiten, Hypothesen und offenen Punkten"
      : "Whiteboard with failure possibilities, hypotheses and open points";

  return (
    <>
      <PageIntro
        eyebrow={content.intro.eyebrow}
        title={content.intro.title}
        description={content.intro.description}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
              {content.practice.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {content.practice.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {content.practice.description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-200">
            <Image
              src="/about/consulting-simulation-review.png"
              alt={content.practice.imageAlt}
              width={1536}
              height={1024}
              className="aspect-[1.28] h-full w-full object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/38 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-0 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {content.facts.map((fact) => (
              <article
                key={fact.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
                  {fact.title}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {fact.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
              {content.positioning.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {content.positioning.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {content.positioning.description}
            </p>
          </div>

          <div className="grid gap-5">
            {content.positioning.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fbfd_0%,#eef5f8_100%)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
              {content.method.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {content.method.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {content.method.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white bg-slate-100 shadow-2xl shadow-slate-300/70 ring-1 ring-slate-200/70">
              <Image
                src="/about/whiteboard-failure-analysis.png"
                alt={methodImageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/26 via-transparent to-white/8" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {content.method.steps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[1.75rem] border border-white/80 bg-white/86 p-7 shadow-sm ring-1 ring-slate-200/80 backdrop-blur"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
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
                    </svg>
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
            {content.gallery.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            {content.gallery.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {content.gallery.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.gallery.images.map((image) => (
            <article
              key={image.src}
              className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[1.28] bg-slate-100">
                <Image
                  src={image.src}
                  alt={
                    image.src === "/about/testbench-data-review.png"
                      ? locale === "de"
                        ? "Team bewertet Zuverlässigkeitsdaten an einem Prüfstand"
                        : "Team evaluating reliability data at a test bench"
                      : image.alt
                  }
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {image.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {image.src === "/about/testbench-data-review.png"
                    ? locale === "de"
                      ? "Prüfstand, Messdaten und Produktverständnis werden gemeinsam betrachtet."
                      : "Test bench, measurement data and product understanding are reviewed together."
                    : image.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
              {content.trust.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {content.trust.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {content.trust.description}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.trust.cards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {card.description}
                </p>
                <div className="mt-auto pt-7">
                  <Link
                    href={resolveHref(locale, card.href)}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                  >
                    {card.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                {content.cta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                {content.cta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={localizeHref(locale, "/kontakt")}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                {content.cta.primary}
              </Link>
              <Link
                href={localizeHref(locale, "/leistungen")}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
              >
                {content.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
