import type { MetadataRoute } from "next";

import { isSiteIndexingEnabled } from "./_seo/deployment";
import { absoluteUrl, siteUrl } from "./_seo/metadata";

export default function robots(): MetadataRoute.Robots {
  if (!isSiteIndexingEnabled) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
