export type RouteLocale = "de" | "en";

/**
 * Internal App Router paths stay language-neutral so DE and EN can share the
 * same page implementations. The second value is the canonical public path
 * used for English URLs.
 */
export const englishRoutePairs = [
  ["/leistungen", "/services"],
  ["/leistungen/zuverlaessigkeitstechnik", "/services/reliability-engineering"],
  ["/leistungen/zuverlaessigkeitsmanagement", "/services/reliability-management"],
  ["/leistungen/beratung", "/services/reliability-consulting"],
  ["/leistungen/design-of-experiments", "/services/design-of-experiments"],
  ["/leistungen/doe-consulting", "/services/doe-consulting"],
  ["/leistungen/doe-coaching", "/services/doe-coaching"],
  ["/leistungen/coaching", "/services/reliability-coaching"],
  ["/leistungen/langfristige-kooperation", "/services/engineering-project-partnership"],
  ["/leistungen/datenanalyse-prognostik", "/services/data-analysis-and-prognostics"],
  ["/leistungen/risikomanagement", "/services/risk-management"],
  ["/wissen", "/knowledge"],
  ["/wissen/zuverlaessigkeitstechnik", "/knowledge/reliability-engineering"],
  ["/wissen/planung", "/knowledge/reliability-planning"],
  ["/wissen/schwachstellenanalyse", "/knowledge/weak-point-analysis"],
  ["/wissen/erprobung", "/knowledge/reliability-testing"],
  ["/wissen/absicherung", "/knowledge/reliability-assurance"],
  ["/wissen/prognosen", "/knowledge/reliability-prediction"],
  ["/wissen/design-of-experiments", "/knowledge/design-of-experiments"],
  ["/wissen/risikomanagement", "/knowledge/technical-risk-management"],
  ["/prozess", "/reliability-process"],
  ["/literatur", "/literature"],
  ["/referenzen", "/references"],
  ["/kontakt", "/contact"],
  ["/branchen", "/industries"],
  ["/branchen/automotive", "/industries/automotive"],
  ["/branchen/maschinenbau", "/industries/mechanical-engineering"],
  ["/branchen/elektronische-produkte", "/industries/electronic-products"],
  ["/branchen/halbleiterindustrie", "/industries/semiconductor-industry"],
  ["/branchen/erneuerbare-energien", "/industries/renewable-energy"],
  ["/branchen/konsumgueter", "/industries/consumer-products"],
  ["/branchen/luft-und-raumfahrt", "/industries/aerospace"],
  ["/branchen/medizintechnik", "/industries/medical-technology"],
  ["/branchen/produktionstechnik", "/industries/production-technology"],
  ["/ueber-uns", "/about-us"],
  ["/ueber-uns/kevin-lucan", "/about-us/kevin-lucan"],
  ["/ueber-uns/bernd-bertsche", "/about-us/bernd-bertsche"],
  ["/aktuelles", "/news"],
  ["/aktuelles/webinar-beschleunigte-lebensdauertests", "/news/accelerated-life-testing-webinar"],
  ["/aktuelles/kooperation-holland-innovative", "/news/cooperation-with-holland-innovative"],
  ["/aktuelles/rams-award", "/news/rams-award"],
  ["/aktuelles/webinar-effiziente-lebensdauertestplanung", "/news/efficient-life-test-planning-webinar"],
  ["/aktuelles/smart-data-produktdesign", "/news/smart-data-product-design"],
  ["/glossar", "/glossary"],
  ["/impressum", "/legal-notice"],
  ["/datenschutz", "/privacy-policy"],
  ["/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung", "/education/practical-design-of-experiments"],
  ["/weiterbildung/zuverlaessigkeit-erprobung-fuer-praktiker", "/education/reliability-testing-for-practitioners"],
  ["/weiterbildung/entwicklung-absicherung-elektronischer-komponenten", "/education/development-and-assurance-of-electronic-components"],
] as const;

const internalToEnglish = new Map<string, string>(englishRoutePairs);
const englishToInternal = new Map(
  englishRoutePairs.map(([internalPath, englishPath]) => [
    englishPath,
    internalPath,
  ]),
);

const internalPrefixes = [...englishRoutePairs].sort(
  ([left], [right]) => right.length - left.length,
);
const englishPrefixes = [...englishRoutePairs].sort(
  ([, left], [, right]) => right.length - left.length,
);

function normalizePath(path: string) {
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;

  if (withLeadingSlash.length > 1 && withLeadingSlash.endsWith("/")) {
    return withLeadingSlash.slice(0, -1);
  }

  return withLeadingSlash;
}

function splitSuffix(href: string) {
  const suffixIndex = href.search(/[?#]/);

  if (suffixIndex === -1) {
    return { path: href, suffix: "" };
  }

  return {
    path: href.slice(0, suffixIndex),
    suffix: href.slice(suffixIndex),
  };
}

function replaceLongestPrefix(
  path: string,
  exactMap: ReadonlyMap<string, string>,
  pairs: ReadonlyArray<readonly [string, string]>,
) {
  const normalizedPath = normalizePath(path || "/");
  const exactMatch = exactMap.get(normalizedPath);

  if (exactMatch) {
    return exactMatch;
  }

  for (const [source, destination] of pairs) {
    if (normalizedPath.startsWith(`${source}/`)) {
      return `${destination}${normalizedPath.slice(source.length)}`;
    }
  }

  return normalizedPath;
}

export function toEnglishPublicPath(internalPath: string) {
  const { path, suffix } = splitSuffix(internalPath);

  return `${replaceLongestPrefix(
    path,
    internalToEnglish,
    internalPrefixes,
  )}${suffix}`;
}

export function toInternalPath(publicEnglishPath: string) {
  const { path, suffix } = splitSuffix(publicEnglishPath);

  return `${replaceLongestPrefix(
    path,
    englishToInternal,
    englishPrefixes.map(([internalPath, englishPath]) => [
      englishPath,
      internalPath,
    ]),
  )}${suffix}`;
}

export function localizedPath(locale: RouteLocale, internalHref: string) {
  const { path, suffix } = splitSuffix(internalHref);
  const normalizedPath = normalizePath(path || "/");
  const publicPath =
    locale === "en" ? toEnglishPublicPath(normalizedPath) : normalizedPath;

  return `/${locale}${publicPath === "/" ? "" : publicPath}${suffix}`;
}

export function canonicalizeLocalizedHref(href: string) {
  const { path, suffix } = splitSuffix(href);
  const match = path.match(/^\/(de|en)(\/.*)?$/);

  if (!match) {
    return href;
  }

  const locale = match[1] as RouteLocale;
  const localizedContentPath = match[2] || "/";
  const internalPath =
    locale === "en"
      ? toInternalPath(localizedContentPath)
      : localizedContentPath;

  return `${localizedPath(locale, internalPath)}${suffix}`;
}

export function switchLocalePathname(
  pathname: string,
  nextLocale: RouteLocale,
) {
  const match = pathname.match(/^\/(de|en)(\/.*)?$/);

  if (!match) {
    return localizedPath(nextLocale, pathname || "/");
  }

  const currentLocale = match[1] as RouteLocale;
  const currentContentPath = match[2] || "/";
  const internalPath =
    currentLocale === "en"
      ? toInternalPath(currentContentPath)
      : currentContentPath;

  return localizedPath(nextLocale, internalPath);
}
