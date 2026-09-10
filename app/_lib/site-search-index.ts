import type { Locale } from "../_i18n/config";
import { getIndustryDetails } from "../_content/industry-detail-content";
import { getKnowledgeArticles } from "../_content/knowledge-content";
import {
  getDetailPages,
  type DetailPage,
} from "../_content/migration-pages";
import { getSolutionServicePage } from "../_content/solution-service-pages";

export type SiteSearchEntry = {
  href: string;
  title: string;
  description: string;
  category: string;
  searchText: string;
};

type OverviewSearchEntry = Omit<SiteSearchEntry, "category" | "searchText"> & {
  keywords: string;
};

const overviewEntries: Record<Locale, OverviewSearchEntry[]> = {
  de: [
    {
      href: "/",
      title: "RelTest Solutions",
      description:
        "Zuverlässigkeitstechnik für belastbare Entscheidungen in Entwicklung, Absicherung und Serienreife.",
      keywords:
        "Startseite Reliability Engineering Beratung Zuverlässigkeit Lebensdauer Statistik Erprobung DoE",
    },
    {
      href: "/leistungen",
      title: "Solutions und Leistungen",
      description:
        "Zuverlässigkeitstechnik, Risikomanagement, Test- und Datenanalyse sowie Projektpartnerschaft.",
      keywords:
        "Leistungen Beratung Engineering Partner Arbeitspakete Zuverlässigkeitsmanagement",
    },
    {
      href: "/education",
      title: "RelTest Education",
      description:
        "E-Learning und Vor-Ort-Schulungen zu Reliability Engineering und Design of Experiments.",
      keywords: "Weiterbildung Seminar Schulung Academy Kurs Lernen DoE",
    },
    {
      href: "/wissen",
      title: "Wissen zu Zuverlässigkeitstechnik",
      description:
        "Fachwissen zum Produktlebenszyklus, zu Teilprozessen, Erprobung, Prognose, Absicherung und DoE.",
      keywords:
        "Grundlagen Planung Schwachstellenanalyse Test Daten Lebensdauer Nachweis",
    },
    {
      href: "/prozess",
      title: "Zuverlässigkeitsprozess",
      description:
        "Die Teilprozesse der Zuverlässigkeit von der Planung bis zur Felddatenanalyse.",
      keywords:
        "Produktlebenszyklus Planung Schwachstellenanalyse Erprobung Absicherung Prognose",
    },
    {
      href: "/expertise",
      title: "Expertise von RelTest",
      description:
        "Referenzen, Fachpublikationen, Branchenwissen und fachliche Erfahrung des RelTest-Teams.",
      keywords: "Kompetenz Erfahrung Podcast Fachbücher Veröffentlichungen",
    },
    {
      href: "/literatur",
      title: "Fachbücher und Veröffentlichungen",
      description:
        "Literatur zu Zuverlässigkeitstechnik, Risikomanagement und statistischen Methoden.",
      keywords: "Bertsche Lucan Springer Buch Publikation Paper",
    },
    {
      href: "/referenzen",
      title: "Referenzen",
      description:
        "Projektbeispiele, Kundenstimmen und fachliche Vertrauenssignale aus anspruchsvollen Branchen.",
      keywords: "Kunden Projekte Kooperation Erfahrung Netzwerk",
    },
    {
      href: "/branchen",
      title: "Branchenübersicht",
      description:
        "Zuverlässigkeitslösungen für Automotive, Maschinenbau, Elektronik und weitere Industrien.",
      keywords:
        "Industrie Medizintechnik Halbleiter Konsumgüter Energie Luftfahrt Produktion",
    },
    {
      href: "/ueber-uns",
      title: "Wir sind RelTest",
      description:
        "Menschen, Gründer und Projektkompetenz hinter RelTest Solutions.",
      keywords: "Team Kevin Lucan Bernd Bertsche Unternehmen Gründer",
    },
    {
      href: "/aktuelles",
      title: "Aktuelles",
      description:
        "Webinare, Kooperationen, Fachbeiträge und ausgewählte Reliability-News.",
      keywords: "News Meldungen Veranstaltungen Webinar Award",
    },
    {
      href: "/kontakt",
      title: "Kontakt und Projektanfrage",
      description:
        "Technische Fragestellung schildern, Erstgespräch vereinbaren oder RelTest direkt kontaktieren.",
      keywords: "Anfrage Termin Calendly E-Mail Telefon Herrenberg",
    },
    {
      href: "/datenschutz",
      title: "Datenschutz",
      description:
        "Informationen zu Datenschutz, Cookies, Calendly und externen Diensten.",
      keywords: "Privatsphäre Einwilligung Cookie Einstellungen externe Medien",
    },
    {
      href: "/impressum",
      title: "Impressum",
      description:
        "Anbieterkennzeichnung und rechtliche Angaben der RelTest Solutions GmbH.",
      keywords: "Rechtliches Unternehmen Anschrift Geschäftsführer",
    },
  ],
  en: [
    {
      href: "/",
      title: "RelTest Solutions",
      description:
        "Reliability engineering for robust decisions in development, assurance and production readiness.",
      keywords:
        "home consulting reliability lifetime statistics testing design of experiments",
    },
    {
      href: "/leistungen",
      title: "Solutions and services",
      description:
        "Reliability engineering, risk management, testing and data analysis, and project partnership.",
      keywords:
        "services consulting engineering partner work packages reliability management",
    },
    {
      href: "/education",
      title: "RelTest Education",
      description:
        "E-learning and on-site training in reliability engineering and Design of Experiments.",
      keywords: "training seminar academy course learning DoE",
    },
    {
      href: "/wissen",
      title: "Reliability engineering knowledge",
      description:
        "Technical knowledge on the product lifecycle, testing, prediction, assurance and DoE.",
      keywords:
        "fundamentals planning weak-point analysis test data lifetime demonstration",
    },
    {
      href: "/prozess",
      title: "Reliability process",
      description:
        "Reliability subprocesses from planning through testing to field-data analysis.",
      keywords:
        "product lifecycle planning weak-point analysis assurance prediction",
    },
    {
      href: "/expertise",
      title: "RelTest expertise",
      description:
        "References, publications, industry knowledge and the technical experience of the RelTest team.",
      keywords: "experience podcast books publications credentials",
    },
    {
      href: "/literatur",
      title: "Specialist books and publications",
      description:
        "Literature on reliability engineering, risk management and statistical methods.",
      keywords: "Bertsche Lucan Springer book publication paper",
    },
    {
      href: "/referenzen",
      title: "References",
      description:
        "Project examples, client feedback and technical trust signals from demanding industries.",
      keywords: "clients projects cooperation experience network",
    },
    {
      href: "/branchen",
      title: "Industry overview",
      description:
        "Reliability solutions for automotive, mechanical engineering, electronics and other industries.",
      keywords:
        "medical semiconductor consumer energy aerospace production industry",
    },
    {
      href: "/ueber-uns",
      title: "About RelTest",
      description:
        "The people, founders and project expertise behind RelTest Solutions.",
      keywords: "team Kevin Lucan Bernd Bertsche company founders",
    },
    {
      href: "/aktuelles",
      title: "News",
      description:
        "Webinars, collaborations, technical articles and selected reliability news.",
      keywords: "updates events webinar award",
    },
    {
      href: "/kontakt",
      title: "Contact and project enquiry",
      description:
        "Describe a technical question, arrange an initial meeting or contact RelTest directly.",
      keywords: "enquiry appointment Calendly email phone Herrenberg",
    },
    {
      href: "/datenschutz",
      title: "Privacy",
      description:
        "Information about privacy, cookies, Calendly and external services.",
      keywords: "consent cookie settings external media",
    },
    {
      href: "/impressum",
      title: "Legal notice",
      description:
        "Provider identification and legal information for RelTest Solutions GmbH.",
      keywords: "legal company address managing director",
    },
  ],
};

const categoryCopy = {
  de: {
    overview: "Seite",
    service: "Solution",
    knowledge: "Wissen",
    education: "Education",
    industry: "Branche",
    people: "Person",
    news: "Aktuelles",
  },
  en: {
    overview: "Page",
    service: "Solution",
    knowledge: "Knowledge",
    education: "Education",
    industry: "Industry",
    people: "Person",
    news: "News",
  },
} as const;

function detailSearchText(page: DetailPage) {
  return [
    page.metaTitle,
    page.metaDescription,
    page.lead,
    ...page.sections.flatMap((section) => [section.title, section.body]),
    page.proofPointsTitle,
    ...page.proofPoints,
  ].join(" ");
}

function detailEntry(
  page: DetailPage,
  href: string,
  category: string,
): SiteSearchEntry {
  return {
    href,
    title: page.title,
    description: page.description,
    category,
    searchText: detailSearchText(page),
  };
}

export function getSiteSearchEntries(locale: Locale): SiteSearchEntry[] {
  const categories = categoryCopy[locale];
  const overview = overviewEntries[locale].map((entry) => ({
    href: entry.href,
    title: entry.title,
    description: entry.description,
    category: categories.overview,
    searchText: entry.keywords,
  }));

  const services = getDetailPages("services", locale).map((page) => {
    const solution = getSolutionServicePage(locale, page.slug);

    if (!solution) {
      return detailEntry(
        page,
        `/leistungen/${page.slug}`,
        categories.service,
      );
    }

    return {
      href: `/leistungen/${page.slug}`,
      title: solution.hero.title,
      description: solution.hero.description,
      category: categories.service,
      searchText: [
        solution.metaTitle,
        solution.metaDescription,
        solution.topics.title,
        solution.topics.description,
        ...solution.topics.items.flatMap((item) => [
          item.title,
          item.work,
          item.result,
        ]),
        solution.situations.title,
        solution.situations.description,
        ...solution.situations.items.flatMap((item) => [item.title, item.text]),
        solution.deliverables.title,
        solution.deliverables.description,
        ...solution.deliverables.items.flatMap((item) => [item.title, item.text]),
        solution.knowledge.title,
        solution.knowledge.description,
        ...solution.knowledge.links.map((link) => link.label),
      ].join(" "),
    };
  });

  const knowledge = getKnowledgeArticles(locale).map((article) => ({
    href: `/wissen/${article.slug}`,
    title: article.navLabel,
    description: article.lead,
    category: categories.knowledge,
    searchText: [
      article.title,
      article.metaTitle,
      article.metaDescription,
      article.definition,
      ...article.sections.flatMap((section) => [
        section.heading,
        ...section.paragraphs,
        ...(section.bullets ?? []),
      ]),
    ]
      .filter(Boolean)
      .join(" "),
  }));

  const education = getDetailPages("education", locale).map((page) => {
    const href =
      page.slug === "seminare"
        ? locale === "de"
          ? "/education#vor-ort-schulung"
          : "/education#on-site-training"
        : page.slug === "academy"
          ? "/education#e-learning"
          : `/weiterbildung/${page.slug}`;

    return detailEntry(page, href, categories.education);
  });

  const industries = getIndustryDetails(locale).map((page) => ({
    href: `/branchen/${page.slug}`,
    title: page.title,
    description: page.heroLead,
    category: categories.industry,
    searchText: [
      page.metaTitle,
      page.metaDescription,
      page.decisionTitle,
      page.decisionText,
      ...page.decisionPath.flatMap((item) => [item.label, item.text]),
      page.servicesTitle,
      page.servicesLead,
      ...page.services.flatMap((service) => [
        service.title,
        service.text,
        ...service.topics,
      ]),
      page.questionsTitle,
      ...page.questions.flatMap((item) => [item.question, item.answer]),
      page.contextTitle,
      page.contextText,
      ...page.contextTerms,
    ].join(" "),
  }));

  const people = getDetailPages("people", locale).map((page) =>
    detailEntry(page, `/ueber-uns/${page.slug}`, categories.people),
  );
  const news = getDetailPages("news", locale).map((page) =>
    detailEntry(page, `/aktuelles/${page.slug}`, categories.news),
  );

  const uniqueEntries = new Map<string, SiteSearchEntry>();

  for (const entry of [
    ...overview,
    ...services,
    ...knowledge,
    ...education,
    ...industries,
    ...people,
    ...news,
  ]) {
    uniqueEntries.set(entry.href, entry);
  }

  return [...uniqueEntries.values()];
}
