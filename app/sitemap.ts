import type { MetadataRoute } from "next";

import { getDetailPages } from "./_content/migration-pages";
import { locales, type Locale } from "./_i18n/config";
import { absoluteUrl } from "./_seo/metadata";

const staticPaths = [
  "",
  "/leistungen",
  "/weiterbildung",
  "/wissen",
  "/expertise",
  "/prozess",
  "/literatur",
  "/referenzen",
  "/kontakt",
  "/branchen",
  "/ueber-uns",
  "/aktuelles",
  "/karriere",
  "/glossar",
  "/impressum",
  "/datenschutz",
] as const;

const detailGroups = [
  ["services", "/leistungen"],
  ["knowledge", "/wissen"],
  ["education", "/weiterbildung"],
  ["industries", "/branchen"],
  ["people", "/ueber-uns"],
  ["news", "/aktuelles"],
  ["careers", "/karriere"],
] as const;

function localizedAlternates(path: string) {
  return {
    languages: {
      de: absoluteUrl(`/de${path}`),
      en: absoluteUrl(`/en${path}`),
      "x-default": absoluteUrl(`/de${path}`),
    },
  };
}

function sitemapEntry(
  locale: Locale,
  path: string,
  priority: number,
): MetadataRoute.Sitemap[number] {
  const localizedPath = `/${locale}${path}`;

  return {
    url: absoluteUrl(localizedPath),
    lastModified: "2026-06-21",
    changeFrequency: "monthly",
    priority,
    alternates: localizedAlternates(path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = locales.flatMap((locale) =>
    staticPaths.map((path) =>
      sitemapEntry(locale, path, path === "" ? 1 : 0.75),
    ),
  );

  const detailEntries = detailGroups.flatMap(([group, basePath]) =>
    locales.flatMap((locale) =>
      getDetailPages(group, locale).map((page) =>
        sitemapEntry(locale, `${basePath}/${page.slug}`, 0.68),
      ),
    ),
  );

  return [...staticEntries, ...detailEntries];
}
