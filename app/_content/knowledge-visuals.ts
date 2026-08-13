export type KnowledgeVisualCopy = {
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
      src: "reliability-engineering-context",
      de: {
        alt: "Badewannenkurve mit Frühausfall-, Nutzungs- und Verschleißphase sowie den zugehörigen Ausfallursachen.",
        caption:
          "Die Badewannenkurve ordnet unterschiedliche Ausfallmechanismen den typischen Phasen eines Produktlebens zu.",
      },
      en: {
        alt: "Bathtub curve showing early-failure, useful-life and wear-out phases with their characteristic failure causes.",
        caption:
          "The bathtub curve assigns different failure mechanisms to the typical phases of a product life cycle.",
      },
    },
    inline: {
      src: "reliability-dimensions",
      de: {
        alt: "Diagramm zur bedingten Zuverlässigkeit R von t mit Funktion, Einsatzbedingungen und Zeitbezug.",
        lead:
          "Die Abbildung zeigt, weshalb eine Zuverlässigkeitsaussage nur im Zusammenhang mit Funktion, Einsatzbedingungen und Zeit vollständig ist.",
        caption:
          "Erst der definierte Aussagekontext macht R(t | x) technisch interpretierbar.",
      },
      en: {
        alt: "Diagram of conditional reliability R of t linked to function, operating conditions and time.",
        lead:
          "The diagram shows why a reliability statement is complete only when function, operating conditions and time are defined together.",
        caption:
          "A defined statement context is what makes R(t | x) technically interpretable.",
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
        alt: "Top-down-Allokation und Bottom-up-Bewertung eines seriellen Systems mit drei Komponenten.",
        lead:
          "Die Allokation wird in beide Richtungen geprüft: vom Systemziel zu den Komponenten und von realistischen Komponentenwerten zurück zum System.",
        caption:
          "Für ein serielles System ergibt sich die Systemzuverlässigkeit aus dem Produkt der Komponentenzuverlässigkeiten.",
      },
      en: {
        alt: "Top-down allocation and bottom-up assessment of a three-component series system.",
        lead:
          "Allocation is checked in both directions: from the system target to components and from realistic component values back to the system.",
        caption:
          "For a series system, system reliability is the product of the component reliabilities.",
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
      src: "fmea-fta",
      de: {
        alt: "Gegenüberstellung einer Ursache-Fehlerart-Fehlerfolge-Kette und eines Fehlerbaums mit UND- und ODER-Verknüpfung.",
        lead:
          "FMEA und FTA beleuchten dasselbe Risiko aus unterschiedlichen Richtungen: entlang der Fehlerkette und ausgehend vom unerwünschten Top-Ereignis.",
        caption:
          "FMEA strukturiert Fehlerketten; FTA zerlegt ein Top-Ereignis logisch in mögliche Ursachen.",
      },
      en: {
        alt: "Comparison of a cause-failure mode-effect chain and a fault tree with AND and OR logic.",
        lead:
          "FMEA and FTA examine the same risk from different directions: along the failure chain and backwards from the unwanted top event.",
        caption:
          "FMEA structures failure chains; FTA decomposes a top event logically into possible causes.",
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
      src: "field-to-test-profile",
      de: {
        alt: "Diagramm zur Überführung eines Feldlastprofils in ein beschleunigtes Prüfkollektiv bei vergleichbarer Schädigung.",
        lead:
          "Das Feldprofil darf nur dann zeitlich verdichtet werden, wenn Lastfolge und Niveau den relevanten Ausfallmechanismus weiterhin repräsentieren.",
        caption:
          "D_Test ≈ D_Feld gilt nur unter erhaltener Ausfallphysik; reine Zeitraffung genügt nicht.",
      },
      en: {
        alt: "Diagram translating a field load profile into an accelerated test spectrum with comparable damage.",
        lead:
          "A field profile may only be compressed in time when load sequence and level still represent the relevant failure mechanism.",
        caption:
          "D_Test ≈ D_Field is valid only when failure physics are preserved; time compression alone is insufficient.",
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
      src: "assurance-traceability",
      de: {
        alt: "Traceability-Diagramm mit verknüpften IDs für Anforderung, Risiko, Methode, Evidenz und Entscheidung.",
        lead:
          "Traceability bedeutet, dass jede Freigabeaussage bis zur Anforderung, zum Risiko, zur Methode und zur konkreten Evidenz zurückverfolgt werden kann.",
        caption:
          "Eine belastbare Freigabe bleibt über eindeutige Verknüpfungen fachlich und dokumentarisch nachvollziehbar.",
      },
      en: {
        alt: "Traceability diagram linking IDs for requirement, risk, method, evidence and decision.",
        lead:
          "Traceability means that every release statement can be followed back to its requirement, risk, method and specific evidence.",
        caption:
          "A defensible release remains technically and documentarily traceable through explicit links.",
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
        alt: "Ausfall- und rechtszensierte Beobachtungen werden in eine Überlebensfunktion R von t mit Konfidenzgrenzen überführt.",
        lead:
          "Nicht ausgefallene Prüflinge werden als rechtszensierte Beobachtungen in die Schätzung einbezogen und nicht als fehlende Daten verworfen.",
        caption:
          "Zensierte Daten tragen Information bis zum letzten beobachteten Zeitpunkt und beeinflussen Modell sowie B10-Schätzung.",
      },
      en: {
        alt: "Failure and right-censored observations are transformed into a survival function R of t with confidence limits.",
        lead:
          "Test items that have not failed are included as right-censored observations rather than discarded as missing data.",
        caption:
          "Censored data carry information up to the last observed time and influence both model and B10 estimate.",
      },
    },
  },
  "design-of-experiments": {
    hero: {
      src: "doe-context",
      de: {
        alt: "Interaktionsdiagramm eines Versuchsplans mit Temperaturstufen und zwei Drehzahlniveaus.",
        caption:
          "Nicht parallele Wirkungslinien zeigen, dass der Temperatureffekt vom gewählten Drehzahlniveau abhängt.",
      },
      en: {
        alt: "Interaction plot from an experimental design with temperature levels and two speed levels.",
        caption:
          "Non-parallel response lines indicate that the temperature effect depends on the selected speed level.",
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
