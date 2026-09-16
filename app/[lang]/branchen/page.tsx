import Link from "next/link";

import { AiAwareImage as Image } from "../../_components/ai-aware-image";
import { BrandLineWatermark } from "../../_components/brand-line-watermark";
import { IndustrySpectrumGraphic } from "../../_components/industry-spectrum-graphic";
import { PageClosingCta } from "../../_components/page-closing-cta";
import {
  getIndustries,
  type IndustryOverviewItem,
} from "../../_content/industry-overview-content";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const industriesContent = {
  de: {
    metaTitle: "Branchen für Reliability Engineering | RelTest Solutions",
    metaDescription:
      "Zuverlässigkeitstechnik, Risikomanagement, Erprobung und Datenanalyse für Automotive, Maschinenbau, Elektronik, Medizintechnik und weitere technische Branchen.",
    hero: {
      title: "Zuverlässigkeit nach Branche.",
      description:
        "Produkte, Einsatzbedingungen und Nachweispflichten unterscheiden sich. Deshalb passt RelTest Prüfstrategie, Datenanalyse und Absicherung an Produkt, Nutzung und Entwicklungsstand an – mit dem Ziel, technische Risiken früh zu verstehen und Entscheidungen auf belastbare Daten zu stützen.",
      graphicAlt:
        "Neun minimalistische Piktogramme für Automotive, Maschinenbau, Elektronik, Halbleiter, Consumer-Technik, erneuerbare Energien, Medizintechnik, Luft- und Raumfahrt und Produktionstechnik",
    },
    overview: {
      linkLabel: "Branche vertiefen",
    },
    cta: {
      title: "Anforderungen Ihrer Branche klären.",
      description:
        "Wir ordnen gemeinsam ein, welche Risiken, Daten und Nachweise für Ihr Produkt tatsächlich entscheidend sind.",
      primary: "Projekt besprechen",
      secondary: "Leistungen ansehen",
    },
  },
  en: {
    metaTitle: "Industries for Reliability Engineering | RelTest Solutions",
    metaDescription:
      "Reliability engineering, risk management, testing and data analysis for automotive, mechanical engineering, electronics, medical technology and other technical industries.",
    hero: {
      title: "Reliability by industry.",
      description:
        "Products, operating conditions and evidence requirements differ. RelTest therefore adapts test strategy, data analysis and validation to the product, its use and development status – with the aim of understanding technical risks early and basing decisions on robust data.",
      graphicAlt:
        "Nine minimalist pictograms for automotive, mechanical engineering, electronics, semiconductors, consumer technology, renewable energy, medical technology, aerospace and production technology",
    },
    overview: {
      linkLabel: "Explore industry",
    },
    cta: {
      title: "Clarify your industry's requirements.",
      description:
        "Together, we identify which risks, data and evidence are truly decisive for your product.",
      primary: "Discuss your project",
      secondary: "View services",
    },
  },
} as const;

function getContent(locale: Locale) {
  return industriesContent[locale];
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
    >
      <path
        d="M4 10h11m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IndustryCard({
  industry,
  linkLabel,
  locale,
}: {
  industry: IndustryOverviewItem;
  linkLabel: string;
  locale: Locale;
}) {
  const href = localizeHref(locale, `/branchen/${industry.slug}`);

  return (
    <article className="group flex min-h-full flex-col border-r border-b border-brand-marine/18 bg-white">
      <Link
        href={href}
        className="relative block aspect-[16/9] overflow-hidden focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset"
        aria-label={`${linkLabel}: ${industry.title}`}
      >
        <Image
          src={industry.image}
          alt={industry.alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="font-winnstein-display text-2xl leading-snug font-bold">
          {industry.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-brand-marine/70">
          {industry.description}
        </p>
        <Link
          href={href}
          className="mt-auto inline-flex w-fit items-center gap-4 border-b border-brand-steel-cyan pt-7 pb-1 font-winnstein-display text-sm font-bold transition-colors hover:text-brand-marine focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
        >
          {linkLabel}
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/branchen",
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function IndustriesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const industries = getIndustries(locale);

  return (
    <div className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden text-white">
          <BrandLineWatermark placement="industries" />
        </div>
        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[minmax(0,0.9fr)_minmax(30rem,1.1fr)]">
          <div className="flex min-w-0 flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <h1 className="max-w-4xl font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.8rem]">
              {content.hero.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76">
              {content.hero.description}
            </p>
            <div className="mt-10 h-1 w-16 bg-brand-steel-cyan" />
          </div>
          <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden px-6 py-8 sm:min-h-[24rem] sm:px-10 lg:min-h-[39rem] lg:px-10 lg:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgb(20 36 82 / 0.82) 0%, #142452 14%, #142452 100%)",
              }}
            />
            <div className="relative z-10 w-full max-w-[38rem]">
              <IndustrySpectrumGraphic label={content.hero.graphicAlt} />
            </div>
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section
        aria-label={locale === "de" ? "Branchenübersicht" : "Industry overview"}
        className="bg-white px-5 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid border-t border-l border-brand-marine/18 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.slug}
                industry={industry}
                linkLabel={content.overview.linkLabel}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      <PageClosingCta
        locale={locale}
        title={content.cta.title}
        description={content.cta.description}
      />
    </div>
  );
}
