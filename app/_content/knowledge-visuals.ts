export type KnowledgeVisualCopy = {
  src?: string;
  mobileSrc?: string;
  ratio?: "landscape" | "wide" | "sixteen-nine" | "two-one";
  maxWidth?: "tiny" | "small" | "compact" | "standard" | "wide";
  alt: string;
  caption: string;
  lead?: string;
};

export type KnowledgeVisual = {
  src: string;
  de: KnowledgeVisualCopy;
  en: KnowledgeVisualCopy;
};

export type KnowledgeVisualSet = {
  hero: KnowledgeVisual;
  inline: KnowledgeVisual;
};

export const knowledgeVisuals: Record<string, KnowledgeVisualSet> = {
  zuverlaessigkeitstechnik: {
    hero: {
      src: "reliability-engineering-motor",
      de: {
        alt: "Zuverlässigkeitstechnik vom technischen Anforderungsdokument über Prüfobjekt und Prüfdaten bis zur abgesicherten Entscheidung.",
        caption:
          "Zuverlässigkeitstechnik verbindet Anforderungen, reale Prüfobjekte und belastbare Prüfdaten zu einer nachvollziehbaren technischen Entscheidung.",
      },
      en: {
        alt: "Reliability engineering from technical requirements through test object and test data to a substantiated decision.",
        caption:
          "Reliability engineering connects requirements, real test objects and robust test data to a traceable technical decision.",
      },
    },
    inline: {
      src: "reliability-dimensions",
      de: {
        ratio: "sixteen-nine",
        alt: "Schaubild einer Zuverlässigkeitsaussage, die Funktion, Einsatzbedingungen, Zeit beziehungsweise Lebensdauer sowie Daten und Methoden zu Nachweis und Entscheidung verbindet.",
        lead:
          "Eine belastbare Zuverlässigkeitsaussage verbindet die geforderte Funktion mit Einsatzbedingungen, Zeitbezug und einer geeigneten Daten- und Methodenbasis.",
        caption:
          "Erst das Zusammenspiel dieser vier Perspektiven schafft eine nachvollziehbare Grundlage für Nachweis und technische Entscheidung.",
      },
      en: {
        ratio: "sixteen-nine",
        alt: "Diagram of a reliability statement connecting function, operating conditions, time or lifetime, and data and methods with evidence and decision-making.",
        lead:
          "A defensible reliability statement connects the required function with operating conditions, a defined time horizon and an appropriate data and method basis.",
        caption:
          "Only the interaction of these four perspectives provides a traceable basis for evidence and technical decisions.",
      },
    },
  },
  planung: {
    hero: {
      src: "reliability-planning-context",
      de: {
        alt: "Systemstruktur mit zugeordneten Zuverlässigkeitszielen, Verantwortlichkeiten und Entwicklungsmeilensteinen.",
        caption:
          "Zuverlässigkeitsplanung verankert messbare Ziele in Systemarchitektur, Verantwortlichkeiten und Projektmeilensteinen.",
      },
      en: {
        alt: "System structure with allocated reliability targets, responsibilities and development milestones.",
        caption:
          "Reliability planning anchors measurable targets in system architecture, responsibilities and project milestones.",
      },
    },
    inline: {
      src: "target-allocation",
      de: {
        src: "reliability-planning-system-levels",
        ratio: "landscape",
        maxWidth: "small",
        alt: "Schaubild zur Zuverlässigkeitsplanung mit Anforderungsquellen sowie Top-down-Ableitung und Bottom-up-Validierung von System-, Subsystem- und Komponentenzuverlässigkeit.",
        lead:
          "Die Abbildung verbindet Zuverlässigkeitsanforderungen mit der Ableitung von Systemzielen auf Komponentenebene und der anschließenden Validierung zurück zum System.",
        caption:
          "Zuverlässigkeitsplanung arbeitet top-down bei der Zielableitung und bottom-up bei der Bewertung der erreichbaren Systemzuverlässigkeit.",
      },
      en: {
        src: "reliability-planning-system-levels",
        ratio: "landscape",
        maxWidth: "small",
        alt: "Reliability planning diagram showing requirement sources and the top-down derivation and bottom-up validation of system, subsystem and component reliability.",
        lead:
          "The figure connects reliability requirements with the allocation of system targets down to components and the subsequent validation back at system level.",
        caption:
          "Reliability planning works top-down when deriving targets and bottom-up when assessing achievable system reliability.",
      },
    },
  },
  schwachstellenanalyse: {
    hero: {
      src: "weak-point-analysis-context",
      de: {
        alt: "Pareto-Diagramm technischer Fehlerursachen mit kumulierter Häufigkeit und markierter 80-Prozent-Grenze.",
        caption:
          "Das Pareto-Diagramm zeigt, welche wenigen Ursachen den größten Anteil der beobachteten Fehler erzeugen.",
      },
      en: {
        alt: "Pareto chart of technical failure causes with cumulative frequency and a marked 80 percent threshold.",
        caption:
          "The Pareto chart identifies the small number of causes responsible for most observed failures.",
      },
    },
    inline: {
      src: "halt-operating-destruction-margins",
      de: {
        ratio: "sixteen-nine",
        maxWidth: "small",
        alt: "Diagramm der operativen Marge und Vernichtungsmargen zwischen Design-Spezifikation, oberer Betriebsgrenze und Zerstörungsgrenzen.",
        lead:
          "HALT untersucht gezielt die Abstände zwischen spezifiziertem Betriebsbereich, tatsächlichen Betriebsgrenzen und den Belastungen, bei denen bleibende Schäden auftreten.",
        caption:
          "Operative und Vernichtungsmargen machen konstruktive Robustheitsreserven und mögliche Schwachstellen sichtbar.",
      },
      en: {
        ratio: "sixteen-nine",
        maxWidth: "small",
        alt: "Diagram of the operating margin and destruction margins between the design specification, upper operating limit and destruction limits.",
        lead:
          "HALT deliberately investigates the distances between the specified operating range, actual operating limits and the stresses at which permanent damage occurs.",
        caption:
          "Operating and destruction margins reveal design robustness reserves and potential weak points.",
      },
    },
  },
  erprobung: {
    hero: {
      src: "reliability-testing-context",
      de: {
        alt: "Kette aus Feldlastsignal, instrumentiertem Prüfling und auswertbarem Messergebnis.",
        caption:
          "Eine belastbare Erprobung verbindet reale Nutzung, geeigneten Prüfaufbau und die spätere technische Entscheidung.",
      },
      en: {
        alt: "Chain linking a field load signal, instrumented test item and evaluable measurement result.",
        caption:
          "Robust testing connects real use, an appropriate test setup and the subsequent engineering decision.",
      },
    },
    inline: {
      src: "testing-strategy-product-development",
      de: {
        ratio: "sixteen-nine",
        maxWidth: "standard",
        alt: "Flussdiagramm zur Auswahl von Teststrategien im Produktentwicklungsprozess abhängig von Testgrund, Untersuchungsziel und Entwicklungsphase.",
        lead:
          "Die geeignete Teststrategie hängt von Produktreife und Untersuchungsziel ab: Frühe ausfallbasierte Versuche liefern Verteilungsparameter, während der Zuverlässigkeitsnachweis auch ausfallfreie Erfolgsprüfungen nutzt.",
        caption:
          "Mit zunehmender Produktreife verschiebt sich die Erprobung vom Erkenntnisgewinn zur quantitativen Zuverlässigkeitsdemonstration.",
      },
      en: {
        ratio: "sixteen-nine",
        maxWidth: "standard",
        alt: "Flowchart for selecting test strategies in the product development process according to test reason, objective and development phase.",
        lead:
          "The appropriate test strategy depends on product maturity and objective: early failure-based tests provide distribution parameters, while reliability demonstration can also use failure-free success runs.",
        caption:
          "As the product matures, testing shifts from learning and comparison towards quantitative reliability demonstration.",
      },
    },
  },
  absicherung: {
    hero: {
      src: "assurance-context",
      de: {
        alt: "Nachweiskette von Anforderung und Risiko über Analyse, Simulation und Versuch bis zur dokumentierten Freigabe.",
        caption:
          "Technische Absicherung ist die verknüpfte Nachweiskette hinter einer Freigabeentscheidung.",
      },
      en: {
        alt: "Evidence chain from requirement and risk through analysis, simulation and testing to documented release.",
        caption:
          "Technical assurance is the connected evidence chain behind a release decision.",
      },
    },
    inline: {
      src: "/graphics/wissen/technical-plots/reliability-demonstration-bq-decision-de-v2.png",
      de: {
        src: "/graphics/wissen/technical-plots/reliability-demonstration-bq-decision-de-v2.png",
        mobileSrc: "/graphics/wissen/technical-plots/reliability-demonstration-bq-decision-de-v2-mobile.png",
        ratio: "two-one",
        maxWidth: "wide",
        alt: "Zwei Weibull-Kurvenplots zur Nachweisentscheidung am Bq-Niveau: Im erfolgreichen Beispiel liegt Bq,L rechts von Bq,soll, im nicht erfolgreichen Beispiel links davon.",
        lead:
          "Die Entscheidung wird am zulässigen Ausfallanteil q getroffen: Die obere einseitige Konfidenzgrenze der geschätzten Ausfallwahrscheinlichkeit liefert dort die konservative Lebensdauer Bq,L.",
        caption:
          "Der Nachweis ist erbracht, wenn Bq,L ≥ Bq,soll. Der hellblaue einseitige Vertrauensbereich reicht von F(t) = 0 bis zur oberen Konfidenzgrenze Fᵤ(t) und läuft über den gesamten dargestellten Zeitbereich; die dunkelblaue Kurve zeigt das aus Daten geschätzte Ist-Verhalten.",
      },
      en: {
        src: "/graphics/wissen/technical-plots/reliability-demonstration-bq-decision-en-v2.png",
        mobileSrc: "/graphics/wissen/technical-plots/reliability-demonstration-bq-decision-en-v2-mobile.png",
        ratio: "two-one",
        maxWidth: "wide",
        alt: "Two Weibull curve plots for the Bq-level demonstration decision: Bq,L lies to the right of Bq,req in the demonstrated example and to the left in the example that is not demonstrated.",
        lead:
          "The decision is made at the permitted failure fraction q: the upper one-sided confidence bound of the estimated failure probability yields the conservative life Bq,L at that level.",
        caption:
          "The requirement is demonstrated when Bq,L ≥ Bq,req. The light-blue one-sided confidence region extends from F(t) = 0 to the upper confidence bound Fᵤ(t) across the full time range; the dark-blue curve shows the field behaviour estimated from data.",
      },
    },
  },
  prognosen: {
    hero: {
      src: "lifetime-prediction-context",
      de: {
        alt: "Lebensdauerdaten mit Ausfällen und zensierten Beobachtungen, B10-Wert und Vertrauensbereich.",
        caption:
          "Eine Prognose verbindet Daten und Modell; der Vertrauensbereich macht die verbleibende Unsicherheit sichtbar.",
      },
      en: {
        alt: "Lifetime data with failures and censored observations, B10 value and confidence interval.",
        caption:
          "A prediction combines data and model; the confidence interval makes the remaining uncertainty visible.",
      },
    },
    inline: {
      src: "censored-data-prediction",
      de: {
        ratio: "two-one",
        maxWidth: "wide",
        alt: "Dreistufiges Diagramm vom Datenkontext über das Zuverlässigkeitsmodell zur Prognose mit bekannten Daten, zukünftigem Ereignis und Unsicherheitsband.",
        lead:
          "Eine belastbare Prognose entsteht in drei Schritten: Daten im Entstehungskontext einordnen, ein fachlich passendes Modell wählen und die Extrapolation mit ihrer Unsicherheit darstellen.",
        caption:
          "Datenkontext, Modell und Prognose bilden eine nachvollziehbare Kette; das Unsicherheitsband kennzeichnet die zunehmende Streuung außerhalb des bekannten Datenbereichs.",
      },
      en: {
        ratio: "two-one",
        maxWidth: "wide",
        alt: "Three-stage diagram from data context through a reliability model to a prognosis with known data, a future event and an uncertainty band.",
        lead:
          "A defensible prognosis follows three steps: understand the data in context, select a technically appropriate model and present the extrapolation together with its uncertainty.",
        caption:
          "Data context, model and prognosis form a traceable chain; the uncertainty band shows the increasing spread beyond the known data range.",
      },
    },
  },
  "design-of-experiments": {
    hero: {
      src: "/graphics/wissen/technical-plots/doe-context-de-v2.svg",
      de: {
        src: "/graphics/wissen/technical-plots/doe-context-de-v2.svg",
        alt: "Reduzierte DoE-Grafik mit den Faktoren Temperatur und Drehzahl, vier gezielten Versuchskombinationen und einer sichtbaren Wechselwirkung.",
        caption:
          "Ein strukturierter Versuchsplan variiert Temperatur und Drehzahl gemeinsam. Nicht parallele Wirkungslinien machen die Wechselwirkung sichtbar.",
      },
      en: {
        src: "/graphics/wissen/technical-plots/doe-context-en-v2.svg",
        alt: "Reduced DoE diagram showing temperature and speed as factors, four targeted experimental combinations and a visible interaction.",
        caption:
          "A structured experimental design varies temperature and speed together. Non-parallel response lines reveal the interaction.",
      },
    },
    inline: {
      src: "doe-design-space",
      de: {
        alt: "DoE-Diagramm eines zweifaktoriellen Versuchsraums mit neun Versuchspunkten, empirischem Antwortmodell und Zielbereich.",
        lead:
          "Die markierten Versuchspunkte decken den festgelegten Versuchsraum systematisch ab; Aussagen außerhalb dieses Raums sind Extrapolation.",
        caption:
          "Neun systematisch verteilte Versuchspunkte tragen das Modell; der Zielbereich ist eine Prognose innerhalb des untersuchten Design Space.",
      },
      en: {
        alt: "DoE diagram of a two-factor design space with nine experimental points, an empirical response model and target region.",
        lead:
          "The marked experimental points cover the defined design space systematically; statements outside this space are extrapolations.",
        caption:
          "Nine systematically distributed experimental points support the model; the target region is a prediction within the investigated design space.",
      },
    },
  },
  risikomanagement: {
    hero: {
      src: "risk-management-context",
      de: {
        alt: "Technische Risikokette von Ausfallmechanismus und Bewertung über Maßnahme und Verifikation bis zum Restrisiko.",
        caption:
          "Risikomanagement ist erst vollständig, wenn Maßnahme, Wirksamkeitsnachweis und neue Bewertung miteinander verknüpft sind.",
      },
      en: {
        alt: "Technical risk chain from failure mechanism and assessment through action and verification to residual risk.",
        caption:
          "Risk management is complete only when action, effectiveness evidence and reassessment are connected.",
      },
    },
    inline: {
      src: "risk-measure-evidence",
      de: {
        alt: "5-mal-5-Risikomatrix mit Ausgangsrisiko, Maßnahmen- und Nachweiskette sowie neu bewertetem Restrisiko.",
        lead:
          "Die Risikomatrix priorisiert die Ausgangslage; abgeschlossen ist die Bearbeitung erst nach technischer Maßnahme, Evidenz und Bewertung des Restrisikos.",
        caption:
          "Das Restrisiko wird nicht behauptet, sondern nach Umsetzung und Verifikation der Maßnahme neu bewertet.",
      },
      en: {
        alt: "Five-by-five risk matrix with initial risk, action and evidence chain, and reassessed residual risk.",
        lead:
          "The risk matrix prioritises the initial situation; the work is complete only after technical action, evidence and residual-risk assessment.",
        caption:
          "Residual risk is reassessed after implementation and verification rather than simply asserted.",
      },
    },
  },
};
