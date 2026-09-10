import type { StaticImageData } from "next/image";

import absicherungDe from "../../public/wissen/uebersicht/absicherung-de.png";
import absicherungEn from "../../public/wissen/uebersicht/absicherung-en.png";
import erprobungDe from "../../public/wissen/uebersicht/erprobung-de.png";
import erprobungEn from "../../public/wissen/uebersicht/erprobung-en.png";
import lebenszyklusDe from "../../public/wissen/uebersicht/lebenszyklus-prozess-de.svg";
import lebenszyklusEn from "../../public/wissen/uebersicht/lebenszyklus-prozess-en.svg";
import lebenszyklusMobileDe from "../../public/wissen/uebersicht/lebenszyklus-prozess-mobile-de.svg";
import lebenszyklusMobileEn from "../../public/wissen/uebersicht/lebenszyklus-prozess-mobile-en.svg";
import planungDe from "../../public/wissen/uebersicht/planung-de.png";
import planungEn from "../../public/wissen/uebersicht/planung-en.png";
import prognosenDe from "../../public/wissen/uebersicht/prognosen-de.png";
import prognosenEn from "../../public/wissen/uebersicht/prognosen-en.png";
import schwachstellenanalyseDe from "../../public/wissen/uebersicht/schwachstellenanalyse-de.png";
import schwachstellenanalyseEn from "../../public/wissen/uebersicht/schwachstellenanalyse-en.png";
import wissenHeaderDe from "../../public/wissen/uebersicht/wissen-header-de.png";
import wissenHeaderEn from "../../public/wissen/uebersicht/wissen-header-en.png";
import type { Locale } from "../_i18n/config";

export type KnowledgeImageAsset = {
  src: string | StaticImageData;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export type KnowledgeLifecycleImageAsset = KnowledgeImageAsset & {
  mobileSrc: string | StaticImageData;
  mobileWidth: number;
  mobileHeight: number;
};

export const knowledgeOverviewHeroImages: Record<Locale, KnowledgeImageAsset> = {
  de: {
    src: wissenHeaderDe,
    alt: "Zuverlässigkeit und ihre Dimensionen Erfolgswahrscheinlichkeit, Haltbarkeit, Verlässlichkeit, Qualität über die Zeit und Verfügbarkeit zur Funktionserfüllung",
    width: 1448,
    height: 1086,
  },
  en: {
    src: wissenHeaderEn,
    alt: "Reliability and its dimensions probability of success, durability, dependability, quality over time and availability to perform a function",
    width: 1448,
    height: 1086,
  },
};

export const knowledgeLifecycleImages: Record<Locale, KnowledgeLifecycleImageAsset> = {
  de: {
    src: lebenszyklusDe,
    width: 1440,
    height: 760,
    mobileSrc: lebenszyklusMobileDe,
    mobileWidth: 720,
    mobileHeight: 1536,
    alt: "Lebensdauerbegleitendes Zuverlässigkeitsmanagement mit qualitativen und quantitativen Methoden entlang des Produktlebenszyklus",
  },
  en: {
    src: lebenszyklusEn,
    width: 1440,
    height: 760,
    mobileSrc: lebenszyklusMobileEn,
    mobileWidth: 720,
    mobileHeight: 1536,
    alt: "Lifecycle reliability management with qualitative and quantitative methods across the product lifecycle",
  },
};

export const knowledgeProcessImages: Record<Locale, Record<string, KnowledgeImageAsset>> = {
  de: {
    planung: {
      src: planungDe,
      width: 1672,
      height: 941,
      alt: "Diagramm zum Entscheidungsraum der Zuverlässigkeitsplanung mit Zuverlässigkeitskosten, Folgekosten und akzeptablen Kosten",
    },
    schwachstellenanalyse: {
      src: schwachstellenanalyseDe,
      width: 1672,
      height: 941,
      alt: "Badewannenkurve der Ausfallrate mit reduzierten Früh- und Zufallsausfällen sowie nach hinten verschobener Verschleißphase",
      caption:
        "Die Pfeile zeigen unterschiedliche Wirkungen: Früh- und Zufallsausfälle werden reduziert, verschleißbedingte Ausfälle in spätere Nutzungszeiten verschoben.",
    },
    erprobung: {
      src: erprobungDe,
      width: 2172,
      height: 724,
      alt: "Vergleich von Worst-Case-, einsatzbezogenen und synthetischen Lastkollektiven für die Zuverlässigkeitserprobung",
    },
    absicherung: {
      src: absicherungDe,
      width: 1672,
      height: 941,
      alt: "Komponenten-Ausfallwahrscheinlichkeiten werden über ein Serienschaltungssystem zu einer System-Ausfallwahrscheinlichkeit zusammengeführt",
      caption:
        "Dargestellt ist ein nicht redundantes Serienschaltungssystem: Der Ausfall einer Komponente führt zum Systemausfall. Deshalb liegt die System-Ausfallwahrscheinlichkeit über den Einzelwahrscheinlichkeiten; bei redundanten Architekturen kann das anders sein.",
    },
    prognosen: {
      src: prognosenDe,
      width: 1817,
      height: 866,
      alt: "Zuverlässigkeitsprognose aus Versuchs- und Felddaten mit Lebensdauermodell und drei unterschiedlichen Laufzeitverläufen",
      caption:
        "Versuchs- und Felddaten speisen das Lebensdauermodell; das Vergleichsdiagramm macht kurze, mittlere und lange prognostizierte Laufzeiten sichtbar.",
    },
  },
  en: {
    planung: {
      src: planungEn,
      width: 1672,
      height: 941,
      alt: "Reliability planning decision-space diagram comparing reliability costs, failure costs and acceptable customer costs",
    },
    schwachstellenanalyse: {
      src: schwachstellenanalyseEn,
      width: 1672,
      height: 941,
      alt: "Failure-rate bathtub curve with reduced early and random failures and a wear-out phase shifted to a later time",
      caption:
        "The arrows show different effects: early and random failures are reduced, while wear-out failures are shifted to later operating times.",
    },
    erprobung: {
      src: erprobungEn,
      width: 1748,
      height: 900,
      alt: "Comparison of worst-case, use-specific and synthetic load profiles for reliability testing",
    },
    absicherung: {
      src: absicherungEn,
      width: 1672,
      height: 941,
      alt: "Component failure probabilities are combined through a series system to obtain the system failure probability",
      caption:
        "This is a non-redundant series system: failure of any component causes system failure. The system failure probability therefore exceeds each component probability; redundant architectures may behave differently.",
    },
    prognosen: {
      src: prognosenEn,
      width: 1774,
      height: 887,
      alt: "Reliability prediction from test and field data using a lifetime model and three different operating-time profiles",
      caption:
        "Test and field data feed the lifetime model; the comparison chart shows short, medium and long predicted operating times.",
    },
  },
};
