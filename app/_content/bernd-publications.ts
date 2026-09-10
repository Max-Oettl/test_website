import type { Locale } from "../_i18n/config";

export const berndUniversityProfileUrl =
  "https://www.ima.uni-stuttgart.de/institut/team/Bertsche/";

export type BerndPublication = {
  year: string;
  title: string;
  context: string;
  credit?: string;
  href: string;
  linkLabel: string;
  cover?: string;
  coverAlt?: string;
};

type BerndPublicationContent = {
  booksTitle: string;
  booksLead: string;
  articlesTitle: string;
  articlesLead: string;
  sourceNote: string;
  sourceLabel: string;
  books: BerndPublication[];
  articles: BerndPublication[];
};

export const berndPublications: Record<Locale, BerndPublicationContent> = {
  de: {
    booksTitle: "Weitere Fachbücher und Buchbeiträge",
    booksLead:
      "Die Auswahl zeigt die fachliche Breite von den Grundlagen der Zuverlässigkeitstechnik über mechatronische Systeme und Fahrzeuggetriebe bis zur Lebensdauerermittlung und integrierten Produktentwicklung.",
    articlesTitle: "Ausgewählte Fachartikel und Konferenzbeiträge",
    articlesLead:
      "Peer-reviewte Arbeiten dokumentieren aktuelle Methoden für Zuverlässigkeitsmodelle, Absicherungsplanung, Lastkollektive und nachhaltige technische Systeme.",
    sourceNote:
      "Die Auswahl basiert auf dem Publikationsverzeichnis der Universität Stuttgart und den jeweiligen Verlags- und Konferenzseiten. Sie zeigt zentrale Arbeiten, ist aber keine vollständige Bibliografie.",
    sourceLabel: "Publikationsverzeichnis der Universität Stuttgart",
    books: [
      {
        year: "2024",
        title:
          "Praktische Ermittlung von Lebensdauer- und Zuverlässigkeitsmodellen für Zahnriemengetriebe",
        context:
          "Fachbuch zu experimenteller Lebensdauerermittlung und belastbaren Zuverlässigkeitsmodellen für industrielle Zahnriemengetriebe.",
        href: "https://link.springer.com/book/10.1007/978-3-662-67345-4",
        linkLabel: "Fachbuch bei Springer ansehen",
        cover: "/publications/bernd/zahnriemengetriebe-cover.jpg",
        coverAlt:
          "Cover des Fachbuchs Praktische Ermittlung von Lebensdauer- und Zuverlässigkeitsmodellen für Zahnriemengetriebe",
      },
      {
        year: "2022",
        title: "Integrated Design Engineering",
        credit: "Mitautor der Buchkapitel: Prof. Dr.-Ing. Bernd Bertsche",
        context:
          "Bernd Bertsche verfasste die Kapitel „Instandhaltbarkeit“ mit Frank Müller und Martin Dazer sowie „Erfüllungsattribute“ mit Martin Dazer und Sándor Vajna.",
        href: "https://link.springer.com/book/10.1007/978-3-662-60439-7",
        linkLabel: "Bernds Buchbeiträge bei Springer ansehen",
        cover: "/publications/bernd/integrated-design-engineering-cover.jpg",
        coverAlt:
          "Cover des Sammelbands Integrated Design Engineering mit zwei Buchkapiteln von Bernd Bertsche",
      },
      {
        year: "2019",
        title: "Fahrzeuggetriebe",
        context:
          "Das Standardwerk verbindet Auslegung, Konstruktion und Zuverlässigkeitsbetrachtung moderner Fahrzeuggetriebe.",
        href: "https://link.springer.com/book/10.1007/978-3-662-58883-3",
        linkLabel: "Fachbuch bei Springer ansehen",
        cover: "/publications/bernd/fahrzeuggetriebe-cover.jpg",
        coverAlt: "Cover des Fachbuchs Fahrzeuggetriebe",
      },
      {
        year: "2009",
        title: "Zuverlässigkeit mechatronischer Systeme",
        context:
          "Grundlagen und Bewertungsmethoden für die frühe Entwicklung komplexer mechatronischer Systeme.",
        href: "https://link.springer.com/book/10.1007/978-3-540-85091-5",
        linkLabel: "Fachbuch bei Springer ansehen",
        cover:
          "/publications/bernd/zuverlaessigkeit-mechatronischer-systeme-cover.jpg",
        coverAlt:
          "Cover des Fachbuchs Zuverlässigkeit mechatronischer Systeme",
      },
      {
        year: "2008",
        title: "Reliability in Automotive and Mechanical Engineering",
        context:
          "Englischsprachiges Referenzwerk zur Bestimmung der Zuverlässigkeit von Bauteilen und technischen Systemen.",
        href: "https://link.springer.com/book/10.1007/978-3-540-34282-3",
        linkLabel: "Englische Ausgabe bei Springer ansehen",
        cover:
          "/publications/bernd/reliability-automotive-mechanical-engineering-cover.jpg",
        coverAlt:
          "Cover of Reliability in Automotive and Mechanical Engineering",
      },
      {
        year: "2007",
        title:
          "Entwicklung und Erprobung innovativer Produkte – Rapid Prototyping",
        context:
          "Herausgegebenes Fachbuch zur beschleunigten Entwicklung, Erprobung und Absicherung innovativer Produkte.",
        href: "https://link.springer.com/book/10.1007/978-3-540-69880-7",
        linkLabel: "Fachbuch bei Springer ansehen",
        cover: "/publications/bernd/rapid-prototyping-cover.jpg",
        coverAlt:
          "Cover des Fachbuchs Entwicklung und Erprobung innovativer Produkte – Rapid Prototyping",
      },
    ],
    articles: [
      {
        year: "2023",
        title:
          "Parameter assessment for reliability modeling of machine components using heuristic screening",
        context:
          "Methodik zur effizienten Parameterauswahl für Zuverlässigkeitsmodelle von Maschinenkomponenten.",
        href: "https://link.springer.com/article/10.1007/s10010-023-00711-5",
        linkLabel: "Fachartikel ansehen",
      },
      {
        year: "2022",
        title: "Reliability Demonstration Test Planning for Field Load Spectra",
        context:
          "Optimale Versuchsparameter für reale Lastkollektive unter individuellen Kosten- und Zeitgrenzen.",
        href: "https://doi.org/10.1109/RAMS51457.2022.9894007",
        linkLabel: "Konferenzbeitrag ansehen",
      },
      {
        year: "2022",
        title:
          "Reliability-Based Decision Methodology for Stress-Strength Optimization of Machine Components",
        context:
          "Zuverlässigkeitsbasierte Entscheidungen für die robuste Stress-Strength-Auslegung von Maschinenkomponenten.",
        href: "https://doi.org/10.1109/RAMS51457.2022.9894019",
        linkLabel: "Konferenzbeitrag ansehen",
      },
      {
        year: "2022",
        title:
          "Efficient Reliability Demonstration using the Probability of Test Success and Bayes Theorem",
        context:
          "Effiziente Nachweisplanung durch Test-Erfolgswahrscheinlichkeit und die Nutzung von Vorwissen.",
        href: "https://www.iapsam.org/PSAM16/papers/AL3-PSAM16.pdf",
        linkLabel: "Konferenzbeitrag als PDF ansehen",
      },
      {
        year: "2022",
        title:
          "Reliability as a Key Driver for a Sustainable Design of Adaptive Load-Bearing Structures",
        context:
          "Zuverlässigkeit als methodischer Hebel für nachhaltige adaptive Tragstrukturen.",
        href: berndUniversityProfileUrl,
        linkLabel: "Publikation im Universitätsprofil ansehen",
      },
      {
        year: "2020",
        title:
          "Reliability-Test Planning Considering Multiple Failure Mechanisms and System Levels",
        context:
          "Systematische Wahl von Testebene, Testtyp und Konfiguration bei mehreren Ausfallmechanismen.",
        href: berndUniversityProfileUrl,
        linkLabel: "Publikation im Universitätsprofil ansehen",
      },
    ],
  },
  en: {
    booksTitle: "Further books and book contributions",
    booksLead:
      "The selection spans the foundations of reliability engineering, mechatronic systems and vehicle transmissions through to lifetime modelling and integrated product development.",
    articlesTitle: "Selected journal and conference papers",
    articlesLead:
      "Peer-reviewed work documents current methods for reliability modelling, demonstration planning, field load spectra and sustainable technical systems.",
    sourceNote:
      "This selection is based on the University of Stuttgart publication record and the respective publisher and conference pages. It highlights central works but is not a complete bibliography.",
    sourceLabel: "University of Stuttgart publication record",
    books: [
      {
        year: "2024",
        title:
          "Praktische Ermittlung von Lebensdauer- und Zuverlässigkeitsmodellen für Zahnriemengetriebe",
        context:
          "German reference book on experimental lifetime assessment and robust reliability models for industrial timing-belt drives.",
        href: "https://link.springer.com/book/10.1007/978-3-662-67345-4",
        linkLabel: "View the book at Springer",
        cover: "/publications/bernd/zahnriemengetriebe-cover.jpg",
        coverAlt:
          "Cover of the book Praktische Ermittlung von Lebensdauer- und Zuverlässigkeitsmodellen für Zahnriemengetriebe",
      },
      {
        year: "2022",
        title: "Integrated Design Engineering",
        credit: "Chapter co-author: Prof. Dr.-Ing. Bernd Bertsche",
        context:
          "Bernd Bertsche co-authored the chapters Maintainability with Frank Müller and Martin Dazer, and Fulfilment Attributes with Martin Dazer and Sándor Vajna.",
        href: "https://link.springer.com/book/10.1007/978-3-662-60439-7",
        linkLabel: "View Bernd's chapters at Springer",
        cover: "/publications/bernd/integrated-design-engineering-cover.jpg",
        coverAlt:
          "Cover of the edited volume Integrated Design Engineering containing two chapters co-authored by Bernd Bertsche",
      },
      {
        year: "2019",
        title: "Fahrzeuggetriebe",
        context:
          "German standard reference connecting the design, engineering and reliability assessment of modern vehicle transmissions.",
        href: "https://link.springer.com/book/10.1007/978-3-662-58883-3",
        linkLabel: "View the book at Springer",
        cover: "/publications/bernd/fahrzeuggetriebe-cover.jpg",
        coverAlt: "Cover of the German reference book Fahrzeuggetriebe",
      },
      {
        year: "2009",
        title: "Zuverlässigkeit mechatronischer Systeme",
        context:
          "Foundations and assessment methods for complex mechatronic systems in early development phases.",
        href: "https://link.springer.com/book/10.1007/978-3-540-85091-5",
        linkLabel: "View the book at Springer",
        cover:
          "/publications/bernd/zuverlaessigkeit-mechatronischer-systeme-cover.jpg",
        coverAlt:
          "Cover of the German book Zuverlässigkeit mechatronischer Systeme",
      },
      {
        year: "2008",
        title: "Reliability in Automotive and Mechanical Engineering",
        context:
          "English-language reference book for determining component and system reliability.",
        href: "https://link.springer.com/book/10.1007/978-3-540-34282-3",
        linkLabel: "View the English edition at Springer",
        cover:
          "/publications/bernd/reliability-automotive-mechanical-engineering-cover.jpg",
        coverAlt:
          "Cover of Reliability in Automotive and Mechanical Engineering",
      },
      {
        year: "2007",
        title:
          "Entwicklung und Erprobung innovativer Produkte – Rapid Prototyping",
        context:
          "Edited German reference book on accelerating the development, testing and validation of innovative products.",
        href: "https://link.springer.com/book/10.1007/978-3-540-69880-7",
        linkLabel: "View the book at Springer",
        cover: "/publications/bernd/rapid-prototyping-cover.jpg",
        coverAlt:
          "Cover of the German book Entwicklung und Erprobung innovativer Produkte – Rapid Prototyping",
      },
    ],
    articles: [
      {
        year: "2023",
        title:
          "Parameter assessment for reliability modeling of machine components using heuristic screening",
        context:
          "A method for efficiently selecting parameters for reliability models of machine components.",
        href: "https://link.springer.com/article/10.1007/s10010-023-00711-5",
        linkLabel: "View the journal article",
      },
      {
        year: "2022",
        title: "Reliability Demonstration Test Planning for Field Load Spectra",
        context:
          "Optimal test parameters for real-world load spectra under individual cost and time constraints.",
        href: "https://doi.org/10.1109/RAMS51457.2022.9894007",
        linkLabel: "View the conference paper",
      },
      {
        year: "2022",
        title:
          "Reliability-Based Decision Methodology for Stress-Strength Optimization of Machine Components",
        context:
          "Reliability-based decisions for robust stress-strength design of machine components.",
        href: "https://doi.org/10.1109/RAMS51457.2022.9894019",
        linkLabel: "View the conference paper",
      },
      {
        year: "2022",
        title:
          "Efficient Reliability Demonstration using the Probability of Test Success and Bayes Theorem",
        context:
          "Efficient demonstration planning through probability of test success and the use of prior knowledge.",
        href: "https://www.iapsam.org/PSAM16/papers/AL3-PSAM16.pdf",
        linkLabel: "View the conference paper as PDF",
      },
      {
        year: "2022",
        title:
          "Reliability as a Key Driver for a Sustainable Design of Adaptive Load-Bearing Structures",
        context:
          "Reliability as a methodological driver for sustainable adaptive load-bearing structures.",
        href: berndUniversityProfileUrl,
        linkLabel: "View the publication in the university profile",
      },
      {
        year: "2020",
        title:
          "Reliability-Test Planning Considering Multiple Failure Mechanisms and System Levels",
        context:
          "Systematic selection of test level, test type and configuration for multiple failure mechanisms.",
        href: berndUniversityProfileUrl,
        linkLabel: "View the publication in the university profile",
      },
    ],
  },
};
