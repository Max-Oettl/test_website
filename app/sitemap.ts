import type { MetadataRoute } from "next";

import { getDetailPages } from "./_content/migration-pages";
import { getKnowledgeArticles } from "./_content/knowledge-content";
import { locales, type Locale } from "./_i18n/config";
import { localizedPath } from "./_i18n/routes";
import { absoluteUrl } from "./_seo/metadata";

const staticPaths = [
  "",
  "/leistungen",
  "/education",
  "/wissen",
  "/expertise",
  "/prozess",
  "/literatur",
  "/referenzen",
  "/kontakt",
  "/branchen",
  "/ueber-uns",
  "/aktuelles",
  "/glossar",
  "/impressum",
  "/datenschutz",
] as const;

const detailGroups = [
  ["services", "/leistungen"],
  ["education", "/weiterbildung"],
  ["industries", "/branchen"],
  ["people", "/ueber-uns"],
  ["news", "/aktuelles"],
] as const;

const redirectOnlyEducationSlugs = new Set(["seminare", "academy"]);

function localizedAlternates(path: string) {
  return {
    languages: {
      de: absoluteUrl(localizedPath("de", path || "/")),
      en: absoluteUrl(localizedPath("en", path)),
      "x-default": absoluteUrl(localizedPath("de", path || "/")),
    },
  };
}

function sitemapEntry(
  locale: Locale,
  path: string,
  priority: number,
): MetadataRoute.Sitemap[number] {
  const publicPath = localizedPath(locale, path || "/");

  return {
    url: absoluteUrl(publicPath),
    lastModified: "2026-08-12",
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
      getDetailPages(group, locale)
        .filter(
          (page) =>
            group !== "education" ||
            !redirectOnlyEducationSlugs.has(page.slug),
        )
        .map((page) =>
          sitemapEntry(locale, `${basePath}/${page.slug}`, 0.68),
        ),
    ),
  );

  const knowledgeEntries = locales.flatMap((locale) =>
    getKnowledgeArticles(locale).map((article) =>
      sitemapEntry(locale, `/wissen/${article.slug}`, 0.72),
    ),
  );

  return [...staticEntries, ...detailEntries, ...knowledgeEntries];
}
