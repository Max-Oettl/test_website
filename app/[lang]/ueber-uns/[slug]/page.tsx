import { notFound } from "next/navigation";

import { PersonProfilePage } from "../../../_components/person-profile-page";
import { getDetailPage, getDetailPages } from "../../../_content/migration-pages";
import { locales, resolveLocale } from "../../../_i18n/config";
import { buildLocalizedMetadata } from "../../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getDetailPages("people", lang).map((page) => ({
      lang,
      slug: page.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const page = getDetailPage("people", locale, slug);

  if (!page) {
    return {};
  }

  return buildLocalizedMetadata({
    locale,
    path: `/ueber-uns/${slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function PersonDetailPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const page = getDetailPage("people", locale, slug);

  if (!page) {
    notFound();
  }

  return <PersonProfilePage locale={locale} page={page} />;
}
