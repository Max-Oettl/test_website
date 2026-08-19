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
      image: "/industries/automotive.webp",
    },
    Maschinenbau: {
      slug: "maschinenbau",
      image: "/industries/maschinenbau.webp",
    },
    "Elektronische Produkte": {
      slug: "elektronische-produkte",
      image: "/industries/elektronische-produkte.webp",
    },
    Halbleiterindustrie: {
      slug: "halbleiterindustrie",
      image: "/industries/halbleiterindustrie.webp",
    },
    "Consumer-Technik": {
      slug: "konsumgueter",
      image: "/industries/consumer-products-reliability-testing.webp",
    },
    "Erneuerbare Energien": {
      slug: "erneuerbare-energien",
      image: "/industries/erneuerbare-energien.webp",
    },
    Medizintechnik: {
      slug: "medizintechnik",
      image: "/industries/medical-device-reliability-testing.webp",
    },
    "Luft- und Raumfahrt": {
      slug: "luft-und-raumfahrt",
      image: "/industries/aerospace-reliability-engineering.webp",
    },
  },
  en: {
    Automotive: {
      slug: "automotive",
      image: "/industries/automotive.webp",
    },
    "Mechanical engineering": {
      slug: "maschinenbau",
      image: "/industries/maschinenbau.webp",
    },
    "Electronic products": {
      slug: "elektronische-produkte",
      image: "/industries/elektronische-produkte.webp",
    },
    "Semiconductor industry": {
      slug: "halbleiterindustrie",
      image: "/industries/halbleiterindustrie.webp",
    },
    "Consumer technology": {
      slug: "konsumgueter",
      image: "/industries/consumer-products-reliability-testing.webp",
    },
    "Renewable energy": {
      slug: "erneuerbare-energien",
      image: "/industries/erneuerbare-energien.webp",
    },
    "Medical technology": {
      slug: "medizintechnik",
      image: "/industries/medical-device-reliability-testing.webp",
    },
    Aerospace: {
      slug: "luft-und-raumfahrt",
      image: "/industries/aerospace-reliability-engineering.webp",
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
