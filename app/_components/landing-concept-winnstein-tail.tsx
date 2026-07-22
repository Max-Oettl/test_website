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
const milestoneIconSprite = `${assetBase}/project-milestone-icons-v1.png`;
const milestoneIconOffsets = [
  [
    [7, 8],
    [47, 8],
    [88, 9],
    [131, 10],
    [173, 9],
  ],
  [
    [6, 56],
    [46, 51],
    [86, 50],
    [127, 49],
    [171, 55],
  ],
  [
    [4, 91],
    [46, 90],
    [87, 90],
    [128, 91],
    [170, 91],
  ],
] as const;
const milestoneIconCells = [
  [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
  [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]],
  [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]],
  [[2, 0], [1, 0], [1, 3], [0, 3], [0, 4]],
  [[1, 0], [0, 1], [2, 2], [1, 2], [0, 4]],
] as const;

function getMilestoneIconOffset(projectIndex: number, milestoneIndex: number) {
  const [row, column] = milestoneIconCells[projectIndex]?.[milestoneIndex] ?? [0, 0];

  return milestoneIconOffsets[row]?.[column] ?? [0, 0];
}

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
        title: "Zuverlässigkeitsprozess maßgeschneidert entwickeln und integrieren",
        role: "Prozessentwicklung und Implementierungsbegleitung",
        image: "/projects/reliability-process-integration-natural.png",
        imageAlt: "Engineering-Team bei der Entwicklung eines Zuverlässigkeitsprozesses",
        milestones: [
          {
            title: "Status quo erfassen",
            contribution: "Prozessreife, Rollen und bestehende Methoden transparent machen.",
            icon: "icon-current-state.svg",
          },
          {
            title: "Schnittstellen priorisieren",
            contribution: "Lücken, Optimierungspotenziale und Übergaben identifizieren.",
            icon: "icon-interfaces.svg",
          },
          {
            title: "Zielprozess prüfen",
            contribution: "Konzept ausarbeiten und im Dry Run auf Praxistauglichkeit testen.",
            icon: "icon-process-design.svg",
          },
          {
            title: "Konzept optimieren",
            contribution: "Im Pilotprojekt anwenden, bewerten und gezielt nachschärfen.",
            icon: "icon-pilot.svg",
          },
          {
            title: "Prozess freigeben",
            contribution: "Verantwortlichkeiten verankern und den Prozess verbindlich einführen.",
            icon: "icon-process-approval.svg",
          },
        ],
        result:
          "Ein abgestimmter Zuverlässigkeitsprozess, der im Entwicklungsalltag verbindlich funktioniert.",
      },
      {
        title: "Risikobasierte Absicherungsstrategie entwickeln",
        role: "Risikoanalyse und strategische Absicherungsplanung",
        image: "/projects/risk-based-assurance-teams-meeting.png",
        imageAlt: "Ingenieursteam in einer hybriden Besprechung mit geteilter Risikomatrix",
        milestones: [
          {
            title: "Risiken identifizieren",
            contribution: "Kritische Funktionen, Ausfallarten und Ursachen systematisch erfassen.",
            icon: "icon-risk-identification.svg",
          },
          {
            title: "Risiken priorisieren",
            contribution: "Eintritt, Auswirkung und Nachweisbedarf nachvollziehbar bewerten.",
            icon: "icon-risk-matrix.svg",
          },
          {
            title: "Maßnahmen definieren",
            contribution: "Reviews, Analysen und präventive Methoden zielgerichtet festlegen.",
            icon: "icon-measures.svg",
          },
          {
            title: "Nachweise planen",
            contribution: "Prüfumfang, Stichproben und Zuverlässigkeitsziele dimensionieren.",
            icon: "icon-evidence-plan.svg",
          },
          {
            title: "Kosten und Termine verbinden",
            contribution: "Absicherungsplan budgetieren, terminieren und gemeinsam freigeben.",
            icon: "icon-budget-schedule.svg",
          },
        ],
        result:
          "Eine priorisierte, budgetierte und terminierte Absicherungsstrategie für belastbare Freigaben.",
      },
      {
        title: "Design of Experiments (DoE) effizient einsetzen und technische Systeme optimieren",
        role: "Versuchsplanung, statistische Analyse und Modellbildung",
        image: "/projects/design-of-experiments-lab-team.png",
        imageAlt: "Zwei Ingenieurinnen bei einem Design-of-Experiments-Versuch im Prüflabor",
        milestones: [
          {
            title: "Zielgröße festlegen",
            contribution: "Fragestellung, Zielsetzung und Bewertungskriterien präzisieren.",
            icon: "icon-target.svg",
          },
          {
            title: "Faktoren und Stufen",
            contribution: "Einflussgrößen, Faktorstufen und Randbedingungen festlegen.",
            icon: "icon-factors.svg",
          },
          {
            title: "Signifikante Faktoren",
            contribution: "Effizienten Versuchsplan durchführen und relevante Einflüsse erkennen.",
            icon: "icon-significant-factors.svg",
          },
          {
            title: "Zusammenhänge quantifizieren",
            contribution: "Haupt- und Wechselwirkungen statistisch beschreiben.",
            icon: "icon-model.svg",
          },
          {
            title: "Optimale Faktorwerte",
            contribution: "Robustes Optimum ableiten und im Bestätigungsversuch absichern.",
            icon: "icon-optimum.svg",
          },
        ],
        result:
          "Ein belastbares Prozessfenster und optimale Faktorwerte bei reduziertem Versuchsaufwand.",
      },
      {
        title: "Neue Produktgeneration bis zur Freigabe absichern",
        role: "Methodische Projektleitung",
        image: "/projects/new-product-generation.png",
        imageAlt: "Bauteile einer neuen Produktgeneration zwischen Entwicklung und Erprobung",
        milestones: [
          {
            title: "Ziele und Verantwortung klären",
            contribution: "Anforderungen, Rollen und Gate-Kriterien gemeinsam festlegen.",
            icon: "icon-target.svg",
          },
          {
            title: "Risiken priorisieren",
            contribution: "Kritische Funktionen und mögliche Ausfallfolgen bewerten.",
            icon: "icon-shield.svg",
          },
          {
            title: "Nachweisstrategie planen",
            contribution: "Prüfplan, DoE und erforderliche Daten sinnvoll verbinden.",
            icon: "icon-chart.svg",
          },
          {
            title: "Versuche steuern",
            contribution: "Ergebnisse einordnen und Abweichungen gezielt bearbeiten.",
            icon: "icon-seminar.svg",
          },
          {
            title: "Freigabe absichern",
            contribution: "Nachweise, Entscheidungen und verbleibende Risiken dokumentieren.",
            icon: "icon-handshake.svg",
          },
        ],
        result:
          "Eine nachvollziehbare Freigabe mit abgestimmten Kriterien und passendem Prüfumfang.",
      },
      {
        title: "Feldausfälle verstehen und wirksame Maßnahmen absichern",
        role: "Analyseleitung und Maßnahmen-Tracking",
        image: "/projects/field-failure-fracture.png",
        imageAlt: "Gebrochene Antriebswelle bei der technischen Feldausfallanalyse",
        milestones: [
          {
            title: "Problem abgrenzen",
            contribution: "Ausfallbilder und reale Einsatzbedingungen strukturiert erfassen.",
            icon: "icon-target.svg",
          },
          {
            title: "Informationen verbinden",
            contribution: "Feld-, Prüf- und Produktdaten vergleichbar zusammenführen.",
            icon: "icon-database.svg",
          },
          {
            title: "Ursachen bewerten",
            contribution: "Hypothesen mit Statistik, Modellen und Befunden überprüfen.",
            icon: "icon-chart.svg",
          },
          {
            title: "Maßnahmen verifizieren",
            contribution: "Die Wirksamkeit mit fokussierten Versuchen nachweisen.",
            icon: "icon-shield.svg",
          },
          {
            title: "Erkenntnisse verankern",
            contribution: "Monitoring und Lessons Learned dauerhaft in den Prozess überführen.",
            icon: "icon-team.svg",
          },
        ],
        result:
          "Priorisierte Ursachen und nachweislich wirksame Maßnahmen gegen wiederkehrende Ausfälle.",
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
        title: "Develop and integrate a tailored reliability process",
        role: "Process development and implementation support",
        image: "/projects/reliability-process-integration-natural.png",
        imageAlt: "Engineering team developing an integrated reliability process",
        milestones: [
          {
            title: "Assess the status quo",
            contribution: "Make process maturity, roles and existing methods transparent.",
            icon: "icon-current-state.svg",
          },
          {
            title: "Prioritise interfaces",
            contribution: "Identify gaps, improvement potential and handovers.",
            icon: "icon-interfaces.svg",
          },
          {
            title: "Validate the target process",
            contribution: "Develop the concept and test practicality in a dry run.",
            icon: "icon-process-design.svg",
          },
          {
            title: "Refine the concept",
            contribution: "Apply it in a pilot project, evaluate and improve it.",
            icon: "icon-pilot.svg",
          },
          {
            title: "Approve the process",
            contribution: "Embed responsibilities and introduce the process as binding practice.",
            icon: "icon-process-approval.svg",
          },
        ],
        result:
          "An aligned reliability process that works consistently in day-to-day development.",
      },
      {
        title: "Develop a risk-based assurance strategy",
        role: "Risk analysis and strategic assurance planning",
        image: "/projects/risk-based-assurance-teams-meeting.png",
        imageAlt: "Engineering team in a hybrid meeting reviewing a shared risk matrix",
        milestones: [
          {
            title: "Identify risks",
            contribution: "Capture critical functions, failure modes and causes systematically.",
            icon: "icon-risk-identification.svg",
          },
          {
            title: "Prioritise risks",
            contribution: "Evaluate likelihood, impact and evidence needs transparently.",
            icon: "icon-risk-matrix.svg",
          },
          {
            title: "Define measures",
            contribution: "Select reviews, analyses and preventive methods.",
            icon: "icon-measures.svg",
          },
          {
            title: "Plan evidence",
            contribution: "Dimension test scope, sample sizes and reliability targets.",
            icon: "icon-evidence-plan.svg",
          },
          {
            title: "Align cost and schedule",
            contribution: "Budget, schedule and jointly approve the assurance plan.",
            icon: "icon-budget-schedule.svg",
          },
        ],
        result:
          "A prioritised, budgeted and scheduled assurance strategy for robust release decisions.",
      },
      {
        title: "Use Design of Experiments (DoE) efficiently to optimise technical systems",
        role: "Experimental design, statistical analysis and modelling",
        image: "/projects/design-of-experiments-lab-team.png",
        imageAlt: "Two engineers running a Design of Experiments test in an industrial laboratory",
        milestones: [
          {
            title: "Define the response",
            contribution: "Clarify the question, objective and evaluation criteria.",
            icon: "icon-target.svg",
          },
          {
            title: "Set factors and levels",
            contribution: "Define influencing factors, levels and boundary conditions.",
            icon: "icon-factors.svg",
          },
          {
            title: "Identify significant factors",
            contribution: "Run an efficient design and identify relevant effects.",
            icon: "icon-significant-factors.svg",
          },
          {
            title: "Quantify relationships",
            contribution: "Describe main effects and interactions statistically.",
            icon: "icon-model.svg",
          },
          {
            title: "Determine optimal settings",
            contribution: "Derive a robust optimum and confirm it experimentally.",
            icon: "icon-optimum.svg",
          },
        ],
        result:
          "A robust process window and optimal factor settings with reduced experimental effort.",
      },
      {
        title: "Safeguard a new product generation through to release",
        role: "Methodological project leadership",
        image: "/projects/new-product-generation.png",
        imageAlt: "Components of a new product generation between development and testing",
        milestones: [
          {
            title: "Clarify targets and ownership",
            contribution: "Align requirements, responsibilities and gate criteria.",
            icon: "icon-target.svg",
          },
          {
            title: "Prioritise risks",
            contribution: "Assess critical functions and potential failure effects.",
            icon: "icon-shield.svg",
          },
          {
            title: "Plan the evidence strategy",
            contribution: "Connect the test plan, DoE and required data coherently.",
            icon: "icon-chart.svg",
          },
          {
            title: "Steer experiments",
            contribution: "Interpret results and address deviations systematically.",
            icon: "icon-seminar.svg",
          },
          {
            title: "Support release",
            contribution: "Document evidence, decisions and remaining risks.",
            icon: "icon-handshake.svg",
          },
        ],
        result:
          "A traceable release with aligned criteria and an appropriate test scope.",
      },
      {
        title: "Understand field failures and validate effective measures",
        role: "Analysis leadership and action tracking",
        image: "/projects/field-failure-fracture.png",
        imageAlt: "Fractured drive shaft during a technical field failure analysis",
        milestones: [
          {
            title: "Frame the problem",
            contribution: "Structure failure patterns and real operating conditions.",
            icon: "icon-target.svg",
          },
          {
            title: "Connect information",
            contribution: "Combine field, test and product data for comparison.",
            icon: "icon-database.svg",
          },
          {
            title: "Evaluate causes",
            contribution: "Test hypotheses using statistics, models and physical findings.",
            icon: "icon-chart.svg",
          },
          {
            title: "Verify measures",
            contribution: "Demonstrate effectiveness with focused experiments.",
            icon: "icon-shield.svg",
          },
          {
            title: "Embed the findings",
            contribution: "Transfer monitoring and lessons learned into the process.",
            icon: "icon-team.svg",
          },
        ],
        result:
          "Prioritised causes and demonstrably effective measures against recurring failures.",
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
            {content.projects.map((project, projectIndex) => (
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
                        key={`${project.title}-${milestone.title}`}
                        className="relative px-4 first:pl-0 last:pr-0"
                      >
                        <span className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border border-cyan-100 bg-[#f2fbfe] shadow-[0_8px_22px_rgba(18,85,112,0.12)]">
                          <span
                            className="relative block size-11 overflow-hidden"
                            aria-hidden="true"
                          >
                            <Image
                              src={milestoneIconSprite}
                              alt=""
                              width={220}
                              height={147}
                              sizes="220px"
                              className="pointer-events-none absolute max-w-none select-none"
                              style={{
                                left: -getMilestoneIconOffset(projectIndex, milestoneIndex)[0],
                                top: -getMilestoneIconOffset(projectIndex, milestoneIndex)[1],
                              }}
                            />
                          </span>
                        </span>
                        <h4 className="mt-5 text-center text-lg leading-tight font-semibold tracking-[-0.03em] text-brand-ink">
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
