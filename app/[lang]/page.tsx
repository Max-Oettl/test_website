import { HomePageHero } from "../_components/home-page-hero";
import { HomePageContent } from "../_components/home-page-content";
import { HomeNewsDock } from "../_components/home-news-dock";
import { getSummaryIndustries } from "../_content/industry-overview-content";
import { getSiteContent } from "../_content/site-content";
import { localizeHref, resolveLocale } from "../_i18n/config";
import { buildLocalizedMetadata } from "../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const { metadata } = getSiteContent(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/",
    title: metadata.title,
    description: metadata.description,
  });
}

export default async function HomePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const industryItems = getSummaryIndustries(locale).map((industry) => ({
    name: industry.title,
    href: localizeHref(locale, `/branchen/${industry.slug}`),
    image: industry.image,
  }));

  return (
    <>
      <HomePageHero locale={locale} />
      <HomeNewsDock locale={locale} />
      <HomePageContent
        locale={locale}
        industries={{
          items: industryItems,
        }}
      />
    </>
  );
}
