import type { Metadata } from "next";
import { IBM_Plex_Sans, Sora } from "next/font/google";

import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";
import { getSiteContent } from "../_content/site-content";
import { locales, resolveLocale } from "../_i18n/config";
import { absoluteUrl, getRobotsMetadata, siteUrl } from "../_seo/metadata";
import "../globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { metadata } = getSiteContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: metadata.title,
    description: metadata.description,
    robots: getRobotsMetadata(),
    alternates: {
      canonical: absoluteUrl(`/${locale}`),
      languages: {
        de: absoluteUrl("/de"),
        en: absoluteUrl("/en"),
        "x-default": absoluteUrl("/de"),
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const locale = await resolveLocale(params);
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RelTest Solutions GmbH",
    url: siteUrl,
    logo: absoluteUrl("/reltest-solutions-logo.png"),
    email: "info@reltest-solutions.com",
    telephone: "+49 711 25253531",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Steglen 26",
      postalCode: "71083",
      addressLocality: "Herrenberg",
      addressCountry: "DE",
    },
    sameAs: [
      "https://reltest-academy.com/",
      "https://link.springer.com/book/10.1007/978-3-662-65024-0",
    ],
  };

  return (
    <html
      lang={locale}
      className={`${plexSans.variable} ${sora.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">
        <div className="min-h-screen bg-slate-50 text-slate-950">
          <SiteHeader locale={locale} />
          <main>{children}</main>
          <SiteFooter locale={locale} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
