import type { Metadata } from "next";

import type { Locale } from "../_i18n/config";

export const siteUrl = "https://reltest-solutions.com";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function buildLocalizedMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const localizedPath = path === "/" ? `/${locale}` : `/${locale}${path}`;
  const dePath = path === "/" ? "/de" : `/de${path}`;
  const enPath = path === "/" ? "/en" : `/en${path}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: absoluteUrl(localizedPath),
      languages: {
        de: absoluteUrl(dePath),
        en: absoluteUrl(enPath),
        "x-default": absoluteUrl(dePath),
      },
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(localizedPath),
      title,
      description,
      siteName: "RelTest Solutions",
      locale: locale === "de" ? "de_DE" : "en_US",
    },
  };
}
