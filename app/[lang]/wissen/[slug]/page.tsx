import { notFound } from "next/navigation";

import { KnowledgeArticlePage } from "../../../_components/knowledge-article-page";
import { getKnowledgeArticle, getKnowledgeArticles } from "../../../_content/knowledge-content";
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
    getKnowledgeArticles(lang).map((article) => ({ lang, slug: article.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const article = getKnowledgeArticle(locale, slug);

  if (!article) return {};

  return buildLocalizedMetadata({
    locale,
    path: `/wissen/${slug}`,
    title: article.metaTitle,
    description: article.metaDescription,
  });
}

export default async function KnowledgeDetailPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const article = getKnowledgeArticle(locale, slug);

  if (!article) notFound();

  const pageUrl = absoluteUrl(localizeHref(locale, `/wissen/${slug}`));
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        headline: article.title,
        description: article.metaDescription,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        inLanguage: locale === "de" ? "de-DE" : "en-US",
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        about: article.navLabel,
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
            name: locale === "de" ? "Wissen" : "Knowledge",
            item: absoluteUrl(localizeHref(locale, "/wissen")),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.navLabel,
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
      <KnowledgeArticlePage locale={locale} article={article} />
    </>
  );
}
