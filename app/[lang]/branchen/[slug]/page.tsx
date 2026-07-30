import { notFound } from "next/navigation";

import { IndustryDetailPage as IndustryDetailPageView } from "../../../_components/industry-detail-page";
import {
  getIndustryDetail,
  getIndustryDetails,
} from "../../../_content/industry-detail-content";
import { locales, resolveLocale } from "../../../_i18n/config";
import {
  absoluteUrl,
  buildLocalizedMetadata,
} from "../../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getIndustryDetails(lang).map((page) => ({
      lang,
      slug: page.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const page = getIndustryDetail(locale, slug);

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
  const page = getIndustryDetail(locale, slug);

  if (!page) {
    notFound();
  }

  const localizedPath = `/${locale}/branchen/${page.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(localizedPath)}#webpage`,
        url: absoluteUrl(localizedPath),
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: locale === "de" ? "de-DE" : "en",
        about: {
          "@type": "Service",
          name: page.title,
          serviceType: page.services.map((service) => service.title),
          provider: {
            "@type": "Organization",
            name: "RelTest Solutions",
            url: absoluteUrl(`/${locale}`),
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "de" ? "Startseite" : "Home",
            item: absoluteUrl(`/${locale}`),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "de" ? "Branchen" : "Industries",
            item: absoluteUrl(`/${locale}/branchen`),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
            item: absoluteUrl(localizedPath),
          },
        ],
      },
    ],
  };

  return (
    <>
      <IndustryDetailPageView locale={locale} content={page} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
