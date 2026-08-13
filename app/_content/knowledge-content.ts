import type { Locale } from "../_i18n/config";
import { knowledgeVisuals } from "./knowledge-visuals";

export type KnowledgeMedia = {
  label: string;
  brief: string;
  ratio?: "landscape" | "wide";
  src?: string;
  alt?: string;
  caption?: string;
  lead?: string;
};

export type KnowledgeSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  media?: KnowledgeMedia;
};

export type KnowledgeArticle = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  definition?: string;
  heroMedia: KnowledgeMedia;
  sections: readonly KnowledgeSection[];
  related: readonly string[];
  service: { label: string; href: string };
};

export type GlossaryEntry = {
  term: string;
  definition: string;
};

const deArticles: readonly KnowledgeArticle[] = [
  {
    slug: "zuverlaessigkeitstechnik",
    navLabel: "Zuverlässigkeitstechnik",
    eyebrow: "Grundlagen",
    title: "Zuverlässigkeitstechnik verbindet Anforderungen, Daten und technische Entscheidungen.",
    lead:
      "Reliability Engineering betrachtet nicht nur einzelne Ausfälle. Es schafft einen methodischen Zusammenhang zwischen Produktfunktion, Nutzung, Lebensdauer, Risiken und belastbaren Nachweisen.",
    metaTitle: "Zuverlässigkeitstechnik und Reliability Engineering | RelTest",
    metaDescription:
      "Zuverlässigkeitstechnik verständlich erklärt: Definition, Anforderungen, Planung, Schwachstellenanalyse, Erprobung, Absicherung und Prognose.",
    definition:
      "Zuverlässigkeit beschreibt die Wahrscheinlichkeit, dass ein Produkt seine geforderte Funktion unter festgelegten Bedingungen über einen definierten Zeitraum erfüllt.",
    heroMedia: {
      label: "Bildplatz: Reliability Engineering im Produktkontext",
      brief:
        "Technisches Produkt zwischen Anforderungsdefinition, Erprobung und Datenauswertung; sachlich, realistisch und ohne dekorative Zukunftsästhetik.",
    },
    sections: [
      {
        heading: "Mehr als eine statistische Kennzahl",
        paragraphs: [
          "Zuverlässigkeitstechnik ist ein interdisziplinäres Fachgebiet. Wahrscheinlichkeitsrechnung und Statistik treffen auf Konstruktion, Werkstoffkunde, Elektronik, Software und praktische Produkterfahrung. Entscheidend ist nicht die einzelne Methode, sondern die Fähigkeit, technische Zusammenhänge über den Produktlebenszyklus hinweg zu beurteilen.",
          "Eine Zuverlässigkeitsaussage braucht immer einen Bezug: Welche Funktion muss erfüllt werden? Unter welchen Lasten und Umgebungsbedingungen? Für welche Zeit oder Nutzung? Und mit welcher zulässigen Ausfallwahrscheinlichkeit? Erst wenn diese Größen klar sind, lassen sich Prüfungen, Modelle und Freigabekriterien sinnvoll festlegen.",
        ],
        media: {
          label: "Grafikplatz: Dimensionen der Zuverlässigkeit",
          brief:
            "Reduzierte Fachgrafik zu Funktion, Wahrscheinlichkeit, Nutzungsbedingungen und Zeit; später als indexierbare, deutsch beschriftete Grafik ausarbeiten.",
          ratio: "wide",
        },
      },
      {
        heading: "Fachfelder, die je nach Projekt zusammenspielen",
        paragraphs: [
          "Planung, Schwachstellenanalyse, Erprobung, Absicherung und Prognose sind keine starre Abfolge. In frühen Entwicklungsphasen steht häufig die Übersetzung von Anforderungen und Risiken im Vordergrund. Später gewinnen Versuche, statistische Auswertung und dokumentierte Nachweise an Gewicht. Felddaten können wiederum neue Erkenntnisse für Planung und Konstruktion liefern.",
          "Der Nutzen entsteht an den Schnittstellen: Eine FMEA ohne Konsequenz für die Erprobung bleibt unvollständig. Ein Lebensdauertest ohne Bezug zum Ausfallmechanismus liefert möglicherweise Daten, aber keine belastbare Aussage. Eine Prognose ohne transparente Annahmen erzeugt eine Zahl, jedoch keine sichere Entscheidungsgrundlage.",
        ],
        bullets: [
          "Zuverlässigkeitsziele aus Kunden-, Gesetzes- und Produktanforderungen ableiten",
          "Schwachstellen und Ausfallmechanismen früh erkennen",
          "Erprobung auf reale Nutzung und relevante Risiken ausrichten",
          "Nachweise fachlich und dokumentarisch belastbar führen",
          "Versuchs- und Felddaten für Prognosen und Verbesserungen nutzen",
        ],
      },
      {
        heading: "Zuverlässigkeit wirtschaftlich denken",
        paragraphs: [
          "Technische Zuverlässigkeit ist immer auch eine wirtschaftliche Entscheidung. Einerseits entstehen Kosten für Entwicklung, Analyse und Absicherung. Andererseits verursachen unzureichende Zuverlässigkeit Rückläufer, Gewährleistung, Produktionsstillstände, Reputationsschäden oder Haftungsrisiken. Gute Zuverlässigkeitstechnik macht diesen Entscheidungsraum sichtbar und setzt Aufwand dort ein, wo er die größte Wirkung entfaltet.",
          "Sie schafft damit keine absolute Fehlerfreiheit. Ihr Ziel ist ein nachvollziehbarer Umgang mit technischen Unsicherheiten: Risiken werden benannt, Annahmen dokumentiert, Daten angemessen ausgewertet und Entscheidungen auf den Stand der Technik gestützt.",
        ],
      },
    ],
    related: ["planung", "schwachstellenanalyse", "erprobung"],
    service: { label: "Zuverlässigkeitstechnik als Leistung", href: "/leistungen/zuverlaessigkeitstechnik" },
  },
  {
    slug: "planung",
    navLabel: "Planung",
    eyebrow: "Zuverlässigkeitsplanung",
    title: "Zuverlässigkeit beginnt mit messbaren Anforderungen.",
    lead:
      "Zuverlässigkeitsplanung übersetzt Erwartungen aus Markt, Gesetzgebung und Produktstrategie in technische Ziele, Verantwortlichkeiten und geeignete Nachweise.",
    metaTitle: "Zuverlässigkeitsplanung für technische Produkte | RelTest",
    metaDescription:
      "Zuverlässigkeitsplanung erklärt: Anforderungen, Zuverlässigkeitsziele, Top-down- und Bottom-up-Planung sowie wirtschaftliche Abwägungen.",
    heroMedia: {
      label: "Bildplatz: Zuverlässigkeitsplanung im Entwicklungsprojekt",
      brief:
        "Ingenieurteam an Anforderungs- und Meilensteinplanung mit sichtbaren technischen Zielgrößen, ohne generische Management-Inszenierung.",
    },
    sections: [
      {
        heading: "Anforderungen technisch übersetzen",
        paragraphs: [
          "Zuverlässigkeitsanforderungen entstehen aus mehreren Quellen. Kunden erwarten eine bestimmte Lebensdauer und Verfügbarkeit. Gesetzgeber und Normen definieren Sicherheits- oder Nachweispflichten. Hinzu kommen die Produktstrategie, Gewährleistungsziele und das gewünschte Qualitätsniveau des Unternehmens.",
          "Aussagen wie ‚hohe Zuverlässigkeit‘ reichen für die Entwicklung nicht aus. Benötigt werden messbare Zielgrößen, definierte Nutzungsbedingungen, klare Ausfallkriterien und ein festgelegtes Konfidenzniveau. Die VDI 4007 bietet hierfür eine wichtige methodische Orientierung.",
        ],
      },
      {
        heading: "Top-down und Bottom-up zusammenführen",
        paragraphs: [
          "Bei der Top-down-Planung wird ein Zuverlässigkeitsziel auf Systeme, Baugruppen und Komponenten verteilt. Der Bottom-up-Blick prüft dagegen, welche Systemzuverlässigkeit sich aus den Eigenschaften der einzelnen Elemente tatsächlich ergibt. Beide Richtungen müssen zusammenpassen.",
          "So werden Zielkonflikte früh sichtbar: Eine einzelne Komponente kann technisch gut beherrscht sein und dennoch das Systemziel gefährden. Umgekehrt kann eine sehr konservative Einzelanforderung unnötige Kosten erzeugen, obwohl das Gesamtsystem ausreichend robust ist.",
        ],
        media: {
          label: "Grafikplatz: Zielallokation im System",
          brief:
            "Klare technische Grafik zur Top-down-Verteilung und Bottom-up-Bewertung von System-, Baugruppen- und Komponentenzielen.",
          ratio: "wide",
        },
      },
      {
        heading: "Der wirtschaftliche Entscheidungsraum",
        paragraphs: [
          "Planung bewegt sich zwischen den Kosten eines zuverlässigen Produkts, den Folgen unzureichender Zuverlässigkeit und einem am Markt akzeptierten Produktpreis. Eine gute Strategie dokumentiert diese Abwägung und legt fest, welche Analysen, Versuche und Nachweise wirklich erforderlich sind.",
          "Das Ergebnis ist kein umfangreiches Pflichtenheft um seiner selbst willen, sondern ein belastbarer Plan: Ziele, Arbeitspakete, Schnittstellen, Meilensteine und Entscheidungskriterien sind so beschrieben, dass Entwicklung und Erprobung darauf aufbauen können.",
        ],
      },
    ],
    related: ["zuverlaessigkeitstechnik", "absicherung", "prognosen"],
    service: { label: "Zuverlässigkeitsplanung besprechen", href: "/kontakt" },
  },
  {
    slug: "schwachstellenanalyse",
    navLabel: "Schwachstellenanalyse",
    eyebrow: "Schwachstellenanalyse",
    title: "Kritische Ausfallmechanismen erkennen, bevor sie das Feld erreichen.",
    lead:
      "Schwachstellenanalysen verbinden Konstruktionswissen, Risiken, Versuche und Erfahrungen aus dem Feld. Ihr Ziel ist eine begründete Priorisierung, nicht eine möglichst lange Fehlerliste.",
    metaTitle: "Schwachstellenanalyse mit FMEA, FTA und HALT | RelTest",
    metaDescription:
      "Schwachstellenanalyse für technische Produkte: FMEA, FTA, HALT, Ausfallmechanismen und Priorisierung von Zuverlässigkeitsrisiken.",
    heroMedia: {
      label: "Bildplatz: Technische Schwachstellenanalyse",
      brief:
        "Reales Bauteil mit Ingenieurinnen und Ingenieuren bei Ursachenanalyse; sichtbare Schadensstelle, Messdaten und Konstruktionsbezug.",
    },
    sections: [
      {
        heading: "Vom Symptom zum Mechanismus",
        paragraphs: [
          "Ein beobachteter Ausfall ist zunächst nur ein Symptom. Für eine wirksame Verbesserung muss verstanden werden, welcher physikalische, elektronische oder softwarebezogene Mechanismus dahintersteht und unter welchen Bedingungen er ausgelöst wird.",
          "Die Analyse beginnt deshalb nicht erst nach der Erprobung. Bereits Konzept und Konstruktion lassen sich auf kritische Funktionen, Schnittstellen und Lastfälle untersuchen. Später ergänzen Prüfstands- und Felddaten das Bild.",
        ],
      },
      {
        heading: "FMEA und FTA gezielt einsetzen",
        paragraphs: [
          "Die Design- oder Prozess-FMEA strukturiert mögliche Fehlerarten, Ursachen und Folgen aus Expertensicht. Die Fehlerbaumanalyse (FTA) startet dagegen bei einem unerwünschten Top-Ereignis und zerlegt die möglichen Ursachen logisch. Beide Methoden liefern einen hohen Nutzen, wenn ihre Ergebnisse in konkrete Maßnahmen und Nachweise übersetzt werden.",
          "Die Bewertung ist kein Selbstzweck. Sie hilft, die begrenzte Entwicklungs- und Erprobungszeit auf die Risiken zu konzentrieren, deren Eintritt oder Auswirkung für Funktion, Sicherheit und Lebensdauer tatsächlich entscheidend ist.",
        ],
        media: {
          label: "Grafikplatz: FMEA und Fehlerbaum",
          brief:
            "Zweiteilige, reduzierte Fachgrafik: links Ursache–Fehler–Folge, rechts Top-Ereignis mit logischem Fehlerbaum.",
          ratio: "wide",
        },
      },
      {
        heading: "HALT als früher Robustheitsimpuls",
        paragraphs: [
          "Highly Accelerated Life Testing (HALT) belastet Produkte schrittweise über den vorgesehenen Einsatzbereich hinaus. Ziel ist nicht der statistische Lebensdauernachweis, sondern das frühe Auffinden konstruktiver Grenzen und verborgener Schwachstellen.",
          "Wirksam wird HALT erst im iterativen Zusammenspiel aus Belastung, Fehleranalyse und Produktverbesserung. Erkenntnisse müssen technisch bewertet und anschließend in Konstruktion, Absicherungsstrategie oder Serienüberwachung überführt werden.",
        ],
      },
    ],
    related: ["risikomanagement", "erprobung", "absicherung"],
    service: { label: "Risiko & Absicherung als Leistung", href: "/leistungen/risikomanagement" },
  },
  {
    slug: "erprobung",
    navLabel: "Erprobung",
    eyebrow: "Zuverlässigkeitserprobung",
    title: "Erprobung muss reale Nutzung in eine belastbare Aussage übersetzen.",
    lead:
      "Ein Versuch ist nur dann wertvoll, wenn Fragestellung, Belastung, Ausfallkriterium und spätere Entscheidung zusammenpassen.",
    metaTitle: "Zuverlässigkeitserprobung und Lebensdauertests | RelTest",
    metaDescription:
      "Zuverlässigkeitserprobung erklärt: Erprobungsstrategie, Funktionstest, Lebensdauertest, Lastkollektive und repräsentative Nutzung.",
    heroMedia: {
      label: "Bildplatz: Zuverlässigkeitserprobung",
      brief:
        "Moderner, realer Prüfstand mit Prüfling, Sensorik und Datenerfassung; keine futuristische Laborinszenierung.",
    },
    sections: [
      {
        heading: "Nutzung und Belastung verstehen",
        paragraphs: [
          "Produkte erleben im Feld wechselnde Lasten, Temperaturen, Feuchte, Verschmutzung und unterschiedliche Bedienprofile. Eine aussagekräftige Erprobung bildet diese Realität in einem repräsentativen Last- oder Nutzungskollektiv ab.",
          "Maximalbelastungen allein reichen häufig nicht aus. Entscheidend ist, welche Kombinationen und zeitlichen Verläufe einen relevanten Ausfallmechanismus aktivieren. Eine beschleunigte Prüfung muss denselben Mechanismus adressieren, der auch im Feld erwartet wird.",
        ],
        media: {
          label: "Grafikplatz: Vom Feldprofil zum Prüfkollektiv",
          brief:
            "Fachgrafik zur Verdichtung realer Nutzung, Umwelt- und Lastdaten in ein repräsentatives Prüfprofil.",
          ratio: "wide",
        },
      },
      {
        heading: "Funktionstest und Lebensdauertest unterscheiden",
        paragraphs: [
          "Funktionstests prüfen, ob die zentrale Produktfunktion unter definierten Bedingungen erfüllt wird. Lebensdauertests untersuchen dagegen, wann und mit welcher Streuung relevante Ausfälle auftreten. Beide Testarten beantworten unterschiedliche Fragen und benötigen passende Annahmekriterien.",
          "Die Stichprobe, Prüfdauer und Auswertung hängen von der gewünschten Aussage ab. Ein bestandener Versuch ohne statistischen Bezug ist nicht automatisch ein Zuverlässigkeitsnachweis.",
        ],
      },
      {
        heading: "Die Strategie entwickelt sich mit dem Produkt",
        paragraphs: [
          "In frühen Prototypenphasen stehen Erkenntnisgewinn und Schwachstellensuche im Vordergrund. Mit zunehmender Produktreife verschiebt sich der Fokus auf quantitative Lebensdaueraussagen, Freigabekriterien und die Bestätigung definierter Anforderungen.",
          "Weil Erprobung Zeit, Muster und Prüfstandskapazität bindet, sollte sie gezielt geplant werden. Design of Experiments kann helfen, Einflussgrößen und Wechselwirkungen mit weniger Versuchen systematisch zu untersuchen.",
        ],
      },
    ],
    related: ["design-of-experiments", "absicherung", "prognosen"],
    service: { label: "Test & Datenanalyse als Leistung", href: "/leistungen/datenanalyse-prognostik" },
  },
  {
    slug: "absicherung",
    navLabel: "Absicherung",
    eyebrow: "Zuverlässigkeitsabsicherung",
    title: "Absicherung verbindet Risiken, Nachweise und Freigabeentscheidungen.",
    lead:
      "Zuverlässigkeitsabsicherung schafft eine nachvollziehbare Begründung dafür, dass Anforderungen unter relevanten Bedingungen erfüllt werden.",
    metaTitle: "Zuverlässigkeitsabsicherung und Nachweisführung | RelTest",
    metaDescription:
      "Zuverlässigkeitsabsicherung erklärt: qualitative und quantitative Methoden, Erprobung, Simulation, Dokumentation und Freigaben.",
    heroMedia: {
      label: "Bildplatz: Technische Absicherung und Freigabe",
      brief:
        "Ingenieurprüfung eines Nachweisdokuments neben technischem Produkt und Testdaten; realistisch und dokumentationsnah.",
    },
    sections: [
      {
        heading: "Absicherung beginnt in der Entwicklung",
        paragraphs: [
          "Zuverlässigkeit lässt sich nicht am Ende in ein Produkt hineinprüfen. Die wirksamsten Entscheidungen fallen in Konzept und Konstruktion, wenn Ausfallmechanismen noch ohne große Folgekosten vermieden oder beherrscht werden können.",
          "Qualitative Methoden identifizieren Schwachstellen und kritische Pfade. Quantitative Methoden bewerten Lebensdauer, Ausfallwahrscheinlichkeit oder Verfügbarkeit. Eine tragfähige Absicherungsstrategie verbindet beides mit klaren Anforderungen und Annahmekriterien.",
        ],
      },
      {
        heading: "Mechanik, Elektronik und Software passend behandeln",
        paragraphs: [
          "Die Methoden müssen zum Produkt passen. In der Mechanik beschreiben beispielsweise Wöhlerlinien und Schadensakkumulationsmodelle den Zusammenhang zwischen Belastung und Ermüdung. In der Elektronik können temperaturabhängige Alterungsmodelle wie der Arrhenius-Ansatz relevant sein. Softwarebezogene Fehler folgen wiederum anderen Gesetzmäßigkeiten.",
          "Bei komplexen Systemen reicht es nicht, diese Bereiche getrennt zu betrachten. Schnittstellen, gemeinsame Ursachen und Wechselwirkungen entscheiden häufig darüber, ob ein Nachweis das reale Systemverhalten abbildet.",
        ],
        media: {
          label: "Grafikplatz: Absicherungslogik im System",
          brief:
            "Technische Darstellung, wie Risikoanalyse, Versuch, Simulation und Dokumentation zu einer Freigabeaussage zusammenlaufen.",
          ratio: "wide",
        },
      },
      {
        heading: "Prüfen, simulieren und dokumentieren",
        paragraphs: [
          "Umfangreiche Erprobung kann erforderlich sein, ist aber nicht immer der wirtschaftlichste Weg. Stochastische und numerische Simulationen ergänzen reale Versuche, wenn Modelle und Eingangsdaten ausreichend abgesichert sind. So lassen sich Prüfaufwand, Zeit und Kosten reduzieren, ohne die Aussagekraft zu verlieren.",
          "Die Nachweisdokumentation hält Ziel, Methode, Datenbasis, Annahmen, Unsicherheiten und Ergebnis fest. Sie macht Entscheidungen für Entwicklung, Qualität, Kunden und mögliche Haftungsfragen nachvollziehbar.",
        ],
      },
    ],
    related: ["planung", "erprobung", "risikomanagement"],
    service: { label: "Risiko & Absicherung als Leistung", href: "/leistungen/risikomanagement" },
  },
  {
    slug: "prognosen",
    navLabel: "Prognosen",
    eyebrow: "Zuverlässigkeitsprognose",
    title: "Prognosen machen Daten, Modelle und Unsicherheit entscheidbar.",
    lead:
      "Zuverlässigkeitsprognosen verbinden Versuchs- und Felddaten mit geeigneten Lebensdauermodellen. Aussagekräftig werden sie erst, wenn Annahmen und Unsicherheiten sichtbar bleiben.",
    metaTitle: "Zuverlässigkeitsprognose und Lebensdauermodelle | RelTest",
    metaDescription:
      "Zuverlässigkeitsprognosen erklärt: Versuchs- und Felddaten, Weibull-Analyse, Lebensdauermodelle, Extrapolation und Unsicherheit.",
    heroMedia: {
      label: "Bildplatz: Lebensdauerprognose aus Daten",
      brief:
        "Technische Datenauswertung mit Lebensdauerverteilung und Konfidenzgrenzen, kombiniert mit realem Bauteilbezug.",
    },
    sections: [
      {
        heading: "Daten im Entstehungskontext verstehen",
        paragraphs: [
          "Versuchs-, Betriebs- und Felddaten sind nicht automatisch vergleichbar. Belastung, Nutzung, Beobachtungsdauer, Zensierung und Ausfalldefinition beeinflussen die Aussage. Vor jeder Modellierung muss deshalb geklärt werden, wie die Daten entstanden sind.",
          "Auch unvollständige Beobachtungen enthalten Information. Statistische Lebensdauerverfahren können zensierte Daten berücksichtigen, sofern Datenerfassung und Randbedingungen nachvollziehbar dokumentiert sind.",
        ],
      },
      {
        heading: "Modelle fachlich auswählen",
        paragraphs: [
          "Weibull-, Exponential- oder andere Verteilungsmodelle beschreiben unterschiedliche Ausfallverhalten. Die Auswahl darf nicht allein nach rechnerischer Anpassung erfolgen. Sie muss zum Ausfallmechanismus, zur Datenlage und zur vorgesehenen Extrapolation passen.",
          "Belastungs-Lebensdauer-Modelle übertragen Erkenntnisse zwischen verschiedenen Beanspruchungsniveaus. Dieser Schritt ist besonders sensibel: Eine mathematisch saubere Kurve kann technisch falsch sein, wenn sich der Mechanismus unter höherer Belastung verändert.",
        ],
        media: {
          label: "Grafikplatz: Daten, Modell und Prognose",
          brief:
            "Erklärgrafik von Rohdaten über Verteilungs- und Belastungsmodell zur prognostizierten Lebensdauer mit Vertrauensbereich.",
          ratio: "wide",
        },
      },
      {
        heading: "Unsicherheit gehört zum Ergebnis",
        paragraphs: [
          "Eine Prognose ist keine Gewissheit, sondern eine Aussage mit statistischer und technischer Unsicherheit. Stichprobengröße, Streuung, Modellwahl und Extrapolationsweite bestimmen, wie eng eine belastbare Aussage sein kann.",
          "Für Entscheidungen sind daher Konfidenzgrenzen, Sensitivitäten und dokumentierte Annahmen ebenso wichtig wie der eigentliche Prognosewert. Nur so lässt sich beurteilen, ob weitere Daten nötig sind oder eine Freigabe fachlich vertretbar ist.",
        ],
      },
    ],
    related: ["erprobung", "design-of-experiments", "absicherung"],
    service: { label: "Test & Datenanalyse als Leistung", href: "/leistungen/datenanalyse-prognostik" },
  },
  {
    slug: "design-of-experiments",
    navLabel: "Design of Experiments",
    eyebrow: "Statistische Versuchsplanung",
    title: "Design of Experiments untersucht technische Systeme effizient und nachvollziehbar.",
    lead:
      "DoE plant Versuche so, dass Effekte, Wechselwirkungen und robuste Einstellungen mit möglichst hohem Erkenntnisgewinn sichtbar werden.",
    metaTitle: "Design of Experiments (DoE) verständlich erklärt | RelTest",
    metaDescription:
      "Design of Experiments erklärt: Faktoren, Faktorstufen, Störgrößen, Wechselwirkungen, Versuchspläne, Modelle und robuste Optimierung.",
    heroMedia: {
      label: "Bildplatz: DoE im technischen Versuch",
      brief:
        "Realer Versuchsaufbau mit übersichtlicher Faktor- und Ergebnisauswertung; keine dekorative Datenwand.",
    },
    sections: [
      {
        heading: "Vom Versuch zur geplanten Untersuchung",
        paragraphs: [
          "Klassisches Ausprobieren verändert häufig einen Faktor nach dem anderen. Dadurch bleiben Wechselwirkungen verborgen und der Versuchsaufwand wächst schnell. Design of Experiments betrachtet mehrere Einflussgrößen gemeinsam und verteilt die Versuchspunkte nach einem statistisch begründeten Plan.",
          "Am Anfang stehen Problemdefinition und Zielgröße. Anschließend werden Faktoren, Faktorstufen und relevante Störgrößen festgelegt. Der Versuchsraum muss technisch sinnvoll sein: Ein statistisch günstiger Punkt ist wertlos, wenn er außerhalb realer oder sicherer Betriebsbedingungen liegt.",
        ],
        media: {
          label: "Grafikplatz: Faktoren und Versuchsraum",
          brief:
            "Fachgrafik mit zwei bis drei Faktoren, Faktorstufen, Versuchspunkten und einer klar markierten Zielgröße.",
          ratio: "wide",
        },
      },
      {
        heading: "Effekte und Wechselwirkungen erkennen",
        paragraphs: [
          "Die Auswertung zeigt, welche Faktoren einen relevanten Einfluss auf das Ergebnis haben. Besonders wertvoll sind Wechselwirkungen: Die Wirkung eines Faktors kann davon abhängen, auf welchem Niveau ein anderer Faktor steht. Diese Zusammenhänge bleiben bei isolierten Einzelversuchen oft unentdeckt.",
          "Aus den Daten entsteht ein empirisches Modell. Es beschreibt das untersuchte System innerhalb des Versuchsraums und ermöglicht Prognosen, Sensitivitätsanalysen und eine begründete Optimierung. Modellgüte und Residuen müssen geprüft werden, bevor Ergebnisse technisch interpretiert werden.",
        ],
      },
      {
        heading: "Robustheit statt bloßer Bestwerte",
        paragraphs: [
          "In der Produkt- und Prozessentwicklung ist nicht nur ein optimaler Mittelwert wichtig. Eine Einstellung sollte auch gegenüber Fertigungsstreuung, Umwelteinflüssen und Nutzungsschwankungen stabil bleiben. DoE kann solche Störgrößen bewusst einbeziehen und robuste Parameterbereiche identifizieren.",
          "Die Methode eignet sich für Entwicklung, Testing, Fertigung und Fehleranalyse. Sie reduziert nicht automatisch jede Versuchsanzahl, erhöht aber den Informationsgehalt pro Versuch und macht Entscheidungen nachvollziehbarer.",
        ],
        bullets: [
          "signifikante Einflussgrößen und Wechselwirkungen identifizieren",
          "Produkte und Prozesse zielgerichtet optimieren",
          "Störgrößen und Streuung methodisch berücksichtigen",
          "Versuchsaufwand auf entscheidungsrelevante Punkte konzentrieren",
        ],
      },
    ],
    related: ["erprobung", "prognosen", "risikomanagement"],
    service: { label: "DoE als Beratungsleistung", href: "/leistungen/datenanalyse-prognostik" },
  },
  {
    slug: "risikomanagement",
    navLabel: "Risikomanagement",
    eyebrow: "Technisches Risikomanagement",
    title: "Technische Risiken werden beherrschbar, wenn Ursachen und Nachweise zusammenpassen.",
    lead:
      "Risikomanagement in der Produktentwicklung verbindet mögliche Ausfallmechanismen, ihre Folgen, geeignete Maßnahmen und den Nachweis ihrer Wirksamkeit.",
    metaTitle: "Technisches Risikomanagement und Zuverlässigkeit | RelTest",
    metaDescription:
      "Technisches Risikomanagement erklärt: FMEA, FTA, Risikobewertung, Absicherungsmaßnahmen, Wirksamkeitsnachweis und Dokumentation.",
    heroMedia: {
      label: "Bildplatz: Technisches Risikomanagement",
      brief:
        "Interdisziplinäres technisches Review mit Produkt, Risikomatrix und Nachweisplanung; realistisch, ruhig und professionell.",
    },
    sections: [
      {
        heading: "Risiko technisch konkretisieren",
        paragraphs: [
          "Ein technisches Risiko ist mehr als ein farbiges Feld in einer Matrix. Es beschreibt einen möglichen Ausfallmechanismus in einem konkreten Nutzungskontext und dessen Folgen für Funktion, Sicherheit, Kosten oder Termin.",
          "FMEA, FTA, Felddaten, Versuche und Expertenwissen liefern unterschiedliche Perspektiven. Sie sollten auf dieselbe Frage einzahlen: Welche Risiken sind für das Produkt wirklich entscheidend und welche Entscheidung muss daraus folgen?",
        ],
      },
      {
        heading: "Priorisieren und Maßnahmen ableiten",
        paragraphs: [
          "Nicht jedes denkbare Ereignis kann mit demselben Aufwand behandelt werden. Bewertungskriterien müssen deshalb fachlich nachvollziehbar sein. Eintrittswahrscheinlichkeit, Auswirkung und Entdeckbarkeit können helfen, ersetzen aber nicht die technische Begründung.",
          "Maßnahmen reichen von konstruktiven Änderungen über Prozesskontrollen bis zu gezielter Erprobung. Vorrang haben Lösungen, die Ursachen vermeiden oder beherrschen. Reine Entdeckungsmaßnahmen reduzieren das zugrunde liegende Risiko häufig nicht.",
        ],
        media: {
          label: "Grafikplatz: Risiko zu Maßnahme und Nachweis",
          brief:
            "Reduzierte Grafik mit Ausfallmechanismus, Priorisierung, technischer Maßnahme und zugeordnetem Wirksamkeitsnachweis.",
          ratio: "wide",
        },
      },
      {
        heading: "Wirksamkeit nachweisen",
        paragraphs: [
          "Eine Maßnahme ist erst abgeschlossen, wenn ihre Wirkung überprüft wurde. Dazu können Reviews, Simulationen, Versuche oder statistische Analysen dienen. Methode und Prüfumfang richten sich nach dem Risiko und der geforderten Aussage.",
          "Nachvollziehbare Dokumentation verbindet Risiko, Entscheidung, Maßnahme und Ergebnis. Sie unterstützt Freigaben, Wissenstransfer und die Argumentation, dass nach dem anerkannten Stand der Technik entwickelt und abgesichert wurde.",
        ],
      },
    ],
    related: ["schwachstellenanalyse", "absicherung", "planung"],
    service: { label: "Risiko & Absicherung als Leistung", href: "/leistungen/risikomanagement" },
  },
];

const enOverrides: Record<string, KnowledgeArticle> = {
  zuverlaessigkeitstechnik: {
    ...deArticles[0],
    navLabel: "Reliability engineering",
    eyebrow: "Fundamentals",
    title: "Reliability engineering connects requirements, data and technical decisions.",
    lead: "Reliability engineering does not look at isolated failures alone. It links product function, use, lifetime, risk and defensible evidence across the product lifecycle.",
    metaTitle: "Reliability Engineering Fundamentals | RelTest",
    metaDescription: "Reliability engineering explained: definition, planning, weak-point analysis, testing, assurance and prediction.",
    definition: "Reliability is the probability that a product performs its required function under specified conditions for a defined period of time.",
    heroMedia: { label: "Image placeholder: reliability engineering in context", brief: "A technical product shown between requirements, testing and data evaluation; realistic and restrained." },
    sections: [
      { heading: "More than a statistical metric", paragraphs: ["Reliability engineering is interdisciplinary. Probability and statistics meet design engineering, materials, electronics, software and practical product knowledge. Its value lies in connecting these perspectives rather than applying methods in isolation.", "Every reliability statement needs context: the required function, relevant loads and environmental conditions, a time or usage horizon and an acceptable probability of failure. Only then can tests, models and release criteria be defined meaningfully."], media: { label: "Graphic placeholder: dimensions of reliability", brief: "Technical graphic linking function, probability, operating conditions and time.", ratio: "wide" } },
      { heading: "Technical fields that interact", paragraphs: ["Planning, weak-point analysis, testing, assurance and prediction are not a rigid sequence. Their importance changes with product maturity and available evidence.", "The interfaces matter most. An FMEA without consequences for testing remains incomplete. A lifetime test without a failure-mechanism link may produce data but no robust decision."], bullets: ["derive measurable reliability targets", "identify weak points and failure mechanisms", "align testing with real use and relevant risks", "build traceable evidence", "use test and field data for prediction"] },
      { heading: "Treat reliability as an economic decision", paragraphs: ["Reliability work requires development and validation effort. Insufficient reliability, however, leads to returns, warranty cost, downtime, reputational damage and liability exposure. A sound approach makes this trade-off explicit.", "The goal is not absolute freedom from failure. It is a transparent treatment of technical uncertainty based on documented assumptions, appropriate data and state-of-the-art engineering practice."] },
    ],
    related: ["planung", "schwachstellenanalyse", "erprobung"],
    service: { label: "Reliability engineering services", href: "/leistungen/zuverlaessigkeitstechnik" },
  },
  planung: {
    ...deArticles[1], navLabel: "Planning", eyebrow: "Reliability planning", title: "Reliability starts with measurable requirements.", lead: "Reliability planning translates market, regulatory and product expectations into technical targets, responsibilities and evidence.", metaTitle: "Reliability Planning for Technical Products | RelTest", metaDescription: "Reliability planning explained: requirements, targets, top-down and bottom-up allocation and economic trade-offs.", heroMedia: { label: "Image placeholder: reliability planning", brief: "Engineering team reviewing requirements, target values and development milestones." },
    sections: [
      { heading: "Translate expectations into engineering targets", paragraphs: ["Requirements come from customers, legislation, safety obligations, warranty targets and product strategy. Terms such as high reliability are not actionable until they become measurable targets with defined conditions and failure criteria.", "The result must state what is to be demonstrated, under which use profile, for what duration and at what confidence level."] },
      { heading: "Connect top-down and bottom-up", paragraphs: ["Top-down planning allocates a system target to subsystems and components. Bottom-up assessment checks which system reliability follows from the elements that are actually available.", "Using both directions exposes target conflicts early and avoids both under-designed systems and unnecessarily conservative component requirements."], media: { label: "Graphic placeholder: target allocation", brief: "System, subsystem and component targets shown in top-down and bottom-up directions.", ratio: "wide" } },
      { heading: "Make the economic trade-off visible", paragraphs: ["Planning balances the cost of a reliable product, the consequences of insufficient reliability and an acceptable market price.", "A useful plan therefore defines targets, work packages, interfaces, milestones and decision criteria instead of producing documentation for its own sake."] },
    ], related: ["zuverlaessigkeitstechnik", "absicherung", "prognosen"], service: { label: "Discuss reliability planning", href: "/kontakt" },
  },
  schwachstellenanalyse: {
    ...deArticles[2], navLabel: "Weak-point analysis", eyebrow: "Weak-point analysis", title: "Identify critical failure mechanisms before they reach the field.", lead: "Weak-point analysis combines design knowledge, risk methods, testing and field experience to create a reasoned priority rather than a long fault list.", metaTitle: "Weak-Point Analysis with FMEA, FTA and HALT | RelTest", metaDescription: "Weak-point analysis for technical products: FMEA, FTA, HALT, failure mechanisms and risk prioritisation.", heroMedia: { label: "Image placeholder: technical failure analysis", brief: "Engineers analysing a real failed component with measurement and design context." },
    sections: [
      { heading: "From symptom to mechanism", paragraphs: ["An observed failure is initially a symptom. Effective improvement requires an understanding of the physical, electronic or software mechanism and the conditions that trigger it.", "Analysis can start at concept stage and later incorporate test-bench and field evidence."] },
      { heading: "Use FMEA and FTA deliberately", paragraphs: ["Design and process FMEA structure possible failure modes, causes and effects. Fault Tree Analysis starts from an unwanted top event and develops the possible causes logically.", "Both methods create value when their results lead to concrete design actions and evidence."], media: { label: "Graphic placeholder: FMEA and fault tree", brief: "Cause–failure–effect logic alongside a reduced fault tree.", ratio: "wide" } },
      { heading: "Use HALT as an early robustness impulse", paragraphs: ["HALT applies stepwise overstress to reveal hidden design limits. It is not a statistical lifetime demonstration.", "Its benefit comes from the iterative link between stress, failure analysis and product improvement."] },
    ], related: ["risikomanagement", "erprobung", "absicherung"], service: { label: "Risk and assurance services", href: "/leistungen/risikomanagement" },
  },
  erprobung: {
    ...deArticles[3], navLabel: "Testing", eyebrow: "Reliability testing", title: "Testing must translate real use into defensible evidence.", lead: "A test creates value only when its question, load, failure criterion and later decision fit together.", metaTitle: "Reliability Testing and Lifetime Tests | RelTest", metaDescription: "Reliability testing explained: test strategy, function and lifetime tests, load collectives and representative use.", heroMedia: { label: "Image placeholder: reliability test bench", brief: "Modern real test bench with specimen, sensors and data acquisition." },
    sections: [
      { heading: "Understand use and loading", paragraphs: ["Products experience changing loads, temperature, humidity, contamination and user profiles. Meaningful testing translates this reality into representative load collectives.", "Acceleration is valid only when it addresses the same failure mechanism expected in the field."], media: { label: "Graphic placeholder: field profile to test collective", brief: "Transformation of real use and environmental data into a test profile.", ratio: "wide" } },
      { heading: "Separate function and lifetime questions", paragraphs: ["Function tests verify the required product function under defined conditions. Lifetime tests investigate when relevant failures occur and how strongly they vary.", "Sample size, duration and evaluation depend on the intended statement. A passed test is not automatically a reliability demonstration."] },
      { heading: "Adapt the strategy to product maturity", paragraphs: ["Early prototypes focus on learning and weak-point discovery. Mature products require quantitative evidence and release criteria.", "Because tests consume time, samples and capacity, experimental design can improve their information value."] },
    ], related: ["design-of-experiments", "absicherung", "prognosen"], service: { label: "Testing and data analysis services", href: "/leistungen/datenanalyse-prognostik" },
  },
  absicherung: {
    ...deArticles[4], navLabel: "Assurance", eyebrow: "Reliability assurance", title: "Assurance connects risk, evidence and release decisions.", lead: "Reliability assurance provides a traceable technical justification that requirements are met under relevant conditions.", metaTitle: "Reliability Assurance and Evidence | RelTest", metaDescription: "Reliability assurance explained: qualitative and quantitative methods, testing, simulation, documentation and release.", heroMedia: { label: "Image placeholder: assurance and release", brief: "Engineer reviewing evidence next to a technical product and test data." },
    sections: [
      { heading: "Assurance starts in development", paragraphs: ["Reliability cannot be tested into a finished product. Concept and design decisions offer the greatest leverage to avoid or control failure mechanisms.", "Qualitative methods identify critical paths; quantitative methods assess lifetime, failure probability or availability. A robust strategy connects both."] },
      { heading: "Match methods to mechanics, electronics and software", paragraphs: ["Mechanical fatigue, electronic ageing and software-related failure patterns require different evidence. Complex systems also demand attention to interfaces and common causes.", "The method must fit the product and the failure physics rather than follow a generic checklist."], media: { label: "Graphic placeholder: system assurance logic", brief: "Risk analysis, testing, simulation and documentation converging into release evidence.", ratio: "wide" } },
      { heading: "Test, simulate and document", paragraphs: ["Stochastic and numerical simulation can complement physical testing when models and inputs are sufficiently validated.", "Evidence documentation records targets, methods, data, assumptions, uncertainty and results so that decisions remain traceable."] },
    ], related: ["planung", "erprobung", "risikomanagement"], service: { label: "Risk and assurance services", href: "/leistungen/risikomanagement" },
  },
  prognosen: {
    ...deArticles[5], navLabel: "Predictions", eyebrow: "Reliability prediction", title: "Predictions turn data, models and uncertainty into decisions.", lead: "Reliability predictions combine test and field data with suitable lifetime models while keeping assumptions and uncertainty visible.", metaTitle: "Reliability Prediction and Lifetime Models | RelTest", metaDescription: "Reliability prediction explained: test and field data, Weibull analysis, lifetime models, extrapolation and uncertainty.", heroMedia: { label: "Image placeholder: lifetime prediction", brief: "Lifetime distribution and confidence bounds shown with a real component context." },
    sections: [
      { heading: "Understand how the data were created", paragraphs: ["Test, operating and field data are not automatically comparable. Load, use, observation time, censoring and failure definitions shape the result.", "Incomplete observations can still provide information when their context is documented."] },
      { heading: "Select models technically", paragraphs: ["Weibull, exponential and other distributions describe different failure behaviours. Selection must fit both data and mechanism.", "Stress–life models are particularly sensitive because extrapolation can become invalid when the failure mechanism changes."], media: { label: "Graphic placeholder: data, model and forecast", brief: "Raw data, distribution model and predicted lifetime with confidence interval.", ratio: "wide" } },
      { heading: "Uncertainty is part of the result", paragraphs: ["A prediction is a statement with statistical and technical uncertainty, not a certainty.", "Confidence bounds, sensitivities and documented assumptions are therefore as important as the point estimate."] },
    ], related: ["erprobung", "design-of-experiments", "absicherung"], service: { label: "Testing and data analysis services", href: "/leistungen/datenanalyse-prognostik" },
  },
  "design-of-experiments": {
    ...deArticles[6], navLabel: "Design of Experiments", eyebrow: "Statistical experimental design", title: "Design of Experiments investigates technical systems efficiently and transparently.", lead: "DoE plans experiments so that effects, interactions and robust settings become visible with high information value.", metaTitle: "Design of Experiments (DoE) Explained | RelTest", metaDescription: "DoE explained: factors, levels, noise, interactions, experimental designs, empirical models and robust optimisation.", heroMedia: { label: "Image placeholder: DoE in engineering", brief: "Real experimental setup with a clear factor and response evaluation." },
    sections: [
      { heading: "From trial and error to a planned investigation", paragraphs: ["Changing one factor at a time hides interactions and quickly increases effort. DoE varies several factors according to a statistically reasoned design.", "The work starts with a clear response, meaningful factors and levels and technically valid experimental boundaries."], media: { label: "Graphic placeholder: factors and design space", brief: "Factors, levels, experimental points and a response surface.", ratio: "wide" } },
      { heading: "Identify effects and interactions", paragraphs: ["DoE reveals which factors matter and whether the effect of one factor depends on another.", "An empirical model then supports prediction, sensitivity analysis and optimisation within the investigated design space. Model quality and residuals must be checked before technical interpretation."] },
      { heading: "Optimise for robustness", paragraphs: ["Engineering decisions should not target the best mean alone. Product and process settings must remain stable against manufacturing variation, environment and use.", "DoE can include noise factors deliberately and improve the information gained per experiment."], bullets: ["identify relevant factors and interactions", "optimise products and processes", "account for variation and noise", "focus testing on decision-relevant points"] },
    ], related: ["erprobung", "prognosen", "risikomanagement"], service: { label: "DoE consulting", href: "/leistungen/datenanalyse-prognostik" },
  },
  risikomanagement: {
    ...deArticles[7], navLabel: "Risk management", eyebrow: "Technical risk management", title: "Technical risks become manageable when causes and evidence fit together.", lead: "Risk management in product development links failure mechanisms, consequences, technical measures and evidence of effectiveness.", metaTitle: "Technical Risk Management and Reliability | RelTest", metaDescription: "Technical risk management explained: FMEA, FTA, assessment, assurance measures, effectiveness and documentation.", heroMedia: { label: "Image placeholder: technical risk management", brief: "Engineering review with product, risk matrix and evidence planning." },
    sections: [
      { heading: "Make risk technically concrete", paragraphs: ["A technical risk is more than a coloured matrix cell. It describes a possible failure mechanism in a specific use context and its consequences.", "FMEA, FTA, field data, tests and expert knowledge provide different perspectives on the same decision."] },
      { heading: "Prioritise and define measures", paragraphs: ["Not every conceivable event deserves the same effort. Criteria support prioritisation but do not replace technical reasoning.", "Design changes that avoid or control causes usually take priority over measures that only improve detection."], media: { label: "Graphic placeholder: risk to measure and evidence", brief: "Failure mechanism, prioritisation, technical measure and effectiveness evidence.", ratio: "wide" } },
      { heading: "Demonstrate effectiveness", paragraphs: ["A measure is complete only when its effect has been verified through reviews, simulation, tests or statistical analysis.", "Traceable documentation links the original risk, decision, measure and result and supports state-of-the-art engineering practice."] },
    ], related: ["schwachstellenanalyse", "absicherung", "planung"], service: { label: "Risk and assurance services", href: "/leistungen/risikomanagement" },
  },
};

function addKnowledgeVisuals(article: KnowledgeArticle, locale: Locale): KnowledgeArticle {
  const visuals = knowledgeVisuals[article.slug];
  if (!visuals) return article;

  const pngSource = (source: string) => {
    return `/graphics/wissen/technical-plots/${source}-${locale}.png`;
  };

  let inlineVisualAdded = false;

  return {
    ...article,
    heroMedia: {
      ...article.heroMedia,
      src: pngSource(visuals.hero.src),
      ...visuals.hero[locale],
    },
    sections: article.sections.map((section) => {
      if (!section.media || inlineVisualAdded) return section;
      inlineVisualAdded = true;

      return {
        ...section,
        media: {
          ...section.media,
          src: pngSource(visuals.inline.src),
          ...visuals.inline[locale],
        },
      };
    }),
  };
}

const articlesByLocale: Record<Locale, readonly KnowledgeArticle[]> = {
  de: deArticles.map((article) => addKnowledgeVisuals(article, "de")),
  en: deArticles.map((article) => addKnowledgeVisuals(enOverrides[article.slug], "en")),
};

const glossaryDe: readonly GlossaryEntry[] = [
  { term: "Ausfallmechanismus", definition: "Physikalischer, chemischer, elektronischer oder softwarebezogener Vorgang, der zu einem Funktionsverlust führt." },
  { term: "Ausfallrate", definition: "Zeitabhängige Rate, mit der Einheiten einer betrachteten Population ausfallen." },
  { term: "B10-Lebensdauer", definition: "Zeit oder Nutzung, bis zu der statistisch zehn Prozent einer Population ausgefallen sind." },
  { term: "Badewannenkurve", definition: "Modellhafter Verlauf der Ausfallrate mit Früh-, Nutzungs- und Verschleißphase." },
  { term: "Design for Reliability (DfR)", definition: "Konstruktiver Ansatz, der Zuverlässigkeit systematisch in Anforderungen und Produktentwicklung integriert." },
  { term: "Design of Experiments (DoE)", definition: "Statistische Versuchsplanung zur effizienten Untersuchung von Faktoren, Wechselwirkungen und Zielgrößen." },
  { term: "Ermüdungsausfall", definition: "Ausfall infolge wiederholter oder wechselnder mechanischer Beanspruchung." },
  { term: "Fault Tree Analysis (FTA)", definition: "Deduktive Fehlerbaumanalyse, die mögliche Ursachen eines unerwünschten Top-Ereignisses logisch strukturiert." },
  { term: "Fehlermöglichkeits- und Einflussanalyse (FMEA)", definition: "Systematische Methode zur Analyse möglicher Fehlerarten, ihrer Ursachen, Folgen und Maßnahmen." },
  { term: "Frühausfall", definition: "Ausfall zu Beginn der Nutzungsdauer, häufig ausgelöst durch Fertigungs-, Montage- oder Materialfehler." },
  { term: "Health Monitoring", definition: "Überwachung technischer Zustände, um Veränderungen und kritische Entwicklungen früh zu erkennen." },
  { term: "Lebensdauer", definition: "Zeit, Lastwechsel oder Nutzung bis zum Erreichen eines definierten Ausfallkriteriums." },
  { term: "Lebensdaueranalyse", definition: "Statistische und technische Auswertung von Ausfallzeiten, zensierten Daten und Einflussbedingungen." },
  { term: "Lebensdauermodell", definition: "Mathematische Beschreibung des Zusammenhangs zwischen Belastung, Zeit und Ausfallverhalten." },
  { term: "Maintainability", definition: "Fähigkeit eines Systems, unter definierten Bedingungen instand gehalten oder wiederhergestellt zu werden." },
  { term: "Mean Time Between Failures (MTBF)", definition: "Mittlere Betriebszeit zwischen aufeinanderfolgenden Ausfällen eines reparierbaren Systems." },
  { term: "Mean Time To Failure (MTTF)", definition: "Mittlere Zeit bis zum Ausfall einer nicht reparierbaren Einheit." },
  { term: "Mean Time To Repair (MTTR)", definition: "Mittlere Zeit, die zur Wiederherstellung eines reparierbaren Systems benötigt wird." },
  { term: "Prognostics and Health Management (PHM)", definition: "Methoden zur Zustandsbewertung, Fehlerprognose und Planung geeigneter Instandhaltungsmaßnahmen." },
  { term: "Reliability Block Diagram (RBD)", definition: "Logische Darstellung, wie die Zuverlässigkeit von Komponenten die Systemfunktion beeinflusst." },
  { term: "Reliability Engineering", definition: "Ingenieurdisziplin zur Planung, Analyse, Erprobung, Absicherung und Prognose technischer Zuverlässigkeit." },
  { term: "Root Cause Analysis (RCA)", definition: "Strukturierte Untersuchung, um die grundlegende Ursache eines Fehlers oder Ausfalls zu bestimmen." },
  { term: "Stress Screening", definition: "Belastungsverfahren zur Erkennung latenter Fertigungs- oder Montagefehler vor dem Feldeinsatz." },
  { term: "Systemverfügbarkeit", definition: "Anteil der Zeit, in der ein System funktionsfähig und einsatzbereit ist." },
  { term: "Verschleißausfall", definition: "Ausfall durch fortschreitende Alterung, Abnutzung oder Materialdegradation." },
  { term: "Weibull-Analyse", definition: "Statistisches Verfahren zur Beschreibung von Lebensdauer, Streuung und charakteristischem Ausfallverhalten." },
  { term: "Zuverlässigkeit", definition: "Wahrscheinlichkeit, dass ein Produkt seine geforderte Funktion unter definierten Bedingungen über eine festgelegte Zeit erfüllt." },
];

const glossaryEnOverrides: Record<string, GlossaryEntry> = {
  Ausfallmechanismus: { term: "Failure mechanism", definition: "Physical, chemical, electronic or software-related process that causes loss of function." },
  Ausfallrate: { term: "Failure rate", definition: "Time-dependent rate at which units in a population fail." },
  "B10-Lebensdauer": { term: "B10 life", definition: "Time or usage by which ten percent of a population have statistically failed." },
  Badewannenkurve: { term: "Bathtub curve", definition: "Conceptual failure-rate curve with early-life, useful-life and wear-out phases." },
  "Design for Reliability (DfR)": { term: "Design for Reliability (DfR)", definition: "Engineering approach that integrates reliability into requirements and product development." },
  "Design of Experiments (DoE)": { term: "Design of Experiments (DoE)", definition: "Statistical experimental design for efficient investigation of factors, interactions and responses." },
  Ermüdungsausfall: { term: "Fatigue failure", definition: "Failure caused by repeated or alternating mechanical loading." },
  "Fault Tree Analysis (FTA)": { term: "Fault Tree Analysis (FTA)", definition: "Deductive analysis that structures possible causes of an unwanted top event." },
  "Fehlermöglichkeits- und Einflussanalyse (FMEA)": { term: "Failure Mode and Effects Analysis (FMEA)", definition: "Systematic analysis of potential failure modes, causes, effects and actions." },
  Frühausfall: { term: "Early-life failure", definition: "Failure at the beginning of use, often related to manufacturing, assembly or material defects." },
  "Health Monitoring": { term: "Health monitoring", definition: "Monitoring technical condition to detect changes and critical developments early." },
  Lebensdauer: { term: "Lifetime", definition: "Time, load cycles or use until a defined failure criterion is reached." },
  Lebensdaueranalyse: { term: "Lifetime analysis", definition: "Statistical and technical evaluation of failure times, censored data and operating conditions." },
  Lebensdauermodell: { term: "Lifetime model", definition: "Mathematical relationship between stress, time and failure behaviour." },
  Maintainability: { term: "Maintainability", definition: "Ability of a system to be maintained or restored under defined conditions." },
  "Mean Time Between Failures (MTBF)": { term: "Mean Time Between Failures (MTBF)", definition: "Average operating time between successive failures of a repairable system." },
  "Mean Time To Failure (MTTF)": { term: "Mean Time To Failure (MTTF)", definition: "Average time to failure of a non-repairable item." },
  "Mean Time To Repair (MTTR)": { term: "Mean Time To Repair (MTTR)", definition: "Average time required to restore a repairable system." },
  "Prognostics and Health Management (PHM)": { term: "Prognostics and Health Management (PHM)", definition: "Methods for condition assessment, failure prediction and maintenance planning." },
  "Reliability Block Diagram (RBD)": { term: "Reliability Block Diagram (RBD)", definition: "Logical representation of how component reliability influences system function." },
  "Reliability Engineering": { term: "Reliability engineering", definition: "Engineering discipline covering reliability planning, analysis, testing, assurance and prediction." },
  "Root Cause Analysis (RCA)": { term: "Root Cause Analysis (RCA)", definition: "Structured investigation to identify the fundamental cause of a failure." },
  "Stress Screening": { term: "Stress screening", definition: "Loading process used to reveal latent manufacturing or assembly defects before field use." },
  Systemverfügbarkeit: { term: "System availability", definition: "Proportion of time for which a system is functional and ready for use." },
  Verschleißausfall: { term: "Wear-out failure", definition: "Failure caused by progressive ageing, wear or material degradation." },
  "Weibull-Analyse": { term: "Weibull analysis", definition: "Statistical method for describing lifetime, variation and characteristic failure behaviour." },
  Zuverlässigkeit: { term: "Reliability", definition: "Probability that a product performs its required function under defined conditions for a specified period." },
};

export function getKnowledgeArticles(locale: Locale) {
  return articlesByLocale[locale];
}

export function getKnowledgeArticle(locale: Locale, slug: string) {
  return articlesByLocale[locale].find((article) => article.slug === slug);
}

export function getGlossary(locale: Locale): readonly GlossaryEntry[] {
  if (locale === "de") return glossaryDe;
  return glossaryDe.map((entry) => glossaryEnOverrides[entry.term] ?? entry);
}
