import { notFound } from "next/navigation";

import { DetailPageTemplate } from "../../../_components/detail-page-template";
import { getDetailPage, getDetailPages } from "../../../_content/migration-pages";
import { locales, resolveLocale } from "../../../_i18n/config";
import { buildLocalizedMetadata } from "../../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getDetailPages("industries", lang).map((page) => ({
      lang,
      slug: page.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const page = getDetailPage("industries", locale, slug);

  if (!page) {
    return {};
  }

  return buildLocalizedMetadata({
    locale,
    path: `/branchen/${slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const page = getDetailPage("industries", locale, slug);

  if (!page) {
    notFound();
  }

  return <DetailPageTemplate locale={locale} page={page} />;
}
