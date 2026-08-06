import Image from "next/image";
import Link from "next/link";

import type { DetailPage, DetailLink } from "../_content/migration-pages";
import { localizeHref, type Locale } from "../_i18n/config";
import { PageIntro } from "./page-intro";

type ServiceDetailTemplateProps = {
  locale: Locale;
  page: DetailPage;
};

type ServiceDetailEnhancement = {
  visual: {
    src: string;
    alt: string;
    caption: string;
  };
  scenarioTitle: string;
  scenario: string;
  benefitsTitle: string;
  benefits: readonly string[];
  examplesTitle: string;
  examples: readonly {
    title: string;
    body: string;
  }[];
};

const serviceEnhancements = {
  de: {
    zuverlaessigkeitstechnik: {
      visual: {
        src: "/graphics/reliability-engineering-cycle.svg",
        alt: "Zuverlässigkeitsprozess von Planung über Analyse bis Absicherung",
        caption:
          "Zuverlässigkeitstechnik verbindet Anforderungen, Ausfallmechanismen, Erprobung, Daten und Nachweise.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Ein Produkt muss belastbar freigegeben werden, aber Ausfallmechanismen, Stichprobe, Prüfstrategie oder Nachweislogik sind noch nicht ausreichend abgesichert.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "technische Risiken werden früh sichtbar und priorisierbar",
        "Prüfaufwand wird auf entscheidungsrelevante Nachweise fokussiert",
        "Freigaben werden nachvollziehbarer und besser dokumentiert",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Welche Ausfälle sind wirklich kritisch?",
          body: "Ausfallbilder, Lastfälle und Einsatzbedingungen werden zusammengeführt, damit sich kritische Mechanismen gezielt absichern lassen.",
        },
        {
          title: "Welche Aussage muss der Test liefern?",
          body: "Aus Produktziel und Risiko entsteht eine Prüfstrategie mit klarer Aussagekraft für Entwicklung und Freigabe.",
        },
      ],
    },
    zuverlaessigkeitsmanagement: {
      visual: {
        src: "/graphics/reliability-process-flow.svg",
        alt: "Strukturierter Zuverlässigkeitsprozess für technische Produkte",
        caption:
          "Zuverlässigkeitsmanagement macht Methoden, Verantwortlichkeiten und Entscheidungen im Projekt steuerbar.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Zuverlässigkeit wird im Projekt zwar gefordert, aber Ziele, Rollen, Reviews, Datenbewertung und Nachweise sind nicht durchgängig organisiert.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "Projektleitung bekommt klare technische Entscheidungsgrundlagen",
        "Entwicklung, Qualität und Management arbeiten mit derselben Risikologik",
        "Nachweise entstehen nicht erst kurz vor Freigabe, sondern prozessbegleitend",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Wo fehlt Struktur im aktuellen Prozess?",
          body: "Bestehende Abläufe werden auf Lücken zwischen Anforderungen, Erprobung, Datenanalyse und Freigabe geprüft.",
        },
        {
          title: "Welche Reviews sind wirklich notwendig?",
          body: "RelTest hilft, technische Meilensteine so zu definieren, dass Risiken rechtzeitig sichtbar werden.",
        },
      ],
    },
    beratung: {
      visual: {
        src: "/team/img-0112.jpg",
        alt: "RelTest Experten analysieren ein technisches Bauteil und Ausfallmechanismen",
        caption:
          "Beratung bedeutet bei RelTest: technische Fragestellung verstehen, Methoden passend wählen und Entscheidungen absichern.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Ein Entwicklungsteam steht vor einer konkreten Zuverlässigkeits-, Erprobungs- oder Datenfrage und benötigt kurzfristig fachliche Orientierung oder operative Unterstützung.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "schneller fachlicher Sparring-Partner für kritische Projektentscheidungen",
        "Entlastung interner Teams bei Analyse, Planung und Dokumentation",
        "Methoden werden so eingesetzt, dass sie zum Produkt und Projektstand passen",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Welche Methode passt zur aktuellen Frage?",
          body: "Statt Methodensilos zu verkaufen, wird entschieden, ob Testplanung, DoE, Datenanalyse oder Risikobewertung den größten Hebel hat.",
        },
        {
          title: "Wie lässt sich eine Entscheidung belastbar begründen?",
          body: "RelTest verdichtet technische Daten und Annahmen zu einer nachvollziehbaren Argumentation für interne und externe Stakeholder.",
        },
      ],
    },
    "design-of-experiments": {
      visual: {
        src: "/graphics/doe-factor-space.svg",
        alt: "DoE-Grafik mit Faktoren, Zielgrößen und Wechselwirkungen",
        caption:
          "DoE macht sichtbar, welche Faktoren, Wechselwirkungen und Streuungen die Zielgröße beeinflussen.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Viele Einflussgrößen sind möglich, Tests sind teuer oder zeitkritisch und klassische Ein-Faktor-Versuche liefern zu wenig Aussagekraft.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "weniger unnötige Versuchsschleifen",
        "besseres Verständnis von Einflussgrößen und Wechselwirkungen",
        "belastbarere Optimierung und Robustheitsbewertung",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Welche Faktoren dominieren das Verhalten?",
          body: "Ein geeigneter Versuchsplan trennt Haupteffekte, Wechselwirkungen und Streuung technisch interpretierbar voneinander.",
        },
        {
          title: "Wie wird ein Test effizienter?",
          body: "DoE reduziert blinde Testläufe und erhöht die Aussagekraft pro Versuchspunkt.",
        },
      ],
    },
    "doe-consulting": {
      visual: {
        src: "/graphics/doe-factor-space.svg",
        alt: "DoE Consulting mit Faktorraum, Versuchsdesign und Auswertung",
        caption:
          "DoE Consulting unterstützt konkrete Projekte von der Fragestellung bis zur interpretierbaren Auswertung.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Ein Versuchsprogramm steht an oder läuft bereits, aber Faktorwahl, Design, Auswertung oder Interpretation sollen methodisch abgesichert werden.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "direkt nutzbarer Versuchsplan statt theoretischer Methodenempfehlung",
        "sichere statistische Auswertung mit technischer Interpretation",
        "mehr Aussagekraft bei begrenzter Testzeit und begrenztem Budget",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Wie wird aus der Produktfrage ein DoE-Design?",
          body: "RelTest strukturiert Faktoren, Störgrößen, Zielgrößen und Randbedingungen zu einem belastbaren Plan.",
        },
        {
          title: "Was bedeuten die Ergebnisse technisch?",
          body: "Effekte werden nicht nur berechnet, sondern in Produktverständnis, Maßnahmen und Entscheidungen übersetzt.",
        },
      ],
    },
    "doe-coaching": {
      visual: {
        src: "/team/img-3164.jpg",
        alt: "RelTest Experten besprechen Analyseergebnisse am Bildschirm",
        caption:
          "DoE Coaching baut Methodenkompetenz direkt an realen Projekten und Versuchsdaten auf.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Ein Team soll DoE im eigenen Projekt anwenden, möchte dabei aber Sicherheit gewinnen und typische Fehler in Planung oder Auswertung vermeiden.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "Kompetenzaufbau ohne losgelöste Schulungsbeispiele",
        "direkter Projektfortschritt während des Coachings",
        "mehr Sicherheit bei Designlogik, Auswertung und Ergebnisdarstellung",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Wie lernt das Team an der echten Aufgabe?",
          body: "DoE-Entscheidungen werden am eigenen Produkt, Prüfstand und Datensatz erklärt und gemeinsam umgesetzt.",
        },
        {
          title: "Wo entstehen typische DoE-Fehler?",
          body: "RelTest begleitet Faktorwahl, Randomisierung, Wiederholungen und Interpretation, bevor Fehler teuer werden.",
        },
      ],
    },
    coaching: {
      visual: {
        src: "/team/img-0071.jpg",
        alt: "RelTest Experte analysiert CAD- und Zuverlässigkeitsdaten am Arbeitsplatz",
        caption:
          "Coaching verbindet Methodenwissen mit konkreten Projektentscheidungen im Entwicklungsalltag.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Methoden sind bekannt, aber im echten Projekt fehlt Sicherheit, wie sie auf Produkt, Datenlage, Risiko und Zeitplan angewendet werden.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "interne Teams werden methodisch sicherer",
        "Know-how bleibt im Unternehmen und wird direkt angewendet",
        "kritische Entscheidungen können gemeinsam reflektiert werden",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Wie wird aus Training echte Anwendung?",
          body: "RelTest begleitet das Team bei realen Fragestellungen, statt Methoden nur abstrakt zu erklären.",
        },
        {
          title: "Welche Entscheidung ist methodisch vertretbar?",
          body: "Coaching schafft Sparring für technische Bewertung, Dateninterpretation und Kommunikation im Projekt.",
        },
      ],
    },
    "langfristige-kooperation": {
      visual: {
        src: "/team/img-0139.jpg",
        alt: "RelTest Experte unterstützt technische Absicherung an einem Prüfstand",
        caption:
          "Langfristige Kooperation bedeutet kontinuierliche technische Begleitung über einzelne Analysen hinaus.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Ein Produkt oder Projekt benötigt über längere Zeit zuverlässige methodische Begleitung, aber interne Kapazität oder Spezialwissen sind nicht durchgängig verfügbar.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "kontinuierliche Verantwortung statt punktueller Einzelanalyse",
        "saubere Dokumentation über Projektphasen hinweg",
        "verlässlicher Sparring-Partner für Entwicklung, Qualität und Management",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Wie bleibt Zuverlässigkeit dauerhaft im Projekt verankert?",
          body: "RelTest begleitet Reviews, Nachweise, Erprobungsfragen und Dokumentation über mehrere Projektphasen hinweg.",
        },
        {
          title: "Was ist nach Stand der Technik vertretbar?",
          body: "Die Arbeitsweise macht Annahmen, Entscheidungen und Nachweise transparent und später nachvollziehbar.",
        },
      ],
    },
    "datenanalyse-prognostik": {
      visual: {
        src: "/team/img-0071.jpg",
        alt: "RelTest Experte wertet technische Lebensdauer- und Weibull-Daten aus",
        caption:
          "Datenanalyse wird wertvoll, wenn Daten in technische Aussagen, Prognosen und Entscheidungen übersetzt werden.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Versuchs-, Feld- oder Lebensdauerdaten liegen vor, aber ihre Aussagekraft, Unsicherheit und Bedeutung für Entwicklung oder Freigabe sind unklar.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "Daten werden zu belastbaren technischen Aussagen",
        "Ausfallverhalten, Lebensdauer und Unsicherheit werden verständlich",
        "Prognosen unterstützen Entscheidungen zu Maßnahmen, Freigabe und Feldrisiko",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Was sagen vorhandene Daten wirklich aus?",
          body: "RelTest bewertet Datenqualität, Verteilung, Konfidenz und technische Plausibilität.",
        },
        {
          title: "Wie lässt sich Feldverhalten prognostizieren?",
          body: "Modelle und statistische Auswertung werden mit realen Einsatzbedingungen und Ausfallmechanismen verbunden.",
        },
      ],
    },
    risikomanagement: {
      visual: {
        src: "/graphics/knowledge/risk-management.png",
        alt: "Technische Risikomanagement-Grafik mit Bewertung und Priorisierung",
        caption:
          "Risikomanagement priorisiert technische Risiken nach Ursache, Wahrscheinlichkeit, Auswirkung und Nachweisbarkeit.",
      },
      scenarioTitle: "Typische Ausgangslage",
      scenario:
        "Viele Risiken sind bekannt oder werden vermutet, aber es ist unklar, welche wirklich entscheidend sind und welche Maßnahmen den größten Nutzen bringen.",
      benefitsTitle: "Kundenvorteil",
      benefits: [
        "kritische Risiken werden transparent priorisiert",
        "Maßnahmen und Tests werden auf die größten Hebel ausgerichtet",
        "Entscheidungen werden für Projektleitung und Management nachvollziehbar",
      ],
      examplesTitle: "Beispielhafte Projektfragen",
      examples: [
        {
          title: "Welche Risiken verdienen sofortige Aufmerksamkeit?",
          body: "Ausfallmechanismus, Auswirkung und Entdeckbarkeit werden gemeinsam bewertet, nicht nur als abstrakte Risikomatrix.",
        },
        {
          title: "Welche Maßnahme reduziert Unsicherheit wirklich?",
          body: "RelTest verknüpft Risikobewertung mit Erprobung, Datenanalyse und Dokumentation.",
        },
      ],
    },
  },
  en: {
    zuverlaessigkeitstechnik: {
      visual: {
        src: "/graphics/reliability-engineering-cycle.svg",
        alt: "Reliability process from planning and analysis to validation",
        caption:
          "Reliability engineering connects requirements, failure mechanisms, testing, data and evidence.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "A product needs a robust release basis, but failure mechanisms, sample size, test strategy or evidence logic are not sufficiently secured yet.",
      benefitsTitle: "Customer value",
      benefits: [
        "technical risks become visible and prioritizable early",
        "test effort focuses on decision-relevant evidence",
        "release decisions become more traceable and better documented",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "Which failures are truly critical?",
          body: "Failure patterns, load cases and operating conditions are combined so critical mechanisms can be validated specifically.",
        },
        {
          title: "What statement must the test deliver?",
          body: "Product targets and risk profile are translated into a test strategy with clear decision value.",
        },
      ],
    },
    zuverlaessigkeitsmanagement: {
      visual: {
        src: "/graphics/reliability-process-flow.svg",
        alt: "Structured reliability process for technical products",
        caption:
          "Reliability management makes methods, responsibilities and decisions controllable within the project.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "Reliability is required in the project, but targets, roles, reviews, data assessment and evidence are not organized end to end.",
      benefitsTitle: "Customer value",
      benefits: [
        "project management receives clear technical decision bases",
        "engineering, quality and management work with the same risk logic",
        "evidence is built continuously instead of shortly before release",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "Where is structure missing in the current process?",
          body: "Existing workflows are reviewed for gaps between requirements, testing, data analysis and release.",
        },
        {
          title: "Which reviews are actually necessary?",
          body: "RelTest helps define technical milestones so risks become visible early enough.",
        },
      ],
    },
    beratung: {
      visual: {
        src: "/team/img-0112.jpg",
        alt: "RelTest experts analysing a technical component and failure mechanisms",
        caption:
          "Consulting at RelTest means understanding the technical question, selecting the right methods and securing decisions.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "An engineering team faces a specific reliability, testing or data question and needs rapid technical guidance or operational support.",
      benefitsTitle: "Customer value",
      benefits: [
        "fast expert sparring for critical project decisions",
        "relief for internal teams in analysis, planning and documentation",
        "methods are applied according to product context and project maturity",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "Which method fits the current question?",
          body: "Instead of selling method silos, we decide whether testing, DoE, data analysis or risk assessment creates the strongest leverage.",
        },
        {
          title: "How can a decision be justified robustly?",
          body: "RelTest condenses technical data and assumptions into a traceable argument for internal and external stakeholders.",
        },
      ],
    },
    "design-of-experiments": {
      visual: {
        src: "/graphics/doe-factor-space.svg",
        alt: "DoE graphic with factors, target values and interactions",
        caption:
          "DoE shows which factors, interactions and variation influence the target value.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "Many influencing factors are possible, tests are expensive or time-critical and one-factor-at-a-time testing does not provide enough insight.",
      benefitsTitle: "Customer value",
      benefits: [
        "fewer unnecessary test loops",
        "better understanding of factors and interactions",
        "more robust optimization and reliability assessment",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "Which factors dominate behaviour?",
          body: "A suitable design separates main effects, interactions and variation in a technically interpretable way.",
        },
        {
          title: "How can testing become more efficient?",
          body: "DoE reduces blind test runs and increases the information value of each test point.",
        },
      ],
    },
    "doe-consulting": {
      visual: {
        src: "/graphics/doe-factor-space.svg",
        alt: "DoE consulting with factor space, test design and analysis",
        caption:
          "DoE consulting supports real projects from problem formulation to interpretable analysis.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "A test programme is planned or already running, but factor selection, design, analysis or interpretation should be methodologically secured.",
      benefitsTitle: "Customer value",
      benefits: [
        "directly usable test design instead of theoretical method advice",
        "reliable statistical analysis with technical interpretation",
        "more insight with limited test time and budget",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "How does the product question become a DoE design?",
          body: "RelTest structures factors, noise variables, target values and boundary conditions into a robust plan.",
        },
        {
          title: "What do the results mean technically?",
          body: "Effects are not only calculated, but translated into product understanding, measures and decisions.",
        },
      ],
    },
    "doe-coaching": {
      visual: {
        src: "/team/img-3164.jpg",
        alt: "RelTest experts discussing analysis results on a screen",
        caption:
          "DoE coaching builds method confidence directly on real projects and test data.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "A team wants to apply DoE in its own project while gaining confidence and avoiding typical planning or analysis mistakes.",
      benefitsTitle: "Customer value",
      benefits: [
        "capability building without detached training examples",
        "direct project progress during coaching",
        "more confidence in design logic, analysis and result communication",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "How does the team learn from the real task?",
          body: "DoE decisions are explained and implemented on the team's own product, test bench and data set.",
        },
        {
          title: "Where do typical DoE mistakes occur?",
          body: "RelTest supports factor selection, randomization, repetitions and interpretation before mistakes become costly.",
        },
      ],
    },
    coaching: {
      visual: {
        src: "/team/img-0071.jpg",
        alt: "RelTest expert analysing CAD and reliability data at a workstation",
        caption:
          "Coaching connects method knowledge with concrete project decisions in daily engineering work.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "Methods are known, but the team needs confidence in applying them to the real product, data situation, risk profile and timeline.",
      benefitsTitle: "Customer value",
      benefits: [
        "internal teams become more confident in applying methods",
        "knowledge stays within the company and is used immediately",
        "critical decisions can be reflected together",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "How does training become real application?",
          body: "RelTest supports the team on real engineering questions instead of only explaining methods abstractly.",
        },
        {
          title: "Which decision is methodologically defensible?",
          body: "Coaching provides sparring for technical assessment, data interpretation and project communication.",
        },
      ],
    },
    "langfristige-kooperation": {
      visual: {
        src: "/team/img-0139.jpg",
        alt: "RelTest expert supporting technical validation at a test bench",
        caption:
          "Long-term partnership means continuous technical support beyond individual analyses.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "A product or project needs continuous methodological support, but internal capacity or specialized expertise is not available throughout.",
      benefitsTitle: "Customer value",
      benefits: [
        "continuous ownership instead of isolated individual analysis",
        "clean documentation across project phases",
        "reliable sparring partner for engineering, quality and management",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "How does reliability remain anchored in the project?",
          body: "RelTest accompanies reviews, evidence, testing questions and documentation across several project phases.",
        },
        {
          title: "What is defensible according to the state of the art?",
          body: "The working approach makes assumptions, decisions and evidence transparent and traceable later on.",
        },
      ],
    },
    "datenanalyse-prognostik": {
      visual: {
        src: "/team/img-0071.jpg",
        alt: "RelTest expert evaluating life data and Weibull analysis",
        caption:
          "Data analysis creates value when data is translated into technical statements, predictions and decisions.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "Test, field or life data exists, but its significance, uncertainty and relevance for development or release are unclear.",
      benefitsTitle: "Customer value",
      benefits: [
        "data becomes robust technical evidence",
        "failure behaviour, lifetime and uncertainty become understandable",
        "predictions support decisions on measures, release and field risk",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "What do existing data really show?",
          body: "RelTest assesses data quality, distribution, confidence and technical plausibility.",
        },
        {
          title: "How can field behaviour be predicted?",
          body: "Models and statistical analysis are connected to real operating conditions and failure mechanisms.",
        },
      ],
    },
    risikomanagement: {
      visual: {
        src: "/graphics/knowledge/risk-management.png",
        alt: "Technical risk management graphic with assessment and prioritization",
        caption:
          "Risk management prioritizes technical risks by cause, probability, impact and detectability.",
      },
      scenarioTitle: "Typical starting point",
      scenario:
        "Many risks are known or suspected, but it is unclear which ones matter most and which measures create the highest value.",
      benefitsTitle: "Customer value",
      benefits: [
        "critical risks are transparently prioritized",
        "measures and tests focus on the biggest levers",
        "decisions become traceable for project management and leadership",
      ],
      examplesTitle: "Example project questions",
      examples: [
        {
          title: "Which risks need immediate attention?",
          body: "Failure mechanism, impact and detectability are assessed together, not only as an abstract risk matrix.",
        },
        {
          title: "Which measure really reduces uncertainty?",
          body: "RelTest connects risk assessment with testing, data analysis and documentation.",
        },
      ],
    },
  },
} as const satisfies Record<Locale, Record<string, ServiceDetailEnhancement>>;

const serviceEnhancementMap: Record<
  Locale,
  Record<string, ServiceDetailEnhancement>
> = serviceEnhancements;

const labels = {
  de: {
    customerValue: "Kundennutzen",
    whatWeDeliver: "Was RelTest konkret liefert",
    projectModules: "Projektbausteine",
    projectModulesIntro:
      "Je nach Ausgangslage werden diese Bausteine kombiniert, priorisiert und auf Ihr Produkt angepasst.",
    relatedTopics: "Verwandte Themen",
  },
  en: {
    customerValue: "Customer value",
    whatWeDeliver: "What RelTest delivers",
    projectModules: "Project modules",
    projectModulesIntro:
      "Depending on the starting point, these modules are combined, prioritized and adapted to your product.",
    relatedTopics: "Related topics",
  },
} as const satisfies Record<Locale, Record<string, string>>;

function resolveHref(locale: Locale, href: string) {
  return href.startsWith("http") ? href : localizeHref(locale, href);
}

function isVector(src: string) {
  return src.endsWith(".svg");
}

function LinkButton({
  link,
  locale,
  variant = "primary",
}: {
  link: DetailLink;
  locale: Locale;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={resolveHref(locale, link.href)}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={
        variant === "primary"
          ? "brand-chamfer-control inline-flex items-center justify-center bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
          : "brand-action brand-action-outline inline-flex items-center justify-center border border-white/15 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
      }
    >
      {link.label}
    </Link>
  );
}

export function ServiceDetailTemplate({
  locale,
  page,
}: ServiceDetailTemplateProps) {
  const text = labels[locale];
  const enhancement =
    serviceEnhancementMap[locale][page.slug] ??
    serviceEnhancementMap[locale].beratung;
  const visual = enhancement.visual;
  const visualIsVector = isVector(visual.src);

  return (
    <>
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <section className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="hero-editorial-grid absolute inset-0 opacity-80" />
        <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute -right-28 bottom-32 h-72 w-72 rounded-full bg-slate-300/45 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch">
            <div className="rounded-[2.2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-8">
              <p className="text-sm leading-8 font-medium text-slate-800 sm:text-lg">
                {page.lead}
              </p>

              <div className="mt-8 rounded-[1.6rem] border border-cyan-100 bg-cyan-50/70 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-800">
                  {enhancement.scenarioTitle}
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {enhancement.scenario}
                </p>
              </div>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">
                  {enhancement.benefitsTitle}
                </p>
                <div className="mt-4 grid gap-3">
                  {enhancement.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-950 text-[11px] font-bold text-cyan-300">
                        ✓
                      </span>
                      <p className="text-sm leading-7 font-semibold text-slate-700">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <figure className="relative overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/70">
              <div className="relative min-h-[22rem] bg-slate-100 sm:min-h-[28rem]">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={
                    visualIsVector
                      ? "object-contain p-8 sm:p-10"
                      : "object-cover"
                  }
                />
                {!visualIsVector ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/10 to-transparent" />
                ) : null}
              </div>
              <figcaption className="border-t border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
                {visual.caption}
              </figcaption>
              <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-950 shadow-sm">
                {text.customerValue}
              </div>
            </figure>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <aside className="rounded-[2.2rem] border border-slate-800 bg-slate-950 p-7 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                {text.whatWeDeliver}
              </p>
              <div className="mt-6 grid gap-4">
                {page.proofPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.3rem] border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div className="flex gap-3">
                      <span aria-hidden="true" className="brand-list-dash" />
                      <p className="text-sm leading-7 font-medium text-slate-100">
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <div className="rounded-[2.2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">
                {text.projectModules}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                {page.proofPointsTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {text.projectModulesIntro}
              </p>

              <div className="mt-8 grid gap-4">
                {page.sections.map((section, index) => (
                  <article
                    key={section.title}
                    className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[3.5rem_1fr]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-bold text-cyan-800 ring-1 ring-slate-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-slate-600">
                        {section.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2.2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">
              {enhancement.examplesTitle}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {enhancement.examples.map((example) => (
                <article
                  key={example.title}
                  className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6"
                >
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {example.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {example.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {page.related?.length ? (
        <section className="bg-white px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              {text.relatedTopics}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {page.related.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(locale, link.href)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="brand-chamfer-control-sm border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-slate-950 text-white shadow-2xl shadow-slate-300">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.58fr] lg:items-center lg:p-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                {page.ctaTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                {page.ctaText}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <LinkButton link={page.primaryCta} locale={locale} />
              {page.secondaryCta ? (
                <LinkButton
                  link={page.secondaryCta}
                  locale={locale}
                  variant="secondary"
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
