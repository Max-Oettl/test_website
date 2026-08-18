import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";
import { CollapsibleProjectList } from "./collapsible-project-list";
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
    showMoreProjectsLabel: "Weitere Projektverläufe anzeigen",
    showFewerProjectsLabel: "Weitere Projektverläufe einklappen",
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
      "RelTest verbindet wissenschaftliche Fundierung, publizierte Fachliteratur und Erfahrung aus anspruchsvollen Industrieprojekten.",
    metrics: [
      { value: "Seit 2016", label: "Industrieberatung" },
      { value: "SFZ", label: "Forschung an der Universität Stuttgart" },
      { value: "2", label: "Springer-Fachbücher" },
    ],
    universityLabel: "Stuttgarter Forschungszentrum Zuverlässigkeitstechnik (SFZ)",
    universityAffiliation: "Universität Stuttgart",
    universityTitle: "Aus Forschung wird belastbare Ingenieurpraxis.",
    universityText:
      "Unsere Mitarbeiter haben an der Universität Stuttgart promoviert und waren im Umfeld des SFZ wissenschaftlich tätig. Die enge Zusammenarbeit sowie der Austausch über Forschung, Konferenzen und fachliche Fragestellungen halten unsere Methoden am aktuellen Stand der Technik.",
    universitySignals: [
      "Promotion und wissenschaftliche Tätigkeit im SFZ-Umfeld",
      "Austausch über Forschung und Konferenzen",
      "Transfer aktueller Erkenntnisse in Industrieprojekte",
    ],
    booksTitle: "Publizierte Expertise statt bloßer Behauptung.",
    booksText:
      "Zwei Springer-Fachbücher dokumentieren methodische Grundlagen, Prüfstrategien und die praktische Absicherung technischer Produkte.",
    booksCta: "Fachbücher ansehen",
    bookTitles: [
      "Zuverlässigkeitstests für eine effiziente Absicherung",
      "Zuverlässigkeit im Fahrzeug- und Maschinenbau",
    ],
    referencesTitle: "Industrieerfahrung, die sich belegen lässt.",
    referencesText:
      "Ausgewählte Unternehmen, mit denen RelTest bereits zusammengearbeitet hat.",
    referencesCta: "Alle Referenzen ansehen",
    industriesTitle: "Zuverlässigkeit kennt keine Branchengrenzen",
    industryCta: "Entdecken",
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
    showMoreProjectsLabel: "Show more project journeys",
    showFewerProjectsLabel: "Collapse additional project journeys",
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
      "RelTest combines scientific foundations, published engineering literature and experience from demanding industrial projects.",
    metrics: [
      { value: "Since 2016", label: "industrial consulting" },
      { value: "SFZ", label: "research at the University of Stuttgart" },
      { value: "2", label: "Springer engineering books" },
    ],
    universityLabel: "Stuttgart Research Center for Reliability Engineering (SFZ)",
    universityAffiliation: "University of Stuttgart",
    universityTitle: "Turning research into robust engineering practice.",
    universityText:
      "Our employees earned their doctorates at the University of Stuttgart and worked in the SFZ research environment. Close collaboration and continuous exchange through research, conferences and technical discussions keep our methods aligned with the current state of the art.",
    universitySignals: [
      "Doctorates and academic work in the SFZ environment",
      "Exchange through research and conferences",
      "Transfer of current findings into industrial projects",
    ],
    booksTitle: "Published expertise, not an unsupported claim.",
    booksText:
      "Two Springer engineering books document methodological foundations, test strategies and the practical validation of technical products.",
    booksCta: "View engineering books",
    bookTitles: [
      "Reliability testing for efficient validation",
      "Reliability in automotive and mechanical engineering",
    ],
    referencesTitle: "Industrial experience backed by evidence.",
    referencesText:
      "Selected companies RelTest has already worked with.",
    referencesCta: "View all references",
    industriesTitle: "Reliability knows no industry boundaries",
    industryCta: "Explore",
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
  const sfzHref =
    locale === "de"
      ? "https://www.ima.uni-stuttgart.de/forschung/sfz/"
      : "https://www.ima.uni-stuttgart.de/en/research/sfz/";

  return (
    <div className="winnstein-page-tail bg-white">
      <section className="border-b border-line-soft bg-white">
        <div className="mx-auto max-w-[96rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(20rem,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-16 xl:gap-24">
            <div className="flex flex-col justify-between lg:py-3">
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

            <nav
              aria-label={content.supportNavigation}
              className="grid gap-x-10 sm:grid-cols-2"
            >
              {content.supportItems.map((item) => (
                <Link
                  key={item.href}
                  href={localizeHref(locale, item.href)}
                  className="group grid min-h-36 grid-cols-[3rem_minmax(0,1fr)_1.5rem] items-start gap-4 border-t border-line-soft py-7 transition-colors hover:border-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4 sm:gap-5"
                >
                  <Image
                    src={`${assetBase}/${item.icon}`}
                    alt=""
                    aria-hidden="true"
                    width={44}
                    height={44}
                    className="h-11 w-11"
                  />
                  <span className="min-w-0">
                    <span className="block text-lg leading-tight font-semibold tracking-[-0.035em] text-brand-ink sm:text-xl">
                      {item.title}
                    </span>
                    <span className="mt-3 block max-w-md text-sm leading-6 font-medium text-slate-500">
                      {item.description}
                    </span>
                  </span>
                  <span className="mt-1 text-brand-cyan transition-transform group-hover:translate-x-1">
                    <ArrowIcon className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-brand-marine-10/35 text-brand-ink">
        <div className="mx-auto max-w-[96rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <h2 className="max-w-3xl text-[clamp(2.1rem,2.8vw,3.35rem)] leading-[1.04] font-semibold tracking-[-0.058em] text-brand-ink">
            {content.projectsTitle}
          </h2>

          <CollapsibleProjectList
            expandLabel={content.showMoreProjectsLabel}
            collapseLabel={content.showFewerProjectsLabel}
            action={
              <Link
                href={localizeHref(locale, "/kontakt")}
                className="brand-action group inline-flex min-h-12 items-center justify-center gap-4 bg-brand-ink px-7 text-sm font-bold text-white transition-colors hover:bg-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7fafc]"
              >
                {content.projectsCta}
                <span className="text-white transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            }
          >
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
                      <span className="flex w-fit flex-wrap items-center gap-x-3 gap-y-1 bg-brand-steel-cyan-10 px-4 py-2.5 sm:px-5">
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
                        <span className="brand-icon-point relative grid size-10 place-items-center text-white">
                          <span className="absolute h-0.5 w-3.5 bg-white" />
                          <span className="absolute h-3.5 w-0.5 bg-white transition-transform duration-200 group-open:scale-y-0" />
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="relative min-h-40 overflow-hidden border-t border-line-soft bg-brand-steel-cyan-10 lg:min-h-full lg:border-t-0 lg:border-l">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover object-center opacity-100 saturate-[0.92] contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.025]"
                      sizes="(min-width: 1024px) 24rem, 100vw"
                    />
                    <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(46,161,207,0.22)_0%,rgba(20,36,82,0.08)_52%,rgba(20,36,82,0.16)_100%)]" />
                  </div>
                </summary>

                <div className="overflow-x-auto px-6 pt-8 pb-8 sm:px-8 lg:px-10 lg:pt-10">
                  <ol className="relative grid min-w-[68rem] grid-cols-5 gap-0 before:absolute before:top-7 before:right-[10%] before:left-[10%] before:h-px before:bg-cyan-200 before:content-['']">
                    {project.milestones.map((milestone, milestoneIndex) => (
                      <li
                        key={`${project.title}-${milestone.title}`}
                        className="relative px-4 first:pl-0 last:pr-0"
                      >
                        <span className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border border-brand-steel-cyan/20 bg-brand-steel-cyan-10">
                          <Image
                            src={`${assetBase}/${milestone.icon}`}
                            alt=""
                            width={40}
                            height={40}
                            className="pointer-events-none size-10 select-none"
                            aria-hidden="true"
                          />
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

                <div className="grid border-t border-line-soft bg-brand-marine-10/25 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
                  <p className="bg-brand-ink px-6 py-4 text-sm font-bold text-white sm:self-stretch sm:px-8 sm:py-5">
                    {content.resultLabel}
                  </p>
                  <p className="px-6 py-4 text-sm leading-7 font-semibold text-brand-ink sm:px-8 sm:py-5">
                    {project.result}
                  </p>
                </div>
              </details>
            ))}
          </CollapsibleProjectList>
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-ink text-white">
        <div className="mx-auto max-w-[96rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
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

            <dl className="grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-3 lg:gap-x-10">
              {content.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex min-w-0 flex-col border-l-2 border-brand-steel-cyan pl-4 sm:pl-5"
                >
                  <dt className="mt-2 text-xs leading-5 font-semibold text-slate-400 sm:text-sm">
                    {metric.label}
                  </dt>
                  <dd className="order-first text-xl leading-tight font-semibold tracking-[-0.045em] text-white sm:text-2xl xl:text-3xl">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 grid gap-px border border-white/15 bg-white/15 lg:grid-cols-[minmax(20rem,0.82fr)_minmax(0,1.18fr)]">
            <article className="relative overflow-hidden bg-brand-marine-80 p-7 sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full border border-brand-cyan/25"
              />
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full border border-brand-cyan/20"
              />
              <a
                href={sfzHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={content.universityLabel}
                className="group/sfz relative block w-full max-w-xl overflow-hidden bg-white shadow-[0_18px_44px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-brand-marine-80"
              >
                <span className="flex min-h-36 items-center px-6 py-2 sm:px-8">
                  <span className="relative block h-32 w-80 max-w-full overflow-hidden">
                    <Image
                      src="/partners/sfz-logo.svg"
                      alt={content.universityLabel}
                      fill
                      className="object-cover object-center"
                      sizes="320px"
                    />
                  </span>
                </span>
                <span className="flex items-center justify-between gap-5 border-t border-slate-200 bg-brand-steel-cyan-10 px-6 py-4 sm:px-8">
                  <span>
                    <span className="block text-[0.65rem] leading-4 font-bold tracking-[0.18em] text-brand-cyan uppercase">
                      {content.universityAffiliation}
                    </span>
                    <span className="mt-1 block max-w-md text-sm leading-5 font-semibold text-brand-marine-80 sm:text-[0.95rem]">
                      {content.universityLabel}
                    </span>
                  </span>
                  <span className="brand-icon-point flex h-10 w-10 shrink-0 items-center justify-center text-white transition-transform group-hover/sfz:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </a>
              <h3 className="relative mt-7 max-w-2xl text-[clamp(1.85rem,2.15vw,2.35rem)] leading-[1.06] font-semibold tracking-[-0.052em] text-white">
                {content.universityTitle}
              </h3>
              <p className="relative mt-6 max-w-2xl text-base leading-8 font-medium text-slate-300">
                {content.universityText}
              </p>
              <ul className="relative mt-8 grid gap-3 border-t border-white/15 pt-6">
                {content.universitySignals.map((signal) => (
                  <li
                    key={signal}
                    className="flex items-start gap-4 text-base leading-7 font-semibold text-slate-100"
                  >
                    <span
                      aria-hidden="true"
                      className="brand-list-dash"
                    />
                    {signal}
                  </li>
                ))}
              </ul>
            </article>

            <div className="flex h-full flex-col bg-white text-brand-ink">
              <div className="flex flex-col gap-6 border-b border-line-soft p-7 sm:flex-row sm:items-end sm:justify-between sm:p-9">
                <div>
                  <h3 className="max-w-2xl text-[clamp(1.85rem,2.15vw,2.35rem)] leading-[1.06] font-semibold tracking-[-0.052em] text-brand-ink">
                    {content.booksTitle}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 font-medium text-slate-600">
                    {content.booksText}
                  </p>
                </div>
                <Link
                  href={localizeHref(locale, "/literatur")}
                  className="group inline-flex w-fit shrink-0 items-center gap-4 border-b-2 border-brand-cyan text-sm font-bold text-brand-ink transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
                >
                  {content.booksCta}
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>

              <div className="grid flex-1 gap-8 bg-brand-steel-cyan-10 px-7 py-9 sm:grid-cols-2 sm:gap-12 sm:px-10 sm:py-11">
                {siteContent.books.slice(0, 2).map((book, index) => (
                  <a
                    key={book.href}
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={content.bookTitles[index]}
                    className="group/book flex min-h-[23rem] items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4"
                  >
                    <Image
                      src={book.cover}
                      alt={content.bookTitles[index]}
                      width={196}
                      height={290}
                      className="h-[clamp(22rem,31vw,30rem)] w-auto max-w-full object-contain shadow-[0_18px_34px_rgba(7,20,48,0.18)] transition-transform duration-300 group-hover/book:-translate-y-1.5 group-hover/book:shadow-[0_24px_42px_rgba(7,20,48,0.22)]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 border border-white/15 bg-white text-brand-ink">
            <div className="grid gap-6 border-b border-line-soft px-6 py-7 sm:px-9 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.48fr)] lg:items-end lg:px-10 lg:py-9">
              <div>
                <h3 className="text-[clamp(1.85rem,2.15vw,2.35rem)] leading-[1.06] font-semibold tracking-[-0.052em] text-brand-ink">
                  {content.referencesTitle}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-8 font-medium text-slate-600">
                  {content.referencesText}
                </p>
              </div>
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
            <div className="grid grid-cols-2 gap-px bg-line-soft sm:grid-cols-4 lg:grid-cols-8">
              {featuredReferences.map((reference) => (
                <a
                  key={reference.name}
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/logo flex min-h-28 items-center justify-center bg-white px-5 py-6 transition-colors hover:bg-brand-steel-cyan-10 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset"
                  aria-label={`${reference.name} - Website`}
                >
                  <Image
                    src={reference.src}
                    alt={reference.name}
                    width={150}
                    height={64}
                    className={
                      reference.name === "ZEISS"
                        ? "h-16 w-16 object-contain opacity-100 transition duration-200 group-hover/logo:scale-105"
                        : "max-h-12 w-auto max-w-full object-contain opacity-90 transition duration-200 group-hover/logo:scale-105 group-hover/logo:opacity-100"
                    }
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft bg-white">
        <div className="mx-auto max-w-[96rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div>
            <h2 className="max-w-4xl text-[clamp(2.1rem,2.8vw,3.35rem)] leading-[1.04] font-semibold tracking-[-0.058em] text-brand-ink">
              {content.industriesTitle}
            </h2>
          </div>

          <div className="mt-12 grid border-t border-l border-line-soft lg:grid-cols-2">
            {industries.items.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group relative isolate flex min-h-32 flex-col items-start justify-center gap-3 overflow-hidden border-r border-b border-line-soft px-6 py-7 transition-colors hover:bg-brand-steel-cyan-10 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset sm:px-9"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  aria-hidden="true"
                  className="-z-20 object-cover object-center opacity-70 saturate-[0.9] contrast-[1.04] transition duration-500 group-hover:scale-[1.025] group-hover:opacity-82"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <span className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.9)_38%,rgba(213,236,247,0.42)_64%,rgba(20,36,82,0.08)_100%)]" />
                <span className="text-xl leading-tight font-semibold tracking-[-0.035em] text-brand-ink sm:text-2xl">
                  {industry.name}
                </span>
                <span className="flex min-w-0 items-center gap-2 text-sm font-bold text-brand-marine/58 transition-colors group-hover:text-brand-steel-cyan">
                  <span>{content.industryCta}</span>
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
