import { notFound, permanentRedirect } from "next/navigation";

import { EducationDetailPage as EducationDetailPageView } from "../../../_components/education-detail-page";
import { getDetailPage, getDetailPages } from "../../../_content/migration-pages";
import {
  locales,
  localizeHref,
  resolveLocale,
} from "../../../_i18n/config";
import { buildLocalizedMetadata } from "../../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getDetailPages("education", lang).map((page) => ({
      lang,
      slug: page.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const page = getDetailPage("education", locale, slug);

  if (!page) {
    return {};
  }

  return buildLocalizedMetadata({
    locale,
    path: `/weiterbildung/${slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function EducationDetailPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;

  if (slug === "seminare") {
    permanentRedirect(
      localizeHref(
        locale,
        locale === "de"
          ? "/education#vor-ort-schulung"
          : "/education#on-site-training",
      ),
    );
  }

  if (slug === "academy") {
    permanentRedirect(localizeHref(locale, "/education#e-learning"));
  }

  const page = getDetailPage("education", locale, slug);

  if (!page) {
    notFound();
  }

  return <EducationDetailPageView locale={locale} page={page} />;
}
