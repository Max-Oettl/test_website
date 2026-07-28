import type { Locale } from "../_i18n/config";

const shared = {
  referenceLogos: [
    {
      name: "Aesculap",
      src: "/references/aesculp.jpg",
      href: "https://www.aesculap.com/",
    },
    {
      name: "ASYS",
      src: "/references/asys.jpg",
      href: "https://www.asys-group.com/",
    },
    {
      name: "Bosch",
      src: "/references/bosch.jpg",
      href: "https://www.bosch.com/",
    },
    {
      name: "ebm-papst",
      src: "/references/ebm-papst.png",
      href: "https://www.ebmpapst.com/",
    },
    {
      name: "EKK",
      src: "/references/ekk.jpg",
      href: "https://www.ekkeagle.com/en/",
    },
    {
      name: "Hofer Powertrain",
      src: "/references/hofer_power.jpg",
      href: "https://www.hoferpowertrain.com/",
    },
    {
      name: "Hyundai",
      src: "/references/hyundai.jpg",
      href: "https://www.hyundai.com/worldwide/en/",
    },
    {
      name: "Kärcher",
      src: "/references/117-karcher_logo.jpg",
      href: "https://www.kaercher.com/",
    },
    {
      name: "Knorr-Bremse",
      src: "/references/knorr.jpg",
      href: "https://www.knorr-bremse.com/",
    },
    {
      name: "Kostyrka",
      src: "/references/kostyrka.jpg",
      href: "https://www.kostyrka.com/",
    },
    {
      name: "Leica Biosystems",
      src: "/references/Leica.png",
      href: "https://www.leicabiosystems.com/",
    },
    {
      name: "Leybold",
      src: "/references/leybold.png",
      href: "https://www.leybold.com/",
    },
    {
      name: "Mercedes-Benz",
      src: "/references/Mercedes-Benz-logo.png",
      href: "https://www.mercedes-benz.com/",
    },
    {
      name: "MTU",
      src: "/references/mtu.jpg",
      href: "https://www.mtu-solutions.com/",
    },
    {
      name: "Nidec",
      src: "/references/nidec.jpg",
      href: "https://www.nidec.com/en/",
    },
    {
      name: "Olympus",
      src: "/references/olympus.jpg",
      href: "https://www.olympus-global.com/",
    },
    {
      name: "Optibelt",
      src: "/references/optibelt.jpg",
      href: "https://www.optibelt.com/",
    },
    {
      name: "PI",
      src: "/references/PI.jpg",
      href: "https://www.physikinstrumente.com/",
    },
    {
      name: "Porsche",
      src: "/references/porsche.png",
      href: "https://www.porsche.com/",
    },
    { name: "SMA", src: "/references/sma.jpg", href: "https://www.sma.de/" },
    {
      name: "Stihl",
      src: "/references/stihl.png",
      href: "https://www.stihl.com/",
    },
    {
      name: "Testo",
      src: "/references/testo.jpg",
      href: "https://www.testo.com/",
    },
    {
      name: "VAT",
      src: "/references/vat-logo.png",
      href: "https://www.vatgroup.com/",
    },
    {
      name: "Walther Flender",
      src: "/references/walther.jpg",
      href: "https://www.walther-flender.de/",
    },
    {
      name: "Weber-Hydraulik",
      src: "/references/weber.png",
      href: "https://www.weber-hydraulik.com/",
    },
    {
      name: "ZEISS",
      src: "/references/zeiss.png",
      href: "https://www.zeiss.com/",
    },
    { name: "ZF", src: "/references/zf.jpg", href: "https://www.zf.com/" },
  ],
  books: {
    reliabilityTests: {
      href: "https://link.springer.com/book/9783662729663",
      cover: "/book-reliability-tests-cover.webp",
    },
    reliabilityEngineering: {
      href: "https://link.springer.com/book/10.1007/978-3-662-65024-0",
      cover: "/book-reliability-cover.jpg",
    },
  },
};

const content = {
  de: {
    metadata: {
      title: "RelTest Solutions | Advanced Reliability Engineering Partner",
      description:
        "Zuverlässigkeitstechnik, Erprobung, Absicherung und Reliability Engineering für anspruchsvolle technische B2B-Produkte.",
    },
    navigation: {
      ariaLabel: "Hauptnavigation",
      homeLabel: "RelTest Solutions Startseite",
      menu: "Menü",
      inquiry: "Anfrage starten",
      servicesOverview: "Leistungen im Überblick",
      knowledgeOverview: "Wissen im Überblick",
      expertiseOverview: "Expertise im Überblick",
      items: [
        { label: "Leistungen", href: "/leistungen" },
        { label: "Weiterbildung", href: "/weiterbildung" },
        { label: "Wissen", href: "/wissen" },
        { label: "Expertise", href: "/expertise" },
        { label: "Wir sind RelTest", href: "/ueber-uns" },
      ],
      serviceItems: [
        {
          label: "Zuverlässigkeitstechnik",
          href: "/leistungen/zuverlaessigkeitstechnik",
        },
        {
          label: "Zuverlässigkeitsmanagement",
          href: "/leistungen/zuverlaessigkeitsmanagement",
        },
        { label: "Beratung", href: "/leistungen/beratung" },
        {
          label: "Design of Experiments",
          href: "/leistungen/design-of-experiments",
        },
        {
          label: "Datenanalyse & Prognostik",
          href: "/leistungen/datenanalyse-prognostik",
        },
        { label: "Risikomanagement", href: "/leistungen/risikomanagement" },
        {
          label: "Langfristige Kooperation",
          href: "/leistungen/langfristige-kooperation",
        },
      ],
      serviceGroups: [
        {
          title: "Leistungspakete",
          items: [
            { label: "Beratung", href: "/leistungen/beratung" },
            {
              label: "Schulungen und Seminare",
              href: "/weiterbildung/seminare",
            },
            {
              label: "RelTest Education",
              href: "/weiterbildung/academy",
            },
            {
              label: "Langfristige Kooperation",
              href: "/leistungen/langfristige-kooperation",
            },
          ],
        },
        {
          title: "Fachthemen in Beratung & Kooperation",
          items: [
            {
              label: "Zuverlässigkeitstechnik",
              href: "/leistungen/zuverlaessigkeitstechnik",
            },
            {
              label: "Zuverlässigkeitsmanagement",
              href: "/leistungen/zuverlaessigkeitsmanagement",
            },
            {
              label: "Design of Experiments",
              href: "/leistungen/design-of-experiments",
            },
            {
              label: "Datenanalyse & Prognostik",
              href: "/leistungen/datenanalyse-prognostik",
            },
            {
              label: "Risikomanagement",
              href: "/leistungen/risikomanagement",
            },
          ],
        },
      ],
      knowledgeItems: [
        { label: "Planung", href: "/wissen/planung" },
        {
          label: "Schwachstellenanalyse",
          href: "/wissen/schwachstellenanalyse",
        },
        { label: "Absicherung", href: "/wissen/absicherung" },
        { label: "Erprobung", href: "/wissen/erprobung" },
        { label: "Prognosen", href: "/wissen/prognosen" },
        { label: "Design of Experiments", href: "/wissen/design-of-experiments" },
        { label: "Risikomanagement", href: "/wissen/risikomanagement" },
      ],
      expertiseItems: [
        { label: "Referenzen & Branchenvertrauen", href: "/referenzen" },
        { label: "Fachbücher & Veröffentlichungen", href: "/literatur" },
        { label: "Podcast mit Kevin Lucan", href: "/expertise#podcast" },
        { label: "Branchen", href: "/branchen" },
      ],
    },
    footer: {
      description:
        "Reliability Engineering, Zuverlässigkeitsmanagement und Erprobung für technische Produkte mit hohen Qualitäts- und Lebensdaueranforderungen.",
      quickAccess: "Schnellzugriff",
      contact: "Kontakt",
      copyright: "© 2026 RelTest Solutions. Alle Rechte vorbehalten.",
      links: [
        { label: "Leistungen", href: "/leistungen" },
        { label: "Weiterbildung", href: "/weiterbildung" },
        { label: "Wissen", href: "/wissen" },
        { label: "Expertise", href: "/expertise" },
        { label: "Literatur", href: "/literatur" },
        { label: "Referenzen", href: "/referenzen" },
        { label: "Branchen", href: "/branchen" },
        { label: "Wir sind RelTest", href: "/ueber-uns" },
        { label: "Aktuelles", href: "/aktuelles" },
        { label: "Glossar", href: "/glossar" },
        { label: "Kontakt", href: "/kontakt" },
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
      ],
    },
    common: {
      learnMore: "Mehr erfahren",
    },
    hero: {
      eyebrow: "Advanced Reliability Engineering Partner",
      title:
        "Zuverlässigkeitstechnik für belastbare Entscheidungen in Entwicklung, Absicherung und Serienreife.",
      description:
        "RelTest Solutions berät seit 2016 Industrieunternehmen bei der Absicherung anspruchsvoller technischer Produkte. Im Team vereinen wir mehrere Jahrzehnte Erfahrung in Zuverlässigkeit, Lebensdauer, Statistik, Erprobung und DoE.",
      facts: [
        {
          title: "Seit 2016",
          description:
            "Beratungspartner für technische Zuverlässigkeit in Entwicklungsprojekten.",
        },
        {
          title: "Jahrzehnte Erfahrung",
          description:
            "Praxiswissen aus Automotive, Maschinenbau, Testing und Statistik.",
        },
      ],
      primaryCta: "Projekt besprechen",
      secondaryCta: "Leistungen ansehen",
      knowledgeCta: "Mehr über Zuverlässigkeitstechnik erfahren",
      topics: [
        "Erprobung",
        "Datenanalyse",
        "DoE",
        "Prognostik & Health Monitoring",
        "Modellbildung",
        "Weiterbildung",
        "Risikomanagement",
      ],
    },
    services: [
      {
        title: "Beratung für Unternehmen",
        description:
          "Strategische und operative Begleitung entlang des gesamten Produktprozesses. Je nach Projekt bringen wir gezielt Fachthemen wie Zuverlässigkeitstechnik, DoE, Datenanalyse und Risikomanagement ein.",
        highlight: "Fachliche Orientierung und methodische Absicherung",
        href: "/leistungen/beratung",
        icon: "/icons/service-consulting.svg",
        meta: "Consulting",
        topics: [
          "Zuverlässigkeitstechnik",
          "DoE & Versuchsplanung",
          "Datenanalyse & Prognostik",
          "Risikomanagement",
        ],
      },
      {
        title: "Vor-Ort-Schulungen und Seminare",
        description:
          "Praxisnahe Weiterbildung für Teams direkt im Unternehmen, abgestimmt auf Produkte, Entwicklungsstand und methodische Reife.",
        highlight: "Inhouse, interaktiv und projektbezogen",
        href: "/weiterbildung/seminare",
        icon: "/icons/service-training.svg",
        meta: "Weiterbildung",
      },
      {
        title: "RelTest Education",
        description:
          "Digitales E-Learning für Ingenieurinnen und Ingenieure, die Reliability Engineering und DoE flexibel und strukturiert aufbauen wollen.",
        highlight: "Skalierbar, ortsunabhängig und sofort nutzbar",
        href: "/weiterbildung/academy",
        icon: "/branding/reltest-education-horizontal-positive.svg",
        meta: "Education",
      },
      {
        title: "Langfristige Kooperation",
        description:
          "Dauerhafte Unterstützung in Entwicklungsprojekten, wenn Zuverlässigkeit, Absicherung und Dokumentation über längere Zeit strukturiert mitgeführt werden sollen.",
        highlight: "Verantwortung über einzelne Analysen hinaus",
        href: "/leistungen/langfristige-kooperation",
        icon: "/icons/service-cooperation.svg",
        meta: "Dienstleistung",
        topics: [
          "Zuverlässigkeitsmanagement",
          "Absicherung nach Stand der Technik",
          "Technische Dokumentation",
          "Review- und Sparring-Termine",
        ],
      },
    ],
    methodHighlights: [
      "Design of Experiments (DoE)",
      "FMEA und FTA",
      "Lebensdauererprobung",
      "Felddatenanalyse",
      "Zuverlässigkeitsnachweise",
      "Risikobewertung",
    ],
    processSteps: [
      {
        title: "Ziele definieren",
        description:
          "Anforderungen, Einsatzbedingungen, Kostenrahmen und Risikoakzeptanz werden früh technisch sauber übersetzt.",
      },
      {
        title: "Schwachstellen erkennen",
        description:
          "Ausfallmechanismen, Lastfälle und kritische Stellen werden systematisch untersucht und priorisiert.",
      },
      {
        title: "Tests und DoE planen",
        description:
          "Versuchsprogramme und statistische Auswertung werden so aufgebaut, dass Aussagen belastbar und wirtschaftlich sind.",
      },
      {
        title: "Absichern und nachweisen",
        description:
          "Ergebnisse, Dokumentation und Felddaten werden zu einer klaren Entscheidungs- und Nachweisbasis verdichtet.",
      },
    ],
    benefits: [
      {
        title: "Ingenieurwissenschaft plus Statistik",
        description:
          "RelTest verbindet methodische Analyse mit technischem Verständnis für reale Ausfallmechanismen.",
      },
      {
        title: "Unternehmen seit 2016",
        description:
          "RelTest Solutions begleitet seit 2016 Industrieprojekte in der Beratung. Im Team fließen zusätzlich mehrere Jahrzehnte Erfahrung in der Zuverlässigkeitstechnik ein.",
      },
      {
        title: "Ganzheitlicher Blick",
        description:
          "Von der Planung über Erprobung und Absicherung bis zur Überwachung im Feld bleibt der gesamte Lebenszyklus im Fokus.",
      },
      {
        title: "Individuelle Lösungen",
        description:
          "Beratung, Training, RelTest Education oder komplette Arbeitspakete werden passend zu Projektstand und Risiko aufgebaut.",
      },
    ],
    educationFormats: [
      {
        title: "Inhouse-Schulungen und Seminare",
        description:
          "Ideal für Teams, die Methoden gemeinsam verankern, offene Projektfragen direkt einbringen und in kurzer Zeit konkrete Anwendungssicherheit aufbauen wollen.",
        bullets: [
          "Individuell auf Ihr Unternehmen, Ihre Produkte und Ihre Fragestellungen zugeschnitten",
          "Direkt an Entwicklungsalltag, Erprobung und realen Projektbeispielen ausgerichtet",
          "Intensiver fachlicher Austausch mit unmittelbarem Praxisbezug für Ihr Team",
        ],
        ctaLabel: "Schulung anfragen",
        ctaHref: "/weiterbildung/seminare",
        icon: "/icons/service-training.svg",
      },
      {
        title: "RelTest Education",
        description:
          "Ideal für Einzelpersonen oder verteilte Teams, die Wissen flexibel, modular und ohne Terminabhängigkeit aufbauen und vertiefen wollen.",
        bullets: [
          "Zeitlich flexibel, ortsunabhängig und sofort im Arbeitsalltag einsetzbar",
          "Strukturiert für nachhaltigen Wissensaufbau in Reliability Engineering und DoE",
          "Ideal als Ergänzung zu Inhouse-Schulungen, Projektarbeit oder individueller Weiterbildung",
        ],
        ctaLabel: "RelTest Education entdecken",
        ctaHref: "/weiterbildung/academy",
        icon: "/branding/reltest-education-horizontal-positive.svg",
      },
    ],
    industryReferences: [
      "Automotive",
      "Maschinenbau",
      "Elektronische Produkte",
      "Halbleiterindustrie",
      "Consumer-Technik",
      "Erneuerbare Energien",
      "Medizintechnik",
      "Luft- und Raumfahrt",
    ],
    book: {
      ...shared.books.reliabilityTests,
      title:
        "Zuverlässigkeitstests für eine effiziente und entwicklungsbegleitende Absicherung von Bauteilen und Systemen",
      subtitle: "Testplanung, Testauswertung und Zuverlässigkeitsnachweis",
      authors:
        "Dr.-Ing. Martin Dazer, Alexander Grundler, Kevin Lucan und Prof. Dr.-Ing. Bernd Bertsche",
      description:
        "Das Springer-Fachbuch zeigt, wie Zuverlässigkeitstests effizient geplant, ausgewertet und als entwicklungsbegleitender Nachweis für Bauteile und Systeme genutzt werden können.",
    },
    books: [
      {
        ...shared.books.reliabilityTests,
        title:
          "Zuverlässigkeitstests für eine effiziente und entwicklungsbegleitende Absicherung von Bauteilen und Systemen",
        subtitle: "Testplanung, Testauswertung und Zuverlässigkeitsnachweis",
        authors:
          "Dr.-Ing. Martin Dazer, Alexander Grundler, Kevin Lucan und Prof. Dr.-Ing. Bernd Bertsche",
        description:
          "Das Springer-Fachbuch zeigt, wie Zuverlässigkeitstests effizient geplant, ausgewertet und als entwicklungsbegleitender Nachweis für Bauteile und Systeme genutzt werden können.",
      },
      {
        ...shared.books.reliabilityEngineering,
        title: "Zuverlässigkeit im Fahrzeug- und Maschinenbau",
        subtitle: "Ermittlung von Bauteil- und System-Zuverlässigkeiten",
        authors: "Prof. Dr.-Ing. Bernd Bertsche und Dr.-Ing. Martin Dazer",
        description:
          "Das viel zitierte Springer-Fachbuch verbindet Einführung, Vertiefung und praktisches Nachschlagewerk für Ingenieurinnen und Ingenieure aus Fahrzeug- und Maschinenbau.",
      },
    ],
    home: {
      practical: {
        eyebrow: "Zuverlässigkeitstechnik in der Praxis",
        title:
          "Die Badewannenkurve ist kein Symbol, sondern tägliche Projektrealität.",
        paragraphs: [
          "Gute Zuverlässigkeitstechnik beginnt damit, Frühausfälle, stabile Nutzungsphasen und Verschleiß nicht nur theoretisch zu kennen, sondern daraus konkrete Prüf-, Analyse- und Entwicklungsentscheidungen abzuleiten.",
          "RelTest Solutions arbeitet genau an dieser Schnittstelle aus Methode, Produkt und Realität. Deshalb stehen auf der Website nicht nur Konzepte, sondern echte Arbeitssituationen aus Analyse, Seminar, Versuch und Projektbegleitung.",
        ],
        cta: "Mehr über Zuverlässigkeitstechnik erfahren",
        curveAlt:
          "Badewannenkurve der Zuverlässigkeit mit Frühausfällen, Zufallsausfällen und Verschleißausfällen",
        teamAlt: "RelTest Mitarbeiter bei der technischen Analyse eines Bauteils",
        noteEyebrow: "Persönliche Note",
        noteTitle:
          "Echte Menschen, echte Daten, echte technische Verantwortung.",
        noteText:
          "Die Bilder auf der Website zeigen RelTest dort, wo der Mehrwert entsteht: im Seminarraum, an Daten, am Produkt und im Prüf- oder Entwicklungsumfeld.",
        galleryAlts: [
          "Ingenieurteam bespricht Zuverlässigkeitsfragen an einem Prüfstand",
          "Technische Beratungssituation mit Bauteilmodellen, Risikomatrix und Konstruktionsdaten",
          "Projektteam bewertet Erprobungsplanung und Lebensdauerdaten in einem Besprechungsraum",
        ],
      },
      serviceIntro: {
        eyebrow: "Leistungen",
        title:
          "Wobei RelTest Sie konkret unterstützt",
        description:
          "Ob akutes Zuverlässigkeitsthema, methodische Absicherung, Kompetenzaufbau oder langfristige Projektbegleitung: RelTest bietet vier klare Einstiege für technische Entwicklungs- und Qualitätsaufgaben.",
      },
      educationIntro: {
        eyebrow: "Weiterbildung",
        title: "Zwei Weiterbildungswege mit sehr unterschiedlichem Nutzen",
        description:
          "RelTest Education und Vor-Ort-Schulungen gehören beide zur Weiterbildung, lösen aber unterschiedliche Aufgaben. Genau diese Unterscheidung macht die Positionierung stärker und glaubwürdiger.",
        seminarAlt: "RelTest Seminar vor Ort",
        academyAlt: "Digitales Lernangebot von RelTest Education an einem Bildschirm",
      },
      benefitsIntro: {
        eyebrow: "Warum RelTest",
        title:
          "Kompetenz, die technische Risiken verständlich und entscheidbar macht",
        description:
          "Für technische Entscheider, Projektleiter, Einkauf und Geschäftsführung zählt nicht nur Methodik, sondern belastbare Orientierung: Welche Risiken sind relevant, welche Nachweise sind wirtschaftlich sinnvoll und welche Maßnahmen bringen das Produkt wirklich voran?",
      },
      podcast: {
        eyebrow: "Podcast",
        visualTitle:
          "Stimme, Haltung und technische Perspektive direkt erleben",
        visualText:
          "Der Podcast ist ein guter Einstieg für Besucher, die nicht nur Leistungen lesen, sondern auch ein Gefühl für die Personen hinter RelTest Solutions bekommen möchten.",
        title: "RelTest auch im persönlichen Gespräch kennenlernen",
        description:
          "Im Podcast-Gespräch erhalten Interessierte einen ersten persönlichen Eindruck und erleben, wie technische Themen rund um Zuverlässigkeit, Entwicklung und Verantwortung eingeordnet werden.",
        hostContext:
          "Unser Geschäftsführer Kevin Lucan spricht im Ingenieurshelden-Podcast über seinen Weg, technische Denkweisen und die Bedeutung belastbarer Entscheidungen im Ingenieurumfeld.",
        cta: "Podcast anhören",
        contactCta: "Gespräch anfragen",
      },
      book: {
        eyebrow: "Literatur",
        sectionEyebrow: "Fachbücher",
        title: "Veröffentlichte Fachkompetenz statt nur Behauptungen",
        trustText:
          "Die Springer-Fachbücher sind ein starker Vertrauensanker für anspruchsvolle Kunden aus Entwicklung, Erprobung und Maschinenbau.",
        authorsLabel: "Autoren",
        literatureCta: "Literatur ansehen",
        bookCta: "Aktuelles Buch öffnen",
      },
      references: {
        eyebrow: "Referenzen",
        title: "Erfahrung in anspruchsvollen Branchen",
        description:
          "Bereits auf der Startseite wird sichtbar, dass RelTest in Industrien arbeitet, in denen Qualität, Lebensdauer und Nachweisfähigkeit besonders kritisch sind.",
      },
      contact: {
        eyebrow: "Kontakt",
        title:
          "Stellen auch Sie den langfristigen Erfolg Ihrer Produkte sicher.",
        description:
          "Ob punktuelle Analyse, Weiterbildung, projektbegleitendes Coaching oder vollständiges Arbeitspaket: RelTest Solutions berät Sie unverbindlich zur passenden Zuverlässigkeitsstrategie.",
        cta: "Kontakt aufnehmen",
      },
    },
    pages: {
      services: {
        intro: {
          eyebrow: "Leistungen",
          title: "Ein Leistungsportfolio für anspruchsvolle technische Produkte",
          description:
            "RelTest Solutions verbindet Beratung, methodische Absicherung, Weiterbildung und langfristige operative Unterstützung zu einem Angebot, das sich an realen Entwicklungs- und Qualitätsherausforderungen orientiert.",
        },
        overview: {
          eyebrow: "Überblick",
          title: "Leistungen im Überblick",
          description:
            "Vier zentrale Angebote zeigen, wie RelTest unterstützt: Beratung, Weiterbildung vor Ort, RelTest Education und langfristige Kooperation. Fachthemen wie DoE, Datenanalyse, Risikomanagement und Zuverlässigkeitstechnik werden je nach Projektziel gezielt in Beratung und Kooperation eingebracht.",
        },
      },
      education: {
        intro: {
          eyebrow: "Weiterbildung",
          title:
            "Weiterbildung, die sich an Ihrem Ziel und nicht an einem Standardformat orientiert",
          description:
            "RelTest bietet Weiterbildung in zwei klar unterschiedlichen Formen: persönliche Inhouse-Schulungen für Teams und RelTest Education für flexibles, digitales Lernen.",
        },
        visualAlt:
          "RelTest Experten erklären Zuverlässigkeitsanforderungen in einer Schulung",
        visualLabel: "Reliability Know-how",
        visualTitle:
          "Methoden verstehen, anwenden und im Projekt belastbar nutzen.",
        supportImageAlt:
          "RelTest Experten diskutieren technische Zusammenhänge an einem Bauteil",
        formatIntro: {
          eyebrow: "Zwei Weiterbildungswege",
          title:
            "Seminare und RelTest Education lösen unterschiedliche Aufgaben im Kompetenzaufbau.",
          description:
            "Vor-Ort-Schulungen schaffen ein gemeinsames Methodenverständnis im Team. RelTest Education macht Grundlagen und Vertiefung flexibel verfügbar, wenn Wissen skalierbar aufgebaut werden soll.",
        },
        cardImages: [
          {
            label: "Direkt vor Ort",
            src: "/team/img-0107.png",
            alt: "RelTest Seminar zur Zuverlässigkeitstechnik vor Ort",
          },
          {
            label: "Flexibel digital",
            src: "/team/academy-e-learning.png",
            alt: "Digitales Lernangebot von RelTest Education zur Lebensdatenanalyse",
          },
        ],
        decisionTitle: "Welches Format passt zu Ihrem Ziel?",
        decisionDescription:
          "Beide Formate können einzeln genutzt oder kombiniert werden. Entscheidend ist, ob Sie ein gemeinsames Teamverständnis im direkten Austausch aufbauen oder Wissen flexibel und wiederholbar verfügbar machen möchten.",
        decisionItems: [
          {
            title: "Inhouse-Seminar",
            description:
              "Wenn konkrete Projektfragen, Diskussionen und ein gemeinsamer Methodenstandard im Team im Vordergrund stehen.",
          },
          {
            title: "RelTest Education",
            description:
              "Wenn Mitarbeitende Grundlagen und Vertiefungen zeitlich unabhängig, strukturiert und wiederholbar lernen sollen.",
          },
          {
            title: "Kombinierter Ansatz",
            description:
              "Wenn digitale Vorbereitung, Vor-Ort-Anwendung und nachhaltige Vertiefung miteinander verbunden werden sollen.",
          },
        ],
        trustPoints: [
          "Praxisnah an realen Entwicklungs- und Erprobungsfragen",
          "Methodisch fundiert mit Zuverlässigkeitstechnik, Statistik und DoE",
          "Für Ingenieurinnen, Ingenieure und technische Teams entwickelt",
        ],
      },
      knowledge: {
        intro: {
          eyebrow: "Wissen",
          title:
            "Fachwissen, das die Bedeutung von Zuverlässigkeit verständlich macht",
          description:
            "Dieser Bereich wird als Wissensreiter für ausgewählte Inhalte rund um Zuverlässigkeitstechnik, DoE und Risikomanagement aufgebaut. Ziel ist es, technische Zusammenhänge anschaulich zu erklären und die Relevanz für reale Entwicklungsprojekte sichtbar zu machen.",
        },
        topics: [
          {
            id: "planung",
            title: "Planung",
            description:
              "Wie Anforderungen, Einsatzbedingungen, Zielwerte und Nachweise früh so definiert werden, dass spätere Entscheidungen belastbar und wirtschaftlich bleiben.",
          },
          {
            id: "schwachstellenanalyse",
            title: "Schwachstellenanalyse",
            description:
              "Wie kritische Bauteile, Ausfallmechanismen und Lastfälle systematisch erkannt und priorisiert werden, bevor sie im Feld zum Problem werden.",
          },
          {
            id: "absicherung",
            title: "Absicherung",
            description:
              "Wie Nachweise, Dokumentation und methodische Entscheidungen so aufgebaut werden, dass Produkte technisch nachvollziehbar und belastbar abgesichert sind.",
          },
          {
            id: "erprobung",
            title: "Erprobung",
            description:
              "Wie Prüfprogramme zielgerichtet geplant werden, um Schwachstellen sichtbar zu machen und die relevanten Aussagen für Entwicklung und Freigabe zu gewinnen.",
          },
          {
            id: "prognosen",
            title: "Prognosen",
            description:
              "Wie Lebensdauer, Ausfallwahrscheinlichkeiten und Feldaussagen aus Daten, Modellen und statistischen Methoden belastbar abgeleitet werden können.",
          },
          {
            id: "design-of-experiments",
            title: "Design of Experiments (DoE)",
            description:
              "Warum statistische Versuchsplanung Tests aussagekräftiger macht und wie Faktoren, Wechselwirkungen und Streuungen systematisch bewertet werden.",
          },
          {
            id: "risikomanagement",
            title: "Risikomanagement",
            description:
              "Wie technische Risiken aus Ausfallmechanismen, Eintrittswahrscheinlichkeit, Konsequenz und Nachweisbarkeit sauber priorisiert werden.",
          },
        ],
        placeholder:
          "Die Detailseiten ordnen das Thema fachlich ein und verlinken zu passenden Leistungen, damit Wissen und Projektunterstützung sauber zusammenfinden.",
        preparation: {
          eyebrow: "In Vorbereitung",
          title:
            "Hier entstehen später Fachbeiträge, erklärende Grafiken und visuelle Einordnungen für potenzielle Kunden.",
          description:
            "Der Bereich ist bewusst bereits strukturell angelegt, damit zukünftig suchmaschinenrelevante Inhalte, Diagramme und thematische Landingpages ergänzt werden können, die sowohl über Google gefunden werden als auch qualifizierte Besucher auf RelTest Solutions führen.",
          contactCta: "Thema mit uns besprechen",
          servicesCta: "Zu den Leistungen",
        },
      },
      process: {
        intro: {
          eyebrow: "Prozess",
          title:
            "Ein klarer Zuverlässigkeitsprozess schafft Vertrauen und reduziert Fehlentscheidungen",
          description:
            "Der methodische Ablauf macht sichtbar, wie aus einzelnen Analysen, Versuchen und Bewertungen ein belastbarer Gesamtansatz entsteht.",
        },
        graphicAlt: "Vierstufige Grafik des Zuverlässigkeitsprozesses",
        stepLabel: "Schritt",
      },
      literature: {
        intro: {
          eyebrow: "Literatur",
          title:
            "Fachliche Autorität, die über Marketingbehauptungen hinausgeht",
          description:
            "Die Springer-Fachbücher mit Beteiligung aus dem RelTest-Umfeld zeigen die wissenschaftliche und praktische Tiefe hinter den Leistungen von RelTest: von Zuverlässigkeit im Maschinenbau bis zu effizienter entwicklungsbegleitender Absicherung.",
        },
        authorsLabel: "Autoren",
        bookCta: "Buchseite öffnen",
        questionCta: "Fachfragen stellen",
      },
      references: {
        intro: {
          eyebrow: "Referenzen",
          title:
            "Ein Auszug der Unternehmen, für die RelTest bereits gearbeitet hat",
          description:
            "Die Referenzen werden mit den Logos der bisherigen Website gezeigt. So entsteht direkt ein belastbares Signal für Branchennähe, Vertrauen und technische Anschlussfähigkeit.",
        },
        logoLinkLabel: "Website von {name} öffnen",
      },
      contact: {
        intro: {
          eyebrow: "Kontakt",
          title: "Der schnellste Weg zum passenden Zuverlässigkeitsansatz",
          description:
            "Ob Projektanfrage, Weiterbildungsbedarf oder fachliche Rückfrage: RelTest Solutions berät Sie unverbindlich und zielgerichtet.",
        },
        calendly: {
          eyebrow: "Termin vereinbaren",
          title: "Buchen Sie direkt ein unverbindliches Erstgespräch",
          description:
            "Wählen Sie einen passenden Termin aus und klären Sie mit RelTest Solutions, welcher Ansatz für Ihr Projekt, Ihre Absicherung oder Ihre Weiterbildung sinnvoll ist.",
          embedTitle: "Calendly Terminbuchung für RelTest Solutions",
          fallback: "Calendly in neuem Fenster öffnen",
          note:
            "Falls das Buchungsfenster nicht lädt, können Sie Calendly direkt öffnen oder uns per E-Mail kontaktieren.",
          points: [
            "Kurze Einordnung Ihres technischen Anliegens",
            "Klärung möglicher Leistungs- oder Weiterbildungsformate",
            "Unverbindlicher nächster Schritt ohne lange Vorabstimmung",
          ],
        },
        directContact: "Direktkontakt",
        reasonsTitle: "Typische Anlässe für ein Erstgespräch",
        reasons: [
          "Zuverlässigkeitsziele für neue Produkte festlegen",
          "Versuchsplanung oder DoE absichern",
          "Teams durch Schulungen oder RelTest Education weiterentwickeln",
          "Langfristige Unterstützung im Projekt aufsetzen",
        ],
      },
    },
  },
  en: {
    metadata: {
      title: "RelTest Solutions | Advanced Reliability Engineering Partner",
      description:
        "Reliability engineering, testing, validation and technical consulting for demanding B2B products.",
    },
    navigation: {
      ariaLabel: "Main navigation",
      homeLabel: "RelTest Solutions home page",
      menu: "Menu",
      inquiry: "Start an inquiry",
      servicesOverview: "Services overview",
      knowledgeOverview: "Knowledge overview",
      expertiseOverview: "Expertise overview",
      items: [
        { label: "Services", href: "/leistungen" },
        { label: "Training", href: "/weiterbildung" },
        { label: "Knowledge", href: "/wissen" },
        { label: "Expertise", href: "/expertise" },
        { label: "About RelTest", href: "/ueber-uns" },
      ],
      serviceItems: [
        {
          label: "Reliability engineering",
          href: "/leistungen/zuverlaessigkeitstechnik",
        },
        {
          label: "Reliability management",
          href: "/leistungen/zuverlaessigkeitsmanagement",
        },
        { label: "Consulting", href: "/leistungen/beratung" },
        {
          label: "Design of Experiments",
          href: "/leistungen/design-of-experiments",
        },
        {
          label: "Data analysis & prognostics",
          href: "/leistungen/datenanalyse-prognostik",
        },
        { label: "Risk management", href: "/leistungen/risikomanagement" },
        {
          label: "Long-term partnership",
          href: "/leistungen/langfristige-kooperation",
        },
      ],
      serviceGroups: [
        {
          title: "Service offers",
          items: [
            { label: "Consulting", href: "/leistungen/beratung" },
            {
              label: "Training and seminars",
              href: "/weiterbildung/seminare",
            },
            {
              label: "RelTest Education",
              href: "/weiterbildung/academy",
            },
            {
              label: "Long-term partnership",
              href: "/leistungen/langfristige-kooperation",
            },
          ],
        },
        {
          title: "Technical fields within consulting & partnership",
          items: [
            {
              label: "Reliability engineering",
              href: "/leistungen/zuverlaessigkeitstechnik",
            },
            {
              label: "Reliability management",
              href: "/leistungen/zuverlaessigkeitsmanagement",
            },
            {
              label: "Design of Experiments",
              href: "/leistungen/design-of-experiments",
            },
            {
              label: "Data analysis & prognostics",
              href: "/leistungen/datenanalyse-prognostik",
            },
            { label: "Risk management", href: "/leistungen/risikomanagement" },
          ],
        },
      ],
      knowledgeItems: [
        { label: "Planning", href: "/wissen/planung" },
        {
          label: "Weak-point analysis",
          href: "/wissen/schwachstellenanalyse",
        },
        { label: "Validation", href: "/wissen/absicherung" },
        { label: "Testing", href: "/wissen/erprobung" },
        { label: "Predictions", href: "/wissen/prognosen" },
        { label: "Design of Experiments", href: "/wissen/design-of-experiments" },
        { label: "Risk management", href: "/wissen/risikomanagement" },
      ],
      expertiseItems: [
        { label: "References & industry trust", href: "/referenzen" },
        { label: "Books & publications", href: "/literatur" },
        { label: "Podcast with Kevin Lucan", href: "/expertise#podcast" },
        { label: "Industries", href: "/branchen" },
      ],
    },
    footer: {
      description:
        "Reliability engineering, reliability management and testing for technical products with demanding quality and service-life requirements.",
      quickAccess: "Quick access",
      contact: "Contact",
      copyright: "© 2026 RelTest Solutions. All rights reserved.",
      links: [
        { label: "Services", href: "/leistungen" },
        { label: "Training", href: "/weiterbildung" },
        { label: "Knowledge", href: "/wissen" },
        { label: "Expertise", href: "/expertise" },
        { label: "Literature", href: "/literatur" },
        { label: "References", href: "/referenzen" },
        { label: "Industries", href: "/branchen" },
        { label: "About RelTest", href: "/ueber-uns" },
        { label: "News", href: "/aktuelles" },
        { label: "Glossary", href: "/glossar" },
        { label: "Contact", href: "/kontakt" },
        { label: "Legal notice", href: "/impressum" },
        { label: "Privacy", href: "/datenschutz" },
      ],
    },
    common: {
      learnMore: "Learn more",
    },
    hero: {
      eyebrow: "Advanced Reliability Engineering Partner",
      title:
        "Reliability engineering for robust decisions in development, validation and production readiness.",
      description:
        "Since 2016, RelTest Solutions has helped industrial companies validate demanding technical products. Our team combines decades of experience in reliability, service life, statistics, testing and Design of Experiments.",
      facts: [
        {
          title: "Since 2016",
          description:
            "Consulting partner for technical reliability in development projects.",
        },
        {
          title: "Decades of experience",
          description:
            "Hands-on expertise in automotive engineering, mechanical engineering, testing and statistics.",
        },
      ],
      primaryCta: "Discuss your project",
      secondaryCta: "View services",
      knowledgeCta: "Learn more about reliability engineering",
      topics: [
        "Testing",
        "Data analysis",
        "DoE",
        "Prognostics & Health Monitoring",
        "Modelling",
        "Professional training",
        "Risk management",
      ],
    },
    services: [
      {
        title: "Consulting for companies",
        description:
          "Strategic and operational support throughout the product process. Depending on the project, we bring in specific expertise in reliability engineering, DoE, data analysis and risk management.",
        highlight: "Technical direction and methodological validation",
        href: "/leistungen/beratung",
        icon: "/icons/service-consulting.svg",
        meta: "Consulting",
        topics: [
          "Reliability engineering",
          "DoE & test planning",
          "Data analysis & prognostics",
          "Risk management",
        ],
      },
      {
        title: "On-site training and seminars",
        description:
          "Practical training for teams at your premises, tailored to your products, development status and methodological maturity.",
        highlight: "In-house, interactive and project-focused",
        href: "/weiterbildung/seminare",
        icon: "/icons/service-training.svg",
        meta: "Training",
      },
      {
        title: "RelTest Education",
        description:
          "Digital learning for engineers who want to build their reliability engineering and DoE expertise flexibly and systematically.",
        highlight: "Scalable, location-independent and ready to use",
        href: "/weiterbildung/academy",
        icon: "/branding/reltest-education-horizontal-positive.svg",
        meta: "Education",
      },
      {
        title: "Long-term partnership",
        description:
          "Continuous support in development projects when reliability, validation and documentation need to be managed over a longer period of time.",
        highlight: "Ownership beyond individual analyses",
        href: "/leistungen/langfristige-kooperation",
        icon: "/icons/service-cooperation.svg",
        meta: "Engineering services",
        topics: [
          "Reliability management",
          "State-of-the-art validation",
          "Technical documentation",
          "Review and sparring sessions",
        ],
      },
    ],
    methodHighlights: [
      "Design of Experiments (DoE)",
      "FMEA and FTA",
      "Service-life testing",
      "Field-data analysis",
      "Reliability verification",
      "Risk assessment",
    ],
    processSteps: [
      {
        title: "Define objectives",
        description:
          "Requirements, operating conditions, cost constraints and risk acceptance are translated into clear technical targets at an early stage.",
      },
      {
        title: "Identify weak points",
        description:
          "Failure mechanisms, load cases and critical areas are systematically investigated and prioritised.",
      },
      {
        title: "Plan tests and DoE",
        description:
          "Test programmes and statistical analyses are designed to deliver robust results efficiently.",
      },
      {
        title: "Validate and demonstrate",
        description:
          "Results, documentation and field data are consolidated into a clear basis for decisions and technical evidence.",
      },
    ],
    benefits: [
      {
        title: "Engineering meets statistics",
        description:
          "RelTest combines methodological analysis with a technical understanding of real-world failure mechanisms.",
      },
      {
        title: "Established in 2016",
        description:
          "RelTest Solutions has supported industrial consulting projects since 2016, while the team contributes several decades of additional reliability engineering experience.",
      },
      {
        title: "End-to-end perspective",
        description:
          "From planning and testing to validation and field monitoring, the entire product life cycle remains in focus.",
      },
      {
        title: "Tailored solutions",
        description:
          "Consulting, training, RelTest Education programmes or complete work packages are tailored to the project stage and risk profile.",
      },
    ],
    educationFormats: [
      {
        title: "In-house training and seminars",
        description:
          "Ideal for teams that want to establish methods together, address current project questions directly and quickly build practical confidence.",
        bullets: [
          "Tailored to your company, products and specific technical questions",
          "Aligned with everyday development work, testing and real project examples",
          "Intensive expert exchange with immediate practical value for your team",
        ],
        ctaLabel: "Request training",
        ctaHref: "/weiterbildung/seminare",
        icon: "/icons/service-training.svg",
      },
      {
        title: "RelTest Education",
        description:
          "Ideal for individuals or distributed teams who want to develop and deepen their knowledge flexibly, modularly and without fixed dates.",
        bullets: [
          "Flexible scheduling, location-independent access and immediate workplace application",
          "Structured for sustainable learning in reliability engineering and DoE",
          "Ideal as a complement to in-house training, project work or individual development",
        ],
        ctaLabel: "Explore RelTest Education",
        ctaHref: "/weiterbildung/academy",
        icon: "/branding/reltest-education-horizontal-positive.svg",
      },
    ],
    industryReferences: [
      "Automotive",
      "Mechanical engineering",
      "Electronic products",
      "Semiconductor industry",
      "Consumer technology",
      "Renewable energy",
      "Medical technology",
      "Aerospace",
    ],
    book: {
      ...shared.books.reliabilityTests,
      title:
        "Zuverlässigkeitstests für eine effiziente und entwicklungsbegleitende Absicherung von Bauteilen und Systemen",
      subtitle: "Test planning, test evaluation and reliability demonstration",
      authors:
        "Dr.-Ing. Martin Dazer, Alexander Grundler, Kevin Lucan and Prof. Dr.-Ing. Bernd Bertsche",
      description:
        "This Springer reference explains how reliability tests can be planned, evaluated and used efficiently as development-accompanying validation for components and systems.",
    },
    books: [
      {
        ...shared.books.reliabilityTests,
        title:
          "Zuverlässigkeitstests für eine effiziente und entwicklungsbegleitende Absicherung von Bauteilen und Systemen",
        subtitle: "Test planning, test evaluation and reliability demonstration",
        authors:
          "Dr.-Ing. Martin Dazer, Alexander Grundler, Kevin Lucan and Prof. Dr.-Ing. Bernd Bertsche",
        description:
          "This Springer reference explains how reliability tests can be planned, evaluated and used efficiently as development-accompanying validation for components and systems.",
      },
      {
        ...shared.books.reliabilityEngineering,
        title: "Reliability in Automotive and Mechanical Engineering",
        subtitle: "Determining component and system reliability",
        authors: "Prof. Dr.-Ing. Bernd Bertsche and Dr.-Ing. Martin Dazer",
        description:
          "This widely cited Springer reference combines a thorough introduction, in-depth methodology and practical guidance for engineers in automotive and mechanical engineering.",
      },
    ],
    home: {
      practical: {
        eyebrow: "Reliability engineering in practice",
        title:
          "The bathtub curve is not just a symbol. It is daily project reality.",
        paragraphs: [
          "Sound reliability engineering means understanding early failures, stable operating phases and wear-out, then translating that knowledge into concrete testing, analysis and development decisions.",
          "RelTest Solutions works precisely at the interface between methodology, product and reality. The website therefore shows not only concepts, but real working situations from analysis, seminars, testing and project support.",
        ],
        cta: "Learn more about reliability engineering",
        curveAlt:
          "Bathtub curve showing early failures, random failures and wear-out failures",
        teamAlt: "RelTest engineers conducting a technical component analysis",
        noteEyebrow: "A personal perspective",
        noteTitle: "Real people, real data, real technical responsibility.",
        noteText:
          "The images show RelTest where value is created: in seminars, in data analysis, at the product and in testing or development environments.",
        galleryAlts: [
          "Engineering team discussing reliability questions at a test bench",
          "Technical consulting meeting with component models, risk matrix and design data",
          "Project team reviewing test planning and lifetime data in a meeting room",
        ],
      },
      serviceIntro: {
        eyebrow: "Services",
        title:
          "Where RelTest supports your engineering teams",
        description:
          "Whether you need support with an acute reliability issue, methodological validation, capability building or long-term project support, RelTest offers four clear entry points for development and quality challenges.",
      },
      educationIntro: {
        eyebrow: "Professional development",
        title: "Two learning paths with distinctly different benefits",
        description:
          "RelTest Education and on-site training are both forms of professional development, but they solve different challenges. This distinction makes the offering clearer and more credible.",
        seminarAlt: "RelTest on-site seminar",
        academyAlt: "RelTest Education digital learning course displayed on a computer",
      },
      benefitsIntro: {
        eyebrow: "Why RelTest",
        title: "Expertise that makes technical risks clear and actionable",
        description:
          "Technical decision-makers, project managers, procurement teams and executives need more than methodology. They need robust guidance on relevant risks, economically viable evidence and measures that genuinely advance the product.",
      },
      podcast: {
        eyebrow: "Podcast",
        visualTitle:
          "Hear the voice, mindset and technical perspective behind RelTest",
        visualText:
          "The podcast is an excellent introduction for visitors who want to understand not only the services, but also the people behind RelTest Solutions.",
        title: "Get to know RelTest through a personal conversation",
        description:
          "The podcast offers a first personal impression and demonstrates how technical topics related to reliability, development and responsibility are approached.",
        hostContext:
          "Managing Director Kevin Lucan joins the Ingenieurshelden podcast to discuss his career, engineering mindsets and the importance of robust decisions in technical environments.",
        cta: "Listen to the podcast",
        contactCta: "Request a conversation",
      },
      book: {
        eyebrow: "Literature",
        sectionEyebrow: "Technical references",
        title: "Published technical expertise, not just marketing claims",
        trustText:
          "The Springer references are a strong signal of expertise for demanding customers in development, testing and mechanical engineering.",
        authorsLabel: "Authors",
        literatureCta: "View literature",
        bookCta: "Open latest book",
      },
      references: {
        eyebrow: "References",
        title: "Experience in demanding industries",
        description:
          "The home page shows that RelTest works in industries where quality, service life and demonstrable reliability are especially critical.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Secure the long-term success of your products.",
        description:
          "Whether you need a focused analysis, professional training, project coaching or a complete work package, RelTest Solutions will help you identify the right reliability strategy.",
        cta: "Contact us",
      },
    },
    pages: {
      services: {
        intro: {
          eyebrow: "Services",
          title: "A service portfolio for demanding technical products",
          description:
            "RelTest Solutions combines consulting, methodological validation, professional training and long-term operational support in an offering aligned with real development and quality challenges.",
        },
        overview: {
          eyebrow: "Overview",
          title: "Services at a glance",
          description:
            "Four core offers show how RelTest supports customers: consulting, on-site training, RelTest Education and long-term partnership. Technical topics such as DoE, data analysis, risk management and reliability engineering are applied within consulting and collaboration according to the project objective.",
        },
      },
      education: {
        intro: {
          eyebrow: "Professional development",
          title:
            "Training shaped around your objective, not a standard format",
          description:
            "RelTest offers two clearly differentiated formats: personal in-house training for teams and RelTest Education for flexible digital learning.",
        },
        visualAlt:
          "RelTest experts explaining reliability requirements in a training session",
        visualLabel: "Reliability know-how",
        visualTitle:
          "Understand methods, apply them and use them reliably in projects.",
        supportImageAlt:
          "RelTest experts discussing technical relationships at a component",
        formatIntro: {
          eyebrow: "Two learning paths",
          title:
            "Seminars and RelTest Education solve different challenges in capability building.",
          description:
            "On-site training creates a shared methodological foundation within a team. RelTest Education makes fundamentals and in-depth content available flexibly when knowledge needs to scale.",
        },
        cardImages: [
          {
            label: "On-site exchange",
            src: "/team/img-0107.png",
            alt: "RelTest on-site seminar on reliability engineering",
          },
          {
            label: "Flexible digital learning",
            src: "/team/academy-e-learning.png",
            alt: "RelTest Education digital training on life data analysis",
          },
        ],
        decisionTitle: "Which format fits your objective?",
        decisionDescription:
          "Both formats can be used individually or combined. The key question is whether you need shared team alignment through direct exchange or flexible, repeatable access to structured expertise.",
        decisionItems: [
          {
            title: "In-house seminar",
            description:
              "When concrete project questions, discussion and a shared team methodology are the priority.",
          },
          {
            title: "RelTest Education",
            description:
              "When employees should learn fundamentals and advanced topics independently, systematically and repeatedly.",
          },
          {
            title: "Combined approach",
            description:
              "When digital preparation, on-site application and sustainable follow-up learning should reinforce each other.",
          },
        ],
        trustPoints: [
          "Practice-oriented around real development and testing questions",
          "Methodologically grounded in reliability engineering, statistics and DoE",
          "Developed for engineers and technical teams",
        ],
      },
      knowledge: {
        intro: {
          eyebrow: "Knowledge",
          title:
            "Expert knowledge that makes the importance of reliability clear",
          description:
            "This section will provide selected content on reliability engineering, Design of Experiments and risk management. Its purpose is to explain technical relationships clearly and show their relevance to real development projects.",
        },
        topics: [
          {
            id: "planung",
            title: "Planning",
            description:
              "How requirements, operating conditions, targets and evidence can be defined early so that later decisions remain robust and economical.",
          },
          {
            id: "schwachstellenanalyse",
            title: "Weak-point analysis",
            description:
              "How critical components, failure mechanisms and load cases can be systematically identified and prioritised before they become field problems.",
          },
          {
            id: "absicherung",
            title: "Validation",
            description:
              "How evidence, documentation and methodological decisions can be structured to provide technically traceable and robust product validation.",
          },
          {
            id: "erprobung",
            title: "Testing",
            description:
              "How test programmes can be planned to reveal weak points and generate the relevant evidence for development and release decisions.",
          },
          {
            id: "prognosen",
            title: "Predictions",
            description:
              "How service life, failure probabilities and field performance can be robustly derived from data, models and statistical methods.",
          },
          {
            id: "design-of-experiments",
            title: "Design of Experiments (DoE)",
            description:
              "Why statistical experimental design makes tests more meaningful and how factors, interactions and variation are evaluated systematically.",
          },
          {
            id: "risikomanagement",
            title: "Risk management",
            description:
              "How technical risks can be prioritised through failure mechanisms, probability, consequence and demonstrability.",
          },
        ],
        placeholder:
          "The detail pages provide technical context and link to suitable services so knowledge and project support connect clearly.",
        preparation: {
          eyebrow: "In development",
          title:
            "Technical articles, explanatory graphics and visual guidance for prospective customers will be published here.",
          description:
            "The section already has a clear structure so that search-relevant content, diagrams and thematic landing pages can be added later, helping qualified visitors discover RelTest Solutions through search engines.",
          contactCta: "Discuss a topic with us",
          servicesCta: "View our services",
        },
      },
      process: {
        intro: {
          eyebrow: "Process",
          title:
            "A clear reliability process builds confidence and reduces poor decisions",
          description:
            "The methodological workflow shows how individual analyses, tests and assessments become a robust overall approach.",
        },
        graphicAlt:
          "Four-stage diagram of the reliability engineering process",
        stepLabel: "Step",
      },
      literature: {
        intro: {
          eyebrow: "Literature",
          title: "Technical authority that goes beyond marketing claims",
          description:
            "The Springer references connected to the RelTest environment demonstrate the scientific and practical depth behind RelTest's services: from reliability in mechanical engineering to efficient development-accompanying validation.",
        },
        authorsLabel: "Authors",
        bookCta: "Open book page",
        questionCta: "Ask a technical question",
      },
      references: {
        intro: {
          eyebrow: "References",
          title: "A selection of companies RelTest has worked with",
          description:
            "The customer logos provide an immediate and credible signal of industry experience, trust and technical compatibility.",
        },
        logoLinkLabel: "Open {name} website",
      },
      contact: {
        intro: {
          eyebrow: "Contact",
          title: "The fastest route to the right reliability approach",
          description:
            "Whether you have a project inquiry, a training requirement or a technical question, RelTest Solutions will provide focused, no-obligation guidance.",
        },
        calendly: {
          eyebrow: "Schedule a meeting",
          title: "Book a no-obligation initial conversation directly",
          description:
            "Choose a suitable time and discuss with RelTest Solutions which approach makes sense for your project, validation challenge or training requirement.",
          embedTitle: "Calendly booking for RelTest Solutions",
          fallback: "Open Calendly in a new window",
          note:
            "If the booking window does not load, you can open Calendly directly or contact us by email.",
          points: [
            "Short assessment of your technical topic",
            "Clarification of suitable service or training formats",
            "A clear next step without lengthy preliminary coordination",
          ],
        },
        directContact: "Direct contact",
        reasonsTitle: "Typical reasons for an initial conversation",
        reasons: [
          "Define reliability targets for new products",
          "Validate test planning or Design of Experiments",
          "Develop teams through training or RelTest Education",
          "Establish long-term support within a project",
        ],
      },
    },
  },
} as const;

export type SiteContent = (typeof content)[Locale];

export function getSiteContent(locale: Locale): SiteContent {
  return content[locale];
}

export const referenceLogos = shared.referenceLogos;
