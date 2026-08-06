import Image from "next/image";
import Link from "next/link";

import { getSiteContent, referenceLogos } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { IndustryImageList } from "./industry-image-list";

type IndustryItem = {
  name: string;
  href: string;
  image: string;
};

type LandingConceptKachelnTailProps = {
  industries: {
    items: readonly IndustryItem[];
    ctaLabel: string;
    eyebrowLabel: string;
    navigationLabel: string;
    nextLabel: string;
    previousLabel: string;
    slideLabel: string;
  };
  locale: Locale;
};

const podcastHref =
  "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan";

const serviceHrefs = [
  "/leistungen/zuverlaessigkeitstechnik",
  "/leistungen/risikomanagement",
  "/leistungen/datenanalyse-prognostik",
  "/leistungen/langfristige-kooperation",
] as const;

const featuredReferenceNames = new Set([
  "Aesculap",
  "Bosch",
  "ebm-papst",
  "Mercedes-Benz",
  "Porsche",
  "Stihl",
  "ZEISS",
  "ZF",
]);

const featuredReferences = referenceLogos.filter((reference) =>
  featuredReferenceNames.has(reference.name),
);

const conceptContent = {
  de: {
    serviceCta: "Leistung ansehen",
    industriesTitle: "Zuverlässigkeit kennt keine Branchengrenzen",
    projects: {
      eyebrow: "Projektbeispiele",
      title: "Von der offenen Fragestellung zur belastbaren Entscheidung.",
      description:
        "Diese vorbereiteten Musterfälle zeigen typische Aufgaben und die spätere Darstellungslogik. Sobald Projekte freigegeben sind, werden sie durch echte RelTest-Fälle und belegbare Ergebnisse ersetzt.",
      exampleLabel: "Vorbereiteter Musterfall",
      challengeLabel: "Ausgangslage",
      approachLabel: "Beitrag von RelTest",
      resultLabel: "Ergebnisbild",
      cta: "Eigenes Projekt einordnen",
      items: [
        {
          number: "01",
          context: "Produktentwicklung · Mechatronik",
          title: "Zuverlässigkeitsnachweis für eine neue Produktgeneration",
          challenge:
            "Anforderungen, Risiken und vorhandene Prüfungen ergeben noch keine nachvollziehbare Freigabelogik.",
          approach:
            "Zuverlässigkeitsziele strukturieren, Risiken priorisieren und einen wirtschaftlichen Nachweisplan aufbauen.",
          result:
            "Ein abgestimmter Entscheidungsrahmen mit klaren Prüfumfängen, Kriterien und Verantwortlichkeiten.",
        },
        {
          number: "02",
          context: "Serie · Feld- und Lebensdauerdaten",
          title: "Wiederkehrende Ausfälle systematisch bewerten",
          challenge:
            "Felddaten liegen in mehreren Quellen vor, während Ursachen, Häufigkeiten und Handlungsbedarf unklar bleiben.",
          approach:
            "Daten konsolidieren, Ausfallbilder trennen und Lebensdauer- sowie Risikomodelle belastbar auswerten.",
          result:
            "Priorisierte technische Risiken und eine nachvollziehbare Grundlage für Entwicklungs- und Serviceentscheidungen.",
        },
        {
          number: "03",
          context: "Erprobung · Design of Experiments",
          title: "Mit begrenzter Prüfkapazität mehr Erkenntnis gewinnen",
          challenge:
            "Viele Einflussgrößen treffen auf wenig Zeit, wenige Prüflinge und hohe Kosten je Versuch.",
          approach:
            "Ein statistisches Versuchsdesign entwickeln, Wechselwirkungen untersuchen und Bestätigungsversuche gezielt planen.",
          result:
            "Ein fokussiertes Versuchsprogramm mit höherem Informationsgewinn und klareren Parameterentscheidungen.",
        },
      ],
    },
    trust: {
      eyebrow: "Fachliche Vertrauensbasis",
      title: "Veröffentlichte Expertise trifft industrielle Praxis.",
      description:
        "RelTest verbindet wissenschaftlich fundierte Methoden mit Erfahrung aus realen Entwicklungs-, Erprobungs- und Qualitätsprojekten.",
      metrics: [
        { value: "Seit 2016", label: "Industrieberatung" },
        { value: "2", label: "Springer-Fachbücher" },
      ],
      booksEyebrow: "Springer Vieweg",
      booksTitle: "Fachwissen, das veröffentlicht und nachprüfbar ist.",
      bookTitles: [
        "Zuverlässigkeitstests",
        "Zuverlässigkeit im Fahrzeug- und Maschinenbau",
      ],
      booksCta: "Fachbücher ansehen",
      podcastEyebrow: "Ingenieurshelden-Podcast",
      podcastTitle: "Die Haltung hinter der technischen Arbeit kennenlernen.",
      podcastText:
        "Dr.-Ing. Kevin Lucan spricht über Engineering-Mindset, Verantwortung und seinen Weg in der Zuverlässigkeitstechnik.",
      podcastCta: "Podcast anhören",
      referencesEyebrow: "Ausgewählte Referenzen",
      referencesText:
        "Praxisnähe aus anspruchsvollen Industrie- und Entwicklungsumfeldern.",
      referencesCta: "Alle Referenzen ansehen",
    },
  },
  en: {
    serviceCta: "View service",
    industriesTitle: "Reliability knows no industry boundaries",
    projects: {
      eyebrow: "Project examples",
      title: "From an open engineering question to a robust decision.",
      description:
        "These prepared sample cases demonstrate typical assignments and the intended presentation format. Once projects are approved, they will be replaced by real RelTest cases and verified results.",
      exampleLabel: "Prepared sample case",
      challengeLabel: "Initial situation",
      approachLabel: "RelTest contribution",
      resultLabel: "Result",
      cta: "Discuss your own project",
      items: [
        {
          number: "01",
          context: "Product development · Mechatronics",
          title: "Reliability demonstration for a new product generation",
          challenge:
            "Requirements, risks and existing tests do not yet form a traceable release strategy.",
          approach:
            "Structure reliability targets, prioritise risks and develop an efficient demonstration plan.",
          result:
            "An aligned decision framework with clear test scopes, criteria and responsibilities.",
        },
        {
          number: "02",
          context: "Series product · Field and lifetime data",
          title: "Systematically assess recurring failures",
          challenge:
            "Field data is spread across multiple sources while causes, frequencies and required actions remain unclear.",
          approach:
            "Consolidate data, separate failure patterns and evaluate lifetime and risk models.",
          result:
            "Prioritised technical risks and a traceable basis for development and service decisions.",
        },
        {
          number: "03",
          context: "Testing · Design of Experiments",
          title: "Gain more insight with limited testing capacity",
          challenge:
            "Many influencing factors meet limited time, few test units and high cost per experiment.",
          approach:
            "Develop a statistical experiment design, assess interactions and target confirmation tests.",
          result:
            "A focused test programme with greater information gain and clearer parameter decisions.",
        },
      ],
    },
    trust: {
      eyebrow: "Professional trust",
      title: "Published expertise meets industrial practice.",
      description:
        "RelTest combines scientifically grounded methods with experience from real development, testing and quality projects.",
      metrics: [
        { value: "Since 2016", label: "industrial consulting" },
        { value: "2", label: "Springer engineering books" },
      ],
      booksEyebrow: "Springer Vieweg",
      booksTitle: "Engineering knowledge that is published and verifiable.",
      bookTitles: [
        "Reliability testing",
        "Reliability in automotive and mechanical engineering",
      ],
      booksCta: "View engineering books",
      podcastEyebrow: "Ingenieurshelden podcast",
      podcastTitle: "Meet the mindset behind the engineering work.",
      podcastText:
        "Dr.-Ing. Kevin Lucan talks about engineering mindset, responsibility and his path into reliability engineering.",
      podcastCta: "Listen to the podcast",
      referencesEyebrow: "Selected references",
      referencesText:
        "Practical experience from demanding industrial and development environments.",
      referencesCta: "View all references",
    },
  },
} as const;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="m13 7 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function LandingConceptKachelnTail({
  industries,
  locale,
}: LandingConceptKachelnTailProps) {
  const siteContent = getSiteContent(locale);
  const content = conceptContent[locale];
  const homeServices = serviceHrefs
    .map((href) =>
      siteContent.services.find((service) => service.href === href),
    )
    .filter((service): service is (typeof siteContent.services)[number] =>
      Boolean(service),
    );

  return (
    <div className="kacheln-page-tail bg-white">
      <section className="border-t border-line-soft bg-white">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 xl:px-16">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(24rem,1fr)] lg:items-end lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-4 text-base font-semibold tracking-[-0.02em] text-slate-600">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-14 bg-gradient-to-r from-brand-cyan to-slate-300"
                />
                {siteContent.home.serviceIntro.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-[clamp(2.25rem,3.2vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.062em] text-brand-ink">
                {siteContent.home.serviceIntro.title}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 font-medium text-slate-600 sm:text-lg">
              {siteContent.home.serviceIntro.description}
            </p>
          </div>

          <div className="mt-12 grid border-t border-l border-line-soft sm:grid-cols-2 xl:grid-cols-4">
            {homeServices.map((service, index) => (
              <Link
                key={service.href}
                href={localizeHref(locale, service.href)}
                className="group relative flex min-h-0 flex-col overflow-hidden border-r border-b border-line-soft bg-white p-6 transition duration-300 hover:z-10 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(17,36,58,0.12)] focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:min-h-[20rem] sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-5 text-5xl font-semibold tracking-[-0.08em] text-slate-100 transition-colors group-hover:text-cyan-50"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-13 w-13 items-center justify-center rounded-full bg-cyan-50 text-brand-blue ring-1 ring-cyan-100">
                  <Image
                    src={service.icon}
                    alt=""
                    aria-hidden="true"
                    width={30}
                    height={30}
                    className="h-7 w-7"
                  />
                </span>
                <span className="relative mt-7 text-[0.69rem] font-bold uppercase tracking-[0.2em] text-brand-cyan">
                  {service.meta}
                </span>
                <h3 className="relative mt-3 max-w-xs text-2xl leading-[1.08] font-semibold tracking-[-0.05em] text-brand-ink">
                  {service.title}
                </h3>
                <p className="relative mt-4 text-sm leading-7 font-medium text-slate-600">
                  {service.description}
                </p>
                <span className="relative mt-auto inline-flex items-center gap-3 pt-7 text-sm font-bold text-brand-ink transition-colors group-hover:text-brand-cyan">
                  {content.serviceCta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line-soft bg-[#f4f8fb]">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 xl:px-16">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(24rem,1fr)] lg:items-end lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-4 text-base font-semibold tracking-[-0.02em] text-slate-600">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-14 bg-gradient-to-r from-brand-cyan to-slate-300"
                />
                {content.projects.eyebrow}
              </p>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.25rem,3.2vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.062em] text-brand-ink">
                {content.projects.title}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 font-medium text-slate-600 sm:text-lg">
              {content.projects.description}
            </p>
          </div>

          <div className="mt-12 border-t border-slate-300/80">
            {content.projects.items.map((project) => (
              <article
                key={project.number}
                className="group grid gap-7 border-b border-slate-300/80 py-9 lg:grid-cols-[minmax(17rem,0.8fr)_minmax(0,1.55fr)] lg:gap-14 lg:py-11"
              >
                <div className="relative pl-14 sm:pl-18">
                  <span className="absolute top-0 left-0 text-3xl font-semibold tracking-[-0.06em] text-brand-cyan">
                    {project.number}
                  </span>
                  <p className="text-[0.68rem] leading-5 font-bold uppercase tracking-[0.18em] text-slate-500">
                    {content.projects.exampleLabel}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-slate-500">
                    {project.context}
                  </p>
                  <h3 className="mt-3 max-w-lg text-[1.65rem] leading-[1.12] font-semibold tracking-[-0.045em] text-brand-ink sm:text-[1.85rem]">
                    {project.title}
                  </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
                  {[
                    {
                      label: content.projects.challengeLabel,
                      text: project.challenge,
                    },
                    {
                      label: content.projects.approachLabel,
                      text: project.approach,
                    },
                    {
                      label: content.projects.resultLabel,
                      text: project.result,
                    },
                  ].map((detail, index) => (
                    <div
                      key={detail.label}
                      className={`min-w-0 sm:px-6 ${
                        index === 0
                          ? "sm:pl-0"
                          : "sm:border-l sm:border-slate-300/80"
                      }`}
                    >
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-cyan">
                        {detail.label}
                      </p>
                      <p className="mt-3 text-sm leading-7 font-medium text-slate-600">
                        {detail.text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex justify-end">
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded bg-brand-ink px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(7,20,48,0.15)] transition hover:bg-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f8fb]"
            >
              {content.projects.cta}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#071430] text-white">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 xl:px-16">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(38rem,1.1fr)] xl:items-end xl:gap-20">
            <div>
              <p className="inline-flex items-center gap-4 text-base font-semibold tracking-[-0.02em] text-cyan-200">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-14 bg-gradient-to-r from-brand-cyan-bright to-white/20"
                />
                {content.trust.eyebrow}
              </p>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.25rem,3.2vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.062em] text-white">
                {content.trust.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 font-medium text-slate-300 sm:text-lg">
                {content.trust.description}
              </p>
            </div>

            <dl className="grid grid-cols-2 border-t border-l border-white/15">
              {content.trust.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex min-h-28 flex-col border-r border-b border-white/15 px-3 py-4 sm:min-h-32 sm:px-5 sm:py-6"
                >
                  <dt className="mt-2 text-[0.64rem] leading-4 font-semibold text-slate-400 sm:text-xs sm:leading-5">
                    {metric.label}
                  </dt>
                  <dd className="order-first text-xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)]">
            <div className="grid min-h-[20rem] overflow-hidden rounded-xl bg-white text-brand-ink sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-cyan">
                  {content.trust.booksEyebrow}
                </p>
                <h3 className="mt-4 max-w-xl text-3xl leading-[1.08] font-semibold tracking-[-0.052em] text-brand-ink">
                  {content.trust.booksTitle}
                </h3>
                <Link
                  href={localizeHref(locale, "/literatur")}
                  className="mt-7 inline-flex w-fit items-center gap-3 text-sm font-bold text-brand-ink transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
                >
                  {content.trust.booksCta}
                  <ArrowIcon />
                </Link>
              </div>
              <div className="flex items-end justify-center gap-4 bg-[#f4f8fb] px-7 pt-8 sm:min-w-[19rem] sm:px-8 lg:min-w-[22rem]">
                {siteContent.books.slice(0, 2).map((book, index) => (
                  <a
                    key={book.href}
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={content.trust.bookTitles[index]}
                    className="group/book self-end focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f8fb]"
                  >
                    <Image
                      src={book.cover}
                      alt={content.trust.bookTitles[index]}
                      width={150}
                      height={220}
                      className={`h-auto w-[7.5rem] object-contain shadow-[0_16px_35px_rgba(7,20,48,0.22)] transition duration-300 group-hover/book:-translate-y-2 sm:w-[8.5rem] ${
                        index === 1 ? "sm:w-[8rem]" : ""
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>

            <a
              href={podcastHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-h-[20rem] overflow-hidden rounded-xl border border-white/15 bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#071430]"
            >
              <Image
                src="/podcast/kevin-lucan-background.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover object-center transition duration-700 group-hover:scale-[1.025]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,48,0.98)_0%,rgba(7,20,48,0.86)_44%,rgba(7,20,48,0.12)_78%)]" />
              <span className="relative flex min-h-[20rem] max-w-[68%] flex-col justify-end p-7 sm:p-9 lg:p-10">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-200">
                  {content.trust.podcastEyebrow}
                </span>
                <span className="mt-4 text-2xl leading-[1.1] font-semibold tracking-[-0.045em] text-white sm:text-3xl">
                  {content.trust.podcastTitle}
                </span>
                <span className="mt-4 hidden text-sm leading-7 font-medium text-slate-300 sm:block">
                  {content.trust.podcastText}
                </span>
                <span className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-white">
                  {content.trust.podcastCta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </span>
            </a>
          </div>

          <div className="mt-4 grid gap-6 rounded-xl bg-white px-6 py-7 text-brand-ink sm:px-8 lg:grid-cols-[18rem_1fr_auto] lg:items-center lg:px-10">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-cyan">
                {content.trust.referencesEyebrow}
              </p>
              <p className="mt-2 text-sm leading-6 font-semibold text-slate-600">
                {content.trust.referencesText}
              </p>
            </div>
            <div className="grid grid-cols-2 items-center gap-x-7 gap-y-5 sm:grid-cols-4 xl:grid-cols-8">
              {featuredReferences.map((reference) => (
                <div
                  key={reference.name}
                  className="flex h-11 items-center justify-center"
                >
                  <Image
                    src={reference.src}
                    alt={reference.name}
                    width={118}
                    height={48}
                    className="max-h-8 w-auto max-w-full object-contain grayscale opacity-65"
                  />
                </div>
              ))}
            </div>
            <Link
              href={localizeHref(locale, "/referenzen")}
              className="inline-flex items-center gap-3 text-sm font-bold text-brand-ink transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
            >
              {content.trust.referencesCta}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <IndustryImageList
        items={industries.items}
        referencesHref={localizeHref(locale, "/referenzen")}
        referencesLabel={content.trust.referencesCta}
        title={content.industriesTitle}
      />
    </div>
  );
}
