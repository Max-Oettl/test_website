import type { Locale } from "../_i18n/config";

export type IndustryService = {
  title: string;
  text: string;
  topics: string[];
  href: string;
};

export type IndustryDetailContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  heroImage: string;
  heroAlt: string;
  heroCta: string;
  decisionTitle: string;
  decisionText: string;
  decisionPath: Array<{
    label: string;
    text: string;
  }>;
  servicesTitle: string;
  servicesLead: string;
  services: IndustryService[];
  questionsTitle: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
  contextTitle: string;
  contextText: string;
  contextTerms: string[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

const serviceLinks = {
  reliability: "/leistungen/zuverlaessigkeitstechnik",
  risk: "/leistungen/risikomanagement",
  data: "/leistungen/datenanalyse-prognostik",
} as const;

const de: IndustryDetailContent[] = [
  {
    slug: "automotive",
    title: "Zuverlässigkeit im Automotive Engineering",
    metaTitle: "Zuverlässigkeit Automotive & Erprobung | RelTest",
    metaDescription:
      "Reliability Engineering für Automotive: Lebensdauererprobung, Risikomanagement, DoE, Felddatenanalyse und belastbare Zuverlässigkeitsnachweise.",
    heroLead:
      "Kurze Entwicklungszyklen, hohe Stückzahlen und sehr unterschiedliche Nutzungsprofile verlangen eine Absicherung, die reale Belastungen, Ausfallmechanismen und Freigabeziele zusammenführt.",
    heroImage: "/industries/automotive.png",
    heroAlt:
      "Automotive-Antriebsstrang in einer technischen Erprobungsumgebung",
    heroCta: "Automotive-Projekt besprechen",
    decisionTitle:
      "Entscheidend ist nicht die Zahl der Tests, sondern ihre Aussagekraft.",
    decisionText:
      "RelTest verbindet Kundenbetrieb, Lastkollektive, Bauteilverhalten und Felddaten zu einer Prüf- und Nachweisstrategie. So entstehen belastbare Aussagen, bevor Serienrisiken zu Garantie-, Kosten- oder Terminproblemen werden.",
    decisionPath: [
      {
        label: "Nutzung",
        text: "Fahrprofile, Umwelten und Kundenkollektive realistisch beschreiben.",
      },
      {
        label: "Risiko",
        text: "Kritische Ausfallmechanismen und Streuungen priorisieren.",
      },
      {
        label: "Erprobung",
        text: "DoE, Lebensdauertests und Stichproben auf die Aussage ausrichten.",
      },
      {
        label: "Freigabe",
        text: "Prüf- und Felddaten zu einem nachvollziehbaren Nachweis verbinden.",
      },
    ],
    servicesTitle: "Engineering-Leistungen für Automotive-Projekte",
    servicesLead:
      "Je nach Reifegrad arbeiten wir an einer einzelnen Fragestellung oder führen Ziele, Risiken, Tests und Daten in einem durchgängigen Absicherungskonzept zusammen.",
    services: [
      {
        title: "Zuverlässigkeitsplanung und Lebensdauer",
        text: "Wir leiten messbare Zuverlässigkeitsziele aus Nutzung und Kundenanforderungen ab, bewerten Lastkollektive und übersetzen sie in Entwicklungs- und Nachweisaufgaben.",
        topics: [
          "Lastkollektive",
          "Lebensdauerbewertung",
          "Zuverlässigkeitsziele",
        ],
        href: serviceLinks.reliability,
      },
      {
        title: "Risiko und technische Absicherung",
        text: "FMEA, Fehlerbäume und technische Reviews werden so eingesetzt, dass kritische Mechanismen früh sichtbar und Maßnahmen über den Projektverlauf nachverfolgt werden.",
        topics: [
          "FMEA und FTA",
          "Absicherungsstrategie",
          "Nachweisführung",
        ],
        href: serviceLinks.risk,
      },
      {
        title: "Erprobung, DoE und Felddaten",
        text: "Wir planen effiziente Versuche, werten Lebensdauer- und Garantiedaten aus und gleichen Prüfstandsergebnisse mit dem Verhalten im Feld ab.",
        topics: [
          "Design of Experiments",
          "Lebensdauererprobung",
          "Felddatenanalyse",
        ],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typische Fragen aus Automotive-Projekten",
    questions: [
      {
        question: "Bildet unsere Erprobung die reale Kundennutzung ab?",
        answer:
          "Wir vergleichen Belastungsprofile, Ausfallmechanismen und Prüfbedingungen und zeigen, wo Nachweise zu schwach oder unnötig aufwendig sind.",
      },
      {
        question: "Wie lässt sich mit begrenzten Prüflingen sicher entscheiden?",
        answer:
          "Statistische Nachweisplanung verbindet Zielzuverlässigkeit, Konfidenz, Prüfdauer und zulässige Ausfälle zu einer transparenten Entscheidung.",
      },
      {
        question: "Was lernen wir aus Garantie- und Felddaten?",
        answer:
          "Ausfallzeiten, Laufleistungen und Nutzung werden bereinigt, segmentiert und mit technischen Hypothesen verknüpft.",
      },
      {
        question: "Wo bringt DoE im Entwicklungsplan den größten Nutzen?",
        answer:
          "Versuchsplanung hilft, Wechselwirkungen zu erkennen, robuste Parameterbereiche zu bestimmen und Testaufwand gezielt einzusetzen.",
      },
    ],
    contextTitle: "Im Automotive-Kontext anschlussfähig",
    contextText:
      "Unsere Arbeit fügt sich in bestehende Entwicklungs-, Qualitäts- und Freigabeprozesse ein. Relevante Anforderungen und interne Standards werden in die technische Argumentation integriert, ohne Methoden zum Selbstzweck zu machen.",
    contextTerms: [
      "ISO 26262-Kontext",
      "IATF-nahe Entwicklungsprozesse",
      "Garantie- und Felddaten",
      "beschleunigte Erprobung",
    ],
    ctaTitle: "Welche Aussage muss Ihr Automotive-Projekt absichern?",
    ctaText:
      "Wir ordnen Ziel, Datenlage und Entwicklungsstand ein und schlagen einen belastbaren nächsten Schritt vor.",
    ctaLabel: "Automotive-Projekt einordnen",
  },
  {
    slug: "maschinenbau",
    title: "Zuverlässigkeit im Maschinen- und Anlagenbau",
    metaTitle: "Zuverlässigkeit Maschinenbau & Lebensdauer | RelTest",
    metaDescription:
      "Zuverlässigkeitstechnik im Maschinenbau: Lebensdauerbewertung, Verschleiß, Erprobungsstrategie, Weibull-Analyse und Verfügbarkeitsbewertung.",
    heroLead:
      "Variable Lasten, lange Einsatzzeiten und teure Stillstände machen Zuverlässigkeit zu einer technischen und wirtschaftlichen Kenngröße.",
    heroImage: "/industries/maschinenbau.png",
    heroAlt:
      "Industriegetriebe als Beispiel für zuverlässigkeitskritische Maschinenbaukomponenten",
    heroCta: "Maschinenbau-Projekt besprechen",
    decisionTitle:
      "Lebensdauer wird belastbar, wenn Last, Mechanismus und Daten zusammenpassen.",
    decisionText:
      "Wir trennen Verschleiß, Ermüdung, zufällige Ausfälle und systematische Schwachstellen. Daraus entstehen Prüfungen und Bewertungsmodelle, die zur Maschine, ihrer Nutzung und den tatsächlichen Ausfallfolgen passen.",
    decisionPath: [
      {
        label: "Betrieb",
        text: "Lasten, Zyklen, Umgebungen und Wartung realistisch erfassen.",
      },
      {
        label: "Mechanismus",
        text: "Verschleiß, Ermüdung und funktionale Schwachstellen unterscheiden.",
      },
      {
        label: "Daten",
        text: "Prüf-, Ausfall- und Betriebsdaten statistisch belastbar bewerten.",
      },
      {
        label: "Maßnahme",
        text: "Konstruktion, Teststrategie oder Instandhaltung gezielt verbessern.",
      },
    ],
    servicesTitle: "Zuverlässigkeit für Maschinen und Anlagen entwickeln",
    servicesLead:
      "RelTest unterstützt von der frühen Auslegung bis zur Bewertung bestehender Feldprobleme. Der Fokus liegt auf nachvollziehbaren technischen Entscheidungen, nicht auf isolierten Kennzahlen.",
    services: [
      {
        title: "Lebensdauer und Systemzuverlässigkeit",
        text: "Wir strukturieren Zuverlässigkeitsziele, bewerten Bauteil- und Systemlebensdauer und verbinden mechanische Ausfallmodelle mit realen Einsatzprofilen.",
        topics: [
          "Lastkollektive",
          "Weibull-Analyse",
          "Systemzuverlässigkeit",
        ],
        href: serviceLinks.reliability,
      },
      {
        title: "Schwachstellen und Ausfallfolgen",
        text: "Technische Risiken werden nach Ursache, Wirkung und wirtschaftlicher Relevanz geordnet. So lassen sich konstruktive Maßnahmen und Nachweise sinnvoll priorisieren.",
        topics: ["FMEA und FTA", "Kritikalität", "Stand der Technik"],
        href: serviceLinks.risk,
      },
      {
        title: "Prüfstrategie und Betriebsdaten",
        text: "Wir planen Lebensdauertests, bewerten kleine Stichproben und nutzen Betriebs- und Ausfalldaten, um Prognosen und Verbesserungsmaßnahmen abzusichern.",
        topics: [
          "Lebensdauererprobung",
          "Felddatenanalyse",
          "Verfügbarkeit",
        ],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typische Fragen im Maschinenbau",
    questions: [
      {
        question: "Welche Komponenten bestimmen die Systemlebensdauer?",
        answer:
          "Eine Systembetrachtung zeigt, welche Ausfälle Verfügbarkeit und Kundennutzen tatsächlich begrenzen und wo Detailanalysen sinnvoll sind.",
      },
      {
        question: "Wie übertragen wir Prüfstandsergebnisse auf den Betrieb?",
        answer:
          "Belastung, Schädigung und Nutzungsstreuung werden in einem nachvollziehbaren Übertragungsmodell zusammengeführt.",
      },
      {
        question: "Ist ein Feldausfall zufällig oder systematisch?",
        answer:
          "Lebensdaten, Schadensbilder und Einsatzbedingungen helfen, Populationen zu trennen und technische Ursachen gezielt zu prüfen.",
      },
      {
        question: "Wie viel Erprobung ist für eine Freigabe erforderlich?",
        answer:
          "Der Nachweis wird aus Ziel, Unsicherheit, Stichprobe und zulässigem Risiko geplant, statt pauschale Prüfdauern zu übernehmen.",
      },
    ],
    contextTitle: "Konstruktion, Betrieb und Instandhaltung verbinden",
    contextText:
      "Im Maschinenbau liegen wichtige Zuverlässigkeitsinformationen häufig verteilt: in Berechnungen, Prüfständen, Serviceberichten und Erfahrungswissen. Wir schaffen daraus eine gemeinsame Bewertungsbasis.",
    contextTerms: [
      "Lebensdauer und Verschleiß",
      "Maschinensicherheit",
      "Verfügbarkeit",
      "Betriebs- und Wartungsdaten",
    ],
    ctaTitle: "Wo begrenzt Zuverlässigkeit den Erfolg Ihrer Maschine?",
    ctaText:
      "Wir prüfen Lastannahmen, Daten und Nachweisstrategie und machen den nächsten technischen Schritt konkret.",
    ctaLabel: "Maschinenbau-Projekt einordnen",
  },
  {
    slug: "elektronische-produkte",
    title: "Zuverlässigkeit elektronischer Produkte",
    metaTitle: "Zuverlässigkeit Elektronik & Umwelterprobung | RelTest",
    metaDescription:
      "Reliability Engineering für Elektronik: Umwelterprobung, thermische Zyklen, Alterung, DoE, Ausfallmechanismen und Lebensdauerbewertung.",
    heroLead:
      "Temperatur, Feuchte, Vibration, elektrische Belastung und Bauteilstreuung wirken gleichzeitig. Gute Absicherung prüft deshalb Mechanismen und nicht nur Normprofile.",
    heroImage: "/industries/elektronische-produkte.png",
    heroAlt:
      "Elektronische Baugruppe während einer technischen Zuverlässigkeitsmessung",
    heroCta: "Elektronik-Projekt besprechen",
    decisionTitle:
      "Ein bestandener Test ist nur dann wertvoll, wenn er das richtige Risiko adressiert.",
    decisionText:
      "RelTest verbindet Nutzungsumgebung, physikalische Ausfallmechanismen und Prüfparameter. Damit wird erkennbar, welche Belastungen beschleunigt werden dürfen und wo eine Prüfung unbeabsichtigt andere Mechanismen erzeugt.",
    decisionPath: [
      {
        label: "Umgebung",
        text: "Temperatur, Feuchte, Vibration und elektrische Last beschreiben.",
      },
      {
        label: "Mechanismus",
        text: "Alterung, Korrosion, Lötstellen und Bauteilstreuung einordnen.",
      },
      {
        label: "Prüfung",
        text: "Belastungsprofile und Beschleunigung mechanistisch planen.",
      },
      {
        label: "Bewertung",
        text: "Ausfälle, Zensierungen und Unsicherheit statistisch berücksichtigen.",
      },
    ],
    servicesTitle: "Elektronik methodisch und wirtschaftlich absichern",
    servicesLead:
      "Wir arbeiten an Komponenten, Baugruppen und Geräten. Entscheidend ist die Verbindung aus technischem Verständnis, geeigneter Erprobung und sauberer Datenbewertung.",
    services: [
      {
        title: "Zuverlässigkeitsziele und Alterungsmodelle",
        text: "Wir strukturieren Anforderungen, ordnen relevante Belastungen ein und bewerten, wie Alterung und Nutzung die erwartete Lebensdauer beeinflussen.",
        topics: [
          "Lebensdauerziele",
          "Alterungsmodelle",
          "Nutzungsprofile",
        ],
        href: serviceLinks.reliability,
      },
      {
        title: "Ausfallmechanismen und Risikoanalyse",
        text: "Technische Risiken werden auf Komponenten- und Systemebene betrachtet. Daraus leiten wir wirksame Präventions- und Nachweismaßnahmen ab.",
        topics: [
          "Mechanismenorientierte FMEA",
          "Derating",
          "Absicherungsplan",
        ],
        href: serviceLinks.risk,
      },
      {
        title: "Umwelterprobung und Versuchsplanung",
        text: "DoE und statistische Testplanung helfen, Einflussgrößen, Wechselwirkungen und robuste Parameterbereiche mit vertretbarem Aufwand zu bestimmen.",
        topics: [
          "Temperatur und Feuchte",
          "Design of Experiments",
          "Lebensdatenanalyse",
        ],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typische Fragen bei elektronischen Produkten",
    questions: [
      {
        question: "Prüfen wir reale Alterung oder nur einen harten Standardtest?",
        answer:
          "Wir gleichen Belastung, Ausfallbild und Beschleunigungsannahme ab und prüfen, ob der relevante Mechanismus erhalten bleibt.",
      },
      {
        question: "Welche Einflussgrößen treiben die Ausfallstreuung?",
        answer:
          "Ein strukturierter Versuchsplan trennt Hauptwirkungen und Wechselwirkungen und verhindert, dass zufällige Streuung als Ursache interpretiert wird.",
      },
      {
        question: "Wie bewerten wir Tests ohne Ausfall?",
        answer:
          "Auch aus ausfallfreien Prüfungen lassen sich Nachweise ableiten, wenn Stichprobe, Dauer, Ziel und Konfidenz sauber geplant sind.",
      },
      {
        question: "Wie verbinden wir Labor- und Rückläuferdaten?",
        answer:
          "Gemeinsame Merkmale und Belastungsinformationen machen sichtbar, ob Labor und Feld dieselbe Population und denselben Mechanismus abbilden.",
      },
    ],
    contextTitle: "Prüfnormen fachlich richtig einsetzen",
    contextText:
      "Normen und Kundenvorgaben bilden einen wichtigen Rahmen. Die technische Aussage entsteht jedoch erst, wenn Prüfprofil, Produktnutzung und erwarteter Ausfallmechanismus zusammenpassen.",
    contextTerms: [
      "IEC 60068-Kontext",
      "Umwelterprobung",
      "beschleunigte Alterung",
      "Bauteil- und Prozessstreuung",
    ],
    ctaTitle: "Welche Belastung entscheidet über Ihr Elektronikprodukt?",
    ctaText:
      "Wir prüfen Mechanismen, vorhandene Tests und Daten und entwickeln daraus eine belastbare Absicherungsstrategie.",
    ctaLabel: "Elektronik-Projekt einordnen",
  },
  {
    slug: "halbleiterindustrie",
    title: "Zuverlässigkeit in der Halbleiterindustrie",
    metaTitle: "Halbleiter Zuverlässigkeit, DoE & Qualifikation | RelTest",
    metaDescription:
      "Reliability Engineering für Halbleiter: DoE, Prozessstreuung, AEC-Q100-Kontext, IEC 60749, Lebensdauertests und statistische Datenanalyse.",
    heroLead:
      "Enge Prozessfenster, hohe Datendichte und neue Technologien verlangen eine klare Trennung von Prozessstreuung, Messunsicherheit und tatsächlicher Zuverlässigkeitsänderung.",
    heroImage: "/industries/halbleiterindustrie.png",
    heroAlt:
      "Halbleiter-Wafer in einer präzisen Fertigungs- und Prüfumgebung",
    heroCta: "Halbleiter-Projekt besprechen",
    decisionTitle:
      "Viele Daten ersetzen kein Modell für den Ausfallmechanismus.",
    decisionText:
      "RelTest strukturiert Stressbedingungen, Einflussgrößen und Zielgrößen so, dass Qualifikations- und Lebensdauerdaten eine technische Aussage tragen. DoE schafft dabei Effizienz, ohne kritische Wechselwirkungen auszublenden.",
    decisionPath: [
      {
        label: "Technologie",
        text: "Bauteil, Anwendung und relevante Degradationsmechanismen abgrenzen.",
      },
      {
        label: "Stress",
        text: "Temperatur, Feuchte, Spannung und Lastwechsel mechanistisch planen.",
      },
      {
        label: "Statistik",
        text: "Streuung, Zensierung und Stichprobeneffekte korrekt modellieren.",
      },
      {
        label: "Qualifikation",
        text: "Ergebnisse nachvollziehbar gegen Ziel und Einsatz bewerten.",
      },
    ],
    servicesTitle: "Datenintensive Halbleiterprojekte belastbar entscheiden",
    servicesLead:
      "Wir unterstützen bei Produktqualifikation und robusten Prozessen ebenso wie bei Zuverlässigkeitsfragen an Fertigungs- und Prüfequipment.",
    services: [
      {
        title: "Mechanismen und Zuverlässigkeitsmodelle",
        text: "Wir übersetzen technologische Besonderheiten und Einsatzbedingungen in bewertbare Zuverlässigkeitsziele und geeignete Lebensdauermodelle.",
        topics: [
          "Degradationsmechanismen",
          "Beschleunigungsmodelle",
          "Zuverlässigkeitsziele",
        ],
        href: serviceLinks.reliability,
      },
      {
        title: "Qualifikations- und Produktrisiken",
        text: "Risiken werden nach Mechanismus, Kritikalität und Nachweisbedarf priorisiert. Die technische Dokumentation macht Annahmen und Grenzen transparent.",
        topics: [
          "AEC-Q100-Kontext",
          "Risikobewertung",
          "Qualifikationsstrategie",
        ],
        href: serviceLinks.risk,
      },
      {
        title: "DoE und statistische Datenanalyse",
        text: "Wir planen effiziente Faktorstudien, modellieren Antwortgrößen und bewerten Lebensdauer- und Stressdaten mit geeigneten Verteilungen.",
        topics: [
          "Design of Experiments",
          "Prozessfenster",
          "Lebensdatenanalyse",
        ],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typische Fragen in Halbleiterprojekten",
    questions: [
      {
        question: "Welche Faktoren beeinflussen Ausbeute und Zuverlässigkeit wirklich?",
        answer:
          "DoE trennt relevante Effekte, Wechselwirkungen und Messstreuung und liefert ein Modell statt einer Folge unverbundener Einzelversuche.",
      },
      {
        question: "Ist die Beschleunigung physikalisch noch plausibel?",
        answer:
          "Stressniveau, Mechanismus und Modellannahmen werden gemeinsam geprüft, bevor Ergebnisse auf Einsatzbedingungen extrapoliert werden.",
      },
      {
        question: "Wie vergleichen wir Technologien oder Prozessvarianten?",
        answer:
          "Ein einheitliches statistisches Bewertungsmodell verhindert, dass Stichprobe oder Testdauer den Vergleich unbemerkt verzerren.",
      },
      {
        question: "Wie wird Equipment-Zuverlässigkeit messbar?",
        answer:
          "Aus Betriebs-, Fehler- und Wartungsdaten lassen sich Verfügbarkeit, Ausfallmuster und priorisierte Verbesserungsfelder ableiten.",
      },
    ],
    contextTitle: "Produkt, Prozess und Equipment gemeinsam betrachten",
    contextText:
      "Halbleiterzuverlässigkeit entsteht an mehreren Schnittstellen. Unsere Methodik verbindet qualifikationsnahe Prüfungen mit Prozessverständnis und der Zuverlässigkeit der eingesetzten Produktions- und Testsysteme.",
    contextTerms: [
      "AEC-Q100-Kontext",
      "IEC 60749",
      "Power Cycling",
      "SEMI-E10-Kennzahlen",
    ],
    ctaTitle: "Welche Daten tragen Ihre Halbleiterentscheidung?",
    ctaText:
      "Wir ordnen Mechanismus, Versuchsraum und Bewertungsmodell ein und schaffen eine belastbare Auswertungsstrategie.",
    ctaLabel: "Halbleiter-Projekt einordnen",
  },
  {
    slug: "konsumgueter",
    title: "Zuverlässigkeit für Consumer-Technik",
    metaTitle: "Consumer Electronics Zuverlässigkeit & Tests | RelTest",
    metaDescription:
      "Zuverlässigkeit für Consumer-Technik: Nutzungsprofile, Robust Design, beschleunigte Tests, DoE, Rückläuferdaten und wirtschaftliche Absicherung.",
    heroLead:
      "Vielfältige Nutzung, hoher Kostendruck und kurze Produktzyklen erfordern eine Absicherung, die schnell lernt und dennoch relevante Ausfallrisiken trifft.",
    heroImage: "/industries/consumer-technik-v2.png",
    heroAlt:
      "Consumer-Elektronik und Smart Devices in einem Zuverlässigkeitslabor",
    heroCta: "Consumer-Produkt besprechen",
    decisionTitle:
      "Robustheit muss zur echten Nutzung passen, nicht zum idealisierten Anwender.",
    decisionText:
      "RelTest strukturiert Nutzungsprofile, Missbrauch, Umwelteinflüsse und Produktstreuung. So lassen sich Tests priorisieren, Rückläufer schneller verstehen und Verbesserungen dort umsetzen, wo sie Kundenerlebnis und Kosten wirklich beeinflussen.",
    decisionPath: [
      {
        label: "Nutzer",
        text: "Nutzungsdauer, Häufigkeit, Umgebung und Fehlanwendung erfassen.",
      },
      {
        label: "Produkt",
        text: "Kritische Funktionen und kostentreibende Ausfälle priorisieren.",
      },
      {
        label: "Test",
        text: "Robustheit und Lebensdauer mit effizienten Versuchen prüfen.",
      },
      {
        label: "Lernen",
        text: "Rückläufer und Reviews in die nächste Generation übertragen.",
      },
    ],
    servicesTitle: "Consumer-Produkte schnell und zielgerichtet absichern",
    servicesLead:
      "Wir helfen, technische Tiefe und wirtschaftliche Entwicklungsziele zu verbinden. Entscheidend ist, früh die richtigen Risiken zu prüfen.",
    services: [
      {
        title: "Nutzungs- und Zuverlässigkeitsziele",
        text: "Aus Kundennutzung, Qualitätszielen und Produktlebensdauer entstehen messbare Anforderungen für Entwicklung und Freigabe.",
        topics: [
          "Nutzungsprofile",
          "Zielzuverlässigkeit",
          "Robust Design",
        ],
        href: serviceLinks.reliability,
      },
      {
        title: "Produkt- und Kostenrisiken",
        text: "Wir priorisieren Ausfallarten nach Kundeneffekt, Häufigkeit und wirtschaftlicher Wirkung und richten Maßnahmen auf die entscheidenden Schwachstellen aus.",
        topics: [
          "Risikoanalyse",
          "Schwachstellen",
          "Rückläufermanagement",
        ],
        href: serviceLinks.risk,
      },
      {
        title: "Beschleunigte Tests und DoE",
        text: "Versuchsplanung und Lebensdatenanalyse reduzieren Testaufwand, machen Streuung sichtbar und liefern früh verwertbare Entscheidungen.",
        topics: [
          "Design of Experiments",
          "beschleunigte Tests",
          "Rückläuferdaten",
        ],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typische Fragen bei Consumer-Produkten",
    questions: [
      {
        question: "Welche Nutzung müssen unsere Tests abdecken?",
        answer:
          "Wir segmentieren Anwender- und Umgebungsprofile und übersetzen sie in relevante Belastungen und Grenzfälle.",
      },
      {
        question: "Wie finden wir mit wenig Zeit die kritischen Faktoren?",
        answer:
          "Screening-Versuche und DoE identifizieren Hauptwirkungen und Wechselwirkungen effizienter als sequenzielle Einzeltests.",
      },
      {
        question: "Welche Rückläufer verdienen sofortige Aufmerksamkeit?",
        answer:
          "Ausfallhäufigkeit, Kundeneffekt und technische Kritikalität ergeben eine nachvollziehbare Priorisierung.",
      },
      {
        question: "Wie vermeiden wir Übererprobung?",
        answer:
          "Jede Prüfung wird an eine konkrete Risiko- oder Nachweisaussage gekoppelt. Redundante Tests werden sichtbar.",
      },
    ],
    contextTitle: "Schnelle Entwicklung ohne blinde Zuverlässigkeitslücken",
    contextText:
      "Bei Consumer-Technik ist nicht jeder Ausfall sicherheitskritisch, aber jeder unnötige Rückläufer belastet Kosten und Marke. Eine risikobasierte Teststrategie hält beides im Blick.",
    contextTerms: [
      "Smart Devices",
      "Haushalts- und Freizeitprodukte",
      "beschleunigte Tests",
      "Garantie- und Rückläuferdaten",
    ],
    ctaTitle: "Wo entsteht das größte Risiko für Ihr Consumer-Produkt?",
    ctaText:
      "Wir verbinden Nutzung, technische Schwachstellen und Testaufwand zu einer klaren Priorität.",
    ctaLabel: "Consumer-Projekt einordnen",
  },
  {
    slug: "erneuerbare-energien",
    title: "Zuverlässigkeit für erneuerbare Energiesysteme",
    metaTitle: "Zuverlässigkeit Windenergie & Erneuerbare | RelTest",
    metaDescription:
      "Reliability Engineering für erneuerbare Energien: Windenergie, Lebensdauerprognose, Felddatenanalyse, Verfügbarkeit und risikobasierte Erprobung.",
    heroLead:
      "Lange Laufzeiten, wechselnde Umweltbedingungen und schwer zugängliche Anlagen machen Prognosen, Verfügbarkeit und wartungsarme Konstruktionen zum Geschäftsfaktor.",
    heroImage: "/industries/erneuerbare-energien.png",
    heroAlt:
      "Technische Komponenten und Prüfumgebung für erneuerbare Energiesysteme",
    heroCta: "Energie-Projekt besprechen",
    decisionTitle:
      "Im Feld entscheidet nicht nur Lebensdauer, sondern auch Verfügbarkeit.",
    decisionText:
      "RelTest verbindet Last- und Umweltdaten mit Ausfall- und Wartungsinformationen. Dadurch werden kritische Komponenten, realistische Lebensdauerannahmen und wirtschaftliche Verbesserungsmaßnahmen sichtbar.",
    decisionPath: [
      {
        label: "Standort",
        text: "Wind, Temperatur, Feuchte, Netz und Betriebsweise einordnen.",
      },
      {
        label: "System",
        text: "Kritische Komponenten und Abhängigkeiten bewerten.",
      },
      {
        label: "Feld",
        text: "SCADA-, Ausfall- und Wartungsdaten belastbar strukturieren.",
      },
      {
        label: "Prognose",
        text: "Lebensdauer, Verfügbarkeit und Maßnahmenwirkung quantifizieren.",
      },
    ],
    servicesTitle: "Zuverlässigkeit über lange Betriebszeiten beherrschen",
    servicesLead:
      "Wir unterstützen Komponentenhersteller und Systemverantwortliche bei neuen Entwicklungen, Flottenanalysen und der Bewertung bestehender Zuverlässigkeitsprobleme.",
    services: [
      {
        title: "Lebensdauer- und Verfügbarkeitsmodelle",
        text: "Wir bewerten Lastkollektive, Zuverlässigkeitsziele und Systemabhängigkeiten und entwickeln belastbare Prognosen für unterschiedliche Einsatzbedingungen.",
        topics: [
          "Lebensdauerprognose",
          "Systemzuverlässigkeit",
          "Verfügbarkeit",
        ],
        href: serviceLinks.reliability,
      },
      {
        title: "Risiken und Absicherungsstrategie",
        text: "Kritische Komponenten, Fehlerfolgen und Nachweisbedarf werden risikobasiert priorisiert. Daraus entsteht ein wirtschaftlicher Absicherungsplan.",
        topics: ["FMEA und FTA", "Kritikalität", "Wartungsstrategie"],
        href: serviceLinks.risk,
      },
      {
        title: "Feld-, Prüf- und Zustandsdaten",
        text: "Wir verbinden Prüfstand, Flottendaten und Condition Monitoring, um Ausfallmuster zu verstehen und Prognosen schrittweise zu verbessern.",
        topics: [
          "Felddatenanalyse",
          "Health Monitoring",
          "statistische Prognostik",
        ],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typische Fragen bei erneuerbaren Energiesystemen",
    questions: [
      {
        question: "Welche Komponenten treiben Ausfallkosten und Stillstand?",
        answer:
          "Eine kombinierte Kritikalitäts- und Datenauswertung trennt häufige Störungen von seltenen, aber wirtschaftlich gravierenden Ausfällen.",
      },
      {
        question: "Sind Flottendaten zwischen Standorten vergleichbar?",
        answer:
          "Betriebsbedingungen und Datenqualität werden normalisiert, bevor Ausfallraten oder Lebensdauerverteilungen verglichen werden.",
      },
      {
        question: "Wie belastbar ist eine Lebensdauerverlängerung?",
        answer:
          "Lastgeschichte, Inspektion, Ausfälle und Modellunsicherheit werden transparent in die Prognose einbezogen.",
      },
      {
        question: "Welche Tests bilden Feldbelastungen sinnvoll ab?",
        answer:
          "Wir priorisieren Mechanismen und übersetzen reale Lasten in beschleunigte, aber physikalisch plausible Prüfprofile.",
      },
    ],
    contextTitle: "Zuverlässigkeit als Teil des Anlagenlebenszyklus",
    contextText:
      "Von der Auslegung bis zum Weiterbetrieb ändern sich Datenlage und Entscheidung. Die Methodik muss deshalb mitwachsen und neue Felderkenntnisse systematisch aufnehmen.",
    contextTerms: [
      "IEC-61400-Kontext",
      "Windenergie und Antriebstrang",
      "SCADA- und Flottendaten",
      "Condition Monitoring",
    ],
    ctaTitle: "Welche Unsicherheit begrenzt Ihre Anlagenentscheidung?",
    ctaText:
      "Wir prüfen Daten, Lebensdauerannahmen und Absicherungsbedarf und entwickeln eine belastbare Bewertungslogik.",
    ctaLabel: "Energie-Projekt einordnen",
  },
  {
    slug: "medizintechnik",
    title: "Zuverlässigkeit und Risikomanagement in der Medizintechnik",
    metaTitle: "Medizintechnik Zuverlässigkeit & Risikomanagement | RelTest",
    metaDescription:
      "Zuverlässigkeitstechnik für Medizintechnik: ISO-14971-Kontext, Risikoanalyse, Verifikation, Lebensdauererprobung und technische Dokumentation.",
    heroLead:
      "Technische Funktion, Patientensicherheit und nachvollziehbare Dokumentation müssen über den gesamten Produktlebenszyklus konsistent zusammenwirken.",
    heroImage: "/industries/medizintechnik-v2.png",
    heroAlt:
      "Medizintechnisches System in einer technischen Entwicklungs- und Prüfumgebung",
    heroCta: "Medizintechnik-Projekt besprechen",
    decisionTitle:
      "Ein Nachweis überzeugt, wenn Risiko, Anforderung und Prüfung lückenlos verbunden sind.",
    decisionText:
      "RelTest unterstützt bei der technischen Seite des Risikomanagements: Ausfallmechanismen verstehen, Zuverlässigkeitsziele festlegen, Prüfungen begründen und Ergebnisse so dokumentieren, dass Entscheidungen später nachvollziehbar bleiben.",
    decisionPath: [
      {
        label: "Anwendung",
        text: "Nutzung, Umgebungen und sicherheitsrelevante Funktionen abgrenzen.",
      },
      {
        label: "Risiko",
        text: "Gefährdungen, technische Ausfälle und Maßnahmen verknüpfen.",
      },
      {
        label: "Nachweis",
        text: "Verifikation, Lebensdauer und Stichprobe risikobasiert planen.",
      },
      {
        label: "Dokumentation",
        text: "Annahmen, Ergebnisse und Restrisiken nachvollziehbar festhalten.",
      },
    ],
    servicesTitle: "Technische Absicherung für medizintechnische Produkte",
    servicesLead:
      "Wir ergänzen regulatorische Prozesse um fundierte Reliability-Engineering-Methoden und schaffen eine belastbare Verbindung zwischen Risikoakte, Entwicklung und Erprobung.",
    services: [
      {
        title: "Zuverlässigkeitsanforderungen und Lebensdauer",
        text: "Wir definieren quantitative Ziele, bewerten Nutzung und Alterung und planen Nachweise für Komponenten, Geräte und technische Funktionen.",
        topics: [
          "Zuverlässigkeitsziele",
          "Lebensdauerbewertung",
          "Verifikation",
        ],
        href: serviceLinks.reliability,
      },
      {
        title: "Technisches Risikomanagement",
        text: "Ausfallmechanismen, Fehlerfolgen und Risikokontrollmaßnahmen werden methodisch verknüpft und über Reviews auf Konsistenz geprüft.",
        topics: [
          "ISO-14971-Kontext",
          "FMEA und FTA",
          "Risikokontrolle",
        ],
        href: serviceLinks.risk,
      },
      {
        title: "Erprobung und statistische Nachweise",
        text: "Wir planen Stichproben und Prüfdauern, bewerten Ausfälle und zensierte Daten und dokumentieren die Aussagekraft der Ergebnisse.",
        topics: [
          "Lebensdauererprobung",
          "Nachweisplanung",
          "Datenanalyse",
        ],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typische Fragen in der Medizintechnik",
    questions: [
      {
        question: "Ist die Zuverlässigkeitsanforderung messbar formuliert?",
        answer:
          "Wir übersetzen qualitative Erwartungen in Kenngröße, Zielwert, Zeitraum, Population und geforderte Sicherheit.",
      },
      {
        question: "Deckt die Verifikation die identifizierten Risiken ab?",
        answer:
          "Eine Traceability-Prüfung zeigt Lücken zwischen technischer Ursache, Risikokontrollmaßnahme und geplantem Nachweis.",
      },
      {
        question: "Wie gehen wir mit wenigen Prüflingen um?",
        answer:
          "Risikobasierte Planung, Vorwissen und geeignete statistische Modelle helfen, Aussage und Aufwand transparent auszubalancieren.",
      },
      {
        question: "Was lässt sich aus Post-Market-Daten lernen?",
        answer:
          "Feld- und Servicedaten werden strukturiert, um Trends, Populationen und mögliche neue Ausfallmuster früh zu erkennen.",
      },
    ],
    contextTitle: "Fachlich belastbar im regulierten Entwicklungsumfeld",
    contextText:
      "RelTest ersetzt keine regulatorische Beratung. Wir liefern die technische Methodik, Analyse und Nachweislogik, die Risiko- und Entwicklungsdokumentation inhaltlich belastbar macht.",
    contextTerms: [
      "ISO 14971",
      "EU-MDR-Kontext",
      "Verifikation und Validierung",
      "Post-Market-Daten",
    ],
    ctaTitle: "Welche technische Aussage muss Ihr Medizinprodukt tragen?",
    ctaText:
      "Wir prüfen Risiko, Zuverlässigkeitsziel und Nachweisweg und zeigen, wo die technische Argumentation gestärkt werden kann.",
    ctaLabel: "Medizintechnik-Projekt einordnen",
  },
  {
    slug: "luft-und-raumfahrt",
    title: "Dependability für Luft- und Raumfahrt",
    metaTitle: "Luft- und Raumfahrt Reliability Engineering | RelTest",
    metaDescription:
      "Reliability Engineering für Luft- und Raumfahrt: Dependability, FMEA, FTA, Lebensdauer, Umwelterprobung und nachvollziehbare Nachweise.",
    heroLead:
      "Geringe Stückzahlen, extreme Umgebungen und hohe Ausfallfolgen verlangen eine Absicherung, die Risiken systematisch beherrscht und jede Annahme nachvollziehbar macht.",
    heroImage: "/industries/luft-und-raumfahrt-v2.png",
    heroAlt:
      "Luft- und Raumfahrtkomponente während einer präzisen technischen Prüfung",
    heroCta: "Aerospace-Projekt besprechen",
    decisionTitle:
      "Bei hohen Ausfallfolgen muss die technische Argumentation geschlossen sein.",
    decisionText:
      "RelTest verbindet Systemarchitektur, Ausfallmechanismen, Umweltlasten und Nachweise. So wird sichtbar, welches Risiko konstruktiv reduziert, durch Test abgesichert oder über Analyse und Redundanz beherrscht werden muss.",
    decisionPath: [
      {
        label: "Mission",
        text: "Funktion, Einsatzprofil und zulässige Ausfallfolgen abgrenzen.",
      },
      {
        label: "Architektur",
        text: "Abhängigkeiten, Redundanzen und kritische Pfade analysieren.",
      },
      {
        label: "Assurance",
        text: "Analyse, Erprobung und Dokumentation risikobasiert kombinieren.",
      },
      {
        label: "Entscheidung",
        text: "Restrisiken und Nachweisgrenzen transparent bewerten.",
      },
    ],
    servicesTitle: "Reliability, Risk und Assurance zusammenführen",
    servicesLead:
      "Wir unterstützen System- und Komponentenprojekte mit einer methodischen, dokumentationsstarken Arbeitsweise und passen die Tiefe an Kritikalität und Projektphase an.",
    services: [
      {
        title: "Reliability und Systembetrachtung",
        text: "Zuverlässigkeitsziele, Blockdiagramme und Lebensdauermodelle machen Systembeiträge, Abhängigkeiten und kritische Komponenten quantifizierbar.",
        topics: [
          "Reliability Allocation",
          "Systemzuverlässigkeit",
          "Lebensdauer",
        ],
        href: serviceLinks.reliability,
      },
      {
        title: "Risiko, FMEA und Fehlerbäume",
        text: "Wir strukturieren Top Events, Ursachen, Common-Cause-Risiken und Maßnahmen und prüfen die Konsistenz zwischen Analyse, Architektur und Nachweis.",
        topics: ["FMEA und FTA", "Common Cause", "Assurance Reviews"],
        href: serviceLinks.risk,
      },
      {
        title: "Umwelterprobung und Nachweisdaten",
        text: "Testprofile, Stichproben und Datenbewertung werden auf Mission, Mechanismus und geforderte Aussage abgestimmt.",
        topics: [
          "Umwelterprobung",
          "Nachweisplanung",
          "Lebensdatenanalyse",
        ],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typische Fragen in Luft- und Raumfahrtprojekten",
    questions: [
      {
        question: "Welche Komponente dominiert das Missionsrisiko?",
        answer:
          "Systemmodelle und Fehlerbäume zeigen kritische Pfade und machen Annahmen über Redundanz und Abhängigkeit explizit.",
      },
      {
        question: "Sind Analyse und Teststrategie konsistent?",
        answer:
          "Wir prüfen, ob priorisierte Mechanismen durch konstruktive Maßnahmen, Inspektion oder passende Tests tatsächlich adressiert werden.",
      },
      {
        question: "Wie wird mit kleinen Stichproben belastbar argumentiert?",
        answer:
          "Physikalische Modelle, Vorwissen, konservative Grenzen und statistische Nachweise werden zu einer transparenten Argumentation kombiniert.",
      },
      {
        question: "Bleiben Entscheidungen später nachvollziehbar?",
        answer:
          "Annahmen, Datenquellen, Modellgrenzen und Review-Ergebnisse werden strukturiert dokumentiert und versionierbar gemacht.",
      },
    ],
    contextTitle: "Dependability als integrierte Engineering-Aufgabe",
    contextText:
      "Reliability, Availability und Maintainability werden nicht isoliert betrachtet. Ihre Wechselwirkungen müssen zur Mission, Systemarchitektur und Nachweisstrategie passen.",
    contextTerms: [
      "ECSS-Dependability-Kontext",
      "RAMS",
      "FMEA und Fault Tree Analysis",
      "Umwelt- und Lebensdauernachweise",
    ],
    ctaTitle: "Welche Annahme trägt Ihr Aerospace-Nachweiskonzept?",
    ctaText:
      "Wir prüfen Risikoarchitektur, Daten und Nachweislogik und machen offene technische Punkte sichtbar.",
    ctaLabel: "Aerospace-Projekt einordnen",
  },
  {
    slug: "produktionstechnik",
    title: "Zuverlässigkeit und Verfügbarkeit in der Produktionstechnik",
    metaTitle: "Produktionstechnik Zuverlässigkeit & Verfügbarkeit | RelTest",
    metaDescription:
      "Reliability Engineering für Produktionstechnik: Anlagenverfügbarkeit, Ausfalldaten, Schwachstellenanalyse, Wartung und Lebensdauerprognose.",
    heroLead:
      "Ungeplante Stillstände wirken unmittelbar auf Ausbringung, Qualität und Lieferfähigkeit. Betriebs- und Instandhaltungsdaten können diese Risiken messbar machen.",
    heroImage: "/expertise/lab-review.png",
    heroAlt:
      "Ingenieurteam bei der Analyse eines industriellen Produktions- und Prüfsystems",
    heroCta: "Produktionsprojekt besprechen",
    decisionTitle:
      "Verfügbarkeit verbessert sich, wenn technische Ursache und Betriebswirkung gemeinsam bewertet werden.",
    decisionText:
      "RelTest strukturiert Störungen, Ausfallzeiten, Wartungsereignisse und Anlagenkontext. Daraus entsteht kein reines Reporting, sondern eine technische Priorisierung für Konstruktion, Betrieb und Instandhaltung.",
    decisionPath: [
      {
        label: "Anlage",
        text: "Funktionen, Abhängigkeiten und Engpasskomponenten abgrenzen.",
      },
      {
        label: "Ereignis",
        text: "Störung, Ausfall, Reparatur und geplante Wartung sauber trennen.",
      },
      {
        label: "Kennzahl",
        text: "Ausfallrate, MTBF, MTTR und Verfügbarkeit korrekt bewerten.",
      },
      {
        label: "Verbesserung",
        text: "Technische und organisatorische Maßnahmen nach Wirkung priorisieren.",
      },
    ],
    servicesTitle: "Aus Produktionsdaten technische Entscheidungen machen",
    servicesLead:
      "Wir unterstützen Anlagenhersteller und Betreiber bei Verfügbarkeitsfragen, wiederkehrenden Störungen und der Entwicklung robuster Produktionssysteme.",
    services: [
      {
        title: "Anlagen- und Systemzuverlässigkeit",
        text: "Wir modellieren Systemstrukturen, identifizieren Engpässe und bewerten, wie Komponenten und Wartungsstrategien die technische Verfügbarkeit beeinflussen.",
        topics: ["RAM-Analyse", "Verfügbarkeit", "Systemmodell"],
        href: serviceLinks.reliability,
      },
      {
        title: "Schwachstellen und Kritikalität",
        text: "Ausfallfolgen, Häufigkeiten und Wiederherstellungszeiten werden gemeinsam priorisiert und mit technischen Ursachenanalysen verbunden.",
        topics: [
          "Kritikalitätsanalyse",
          "Ursachenanalyse",
          "Maßnahmenportfolio",
        ],
        href: serviceLinks.risk,
      },
      {
        title: "Betriebs- und Wartungsdaten",
        text: "Wir schaffen eine auswertbare Datenstruktur, prüfen Datenqualität und leiten Ausfallmuster, Trends und Prognosen ab.",
        topics: [
          "Ausfalldatenanalyse",
          "Condition Monitoring",
          "Prognostik",
        ],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typische Fragen in der Produktionstechnik",
    questions: [
      {
        question: "Welche Störung kostet tatsächlich am meisten?",
        answer:
          "Häufigkeit, Dauer, Produktionswirkung und Folgekosten werden zusammengeführt, statt nur die Zahl der Ereignisse zu betrachten.",
      },
      {
        question: "Sind unsere Instandhaltungsdaten auswertbar?",
        answer:
          "Wir prüfen Ereignisdefinitionen, Zeitstempel, Zensierungen und Anlagenbezug und entwickeln eine belastbare Datenstruktur.",
      },
      {
        question: "Wo lohnt konstruktive Verbesserung statt mehr Wartung?",
        answer:
          "Ausfallmechanismus, Wiederholrate und Maßnahmenwirkung zeigen, ob Konstruktion, Betrieb oder Instandhaltung der bessere Hebel ist.",
      },
      {
        question: "Wie wird Anlagenverfügbarkeit realistisch prognostiziert?",
        answer:
          "Komponentenzuverlässigkeit, Redundanz, Reparaturzeiten und Betriebsregeln werden in einem nachvollziehbaren Systemmodell verbunden.",
      },
    ],
    contextTitle: "Kennzahlen mit technischer Bedeutung",
    contextText:
      "MTBF oder Verfügbarkeit sind nur dann nützlich, wenn Ereignisse eindeutig definiert und Daten vergleichbar sind. Wir verbinden Kennzahlen deshalb mit Systemgrenzen und Ausfallmechanismen.",
    contextTerms: [
      "ISO-14224-Datenlogik",
      "RAM und Verfügbarkeit",
      "MTBF und MTTR",
      "Condition Monitoring",
    ],
    ctaTitle: "Welche Ausfälle begrenzen Ihre Produktion?",
    ctaText:
      "Wir ordnen System, Datenqualität und wirtschaftliche Wirkung ein und entwickeln eine belastbare Analyse.",
    ctaLabel: "Produktionsprojekt einordnen",
  },
];

const en: IndustryDetailContent[] = [
  {
    slug: "automotive",
    title: "Reliability engineering for automotive development",
    metaTitle: "Automotive Reliability Engineering & Testing | RelTest",
    metaDescription:
      "Automotive reliability engineering: lifetime testing, risk management, DoE, field data analysis and robust reliability demonstration.",
    heroLead:
      "Short development cycles, high volumes and widely varying use profiles require an assurance strategy that connects real loads, failure mechanisms and release targets.",
    heroImage: "/industries/automotive.png",
    heroAlt: "Automotive powertrain in a technical test environment",
    heroCta: "Discuss an automotive project",
    decisionTitle:
      "The number of tests is not decisive. The strength of their evidence is.",
    decisionText:
      "RelTest connects customer use, load spectra, component behaviour and field data in one test and evidence strategy. This creates robust decisions before series risks become warranty, cost or schedule problems.",
    decisionPath: [
      {
        label: "Use",
        text: "Describe driving profiles, environments and customer populations.",
      },
      {
        label: "Risk",
        text: "Prioritise critical failure mechanisms and variation.",
      },
      {
        label: "Testing",
        text: "Align DoE, lifetime tests and samples with the required claim.",
      },
      {
        label: "Release",
        text: "Combine test and field data in traceable reliability evidence.",
      },
    ],
    servicesTitle: "Engineering services for automotive projects",
    servicesLead:
      "Depending on project maturity, we address one focused question or integrate targets, risks, tests and data in a consistent assurance concept.",
    services: [
      {
        title: "Reliability planning and lifetime",
        text: "We derive measurable reliability targets from use and customer requirements, assess load spectra and translate them into development and evidence tasks.",
        topics: ["Load spectra", "Lifetime assessment", "Reliability targets"],
        href: serviceLinks.reliability,
      },
      {
        title: "Risk and technical assurance",
        text: "FMEA, fault trees and technical reviews are applied so that critical mechanisms become visible early and actions remain traceable throughout the project.",
        topics: ["FMEA and FTA", "Assurance strategy", "Evidence"],
        href: serviceLinks.risk,
      },
      {
        title: "Testing, DoE and field data",
        text: "We plan efficient experiments, analyse lifetime and warranty data, and compare test-bench results with behaviour in the field.",
        topics: ["Design of Experiments", "Lifetime testing", "Field data"],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typical questions in automotive projects",
    questions: [
      {
        question: "Does our test programme represent real customer use?",
        answer:
          "We compare load profiles, failure mechanisms and test conditions and reveal where evidence is too weak or unnecessarily expensive.",
      },
      {
        question: "How can we decide with a limited number of samples?",
        answer:
          "Statistical demonstration planning connects target reliability, confidence, test duration and permitted failures.",
      },
      {
        question: "What can warranty and field data tell us?",
        answer:
          "Failure times, mileage and use are cleaned, segmented and linked to technical hypotheses.",
      },
      {
        question: "Where does DoE provide the greatest development value?",
        answer:
          "Experimental design identifies interactions, robust parameter regions and the tests that contribute most to the decision.",
      },
    ],
    contextTitle: "Compatible with automotive development environments",
    contextText:
      "Our work integrates with existing development, quality and release processes. Requirements and internal standards are incorporated into the engineering argument without turning methods into an end in themselves.",
    contextTerms: [
      "ISO 26262 context",
      "IATF-oriented processes",
      "Warranty and field data",
      "Accelerated testing",
    ],
    ctaTitle: "What claim must your automotive project support?",
    ctaText:
      "We assess the target, available data and development status and propose a robust next step.",
    ctaLabel: "Assess your automotive project",
  },
  {
    slug: "maschinenbau",
    title: "Reliability in mechanical and plant engineering",
    metaTitle: "Mechanical Engineering Reliability & Lifetime | RelTest",
    metaDescription:
      "Reliability engineering for machinery: lifetime assessment, wear, test strategy, Weibull analysis and availability evaluation.",
    heroLead:
      "Variable loads, long service periods and expensive downtime make reliability both an engineering and a commercial metric.",
    heroImage: "/industries/maschinenbau.png",
    heroAlt:
      "Industrial gearbox representing reliability-critical machinery components",
    heroCta: "Discuss a machinery project",
    decisionTitle:
      "Lifetime becomes robust when loads, mechanisms and data are aligned.",
    decisionText:
      "We distinguish wear, fatigue, random failures and systematic weaknesses. The result is a test and assessment model suited to the machine, its operation and the real consequences of failure.",
    decisionPath: [
      {
        label: "Operation",
        text: "Capture loads, cycles, environments and maintenance realistically.",
      },
      {
        label: "Mechanism",
        text: "Separate wear, fatigue and functional weaknesses.",
      },
      {
        label: "Data",
        text: "Evaluate test, failure and operating data statistically.",
      },
      {
        label: "Action",
        text: "Improve design, test strategy or maintenance selectively.",
      },
    ],
    servicesTitle: "Developing reliable machinery and systems",
    servicesLead:
      "RelTest supports projects from early design to the assessment of existing field issues. The focus is on traceable decisions, not isolated metrics.",
    services: [
      {
        title: "Lifetime and system reliability",
        text: "We structure reliability targets, assess component and system lifetime and link mechanical failure models to real operating profiles.",
        topics: ["Load spectra", "Weibull analysis", "System reliability"],
        href: serviceLinks.reliability,
      },
      {
        title: "Weaknesses and failure consequences",
        text: "Technical risks are ordered by cause, effect and commercial relevance so design measures and evidence can be prioritised.",
        topics: ["FMEA and FTA", "Criticality", "State of the art"],
        href: serviceLinks.risk,
      },
      {
        title: "Test strategy and operating data",
        text: "We plan lifetime tests, assess small samples and use operating and failure data to support predictions and improvements.",
        topics: ["Lifetime testing", "Field data analysis", "Availability"],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typical questions in mechanical engineering",
    questions: [
      {
        question: "Which components determine system lifetime?",
        answer:
          "A system view shows which failures actually constrain availability and customer value and where detailed analysis is worthwhile.",
      },
      {
        question: "How do we transfer test-bench results to operation?",
        answer:
          "Load, damage and use variation are combined in a transparent transfer model.",
      },
      {
        question: "Is a field failure random or systematic?",
        answer:
          "Life data, damage patterns and operating conditions help separate populations and test technical causes.",
      },
      {
        question: "How much testing is required for release?",
        answer:
          "Evidence is planned from target, uncertainty, sample and acceptable risk rather than copied from generic test durations.",
      },
    ],
    contextTitle: "Connecting design, operation and maintenance",
    contextText:
      "Reliability information is often distributed across calculations, test benches, service reports and experience. We turn it into a shared basis for decisions.",
    contextTerms: [
      "Lifetime and wear",
      "Machinery safety",
      "Availability",
      "Operating and maintenance data",
    ],
    ctaTitle: "Where does reliability limit the success of your machine?",
    ctaText:
      "We review load assumptions, data and evidence strategy and define the next technical step.",
    ctaLabel: "Assess your machinery project",
  },
  {
    slug: "elektronische-produkte",
    title: "Reliability of electronic products",
    metaTitle: "Electronics Reliability & Environmental Testing | RelTest",
    metaDescription:
      "Electronics reliability engineering: environmental testing, thermal cycling, ageing, DoE, failure mechanisms and lifetime assessment.",
    heroLead:
      "Temperature, humidity, vibration, electrical stress and component variation act simultaneously. Good assurance therefore tests mechanisms, not only standard profiles.",
    heroImage: "/industries/elektronische-produkte.png",
    heroAlt: "Electronic assembly during a technical reliability measurement",
    heroCta: "Discuss an electronics project",
    decisionTitle:
      "A passed test is valuable only if it addresses the right risk.",
    decisionText:
      "RelTest connects the use environment, physical failure mechanisms and test parameters. This reveals what may be accelerated and where a test would unintentionally create another mechanism.",
    decisionPath: [
      {
        label: "Environment",
        text: "Describe temperature, humidity, vibration and electrical load.",
      },
      {
        label: "Mechanism",
        text: "Assess ageing, corrosion, interconnects and component variation.",
      },
      {
        label: "Test",
        text: "Plan stress profiles and acceleration on a physical basis.",
      },
      {
        label: "Assessment",
        text: "Account for failures, censoring and uncertainty statistically.",
      },
    ],
    servicesTitle: "Assuring electronics methodically and economically",
    servicesLead:
      "We work on components, assemblies and devices. The key is the combination of product understanding, relevant testing and sound data assessment.",
    services: [
      {
        title: "Reliability targets and ageing models",
        text: "We structure requirements, identify relevant stresses and assess how ageing and use influence expected lifetime.",
        topics: ["Lifetime targets", "Ageing models", "Use profiles"],
        href: serviceLinks.reliability,
      },
      {
        title: "Failure mechanisms and risk analysis",
        text: "Technical risks are assessed at component and system level. We derive effective prevention and evidence measures.",
        topics: ["Mechanism-oriented FMEA", "Derating", "Assurance plan"],
        href: serviceLinks.risk,
      },
      {
        title: "Environmental testing and DoE",
        text: "Experimental design and statistical planning identify influencing factors, interactions and robust parameter regions efficiently.",
        topics: ["Temperature and humidity", "DoE", "Life data analysis"],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typical questions for electronic products",
    questions: [
      {
        question: "Are we testing real ageing or only a severe standard profile?",
        answer:
          "We compare stress, failure pattern and acceleration assumption and verify that the relevant mechanism is preserved.",
      },
      {
        question: "Which factors drive failure variation?",
        answer:
          "A structured experiment separates main effects, interactions and random variation.",
      },
      {
        question: "How do we assess tests without failure?",
        answer:
          "Failure-free tests can provide evidence when sample, duration, target and confidence are planned consistently.",
      },
      {
        question: "How do we connect laboratory and return data?",
        answer:
          "Shared features and load information reveal whether laboratory and field represent the same population and mechanism.",
      },
    ],
    contextTitle: "Using test standards with engineering judgement",
    contextText:
      "Standards and customer requirements provide an important framework. The technical statement emerges only when profile, product use and expected mechanism match.",
    contextTerms: [
      "IEC 60068 context",
      "Environmental testing",
      "Accelerated ageing",
      "Component and process variation",
    ],
    ctaTitle: "Which stress determines your electronic product?",
    ctaText:
      "We review mechanisms, available tests and data and develop a robust assurance strategy.",
    ctaLabel: "Assess your electronics project",
  },
  {
    slug: "halbleiterindustrie",
    title: "Reliability in the semiconductor industry",
    metaTitle: "Semiconductor Reliability, DoE & Qualification | RelTest",
    metaDescription:
      "Semiconductor reliability engineering: DoE, process variation, AEC-Q100 context, IEC 60749, life testing and statistical analysis.",
    heroLead:
      "Tight process windows, dense data and new technologies require a clear distinction between process variation, measurement uncertainty and real reliability change.",
    heroImage: "/industries/halbleiterindustrie.png",
    heroAlt: "Semiconductor wafer in a precision manufacturing environment",
    heroCta: "Discuss a semiconductor project",
    decisionTitle:
      "Large data volumes do not replace a model of the failure mechanism.",
    decisionText:
      "RelTest structures stress conditions, factors and responses so qualification and lifetime data support an engineering claim. DoE creates efficiency without hiding critical interactions.",
    decisionPath: [
      {
        label: "Technology",
        text: "Define device, application and relevant degradation mechanisms.",
      },
      {
        label: "Stress",
        text: "Plan temperature, humidity, voltage and cycling physically.",
      },
      {
        label: "Statistics",
        text: "Model variation, censoring and sample effects correctly.",
      },
      {
        label: "Qualification",
        text: "Assess results against target and application transparently.",
      },
    ],
    servicesTitle: "Robust decisions in data-intensive semiconductor projects",
    servicesLead:
      "We support product qualification and robust processes as well as reliability questions for manufacturing and test equipment.",
    services: [
      {
        title: "Mechanisms and reliability models",
        text: "We translate technology and use conditions into assessable reliability targets and suitable lifetime models.",
        topics: [
          "Degradation mechanisms",
          "Acceleration models",
          "Reliability targets",
        ],
        href: serviceLinks.reliability,
      },
      {
        title: "Qualification and product risks",
        text: "Risks are prioritised by mechanism, criticality and evidence need. Documentation keeps assumptions and limitations visible.",
        topics: ["AEC-Q100 context", "Risk assessment", "Qualification strategy"],
        href: serviceLinks.risk,
      },
      {
        title: "DoE and statistical data analysis",
        text: "We plan efficient factor studies, model response variables and evaluate lifetime and stress data with suitable distributions.",
        topics: ["Design of Experiments", "Process windows", "Life data"],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typical questions in semiconductor projects",
    questions: [
      {
        question: "Which factors really influence yield and reliability?",
        answer:
          "DoE separates relevant effects, interactions and measurement variation and creates a model rather than disconnected tests.",
      },
      {
        question: "Is the acceleration still physically plausible?",
        answer:
          "Stress level, mechanism and model assumptions are reviewed before extrapolating to use conditions.",
      },
      {
        question: "How do we compare technologies or process variants?",
        answer:
          "A shared statistical model prevents sample size or test duration from distorting the comparison.",
      },
      {
        question: "How can equipment reliability be measured?",
        answer:
          "Operating, failure and maintenance data reveal availability, failure patterns and prioritised improvement areas.",
      },
    ],
    contextTitle: "Considering product, process and equipment together",
    contextText:
      "Semiconductor reliability is created at several interfaces. Our method connects qualification tests with process understanding and equipment reliability.",
    contextTerms: [
      "AEC-Q100 context",
      "IEC 60749",
      "Power cycling",
      "SEMI E10 metrics",
    ],
    ctaTitle: "Which data support your semiconductor decision?",
    ctaText:
      "We assess mechanism, experimental space and evaluation model and create a robust analysis strategy.",
    ctaLabel: "Assess your semiconductor project",
  },
  {
    slug: "konsumgueter",
    title: "Reliability for consumer technology",
    metaTitle: "Consumer Electronics Reliability & Testing | RelTest",
    metaDescription:
      "Reliability for consumer technology: use profiles, robust design, accelerated testing, DoE, returns data and efficient assurance.",
    heroLead:
      "Diverse use, strong cost pressure and short product cycles require an assurance strategy that learns quickly and still targets relevant failure risks.",
    heroImage: "/industries/consumer-technik-v2.png",
    heroAlt: "Consumer electronics and smart devices in a reliability lab",
    heroCta: "Discuss a consumer product",
    decisionTitle:
      "Robustness must match real use, not an idealised user.",
    decisionText:
      "RelTest structures use profiles, misuse, environments and product variation. Tests can then be prioritised, returns understood faster and improvements focused on customer experience and cost.",
    decisionPath: [
      {
        label: "User",
        text: "Capture duration, frequency, environment and misuse.",
      },
      {
        label: "Product",
        text: "Prioritise critical functions and cost-driving failures.",
      },
      {
        label: "Test",
        text: "Assess robustness and lifetime with efficient experiments.",
      },
      {
        label: "Learning",
        text: "Transfer returns and reviews into the next generation.",
      },
    ],
    servicesTitle: "Fast, focused assurance for consumer products",
    servicesLead:
      "We connect engineering depth with commercial development targets. The key is to test the right risks early.",
    services: [
      {
        title: "Use and reliability targets",
        text: "Customer use, quality targets and product lifetime are translated into measurable requirements for development and release.",
        topics: ["Use profiles", "Target reliability", "Robust design"],
        href: serviceLinks.reliability,
      },
      {
        title: "Product and cost risks",
        text: "We prioritise failure modes by customer effect, frequency and commercial impact and focus actions on decisive weaknesses.",
        topics: ["Risk analysis", "Weaknesses", "Returns management"],
        href: serviceLinks.risk,
      },
      {
        title: "Accelerated testing and DoE",
        text: "Experimental design and life data analysis reduce effort, reveal variation and produce useful decisions early.",
        topics: ["DoE", "Accelerated tests", "Returns data"],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typical questions for consumer products",
    questions: [
      {
        question: "Which use must our tests cover?",
        answer:
          "We segment user and environmental profiles and translate them into relevant loads and boundary cases.",
      },
      {
        question: "How do we find critical factors with little time?",
        answer:
          "Screening designs and DoE identify main effects and interactions more efficiently than sequential one-factor tests.",
      },
      {
        question: "Which returns require immediate attention?",
        answer:
          "Frequency, customer effect and technical criticality create a traceable priority.",
      },
      {
        question: "How do we avoid overtesting?",
        answer:
          "Every test is linked to a specific risk or evidence claim, making redundant testing visible.",
      },
    ],
    contextTitle: "Fast development without hidden reliability gaps",
    contextText:
      "Not every consumer failure is safety-critical, but every unnecessary return affects cost and brand. A risk-based test strategy addresses both.",
    contextTerms: [
      "Smart devices",
      "Household and leisure products",
      "Accelerated testing",
      "Warranty and returns data",
    ],
    ctaTitle: "Where is the greatest risk in your consumer product?",
    ctaText:
      "We connect use, technical weaknesses and test effort in a clear priority.",
    ctaLabel: "Assess your consumer project",
  },
  {
    slug: "erneuerbare-energien",
    title: "Reliability for renewable energy systems",
    metaTitle: "Wind Energy & Renewable Reliability | RelTest",
    metaDescription:
      "Renewable energy reliability engineering: wind energy, lifetime prediction, field data, availability and risk-based testing.",
    heroLead:
      "Long operating periods, changing environments and hard-to-access systems make prediction, availability and low-maintenance design commercial factors.",
    heroImage: "/industries/erneuerbare-energien.png",
    heroAlt: "Technical components and test environment for renewable energy",
    heroCta: "Discuss an energy project",
    decisionTitle:
      "In the field, availability matters as much as component lifetime.",
    decisionText:
      "RelTest combines load and environmental data with failure and maintenance information. This reveals critical components, realistic lifetime assumptions and commercially effective improvements.",
    decisionPath: [
      {
        label: "Site",
        text: "Assess wind, temperature, humidity, grid and operation.",
      },
      {
        label: "System",
        text: "Evaluate critical components and dependencies.",
      },
      {
        label: "Field",
        text: "Structure SCADA, failure and maintenance data robustly.",
      },
      {
        label: "Prediction",
        text: "Quantify lifetime, availability and action effectiveness.",
      },
    ],
    servicesTitle: "Managing reliability over long operating periods",
    servicesLead:
      "We support component suppliers and system owners in new development, fleet analysis and the assessment of existing reliability issues.",
    services: [
      {
        title: "Lifetime and availability models",
        text: "We assess load spectra, reliability targets and system dependencies and develop robust predictions for different use conditions.",
        topics: ["Lifetime prediction", "System reliability", "Availability"],
        href: serviceLinks.reliability,
      },
      {
        title: "Risks and assurance strategy",
        text: "Critical components, failure consequences and evidence needs are prioritised to form an economically sound assurance plan.",
        topics: ["FMEA and FTA", "Criticality", "Maintenance strategy"],
        href: serviceLinks.risk,
      },
      {
        title: "Field, test and condition data",
        text: "We connect test-bench, fleet and condition-monitoring data to understand failure patterns and improve predictions.",
        topics: ["Field data", "Health monitoring", "Statistical prediction"],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typical questions for renewable energy systems",
    questions: [
      {
        question: "Which components drive downtime and failure cost?",
        answer:
          "Combined criticality and data analysis separates frequent disturbances from rare but expensive failures.",
      },
      {
        question: "Can fleet data be compared across sites?",
        answer:
          "Operating conditions and data quality are normalised before failure rates or lifetime distributions are compared.",
      },
      {
        question: "How robust is a lifetime extension?",
        answer:
          "Load history, inspection, failures and model uncertainty are included transparently.",
      },
      {
        question: "Which tests represent field loads?",
        answer:
          "We prioritise mechanisms and translate real loads into accelerated but physically plausible profiles.",
      },
    ],
    contextTitle: "Reliability across the asset lifecycle",
    contextText:
      "The data basis and decision change from design to extended operation. The method must therefore evolve and systematically integrate new field evidence.",
    contextTerms: [
      "IEC 61400 context",
      "Wind turbine drivetrains",
      "SCADA and fleet data",
      "Condition monitoring",
    ],
    ctaTitle: "Which uncertainty limits your asset decision?",
    ctaText:
      "We assess data, lifetime assumptions and assurance needs and develop a robust evaluation logic.",
    ctaLabel: "Assess your energy project",
  },
  {
    slug: "medizintechnik",
    title: "Reliability and risk management for medical devices",
    metaTitle: "Medical Device Reliability & Risk Management | RelTest",
    metaDescription:
      "Medical-device reliability engineering: ISO 14971 context, risk analysis, verification, lifetime testing and technical documentation.",
    heroLead:
      "Technical function, patient safety and traceable documentation must remain consistent throughout the product lifecycle.",
    heroImage: "/industries/medizintechnik-v2.png",
    heroAlt: "Medical technology system in a development and test environment",
    heroCta: "Discuss a medical-device project",
    decisionTitle:
      "Evidence is persuasive when risk, requirement and test are fully linked.",
    decisionText:
      "RelTest supports the engineering side of risk management: understanding failure mechanisms, defining reliability targets, justifying tests and documenting results so decisions remain traceable.",
    decisionPath: [
      {
        label: "Use",
        text: "Define use, environments and safety-relevant functions.",
      },
      {
        label: "Risk",
        text: "Connect hazards, technical failures and controls.",
      },
      {
        label: "Evidence",
        text: "Plan verification, lifetime and samples based on risk.",
      },
      {
        label: "Documentation",
        text: "Record assumptions, results and residual risk transparently.",
      },
    ],
    servicesTitle: "Technical assurance for medical devices",
    servicesLead:
      "We complement regulatory processes with robust reliability methods and connect the risk file, development and testing.",
    services: [
      {
        title: "Reliability requirements and lifetime",
        text: "We define quantitative targets, assess use and ageing and plan evidence for components, devices and technical functions.",
        topics: ["Reliability targets", "Lifetime assessment", "Verification"],
        href: serviceLinks.reliability,
      },
      {
        title: "Technical risk management",
        text: "Failure mechanisms, effects and risk-control measures are linked methodically and reviewed for consistency.",
        topics: ["ISO 14971 context", "FMEA and FTA", "Risk control"],
        href: serviceLinks.risk,
      },
      {
        title: "Testing and statistical evidence",
        text: "We plan sample sizes and duration, evaluate failures and censored data, and document the strength of evidence.",
        topics: ["Lifetime testing", "Demonstration planning", "Data analysis"],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typical questions in medical technology",
    questions: [
      {
        question: "Is the reliability requirement measurable?",
        answer:
          "We translate expectations into metric, target, period, population and required confidence.",
      },
      {
        question: "Does verification cover identified risks?",
        answer:
          "A traceability review reveals gaps between technical cause, risk control and planned evidence.",
      },
      {
        question: "How can we work with limited samples?",
        answer:
          "Risk-based planning, prior knowledge and suitable models balance evidence and effort transparently.",
      },
      {
        question: "What can post-market data tell us?",
        answer:
          "Field and service data are structured to identify trends, populations and potential new failure patterns.",
      },
    ],
    contextTitle: "Engineering depth in a regulated environment",
    contextText:
      "RelTest does not replace regulatory consulting. We provide the engineering method, analysis and evidence logic that gives technical substance to risk and development documentation.",
    contextTerms: [
      "ISO 14971",
      "EU MDR context",
      "Verification and validation",
      "Post-market data",
    ],
    ctaTitle: "What technical claim must your medical device support?",
    ctaText:
      "We review risk, reliability target and evidence path and show where the technical argument can be strengthened.",
    ctaLabel: "Assess your medical-device project",
  },
  {
    slug: "luft-und-raumfahrt",
    title: "Dependability for aerospace systems",
    metaTitle: "Aerospace Reliability Engineering & Dependability | RelTest",
    metaDescription:
      "Aerospace reliability engineering: dependability, FMEA, FTA, lifetime, environmental testing and traceable evidence.",
    heroLead:
      "Low volumes, extreme environments and severe failure consequences require assurance that controls risk systematically and makes every assumption traceable.",
    heroImage: "/industries/luft-und-raumfahrt-v2.png",
    heroAlt: "Aerospace component undergoing precision testing",
    heroCta: "Discuss an aerospace project",
    decisionTitle:
      "When consequences are high, the engineering argument must be complete.",
    decisionText:
      "RelTest connects system architecture, failure mechanisms, environmental loads and evidence. This clarifies which risks need design mitigation, testing, analysis or redundancy.",
    decisionPath: [
      {
        label: "Mission",
        text: "Define function, mission profile and acceptable consequences.",
      },
      {
        label: "Architecture",
        text: "Analyse dependencies, redundancy and critical paths.",
      },
      {
        label: "Assurance",
        text: "Combine analysis, test and documentation based on risk.",
      },
      {
        label: "Decision",
        text: "Assess residual risk and evidence limitations transparently.",
      },
    ],
    servicesTitle: "Integrating reliability, risk and assurance",
    servicesLead:
      "We support system and component projects with a methodical, documentation-focused approach scaled to criticality and project phase.",
    services: [
      {
        title: "Reliability and system assessment",
        text: "Reliability targets, block diagrams and lifetime models quantify system contributions, dependencies and critical components.",
        topics: ["Reliability allocation", "System reliability", "Lifetime"],
        href: serviceLinks.reliability,
      },
      {
        title: "Risk, FMEA and fault trees",
        text: "We structure top events, causes, common-cause risks and actions and review consistency between analysis, architecture and evidence.",
        topics: ["FMEA and FTA", "Common cause", "Assurance reviews"],
        href: serviceLinks.risk,
      },
      {
        title: "Environmental testing and evidence data",
        text: "Test profiles, samples and data evaluation are aligned with mission, mechanism and the required claim.",
        topics: ["Environmental tests", "Demonstration planning", "Life data"],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typical questions in aerospace projects",
    questions: [
      {
        question: "Which component dominates mission risk?",
        answer:
          "System models and fault trees reveal critical paths and make redundancy and dependency assumptions explicit.",
      },
      {
        question: "Are analysis and test strategy consistent?",
        answer:
          "We verify whether prioritised mechanisms are addressed by design, inspection or relevant tests.",
      },
      {
        question: "How can small samples support robust evidence?",
        answer:
          "Physical models, prior knowledge, conservative limits and statistical evidence are combined transparently.",
      },
      {
        question: "Will decisions remain traceable?",
        answer:
          "Assumptions, sources, model limits and review results are documented and versioned.",
      },
    ],
    contextTitle: "Dependability as an integrated engineering task",
    contextText:
      "Reliability, availability and maintainability are not isolated. Their interactions must match the mission, system architecture and assurance strategy.",
    contextTerms: [
      "ECSS dependability context",
      "RAMS",
      "FMEA and fault-tree analysis",
      "Environmental and lifetime evidence",
    ],
    ctaTitle: "Which assumption carries your aerospace assurance case?",
    ctaText:
      "We review risk architecture, data and evidence logic and reveal open engineering issues.",
    ctaLabel: "Assess your aerospace project",
  },
  {
    slug: "produktionstechnik",
    title: "Reliability and availability in production technology",
    metaTitle: "Production Reliability & Equipment Availability | RelTest",
    metaDescription:
      "Reliability engineering for production systems: equipment availability, failure data, weakness analysis, maintenance and lifetime prediction.",
    heroLead:
      "Unplanned downtime directly affects output, quality and delivery. Operating and maintenance data can turn these risks into measurable engineering priorities.",
    heroImage: "/expertise/lab-review.png",
    heroAlt: "Engineering team analysing an industrial production system",
    heroCta: "Discuss a production project",
    decisionTitle:
      "Availability improves when technical cause and operational impact are assessed together.",
    decisionText:
      "RelTest structures disturbances, downtime, maintenance events and equipment context. The result is not just reporting, but a technical priority for design, operation and maintenance.",
    decisionPath: [
      {
        label: "System",
        text: "Define functions, dependencies and bottleneck components.",
      },
      {
        label: "Event",
        text: "Separate disturbance, failure, repair and planned maintenance.",
      },
      {
        label: "Metric",
        text: "Evaluate failure rate, MTBF, MTTR and availability correctly.",
      },
      {
        label: "Improvement",
        text: "Prioritise technical and organisational actions by impact.",
      },
    ],
    servicesTitle: "Turning production data into engineering decisions",
    servicesLead:
      "We support equipment manufacturers and operators with availability questions, recurring failures and robust production-system development.",
    services: [
      {
        title: "Equipment and system reliability",
        text: "We model system structures, identify bottlenecks and assess how components and maintenance strategies affect technical availability.",
        topics: ["RAM analysis", "Availability", "System model"],
        href: serviceLinks.reliability,
      },
      {
        title: "Weaknesses and criticality",
        text: "Failure consequences, frequency and restoration times are prioritised and linked to technical cause analysis.",
        topics: ["Criticality", "Root cause", "Action portfolio"],
        href: serviceLinks.risk,
      },
      {
        title: "Operating and maintenance data",
        text: "We create an analysable data structure, review quality and derive failure patterns, trends and predictions.",
        topics: ["Failure data", "Condition monitoring", "Prognostics"],
        href: serviceLinks.data,
      },
    ],
    questionsTitle: "Typical questions in production technology",
    questions: [
      {
        question: "Which disturbance actually costs the most?",
        answer:
          "Frequency, duration, production impact and follow-on cost are combined rather than counting events only.",
      },
      {
        question: "Can our maintenance data support analysis?",
        answer:
          "We review event definitions, timestamps, censoring and equipment reference and define a robust data structure.",
      },
      {
        question: "Where is redesign better than more maintenance?",
        answer:
          "Failure mechanism, recurrence and action effectiveness reveal whether design, operation or maintenance is the better lever.",
      },
      {
        question: "How can equipment availability be predicted?",
        answer:
          "Component reliability, redundancy, repair times and operating rules are connected in a traceable system model.",
      },
    ],
    contextTitle: "Metrics with engineering meaning",
    contextText:
      "MTBF or availability are useful only when events are clearly defined and data are comparable. We therefore connect metrics to system boundaries and mechanisms.",
    contextTerms: [
      "ISO 14224 data logic",
      "RAM and availability",
      "MTBF and MTTR",
      "Condition monitoring",
    ],
    ctaTitle: "Which failures constrain your production?",
    ctaText:
      "We assess the system, data quality and commercial impact and develop a robust analysis.",
    ctaLabel: "Assess your production project",
  },
];

const collections: Record<Locale, IndustryDetailContent[]> = { de, en };

export function getIndustryDetails(locale: Locale) {
  return collections[locale];
}

export function getIndustryDetail(locale: Locale, slug: string) {
  return collections[locale].find((industry) => industry.slug === slug);
}
