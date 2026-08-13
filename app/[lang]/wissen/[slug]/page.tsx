import { notFound } from "next/navigation";

import { KnowledgeArticlePage } from "../../../_components/knowledge-article-page";
import { getKnowledgeArticle, getKnowledgeArticles } from "../../../_content/knowledge-content";
import { locales, resolveLocale } from "../../../_i18n/config";
import { buildLocalizedMetadata } from "../../../_seo/metadata";

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

  return <KnowledgeArticlePage locale={locale} article={article} />;
}
