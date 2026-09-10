import type { Locale } from "../_i18n/config";
import { getIndustryDetails } from "./industry-detail-content";
import { getIndustries } from "./industry-overview-content";

const serviceHrefs = {
  reliability: "/leistungen/zuverlaessigkeitstechnik",
  risk: "/leistungen/risikomanagement",
  data: "/leistungen/datenanalyse-prognostik",
} as const;

type IndustryPathSelector = {
  industrySlug: string;
  serviceHref: (typeof serviceHrefs)[keyof typeof serviceHrefs];
};

const pathSelectors = {
  overview: [
    { industrySlug: "automotive", serviceHref: serviceHrefs.reliability },
    { industrySlug: "medizintechnik", serviceHref: serviceHrefs.risk },
    { industrySlug: "halbleiterindustrie", serviceHref: serviceHrefs.data },
  ],
  zuverlaessigkeitstechnik: [
    { industrySlug: "automotive", serviceHref: serviceHrefs.reliability },
    { industrySlug: "maschinenbau", serviceHref: serviceHrefs.reliability },
    {
      industrySlug: "erneuerbare-energien",
      serviceHref: serviceHrefs.reliability,
    },
  ],
  zuverlaessigkeitsmanagement: [
    { industrySlug: "automotive", serviceHref: serviceHrefs.reliability },
    { industrySlug: "medizintechnik", serviceHref: serviceHrefs.risk },
    { industrySlug: "produktionstechnik", serviceHref: serviceHrefs.data },
  ],
  risikomanagement: [
    { industrySlug: "medizintechnik", serviceHref: serviceHrefs.risk },
    { industrySlug: "luft-und-raumfahrt", serviceHref: serviceHrefs.risk },
    { industrySlug: "automotive", serviceHref: serviceHrefs.risk },
  ],
  "datenanalyse-prognostik": [
    { industrySlug: "halbleiterindustrie", serviceHref: serviceHrefs.data },
    { industrySlug: "produktionstechnik", serviceHref: serviceHrefs.data },
    { industrySlug: "erneuerbare-energien", serviceHref: serviceHrefs.data },
  ],
  "design-of-experiments": [
    { industrySlug: "halbleiterindustrie", serviceHref: serviceHrefs.data },
    { industrySlug: "elektronische-produkte", serviceHref: serviceHrefs.data },
    { industrySlug: "automotive", serviceHref: serviceHrefs.data },
  ],
  "doe-consulting": [
    { industrySlug: "halbleiterindustrie", serviceHref: serviceHrefs.data },
    { industrySlug: "elektronische-produkte", serviceHref: serviceHrefs.data },
    { industrySlug: "automotive", serviceHref: serviceHrefs.data },
  ],
  "doe-coaching": [
    { industrySlug: "elektronische-produkte", serviceHref: serviceHrefs.data },
    { industrySlug: "halbleiterindustrie", serviceHref: serviceHrefs.data },
    { industrySlug: "konsumgueter", serviceHref: serviceHrefs.data },
  ],
  beratung: [
    { industrySlug: "maschinenbau", serviceHref: serviceHrefs.reliability },
    { industrySlug: "luft-und-raumfahrt", serviceHref: serviceHrefs.risk },
    { industrySlug: "elektronische-produkte", serviceHref: serviceHrefs.data },
  ],
  coaching: [
    { industrySlug: "automotive", serviceHref: serviceHrefs.reliability },
    { industrySlug: "medizintechnik", serviceHref: serviceHrefs.risk },
    { industrySlug: "halbleiterindustrie", serviceHref: serviceHrefs.data },
  ],
  "langfristige-kooperation": [
    { industrySlug: "maschinenbau", serviceHref: serviceHrefs.reliability },
    { industrySlug: "medizintechnik", serviceHref: serviceHrefs.risk },
    { industrySlug: "produktionstechnik", serviceHref: serviceHrefs.data },
  ],
} as const satisfies Record<string, readonly IndustryPathSelector[]>;

export type SolutionIndustryPath = {
  industrySlug: string;
  industryTitle: string;
  serviceTitle: string;
  serviceText: string;
  steps: string[];
  href: string;
};

export function getSolutionIndustryPaths(
  locale: Locale,
  serviceSlug: string,
): SolutionIndustryPath[] {
  const selectors = pathSelectors[serviceSlug as keyof typeof pathSelectors];

  if (!selectors) {
    return [];
  }

  const industryDetails = new Map(
    getIndustryDetails(locale).map((industry) => [industry.slug, industry]),
  );
  const industryOverviews = new Map(
    getIndustries(locale).map((industry) => [industry.slug, industry]),
  );

  return selectors.flatMap((selector) => {
    const detail = industryDetails.get(selector.industrySlug);
    const overview = industryOverviews.get(selector.industrySlug);
    const service = detail?.services.find(
      (item) => item.href === selector.serviceHref,
    );

    if (!detail || !overview || !service) {
      return [];
    }

    return [
      {
        industrySlug: detail.slug,
        industryTitle: overview.title,
        serviceTitle: service.title,
        serviceText: service.text,
        steps: detail.decisionPath.map((step) => step.label),
        href: `/branchen/${detail.slug}`,
      },
    ];
  });
}
