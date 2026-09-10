import type { Locale } from "../_i18n/config";

export type IndustryOverviewItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const summaryIndustrySlugs = new Set([
  "automotive",
  "maschinenbau",
  "elektronische-produkte",
  "halbleiterindustrie",
  "konsumgueter",
  "erneuerbare-energien",
  "medizintechnik",
  "luft-und-raumfahrt",
]);

const industryOverviewContent = {
  de: [
    {
      slug: "automotive",
      title: "Automotive",
      description:
        "Hohe Stückzahlen, kurze Entwicklungszyklen und Sicherheitsanforderungen machen belastbare Prüf- und Nachweisstrategien entscheidend.",
      image: "/industries/automotive.webp",
      alt: "Automotive-Antriebsstrang in einem technischen Prüfumfeld",
    },
    {
      slug: "maschinenbau",
      title: "Maschinenbau",
      description:
        "Variable Lasten, Verschleiß und lange Nutzungszeiten verlangen eine realistische Lebensdauerbewertung und wirtschaftliche Erprobung.",
      image: "/industries/maschinenbau.webp",
      alt: "Mechanisches Getriebe für industrielle Anwendungen",
    },
    {
      slug: "elektronische-produkte",
      title: "Elektronische Produkte",
      description:
        "Temperatur, Feuchte, Alterung und Bauteilstreuung müssen gemeinsam bewertet werden, damit Tests relevante Ausfallmechanismen treffen.",
      image: "/industries/elektronische-produkte.webp",
      alt: "Elektronische Baugruppe während einer technischen Messung",
    },
    {
      slug: "halbleiterindustrie",
      title: "Halbleiterindustrie",
      description:
        "Enge Prozessfenster und hohe Datendichte erfordern eine saubere Trennung von Streuung, Einflussgrößen und tatsächlichen Risiken.",
      image: "/industries/halbleiterindustrie.webp",
      alt: "Halbleiter-Wafer in einer präzisen Fertigungsumgebung",
    },
    {
      slug: "konsumgueter",
      title: "Consumer-Technik",
      description:
        "Vielfältige Nutzung trifft auf hohe Kundenerwartungen und Kostendruck. Zuverlässigkeit muss deshalb früh und effizient abgesichert werden.",
      image: "/industries/consumer-products-reliability-testing-no-fade.png",
      alt: "Consumer-Elektronik in einem Zuverlässigkeitslabor",
    },
    {
      slug: "erneuerbare-energien",
      title: "Erneuerbare Energien",
      description:
        "Lange Betriebszeiten, wechselnde Umweltbedingungen und schwer zugängliche Systeme erhöhen die Bedeutung belastbarer Prognosen.",
      image: "/industries/erneuerbare-energien.webp",
      alt: "Technische Komponenten für erneuerbare Energiesysteme",
    },
    {
      slug: "medizintechnik",
      title: "Medizintechnik",
      description:
        "Technische Risiken, Nachweise und Dokumentation müssen konsequent zusammenspielen, weil Ausfälle unmittelbare Folgen haben können.",
      image: "/industries/medical-device-reliability-testing-no-fade.png",
      alt: "Medizintechnisches System in einem technischen Labor",
    },
    {
      slug: "luft-und-raumfahrt",
      title: "Luft- und Raumfahrt",
      description:
        "Hohe Sicherheitsanforderungen verlangen nachvollziehbare Risikobewertungen, robuste Nachweise und lückenlose technische Argumentation.",
      image: "/industries/aerospace-reliability-engineering-no-fade.png",
      alt: "Luft- und Raumfahrtkomponente während einer Präzisionsprüfung",
    },
    {
      slug: "produktionstechnik",
      title: "Produktionstechnik",
      description:
        "Stillstände wirken direkt auf Ausbringung, Qualität und Kosten. Betriebs- und Ausfalldaten machen kritische Komponenten früh sichtbar.",
      image: "/expertise/lab-review.webp",
      alt: "Ingenieurteam bei der Analyse eines industriellen Prüfsystems",
    },
  ],
  en: [
    {
      slug: "automotive",
      title: "Automotive",
      description:
        "High volumes, short development cycles and safety requirements make robust test and evidence strategies essential.",
      image: "/industries/automotive.webp",
      alt: "Automotive powertrain in a technical test environment",
    },
    {
      slug: "maschinenbau",
      title: "Mechanical engineering",
      description:
        "Variable loads, wear and long operating periods require realistic lifetime assessment and economical testing.",
      image: "/industries/maschinenbau.webp",
      alt: "Mechanical gearbox for industrial applications",
    },
    {
      slug: "elektronische-produkte",
      title: "Electronic products",
      description:
        "Temperature, humidity, ageing and component variation must be assessed together so that tests address relevant failure mechanisms.",
      image: "/industries/elektronische-produkte.webp",
      alt: "Electronic assembly during technical measurement",
    },
    {
      slug: "halbleiterindustrie",
      title: "Semiconductor industry",
      description:
        "Tight process windows and high data density demand a clear separation of variation, influencing factors and actual risks.",
      image: "/industries/halbleiterindustrie.webp",
      alt: "Semiconductor wafer in a precision manufacturing environment",
    },
    {
      slug: "konsumgueter",
      title: "Consumer technology",
      description:
        "Diverse use meets high customer expectations and cost pressure. Reliability therefore needs to be validated early and efficiently.",
      image: "/industries/consumer-products-reliability-testing-no-fade.png",
      alt: "Consumer electronics in a reliability laboratory",
    },
    {
      slug: "erneuerbare-energien",
      title: "Renewable energy",
      description:
        "Long operating periods, changing environmental conditions and hard-to-access systems increase the importance of robust predictions.",
      image: "/industries/erneuerbare-energien.webp",
      alt: "Technical components for renewable energy systems",
    },
    {
      slug: "medizintechnik",
      title: "Medical technology",
      description:
        "Technical risks, evidence and documentation must work together consistently because failures can have immediate consequences.",
      image: "/industries/medical-device-reliability-testing-no-fade.png",
      alt: "Medical technology system in a technical laboratory",
    },
    {
      slug: "luft-und-raumfahrt",
      title: "Aerospace",
      description:
        "High safety requirements demand traceable risk assessments, robust evidence and complete technical reasoning.",
      image: "/industries/aerospace-reliability-engineering-no-fade.png",
      alt: "Aerospace component undergoing precision testing",
    },
    {
      slug: "produktionstechnik",
      title: "Production technology",
      description:
        "Downtime directly affects output, quality and costs. Operating and failure data reveal critical components early.",
      image: "/expertise/lab-review.webp",
      alt: "Engineering team analysing an industrial test system",
    },
  ],
} satisfies Record<Locale, readonly IndustryOverviewItem[]>;

export function getIndustries(
  locale: Locale,
): readonly IndustryOverviewItem[] {
  return industryOverviewContent[locale];
}

export function getSummaryIndustries(locale: Locale): IndustryOverviewItem[] {
  return getIndustries(locale).filter((industry) =>
    summaryIndustrySlugs.has(industry.slug),
  );
}
