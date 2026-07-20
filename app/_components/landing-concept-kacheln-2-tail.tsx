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

type LandingConceptKacheln2TailProps = {
  industries: {
    items: readonly IndustryItem[];
  };
  locale: Locale;
};

const assetBase = "/concepts/landingpage-ingenics-kacheln";
const podcastHref =
  "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan";

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
    supportTitle: "Wobei RelTest Sie konkret unterstützt",
    supportNavigation: "Technische Unterstützungsfelder",
    supportItems: [
      {
        title: "Ziele definieren",
        description: "Messbare Zuverlässigkeitsziele und klare Kriterien.",
        href: "/leistungen/zuverlaessigkeitsmanagement",
        icon: "icon-target.svg",
      },
      {
        title: "Risiken priorisieren",
        description:
          "Kritische Funktionen und Ausfallfolgen zuerst bearbeiten.",
        href: "/leistungen/risikomanagement",
        icon: "icon-shield.svg",
      },
      {
        title: "Versuche planen",
        description: "Mit DoE schneller zu belastbaren Erkenntnissen.",
        href: "/leistungen/design-of-experiments",
        icon: "icon-seminar.svg",
      },
      {
        title: "Daten bewerten",
        description: "Lebensdauer, Felddaten und Prognosen einordnen.",
        href: "/leistungen/datenanalyse-prognostik",
        icon: "icon-database.svg",
      },
      {
        title: "Nachweise führen",
        description:
          "Prüfumfang und Freigabelogik nachvollziehbar aufbauen.",
        href: "/leistungen/zuverlaessigkeitstechnik",
        icon: "icon-chart.svg",
      },
    ],
    projectsTitle: "Projektbeispiele",
    projectsNote:
      "Musterbeispiele – reale Projekte ergänzen wir nach Freigabe.",
    projectsCta: "Eigenes Projekt einordnen",
    projects: [
      {
        title: "Neue Produktgeneration absichern",
        icon: "icon-target.svg",
        summary:
          "RelTest übersetzt Anforderungen und Risiken in einen abgestimmten Nachweisplan.",
        result:
          "Das Ergebnis sind klare Prüfumfänge, Kriterien und eine nachvollziehbare Freigabelogik.",
      },
      {
        title: "Feldausfälle systematisch bewerten",
        icon: "icon-database.svg",
        summary:
          "Felddaten und Ausfallbilder werden zusammengeführt und technisch bewertet.",
        result:
          "So entstehen priorisierte Ursachen und ein belastbarer Handlungsplan.",
      },
      {
        title: "Versuche effizient planen",
        icon: "icon-chart.svg",
        summary:
          "Ein statistisches Versuchsdesign bündelt die wichtigsten Einflussgrößen.",
        result:
          "Das schafft mehr Erkenntnis mit weniger Prüflingen und Versuchen.",
      },
    ],
    trustTitle: "Fachlich belegt. Industriell erprobt.",
    trustDescription:
      "Publikationen, langjährige Beratungserfahrung und reale Unternehmensreferenzen machen die fachliche Substanz sichtbar.",
    metrics: [
      { value: "Seit 2016", label: "Industrieberatung" },
      { value: "2", label: "Springer-Fachbücher" },
      { value: String(referenceLogos.length), label: "Referenzen" },
    ],
    booksTitle: "Fachbücher bei Springer Vieweg",
    bookTitles: [
      "Zuverlässigkeitstests",
      "Zuverlässigkeit im Fahrzeug- und Maschinenbau",
    ],
    booksCta: "Fachbücher ansehen",
    podcastTitle: "Ingenieurshelden-Podcast mit Kevin Lucan",
    podcastCta: "Podcast anhören",
    referencesTitle: "Ausgewählte Referenzen",
    referencesCta: "Alle Referenzen",
    industriesTitle: "Zuverlässigkeit kennt keine Branchengrenzen",
  },
  en: {
    supportTitle: "Where RelTest provides concrete support",
    supportNavigation: "Technical support areas",
    supportItems: [
      {
        title: "Define targets",
        description: "Set measurable reliability targets and clear criteria.",
        href: "/leistungen/zuverlaessigkeitsmanagement",
        icon: "icon-target.svg",
      },
      {
        title: "Prioritise risks",
        description: "Address critical functions and failure consequences first.",
        href: "/leistungen/risikomanagement",
        icon: "icon-shield.svg",
      },
      {
        title: "Plan experiments",
        description: "Use DoE to reach robust findings faster.",
        href: "/leistungen/design-of-experiments",
        icon: "icon-seminar.svg",
      },
      {
        title: "Evaluate data",
        description: "Interpret lifetime, field data and predictions.",
        href: "/leistungen/datenanalyse-prognostik",
        icon: "icon-database.svg",
      },
      {
        title: "Demonstrate reliability",
        description: "Build a traceable test scope and release logic.",
        href: "/leistungen/zuverlaessigkeitstechnik",
        icon: "icon-chart.svg",
      },
    ],
    projectsTitle: "Project examples",
    projectsNote:
      "Sample cases – real projects will follow once approved.",
    projectsCta: "Discuss your own project",
    projects: [
      {
        title: "Secure a new product generation",
        icon: "icon-target.svg",
        summary:
          "RelTest turns requirements and risks into an aligned demonstration plan.",
        result:
          "The result is a clear test scope, criteria and traceable release logic.",
      },
      {
        title: "Assess field failures systematically",
        icon: "icon-database.svg",
        summary:
          "Field data and failure patterns are consolidated and assessed technically.",
        result:
          "This creates prioritised causes and a robust plan of action.",
      },
      {
        title: "Plan experiments efficiently",
        icon: "icon-chart.svg",
        summary:
          "A statistical design focuses the experiment on the key influencing factors.",
        result:
          "It delivers more insight with fewer test units and experiments.",
      },
    ],
    trustTitle: "Published expertise. Proven in industry.",
    trustDescription:
      "Publications, long-term consulting experience and real company references make the technical substance visible.",
    metrics: [
      { value: "Since 2016", label: "industrial consulting" },
      { value: "2", label: "Springer engineering books" },
      { value: String(referenceLogos.length), label: "references" },
    ],
    booksTitle: "Engineering books from Springer Vieweg",
    bookTitles: [
      "Reliability testing",
      "Reliability in automotive and mechanical engineering",
    ],
    booksCta: "View engineering books",
    podcastTitle: "Ingenieurshelden podcast with Kevin Lucan",
    podcastCta: "Listen to the podcast",
    referencesTitle: "Selected references",
    referencesCta: "All references",
    industriesTitle: "Reliability knows no industry boundaries",
  },
} as const;

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
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

export function LandingConceptKacheln2Tail({
  industries,
  locale,
}: LandingConceptKacheln2TailProps) {
  const content = conceptContent[locale];
  const siteContent = getSiteContent(locale);

  return (
    <div className="kacheln2-page-tail bg-white">
      <section className="border-b border-line-soft bg-white">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 xl:px-16">
          <h2 className="kacheln2-support-title max-w-4xl text-[clamp(2.35rem,3.4vw,4rem)] leading-[1] font-semibold tracking-[-0.065em] text-brand-ink">
            {content.supportTitle}
          </h2>

          <nav
            aria-label={content.supportNavigation}
            className="mt-10 grid border-t border-l border-line-soft sm:grid-cols-2 lg:grid-cols-5"
          >
            {content.supportItems.map((item) => (
              <Link
                key={item.href}
                href={localizeHref(locale, item.href)}
                className="kacheln2-support-item group flex min-h-52 flex-col border-r border-b border-line-soft px-5 py-6 transition hover:z-10 hover:border-cyan-200 hover:bg-[#f8fcfe] focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:min-h-56 sm:px-6"
              >
                <Image
                  src={`${assetBase}/${item.icon}`}
                  alt=""
                  aria-hidden="true"
                  width={46}
                  height={46}
                  className="h-11 w-11"
                />
                <span className="mt-7 block max-w-44 text-xl leading-[1.08] font-semibold tracking-[-0.04em] text-brand-ink">
                  {item.title}
                </span>
                <span className="mt-3 block text-sm leading-6 font-medium text-slate-600">
                  {item.description}
                </span>
                <span className="mt-auto flex justify-end pt-5 text-brand-cyan transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="border-b border-line-soft bg-[#f4f8fb]">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="kacheln2-projects-title text-[clamp(2.35rem,3.4vw,4rem)] leading-none font-semibold tracking-[-0.065em] text-brand-ink">
              {content.projectsTitle}
            </h2>
            <p className="max-w-lg text-sm leading-6 font-medium text-slate-500 lg:text-right">
              {content.projectsNote}
            </p>
          </div>

          <div className="mt-10 grid border-t border-l border-slate-300/80 lg:grid-cols-3">
            {content.projects.map((project) => (
              <article
                key={project.title}
                className="kacheln2-project flex min-h-80 flex-col border-r border-b border-slate-300/80 bg-white/55 p-7 sm:min-h-88 sm:p-8"
              >
                <Image
                  src={`${assetBase}/${project.icon}`}
                  alt=""
                  aria-hidden="true"
                  width={52}
                  height={52}
                  className="h-12 w-12"
                />
                <h3 className="mt-8 max-w-sm text-[1.75rem] leading-[1.05] font-semibold tracking-[-0.05em] text-brand-ink sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-5 text-sm leading-7 font-medium text-slate-600">
                  {project.summary}
                </p>
                <p className="mt-auto border-t border-slate-300/80 pt-5 text-sm leading-6 font-semibold text-brand-ink">
                  {project.result}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded-[0.3rem] bg-brand-ink px-6 text-sm font-bold text-white transition hover:bg-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f8fb]"
            >
              {content.projectsCta}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="kacheln2-trust overflow-hidden bg-[#071430] text-white">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 xl:px-16">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(34rem,1.1fr)] lg:items-end lg:gap-16">
            <div>
              <h2 className="max-w-4xl text-[clamp(2.5rem,3.7vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.068em] text-white">
                {content.trustTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 font-medium text-slate-300 sm:text-lg sm:leading-8">
                {content.trustDescription}
              </p>
            </div>

            <dl className="grid grid-cols-3 border-t border-l border-white/16">
              {content.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex min-h-28 flex-col border-r border-b border-white/16 px-3 py-5 sm:min-h-32 sm:px-5 sm:py-6"
                >
                  <dt className="mt-2 text-[0.65rem] leading-4 font-semibold text-slate-400 sm:text-xs sm:leading-5">
                    {metric.label}
                  </dt>
                  <dd className="order-first text-xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)]">
            <div className="grid min-h-[19rem] overflow-hidden rounded-[0.35rem] bg-white text-brand-ink sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <h3 className="max-w-lg text-3xl leading-[1.05] font-semibold tracking-[-0.052em]">
                  {content.booksTitle}
                </h3>
                <Link
                  href={localizeHref(locale, "/literatur")}
                  className="mt-7 inline-flex w-fit items-center gap-3 text-sm font-bold transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
                >
                  {content.booksCta}
                  <ArrowIcon />
                </Link>
              </div>
              <div className="flex items-end justify-center gap-4 bg-[#f4f8fb] px-6 pt-8 sm:min-w-[19rem] sm:px-8 lg:min-w-[22rem]">
                {siteContent.books.slice(0, 2).map((book, index) => (
                  <a
                    key={book.href}
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={content.bookTitles[index]}
                    className="group/book self-end focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f8fb]"
                  >
                    <Image
                      src={book.cover}
                      alt={content.bookTitles[index]}
                      width={150}
                      height={220}
                      className="h-auto w-[7.5rem] object-contain shadow-[0_16px_35px_rgba(7,20,48,0.22)] transition duration-300 group-hover/book:-translate-y-2 sm:w-[8.5rem]"
                    />
                  </a>
                ))}
              </div>
            </div>

            <a
              href={podcastHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-h-[19rem] overflow-hidden rounded-[0.35rem] border border-white/16 bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#071430]"
            >
              <Image
                src="/podcast/kevin-lucan-background.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover object-center transition duration-700 group-hover:scale-[1.025]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,48,0.96)_0%,rgba(7,20,48,0.78)_44%,rgba(7,20,48,0.08)_82%)]" />
              <span className="relative flex min-h-[19rem] max-w-[72%] flex-col justify-end p-7 sm:p-9">
                <span className="text-2xl leading-[1.08] font-semibold tracking-[-0.045em] text-white sm:text-3xl">
                  {content.podcastTitle}
                </span>
                <span className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-white">
                  {content.podcastCta}
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </span>
            </a>
          </div>

          <div className="mt-4 grid gap-6 rounded-[0.35rem] bg-white px-6 py-7 text-brand-ink sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
            <h3 className="sr-only">{content.referencesTitle}</h3>
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
              className="inline-flex items-center gap-3 text-sm font-bold transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
            >
              {content.referencesCta}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <IndustryImageList
        items={industries.items}
        referencesHref={localizeHref(locale, "/referenzen")}
        referencesLabel={content.referencesCta}
        title={content.industriesTitle}
      />
    </div>
  );
}
