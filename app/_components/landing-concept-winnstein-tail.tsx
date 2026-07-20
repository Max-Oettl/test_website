import Image from "next/image";
import Link from "next/link";

import { getSiteContent, referenceLogos } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";

type IndustryItem = {
  name: string;
  href: string;
  image: string;
};

type LandingConceptWinnsteinTailProps = {
  industries: {
    items: readonly IndustryItem[];
  };
  locale: Locale;
};

const assetBase = "/concepts/landingpage-ingenics-kacheln";

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

const contentByLocale = {
  de: {
    supportTitle: "Vom technischen Risiko zur belastbaren Entscheidung.",
    supportText:
      "RelTest strukturiert technische Fragestellungen, wählt passende Methoden und macht Ergebnisse für Entwicklung und Freigabe nutzbar.",
    supportCta: "Alle Beratungsleistungen",
    supportNavigation: "Konkrete Unterstützungsfelder",
    supportItems: [
      {
        title: "Zuverlässigkeitsziele definieren",
        description: "Messbare Anforderungen und eindeutige Kriterien schaffen.",
        href: "/leistungen/zuverlaessigkeitsmanagement",
        icon: "icon-target.svg",
      },
      {
        title: "Risiken priorisieren",
        description: "Kritische Funktionen, Ursachen und Ausfallfolgen bewerten.",
        href: "/leistungen/risikomanagement",
        icon: "icon-shield.svg",
      },
      {
        title: "Versuche effizient planen",
        description: "Mit DoE schneller zu aussagekräftigen Ergebnissen kommen.",
        href: "/leistungen/design-of-experiments",
        icon: "icon-seminar.svg",
      },
      {
        title: "Daten belastbar auswerten",
        description: "Lebensdauer, Felddaten und Prognosen sicher einordnen.",
        href: "/leistungen/datenanalyse-prognostik",
        icon: "icon-database.svg",
      },
      {
        title: "Nachweise dokumentieren",
        description: "Prüfumfang und Freigabelogik nachvollziehbar aufbauen.",
        href: "/leistungen/zuverlaessigkeitstechnik",
        icon: "icon-chart.svg",
      },
    ],
    projectsTitle: "Beispielhafte Projektverläufe",
    roleLabel: "RelTest",
    expandLabel: "Verlauf ansehen",
    collapseLabel: "Verlauf schließen",
    resultLabel: "Projektergebnis",
    projectsCta: "Eigenes Projekt einordnen",
    projects: [
      {
        title: "Neue Produktgeneration bis zur Freigabe absichern",
        role: "Methodische Projektleitung",
        image: "/projects/new-product-generation.png",
        imageAlt: "Technische Produktentwicklung vom Entwurf bis zum ausgearbeiteten Bauteil",
        milestones: [
          {
            phase: "Projektstart",
            title: "Ziele und Verantwortung",
            contribution: "Anforderungen, Rollen und Gate-Kriterien klären.",
            icon: "icon-target.svg",
          },
          {
            phase: "Konzept",
            title: "Risiken priorisieren",
            contribution: "Kritische Funktionen und Ausfallfolgen bewerten.",
            icon: "icon-shield.svg",
          },
          {
            phase: "Entwicklung",
            title: "Nachweisstrategie planen",
            contribution: "Prüfplan, DoE und Datenbedarf verbinden.",
            icon: "icon-chart.svg",
          },
          {
            phase: "Erprobung",
            title: "Versuche steuern",
            contribution: "Ergebnisse bewerten und Abweichungen steuern.",
            icon: "icon-seminar.svg",
          },
          {
            phase: "Freigabe",
            title: "Entscheidung absichern",
            contribution: "Nachweise und Rest-Risiken dokumentieren.",
            icon: "icon-handshake.svg",
          },
        ],
        result:
          "Nachvollziehbare Freigabe mit abgestimmten Kriterien und Prüfumfang.",
      },
      {
        title: "Feldausfälle verstehen und Maßnahmen absichern",
        role: "Analyseleitung und Maßnahmen-Tracking",
        image: "/projects/field-failure-fracture.png",
        imageAlt: "Ingenieursteam bei der Analyse von Prüf- und Messdaten am Versuchsstand",
        milestones: [
          {
            phase: "Auftragsklärung",
            title: "Problem abgrenzen",
            contribution: "Ausfallbilder und Einsatzbedingungen strukturieren.",
            icon: "icon-target.svg",
          },
          {
            phase: "Datenbasis",
            title: "Informationen verbinden",
            contribution: "Feld-, Prüf- und Produktdaten vergleichbar machen.",
            icon: "icon-database.svg",
          },
          {
            phase: "Analyse",
            title: "Ursachen bewerten",
            contribution: "Hypothesen mit Statistik und Modellen prüfen.",
            icon: "icon-chart.svg",
          },
          {
            phase: "Absicherung",
            title: "Maßnahmen verifizieren",
            contribution: "Wirksamkeit mit fokussierten Versuchen nachweisen.",
            icon: "icon-shield.svg",
          },
          {
            phase: "Transfer",
            title: "Erkenntnisse verankern",
            contribution: "Monitoring und Lessons Learned im Prozess verankern.",
            icon: "icon-team.svg",
          },
        ],
        result:
          "Priorisierte Ursachen und nachweislich wirksame Maßnahmen.",
      },
    ],
    trustTitle: "Fachliche Tiefe, die sichtbar wird.",
    trustText:
      "Zwei Springer-Fachbücher, langjährige Industrieerfahrung und reale Referenzen machen die fachliche Basis von RelTest nachvollziehbar.",
    metrics: [
      { value: "Seit 2016", label: "Industrieberatung" },
      { value: "2", label: "Springer-Fachbücher" },
      { value: String(referenceLogos.length), label: "Referenzen" },
    ],
    booksTitle: "Wissen, das in der Fachliteratur Bestand hat.",
    booksText:
      "Die beiden Springer-Fachbücher dokumentieren methodische Grundlagen, Prüfstrategien und die praktische Absicherung technischer Produkte.",
    booksCta: "Fachbücher ansehen",
    bookTitles: [
      "Zuverlässigkeitstests für eine effiziente Absicherung",
      "Zuverlässigkeit im Fahrzeug- und Maschinenbau",
    ],
    referencesTitle: "Ausgewählte Unternehmen aus unserer Zusammenarbeit",
    referencesCta: "Alle Referenzen",
    industriesTitle: "Zuverlässigkeit kennt keine Branchengrenzen",
    industryCta: "Branche ansehen",
  },
  en: {
    supportTitle: "From technical risk to a robust decision.",
    supportText:
      "RelTest structures technical questions, selects suitable methods and turns results into a sound basis for development and release.",
    supportCta: "All consulting services",
    supportNavigation: "Specific support areas",
    supportItems: [
      {
        title: "Define reliability targets",
        description: "Establish measurable requirements and clear criteria.",
        href: "/leistungen/zuverlaessigkeitsmanagement",
        icon: "icon-target.svg",
      },
      {
        title: "Prioritise risks",
        description: "Assess critical functions, causes and failure effects.",
        href: "/leistungen/risikomanagement",
        icon: "icon-shield.svg",
      },
      {
        title: "Plan experiments efficiently",
        description: "Use DoE to reach meaningful findings faster.",
        href: "/leistungen/design-of-experiments",
        icon: "icon-seminar.svg",
      },
      {
        title: "Evaluate data robustly",
        description: "Interpret lifetime, field data and predictions reliably.",
        href: "/leistungen/datenanalyse-prognostik",
        icon: "icon-database.svg",
      },
      {
        title: "Document evidence",
        description: "Build a traceable test scope and release logic.",
        href: "/leistungen/zuverlaessigkeitstechnik",
        icon: "icon-chart.svg",
      },
    ],
    projectsTitle: "Example project journeys",
    roleLabel: "RelTest",
    expandLabel: "View journey",
    collapseLabel: "Close journey",
    resultLabel: "Project result",
    projectsCta: "Discuss your own project",
    projects: [
      {
        title: "Safeguard a new product generation through to release",
        role: "Methodological project leadership",
        image: "/projects/new-product-generation.png",
        imageAlt: "Engineering development from an early design to a detailed component",
        milestones: [
          {
            phase: "Project start",
            title: "Targets and ownership",
            contribution: "Clarify requirements, responsibilities and gate criteria.",
            icon: "icon-target.svg",
          },
          {
            phase: "Concept",
            title: "Prioritise risks",
            contribution: "Assess critical functions and failure effects.",
            icon: "icon-shield.svg",
          },
          {
            phase: "Development",
            title: "Plan the evidence",
            contribution: "Connect the test plan, DoE and required data.",
            icon: "icon-chart.svg",
          },
          {
            phase: "Testing",
            title: "Steer experiments",
            contribution: "Evaluate results and manage deviations.",
            icon: "icon-seminar.svg",
          },
          {
            phase: "Release",
            title: "Support the decision",
            contribution: "Document evidence and residual risks.",
            icon: "icon-handshake.svg",
          },
        ],
        result:
          "A traceable release with aligned criteria and test scope.",
      },
      {
        title: "Understand field failures and validate corrective actions",
        role: "Analysis leadership and action tracking",
        image: "/projects/field-failure-fracture.png",
        imageAlt: "Engineering team reviewing test and measurement data at a test bench",
        milestones: [
          {
            phase: "Scoping",
            title: "Frame the problem",
            contribution: "Structure failure patterns and operating conditions.",
            icon: "icon-target.svg",
          },
          {
            phase: "Data basis",
            title: "Connect information",
            contribution: "Align field, test and product data for comparison.",
            icon: "icon-database.svg",
          },
          {
            phase: "Analysis",
            title: "Evaluate causes",
            contribution: "Test hypotheses using statistics and models.",
            icon: "icon-chart.svg",
          },
          {
            phase: "Validation",
            title: "Verify measures",
            contribution: "Demonstrate effectiveness with focused tests.",
            icon: "icon-shield.svg",
          },
          {
            phase: "Transfer",
            title: "Embed the findings",
            contribution: "Embed monitoring and lessons learned in the process.",
            icon: "icon-team.svg",
          },
        ],
        result:
          "Prioritised causes and demonstrably effective measures.",
      },
    ],
    trustTitle: "Technical depth made visible.",
    trustText:
      "Two Springer engineering books, long-standing industry experience and real references make RelTest's technical foundation transparent.",
    metrics: [
      { value: "Since 2016", label: "industrial consulting" },
      { value: "2", label: "Springer engineering books" },
      { value: String(referenceLogos.length), label: "references" },
    ],
    booksTitle: "Expertise established in engineering literature.",
    booksText:
      "The two Springer engineering books document methodological foundations, test strategies and the practical validation of technical products.",
    booksCta: "View engineering books",
    bookTitles: [
      "Reliability testing for efficient validation",
      "Reliability in automotive and mechanical engineering",
    ],
    referencesTitle: "Selected companies we have worked with",
    referencesCta: "All references",
    industriesTitle: "Reliability knows no industry boundaries",
    industryCta: "Explore industry",
  },
} as const;

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path d="M4 12h14" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path
        d="m14 7 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function LandingConceptWinnsteinTail({
  industries,
  locale,
}: LandingConceptWinnsteinTailProps) {
  const content = contentByLocale[locale];
  const siteContent = getSiteContent(locale);

  return (
    <div className="winnstein-page-tail bg-white">
      <section className="border-b border-line-soft bg-white">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid overflow-hidden border border-line-soft lg:grid-cols-[minmax(20rem,0.72fr)_minmax(0,1.28fr)]">
            <div className="flex flex-col justify-between bg-[#edf5f8] p-7 sm:p-10 lg:p-12 xl:p-14">
              <div>
                <span aria-hidden="true" className="block h-1 w-20 bg-brand-cyan" />
                <h2 className="mt-8 max-w-xl text-[clamp(2.25rem,3vw,3.65rem)] leading-[1.02] font-semibold tracking-[-0.06em] text-brand-ink">
                  {content.supportTitle}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 font-medium text-slate-600">
                  {content.supportText}
                </p>
              </div>
              <Link
                href={localizeHref(locale, "/leistungen")}
                className="group mt-10 inline-flex min-h-12 w-fit items-center gap-4 border-b-2 border-brand-cyan text-sm font-bold text-brand-ink transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#edf5f8]"
              >
                {content.supportCta}
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            <nav aria-label={content.supportNavigation} className="bg-white">
              {content.supportItems.map((item) => (
                <Link
                  key={item.href}
                  href={localizeHref(locale, item.href)}
                  className="group grid min-h-28 grid-cols-[3.5rem_minmax(0,1fr)_2rem] items-center gap-5 border-b border-line-soft px-5 py-5 transition-colors last:border-b-0 hover:bg-[#f3fbfe] focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:grid-cols-[4rem_minmax(0,1fr)_2.5rem] sm:gap-7 sm:px-8 lg:min-h-32 lg:border-l"
                >
                  <span className="grid size-14 place-items-center bg-cyan-50 ring-1 ring-cyan-100 transition-colors group-hover:bg-white sm:size-16">
                    <Image
                      src={`${assetBase}/${item.icon}`}
                      alt=""
                      aria-hidden="true"
                      width={44}
                      height={44}
                      className="h-10 w-10"
                    />
                  </span>
                  <span className="min-w-0 sm:grid sm:grid-cols-[minmax(12rem,0.7fr)_minmax(14rem,1fr)] sm:items-center sm:gap-8">
                    <span className="block text-lg leading-tight font-semibold tracking-[-0.035em] text-brand-ink sm:text-xl">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 font-medium text-slate-500 sm:mt-0">
                      {item.description}
                    </span>
                  </span>
                  <span className="text-brand-cyan transition-transform group-hover:translate-x-1">
                    <ArrowIcon className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-[#f7fafc] text-brand-ink">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <h2 className="max-w-3xl text-[clamp(2.1rem,2.8vw,3.35rem)] leading-[1.04] font-semibold tracking-[-0.058em] text-brand-ink">
            {content.projectsTitle}
          </h2>

          <div className="mt-12 space-y-6">
            {content.projects.map((project) => (
              <details
                key={project.title}
                name="winnstein-projects"
                className="group overflow-hidden border border-line-soft bg-white shadow-[0_18px_55px_rgba(18,42,64,0.055)]"
              >
                <summary className="grid cursor-pointer list-none transition-colors hover:bg-[#fbfdfe] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.32fr)] [&::-webkit-details-marker]:hidden">
                  <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 lg:px-10 lg:py-9">
                    <h3 className="max-w-4xl text-2xl leading-[1.08] font-semibold tracking-[-0.045em] text-brand-ink sm:text-[2rem]">
                      {project.title}
                    </h3>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      <span className="flex w-fit flex-wrap items-center gap-x-3 gap-y-1 bg-[#edf5f8] px-4 py-2.5 sm:px-5">
                        <span className="text-xs font-bold tracking-[0.12em] text-brand-cyan uppercase">
                          {content.roleLabel}:
                        </span>
                        <span className="text-sm font-semibold text-brand-ink">
                          {project.role}
                        </span>
                      </span>

                      <span className="inline-flex items-center gap-3 text-sm font-bold text-brand-blue">
                        <span className="group-open:hidden">{content.expandLabel}</span>
                        <span className="hidden group-open:inline">{content.collapseLabel}</span>
                        <span className="relative grid size-9 place-items-center rounded-full bg-brand-ink text-white shadow-[0_7px_18px_rgba(7,20,48,0.16)]">
                          <span className="absolute h-0.5 w-3.5 rounded-full bg-brand-cyan" />
                          <span className="absolute h-3.5 w-0.5 rounded-full bg-brand-cyan transition-transform duration-200 group-open:scale-y-0" />
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="relative min-h-40 overflow-hidden border-t border-line-soft bg-[#edf5f8] lg:min-h-full lg:border-t-0 lg:border-l">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-[1.025]"
                      sizes="(min-width: 1024px) 24rem, 100vw"
                    />
                    <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(237,245,248,0.88)_0%,rgba(237,245,248,0.18)_44%,rgba(7,20,48,0.12)_100%)]" />
                  </div>
                </summary>

                <div className="overflow-x-auto px-6 pt-8 pb-8 sm:px-8 lg:px-10 lg:pt-10">
                  <ol className="relative grid min-w-[68rem] grid-cols-5 gap-0 before:absolute before:top-7 before:right-[10%] before:left-[10%] before:h-px before:bg-cyan-200 before:content-['']">
                    {project.milestones.map((milestone, milestoneIndex) => (
                      <li
                        key={`${project.title}-${milestone.phase}`}
                        className="relative px-4 first:pl-0 last:pr-0"
                      >
                        <span className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border border-cyan-100 bg-[#f2fbfe] shadow-[0_8px_22px_rgba(18,85,112,0.12)]">
                          <Image
                            src={`${assetBase}/${milestone.icon}`}
                            alt=""
                            aria-hidden="true"
                            width={40}
                            height={40}
                            className="h-9 w-9"
                          />
                        </span>
                        <p className="mt-4 text-center text-xs font-bold tracking-[0.12em] text-brand-cyan uppercase">
                          {milestone.phase}
                        </p>
                        <h4 className="mt-2 text-center text-lg leading-tight font-semibold tracking-[-0.03em] text-brand-ink">
                          {milestone.title}
                        </h4>
                        <p className="mx-auto mt-3 max-w-[13.5rem] text-center text-sm leading-6 font-medium text-slate-600">
                          {milestone.contribution}
                        </p>
                        <span className="sr-only">
                          {milestoneIndex + 1} / {project.milestones.length}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid border-t border-line-soft bg-[#fbfdfe] sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
                  <p className="bg-brand-ink px-6 py-4 text-sm font-bold text-white sm:self-stretch sm:px-8 sm:py-5">
                    {content.resultLabel}
                  </p>
                  <p className="px-6 py-4 text-sm leading-7 font-semibold text-brand-ink sm:px-8 sm:py-5">
                    {project.result}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-9 flex justify-end">
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="group inline-flex min-h-12 items-center gap-4 bg-brand-ink px-7 text-sm font-bold text-white transition-colors hover:bg-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7fafc]"
            >
              {content.projectsCta}
              <span className="text-brand-cyan transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-ink text-white">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1.1fr)] lg:items-end lg:gap-16">
            <div>
              <span aria-hidden="true" className="block h-1 w-20 bg-brand-cyan" />
              <h2 className="mt-8 max-w-3xl text-[clamp(2.25rem,3vw,3.65rem)] leading-[1.02] font-semibold tracking-[-0.06em] text-white">
                {content.trustTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 font-medium text-slate-300">
                {content.trustText}
              </p>
            </div>

            <dl className="grid grid-cols-3 border-t border-l border-white/15 bg-white/[0.035]">
              {content.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex min-h-32 flex-col justify-center border-r border-b border-white/15 px-4 py-6 sm:min-h-40 sm:px-7"
                >
                  <dt className="mt-3 text-xs leading-5 font-semibold text-slate-400 sm:text-sm">
                    {metric.label}
                  </dt>
                  <dd className="order-first text-2xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 grid border border-white/15 bg-white text-brand-ink lg:grid-cols-[minmax(20rem,0.62fr)_minmax(0,1.38fr)]">
            <div className="flex flex-col justify-center border-b border-line-soft p-7 sm:p-9 lg:border-r lg:border-b-0 lg:p-10">
              <h3 className="max-w-xl text-3xl leading-[1.06] font-semibold tracking-[-0.052em] text-brand-ink sm:text-[2.25rem]">
                {content.booksTitle}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 font-medium text-slate-600">
                {content.booksText}
              </p>
              <Link
                href={localizeHref(locale, "/literatur")}
                className="group mt-8 inline-flex w-fit items-center gap-4 border-b-2 border-brand-cyan text-sm font-bold text-brand-ink transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
              >
                {content.booksCta}
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            <div className="grid bg-[#edf5f8] sm:grid-cols-2">
              {siteContent.books.slice(0, 2).map((book, index) => (
                <a
                  key={book.href}
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/book grid min-h-[23rem] grid-rows-[minmax(0,1fr)_auto] border-b border-line-soft transition-colors hover:bg-[#e5f1f5] focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:border-r sm:border-b-0 sm:last:border-r-0"
                >
                  <span className="flex items-end justify-center px-5 pt-6 sm:px-7 sm:pt-7">
                    <Image
                      src={book.cover}
                      alt={content.bookTitles[index]}
                      width={210}
                      height={310}
                      className="h-[16rem] w-auto max-w-full object-contain shadow-[0_18px_36px_rgba(7,20,48,0.18)] transition-transform duration-300 group-hover/book:-translate-y-1.5"
                    />
                  </span>
                  <span className="flex min-h-20 items-center justify-between gap-4 bg-white px-5 py-3 sm:px-6">
                    <span className="text-sm leading-5 font-semibold text-brand-ink">
                      {content.bookTitles[index]}
                    </span>
                    <span className="shrink-0 text-brand-cyan transition-transform group-hover/book:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-x border-b border-white/15 bg-white text-brand-ink">
            <div className="flex flex-col gap-5 border-b border-line-soft px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <h3 className="text-xl leading-tight font-semibold tracking-[-0.035em] text-brand-ink sm:text-2xl">
                {content.referencesTitle}
              </h3>
              <Link
                href={localizeHref(locale, "/referenzen")}
                className="group inline-flex w-fit items-center gap-4 border-b-2 border-brand-cyan text-sm font-bold text-brand-ink transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
              >
                {content.referencesCta}
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-7 px-6 py-8 sm:grid-cols-4 sm:px-8 lg:grid-cols-8 lg:px-10 lg:py-10">
              {featuredReferences.map((reference) => (
                <div key={reference.name} className="flex h-12 items-center justify-center">
                  <Image
                    src={reference.src}
                    alt={reference.name}
                    width={128}
                    height={52}
                    className="max-h-9 w-auto max-w-full object-contain grayscale opacity-65"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-white">
        <div className="mx-auto max-w-[120rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(24rem,0.55fr)] lg:items-end">
            <h2 className="max-w-4xl text-[clamp(2.1rem,2.8vw,3.35rem)] leading-[1.04] font-semibold tracking-[-0.058em] text-brand-ink">
              {content.industriesTitle}
            </h2>
            <Link
              href={localizeHref(locale, "/referenzen")}
              className="group inline-flex w-fit items-center gap-4 border-b-2 border-brand-cyan text-sm font-bold text-brand-ink transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 lg:justify-self-end"
            >
              {content.referencesCta}
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>

          <div className="mt-12 grid border-t border-l border-line-soft lg:grid-cols-2">
            {industries.items.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group relative isolate flex min-h-32 items-center justify-between gap-7 overflow-hidden border-r border-b border-line-soft px-6 py-7 transition-colors hover:bg-[#f3fbfe] focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:px-9"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  aria-hidden="true"
                  className="-z-20 object-cover object-center opacity-35 saturate-[0.78] transition duration-500 group-hover:scale-[1.025] group-hover:opacity-48"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <span className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.96)_48%,rgba(255,255,255,0.64)_72%,rgba(255,255,255,0.16)_100%)]" />
                <span className="text-xl leading-tight font-semibold tracking-[-0.035em] text-brand-ink sm:text-2xl">
                  {industry.name}
                </span>
                <span className="flex shrink-0 items-center gap-3 text-sm font-bold text-brand-cyan">
                  <span className="hidden sm:inline">{content.industryCta}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon className="h-5 w-5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
