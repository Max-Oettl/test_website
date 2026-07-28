import type { Locale } from "../_i18n/config";

export type DetailLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type DetailPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  visual?: {
    src: string;
    alt: string;
    caption?: string;
  };
  sections: Array<{
    title: string;
    body: string;
  }>;
  proofPointsTitle: string;
  proofPoints: string[];
  ctaTitle: string;
  ctaText: string;
  primaryCta: DetailLink;
  secondaryCta?: DetailLink;
  related?: DetailLink[];
};

export type DetailGroup =
  | "services"
  | "knowledge"
  | "education"
  | "industries"
  | "people"
  | "news"
  | "careers";

const contactLink = { label: "Projekt besprechen", href: "/kontakt" };
const contactLinkEn = { label: "Discuss your project", href: "/kontakt" };

export const detailPageCollections: Record<
  DetailGroup,
  Record<Locale, DetailPage[]>
> = {
  services: {
    de: [
      {
        slug: "zuverlaessigkeitstechnik",
        eyebrow: "Leistung",
        title: "Zuverlässigkeitstechnik für technische Produkte",
        description:
          "RelTest unterstützt Unternehmen dabei, Ausfallrisiken früh zu erkennen, belastbare Nachweise aufzubauen und Entwicklungsentscheidungen technisch abzusichern.",
        metaTitle: "Zuverlässigkeitstechnik Beratung | RelTest Solutions",
        metaDescription:
          "Zuverlässigkeitstechnik für Entwicklung, Erprobung und Absicherung technischer Produkte: Ziele, Tests, Datenanalyse und Nachweisführung.",
        lead:
          "Zuverlässigkeit entsteht nicht am Ende eines Projekts. Sie muss von Anforderungen über Erprobung und Datenanalyse bis zur Serienreife methodisch mitgeführt werden.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Technische Grafik zum Zuverlässigkeitsprozess mit Planung, Analyse, Absicherung, Erprobung und Prognose",
          caption:
            "Zuverlässigkeitstechnik verbindet Anforderungen, Risiken, Tests, Daten und Nachweise zu einem durchgängigen Engineering-Prozess.",
        },
        sections: [
          {
            title: "Vom Risiko zur belastbaren Entscheidung",
            body: "Wir übersetzen technische Risiken in konkrete Anforderungen, Prüfstrategien und Bewertungslogiken. Dadurch wird klar, welche Nachweise wirklich entscheidungsrelevant sind.",
          },
          {
            title: "Methoden mit Produktverständnis",
            body: "Statistische Verfahren, Lebensdauermodelle und Erprobungsdaten werden nicht isoliert betrachtet, sondern mit realen Ausfallmechanismen und Einsatzbedingungen verbunden.",
          },
          {
            title: "Absicherung mit nachvollziehbarer Dokumentation",
            body: "Die Ergebnisse werden so dokumentiert, dass technische Entscheidungen auch später nachvollziehbar bleiben und in Haftungs- oder Freigabefragen belastbar sind.",
          },
          {
            title: "Interdisziplinär statt isoliert",
            body: "Zuverlässigkeitstechnik verbindet Statistik, Wahrscheinlichkeitstheorie, klassische Ingenieurmethoden und Produktverständnis. Genau dadurch werden Ausfälle nicht nur beschrieben, sondern technisch erklärbar und gezielt reduzierbar.",
          },
          {
            title: "Von der Planung bis zur Serienreife",
            body: "Die Arbeit beginnt bei Anforderungen und Lastkollektiven, führt über Schwachstellenanalyse und Erprobung bis zu Prognosen, Freigabeentscheidungen und Felddatenbewertung.",
          },
        ],
        proofPointsTitle: "Typische Ergebnisse",
        proofPoints: [
          "klare Zuverlässigkeitsziele und messbare Nachweiskriterien",
          "priorisierte Ausfallmechanismen und technische Risiken",
          "wirtschaftlich sinnvolle Prüf- und Auswertestrategien",
          "belastbare Entscheidungsgrundlagen für Entwicklung und Freigabe",
        ],
        ctaTitle: "Zuverlässigkeit gezielt absichern",
        ctaText:
          "Wenn ein Produkt zuverlässig funktionieren muss, lohnt sich ein frühes Gespräch über Ziele, Risiken und Nachweise.",
        primaryCta: contactLink,
        secondaryCta: { label: "Wissensbereich ansehen", href: "/wissen" },
        related: [
          { label: "Planung", href: "/wissen/planung" },
          { label: "Erprobung", href: "/wissen/erprobung" },
          { label: "Absicherung", href: "/wissen/absicherung" },
        ],
      },
      {
        slug: "zuverlaessigkeitsmanagement",
        eyebrow: "Leistung",
        title: "Zuverlässigkeitsmanagement entlang des Produktprozesses",
        description:
          "RelTest verbindet Ziele, Methoden, Verantwortlichkeiten und Nachweise zu einem strukturierten Zuverlässigkeitsmanagement.",
        metaTitle: "Zuverlässigkeitsmanagement | Beratung für Entwicklungsprojekte",
        metaDescription:
          "Zuverlässigkeitsmanagement für technische Produkte: Anforderungen, Risiken, Prüfstrategie, Datenbewertung und dokumentierte Nachweisführung.",
        lead:
          "Ein wirksames Zuverlässigkeitsmanagement sorgt dafür, dass Zuverlässigkeit nicht zufällig entsteht, sondern als technische Führungsgröße im Projekt verankert wird.",
        sections: [
          {
            title: "Struktur statt Einzelmaßnahmen",
            body: "Wir helfen, Anforderungen, Tests, Datenanalyse und Freigabeentscheidungen in einem zusammenhängenden Prozess zu steuern.",
          },
          {
            title: "Passend zur Organisation",
            body: "Das Vorgehen wird an Produktreife, Branche, vorhandene Prozesse und verfügbare Daten angepasst, statt ein starres Standardmodell zu übernehmen.",
          },
          {
            title: "Entscheidbarkeit für Projektleitung und Management",
            body: "Technische Bewertungen werden so verdichtet, dass Projektleiter, Einkauf und Geschäftsführung Risiken und Handlungsoptionen verstehen.",
          },
        ],
        proofPointsTitle: "Typische Einsatzfelder",
        proofPoints: [
          "Aufbau oder Verbesserung eines Zuverlässigkeitsprozesses",
          "Review bestehender Absicherungs- und Erprobungsstrategien",
          "Risikobewertung in Entwicklungs- und Serienprojekten",
          "Schnittstelle zwischen Entwicklung, Qualität und Management",
        ],
        ctaTitle: "Zuverlässigkeit steuerbar machen",
        ctaText:
          "Wir prüfen mit Ihnen, welche Prozessbausteine bereits tragfähig sind und wo die größte Hebelwirkung liegt.",
        primaryCta: contactLink,
        secondaryCta: { label: "Prozess ansehen", href: "/prozess" },
        related: [
          { label: "Beratung", href: "/leistungen/beratung" },
          { label: "Risikomanagement", href: "/leistungen/risikomanagement" },
        ],
      },
      {
        slug: "beratung",
        eyebrow: "Leistung",
        title: "Beratung für Zuverlässigkeit, Erprobung und DoE",
        description:
          "Strategische und operative Beratung für Unternehmen, die technische Produkte belastbar entwickeln, prüfen und absichern wollen.",
        metaTitle: "Reliability Engineering Beratung | RelTest Solutions",
        metaDescription:
          "Beratung für Zuverlässigkeitstechnik, Erprobung, DoE und Datenanalyse entlang des gesamten Produktentwicklungsprozesses.",
        lead:
          "RelTest unterstützt nicht nur methodisch, sondern arbeitet an der Schnittstelle aus Produkt, Daten und Projektentscheidung.",
        sections: [
          {
            title: "Beratung entlang des Produktprozesses",
            body: "Von frühen Zuverlässigkeitszielen über Versuchskonzepte bis zur Bewertung von Feld- und Lebensdauerdaten begleiten wir die relevanten technischen Entscheidungen.",
          },
          {
            title: "Fachliche Tiefe ohne Methodensilos",
            body: "DoE, Weibull-Analyse, Lebensdauererprobung, Risikobewertung und technische Dokumentation werden so kombiniert, dass sie im Projekt praktisch nutzbar sind.",
          },
          {
            title: "Entlastung für technische Teams",
            body: "Wir schaffen Struktur, übernehmen Analysen und helfen dabei, Entscheidungen nachvollziehbar gegenüber internen und externen Stakeholdern zu begründen.",
          },
        ],
        proofPointsTitle: "Wobei wir unterstützen",
        proofPoints: [
          "Zuverlässigkeitsziele und Lastkollektive ableiten",
          "Prüfprogramme und DoE-Studien planen",
          "Ausfalldaten statistisch bewerten",
          "technische Risiken und Absicherungsbedarf priorisieren",
        ],
        ctaTitle: "Beratungsbedarf konkretisieren",
        ctaText:
          "In einem Erstgespräch klären wir, ob eine punktuelle Analyse, ein Review oder eine längerfristige Begleitung sinnvoll ist.",
        primaryCta: contactLink,
        secondaryCta: { label: "Leistungen im Überblick", href: "/leistungen" },
        related: [
          { label: "Design of Experiments", href: "/leistungen/design-of-experiments" },
          { label: "Datenanalyse", href: "/leistungen/datenanalyse-prognostik" },
        ],
      },
      {
        slug: "design-of-experiments",
        eyebrow: "Leistung",
        title: "Design of Experiments für effiziente Versuchsplanung",
        description:
          "DoE macht Versuche aussagekräftiger, reduziert unnötige Testschleifen und verbindet Erprobung mit belastbarer statistischer Auswertung.",
        metaTitle: "Design of Experiments DoE Beratung | RelTest Solutions",
        metaDescription:
          "DoE-Beratung, Coaching und Training für statistische Versuchsplanung, effiziente Tests und robuste technische Entscheidungen.",
        lead:
          "Design of Experiments ist kein isoliertes Statistikthema. Richtig eingesetzt ist DoE ein Werkzeug, um technische Zusammenhänge schneller und belastbarer zu verstehen.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "DoE-Grafik mit Einflussfaktoren, Wechselwirkungen, Zielgröße und Robustheitsbewertung",
          caption:
            "DoE strukturiert Versuche so, dass Einflussgrößen, Wechselwirkungen und Streuungen belastbar bewertet werden können.",
        },
        sections: [
          {
            title: "Versuche mit klarer Aussagekraft",
            body: "Wir unterstützen bei Faktorauswahl, Versuchsdesign, Auswertung und Interpretation, damit Tests nicht nur Daten erzeugen, sondern Entscheidungen ermöglichen.",
          },
          {
            title: "DoE im Kontext von Erprobung",
            body: "DoE gehört eng zu Testing, Robustheitsbewertung und Produktoptimierung. Deshalb verbinden wir statistische Planung mit technischem Produktverständnis.",
          },
          {
            title: "Von Beratung bis Befähigung",
            body: "Je nach Bedarf übernehmen wir die Planung, begleiten Teams im Projekt oder schulen Mitarbeitende so, dass DoE intern sicher angewendet werden kann.",
          },
          {
            title: "Statistische Versuchsplanung für Qualität und Robustheit",
            body: "DoE basiert auf empirischen Modellen und hilft, die Variabilität technischer Systeme zu verstehen. Faktoren, Störgrößen und Zielgrößen werden bewusst gewählt, damit Versuche nicht zufällig Erkenntnisse liefern, sondern planbar Aussagen erzeugen.",
          },
          {
            title: "Consulting, Coaching und Training",
            body: "RelTest unterstützt DoE sowohl operativ in Projekten als auch beim Kompetenzaufbau. Unternehmen können konkrete DoE-Fragestellungen auslagern, sich im Projekt coachen lassen oder Teams in Seminaren und Workshops befähigen.",
          },
        ],
        proofPointsTitle: "Typische DoE-Fragen",
        proofPoints: [
          "Welche Einflussgrößen sind wirklich relevant?",
          "Wie viele Versuche sind notwendig und wirtschaftlich?",
          "Wie werden Wechselwirkungen und Streuungen bewertet?",
          "Wie lassen sich Ergebnisse für Entwicklung und Freigabe nutzen?",
        ],
        ctaTitle: "DoE wirksam einsetzen",
        ctaText:
          "Wir helfen, aus Versuchsplanung ein belastbares Engineering-Werkzeug zu machen.",
        primaryCta: contactLink,
        secondaryCta: { label: "DoE-Seminar ansehen", href: "/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung" },
        related: [
          { label: "DoE Consulting", href: "/leistungen/doe-consulting" },
          { label: "DoE Coaching", href: "/leistungen/doe-coaching" },
          { label: "DoE Training", href: "/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung" },
          { label: "Erprobung", href: "/wissen/erprobung" },
          { label: "DoE-Wissen", href: "/wissen/design-of-experiments" },
        ],
      },
      {
        slug: "doe-consulting",
        eyebrow: "Leistung",
        title: "DoE Consulting für konkrete Entwicklungs- und Versuchsprojekte",
        description:
          "Operative Unterstützung bei statistischer Versuchsplanung, Auswertung und Interpretation, wenn interne Kapazitäten oder methodische Sicherheit fehlen.",
        metaTitle: "DoE Consulting | Statistische Versuchsplanung im Projekt",
        metaDescription:
          "DoE Consulting von RelTest: Faktorauswahl, Versuchsdesign, Auswertung, Interpretation und Projektunterstützung für robuste technische Entscheidungen.",
        lead:
          "DoE Consulting ist sinnvoll, wenn ein Versuchsprogramm kurzfristig methodisch sauber aufgebaut oder ein bestehendes Projekt statistisch abgesichert werden soll.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "DoE Consulting Grafik mit Faktoren, Zielgrößen und Versuchsauswertung",
          caption:
            "DoE Consulting verbindet technische Fragestellung, Versuchsdesign, Auswertung und Entscheidung.",
        },
        sections: [
          {
            title: "Unterstützung im laufenden Projekt",
            body: "RelTest hilft, Einflussgrößen, Zielgrößen, Störgrößen und Randbedingungen so zu strukturieren, dass daraus ein belastbares Versuchsdesign entsteht.",
          },
          {
            title: "Auswertung und technische Interpretation",
            body: "Die statistische Analyse wird mit Produktverständnis verbunden. Dadurch werden Haupteffekte, Wechselwirkungen und Streuungen nicht nur berechnet, sondern technisch nutzbar gemacht.",
          },
          {
            title: "Kapazität und Methodensicherheit",
            body: "Wenn interne Teams ausgelastet sind oder DoE-Erfahrung fehlt, kann RelTest Planung, Sparring, Auswertung und Ergebnisaufbereitung übernehmen.",
          },
        ],
        proofPointsTitle: "Leistungen im Überblick",
        proofPoints: [
          "DoE-Fragestellung und Faktorraum definieren",
          "passendes Versuchsdesign auswählen",
          "Versuchsdaten statistisch auswerten",
          "Ergebnisse für Entwicklung und Freigabe interpretieren",
        ],
        ctaTitle: "DoE-Projekt methodisch absichern",
        ctaText:
          "Wir klären, ob Ihr aktuelles Versuchsprogramm durch DoE effizienter, aussagekräftiger oder robuster werden kann.",
        primaryCta: contactLink,
        secondaryCta: { label: "DoE Grundlagen", href: "/wissen/design-of-experiments" },
        related: [
          { label: "DoE Coaching", href: "/leistungen/doe-coaching" },
          { label: "DoE Training", href: "/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung" },
        ],
      },
      {
        slug: "doe-coaching",
        eyebrow: "Leistung",
        title: "DoE Coaching für Teams unter Projektdruck",
        description:
          "Projektbegleitendes Coaching für Teams, die DoE im eigenen Projekt anwenden und gleichzeitig Methodenkompetenz aufbauen wollen.",
        metaTitle: "DoE Coaching | Statistische Versuchsplanung sicher anwenden",
        metaDescription:
          "DoE Coaching für Entwicklungs- und Versuchsteams: Begleitung realer Projekte, Methodenaufbau und sichere Interpretation von Versuchsergebnissen.",
        lead:
          "DoE Coaching verbindet konkrete Projektergebnisse mit Know-how-Aufbau. Das Team lernt die Methode an den eigenen Fragestellungen statt an abstrakten Beispielen.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "DoE Coaching Grafik mit Versuchsraum und Auswertung",
          caption:
            "Coaching macht DoE im echten Projekt anwendbar und baut interne Sicherheit auf.",
        },
        sections: [
          {
            title: "Begleitung an realen Versuchen",
            body: "Wir arbeiten mit Ihrem Team an echten Produkten, Prüfständen, Einflussgrößen und Zielgrößen. Dadurch entsteht sofortiger Projektwert.",
          },
          {
            title: "Methodenverständnis schrittweise aufbauen",
            body: "Faktorauswahl, Designlogik, Randomisierung, Auswertung und Interpretation werden so erklärt, dass das Team die Entscheidungen nachvollziehen und später selbst treffen kann.",
          },
          {
            title: "Zeit sparen und Fehler vermeiden",
            body: "Gerade unter Termindruck hilft Coaching, typische Fehler in Versuchsplanung und Auswertung zu vermeiden, ohne das Projekt in lange Schulungsblöcke zu ziehen.",
          },
        ],
        proofPointsTitle: "Geeignet für",
        proofPoints: [
          "Teams mit laufenden Versuchsprogrammen",
          "DoE-Einstieg anhand realer Produktfragen",
          "Review bestehender Versuchspläne",
          "Sparring bei Interpretation und Ergebnisdarstellung",
        ],
        ctaTitle: "DoE-Kompetenz im Projekt aufbauen",
        ctaText:
          "Wir besprechen, ob Coaching, Consulting oder Training für Ihr Team der beste nächste Schritt ist.",
        primaryCta: contactLink,
        secondaryCta: { label: "DoE Consulting", href: "/leistungen/doe-consulting" },
        related: [
          { label: "DoE Training", href: "/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung" },
          { label: "DoE Wissen", href: "/wissen/design-of-experiments" },
        ],
      },
      {
        slug: "coaching",
        eyebrow: "Leistung",
        title: "Coaching in Reliability Engineering und DoE",
        description:
          "Projektbegleitendes Coaching für Teams, die Methoden nicht nur kennen, sondern sicher im eigenen Entwicklungsalltag anwenden wollen.",
        metaTitle: "Reliability Coaching | RelTest Solutions",
        metaDescription:
          "Coaching für Zuverlässigkeitstechnik, Zuverlässigkeitsmanagement und DoE im konkreten Entwicklungsprojekt.",
        lead:
          "Coaching ist sinnvoll, wenn ein Team vorhandene Methoden direkt an realen Produkten, Daten und Projektentscheidungen anwenden möchte.",
        sections: [
          {
            title: "Begleitung im echten Projekt",
            body: "Wir arbeiten nicht losgelöst in Schulungsbeispielen, sondern an konkreten Fragestellungen aus Entwicklung, Versuch und Qualität.",
          },
          {
            title: "Know-how-Transfer mit Ergebnisverantwortung",
            body: "Das Team lernt die Methode, während gleichzeitig verwertbare Projektergebnisse entstehen.",
          },
          {
            title: "Sicherheit in kritischen Entscheidungen",
            body: "Gerade bei komplexen Datenlagen oder neuen Anforderungen hilft Coaching, methodische Fehler und Fehlinterpretationen zu vermeiden.",
          },
        ],
        proofPointsTitle: "Geeignet für",
        proofPoints: [
          "Einführung von Zuverlässigkeitsmethoden im Team",
          "Review und Begleitung laufender Absicherungsprojekte",
          "DoE-Anwendung an konkreten Versuchsprogrammen",
          "Sparring für Projektleitung und technische Entscheider",
        ],
        ctaTitle: "Coaching passend zum Projekt aufsetzen",
        ctaText:
          "Wir klären gemeinsam, ob ein Workshop, regelmäßiges Sparring oder eine operative Projektbegleitung sinnvoll ist.",
        primaryCta: contactLink,
        secondaryCta: { label: "Weiterbildung ansehen", href: "/weiterbildung" },
      },
      {
        slug: "langfristige-kooperation",
        eyebrow: "Leistung",
        title: "Langfristige Kooperation und Entwicklungsunterstützung",
        description:
          "RelTest übernimmt langfristig Verantwortung für methodische Absicherung, Dokumentation und technische Nachweisführung im Entwicklungsprozess.",
        metaTitle: "Langfristige Reliability Engineering Kooperation | RelTest",
        metaDescription:
          "Langfristige Unterstützung für technische Entwicklungsprojekte: Zuverlässigkeit, Dokumentation, Stand der Technik und belastbare Nachweise.",
        lead:
          "Manche Projekte brauchen mehr als einen Workshop. RelTest kann dauerhaft unterstützen und sicherstellen, dass Zuverlässigkeit nach Stand der Technik entwickelt, bewertet und dokumentiert wird.",
        sections: [
          {
            title: "Verantwortung über einzelne Analysen hinaus",
            body: "Wir begleiten Entscheidungen, halten Methoden konsistent und helfen, Nachweise über den Projektverlauf hinweg nachvollziehbar aufzubauen.",
          },
          {
            title: "Dokumentation als technischer Schutz",
            body: "Eine saubere Entwicklungs- und Nachweisdokumentation hilft nicht nur intern, sondern kann auch in späteren Haftungs- oder Eskalationsfragen wichtig sein.",
          },
          {
            title: "Entlastung für Organisationen",
            body: "Gerade kleinere oder stark ausgelastete Teams profitieren davon, wenn methodische Tiefe zuverlässig extern mitgeführt wird.",
          },
        ],
        proofPointsTitle: "Mögliche Arbeitspakete",
        proofPoints: [
          "laufende Review- und Sparring-Termine",
          "Methodenverantwortung für Zuverlässigkeitsnachweise",
          "Erprobungs- und Datenanalysepakete",
          "technische Dokumentation und Entscheidungsgrundlagen",
        ],
        ctaTitle: "Langfristige Unterstützung planen",
        ctaText:
          "Wir besprechen, welche Verantwortung intern bleiben soll und wo RelTest dauerhaft entlasten kann.",
        primaryCta: contactLink,
        secondaryCta: { label: "Kontakt aufnehmen", href: "/kontakt" },
      },
      {
        slug: "datenanalyse-prognostik",
        eyebrow: "Leistung",
        title: "Datenanalyse, Prognostik und Health Monitoring",
        description:
          "Aus Prüf-, Feld- und Betriebsdaten werden belastbare Aussagen zu Lebensdauer, Ausfallwahrscheinlichkeit und Handlungsbedarf.",
        metaTitle: "Datenanalyse und Prognostik für Zuverlässigkeit | RelTest",
        metaDescription:
          "Analyse von Lebensdauer-, Ausfall- und Felddaten inklusive Prognostik und Health-Monitoring-Konzepten.",
        lead:
          "Daten schaffen nur dann Wert, wenn sie technisch richtig eingeordnet und in robuste Entscheidungen übersetzt werden.",
        visual: {
          src: "/graphics/lifetime-data-model.svg",
          alt: "Grafik zur Lebensdaueranalyse mit Prüfdaten, Felddaten, Modellbildung und Prognose",
          caption:
            "Belastbare Prognosen entstehen aus Datenqualität, passender Modellwahl und transparenter Unsicherheitsbewertung.",
        },
        sections: [
          {
            title: "Von Rohdaten zu Aussagekraft",
            body: "Wir bewerten Datenqualität, Verteilungen, Zensierungen, Streuung und Unsicherheit, bevor daraus Lebensdauer- oder Ausfallprognosen abgeleitet werden.",
          },
          {
            title: "Prognosen mit Unsicherheiten",
            body: "Zuverlässigkeitsprognosen müssen Konfidenzen und Annahmen offenlegen. Genau dadurch werden sie für Entscheidungen belastbar.",
          },
          {
            title: "Health Monitoring als Frühwarnsystem",
            body: "Wenn Betriebsdaten verfügbar sind, können Monitoring-Ansätze helfen, Abweichungen früher zu erkennen und Wartungs- oder Entwicklungsentscheidungen zu stützen.",
          },
        ],
        proofPointsTitle: "Typische Analysen",
        proofPoints: [
          "Weibull- und Lebensdaueranalysen",
          "Ausfallraten und B10-/Bx-Kennwerte",
          "Felddatenbewertung mit unvollständigen Daten",
          "Prognosemodelle und Monitoring-Konzepte",
        ],
        ctaTitle: "Daten belastbar bewerten",
        ctaText:
          "Bringen Sie Ihre Prüf- oder Felddaten mit. Wir klären, welche Aussage daraus seriös abgeleitet werden kann.",
        primaryCta: contactLink,
        secondaryCta: { label: "Prognosen verstehen", href: "/wissen/prognosen" },
      },
      {
        slug: "risikomanagement",
        eyebrow: "Leistung",
        title: "Technisches Risikomanagement in Entwicklungsprojekten",
        description:
          "RelTest macht Risiken sichtbar, priorisierbar und bearbeitbar, bevor sie zu Feldausfällen, Kosten oder Haftungsfragen werden.",
        metaTitle: "Technisches Risikomanagement | RelTest Solutions",
        metaDescription:
          "Risikomanagement für technische Produkte: Ausfallmechanismen, FMEA/FTA, Nachweise, Erprobung und Entscheidungsgrundlagen.",
        lead:
          "Risikomanagement ist dann wirksam, wenn es nicht als Formularübung, sondern als technische Entscheidungslogik verstanden wird.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Grafik zur Verknüpfung von Risikoanalyse, Erprobung, Datenanalyse und Nachweisführung",
          caption:
            "Technisches Risikomanagement wird wirksam, wenn Risiken mit konkreten Ausfallmechanismen und Nachweisen verbunden werden.",
        },
        sections: [
          {
            title: "Risiken technisch verstehen",
            body: "Wir betrachten Lasten, Ausfallmechanismen, Nutzung, Streuung und Nachweisbarkeit gemeinsam, damit Risiken realistisch bewertet werden.",
          },
          {
            title: "Priorisierung statt Scheinsicherheit",
            body: "Nicht jedes Risiko braucht dieselbe Tiefe. Entscheidend ist, die kritischen Punkte zu erkennen und Ressourcen dort einzusetzen, wo sie wirken.",
          },
          {
            title: "Verbindung zu Tests und Nachweisen",
            body: "Risikobewertung, Erprobung und Dokumentation werden miteinander verbunden, sodass Maßnahmen nicht abstrakt bleiben.",
          },
        ],
        proofPointsTitle: "Methodische Bausteine",
        proofPoints: [
          "FMEA, FTA und technische Risiko-Reviews",
          "Ableitung geeigneter Prüf- und Absicherungsmaßnahmen",
          "Bewertung von Restunsicherheiten",
          "Management-taugliche Entscheidungsgrundlagen",
        ],
        ctaTitle: "Risiken früher adressieren",
        ctaText:
          "Ein strukturierter Blick auf technische Risiken spart später oft deutlich mehr Aufwand als er kostet.",
        primaryCta: contactLink,
        secondaryCta: { label: "Mehr zu Risikomanagement", href: "/wissen/risikomanagement" },
      },
    ],
    en: [
      {
        slug: "zuverlaessigkeitstechnik",
        eyebrow: "Service",
        title: "Reliability engineering for technical products",
        description:
          "RelTest helps companies identify failure risks early, build robust evidence and validate development decisions.",
        metaTitle: "Reliability Engineering Consulting | RelTest Solutions",
        metaDescription:
          "Reliability engineering for development, testing and validation of technical products: targets, test strategy, data analysis and evidence.",
        lead:
          "Reliability is not created at the end of a project. It must be managed from requirements and testing through data analysis and production readiness.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Technical graphic showing reliability planning, analysis, validation, testing and prediction",
          caption:
            "Reliability engineering connects requirements, risks, tests, data and evidence into one technical process.",
        },
        sections: [
          {
            title: "From risk to robust decisions",
            body: "We translate technical risks into requirements, test strategies and evaluation logic so that evidence becomes decision-relevant.",
          },
          {
            title: "Methods with product understanding",
            body: "Statistical methods, lifetime models and test data are connected with real failure mechanisms and operating conditions.",
          },
          {
            title: "Validation with traceable documentation",
            body: "Results are documented so that technical decisions remain understandable and defensible later in approval or liability discussions.",
          },
          {
            title: "Interdisciplinary by nature",
            body: "Reliability engineering combines statistics, probability theory, engineering methods and product understanding. This makes failures technically explainable and systematically reducible.",
          },
          {
            title: "From planning to production readiness",
            body: "The work starts with requirements and load collectives, continues through weak-point analysis and testing, and leads to predictions, release decisions and field-data evaluation.",
          },
        ],
        proofPointsTitle: "Typical outcomes",
        proofPoints: [
          "clear reliability targets and measurable acceptance criteria",
          "prioritised failure mechanisms and technical risks",
          "economically sound testing and evaluation strategies",
          "robust decision basis for development and release",
        ],
        ctaTitle: "Validate reliability with confidence",
        ctaText:
          "If a product must perform reliably, early clarity on targets, risks and evidence is essential.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "View knowledge hub", href: "/wissen" },
      },
      {
        slug: "zuverlaessigkeitsmanagement",
        eyebrow: "Service",
        title: "Reliability management across the product process",
        description:
          "RelTest connects objectives, methods, responsibilities and evidence into a structured reliability management approach.",
        metaTitle: "Reliability Management Consulting | RelTest Solutions",
        metaDescription:
          "Reliability management for technical products: requirements, risk, test strategy, data evaluation and documented evidence.",
        lead:
          "Effective reliability management ensures that reliability is not accidental, but actively managed as a technical project objective.",
        sections: [
          {
            title: "Structure instead of isolated actions",
            body: "We help align requirements, testing, data analysis and release decisions into one coherent process.",
          },
          {
            title: "Adapted to the organisation",
            body: "The approach is tailored to product maturity, industry, existing processes and available data rather than copied from a generic model.",
          },
          {
            title: "Decision clarity for projects and management",
            body: "Technical assessments are condensed so project managers, procurement teams and executives can understand risk and options.",
          },
        ],
        proofPointsTitle: "Typical use cases",
        proofPoints: [
          "building or improving a reliability process",
          "reviewing validation and test strategies",
          "risk assessment in development and serial projects",
          "bridging development, quality and management",
        ],
        ctaTitle: "Make reliability manageable",
        ctaText:
          "We identify which process elements are already robust and where the greatest leverage lies.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "View process", href: "/prozess" },
      },
      {
        slug: "beratung",
        eyebrow: "Service",
        title: "Consulting for reliability, testing and DoE",
        description:
          "Strategic and operational consulting for companies that need robust development, testing and validation of technical products.",
        metaTitle: "Reliability Engineering Consulting | RelTest Solutions",
        metaDescription:
          "Consulting for reliability engineering, testing, Design of Experiments and data analysis across the product development process.",
        lead:
          "RelTest supports the practical interface between product, data and project decisions rather than offering isolated methods.",
        sections: [
          {
            title: "Consulting across the product process",
            body: "From early reliability targets to test concepts and field-data evaluation, we support the technical decisions that matter.",
          },
          {
            title: "Depth without method silos",
            body: "DoE, Weibull analysis, lifetime testing, risk assessment and documentation are combined into a practical project approach.",
          },
          {
            title: "Relief for technical teams",
            body: "We create structure, perform analyses and help justify decisions clearly to internal and external stakeholders.",
          },
        ],
        proofPointsTitle: "Where we support",
        proofPoints: [
          "derive reliability targets and load profiles",
          "plan test programmes and DoE studies",
          "evaluate failure data statistically",
          "prioritise technical risk and validation effort",
        ],
        ctaTitle: "Clarify your consulting need",
        ctaText:
          "In an initial conversation we clarify whether a focused analysis, review or long-term support is appropriate.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "View services", href: "/leistungen" },
      },
      {
        slug: "design-of-experiments",
        eyebrow: "Service",
        title: "Design of Experiments for efficient testing",
        description:
          "DoE makes tests more meaningful, reduces unnecessary loops and connects testing with robust statistical evaluation.",
        metaTitle: "Design of Experiments DoE Consulting | RelTest Solutions",
        metaDescription:
          "DoE consulting, coaching and training for statistical test planning, efficient experiments and robust technical decisions.",
        lead:
          "Design of Experiments is not an isolated statistics topic. Used correctly, it helps teams understand technical relationships faster and more reliably.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "DoE graphic showing factors, interactions, response and robustness assessment",
          caption:
            "DoE structures experiments so that factors, interactions and variation can be evaluated reliably.",
        },
        sections: [
          {
            title: "Experiments with clear decision value",
            body: "We support factor selection, design selection, evaluation and interpretation so that tests generate decisions, not just data.",
          },
          {
            title: "DoE as part of testing",
            body: "DoE belongs closely to testing, robustness evaluation and product optimisation. We combine statistical planning with technical understanding.",
          },
          {
            title: "From consulting to enablement",
            body: "Depending on the need, we plan studies, coach teams in projects or train engineers to apply DoE safely.",
          },
          {
            title: "Statistical experimental design for quality and robustness",
            body: "DoE builds empirical models and helps understand system variation. Factors, noise variables and responses are chosen deliberately so experiments create planned evidence rather than accidental findings.",
          },
          {
            title: "Consulting, coaching and training",
            body: "RelTest supports DoE operationally in projects and through competence development. Companies can outsource specific DoE work, receive project coaching or train teams in seminars and workshops.",
          },
        ],
        proofPointsTitle: "Typical DoE questions",
        proofPoints: [
          "Which factors really influence the result?",
          "How many tests are necessary and economical?",
          "How should interactions and variation be evaluated?",
          "How can results support development and release?",
        ],
        ctaTitle: "Use DoE effectively",
        ctaText:
          "We help turn experimental design into a practical engineering tool.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "View DoE training", href: "/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung" },
        related: [
          { label: "DoE consulting", href: "/leistungen/doe-consulting" },
          { label: "DoE coaching", href: "/leistungen/doe-coaching" },
          { label: "DoE training", href: "/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung" },
          { label: "Testing", href: "/wissen/erprobung" },
          { label: "DoE knowledge", href: "/wissen/design-of-experiments" },
        ],
      },
      {
        slug: "doe-consulting",
        eyebrow: "Service",
        title: "DoE consulting for concrete development and test projects",
        description:
          "Operational support for statistical experimental design, evaluation and interpretation when internal capacity or methodological confidence is limited.",
        metaTitle: "DoE Consulting | Statistical Experimental Design",
        metaDescription:
          "DoE consulting by RelTest: factor selection, experimental design, evaluation, interpretation and project support for robust technical decisions.",
        lead:
          "DoE consulting is useful when a test programme must be structured quickly and methodologically, or when an existing project needs statistical validation.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "DoE consulting graphic with factors, responses and experimental evaluation",
          caption:
            "DoE consulting connects the technical question, experimental design, evaluation and decision.",
        },
        sections: [
          {
            title: "Support in running projects",
            body: "RelTest helps structure factors, responses, noise variables and constraints so they become a robust experimental design.",
          },
          {
            title: "Evaluation and technical interpretation",
            body: "Statistical analysis is connected with product understanding so main effects, interactions and variation become technically usable.",
          },
          {
            title: "Capacity and methodological confidence",
            body: "When internal teams are overloaded or DoE experience is limited, RelTest can support planning, sparring, evaluation and result communication.",
          },
        ],
        proofPointsTitle: "Services at a glance",
        proofPoints: [
          "define DoE question and factor space",
          "select a suitable experimental design",
          "evaluate test data statistically",
          "interpret results for development and release",
        ],
        ctaTitle: "Validate your DoE project",
        ctaText:
          "We clarify whether DoE can make your current test programme more efficient, meaningful or robust.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "DoE basics", href: "/wissen/design-of-experiments" },
        related: [
          { label: "DoE coaching", href: "/leistungen/doe-coaching" },
          { label: "DoE training", href: "/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung" },
        ],
      },
      {
        slug: "doe-coaching",
        eyebrow: "Service",
        title: "DoE coaching for teams under project pressure",
        description:
          "Project-based coaching for teams that want to apply DoE in their own project while building internal competence.",
        metaTitle: "DoE Coaching | Apply Statistical Experimental Design Safely",
        metaDescription:
          "DoE coaching for development and test teams: support in real projects, method transfer and reliable interpretation of test results.",
        lead:
          "DoE coaching combines concrete project outcomes with competence building. Teams learn the method on their own questions instead of abstract examples.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "DoE coaching graphic with experimental space and evaluation",
          caption:
            "Coaching makes DoE applicable in real projects and builds internal confidence.",
        },
        sections: [
          {
            title: "Support around real experiments",
            body: "We work with your team on real products, test benches, factors and responses. This creates immediate project value.",
          },
          {
            title: "Build method understanding step by step",
            body: "Factor selection, design logic, randomisation, evaluation and interpretation are explained so the team can understand and later make decisions independently.",
          },
          {
            title: "Save time and avoid errors",
            body: "Especially under time pressure, coaching helps avoid typical mistakes in experimental design and evaluation without turning the project into a long training programme.",
          },
        ],
        proofPointsTitle: "Suitable for",
        proofPoints: [
          "teams with running test programmes",
          "DoE introduction using real product questions",
          "review of existing experimental plans",
          "sparring for interpretation and result communication",
        ],
        ctaTitle: "Build DoE competence in your project",
        ctaText:
          "We discuss whether coaching, consulting or training is the best next step for your team.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "DoE consulting", href: "/leistungen/doe-consulting" },
        related: [
          { label: "DoE training", href: "/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung" },
          { label: "DoE knowledge", href: "/wissen/design-of-experiments" },
        ],
      },
      {
        slug: "coaching",
        eyebrow: "Service",
        title: "Coaching in reliability engineering and DoE",
        description:
          "Project-based coaching for teams that need to apply reliability methods safely in real development work.",
        metaTitle: "Reliability Engineering Coaching | RelTest Solutions",
        metaDescription:
          "Coaching for reliability engineering, reliability management and DoE in concrete development projects.",
        lead:
          "Coaching is useful when teams want to apply methods directly to real products, data and project decisions.",
        sections: [
          {
            title: "Support in real projects",
            body: "We work on concrete issues from development, testing and quality instead of staying in abstract training examples.",
          },
          {
            title: "Knowledge transfer with results",
            body: "Teams learn the method while generating usable project outcomes at the same time.",
          },
          {
            title: "Confidence in critical decisions",
            body: "Especially with complex data or new requirements, coaching helps avoid methodological errors and misinterpretation.",
          },
        ],
        proofPointsTitle: "Suitable for",
        proofPoints: [
          "introducing reliability methods in teams",
          "reviewing ongoing validation projects",
          "applying DoE to real test programmes",
          "sparring for project leads and technical decision-makers",
        ],
        ctaTitle: "Set up coaching around your project",
        ctaText:
          "We clarify whether a workshop, regular sparring or operational project support is the right format.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "View training", href: "/weiterbildung" },
      },
      {
        slug: "langfristige-kooperation",
        eyebrow: "Service",
        title: "Long-term cooperation and development support",
        description:
          "RelTest takes long-term responsibility for methodological validation, documentation and technical evidence in development projects.",
        metaTitle: "Long-term Reliability Engineering Support | RelTest",
        metaDescription:
          "Long-term support for technical development projects: reliability, documentation, state of the art and robust evidence.",
        lead:
          "Some projects need more than a workshop. RelTest can provide ongoing support and ensure that reliability is developed, evaluated and documented according to the state of the art.",
        sections: [
          {
            title: "Responsibility beyond individual analyses",
            body: "We accompany decisions, keep methods consistent and help build traceable evidence over the course of the project.",
          },
          {
            title: "Documentation as technical protection",
            body: "Clean development and validation documentation supports internal decisions and can matter in later escalation or liability questions.",
          },
          {
            title: "Relief for organisations",
            body: "Smaller or heavily loaded teams benefit when methodological depth is reliably provided externally.",
          },
        ],
        proofPointsTitle: "Possible work packages",
        proofPoints: [
          "regular review and sparring sessions",
          "method ownership for reliability evidence",
          "testing and data-analysis packages",
          "technical documentation and decision material",
        ],
        ctaTitle: "Plan long-term support",
        ctaText:
          "We discuss which responsibility should remain internal and where RelTest can provide sustained relief.",
        primaryCta: contactLinkEn,
      },
      {
        slug: "datenanalyse-prognostik",
        eyebrow: "Service",
        title: "Data analysis, prognostics and health monitoring",
        description:
          "Test, field and operating data are translated into robust statements on lifetime, failure probability and action needs.",
        metaTitle: "Reliability Data Analysis and Prognostics | RelTest",
        metaDescription:
          "Analysis of lifetime, failure and field data including prognostics and health-monitoring concepts.",
        lead:
          "Data only creates value when it is technically interpreted correctly and translated into robust decisions.",
        visual: {
          src: "/graphics/lifetime-data-model.svg",
          alt: "Graphic showing lifetime analysis from test data, field data, modelling and prediction",
          caption:
            "Robust predictions depend on data quality, suitable models and transparent uncertainty evaluation.",
        },
        sections: [
          {
            title: "From raw data to evidence",
            body: "We assess data quality, distributions, censoring, variation and uncertainty before deriving lifetime or failure forecasts.",
          },
          {
            title: "Predictions with uncertainty",
            body: "Reliability forecasts must make assumptions and confidence visible. That is what makes them useful for decisions.",
          },
          {
            title: "Health monitoring as early warning",
            body: "Where operating data is available, monitoring concepts can help identify deviations earlier and support maintenance or development decisions.",
          },
        ],
        proofPointsTitle: "Typical analyses",
        proofPoints: [
          "Weibull and lifetime analyses",
          "failure rates and B10/Bx metrics",
          "field-data evaluation with incomplete data",
          "forecast models and monitoring concepts",
        ],
        ctaTitle: "Evaluate data robustly",
        ctaText:
          "Bring your test or field data. We clarify what can be stated responsibly.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "Understand predictions", href: "/wissen/prognosen" },
      },
      {
        slug: "risikomanagement",
        eyebrow: "Service",
        title: "Technical risk management in development projects",
        description:
          "RelTest makes risks visible, prioritised and actionable before they become field failures, cost or liability issues.",
        metaTitle: "Technical Risk Management | RelTest Solutions",
        metaDescription:
          "Risk management for technical products: failure mechanisms, FMEA/FTA, evidence, testing and decision support.",
        lead:
          "Risk management is effective when it is treated not as a formality, but as technical decision logic.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Graphic connecting risk analysis, testing, data analysis and evidence",
          caption:
            "Technical risk management is effective when risks are connected to concrete failure mechanisms and evidence.",
        },
        sections: [
          {
            title: "Understand risks technically",
            body: "We consider loads, failure mechanisms, use cases, variation and evidence together so risk can be assessed realistically.",
          },
          {
            title: "Prioritisation instead of false security",
            body: "Not every risk requires the same depth. The key is to recognise critical issues and focus resources where they matter.",
          },
          {
            title: "Connection to testing and evidence",
            body: "Risk assessment, testing and documentation are connected so measures become concrete and useful.",
          },
        ],
        proofPointsTitle: "Method elements",
        proofPoints: [
          "FMEA, FTA and technical risk reviews",
          "derivation of suitable validation measures",
          "assessment of residual uncertainty",
          "decision material for management",
        ],
        ctaTitle: "Address risks earlier",
        ctaText:
          "A structured view of technical risks often saves far more effort later than it costs upfront.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "Read about risk management", href: "/wissen/risikomanagement" },
      },
    ],
  },
  knowledge: {
    de: [
      {
        slug: "planung",
        eyebrow: "Wissen",
        title: "Zuverlässigkeitsplanung",
        description:
          "Warum Zuverlässigkeit früh geplant werden muss und welche Entscheidungen schon zu Projektbeginn getroffen werden sollten.",
        metaTitle: "Zuverlässigkeitsplanung | Grundlagen und Vorgehen",
        metaDescription:
          "Zuverlässigkeitsplanung verständlich erklärt: Anforderungen, Einsatzbedingungen, Zielwerte, Risiken und Nachweise früh im Projekt definieren.",
        lead:
          "Zuverlässigkeitsplanung schafft den Rahmen, in dem spätere Tests, Analysen und Freigabeentscheidungen überhaupt belastbar werden.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Planungsorientierte Grafik zum Zuverlässigkeitsprozess",
          caption:
            "Frühe Planung entscheidet, welche Anforderungen, Lasten, Risiken und Nachweise später belastbar bewertet werden können.",
        },
        sections: [
          {
            title: "Anforderungen technisch übersetzen",
            body: "Begriffe wie Lebensdauer, Ausfallwahrscheinlichkeit oder Garantiezeit müssen in messbare technische Ziele übersetzt werden.",
          },
          {
            title: "Einsatzbedingungen verstehen",
            body: "Lasten, Nutzung, Umgebung und Streuung entscheiden darüber, welche Nachweise sinnvoll sind und welche Tests zu kurz greifen.",
          },
          {
            title: "Spätere Kosten früh beeinflussen",
            body: "Je früher Zuverlässigkeit geplant wird, desto geringer ist das Risiko teurer Korrekturen in Absicherung, Serie oder Feld.",
          },
          {
            title: "Anforderungsquellen zusammenführen",
            body: "Zuverlässigkeitsplanung berücksichtigt Kundenanforderungen, gesetzliche und sicherheitsrelevante Vorgaben sowie Unternehmens- und Produktstrategie. Erst aus diesem Zusammenspiel entsteht ein Zielsystem, das technisch und wirtschaftlich tragfähig ist.",
          },
          {
            title: "Kosten und Akzeptanz bewusst abwägen",
            body: "Der Entscheidungsspielraum wird durch die Kosten für ein zuverlässiges Produkt, die Kosten mangelnder Zuverlässigkeit und den akzeptablen Produktpreis begrenzt. Eine gute Planung macht diese Zielkonflikte früh sichtbar.",
          },
        ],
        proofPointsTitle: "Wichtige Planungsfragen",
        proofPoints: [
          "Welche Ausfälle sind kritisch?",
          "Welche Lebensdauer- oder Bx-Ziele gelten?",
          "Welche Daten und Tests werden für den Nachweis benötigt?",
          "Welche Unsicherheiten sind akzeptabel?",
        ],
        ctaTitle: "Planung in ein Projekt übersetzen",
        ctaText:
          "RelTest unterstützt dabei, aus Anforderungen eine belastbare Zuverlässigkeitsstrategie zu machen.",
        primaryCta: contactLink,
        secondaryCta: { label: "Beratung ansehen", href: "/leistungen/beratung" },
      },
      {
        slug: "schwachstellenanalyse",
        eyebrow: "Wissen",
        title: "Schwachstellenanalyse",
        description:
          "Wie kritische Bauteile, Lastfälle und Ausfallmechanismen systematisch erkannt und priorisiert werden.",
        metaTitle: "Schwachstellenanalyse in der Zuverlässigkeitstechnik",
        metaDescription:
          "Schwachstellenanalyse für technische Produkte: Ausfallmechanismen, Lastfälle, Daten und Priorisierung vor Feldproblemen erkennen.",
        lead:
          "Schwachstellenanalyse verhindert, dass Prüfprogramme an den eigentlichen Risiken vorbeigehen.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Grafik zur Schwachstellenanalyse im Zuverlässigkeitsprozess",
          caption:
            "Schwachstellenanalyse priorisiert Ausfallmechanismen, bevor Erprobung und Absicherung konkret ausgelegt werden.",
        },
        sections: [
          {
            title: "Ausfallmechanismen statt Symptome",
            body: "Entscheidend ist nicht nur, dass ein Bauteil ausfällt, sondern warum es ausfällt und unter welchen Bedingungen.",
          },
          {
            title: "Daten und Erfahrung kombinieren",
            body: "Konstruktionswissen, Felddaten, Prüfstände, FMEA und Expertenwissen werden gemeinsam betrachtet.",
          },
          {
            title: "Priorität für kritische Punkte",
            body: "Nicht jede Auffälligkeit ist gleich relevant. Eine gute Analyse trennt echte Risiken von Rauschen.",
          },
          {
            title: "FMEA und FTA gezielt einsetzen",
            body: "Qualitative Methoden wie FMEA und Fault Tree Analysis helfen, Fehlerursachen, Fehlerfolgen und kritische Pfade strukturiert zu erfassen. Entscheidend ist, dass die Ergebnisse in konkrete Maßnahmen und Nachweise überführt werden.",
          },
          {
            title: "HALT und frühe Robustheitsbewertung",
            body: "Highly Accelerated Life Tests können helfen, konstruktive Schwachstellen früh sichtbar zu machen. Der Nutzen entsteht aber erst durch die technische Interpretation der Ausfälle und die konsequente Rückführung in Entwicklung und Absicherung.",
          },
        ],
        proofPointsTitle: "Nutzen",
        proofPoints: [
          "zielgerichtetere Erprobung",
          "frühere Erkennung kritischer Ausfallarten",
          "bessere Maßnahmenpriorisierung",
          "weniger Blindleistung in Tests",
        ],
        ctaTitle: "Schwachstellen gezielt analysieren",
        ctaText:
          "Wir helfen, aus technischen Beobachtungen eine klare Risikologik abzuleiten.",
        primaryCta: contactLink,
        secondaryCta: { label: "Risikomanagement", href: "/leistungen/risikomanagement" },
      },
      {
        slug: "absicherung",
        eyebrow: "Wissen",
        title: "Zuverlässigkeitsabsicherung",
        description:
          "Wie Produkte so abgesichert werden, dass technische Nachweise nachvollziehbar, wirtschaftlich und entscheidungsfähig bleiben.",
        metaTitle: "Zuverlässigkeitsabsicherung | Nachweise und Erprobung",
        metaDescription:
          "Zuverlässigkeitsabsicherung erklärt: Prüfstrategie, Nachweise, Dokumentation und Bewertung technischer Unsicherheiten.",
        lead:
          "Absicherung ist mehr als Testen. Sie ist der methodische Nachweis, dass ein Produkt unter relevanten Bedingungen zuverlässig genug ist.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Grafik zur Zuverlässigkeitsabsicherung über den Produktlebenszyklus",
          caption:
            "Absicherung verbindet qualitative und quantitative Methoden mit nachvollziehbarer Nachweisführung.",
        },
        sections: [
          {
            title: "Nachweislogik definieren",
            body: "Zuerst muss klar sein, welche Aussage ein Test oder eine Analyse wirklich liefern soll.",
          },
          {
            title: "Wirtschaftlichkeit berücksichtigen",
            body: "Zu viele Tests verschwenden Ressourcen, zu wenige Tests erzeugen Scheinsicherheit. Gute Absicherung balanciert beides.",
          },
          {
            title: "Dokumentation ernst nehmen",
            body: "Nachweise müssen später nachvollziehbar sein: für Entwicklung, Qualität, Kunden und gegebenenfalls rechtliche Fragen.",
          },
          {
            title: "Qualitative und quantitative Methoden kombinieren",
            body: "Je nach Entwicklungsphase sind Risikoanalysen, Reviews, Erprobung, statistische Auswertung und Lebensdauermodelle unterschiedlich wichtig. Gute Absicherung verbindet diese Bausteine zu einer konsistenten Nachweislogik.",
          },
          {
            title: "Mechanik, Elektronik und Software berücksichtigen",
            body: "Zuverlässigkeitsabsicherung muss zum Produkt passen. Mechanische Ausfallmechanismen, elektronische Alterung und softwarebezogene Fehlerbilder erfordern unterschiedliche Nachweise, dürfen aber nicht isoliert betrachtet werden.",
          },
        ],
        proofPointsTitle: "Bausteine",
        proofPoints: [
          "Zuverlässigkeitsziele und Akzeptanzkriterien",
          "Prüf- und Bewertungsstrategie",
          "statistische Auswertung",
          "technische Nachweisdokumentation",
        ],
        ctaTitle: "Absicherung robust aufbauen",
        ctaText:
          "RelTest unterstützt bei der Frage, welche Nachweise wirklich erforderlich und aussagekräftig sind.",
        primaryCta: contactLink,
        secondaryCta: { label: "Erprobung", href: "/wissen/erprobung" },
      },
      {
        slug: "erprobung",
        eyebrow: "Wissen",
        title: "Zuverlässigkeitserprobung",
        description:
          "Warum Tests nur dann wertvoll sind, wenn sie zur Fragestellung, zum Ausfallmechanismus und zur späteren Entscheidung passen.",
        metaTitle: "Zuverlässigkeitserprobung | Testplanung und Auswertung",
        metaDescription:
          "Zuverlässigkeitserprobung verständlich erklärt: Teststrategie, Lasten, DoE, Lebensdauer, Ausfallmechanismen und Bewertung.",
        lead:
          "Erprobung erzeugt nicht automatisch Sicherheit. Sie muss so geplant sein, dass sie relevante Ausfälle sichtbar macht und belastbare Aussagen ermöglicht.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "Grafik zur Versuchsplanung mit Faktoren, Störgrößen und Zielgrößen",
          caption:
            "Gute Erprobung prüft nicht möglichst viel, sondern die richtigen Lasten, Ausfallmechanismen und Fragestellungen.",
        },
        sections: [
          {
            title: "Fragestellung vor Prüfstand",
            body: "Bevor ein Test startet, muss klar sein, welche Hypothese, welches Risiko oder welcher Nachweis geprüft werden soll.",
          },
          {
            title: "DoE als Werkzeug der Erprobung",
            body: "Statistische Versuchsplanung hilft, Einflussgrößen, Wechselwirkungen und robuste Einstellungen effizient zu untersuchen.",
          },
          {
            title: "Auswertung mit Unsicherheit",
            body: "Testergebnisse enthalten Streuung. Eine seriöse Bewertung zeigt, wie belastbar die Aussage wirklich ist.",
          },
          {
            title: "Reale Nutzung und Lastkollektive abbilden",
            body: "Zuverlässigkeitserprobung muss verstehen, wie Kundinnen und Kunden Produkte tatsächlich nutzen. Temperatur, Schmutz, Feuchtigkeit, Lasten und Nutzungsprofile werden zu repräsentativen Lastkollektiven verdichtet.",
          },
          {
            title: "Erprobung als Bestandteil des Produktlebenszyklus",
            body: "Tests sind nicht nur ein Freigabeschritt am Ende. Sie liefern während Entwicklung, Optimierung und Absicherung kontinuierlich Erkenntnisse über Produktverhalten und Schwachstellen.",
          },
        ],
        proofPointsTitle: "Typische Fragen",
        proofPoints: [
          "Welche Lasten beschleunigen realistisch?",
          "Wie viele Prüflinge werden benötigt?",
          "Welche Ausfallkriterien gelten?",
          "Wie werden zensierte oder unvollständige Daten bewertet?",
        ],
        ctaTitle: "Tests aussagekräftiger machen",
        ctaText:
          "Wir helfen, Erprobung so aufzubauen, dass sie technische Entscheidungen wirklich unterstützt.",
        primaryCta: contactLink,
        secondaryCta: { label: "DoE verstehen", href: "/wissen/design-of-experiments" },
      },
      {
        slug: "prognosen",
        eyebrow: "Wissen",
        title: "Zuverlässigkeitsprognosen",
        description:
          "Wie aus Daten, Modellen und Annahmen belastbare Aussagen über Lebensdauer und Ausfallwahrscheinlichkeit entstehen.",
        metaTitle: "Zuverlässigkeitsprognose | Lebensdauer und Ausfallwahrscheinlichkeit",
        metaDescription:
          "Zuverlässigkeitsprognosen erklärt: Lebensdauer, Ausfallwahrscheinlichkeit, Weibull, Felddaten und Unsicherheit.",
        lead:
          "Prognosen sind keine Glaskugel. Sie sind ein methodischer Umgang mit Daten, Annahmen und Unsicherheit.",
        visual: {
          src: "/graphics/lifetime-data-model.svg",
          alt: "Grafik zur Zuverlässigkeitsprognose aus Prüfdaten, Felddaten und Lebensdauermodellen",
          caption:
            "Prognosen brauchen Daten, Modellverständnis und eine transparente Bewertung der Extrapolationsunsicherheit.",
        },
        sections: [
          {
            title: "Datenqualität zuerst",
            body: "Ohne Verständnis von Datenherkunft, Zensierung und Betriebsbedingungen kann keine belastbare Prognose entstehen.",
          },
          {
            title: "Modelle bewusst wählen",
            body: "Weibull, Exponentialmodelle oder andere Ansätze müssen zum Ausfallverhalten und zur Datenlage passen.",
          },
          {
            title: "Konfidenz sichtbar machen",
            body: "Eine Prognose ist nur hilfreich, wenn auch ihre Unsicherheit kommuniziert wird.",
          },
          {
            title: "Prüf- und Felddaten gemeinsam bewerten",
            body: "Belastbare Prognosen entstehen aus statistisch auswertbaren Daten aus Erprobung, Feld oder Betrieb. Dabei müssen Datenherkunft, Vollständigkeit und Einsatzbedingungen technisch verstanden werden.",
          },
          {
            title: "Extrapolation verantwortungsvoll nutzen",
            body: "Lebensdauermodelle können bekannte Daten gut beschreiben, werden aber oft für Aussagen außerhalb des beobachteten Bereichs genutzt. Genau dort müssen Annahmen, Unsicherheiten und Konfidenzgrenzen sauber offengelegt werden.",
          },
        ],
        proofPointsTitle: "Anwendungsfälle",
        proofPoints: [
          "Lebensdauerabschätzung",
          "Felddatenbewertung",
          "Garantie- und Risikoabschätzung",
          "Entscheidungen zu Testdauer und Stichprobengröße",
        ],
        ctaTitle: "Prognosen seriös nutzen",
        ctaText:
          "RelTest unterstützt bei der Bewertung, welche Prognose mit vorhandenen Daten möglich und verantwortbar ist.",
        primaryCta: contactLink,
        secondaryCta: { label: "Datenanalyse", href: "/leistungen/datenanalyse-prognostik" },
      },
      {
        slug: "design-of-experiments",
        eyebrow: "Wissen",
        title: "Design of Experiments verständlich erklärt",
        description:
          "Was DoE in technischen Entwicklungsprojekten leistet und warum Versuchsplanung ein zentraler Bestandteil guter Erprobung ist.",
        metaTitle: "Design of Experiments DoE erklärt | RelTest",
        metaDescription:
          "DoE Grundlagen für Ingenieure: statistische Versuchsplanung, Einflussfaktoren, Wechselwirkungen und robuste technische Entscheidungen.",
        lead:
          "DoE hilft, mit möglichst wenigen Versuchen möglichst viel über ein technisches System zu lernen.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "Erklärgrafik zu Design of Experiments mit Faktoren, Wechselwirkungen und Zielgrößen",
          caption:
            "DoE reduziert Versuchsschleifen, indem Faktoren und Zielgrößen systematisch statt zufällig untersucht werden.",
        },
        sections: [
          {
            title: "Faktoren und Zielgrößen sauber definieren",
            body: "Gute DoE beginnt mit der Frage, welche Einflussgrößen untersucht und welche Zielgrößen bewertet werden sollen.",
          },
          {
            title: "Wechselwirkungen erkennen",
            body: "Viele technische Effekte entstehen nicht durch einzelne Faktoren, sondern durch deren Kombination. Genau dort ist DoE stark.",
          },
          {
            title: "Robustheit bewerten",
            body: "DoE unterstützt nicht nur Optimierung, sondern auch die Bewertung robuster Einstellungen gegenüber Streuung.",
          },
          {
            title: "Empirische Modelle statt Versuch und Irrtum",
            body: "Statistische Versuchsplanung erzeugt aus geplanten Versuchen empirische Modelle. Dadurch wird erkennbar, welche Einflussgrößen relevant sind und wie stark sie auf Produkt- oder Prozessqualität wirken.",
          },
          {
            title: "Bias und Störgrößen reduzieren",
            body: "Ein gutes Versuchsdesign minimiert systematische Verzerrungen und berücksichtigt Störgrößen. So werden Ergebnisse nicht nur rechnerisch auswertbar, sondern technisch interpretierbar.",
          },
          {
            title: "Breit einsetzbar in technischen Branchen",
            body: "DoE wird unter anderem in Automotive, Maschinenbau, Elektronik, Produktion und Medizintechnik genutzt, wenn Produkte oder Prozesse unter realen Randbedingungen robust funktionieren müssen.",
          },
        ],
        proofPointsTitle: "DoE hilft bei",
        proofPoints: [
          "Reduktion unnötiger Testschleifen",
          "besserer Interpretation von Versuchsdaten",
          "systematischer Produktoptimierung",
          "nachvollziehbarer technischer Argumentation",
        ],
        ctaTitle: "DoE im Projekt einsetzen",
        ctaText:
          "RelTest begleitet DoE von der ersten Fragestellung bis zur Interpretation der Ergebnisse.",
        primaryCta: contactLink,
        secondaryCta: { label: "DoE-Beratung", href: "/leistungen/design-of-experiments" },
      },
      {
        slug: "risikomanagement",
        eyebrow: "Wissen",
        title: "Risikomanagement in der Zuverlässigkeitstechnik",
        description:
          "Warum technische Risiken nicht nur dokumentiert, sondern methodisch verstanden, priorisiert und abgesichert werden müssen.",
        metaTitle: "Risikomanagement und Zuverlässigkeit | RelTest",
        metaDescription:
          "Technisches Risikomanagement erklärt: Ausfallmechanismen, FMEA, FTA, Nachweise, Erprobung und Priorisierung.",
        lead:
          "Gutes Risikomanagement verbindet technische Ursachen, Eintrittswahrscheinlichkeit, Konsequenz und Nachweisbarkeit.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Grafik zum technischen Risikomanagement im Zuverlässigkeitsprozess",
          caption:
            "Risikomanagement verbindet Schwachstellenanalyse, Maßnahmen, Erprobung und Nachweisführung.",
        },
        sections: [
          {
            title: "Risiko ist technisch konkret",
            body: "Ein Risiko ist nicht nur ein Tabellenwert, sondern ein möglicher Ausfallmechanismus in einem realen Nutzungskontext.",
          },
          {
            title: "Methoden sinnvoll kombinieren",
            body: "FMEA, FTA, Erprobung, Datenanalyse und Expertenwissen ergänzen sich, wenn sie auf dieselbe Entscheidung einzahlen.",
          },
          {
            title: "Risikoreduktion nachweisen",
            body: "Maßnahmen müssen nicht nur definiert, sondern auch in ihrer Wirkung überprüft und dokumentiert werden.",
          },
          {
            title: "FMEA, FTA und Nachweise verbinden",
            body: "Methoden wie FMEA und FTA entfalten ihren Wert erst dann vollständig, wenn daraus geeignete Prüfungen, Maßnahmen und Nachweisdokumentation abgeleitet werden.",
          },
        ],
        proofPointsTitle: "Kernfragen",
        proofPoints: [
          "Welche Risiken sind kritisch?",
          "Welche Maßnahmen reduzieren das Risiko wirklich?",
          "Welche Nachweise sind wirtschaftlich sinnvoll?",
          "Welche Restunsicherheit bleibt?",
        ],
        ctaTitle: "Risiken nachvollziehbar steuern",
        ctaText:
          "Wir unterstützen bei technischen Risiko-Reviews und der Ableitung geeigneter Absicherungsmaßnahmen.",
        primaryCta: contactLink,
        secondaryCta: { label: "Risikomanagement als Leistung", href: "/leistungen/risikomanagement" },
      },
    ],
    en: [
      {
        slug: "planung",
        eyebrow: "Knowledge",
        title: "Reliability planning",
        description:
          "Why reliability must be planned early and which decisions should be made at the start of a project.",
        metaTitle: "Reliability Planning | RelTest Solutions",
        metaDescription:
          "Reliability planning explained: requirements, operating conditions, targets, risks and evidence early in the project.",
        lead:
          "Reliability planning creates the framework that makes later testing, analysis and release decisions robust.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Planning-focused graphic of the reliability engineering process",
          caption:
            "Early planning determines which requirements, loads, risks and evidence can be evaluated robustly later.",
        },
        sections: [
          {
            title: "Translate requirements technically",
            body: "Terms such as lifetime, failure probability or warranty period must be translated into measurable technical targets.",
          },
          {
            title: "Understand operating conditions",
            body: "Loads, use, environment and variation determine which evidence is useful and which tests are insufficient.",
          },
          {
            title: "Influence later costs early",
            body: "The earlier reliability is planned, the lower the risk of costly corrections in validation, production or the field.",
          },
          {
            title: "Bring requirement sources together",
            body: "Reliability planning considers customer requirements, legal and safety requirements as well as company and product strategy. Only this combination creates technically and economically viable targets.",
          },
          {
            title: "Balance cost and acceptance",
            body: "Decisions are constrained by the cost of a reliable product, the cost of insufficient reliability and the acceptable product price. Good planning makes these trade-offs visible early.",
          },
        ],
        proofPointsTitle: "Key planning questions",
        proofPoints: [
          "Which failures are critical?",
          "Which lifetime or Bx targets apply?",
          "Which data and tests are needed?",
          "Which uncertainties are acceptable?",
        ],
        ctaTitle: "Translate planning into a project",
        ctaText:
          "RelTest helps turn requirements into a robust reliability strategy.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "View consulting", href: "/leistungen/beratung" },
      },
      {
        slug: "schwachstellenanalyse",
        eyebrow: "Knowledge",
        title: "Weak-point analysis",
        description:
          "How critical components, load cases and failure mechanisms are systematically identified and prioritised.",
        metaTitle: "Weak-point Analysis in Reliability Engineering | RelTest",
        metaDescription:
          "Weak-point analysis for technical products: identify failure mechanisms, load cases, data and priorities before field problems occur.",
        lead:
          "Weak-point analysis prevents test programmes from missing the risks that matter most.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Graphic showing weak-point analysis within the reliability engineering process",
          caption:
            "Weak-point analysis prioritises failure mechanisms before testing and validation are defined.",
        },
        sections: [
          {
            title: "Failure mechanisms instead of symptoms",
            body: "The key question is not only that a component fails, but why it fails and under which conditions.",
          },
          {
            title: "Combine data and experience",
            body: "Design knowledge, field data, test benches, FMEA and expert judgement are considered together.",
          },
          {
            title: "Prioritise critical issues",
            body: "Not every observation matters equally. Good analysis separates real risks from noise.",
          },
          {
            title: "Use FMEA and FTA deliberately",
            body: "Qualitative methods such as FMEA and Fault Tree Analysis help structure causes, effects and critical paths. Their value comes from translating results into concrete actions and evidence.",
          },
          {
            title: "HALT and early robustness evaluation",
            body: "Highly Accelerated Life Tests can reveal design weak points early. The benefit depends on interpreting failures technically and feeding the learnings back into development and validation.",
          },
        ],
        proofPointsTitle: "Benefits",
        proofPoints: [
          "more targeted testing",
          "earlier detection of critical failure modes",
          "better measure prioritisation",
          "less wasted testing effort",
        ],
        ctaTitle: "Analyse weak points systematically",
        ctaText:
          "We help turn technical observations into clear risk logic.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "Risk management", href: "/leistungen/risikomanagement" },
      },
      {
        slug: "absicherung",
        eyebrow: "Knowledge",
        title: "Reliability validation",
        description:
          "How products can be validated so that technical evidence remains traceable, economical and decision-ready.",
        metaTitle: "Reliability Validation | Evidence and Testing",
        metaDescription:
          "Reliability validation explained: test strategy, evidence, documentation and evaluation of technical uncertainty.",
        lead:
          "Validation is more than testing. It is the methodological evidence that a product is reliable enough under relevant conditions.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Graphic showing reliability validation across the product lifecycle",
          caption:
            "Validation connects qualitative and quantitative methods with traceable evidence.",
        },
        sections: [
          {
            title: "Define evidence logic",
            body: "First it must be clear which statement a test or analysis is supposed to deliver.",
          },
          {
            title: "Consider economics",
            body: "Too many tests waste resources, too few create false security. Good validation balances both.",
          },
          {
            title: "Take documentation seriously",
            body: "Evidence must remain traceable for development, quality, customers and potentially legal discussions.",
          },
          {
            title: "Combine qualitative and quantitative methods",
            body: "Depending on the development phase, risk analyses, reviews, testing, statistical evaluation and lifetime models play different roles. Good validation connects them into a consistent evidence logic.",
          },
          {
            title: "Consider mechanics, electronics and software",
            body: "Validation must fit the product. Mechanical failure mechanisms, electronic ageing and software-related failure patterns require different evidence but should not be treated in isolation.",
          },
        ],
        proofPointsTitle: "Building blocks",
        proofPoints: [
          "reliability targets and acceptance criteria",
          "test and evaluation strategy",
          "statistical evaluation",
          "technical evidence documentation",
        ],
        ctaTitle: "Build robust validation",
        ctaText:
          "RelTest supports the question of which evidence is truly necessary and meaningful.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "Testing", href: "/wissen/erprobung" },
      },
      {
        slug: "erprobung",
        eyebrow: "Knowledge",
        title: "Reliability testing",
        description:
          "Why tests only create value when they match the question, failure mechanism and later decision.",
        metaTitle: "Reliability Testing | Test Planning and Evaluation",
        metaDescription:
          "Reliability testing explained: test strategy, loads, DoE, lifetime, failure mechanisms and evaluation.",
        lead:
          "Testing does not automatically create confidence. It must be planned to reveal relevant failures and support robust decisions.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "Graphic showing experimental design with factors, noise variables and responses",
          caption:
            "Good testing does not test as much as possible. It tests the right loads, failure mechanisms and questions.",
        },
        sections: [
          {
            title: "Question before test bench",
            body: "Before testing starts, the hypothesis, risk or evidence objective must be clear.",
          },
          {
            title: "DoE as a testing tool",
            body: "Statistical experimental design helps investigate factors, interactions and robust settings efficiently.",
          },
          {
            title: "Evaluation with uncertainty",
            body: "Test results include variation. A serious evaluation shows how robust the statement really is.",
          },
          {
            title: "Represent real use and load collectives",
            body: "Reliability testing must understand how customers actually use a product. Temperature, dirt, humidity, loads and usage profiles are translated into representative load collectives.",
          },
          {
            title: "Testing as part of the product lifecycle",
            body: "Tests are not only final release gates. During development, optimisation and validation they continuously provide insight into product behaviour and weak points.",
          },
        ],
        proofPointsTitle: "Typical questions",
        proofPoints: [
          "Which loads accelerate realistically?",
          "How many samples are required?",
          "Which failure criteria apply?",
          "How are censored or incomplete data evaluated?",
        ],
        ctaTitle: "Make tests more meaningful",
        ctaText:
          "We help design testing so that it genuinely supports technical decisions.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "Understand DoE", href: "/wissen/design-of-experiments" },
      },
      {
        slug: "prognosen",
        eyebrow: "Knowledge",
        title: "Reliability predictions",
        description:
          "How data, models and assumptions create robust statements about lifetime and failure probability.",
        metaTitle: "Reliability Prediction | Lifetime and Failure Probability",
        metaDescription:
          "Reliability predictions explained: lifetime, failure probability, Weibull, field data and uncertainty.",
        lead:
          "Predictions are not crystal balls. They are a methodological way of handling data, assumptions and uncertainty.",
        visual: {
          src: "/graphics/lifetime-data-model.svg",
          alt: "Graphic showing reliability prediction from test data, field data and lifetime models",
          caption:
            "Predictions require data, model understanding and transparent evaluation of extrapolation uncertainty.",
        },
        sections: [
          {
            title: "Data quality first",
            body: "Without understanding data origin, censoring and operating conditions, no robust prediction is possible.",
          },
          {
            title: "Choose models deliberately",
            body: "Weibull, exponential or other models must fit the failure behaviour and data situation.",
          },
          {
            title: "Make confidence visible",
            body: "A prediction is only useful when its uncertainty is communicated as well.",
          },
          {
            title: "Evaluate test and field data together",
            body: "Robust predictions rely on statistically evaluable test, field or operating data. Data origin, completeness and operating conditions must be technically understood.",
          },
          {
            title: "Use extrapolation responsibly",
            body: "Lifetime models can describe known data well but are often used outside the observed range. That is where assumptions, uncertainty and confidence limits must be disclosed.",
          },
        ],
        proofPointsTitle: "Use cases",
        proofPoints: [
          "lifetime estimation",
          "field-data evaluation",
          "warranty and risk assessment",
          "decisions on test duration and sample size",
        ],
        ctaTitle: "Use predictions responsibly",
        ctaText:
          "RelTest supports the assessment of which prediction is possible and responsible with available data.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "Data analysis", href: "/leistungen/datenanalyse-prognostik" },
      },
      {
        slug: "design-of-experiments",
        eyebrow: "Knowledge",
        title: "Design of Experiments explained",
        description:
          "What DoE contributes to technical development projects and why experimental design is a central part of good testing.",
        metaTitle: "Design of Experiments DoE Explained | RelTest",
        metaDescription:
          "DoE basics for engineers: statistical experimental design, factors, interactions and robust technical decisions.",
        lead:
          "DoE helps teams learn as much as possible about a technical system with as few experiments as practical.",
        visual: {
          src: "/graphics/doe-factor-space.svg",
          alt: "Explanatory graphic for Design of Experiments with factors, interactions and responses",
          caption:
            "DoE reduces unnecessary test loops by investigating factors and responses systematically.",
        },
        sections: [
          {
            title: "Define factors and responses",
            body: "Good DoE starts with the question of which factors are investigated and which responses are evaluated.",
          },
          {
            title: "Identify interactions",
            body: "Many technical effects are not caused by single factors but by their combination. This is where DoE is strong.",
          },
          {
            title: "Evaluate robustness",
            body: "DoE supports not only optimisation, but also robust settings under variation.",
          },
          {
            title: "Empirical models instead of trial and error",
            body: "Statistical experimental design uses planned experiments to create empirical models. This reveals which factors matter and how strongly they influence product or process quality.",
          },
          {
            title: "Reduce bias and noise",
            body: "A good experimental design reduces systematic bias and accounts for noise factors. This makes results technically interpretable, not just statistically computable.",
          },
          {
            title: "Applicable across technical industries",
            body: "DoE is used in automotive, mechanical engineering, electronics, production and medical technology whenever products or processes must remain robust under real conditions.",
          },
        ],
        proofPointsTitle: "DoE supports",
        proofPoints: [
          "fewer unnecessary test loops",
          "better interpretation of test data",
          "systematic product optimisation",
          "traceable technical argumentation",
        ],
        ctaTitle: "Apply DoE in your project",
        ctaText:
          "RelTest accompanies DoE from the first question to the interpretation of results.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "DoE consulting", href: "/leistungen/design-of-experiments" },
      },
      {
        slug: "risikomanagement",
        eyebrow: "Knowledge",
        title: "Risk management in reliability engineering",
        description:
          "Why technical risks must be understood, prioritised and validated rather than merely documented.",
        metaTitle: "Risk Management and Reliability | RelTest",
        metaDescription:
          "Technical risk management explained: failure mechanisms, FMEA, FTA, evidence, testing and prioritisation.",
        lead:
          "Good risk management connects technical causes, probability, consequence and demonstrability.",
        visual: {
          src: "/graphics/reliability-engineering-cycle.svg",
          alt: "Graphic showing technical risk management in the reliability engineering process",
          caption:
            "Risk management connects weak-point analysis, measures, testing and evidence.",
        },
        sections: [
          {
            title: "Risk is technically concrete",
            body: "A risk is not just a table value, but a possible failure mechanism in a real use context.",
          },
          {
            title: "Combine methods sensibly",
            body: "FMEA, FTA, testing, data analysis and expert judgement complement each other when they support the same decision.",
          },
          {
            title: "Demonstrate risk reduction",
            body: "Measures must not only be defined, but also checked and documented in their effect.",
          },
          {
            title: "Connect FMEA, FTA and evidence",
            body: "Methods such as FMEA and FTA create value when their results lead to suitable tests, mitigation actions and evidence documentation.",
          },
        ],
        proofPointsTitle: "Core questions",
        proofPoints: [
          "Which risks are critical?",
          "Which measures actually reduce risk?",
          "Which evidence is economical?",
          "Which residual uncertainty remains?",
        ],
        ctaTitle: "Manage risks traceably",
        ctaText:
          "We support technical risk reviews and the derivation of suitable validation measures.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "Risk management service", href: "/leistungen/risikomanagement" },
      },
    ],
  },
  education: {
    de: [
      {
        slug: "seminare",
        eyebrow: "Weiterbildung",
        title: "Inhouse-Seminare für Zuverlässigkeit und DoE",
        description:
          "Praxisnahe Weiterbildung für Teams, die Methoden direkt an eigenen Produkten und Projektfragen anwenden wollen.",
        metaTitle: "Seminare Zuverlässigkeitstechnik und DoE | RelTest",
        metaDescription:
          "Inhouse-Seminare zu Zuverlässigkeit, Erprobung, Lebensdaueranalyse und DoE für technische Teams.",
        lead:
          "Vor-Ort-Schulungen sind ideal, wenn Wissen gemeinsam im Team aufgebaut und direkt mit realen Fragestellungen verbunden werden soll.",
        sections: [
          {
            title: "Individuell statt Standardfolie",
            body: "Seminare werden an Branche, Produkt, Datenlage und Projektstand angepasst.",
          },
          {
            title: "Methodik mit Praxisbezug",
            body: "Die Inhalte verbinden Zuverlässigkeit, Statistik, Erprobung und technische Beispiele.",
          },
          {
            title: "Schneller Transfer ins Projekt",
            body: "Teilnehmende können eigene Fragen einbringen und die Anwendung direkt diskutieren.",
          },
        ],
        proofPointsTitle: "Mögliche Themen",
        proofPoints: [
          "Zuverlässigkeit und Lebensdauererprobung",
          "Design of Experiments",
          "Lebensdatenanalyse und Weibull",
          "Risikomanagement und Absicherungsstrategie",
        ],
        ctaTitle: "Seminarbedarf besprechen",
        ctaText:
          "Wir stimmen Inhalt, Dauer und Praxisbezug passend zu Ihrem Team ab.",
        primaryCta: contactLink,
        secondaryCta: { label: "RelTest Education ansehen", href: "/weiterbildung/academy" },
      },
      {
        slug: "academy",
        eyebrow: "Weiterbildung",
        title: "RelTest Education für digitales E-Learning",
        description:
          "Ein speziell für Ingenieurinnen und Ingenieure entwickeltes E-Learning-Angebot für Reliability Engineering und DoE.",
        metaTitle: "RelTest Education | E-Learning für Reliability Engineering",
        metaDescription:
          "RelTest Education: digitales E-Learning zu Zuverlässigkeitstechnik, DoE und Lebensdatenanalyse für Ingenieurinnen und Ingenieure.",
        lead:
          "RelTest Education eignet sich für Einzelpersonen und verteilte Teams, die Wissen flexibel, modular und wiederholbar aufbauen möchten.",
        sections: [
          {
            title: "Flexibel lernen",
            body: "Inhalte können unabhängig von Ort und festen Terminen bearbeitet werden.",
          },
          {
            title: "Für technische Zielgruppen entwickelt",
            body: "Der Fokus liegt auf verständlicher Methodik mit direktem Bezug zu Entwicklungs- und Erprobungsfragen.",
          },
          {
            title: "Ergänzung zu Seminaren",
            body: "RelTest Education kann als Einstieg, Vertiefung oder Begleitung zu Inhouse-Schulungen eingesetzt werden.",
          },
        ],
        proofPointsTitle: "Geeignet für",
        proofPoints: [
          "neue Mitarbeitende in technischen Teams",
          "verteilte Entwicklungsorganisationen",
          "methodische Grundlagen vor Projektworkshops",
          "kontinuierlichen Wissensaufbau",
        ],
        ctaTitle: "RelTest Education kennenlernen",
        ctaText:
          "Die externe Education-Seite bietet den direkten Einstieg in das digitale Lernangebot.",
        primaryCta: {
          label: "Zu RelTest Education",
          href: "https://reltest-academy.com/",
          external: true,
        },
        secondaryCta: { label: "Seminar anfragen", href: "/kontakt" },
      },
      {
        slug: "doe-praxisorientierte-statistische-versuchsplanung",
        eyebrow: "Seminar",
        title: "DoE: praxisorientierte statistische Versuchsplanung",
        description:
          "Seminar für technische Teams, die Versuche effizienter planen und statistisch belastbar auswerten wollen.",
        metaTitle: "DoE Seminar | Praxisorientierte statistische Versuchsplanung",
        metaDescription:
          "DoE-Seminar für Ingenieure: Faktoren, Versuchsdesigns, Wechselwirkungen, Auswertung und technische Interpretation.",
        lead:
          "Das Seminar verbindet die Grundlagen statistischer Versuchsplanung mit praktischen Entscheidungen in Entwicklung und Erprobung.",
        sections: [
          {
            title: "Versuchsplanung verstehen",
            body: "Teilnehmende lernen, Faktoren, Zielgrößen und Designs passend zur technischen Frage auszuwählen.",
          },
          {
            title: "Ergebnisse interpretieren",
            body: "Der Schwerpunkt liegt nicht nur auf Berechnung, sondern auf der technischen Bedeutung der Ergebnisse.",
          },
          {
            title: "Direkt anwendbar",
            body: "Praxisbeispiele und Diskussionen sorgen dafür, dass DoE im Arbeitsalltag nutzbar wird.",
          },
        ],
        proofPointsTitle: "Seminarinhalte",
        proofPoints: [
          "Faktoren und Zielgrößen",
          "voll- und teilfaktorielle Versuchspläne",
          "Wechselwirkungen und Robustheit",
          "Auswertung und technische Interpretation",
        ],
        ctaTitle: "DoE-Seminar anfragen",
        ctaText:
          "Wir passen Inhalt und Tiefe an Ihr Team und Ihre Produkte an.",
        primaryCta: contactLink,
        secondaryCta: { label: "DoE-Beratung", href: "/leistungen/design-of-experiments" },
      },
      {
        slug: "zuverlaessigkeit-erprobung-fuer-praktiker",
        eyebrow: "Seminar",
        title: "Zuverlässigkeit und Erprobung für Praktiker",
        description:
          "Seminar für Ingenieurinnen und Ingenieure, die Zuverlässigkeitsanforderungen, Lebensdauererprobung und Auswertung praktisch anwenden möchten.",
        metaTitle: "Seminar Zuverlässigkeit und Erprobung für Praktiker",
        metaDescription:
          "Praxis-Seminar zu Zuverlässigkeit, Lebensdauererprobung, Weibull, Ausfallwahrscheinlichkeit und Testplanung.",
        lead:
          "Das Seminar schlägt die Brücke zwischen Grundlagen der Zuverlässigkeit und konkreten Entscheidungen im Entwicklungsprojekt.",
        sections: [
          {
            title: "Grundlagen greifbar machen",
            body: "Begriffe wie B10, Ausfallrate, Lebensdauer und Vertrauensbereich werden technisch verständlich eingeordnet.",
          },
          {
            title: "Erprobung richtig planen",
            body: "Teilnehmende lernen, wie Tests aus Anforderungen und Ausfallmechanismen abgeleitet werden.",
          },
          {
            title: "Daten bewerten",
            body: "Prüf- und Ausfalldaten werden so interpretiert, dass sie eine Entscheidung unterstützen.",
          },
        ],
        proofPointsTitle: "Seminarinhalte",
        proofPoints: [
          "Zuverlässigkeitsanforderungen",
          "Badewannenkurve und Ausfallmechanismen",
          "Lebensdauer- und Weibull-Auswertung",
          "Prüfplanung und Nachweisführung",
        ],
        ctaTitle: "Praxis-Seminar planen",
        ctaText:
          "Wir stimmen die Schwerpunkte auf Ihre Produkte und Erfahrungsstände ab.",
        primaryCta: contactLink,
        secondaryCta: { label: "Erprobung verstehen", href: "/wissen/erprobung" },
      },
      {
        slug: "entwicklung-absicherung-elektronischer-komponenten",
        eyebrow: "Seminar",
        title: "Entwicklung und Absicherung elektronischer Komponenten",
        description:
          "Weiterbildung für Teams, die elektronische Produkte methodisch entwickeln, erproben und zuverlässig absichern wollen.",
        metaTitle: "Seminar Entwicklung und Absicherung elektronischer Komponenten",
        metaDescription:
          "Seminar zur Absicherung elektronischer Komponenten: Anforderungen, Ausfallmechanismen, Erprobung, Datenanalyse und Nachweise.",
        lead:
          "Elektronische Komponenten stellen besondere Anforderungen an Ausfallmechanismen, Erprobung und Nachweisführung.",
        sections: [
          {
            title: "Spezifische Risiken verstehen",
            body: "Elektronik erfordert einen genauen Blick auf Lasten, Umgebungsbedingungen, Alterung und Nutzungsprofile.",
          },
          {
            title: "Absicherung systematisch planen",
            body: "Das Seminar zeigt, wie Anforderungen, Tests und Datenanalyse verbunden werden.",
          },
          {
            title: "Praxisnah für Entwicklungsteams",
            body: "Die Inhalte werden an typische Fragestellungen aus Entwicklung und Qualitätssicherung angelehnt.",
          },
        ],
        proofPointsTitle: "Fokus",
        proofPoints: [
          "Anforderungen an elektronische Komponenten",
          "Ausfallmechanismen und Belastungen",
          "Erprobungs- und Nachweiskonzepte",
          "Bewertung und Dokumentation",
        ],
        ctaTitle: "Elektronik-Seminar anfragen",
        ctaText:
          "Wir klären, welche technischen Schwerpunkte für Ihr Team relevant sind.",
        primaryCta: contactLink,
        secondaryCta: { label: "Absicherung", href: "/wissen/absicherung" },
      },
    ],
    en: [
      {
        slug: "seminare",
        eyebrow: "Training",
        title: "In-house seminars for reliability and DoE",
        description:
          "Practical training for teams that want to apply methods directly to their own products and project questions.",
        metaTitle: "Reliability Engineering and DoE Seminars | RelTest",
        metaDescription:
          "In-house seminars on reliability engineering, testing, lifetime analysis and DoE for technical teams.",
        lead:
          "On-site training is ideal when knowledge should be built jointly in a team and connected to real technical questions.",
        sections: [
          {
            title: "Individual instead of generic",
            body: "Seminars are adapted to industry, product, data situation and project maturity.",
          },
          {
            title: "Methodology with practical relevance",
            body: "The content connects reliability, statistics, testing and technical examples.",
          },
          {
            title: "Fast transfer into projects",
            body: "Participants can bring their own questions and discuss practical application directly.",
          },
        ],
        proofPointsTitle: "Possible topics",
        proofPoints: [
          "reliability and lifetime testing",
          "Design of Experiments",
          "life data analysis and Weibull",
          "risk management and validation strategy",
        ],
        ctaTitle: "Discuss training needs",
        ctaText:
          "We align content, duration and practical focus with your team.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "View RelTest Education", href: "/weiterbildung/academy" },
      },
      {
        slug: "academy",
        eyebrow: "Training",
        title: "RelTest Education for digital learning",
        description:
          "A digital learning programme developed specifically for engineers in reliability engineering and DoE.",
        metaTitle: "RelTest Education | E-Learning for Reliability Engineering",
        metaDescription:
          "RelTest Education: digital learning on reliability engineering, DoE and life data analysis for engineers.",
        lead:
          "RelTest Education is suitable for individuals and distributed teams who want to build knowledge flexibly and repeatedly.",
        sections: [
          {
            title: "Flexible learning",
            body: "Content can be completed independent of location and fixed seminar dates.",
          },
          {
            title: "Developed for technical audiences",
            body: "The focus is on understandable methodology with direct relevance to development and testing questions.",
          },
          {
            title: "Complement to seminars",
            body: "RelTest Education can be used as an introduction, deepening path or companion to in-house training.",
          },
        ],
        proofPointsTitle: "Suitable for",
        proofPoints: [
          "new employees in technical teams",
          "distributed development organisations",
          "method foundations before project workshops",
          "continuous knowledge development",
        ],
        ctaTitle: "Explore RelTest Education",
        ctaText:
          "The external Education website provides direct access to the digital learning offer.",
        primaryCta: {
          label: "Open RelTest Education",
          href: "https://reltest-academy.com/",
          external: true,
        },
        secondaryCta: { label: "Request seminar", href: "/kontakt" },
      },
      {
        slug: "doe-praxisorientierte-statistische-versuchsplanung",
        eyebrow: "Seminar",
        title: "DoE: practical statistical experimental design",
        description:
          "Seminar for technical teams that want to plan experiments more efficiently and evaluate them robustly.",
        metaTitle: "DoE Seminar | Practical Statistical Experimental Design",
        metaDescription:
          "DoE seminar for engineers: factors, experimental designs, interactions, evaluation and technical interpretation.",
        lead:
          "The seminar connects the foundations of statistical experimental design with practical decisions in development and testing.",
        sections: [
          {
            title: "Understand experimental design",
            body: "Participants learn to select factors, responses and designs that fit the technical question.",
          },
          {
            title: "Interpret results",
            body: "The focus is not only on calculation, but on the technical meaning of the results.",
          },
          {
            title: "Directly applicable",
            body: "Practical examples and discussions make DoE usable in daily engineering work.",
          },
        ],
        proofPointsTitle: "Seminar content",
        proofPoints: [
          "factors and responses",
          "full and fractional factorial designs",
          "interactions and robustness",
          "evaluation and technical interpretation",
        ],
        ctaTitle: "Request a DoE seminar",
        ctaText:
          "We adapt content and depth to your team and products.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "DoE consulting", href: "/leistungen/design-of-experiments" },
      },
      {
        slug: "zuverlaessigkeit-erprobung-fuer-praktiker",
        eyebrow: "Seminar",
        title: "Reliability and testing for practitioners",
        description:
          "Seminar for engineers who want to apply reliability requirements, lifetime testing and evaluation in practice.",
        metaTitle: "Reliability and Testing Seminar for Practitioners",
        metaDescription:
          "Practical seminar on reliability, lifetime testing, Weibull, failure probability and test planning.",
        lead:
          "The seminar bridges reliability fundamentals and concrete decisions in development projects.",
        sections: [
          {
            title: "Make fundamentals tangible",
            body: "Terms such as B10, failure rate, lifetime and confidence interval are placed into technical context.",
          },
          {
            title: "Plan testing correctly",
            body: "Participants learn how tests are derived from requirements and failure mechanisms.",
          },
          {
            title: "Evaluate data",
            body: "Test and failure data are interpreted so that they support a decision.",
          },
        ],
        proofPointsTitle: "Seminar content",
        proofPoints: [
          "reliability requirements",
          "bathtub curve and failure mechanisms",
          "lifetime and Weibull evaluation",
          "test planning and evidence",
        ],
        ctaTitle: "Plan a practical seminar",
        ctaText:
          "We align the focus with your products and experience level.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "Understand testing", href: "/wissen/erprobung" },
      },
      {
        slug: "entwicklung-absicherung-elektronischer-komponenten",
        eyebrow: "Seminar",
        title: "Development and validation of electronic components",
        description:
          "Training for teams that want to develop, test and validate electronic products methodically.",
        metaTitle: "Seminar Development and Validation of Electronic Components",
        metaDescription:
          "Seminar on validation of electronic components: requirements, failure mechanisms, testing, data analysis and evidence.",
        lead:
          "Electronic components create specific requirements for failure mechanisms, testing and evidence.",
        sections: [
          {
            title: "Understand specific risks",
            body: "Electronics require a precise view of loads, environmental conditions, ageing and usage profiles.",
          },
          {
            title: "Plan validation systematically",
            body: "The seminar shows how requirements, tests and data analysis are connected.",
          },
          {
            title: "Practical for development teams",
            body: "The content is aligned with typical questions from development and quality assurance.",
          },
        ],
        proofPointsTitle: "Focus",
        proofPoints: [
          "requirements for electronic components",
          "failure mechanisms and loads",
          "test and evidence concepts",
          "evaluation and documentation",
        ],
        ctaTitle: "Request electronics training",
        ctaText:
          "We clarify which technical focus is relevant for your team.",
        primaryCta: contactLinkEn,
        secondaryCta: { label: "Validation", href: "/wissen/absicherung" },
      },
    ],
  },
  industries: {
    de: [
      {
        slug: "automotive",
        eyebrow: "Branche",
        title: "Zuverlässigkeit für Automotive-Projekte",
        description:
          "Automotive-Projekte verlangen belastbare Absicherung, klare Dokumentation und wirtschaftliche Prüfstrategien.",
        metaTitle: "Zuverlässigkeit Automotive | RelTest Solutions",
        metaDescription:
          "Reliability Engineering für Automotive: Erprobung, Absicherung, DoE, Lebensdaueranalyse und Nachweisführung.",
        lead:
          "Im Automotive-Umfeld treffen hohe Stückzahlen, Sicherheitsanforderungen und enge Entwicklungszyklen aufeinander.",
        sections: [
          {
            title: "Absicherung unter Zeitdruck",
            body: "RelTest hilft, Tests und Nachweise so zu planen, dass sie belastbar und dennoch wirtschaftlich bleiben.",
          },
          {
            title: "Daten richtig bewerten",
            body: "Prüf-, Feld- und Lebensdauerdaten werden methodisch eingeordnet und für Entscheidungen nutzbar gemacht.",
          },
        ],
        proofPointsTitle: "Relevante Themen",
        proofPoints: [
          "Lebensdauererprobung",
          "DoE und Robustheit",
          "Felddatenanalyse",
          "technische Nachweisdokumentation",
        ],
        ctaTitle: "Automotive-Projekt besprechen",
        ctaText:
          "Wir unterstützen bei Entwicklungs-, Absicherungs- und Verbesserungsprojekten.",
        primaryCta: contactLink,
        secondaryCta: { label: "Leistungen ansehen", href: "/leistungen" },
      },
      {
        slug: "maschinenbau",
        eyebrow: "Branche",
        title: "Zuverlässigkeit im Maschinenbau",
        description:
          "Maschinenbauprodukte brauchen robuste Lebensdauer, nachvollziehbare Auslegung und belastbare Datenbewertung.",
        metaTitle: "Zuverlässigkeit Maschinenbau | RelTest Solutions",
        metaDescription:
          "Zuverlässigkeitstechnik im Maschinenbau: Lebensdauer, Erprobung, Schwachstellenanalyse und technische Absicherung.",
        lead:
          "Im Maschinenbau sind Ausfälle oft teuer, sichtbar und eng mit Lasten, Verschleiß und Nutzung verbunden.",
        sections: [
          {
            title: "Mechanische Ausfallmechanismen verstehen",
            body: "Wir verbinden technische Ursachenanalyse mit Prüf- und Datenstrategien.",
          },
          {
            title: "Nachweise wirtschaftlich planen",
            body: "Lebensdauer- und Zuverlässigkeitsnachweise werden an Produkt und Einsatzbedingungen angepasst.",
          },
        ],
        proofPointsTitle: "Relevante Themen",
        proofPoints: [
          "Verschleiß und Lebensdauer",
          "Schwachstellenanalyse",
          "Weibull- und Lebensdatenanalyse",
          "Erprobungsstrategie",
        ],
        ctaTitle: "Maschinenbau-Projekt einordnen",
        ctaText:
          "Wir klären, welche Nachweise für Produkt, Kunde und Freigabe sinnvoll sind.",
        primaryCta: contactLink,
      },
      {
        slug: "elektronische-produkte",
        eyebrow: "Branche",
        title: "Zuverlässigkeit elektronischer Produkte",
        description:
          "Elektronische Produkte erfordern eine saubere Verbindung von Umweltbelastung, Alterung, Erprobung und Datenanalyse.",
        metaTitle: "Zuverlässigkeit elektronischer Produkte | RelTest",
        metaDescription:
          "Reliability Engineering für elektronische Produkte: Absicherung, Ausfallmechanismen, Erprobung und Lebensdauerbewertung.",
        lead:
          "Elektronik bringt eigene Ausfallmechanismen, Belastungsprofile und Nachweisfragen mit.",
        sections: [
          {
            title: "Ausfallmechanismen einordnen",
            body: "Temperatur, Feuchte, Zyklen, Nutzung und Bauteilstreuung müssen gemeinsam betrachtet werden.",
          },
          {
            title: "Erprobung gezielt ausrichten",
            body: "Prüfungen werden so geplant, dass sie relevante Mechanismen adressieren und nicht nur Standardtests erfüllen.",
          },
        ],
        proofPointsTitle: "Relevante Themen",
        proofPoints: [
          "Umwelterprobung",
          "Lebensdauer und Alterung",
          "DoE für Einflussgrößen",
          "Nachweisführung für Kundenanforderungen",
        ],
        ctaTitle: "Elektronik zuverlässig absichern",
        ctaText:
          "Wir unterstützen bei methodischer Planung und Auswertung.",
        primaryCta: contactLink,
      },
      {
        slug: "halbleiterindustrie",
        eyebrow: "Branche",
        title: "Zuverlässigkeit für die Halbleiterindustrie",
        description:
          "Halbleiternahe Produkte und Prozesse erfordern stabile Qualität, belastbare Datenbewertung und eine saubere methodische Absicherung.",
        metaTitle: "Zuverlässigkeit Halbleiterindustrie | RelTest Solutions",
        metaDescription:
          "Reliability Engineering für die Halbleiterindustrie: Prozessstabilität, Ausfallmechanismen, Prüfstrategie, Datenanalyse und Nachweisführung.",
        lead:
          "In der Halbleiterindustrie treffen hohe Qualitätsanforderungen, enge Prozessfenster und datenintensive Entscheidungen aufeinander.",
        visual: {
          src: "/expertise/decision-dashboard.png",
          alt: "Technisches Meeting mit Zuverlässigkeitsdaten, Risikomatrix und Projektplanung",
          caption:
            "Halbleiternahe Projekte profitieren von klarer Testplanung, strukturierter Datenbewertung und nachvollziehbarer technischer Argumentation.",
        },
        sections: [
          {
            title: "Prozess- und Produktstreuung einordnen",
            body: "RelTest unterstützt dabei, Streuung, Einflussgrößen und Ausfallmechanismen methodisch zu betrachten und daraus belastbare nächste Schritte abzuleiten.",
          },
          {
            title: "Tests und Daten entscheidbar machen",
            body: "Prüfstrategien, DoE, Lebensdauerbewertung und Datenanalyse werden so kombiniert, dass technische Entscheidungen nachvollziehbar und wirtschaftlich bleiben.",
          },
        ],
        proofPointsTitle: "Relevante Themen",
        proofPoints: [
          "DoE und Einflussgrößenanalyse",
          "Datenanalyse und Prozessverständnis",
          "Ausfallmechanismen und Risikobewertung",
          "technische Nachweisführung",
        ],
        ctaTitle: "Halbleiter-Projekt einordnen",
        ctaText:
          "Wir klären, welche Zuverlässigkeitsfragen, Daten und Nachweise für Ihr Projekt entscheidend sind.",
        primaryCta: contactLink,
        secondaryCta: { label: "Leistungen ansehen", href: "/leistungen" },
      },
      {
        slug: "erneuerbare-energien",
        eyebrow: "Branche",
        title: "Zuverlässigkeit für erneuerbare Energien",
        description:
          "Komponenten in erneuerbaren Energien müssen über lange Laufzeiten unter wechselnden Bedingungen funktionieren.",
        metaTitle: "Zuverlässigkeit erneuerbare Energien | RelTest",
        metaDescription:
          "Zuverlässigkeitstechnik für erneuerbare Energien: Lebensdauer, Feldbedingungen, Ausfallmechanismen und Prognosen.",
        lead:
          "Lange Einsatzzeiten, hohe Umweltbelastung und schwer zugängliche Systeme machen Zuverlässigkeit besonders relevant.",
        sections: [
          {
            title: "Lebensdauer realistisch bewerten",
            body: "Betriebsprofile, Lastwechsel und Umweltbedingungen fließen in Bewertung und Erprobung ein.",
          },
          {
            title: "Feld- und Prüfdaten verbinden",
            body: "Prüfstandsdaten und Felderfahrung werden gemeinsam genutzt, um Risiken früh zu erkennen.",
          },
        ],
        proofPointsTitle: "Relevante Themen",
        proofPoints: [
          "Lebensdauerprognosen",
          "Felddatenanalyse",
          "Risikobewertung",
          "Prüfstrategie",
        ],
        ctaTitle: "Zuverlässigkeit langfristig denken",
        ctaText:
          "Wir helfen, Lebensdauer und Risiko methodisch zu bewerten.",
        primaryCta: contactLink,
      },
      {
        slug: "konsumgueter",
        eyebrow: "Branche",
        title: "Zuverlässigkeit für Konsumgüter",
        description:
          "Konsumgüter müssen unter vielfältiger Nutzung robust funktionieren und trotzdem wirtschaftlich entwickelt werden.",
        metaTitle: "Zuverlässigkeit Konsumgüter | RelTest",
        metaDescription:
          "Reliability Engineering für Konsumgüter: Nutzung, Belastung, Tests, Ausfalldaten und Produktverbesserung.",
        lead:
          "Bei Konsumgütern entsteht Zuverlässigkeit aus realistischem Nutzungsverständnis und wirtschaftlicher Absicherung.",
        sections: [
          {
            title: "Nutzung realistisch abbilden",
            body: "Unterschiedliche Anwender, Lasten und Umgebungen beeinflussen Ausfallverhalten und Testplanung.",
          },
          {
            title: "Verbesserungen gezielt priorisieren",
            body: "Daten und Schwachstellenanalyse helfen, Maßnahmen mit größtem Nutzen zu identifizieren.",
          },
        ],
        proofPointsTitle: "Relevante Themen",
        proofPoints: [
          "Nutzungsprofile",
          "Ausfalldatenbewertung",
          "Prüfplanung",
          "Produktverbesserung",
        ],
        ctaTitle: "Robustheit wirtschaftlich verbessern",
        ctaText:
          "Wir unterstützen bei Analyse, Testplanung und Maßnahmenbewertung.",
        primaryCta: contactLink,
      },
      {
        slug: "luft-und-raumfahrt",
        eyebrow: "Branche",
        title: "Zuverlässigkeit für Luft- und Raumfahrt",
        description:
          "In der Luft- und Raumfahrt sind Nachvollziehbarkeit, Risikobewertung und robuste Nachweise besonders kritisch.",
        metaTitle: "Zuverlässigkeit Luft- und Raumfahrt | RelTest",
        metaDescription:
          "Reliability Engineering für Luft- und Raumfahrt: Risiko, Absicherung, Dokumentation und technische Nachweise.",
        lead:
          "Hohe Anforderungen an Sicherheit und Dokumentation verlangen eine besonders saubere methodische Arbeitsweise.",
        sections: [
          {
            title: "Risiken belastbar bewerten",
            body: "Technische Risiken werden priorisiert und mit geeigneten Nachweisen verbunden.",
          },
          {
            title: "Dokumentation als Kernleistung",
            body: "Entscheidungen und Annahmen müssen transparent und später nachvollziehbar bleiben.",
          },
        ],
        proofPointsTitle: "Relevante Themen",
        proofPoints: [
          "Risikomanagement",
          "Nachweisführung",
          "Lebensdauerbewertung",
          "Review von Absicherungsstrategien",
        ],
        ctaTitle: "Anspruchsvolle Nachweise planen",
        ctaText:
          "Wir unterstützen bei methodischer Struktur und technischer Argumentation.",
        primaryCta: contactLink,
      },
      {
        slug: "medizintechnik",
        eyebrow: "Branche",
        title: "Zuverlässigkeit in der Medizintechnik",
        description:
          "Medizintechnische Produkte benötigen nachvollziehbare Risiken, robuste Nachweise und hohe technische Verlässlichkeit.",
        metaTitle: "Zuverlässigkeit Medizintechnik | RelTest",
        metaDescription:
          "Zuverlässigkeitstechnik für Medizintechnik: Risikobewertung, Erprobung, Nachweise und technische Dokumentation.",
        lead:
          "In der Medizintechnik sind technische Qualität, Dokumentation und Risikobewertung eng miteinander verbunden.",
        sections: [
          {
            title: "Nachweise nachvollziehbar aufbauen",
            body: "Zuverlässigkeitsnachweise müssen technisch belastbar und sauber dokumentiert sein.",
          },
          {
            title: "Risiken früh sichtbar machen",
            body: "Ausfallmechanismen, Nutzung und Folgen werden strukturiert betrachtet.",
          },
        ],
        proofPointsTitle: "Relevante Themen",
        proofPoints: [
          "technische Risikoanalyse",
          "Erprobungsstrategie",
          "Lebensdauerbewertung",
          "Dokumentation",
        ],
        ctaTitle: "Medizintechnik-Projekt prüfen",
        ctaText:
          "Wir helfen, technische Risiken und Nachweise strukturiert zu bewerten.",
        primaryCta: contactLink,
      },
      {
        slug: "produktionstechnik",
        eyebrow: "Branche",
        title: "Zuverlässigkeit in der Produktionstechnik",
        description:
          "Produktionssysteme und Komponenten brauchen robuste Verfügbarkeit, geringe Ausfallkosten und belastbare Datenbewertung.",
        metaTitle: "Zuverlässigkeit Produktionstechnik | RelTest",
        metaDescription:
          "Reliability Engineering für Produktionstechnik: Verfügbarkeit, Ausfallanalyse, Lebensdauer, Daten und Maßnahmen.",
        lead:
          "In der Produktionstechnik wirken sich Ausfälle direkt auf Verfügbarkeit, Qualität und Kosten aus.",
        sections: [
          {
            title: "Ausfälle wirtschaftlich bewerten",
            body: "Technische Ursachen werden mit Ausfallfolgen, Stillstand und Maßnahmen priorisiert.",
          },
          {
            title: "Daten für Verbesserungen nutzen",
            body: "Betriebs- und Ausfalldaten können helfen, kritische Komponenten und Verbesserungshebel zu erkennen.",
          },
        ],
        proofPointsTitle: "Relevante Themen",
        proofPoints: [
          "Verfügbarkeitsbewertung",
          "Ausfall- und Felddatenanalyse",
          "Schwachstellenanalyse",
          "Lebensdauerprognose",
        ],
        ctaTitle: "Produktionsrisiken reduzieren",
        ctaText:
          "Wir unterstützen bei Analyse, Bewertung und Maßnahmenableitung.",
        primaryCta: contactLink,
      },
    ],
    en: [],
  },
  people: {
    de: [
      {
        slug: "kevin-lucan",
        eyebrow: "Über uns",
        title: "Dr.-Ing. Kevin Lucan",
        description:
          "Geschäftsführer von RelTest Solutions und Ansprechpartner für Reliability Engineering, Erprobung und technische Projektbegleitung.",
        metaTitle: "Dr.-Ing. Kevin Lucan | RelTest Solutions",
        metaDescription:
          "Dr.-Ing. Kevin Lucan, Geschäftsführer von RelTest Solutions: Reliability Engineering, Erprobung, DoE und technische Beratung.",
        lead:
          "Persönlicher Kontakt ist in Beratungsprojekten wichtig. Kevin Lucan steht für die Verbindung aus technischer Tiefe, klarer Kommunikation und pragmatischer Projektarbeit.",
        sections: [
          {
            title: "Technische Perspektive",
            body: "Der Fokus liegt auf Zuverlässigkeit, Erprobung, Datenanalyse und belastbaren Entwicklungsentscheidungen.",
          },
          {
            title: "Podcast als persönlicher Einstieg",
            body: "Über den Ingenieurshelden-Podcast erhalten Interessierte einen Eindruck von Haltung, Werdegang und technischer Denkweise.",
          },
        ],
        proofPointsTitle: "Themen",
        proofPoints: [
          "Reliability Engineering",
          "Versuchsplanung und DoE",
          "Lebensdauer- und Datenanalyse",
          "Projektbegleitung und Beratung",
        ],
        ctaTitle: "Gespräch mit RelTest starten",
        ctaText:
          "Für Projekt- oder Schulungsanfragen ist der Kontaktbereich der schnellste Einstieg.",
        primaryCta: contactLink,
        secondaryCta: {
          label: "Podcast anhören",
          href: "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan",
          external: true,
        },
      },
      {
        slug: "bernd-bertsche",
        eyebrow: "Über uns",
        title: "Prof. Dr.-Ing. Bernd Bertsche",
        description:
          "Fachliche Autorität im Bereich Zuverlässigkeitstechnik und Mitautor des Springer-Fachbuchs zur Zuverlässigkeit im Fahrzeug- und Maschinenbau.",
        metaTitle: "Prof. Dr.-Ing. Bernd Bertsche | RelTest Solutions",
        metaDescription:
          "Prof. Dr.-Ing. Bernd Bertsche: fachliche Expertise zu Zuverlässigkeitstechnik, Fahrzeug- und Maschinenbau.",
        lead:
          "Die Verbindung aus wissenschaftlicher Tiefe und industrieller Anwendung ist ein wichtiges Vertrauenssignal für RelTest.",
        sections: [
          {
            title: "Fachliche Substanz",
            body: "Das Springer-Fachbuch zur Zuverlässigkeit im Fahrzeug- und Maschinenbau ist ein sichtbarer Beleg der methodischen Tiefe.",
          },
          {
            title: "Relevanz für RelTest",
            body: "Die Inhalte der Website knüpfen an diesen Anspruch an: technische Themen sollen verständlich, aber belastbar erklärt werden.",
          },
        ],
        proofPointsTitle: "Bezug",
        proofPoints: [
          "Zuverlässigkeit im Fahrzeug- und Maschinenbau",
          "Lebensdauer und Systemzuverlässigkeit",
          "wissenschaftliche Methodik",
          "Transfer in industrielle Anwendungen",
        ],
        ctaTitle: "Fachbuch ansehen",
        ctaText:
          "Die Literaturseite bündelt die wichtigsten Informationen zum Springer-Fachbuch.",
        primaryCta: { label: "Zur Literatur", href: "/literatur" },
        secondaryCta: contactLink,
      },
    ],
    en: [],
  },
  news: {
    de: [
      {
        slug: "webinar-beschleunigte-lebensdauertests",
        eyebrow: "Aktuelles",
        title: "Webinar: Beschleunigte Lebensdauertests",
        description:
          "Fachlicher Einstieg in die Frage, wie Lebensdauertests beschleunigt werden können, ohne Aussagekraft zu verlieren.",
        metaTitle: "Webinar beschleunigte Lebensdauertests | RelTest",
        metaDescription:
          "Webinar zu beschleunigten Lebensdauertests: Testplanung, Beschleunigung, Auswertung und technische Aussagekraft.",
        lead:
          "Beschleunigte Lebensdauertests sind besonders wertvoll, wenn sie physikalisch plausibel geplant und statistisch sauber ausgewertet werden.",
        sections: [
          {
            title: "Warum Beschleunigung anspruchsvoll ist",
            body: "Ein schneller Test ist nur dann hilfreich, wenn er dieselben relevanten Ausfallmechanismen adressiert wie der reale Einsatz.",
          },
          {
            title: "Einordnung für die neue Website",
            body: "Der Inhalt wird künftig stärker im Wissensbereich rund um Erprobung und Prognosen aufgegriffen.",
          },
        ],
        proofPointsTitle: "Anknüpfungspunkte",
        proofPoints: [
          "Lebensdauererprobung",
          "Ausfallmechanismen",
          "Weibull-Auswertung",
          "Prognosen",
        ],
        ctaTitle: "Mehr zur Erprobung",
        ctaText:
          "Die neue Website ordnet das Thema in den Wissens- und Leistungsbereich ein.",
        primaryCta: { label: "Erprobung verstehen", href: "/wissen/erprobung" },
        secondaryCta: contactLink,
      },
      {
        slug: "kooperation-holland-innovative",
        eyebrow: "Aktuelles",
        title: "Kooperation mit Holland Innovative",
        description:
          "Hinweis auf internationale Zusammenarbeit und fachlichen Austausch im Umfeld Reliability Engineering.",
        metaTitle: "Kooperation mit Holland Innovative | RelTest",
        metaDescription:
          "RelTest und Holland Innovative: Kooperation und fachlicher Austausch im Bereich Reliability Engineering.",
        lead:
          "Kooperationen zeigen, dass Zuverlässigkeitstechnik international und interdisziplinär gedacht werden muss.",
        sections: [
          {
            title: "Fachlicher Austausch",
            body: "Die Zusammenarbeit stärkt die Perspektive auf methodische und industrielle Zuverlässigkeitsthemen.",
          },
          {
            title: "Relevanz für Kunden",
            body: "Kunden profitieren von breiter Erfahrung, fachlichem Netzwerk und internationalen Blickwinkeln.",
          },
        ],
        proofPointsTitle: "Signalwirkung",
        proofPoints: [
          "fachliches Netzwerk",
          "internationaler Austausch",
          "Reliability-Kompetenz",
          "Projekt- und Methodenfokus",
        ],
        ctaTitle: "Zusammenarbeit besprechen",
        ctaText:
          "RelTest unterstützt Unternehmen mit spezialisierter Expertise in anspruchsvollen Zuverlässigkeitsthemen.",
        primaryCta: contactLink,
      },
      {
        slug: "rams-award",
        eyebrow: "Aktuelles",
        title: "RAMS-Award",
        description:
          "Auszeichnung und Sichtbarkeit im fachlichen Umfeld von Reliability, Availability, Maintainability und Safety.",
        metaTitle: "RAMS-Award | RelTest Solutions",
        metaDescription:
          "RAMS-Award und fachliche Relevanz für Reliability, Availability, Maintainability und Safety.",
        lead:
          "RAMS-Themen zeigen, dass Zuverlässigkeit in vielen Branchen Teil eines größeren technischen Sicherheits- und Verfügbarkeitskontexts ist.",
        sections: [
          {
            title: "Reliability im Systemkontext",
            body: "Zuverlässigkeit wird nicht isoliert betrachtet, sondern im Zusammenspiel mit Verfügbarkeit, Wartbarkeit und Sicherheit.",
          },
          {
            title: "Vertrauenssignal",
            body: "Fachliche Sichtbarkeit stärkt die Glaubwürdigkeit gegenüber technischen Entscheidern.",
          },
        ],
        proofPointsTitle: "Themenbezug",
        proofPoints: [
          "Reliability",
          "Availability",
          "Maintainability",
          "Safety",
        ],
        ctaTitle: "RAMS und Zuverlässigkeit einordnen",
        ctaText:
          "Wir helfen, Systemrisiken und Nachweise methodisch zu strukturieren.",
        primaryCta: contactLink,
        secondaryCta: { label: "Risikomanagement", href: "/leistungen/risikomanagement" },
      },
      {
        slug: "webinar-effiziente-lebensdauertestplanung",
        eyebrow: "Aktuelles",
        title: "Webinar: effiziente Lebensdauertestplanung",
        description:
          "Fachlicher Impuls zur Planung von Lebensdauertests mit sinnvoller Stichprobe, Dauer und Aussagekraft.",
        metaTitle: "Webinar effiziente Lebensdauertestplanung | RelTest",
        metaDescription:
          "Effiziente Lebensdauertestplanung: Testdauer, Stichprobe, Aussagekraft und statistische Bewertung.",
        lead:
          "Effiziente Testplanung reduziert Aufwand, ohne die technische Aussagekraft zu opfern.",
        sections: [
          {
            title: "Nicht jeder Test ist gleich wertvoll",
            body: "Entscheidend ist, welche Aussage der Test liefern soll und wie sicher diese Aussage sein muss.",
          },
          {
            title: "Verbindung zu DoE und Statistik",
            body: "Stichprobengröße, Testdauer und Auswertung müssen gemeinsam betrachtet werden.",
          },
        ],
        proofPointsTitle: "Themen",
        proofPoints: [
          "Testdauer",
          "Stichprobengröße",
          "Konfidenz",
          "Lebensdaueranalyse",
        ],
        ctaTitle: "Tests effizienter planen",
        ctaText:
          "RelTest unterstützt bei Prüfstrategien, die wirtschaftlich und aussagekräftig bleiben.",
        primaryCta: { label: "Erprobung ansehen", href: "/wissen/erprobung" },
        secondaryCta: contactLink,
      },
      {
        slug: "smart-data-produktdesign",
        eyebrow: "Aktuelles",
        title: "Smart Data für Produktdesign",
        description:
          "Einordnung, wie Daten im Produktdesign genutzt werden können, um technische Entscheidungen besser abzusichern.",
        metaTitle: "Smart Data im Produktdesign | RelTest",
        metaDescription:
          "Smart Data im Produktdesign: Datenanalyse, Ausfallverhalten, Prognostik und bessere technische Entscheidungen.",
        lead:
          "Smart Data ist dann wertvoll, wenn Daten nicht nur gesammelt, sondern in technische Entscheidungen übersetzt werden.",
        sections: [
          {
            title: "Daten mit Fragestellung",
            body: "Datenanalyse beginnt mit der Entscheidung, welche technische Frage beantwortet werden soll.",
          },
          {
            title: "Produktdesign verbessern",
            body: "Aus Daten können Schwachstellen, Einflüsse und Optimierungspotenziale abgeleitet werden.",
          },
        ],
        proofPointsTitle: "Themen",
        proofPoints: [
          "Datenanalyse",
          "Prognostik",
          "Schwachstellenanalyse",
          "Produktoptimierung",
        ],
        ctaTitle: "Daten sinnvoll nutzen",
        ctaText:
          "Wir helfen, aus vorhandenen Daten belastbare Entwicklungsentscheidungen abzuleiten.",
        primaryCta: { label: "Datenanalyse ansehen", href: "/leistungen/datenanalyse-prognostik" },
        secondaryCta: contactLink,
      },
    ],
    en: [],
  },
  careers: {
    de: [
      {
        slug: "werkstudentin-e-learning",
        eyebrow: "Karriere",
        title: "Werkstudent:in E-Learning Content und Plattformpflege",
        description:
          "Archivierte Karriere-Seite aus der bisherigen Website. Aktuelle Möglichkeiten werden künftig zentral im Karrierebereich gepflegt.",
        metaTitle: "Werkstudent:in E-Learning | RelTest Karriere",
        metaDescription:
          "Karriere bei RelTest: E-Learning, Content und Plattformpflege im Umfeld Zuverlässigkeitstechnik.",
        lead:
          "Diese Seite erhält die alte URL-Signatur und führt künftig Interessierte in den zentralen Karrierebereich.",
        sections: [
          {
            title: "Aktueller Stand",
            body: "Konkrete Ausschreibungen sollten vor Go-live final geprüft und aktualisiert werden.",
          },
          {
            title: "Warum erhalten",
            body: "Karriere-URLs können über externe Links oder Suchmaschinen auffindbar sein und sollten nicht unkontrolliert verschwinden.",
          },
        ],
        proofPointsTitle: "Nächste Schritte",
        proofPoints: [
          "Ausschreibung intern prüfen",
          "Status aktiv oder archiviert festlegen",
          "Ansprechperson ergänzen",
          "Karrierebereich finalisieren",
        ],
        ctaTitle: "Interesse an RelTest?",
        ctaText:
          "Nutzen Sie den Kontaktbereich für Initiativkontakt oder Rückfragen.",
        primaryCta: contactLink,
      },
      {
        slug: "marketing-manager",
        eyebrow: "Karriere",
        title: "Marketing Manager",
        description:
          "Archivierte Karriere-Seite aus der bisherigen Website. Aktuelle Stellen sollten vor Go-live final geprüft werden.",
        metaTitle: "Marketing Manager | RelTest Karriere",
        metaDescription:
          "Karriere bei RelTest: Marketing, Marke und Kommunikation im technischen B2B-Umfeld.",
        lead:
          "Diese alte Stellen-URL wird nicht ersatzlos entfernt, sondern in die neue Karriere-Struktur übernommen.",
        sections: [
          {
            title: "Status klären",
            body: "Vor Veröffentlichung muss entschieden werden, ob die Stelle aktiv, pausiert oder archiviert ist.",
          },
          {
            title: "SEO und Nutzerführung",
            body: "Alte Karriere-URLs werden sauber weitergeleitet oder inhaltlich eingeordnet, damit keine unnötigen 404 entstehen.",
          },
        ],
        proofPointsTitle: "Offen",
        proofPoints: [
          "Aktualität der Stelle",
          "Anforderungsprofil",
          "Kontaktweg",
          "Einbindung in Karriereübersicht",
        ],
        ctaTitle: "Kontakt aufnehmen",
        ctaText:
          "Bis zur finalen Stellenpflege dient der Kontaktbereich als sicherer Einstieg.",
        primaryCta: contactLink,
      },
    ],
    en: [],
  },
};

detailPageCollections.industries.en = detailPageCollections.industries.de.map(
  (page) => ({
    ...page,
    eyebrow: "Industry",
    title:
      page.slug === "halbleiterindustrie"
        ? "Reliability for the semiconductor industry"
        : page.title
            .replace("Zuverlässigkeit für", "Reliability for")
            .replace("Zuverlässigkeit im", "Reliability in")
            .replace(
              "Zuverlässigkeit elektronischer Produkte",
              "Reliability for electronic products",
            )
            .replace("erneuerbare Energien", "renewable energy")
            .replace("Konsumgüter", "consumer goods")
            .replace("Luft- und Raumfahrt", "aerospace")
            .replace("Medizintechnik", "medical technology")
            .replace("Produktionstechnik", "production technology")
            .replace("Maschinenbau", "mechanical engineering"),
    description:
      "Industry-specific reliability engineering for demanding technical products, adapted to risk, operating conditions and validation requirements.",
    metaTitle:
      page.slug === "halbleiterindustrie"
        ? "Reliability for the semiconductor industry | RelTest Solutions"
        : `${page.title.replace("Zuverlässigkeit", "Reliability")} | RelTest Solutions`,
    metaDescription:
      "Industry-specific reliability engineering, testing, data analysis and validation support by RelTest Solutions.",
    lead:
      "RelTest adapts reliability engineering methods to the technical context, risk profile and evidence needs of each industry.",
    sections: [
      {
        title: "Technical context matters",
        body: "Reliability methods only create value when operating conditions, failure mechanisms and industry expectations are considered together.",
      },
      {
        title: "From analysis to evidence",
        body: "We connect risk assessment, testing, data analysis and documentation into a practical validation approach.",
      },
    ],
    proofPointsTitle: "Relevant topics",
    proofPoints: [
      "reliability targets",
      "testing and validation",
      "failure and field-data analysis",
      "technical documentation",
    ],
    ctaTitle: "Discuss your industry context",
    ctaText:
      "We clarify which reliability questions are most relevant for your product and market.",
    primaryCta: contactLinkEn,
    secondaryCta: page.secondaryCta
      ? { label: "View services", href: page.secondaryCta.href }
      : undefined,
  }),
);

detailPageCollections.people.en = detailPageCollections.people.de.map((page) => ({
  ...page,
  eyebrow: "About us",
  description:
    page.slug === "kevin-lucan"
      ? "Managing Director of RelTest Solutions and contact person for reliability engineering, testing and technical project support."
      : "Technical authority in reliability engineering and co-author of the Springer reference on reliability in automotive and mechanical engineering.",
  metaTitle:
    page.slug === "kevin-lucan"
      ? "Dr.-Ing. Kevin Lucan | RelTest Solutions"
      : "Prof. Dr.-Ing. Bernd Bertsche | RelTest Solutions",
  metaDescription:
    page.slug === "kevin-lucan"
      ? "Dr.-Ing. Kevin Lucan, Managing Director of RelTest Solutions: reliability engineering, testing, DoE and consulting."
      : "Prof. Dr.-Ing. Bernd Bertsche: technical expertise in reliability engineering for automotive and mechanical engineering.",
  lead:
    page.slug === "kevin-lucan"
      ? "Personal contact matters in consulting projects. Kevin Lucan represents technical depth, clear communication and pragmatic project work."
      : "The connection between scientific depth and industrial application is an important trust signal for RelTest.",
  sections:
    page.slug === "kevin-lucan"
      ? [
          {
            title: "Technical perspective",
            body: "The focus is on reliability, testing, data analysis and robust development decisions.",
          },
          {
            title: "Podcast as a personal introduction",
            body: "The Ingenieurshelden podcast gives visitors an impression of mindset, career and technical thinking.",
          },
        ]
      : [
          {
            title: "Technical substance",
            body: "The Springer reference on reliability in automotive and mechanical engineering is a visible proof of methodological depth.",
          },
          {
            title: "Relevance for RelTest",
            body: "The website follows this standard: technical topics should be explained clearly and robustly.",
          },
        ],
  proofPointsTitle: page.slug === "kevin-lucan" ? "Topics" : "Context",
  ctaTitle:
    page.slug === "kevin-lucan"
      ? "Start a conversation with RelTest"
      : "View the technical reference",
  ctaText:
    page.slug === "kevin-lucan"
      ? "For project or training inquiries, the contact page is the fastest starting point."
      : "The literature page provides the central information on the Springer reference.",
  primaryCta: page.slug === "kevin-lucan" ? contactLinkEn : { label: "View literature", href: "/literatur" },
  secondaryCta:
    page.slug === "kevin-lucan"
      ? {
          label: "Listen to podcast",
          href: "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan",
          external: true,
        }
      : contactLinkEn,
}));

detailPageCollections.news.en = detailPageCollections.news.de.map((page) => ({
  ...page,
  eyebrow: "News",
  description:
    "Migrated news content from the former website, now connected to the new reliability knowledge and service structure.",
  metaTitle: `${page.title} | RelTest Solutions`,
  metaDescription:
    "RelTest news and technical context related to reliability engineering, testing, data analysis and technical validation.",
  lead:
    "This migrated news item is retained so existing URLs and topic signals do not disappear during the relaunch.",
  sections: [
    {
      title: "Technical context",
      body: "The topic remains relevant as part of RelTest's reliability engineering, testing and data-analysis expertise.",
    },
    {
      title: "Connection to the new website",
      body: "The new structure links former news topics more clearly to knowledge pages, services and contact paths.",
    },
  ],
  proofPointsTitle: "Related topics",
  proofPoints: ["reliability engineering", "testing", "data analysis", "technical decisions"],
  ctaTitle: "Continue with the topic",
  ctaText:
    "Use the knowledge and service pages to explore the technical context in more depth.",
  primaryCta: { label: "View knowledge", href: "/wissen" },
  secondaryCta: contactLinkEn,
}));

detailPageCollections.careers.en = detailPageCollections.careers.de.map(
  (page) => ({
    ...page,
    eyebrow: "Careers",
    description:
      "Migrated career page from the former website. Current openings should be reviewed before go-live.",
    metaTitle: `${page.title} | RelTest Careers`,
    metaDescription:
      "Career information at RelTest Solutions in a technical B2B reliability engineering environment.",
    lead:
      "This former career URL is retained in the new structure to avoid unnecessary 404 errors and to provide a clear contact path.",
    sections: [
      {
        title: "Status to be confirmed",
        body: "Before publication, the team should decide whether this role is active, paused or archived.",
      },
      {
        title: "Clear user path",
        body: "Until final job content is approved, the contact page provides a reliable way to reach RelTest.",
      },
    ],
    proofPointsTitle: "Open before go-live",
    proofPoints: ["role status", "requirements", "contact person", "career overview"],
    ctaTitle: "Contact RelTest",
    ctaText:
      "Until final job pages are approved, please use the contact page for inquiries.",
    primaryCta: contactLinkEn,
  }),
);

export function getDetailPages(group: DetailGroup, locale: Locale) {
  return detailPageCollections[group][locale];
}

export function getDetailPage(
  group: DetailGroup,
  locale: Locale,
  slug: string,
) {
  return detailPageCollections[group][locale].find((page) => page.slug === slug);
}

export function getAllDetailRoutes() {
  return (Object.keys(detailPageCollections) as DetailGroup[]).flatMap(
    (group) =>
      (["de", "en"] as const).flatMap((locale) =>
        detailPageCollections[group][locale].map((page) => ({
          group,
          locale,
          slug: page.slug,
        })),
      ),
  );
}
