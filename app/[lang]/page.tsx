import { HomePageHero } from "../_components/home-page-hero";
import { HomePageContent } from "../_components/home-page-content";
import { getSiteContent } from "../_content/site-content";
import { localizeHref, resolveLocale, type Locale } from "../_i18n/config";
import { buildLocalizedMetadata } from "../_seo/metadata";

const industryVisuals: Record<
  Locale,
  Record<string, { slug: string; image: string }>
> = {
  de: {
    Automotive: {
      slug: "automotive",
      image: "/industries/automotive.png",
    },
    Maschinenbau: {
      slug: "maschinenbau",
      image: "/industries/maschinenbau.png",
    },
    "Elektronische Produkte": {
      slug: "elektronische-produkte",
      image: "/industries/elektronische-produkte.png",
    },
    Halbleiterindustrie: {
      slug: "halbleiterindustrie",
      image: "/industries/halbleiterindustrie.png",
    },
    "Consumer-Technik": {
      slug: "konsumgueter",
      image: "/industries/consumer-technik-v2.png",
    },
    "Erneuerbare Energien": {
      slug: "erneuerbare-energien",
      image: "/industries/erneuerbare-energien.png",
    },
    Medizintechnik: {
      slug: "medizintechnik",
      image: "/industries/medizintechnik-v2.png",
    },
    "Luft- und Raumfahrt": {
      slug: "luft-und-raumfahrt",
      image: "/industries/luft-und-raumfahrt-v2.png",
    },
  },
  en: {
    Automotive: {
      slug: "automotive",
      image: "/industries/automotive.png",
    },
    "Mechanical engineering": {
      slug: "maschinenbau",
      image: "/industries/maschinenbau.png",
    },
    "Electronic products": {
      slug: "elektronische-produkte",
      image: "/industries/elektronische-produkte.png",
    },
    "Semiconductor industry": {
      slug: "halbleiterindustrie",
      image: "/industries/halbleiterindustrie.png",
    },
    "Consumer technology": {
      slug: "konsumgueter",
      image: "/industries/consumer-technik-v2.png",
    },
    "Renewable energy": {
      slug: "erneuerbare-energien",
      image: "/industries/erneuerbare-energien.png",
    },
    "Medical technology": {
      slug: "medizintechnik",
      image: "/industries/medizintechnik-v2.png",
    },
    Aerospace: {
      slug: "luft-und-raumfahrt",
      image: "/industries/luft-und-raumfahrt-v2.png",
    },
  },
};

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
  const content = getSiteContent(locale);
  const industryItems = content.industryReferences.flatMap((reference) => {
    const visual = industryVisuals[locale][reference];

    return visual
      ? [
          {
            name: reference,
            href: localizeHref(locale, `/branchen/${visual.slug}`),
            image: visual.image,
          },
        ]
      : [];
  });

  return (
    <>
      <HomePageHero locale={locale} />
      <HomePageContent
        locale={locale}
        industries={{
          items: industryItems,
        }}
      />
    </>
  );
}
