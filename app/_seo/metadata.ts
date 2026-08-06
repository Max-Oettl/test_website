import type { Metadata } from "next";

import type { Locale } from "../_i18n/config";
import { isVercelPreviewDeployment } from "./deployment";

export const siteUrl = "https://reltest-solutions.com";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function getRobotsMetadata(): Metadata["robots"] {
  if (isVercelPreviewDeployment) {
    return {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      googleBot: {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
        noimageindex: true,
      },
    };
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
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
    robots: getRobotsMetadata(),
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
      siteName: "RelTest",
      locale: locale === "de" ? "de_DE" : "en_US",
    },
  };
}
