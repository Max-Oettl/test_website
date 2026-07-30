import { notFound } from "next/navigation";

import { ServiceDetailTemplate } from "../../../_components/service-detail-template";
import { SolutionServiceDetailPage } from "../../../_components/solution-service-detail-page";
import { getDetailPage, getDetailPages } from "../../../_content/migration-pages";
import { getSolutionServicePage } from "../../../_content/solution-service-pages";
import { locales, resolveLocale } from "../../../_i18n/config";
import { buildLocalizedMetadata } from "../../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getDetailPages("services", lang).map((page) => ({
      lang,
      slug: page.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const solutionPage = getSolutionServicePage(locale, slug);
  const page = getDetailPage("services", locale, slug);

  if (!solutionPage && !page) {
    return {};
  }

  return buildLocalizedMetadata({
    locale,
    path: `/leistungen/${slug}`,
    title: solutionPage?.metaTitle ?? page!.metaTitle,
    description: solutionPage?.metaDescription ?? page!.metaDescription,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const solutionPage = getSolutionServicePage(locale, slug);
  const page = getDetailPage("services", locale, slug);

  if (solutionPage) {
    return <SolutionServiceDetailPage locale={locale} page={solutionPage} />;
  }

  if (!page) {
    notFound();
  }

  return <ServiceDetailTemplate locale={locale} page={page} />;
}
