import type { Locale } from "../_i18n/config";

export type SolutionServiceTopic = {
  id: string;
  title: string;
  work: string;
  result: string;
  icon: string;
};

export type SolutionServicePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  topics: {
    title: string;
    description: string;
    items: SolutionServiceTopic[];
  };
  situations: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  deliverables: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  knowledge: {
    title: string;
    description: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  };
  cta: {
    title: string;
    text: string;
  };
};

const solutionServicePages: Record<
  Locale,
  Record<string, SolutionServicePage>
> = {
  de: {
    zuverlaessigkeitstechnik: {
      slug: "zuverlaessigkeitstechnik",
      metaTitle:
        "Zuverlässigkeitstechnik & Lebensdauerbewertung | RelTest Solutions",
      metaDescription:
        "Zuverlässigkeitsplanung, Lebensdauerbewertung und belastbare Zuverlässigkeitsnachweise für technische Produkte und Systeme.",
      hero: {
        title: "Zuverlässigkeit von Anfang an belastbar entwickeln.",
        description:
          "RelTest übersetzt reale Einsatzbedingungen in klare Zuverlässigkeitsziele, bewertet relevante Ausfallmechanismen und entwickelt Nachweise, die zur Produktreife und zur anstehenden Entscheidung passen.",
        image: "/team/img-0112.jpg",
        imageAlt:
          "RelTest Experten untersuchen ein technisches Bauteil und mögliche Ausfallmechanismen",
      },
      topics: {
        title: "Unsere Leistungen in der Zuverlässigkeitstechnik",
        description:
          "Der Umfang richtet sich nach Produkt, Entwicklungsstand und vorhandener Datenlage. Einzelne Bausteine können gezielt bearbeitet oder zu einem durchgängigen Zuverlässigkeitskonzept verbunden werden.",
        items: [
          {
            id: "zuverlaessigkeitsplanung",
            title: "Zuverlässigkeitsplanung",
            work:
              "Wir erfassen Lasten, Nutzung und Umgebungsbedingungen, leiten messbare Zuverlässigkeitsziele ab und ordnen Methoden, Verantwortlichkeiten und Nachweise den Entwicklungsphasen zu.",
            result:
              "Ein abgestimmter Zuverlässigkeitsplan mit klaren Zielen, Arbeitspaketen, Schnittstellen und Entscheidungspunkten.",
            icon:
              "/graphics/solutions-icons/icon-target.svg",
          },
          {
            id: "lebensdauerbewertung",
            title: "Lebensdauerbewertung",
            work:
              "Bauteilbelastungen, Festigkeiten, Ausfallmechanismen sowie Prüf- und Felddaten werden zu einer nachvollziehbaren Lebensdaueraussage zusammengeführt.",
            result:
              "Eine bewertete Lebensdauer mit dokumentierten Annahmen, Unsicherheiten und technischen Grenzen.",
            icon: "/graphics/solutions-icons/icon-chart.svg",
          },
          {
            id: "zuverlaessigkeitsnachweise",
            title: "Zuverlässigkeitsnachweise",
            work:
              "Wir definieren Nachweisziel, Stichprobe, Prüfdauer, Vertrauensniveau und Annahmekriterien passend zur geforderten Aussage und zum verfügbaren Aufwand.",
            result:
              "Ein prüfbarer Nachweis, der Freigabeentscheidungen fachlich und dokumentarisch trägt.",
            icon:
              "/graphics/solutions-icons/icon-evidence-plan.svg",
          },
          {
            id: "methodische-beratung",
            title: "Methodische Beratung",
            work:
              "Bestehende Konzepte, Berechnungen und Prüfergebnisse werden unabhängig bewertet. Gemeinsam klären wir, welche Methode für die konkrete technische Frage wirklich belastbar ist.",
            result:
              "Eine klare fachliche Empfehlung mit begründeter Methodenauswahl und nächsten Schritten.",
            icon:
              "/graphics/solutions-icons/icon-process-design.svg",
          },
        ],
      },
      situations: {
        title: "Wann wir typischerweise unterstützen",
        description:
          "Zuverlässigkeit wird besonders dann anspruchsvoll, wenn technische Unsicherheit und Entscheidungsdruck gleichzeitig steigen.",
        items: [
          {
            title: "Neue Produktgeneration",
            text:
              "Zuverlässigkeitsziele und Nachweiswege müssen früh definiert werden, bevor Konstruktion und Erprobung Fakten schaffen.",
          },
          {
            title: "Unerwartete Ausfälle",
            text:
              "Prüf- oder Feldausfälle sollen technisch eingeordnet und in wirksame Entwicklungsmaßnahmen übersetzt werden.",
          },
          {
            title: "Freigabe unter Unsicherheit",
            text:
              "Die vorhandenen Daten reichen für eine Entscheidung nur dann aus, wenn Aussagekraft und Grenzen sauber bewertet sind.",
          },
        ],
      },
      deliverables: {
        title: "Was am Ende vorliegt",
        description:
          "Nicht nur eine Methode, sondern eine belastbare Grundlage für die nächste Produktentscheidung.",
        items: [
          {
            title: "Zuverlässigkeitskonzept",
            text:
              "Ziele, Methoden, Rollen und Nachweise in einer konsistenten Planung.",
          },
          {
            title: "Bewertete Lebensdauer",
            text:
              "Technisch begründete Aussage inklusive Annahmen und Unsicherheiten.",
          },
          {
            title: "Nachweisstrategie",
            text:
              "Prüf- und Auswertelogik passend zu Ziel, Reifegrad und Risiko.",
          },
          {
            title: "Entscheidungsdokumentation",
            text:
              "Nachvollziehbare Ergebnisse für Review, Freigabe und weitere Entwicklung.",
          },
        ],
      },
      knowledge: {
        title: "Fachliche Grundlagen vertiefen",
        description:
          "Unsere Wissensseiten erklären zentrale Zusammenhänge unabhängig vom konkreten Leistungsangebot.",
        links: [
          { label: "Zuverlässigkeitsplanung", href: "/wissen/planung" },
          { label: "Absicherung", href: "/wissen/absicherung" },
          { label: "Prognosen", href: "/wissen/prognosen" },
        ],
      },
      cta: {
        title: "Welche Zuverlässigkeitsaussage braucht Ihr Projekt?",
        text:
          "Wir klären die technische Fragestellung, die vorhandene Datenbasis und den sinnvollen Umfang in einem ersten Gespräch.",
      },
    },
    risikomanagement: {
      slug: "risikomanagement",
      metaTitle:
        "Risikomanagement, FMEA & technische Absicherung | RelTest",
      metaDescription:
        "Technische Risiken mit FMEA, FTA und risikobasierten Absicherungsstrategien systematisch bewerten, priorisieren und dokumentieren.",
      hero: {
        title: "Technische Risiken früh erkennen und wirksam absichern.",
        description:
          "RelTest schafft eine belastbare Verbindung zwischen Risikoanalyse, technischer Bewertung und konkreter Absicherung. So werden kritische Schwachstellen nicht nur dokumentiert, sondern gezielt bearbeitet.",
        image: "/expertise/lab-review.png",
        imageAlt:
          "Ingenieurteam bewertet technische Risiken und Absicherungsmaßnahmen",
      },
      topics: {
        title: "Unsere Leistungen für Risiko und Absicherung",
        description:
          "Wir richten die Analyse auf die anstehende technische Entscheidung aus: von der strukturierten Schwachstellensuche bis zur freigegebenen Absicherungsstrategie.",
        items: [
          {
            id: "fmea-fta",
            title: "FMEA & FTA",
            work:
              "Funktionen, Fehlerfolgen, Ursachen und Abhängigkeiten werden mit geeigneter Blickrichtung untersucht. Bestehende Analysen prüfen wir auf technische Tiefe und Anschlussfähigkeit.",
            result:
              "Eine strukturierte Fehler- und Ursachenanalyse, die kritische Zusammenhänge verständlich macht.",
            icon:
              "/graphics/solutions-icons/icon-risk-identification.svg",
          },
          {
            id: "risikobewertung",
            title: "Risikobewertung",
            work:
              "Risiken werden anhand von Auswirkung, Wahrscheinlichkeit, Entdeckbarkeit und vorhandener Evidenz bewertet. Unsichere Annahmen werden dabei sichtbar gemacht.",
            result:
              "Eine fachlich begründete Priorisierung, die Ressourcen auf die entscheidenden Risiken lenkt.",
            icon:
              "/graphics/solutions-icons/icon-risk-matrix.svg",
          },
          {
            id: "absicherungsstrategie",
            title: "Absicherungsstrategie",
            work:
              "Aus den priorisierten Risiken leiten wir Entwicklungsmaßnahmen, Analysen und Prüfungen ab und bringen sie mit Reifegrad, Kosten und Terminplan zusammen.",
            result:
              "Ein umsetzbarer Absicherungsplan mit Verantwortlichkeiten, Nachweisen und klarer Reihenfolge.",
            icon:
              "/graphics/solutions-icons/icon-measures.svg",
          },
          {
            id: "stand-der-technik",
            title: "Stand der Technik",
            work:
              "Methodenwahl, Bewertungsmaßstäbe und Dokumentation werden darauf geprüft, ob sie fachlich nachvollziehbar und für den konkreten Produkt- und Projektkontext angemessen sind.",
            result:
              "Eine dokumentierte technische Herleitung, die Reviews und spätere Nachfragen belastbar unterstützt.",
            icon:
              "/graphics/solutions-icons/icon-process-approval.svg",
          },
        ],
      },
      situations: {
        title: "Wann wir typischerweise unterstützen",
        description:
          "Risikomanagement entfaltet seinen Nutzen, wenn Analyse, Entscheidung und Umsetzung eng miteinander verbunden sind.",
        items: [
          {
            title: "Neue Architektur",
            text:
              "Funktionen und Schnittstellen verändern sich; kritische Fehlerpfade müssen früh verstanden und priorisiert werden.",
          },
          {
            title: "Unklare Maßnahmenlage",
            text:
              "Es existieren umfangreiche FMEAs oder Risikolisten, aber keine belastbare Verbindung zu Tests und Entwicklungsmaßnahmen.",
          },
          {
            title: "Kritischer Ausfall",
            text:
              "Nach einem Prüf- oder Feldausfall müssen Ursache, Folgerisiken und erforderliche Absicherung nachvollziehbar bewertet werden.",
          },
        ],
      },
      deliverables: {
        title: "Was am Ende vorliegt",
        description:
          "Eine klare Risikosicht, die nicht im Workshop endet, sondern technische Arbeit steuert.",
        items: [
          {
            title: "Risikomodell",
            text:
              "Strukturierte Darstellung kritischer Funktionen, Fehler und Abhängigkeiten.",
          },
          {
            title: "Prioritäten",
            text:
              "Begründete Rangfolge mit transparenten Bewertungskriterien.",
          },
          {
            title: "Absicherungsplan",
            text:
              "Abgestimmte Maßnahmen, Prüfungen, Zuständigkeiten und Termine.",
          },
          {
            title: "Technische Begründung",
            text:
              "Dokumentierte Entscheidungen und Nachweise für Reviews und Freigaben.",
          },
        ],
      },
      knowledge: {
        title: "Fachliche Grundlagen vertiefen",
        description:
          "Weiterführende Einordnungen zu Schwachstellen, Absicherung und technischem Risikomanagement.",
        links: [
          {
            label: "Schwachstellenanalyse",
            href: "/wissen/schwachstellenanalyse",
          },
          { label: "Absicherung", href: "/wissen/absicherung" },
          { label: "Risikomanagement", href: "/wissen/risikomanagement" },
        ],
      },
      cta: {
        title: "Welche Risiken müssen Sie als Nächstes beherrschen?",
        text:
          "Wir ordnen Ausgangslage, Entscheidungsbedarf und vorhandene Analysen ein und schlagen einen passenden Arbeitsumfang vor.",
      },
    },
    "datenanalyse-prognostik": {
      slug: "datenanalyse-prognostik",
      metaTitle:
        "DoE, Lebensdauererprobung & Datenanalyse | RelTest Solutions",
      metaDescription:
        "Versuchsplanung mit DoE, Lebensdauererprobung, Felddatenanalyse und Prognostik für belastbare technische Entscheidungen.",
      hero: {
        title: "Tests so planen, dass Daten eine klare Entscheidung ermöglichen.",
        description:
          "RelTest verbindet Versuchsplanung, statistische Auswertung und technisches Produktverständnis. Dadurch entstehen aus Prüf- und Felddaten belastbare Aussagen statt isolierter Kennzahlen.",
        image: "/team/home-testbench-review.png",
        imageAlt:
          "RelTest Ingenieure bewerten Versuchsaufbau und technische Messdaten",
      },
      topics: {
        title: "Unsere Leistungen für Test und Datenanalyse",
        description:
          "Vom Versuchsdesign bis zur Prognose bleibt die technische Frage der Ausgangspunkt. Statistik wird dort eingesetzt, wo sie die Aussage verbessert und Entscheidungen absichert.",
        items: [
          {
            id: "design-of-experiments",
            title: "Design of Experiments",
            work:
              "Wir definieren Zielgrößen, Faktoren und Faktorstufen, wählen ein geeignetes Versuchsdesign und berücksichtigen Wechselwirkungen, Randomisierung und erforderliche Wiederholungen.",
            result:
              "Ein effizienter Versuchsplan, der mit vertretbarem Aufwand belastbare Ursache-Wirkungs-Aussagen ermöglicht.",
            icon:
              "/graphics/solutions-icons/icon-factors.svg",
          },
          {
            id: "lebensdauererprobung",
            title: "Lebensdauererprobung",
            work:
              "Lastkollektive, Raffungsmodelle, Stichprobe, Zensierung und Auswertung werden auf die geforderte Lebensdaueraussage abgestimmt.",
            result:
              "Eine Erprobungs- und Auswertestrategie mit klarer Aussagekraft, Prüfdauer und statistischer Absicherung.",
            icon:
              "/graphics/solutions-icons/icon-evidence-plan.svg",
          },
          {
            id: "felddatenanalyse",
            title: "Felddatenanalyse",
            work:
              "Nutzungsdaten, Population, Laufleistung, Beanstandungen und Ausfallzeiten werden bereinigt, klassifiziert und in einen belastbaren Bezugsrahmen gebracht.",
            result:
              "Eine nachvollziehbare Sicht auf Ausfallverhalten, Betroffenheit und relevante Einflussgrößen im Feld.",
            icon:
              "/graphics/solutions-icons/icon-database.svg",
          },
          {
            id: "prognostik",
            title: "Prognostik",
            work:
              "Geeignete statistische oder physikalisch gestützte Modelle beschreiben den weiteren Verlauf. Modellgrenzen und Prognoseunsicherheit werden ausdrücklich mitbewertet.",
            result:
              "Eine belastbare Prognose zu Lebensdauer, Ausfallwahrscheinlichkeit oder zukünftigem Handlungsbedarf.",
            icon: "/graphics/solutions-icons/icon-model.svg",
          },
        ],
      },
      situations: {
        title: "Wann wir typischerweise unterstützen",
        description:
          "Daten sind besonders wertvoll, wenn bereits vor ihrer Erhebung klar ist, welche Entscheidung sie ermöglichen sollen.",
        items: [
          {
            title: "Zu viele Versuchsvarianten",
            text:
              "Der mögliche Prüfumfang übersteigt Zeit und Budget; ein geeignetes DoE soll relevante Faktoren effizient identifizieren.",
          },
          {
            title: "Unklare Lebensdaueraussage",
            text:
              "Prüfergebnisse liegen vor, aber Stichprobe, Streuung oder Raffungsannahmen erlauben noch keine sichere Einordnung.",
          },
          {
            title: "Feld- und Prüfdaten widersprechen sich",
            text:
              "Unterschiedliche Bezugsgrößen und Nutzungskollektive müssen harmonisiert werden, bevor eine Prognose möglich ist.",
          },
        ],
      },
      deliverables: {
        title: "Was am Ende vorliegt",
        description:
          "Ein durchgängiger Weg von der technischen Frage bis zur nachvollziehbaren Datenaussage.",
        items: [
          {
            title: "Versuchsplan",
            text:
              "Faktoren, Stichprobe, Durchführung und Auswertung passend zur Fragestellung.",
          },
          {
            title: "Auswertbare Datenbasis",
            text:
              "Geprüfte Datenstruktur mit eindeutigen Bezugsgrößen und Qualitätsregeln.",
          },
          {
            title: "Statistisches Modell",
            text:
              "Begründete Modellwahl inklusive Güte, Annahmen und Unsicherheit.",
          },
          {
            title: "Entscheidungsvorlage",
            text:
              "Technische Interpretation der Ergebnisse mit klaren Folgerungen.",
          },
        ],
      },
      knowledge: {
        title: "Fachliche Grundlagen vertiefen",
        description:
          "Mehr zu Versuchsplanung, Erprobung und belastbaren Prognosen in unserem Wissensbereich.",
        links: [
          {
            label: "Design of Experiments",
            href: "/wissen/design-of-experiments",
          },
          { label: "Erprobung", href: "/wissen/erprobung" },
          { label: "Prognosen", href: "/wissen/prognosen" },
        ],
      },
      cta: {
        title: "Welche Entscheidung sollen Ihre Daten ermöglichen?",
        text:
          "Wir prüfen Fragestellung, Datenlage und Versuchsrahmen und definieren daraus ein belastbares Vorgehen.",
      },
    },
    "langfristige-kooperation": {
      slug: "langfristige-kooperation",
      metaTitle: "Engineering-Projektpartnerschaft & Verantwortung | RelTest",
      metaDescription:
        "Feste Engineering-Projektpartnerschaft für Zuverlässigkeit mit definierten Arbeitspaketen, prüfbaren Ergebnissen, Dokumentation und klar geregelter Verantwortung.",
      hero: {
        title: "Engineering-Verantwortung verlässlich in Ihr Projekt integrieren.",
        description:
          "RelTest übernimmt klar definierte Arbeitspakete, liefert prüfbare Ergebnisse und arbeitet als verlässlicher Engineering-Partner über einzelne Analysen hinaus. Umfang, Schnittstellen, Abnahme und Verantwortungsrahmen werden vor Projektbeginn eindeutig vereinbart.",
        image: "/team/engineering-partnership-review-v2.webp",
        imageAlt:
          "Engineering-Team stimmt Arbeitspakete, Schnittstellen und technische Ergebnisse ab",
      },
      topics: {
        title: "Unsere Leistungen in der Projektpartnerschaft",
        description:
          "Die Zusammenarbeit wird so zugeschnitten, dass Aufgaben, Ergebnisse und Verantwortlichkeiten für beide Seiten transparent bleiben und sich sauber in den bestehenden Entwicklungsprozess einfügen.",
        items: [
          {
            id: "engineering-arbeitspakete",
            title: "Engineering-Arbeitspakete",
            work:
              "Wir grenzen Analysen, Bewertungen, Nachweise und operative Unterstützungsleistungen fachlich, zeitlich und organisatorisch klar ab.",
            result:
              "Ein verbindlich beschriebenes Leistungspaket mit Zielen, Terminen, Zuständigkeiten und erwarteten Ergebnissen.",
            icon:
              "/graphics/solutions-icons/icon-handshake.svg",
          },
          {
            id: "schnittstellen-abnahme",
            title: "Schnittstellen & Abnahme",
            work:
              "Eingangsdaten, Mitwirkungspflichten, Übergaben und Abnahmekriterien werden vor dem Start gemeinsam festgelegt und im Projekt aktiv geführt.",
            result:
              "Klare Schnittstellen und überprüfbare Kriterien, mit denen Fortschritt und Ergebnisqualität transparent bewertet werden können.",
            icon:
              "/graphics/solutions-icons/icon-interfaces.svg",
          },
          {
            id: "ergebnisse-dokumentation",
            title: "Ergebnisse & Dokumentation",
            work:
              "Annahmen, Berechnungen, Bewertungen und Entscheidungswege werden nachvollziehbar dokumentiert und für Reviews aufbereitet.",
            result:
              "Prüfbare Engineering-Ergebnisse, die auch nach Projektabschluss als belastbare Entscheidungsgrundlage verfügbar bleiben.",
            icon:
              "/graphics/solutions-icons/icon-evidence-plan.svg",
          },
          {
            id: "verantwortungsrahmen",
            title: "Verantwortungsrahmen",
            work:
              "Wir stimmen ab, welche Verantwortung bei internen Rollen verbleibt und wofür RelTest innerhalb des vereinbarten Leistungsumfangs einsteht.",
            result:
              "Ein vor Projektbeginn eindeutig geregelter Leistungs-, Abnahme- und Haftungsrahmen ohne unklare Erwartungslücken.",
            icon:
              "/graphics/solutions-icons/icon-process-approval.svg",
          },
        ],
      },
      situations: {
        title: "Wann eine feste Projektpartnerschaft sinnvoll ist",
        description:
          "Das Modell eignet sich besonders, wenn Zuverlässigkeit über mehrere Projektphasen hinweg kontinuierlich bearbeitet und verantwortlich dokumentiert werden muss.",
        items: [
          {
            title: "Fehlende Spezialkapazität",
            text:
              "Interne Teams benötigen über einen längeren Zeitraum zusätzliche methodische Kompetenz, ohne eine reine Einzelberatung zu suchen.",
          },
          {
            title: "Abgrenzbares Arbeitspaket",
            text:
              "Analysen, Nachweise oder Absicherungsaufgaben lassen sich mit klaren Ergebnissen, Schnittstellen und Abnahmekriterien beschreiben.",
          },
          {
            title: "Hoher Dokumentationsbedarf",
            text:
              "Technische Entscheidungen müssen für Reviews, Freigaben und spätere Rückfragen konsistent und nachvollziehbar belegt werden.",
          },
        ],
      },
      deliverables: {
        title: "Was am Ende vorliegt",
        description:
          "Eine belastbare Zusammenarbeit mit nachvollziehbaren Ergebnissen statt einer offenen Beratungsleistung ohne klare Übergabe.",
        items: [
          {
            title: "Leistungsbeschreibung",
            text:
              "Abgestimmte Aufgaben, Ziele, Termine und Mitwirkungspflichten.",
          },
          {
            title: "Engineering-Ergebnisse",
            text:
              "Prüfbare Analysen, Bewertungen, Nachweise oder Absicherungspakete.",
          },
          {
            title: "Projektdokumentation",
            text:
              "Nachvollziehbare Annahmen, Entscheidungen, Versionen und Freigabestände.",
          },
          {
            title: "Geregelte Verantwortung",
            text:
              "Eindeutige Abnahme sowie vertraglich vereinbarter Verantwortungs- und Haftungsrahmen.",
          },
        ],
      },
      knowledge: {
        title: "Fachliche Grundlagen vertiefen",
        description:
          "Die Wissensseiten zeigen, wie Planung, Risiko, Erprobung und Nachweis zu belastbaren Projektentscheidungen verbunden werden.",
        links: [
          { label: "Zuverlässigkeitsplanung", href: "/wissen/planung" },
          { label: "Risikomanagement", href: "/wissen/risikomanagement" },
          { label: "Absicherung", href: "/wissen/absicherung" },
        ],
      },
      cta: {
        title: "Welches Engineering-Paket können wir verantwortlich übernehmen?",
        text:
          "Im Erstgespräch klären wir Aufgabe, gewünschtes Ergebnis, Schnittstellen und den passenden vertraglichen Rahmen.",
      },
    },
  },
  en: {
    zuverlaessigkeitstechnik: {
      slug: "zuverlaessigkeitstechnik",
      metaTitle: "Reliability Engineering & Lifetime Assessment | RelTest",
      metaDescription:
        "Reliability planning, lifetime assessment and robust reliability evidence for technical products and systems.",
      hero: {
        title: "Develop reliability on a sound basis from the start.",
        description:
          "RelTest translates real operating conditions into clear reliability targets, evaluates relevant failure mechanisms and develops evidence that fits product maturity and the decision at hand.",
        image: "/team/img-0112.jpg",
        imageAlt:
          "RelTest experts examining a technical component and potential failure mechanisms",
      },
      topics: {
        title: "Our reliability engineering services",
        description:
          "The scope follows the product, its maturity and the available data. Individual modules can address a specific question or form one consistent reliability concept.",
        items: [
          {
            id: "reliability-planning",
            title: "Reliability planning",
            work:
              "We capture loads, use and environmental conditions, derive measurable reliability targets and assign methods, responsibilities and evidence to the relevant development phases.",
            result:
              "An aligned reliability plan with clear targets, work packages, interfaces and decision points.",
            icon:
              "/graphics/solutions-icons/icon-target.svg",
          },
          {
            id: "lifetime-assessment",
            title: "Lifetime assessment",
            work:
              "Component loads, strengths, failure mechanisms as well as test and field data are combined into a traceable lifetime statement.",
            result:
              "An assessed lifetime with documented assumptions, uncertainty and technical limits.",
            icon: "/graphics/solutions-icons/icon-chart.svg",
          },
          {
            id: "reliability-evidence",
            title: "Reliability evidence",
            work:
              "We define the evidence target, sample size, test duration, confidence and acceptance criteria in line with the required statement and available effort.",
            result:
              "Verifiable evidence that supports release decisions from both a technical and documentary perspective.",
            icon:
              "/graphics/solutions-icons/icon-evidence-plan.svg",
          },
          {
            id: "methodological-consulting",
            title: "Methodological consulting",
            work:
              "Existing concepts, calculations and test results are reviewed independently. Together, we determine which method is robust enough for the specific technical question.",
            result:
              "A clear technical recommendation with a justified method selection and defined next steps.",
            icon:
              "/graphics/solutions-icons/icon-process-design.svg",
          },
        ],
      },
      situations: {
        title: "Where we typically support projects",
        description:
          "Reliability becomes most demanding when technical uncertainty and decision pressure increase at the same time.",
        items: [
          {
            title: "New product generation",
            text:
              "Reliability targets and evidence routes must be defined before design and testing create irreversible constraints.",
          },
          {
            title: "Unexpected failures",
            text:
              "Test or field failures need to be understood technically and translated into effective development measures.",
          },
          {
            title: "Release under uncertainty",
            text:
              "Existing data can support a decision only when its validity and limitations have been assessed correctly.",
          },
        ],
      },
      deliverables: {
        title: "What the project delivers",
        description:
          "Not merely a method, but a sound basis for the next product decision.",
        items: [
          {
            title: "Reliability concept",
            text:
              "Targets, methods, roles and evidence in one consistent plan.",
          },
          {
            title: "Assessed lifetime",
            text:
              "Technically justified statement including assumptions and uncertainty.",
          },
          {
            title: "Evidence strategy",
            text:
              "Test and evaluation logic matched to target, maturity and risk.",
          },
          {
            title: "Decision documentation",
            text:
              "Traceable results for reviews, releases and further development.",
          },
        ],
      },
      knowledge: {
        title: "Explore the technical foundations",
        description:
          "Our knowledge pages explain the core relationships independently of a specific service engagement.",
        links: [
          { label: "Reliability planning", href: "/wissen/planung" },
          { label: "Validation", href: "/wissen/absicherung" },
          { label: "Predictions", href: "/wissen/prognosen" },
        ],
      },
      cta: {
        title: "What reliability statement does your project need?",
        text:
          "In an initial conversation, we clarify the technical question, available data and an appropriate scope.",
      },
    },
    risikomanagement: {
      slug: "risikomanagement",
      metaTitle: "Risk Management, FMEA & Technical Assurance | RelTest",
      metaDescription:
        "Assess, prioritise and document technical risks systematically with FMEA, FTA and risk-based assurance strategies.",
      hero: {
        title: "Identify technical risks early and control them effectively.",
        description:
          "RelTest creates a robust connection between risk analysis, technical assessment and concrete assurance. Critical weaknesses are not only documented, but actively addressed.",
        image: "/expertise/lab-review.png",
        imageAlt:
          "Engineering team assessing technical risks and assurance measures",
      },
      topics: {
        title: "Our risk and assurance services",
        description:
          "We focus the analysis on the technical decision ahead, from structured weakness identification to an approved assurance strategy.",
        items: [
          {
            id: "fmea-fta",
            title: "FMEA & FTA",
            work:
              "Functions, failure effects, causes and dependencies are examined from the appropriate perspective. We also review existing analyses for technical depth and usability.",
            result:
              "A structured failure and cause analysis that makes critical relationships understandable.",
            icon:
              "/graphics/solutions-icons/icon-risk-identification.svg",
          },
          {
            id: "risk-assessment",
            title: "Risk assessment",
            work:
              "Risks are assessed based on impact, probability, detectability and available evidence. Uncertain assumptions are made explicit.",
            result:
              "A technically justified prioritisation that directs resources towards the decisive risks.",
            icon:
              "/graphics/solutions-icons/icon-risk-matrix.svg",
          },
          {
            id: "assurance-strategy",
            title: "Assurance strategy",
            work:
              "We derive development measures, analyses and tests from prioritised risks and align them with maturity, cost and schedule.",
            result:
              "An actionable assurance plan with responsibilities, evidence and a clear sequence.",
            icon:
              "/graphics/solutions-icons/icon-measures.svg",
          },
          {
            id: "state-of-the-art",
            title: "State of the art",
            work:
              "Method selection, assessment criteria and documentation are reviewed for technical traceability and suitability in the specific product and project context.",
            result:
              "A documented technical rationale that provides robust support for reviews and later questions.",
            icon:
              "/graphics/solutions-icons/icon-process-approval.svg",
          },
        ],
      },
      situations: {
        title: "Where we typically support projects",
        description:
          "Risk management creates value when analysis, decision and implementation are closely connected.",
        items: [
          {
            title: "New architecture",
            text:
              "Functions and interfaces change, requiring critical failure paths to be understood and prioritised early.",
          },
          {
            title: "Unclear action status",
            text:
              "Extensive FMEAs or risk lists exist, but there is no robust link to tests and development measures.",
          },
          {
            title: "Critical failure",
            text:
              "Following a test or field failure, the cause, consequential risks and required assurance must be assessed transparently.",
          },
        ],
      },
      deliverables: {
        title: "What the project delivers",
        description:
          "A clear view of risk that directs technical work instead of ending with a workshop.",
        items: [
          {
            title: "Risk model",
            text:
              "Structured representation of critical functions, failures and dependencies.",
          },
          {
            title: "Priorities",
            text:
              "Justified ranking based on transparent assessment criteria.",
          },
          {
            title: "Assurance plan",
            text:
              "Aligned measures, tests, responsibilities and timing.",
          },
          {
            title: "Technical rationale",
            text:
              "Documented decisions and evidence for reviews and releases.",
          },
        ],
      },
      knowledge: {
        title: "Explore the technical foundations",
        description:
          "Further guidance on weak points, assurance and technical risk management.",
        links: [
          {
            label: "Weak-point analysis",
            href: "/wissen/schwachstellenanalyse",
          },
          { label: "Validation", href: "/wissen/absicherung" },
          { label: "Risk management", href: "/wissen/risikomanagement" },
        ],
      },
      cta: {
        title: "Which risks does your project need to control next?",
        text:
          "We assess the starting point, decision need and existing analyses, then propose an appropriate scope.",
      },
    },
    "datenanalyse-prognostik": {
      slug: "datenanalyse-prognostik",
      metaTitle: "DoE, Lifetime Testing & Data Analysis | RelTest Solutions",
      metaDescription:
        "Design of Experiments, lifetime testing, field data analysis and prognostics for robust technical decisions.",
      hero: {
        title: "Plan tests so that data enables a clear decision.",
        description:
          "RelTest combines experimental design, statistical evaluation and technical product understanding. This turns test and field data into robust conclusions rather than isolated metrics.",
        image: "/team/home-testbench-review.png",
        imageAlt:
          "RelTest engineers reviewing a test setup and technical measurement data",
      },
      topics: {
        title: "Our testing and data analysis services",
        description:
          "From experimental design to prediction, the technical question remains the starting point. Statistics is applied where it strengthens the conclusion and supports the decision.",
        items: [
          {
            id: "design-of-experiments",
            title: "Design of Experiments",
            work:
              "We define responses, factors and levels, select an appropriate design and account for interactions, randomisation and required repetitions.",
            result:
              "An efficient experimental plan that enables robust cause-and-effect conclusions with reasonable effort.",
            icon:
              "/graphics/solutions-icons/icon-factors.svg",
          },
          {
            id: "lifetime-testing",
            title: "Lifetime testing",
            work:
              "Load profiles, acceleration models, sample size, censoring and evaluation are aligned with the required lifetime statement.",
            result:
              "A testing and evaluation strategy with defined validity, test duration and statistical assurance.",
            icon:
              "/graphics/solutions-icons/icon-evidence-plan.svg",
          },
          {
            id: "field-data-analysis",
            title: "Field data analysis",
            work:
              "Usage data, population, mileage, complaints and failure times are cleaned, classified and placed within a robust reference framework.",
            result:
              "A transparent view of failure behaviour, affected populations and relevant influencing factors in the field.",
            icon:
              "/graphics/solutions-icons/icon-database.svg",
          },
          {
            id: "prognostics",
            title: "Prognostics",
            work:
              "Suitable statistical or physics-informed models describe future behaviour. Model limits and prediction uncertainty are assessed explicitly.",
            result:
              "A robust prediction of lifetime, failure probability or future need for action.",
            icon: "/graphics/solutions-icons/icon-model.svg",
          },
        ],
      },
      situations: {
        title: "Where we typically support projects",
        description:
          "Data is most valuable when the decision it needs to support is clear before collection begins.",
        items: [
          {
            title: "Too many test variants",
            text:
              "The potential test scope exceeds time and budget, and a suitable DoE is needed to identify relevant factors efficiently.",
          },
          {
            title: "Unclear lifetime statement",
            text:
              "Test results exist, but sample size, variation or acceleration assumptions still prevent a robust conclusion.",
          },
          {
            title: "Field and test data disagree",
            text:
              "Different reference quantities and usage populations need to be harmonised before a prediction is possible.",
          },
        ],
      },
      deliverables: {
        title: "What the project delivers",
        description:
          "A consistent path from the technical question to a traceable data-based conclusion.",
        items: [
          {
            title: "Experimental plan",
            text:
              "Factors, sample, execution and evaluation aligned with the question.",
          },
          {
            title: "Analysis-ready data",
            text:
              "Validated data structure with clear reference quantities and quality rules.",
          },
          {
            title: "Statistical model",
            text:
              "Justified model selection including fit, assumptions and uncertainty.",
          },
          {
            title: "Decision report",
            text:
              "Technical interpretation of results with clear implications.",
          },
        ],
      },
      knowledge: {
        title: "Explore the technical foundations",
        description:
          "Learn more about experimental design, testing and robust predictions in our knowledge section.",
        links: [
          {
            label: "Design of Experiments",
            href: "/wissen/design-of-experiments",
          },
          { label: "Testing", href: "/wissen/erprobung" },
          { label: "Predictions", href: "/wissen/prognosen" },
        ],
      },
      cta: {
        title: "What decision should your data enable?",
        text:
          "We review the question, available data and test framework and define a robust approach.",
      },
    },
    "langfristige-kooperation": {
      slug: "langfristige-kooperation",
      metaTitle: "Engineering Project Partnership & Responsibility | RelTest",
      metaDescription:
        "Long-term engineering project partnership for reliability with defined work packages, verifiable results, documentation and clearly agreed responsibility.",
      hero: {
        title: "Integrate accountable engineering support into your project.",
        description:
          "RelTest takes ownership of clearly defined work packages, delivers verifiable results and supports projects beyond isolated analyses. Scope, interfaces, acceptance and responsibility are agreed before the project begins.",
        image: "/team/engineering-partnership-review-v2.webp",
        imageAlt:
          "Engineering team aligning work packages, interfaces and technical results",
      },
      topics: {
        title: "Our project partnership services",
        description:
          "The collaboration is structured so that tasks, results and responsibilities remain transparent for both sides and integrate cleanly into the existing development process.",
        items: [
          {
            id: "engineering-work-packages",
            title: "Engineering work packages",
            work:
              "We define analyses, assessments, evidence and operational support clearly in technical, scheduling and organisational terms.",
            result:
              "A binding scope with clear objectives, dates, responsibilities and expected results.",
            icon:
              "/graphics/solutions-icons/icon-handshake.svg",
          },
          {
            id: "interfaces-acceptance",
            title: "Interfaces & acceptance",
            work:
              "Input data, customer contributions, handovers and acceptance criteria are agreed before the start and actively managed throughout the project.",
            result:
              "Clear interfaces and verifiable criteria for transparent assessment of progress and result quality.",
            icon:
              "/graphics/solutions-icons/icon-interfaces.svg",
          },
          {
            id: "results-documentation",
            title: "Results & documentation",
            work:
              "Assumptions, calculations, assessments and decision paths are documented traceably and prepared for technical reviews.",
            result:
              "Verifiable engineering results that remain available as a robust decision basis after project completion.",
            icon:
              "/graphics/solutions-icons/icon-evidence-plan.svg",
          },
          {
            id: "responsibility-framework",
            title: "Responsibility framework",
            work:
              "We agree which responsibilities remain with internal roles and what RelTest owns within the defined scope of work.",
            result:
              "A clearly agreed scope, acceptance process and liability framework without expectation gaps.",
            icon:
              "/graphics/solutions-icons/icon-process-approval.svg",
          },
        ],
      },
      situations: {
        title: "When a long-term project partnership is valuable",
        description:
          "The model is particularly suitable when reliability needs continuous engineering attention and accountable documentation across several project phases.",
        items: [
          {
            title: "Missing specialist capacity",
            text:
              "Internal teams need additional methodological expertise over an extended period rather than a single consulting intervention.",
          },
          {
            title: "Definable work package",
            text:
              "Analysis, evidence or validation tasks can be described through clear results, interfaces and acceptance criteria.",
          },
          {
            title: "High documentation need",
            text:
              "Technical decisions must be supported consistently and traceably for reviews, releases and later questions.",
          },
        ],
      },
      deliverables: {
        title: "What the project delivers",
        description:
          "A robust collaboration with traceable results rather than an open-ended consulting assignment without a clear handover.",
        items: [
          {
            title: "Scope of work",
            text:
              "Agreed tasks, objectives, dates and required customer contributions.",
          },
          {
            title: "Engineering results",
            text:
              "Verifiable analyses, assessments, evidence or validation packages.",
          },
          {
            title: "Project documentation",
            text:
              "Traceable assumptions, decisions, versions and release states.",
          },
          {
            title: "Agreed responsibility",
            text:
              "Clear acceptance and a contractually agreed responsibility and liability framework.",
          },
        ],
      },
      knowledge: {
        title: "Explore the technical foundations",
        description:
          "Our knowledge pages show how planning, risk, testing and evidence combine into robust project decisions.",
        links: [
          { label: "Reliability planning", href: "/wissen/planung" },
          { label: "Risk management", href: "/wissen/risikomanagement" },
          { label: "Assurance", href: "/wissen/absicherung" },
        ],
      },
      cta: {
        title: "Which engineering package can we take responsibility for?",
        text:
          "In an initial discussion, we clarify the task, expected result, interfaces and an appropriate contractual framework.",
      },
    },
  },
};

export function getSolutionServicePage(
  locale: Locale,
  slug: string,
): SolutionServicePage | undefined {
  return solutionServicePages[locale][slug];
}
