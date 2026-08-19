import { notFound } from "next/navigation";

import { DetailPageTemplate } from "../../../_components/detail-page-template";
import { getDetailPage, getDetailPages } from "../../../_content/migration-pages";
import { locales, localizeHref, resolveLocale } from "../../../_i18n/config";
import {
  absoluteUrl,
  buildLocalizedMetadata,
  siteUrl,
} from "../../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getDetailPages("news", lang).map((page) => ({
      lang,
      slug: page.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const page = getDetailPage("news", locale, slug);

  if (!page) {
    return {};
  }

  return buildLocalizedMetadata({
    locale,
    path: `/aktuelles/${slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function NewsDetailPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const page = getDetailPage("news", locale, slug);

  if (!page) {
    notFound();
  }

  const pageUrl = absoluteUrl(localizeHref(locale, `/aktuelles/${slug}`));
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: page.title,
        description: page.metaDescription,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        inLanguage: locale === "de" ? "de-DE" : "en-US",
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "de" ? "Startseite" : "Home",
            item: absoluteUrl(localizeHref(locale, "/")),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "de" ? "Aktuelles" : "News",
            item: absoluteUrl(localizeHref(locale, "/aktuelles")),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <DetailPageTemplate locale={locale} page={page} />
    </>
  );
}
