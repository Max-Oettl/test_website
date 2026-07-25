import Image from "next/image";
import Link from "next/link";

import { AnimatedBathtubCurve } from "../_components/animated-bathtub-curve";
import { HomeHero } from "../_components/home-hero";
import { IndustryCarousel } from "../_components/industry-carousel";
import { LandingConceptComparison } from "../_components/landing-concept-comparison";
import { LandingConceptIcebergHero } from "../_components/landing-concept-iceberg-hero";
import { LandingConceptKacheln2Hero } from "../_components/landing-concept-kacheln-2-hero";
import { LandingConceptKacheln2Tail } from "../_components/landing-concept-kacheln-2-tail";
import { LandingConceptKacheln3Hero } from "../_components/landing-concept-kacheln-3-hero";
import { LandingConceptKachelnHero } from "../_components/landing-concept-kacheln-hero";
import { LandingConceptKachelnTail } from "../_components/landing-concept-kacheln-tail";
import { LandingConceptVisibility } from "../_components/landing-concept-visibility";
import { LandingConceptWinnsteinHero } from "../_components/landing-concept-winnstein-hero";
import { LandingConceptWinnsteinTail } from "../_components/landing-concept-winnstein-tail";
import { SectionHeading } from "../_components/section-heading";
import { ServiceCard } from "../_components/service-card";
import { serviceCardImages } from "../_content/service-card-assets";
import { getSiteContent } from "../_content/site-content";
import { localizeHref, resolveLocale, type Locale } from "../_i18n/config";
import { buildLocalizedMetadata } from "../_seo/metadata";

const podcastHref =
  "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan";

const compactLandingConcepts = [
  "kacheln",
  "kacheln2",
  "kacheln3",
  "kacheln31",
  "winnstein",
  "winnsteinLogo",
] as const;

const industryVisuals: Record<
  Locale,
  Record<
    string,
    {
      slug: string;
      image: string;
    }
  >
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
  const home = content.home;
  const serviceImages = serviceCardImages[locale];
  const industryCtaLabel =
    locale === "de" ? "Warum Zuverlässigkeit?" : "Why reliability?";
  const industryCarouselEyebrow =
    locale === "de" ? "Branche im Fokus" : "Industry in focus";
  const industryCarouselNavigationLabel =
    locale === "de" ? "Branchen auswählen" : "Select industry";
  const industryCarouselPreviousLabel =
    locale === "de"
      ? "Vorherige Branche anzeigen"
      : "Show previous industry";
  const industryCarouselNextLabel =
    locale === "de" ? "Nächste Branche anzeigen" : "Show next industry";
  const industryCarouselSlideLabel =
    locale === "de" ? "Branche anzeigen" : "Show industry";
  const industryItems = content.industryReferences.flatMap((reference) => {
    const visual = industryVisuals[locale][reference];

    if (!visual) {
      return [];
    }

    return [
      {
        name: reference,
        href: localizeHref(locale, `/branchen/${visual.slug}`),
        image: visual.image,
      },
    ];
  });
  const industryCarouselProps = {
    items: industryItems,
    ctaLabel: industryCtaLabel,
    eyebrowLabel: industryCarouselEyebrow,
    navigationLabel: industryCarouselNavigationLabel,
    nextLabel: industryCarouselNextLabel,
    previousLabel: industryCarouselPreviousLabel,
    slideLabel: industryCarouselSlideLabel,
  };
  const homeServiceHrefs = [
    "/leistungen/beratung",
    "/leistungen/langfristige-kooperation",
    "/weiterbildung/seminare",
    "/weiterbildung/academy",
  ];
  const homeServices = homeServiceHrefs
    .map((href) => content.services.find((service) => service.href === href))
    .filter((service): service is (typeof content.services)[number] =>
      Boolean(service),
    );
  const practicalGalleryImages = [
    {
      src: "/team/home-testbench-review.png",
      alt: home.practical.galleryAlts[0],
    },
    {
      src: "/team/home-engineering-consulting.png",
      alt: home.practical.galleryAlts[1],
    },
    {
      src: "/team/home-reliability-planning.png",
      alt: home.practical.galleryAlts[2],
    },
  ];

  return (
    <>
      <LandingConceptComparison
        current={<HomeHero locale={locale} />}
        kacheln={<LandingConceptKachelnHero locale={locale} />}
        kacheln2={<LandingConceptKacheln2Hero locale={locale} />}
        kacheln3={<LandingConceptKacheln3Hero locale={locale} />}
        kacheln31={
          <LandingConceptKacheln3Hero
            heroImage="/concepts/landingpage-kacheln-3-1/hero-reliability-process.png"
            heroImageFraming="process"
            locale={locale}
          />
        }
        winnstein={<LandingConceptWinnsteinHero locale={locale} />}
        winnsteinLogo={<LandingConceptWinnsteinHero locale={locale} />}
        iceberg={<LandingConceptIcebergHero locale={locale} />}
      />

      <LandingConceptVisibility visibleFor="kacheln">
        <LandingConceptKachelnTail
          locale={locale}
          industries={industryCarouselProps}
        />
      </LandingConceptVisibility>

      <LandingConceptVisibility
        visibleFor={["kacheln2", "kacheln3", "kacheln31"]}
      >
        <LandingConceptKacheln2Tail
          locale={locale}
          industries={industryCarouselProps}
        />
      </LandingConceptVisibility>

      <LandingConceptVisibility visibleFor={["winnstein", "winnsteinLogo"]}>
        <LandingConceptWinnsteinTail
          locale={locale}
          industries={industryCarouselProps}
        />
      </LandingConceptVisibility>

      <LandingConceptVisibility hiddenFor={compactLandingConcepts}>
        <div className="home-page-tail">
      <section className="home-section home-services-section mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading {...home.serviceIntro} />
        <div className="home-service-grid mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homeServices.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              variant="home"
              topics={undefined}
              image={serviceImages[service.href]}
              href={localizeHref(locale, service.href)}
              ctaLabel={content.common.learnMore}
            />
          ))}
        </div>
      </section>

      <section className="home-section home-practical-section mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="home-practical-layout grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="home-practical-copy min-w-0">
            <p className="home-section-eyebrow text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
              {home.practical.eyebrow}
            </p>
            <h2 className="home-section-title mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {home.practical.title}
            </h2>
            {home.practical.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="home-section-copy mt-5 text-base leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <Link
                href={localizeHref(locale, "/wissen")}
                className="home-primary-link inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
              >
                {home.practical.cta}
              </Link>
            </div>
          </div>

          <div className="home-practical-visuals grid min-w-0 gap-4">
            <div className="home-panel home-curve-panel overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
              <AnimatedBathtubCurve
                alt={home.practical.curveAlt}
                locale={locale}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="home-panel relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-sm">
                <div className="relative aspect-[1.25/1] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src="/team/img-0139.jpg"
                    alt={home.practical.teamAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 20vw, 100vw"
                  />
                </div>
              </div>
              <div className="home-dark-note rounded-[1.8rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                <p className="home-context-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {home.practical.noteEyebrow}
                </p>
                <p className="mt-3 text-lg font-semibold">
                  {home.practical.noteTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {home.practical.noteText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-gallery-grid mt-10 grid gap-4 md:grid-cols-3">
          {practicalGalleryImages.map((image) => (
            <div
              key={image.src}
              className="home-panel relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-sm"
            >
              <div className="relative aspect-[1.55/1] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-education-section bg-white py-20">
        <div className="home-section-inner mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading {...home.educationIntro} />
          <div className="home-education-grid mt-12 grid gap-6 lg:grid-cols-2">
            {content.educationFormats.map((format, index) => {
              const external = "external" in format && format.external;

              return (
                <article
                  key={format.title}
                  className="home-education-card flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm"
                >
                  <div className="home-education-media relative aspect-[1.8/1]">
                    <Image
                      src={
                        index === 0
                          ? "/team/img-0107.png"
                          : "/team/academy-e-learning.png"
                      }
                      alt={
                        index === 0
                          ? home.educationIntro.seminarAlt
                          : home.educationIntro.academyAlt
                      }
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.38))]" />
                  </div>
                  <div className="home-education-body flex h-full flex-col p-8">
                    <div className="flex items-start gap-5">
                      <div className="home-education-icon flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200">
                        <Image
                          src={
                            format.title === "RelTest Academy"
                              ? "/academy/reltest-academy-logo.webp"
                              : format.icon
                          }
                          alt={
                            format.title === "RelTest Academy"
                              ? "RelTest Academy"
                              : ""
                          }
                          width={56}
                          height={56}
                          className={
                            format.title === "RelTest Academy"
                              ? "h-12 w-12 object-contain"
                              : "h-14 w-14"
                          }
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                          {format.title}
                        </h3>
                        <p className="mt-4 text-base leading-8 text-slate-600">
                          {format.description}
                        </p>
                      </div>
                    </div>
                    <div className="home-education-bullets mt-6 grid gap-3">
                      {format.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="home-education-bullet rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 ring-1 ring-cyan-100">
                              <span className="h-2 w-2 rounded-full bg-cyan-500" />
                            </span>
                            <p className="text-sm leading-7 font-medium text-slate-700">
                              {bullet}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-8">
                      <Link
                        href={
                          external
                            ? format.ctaHref
                            : localizeHref(locale, format.ctaHref)
                        }
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                      >
                        {format.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section home-benefits-section py-20">
        <div className="home-benefits-layout mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading {...home.benefitsIntro} />
          <div className="home-benefits-grid grid gap-5 sm:grid-cols-2">
            {content.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="home-benefit-card rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <div className="home-benefit-rule mb-5 h-1.5 w-16 rounded-full bg-cyan-500" />
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-podcast-section mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="home-podcast-panel overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbfd_0%,#eef4f7_100%)] shadow-sm">
          <div className="home-podcast-layout grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div className="home-podcast-visual relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-300">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-56"
                style={{
                  backgroundImage:
                    "url('/podcast/kevin-lucan-background.png')",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.56)_0%,rgba(15,23,42,0.38)_42%,rgba(15,23,42,0.18)_100%)]" />
              <div className="absolute inset-y-0 left-0 w-[62%] bg-[linear-gradient(90deg,rgba(15,23,42,0.34),rgba(15,23,42,0.02))]" />
              <div className="relative flex min-h-[23rem] flex-col justify-end">
                <p className="home-context-eyebrow text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  {home.podcast.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {home.podcast.visualTitle}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-200">
                  {home.podcast.visualText}
                </p>
              </div>
            </div>

            <div className="home-podcast-copy flex flex-col justify-center">
              <h2 className="section-heading-title text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                {home.podcast.title}
              </h2>
              <p className="section-heading-description mt-5 text-lg leading-8 text-slate-600">
                {home.podcast.description}
              </p>
              <p className="mt-6 text-base leading-8 text-slate-600">
                {home.podcast.hostContext}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={podcastHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-primary-link inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                >
                  {home.podcast.cta}
                </Link>
                <Link
                  href={localizeHref(locale, "/kontakt")}
                  className="home-secondary-link inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                >
                  {home.podcast.contactCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-industries-section mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading {...home.references} align="center" />
        <IndustryCarousel
          items={industryItems}
          ctaLabel={industryCtaLabel}
          eyebrowLabel={industryCarouselEyebrow}
          navigationLabel={industryCarouselNavigationLabel}
          nextLabel={industryCarouselNextLabel}
          previousLabel={industryCarouselPreviousLabel}
          slideLabel={industryCarouselSlideLabel}
        />
        <div className="home-industries-grid mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {content.industryReferences.map((reference) => {
            const visual = industryVisuals[locale][reference];

            if (!visual) {
              return null;
            }

            return (
              <Link
                key={reference}
                href={localizeHref(locale, `/branchen/${visual.slug}`)}
                className="home-industry-card group relative min-h-52 overflow-hidden rounded-[1.65rem] border border-white/80 bg-brand-ink p-5 text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-panel focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
              >
                <Image
                  src={visual.image}
                  alt=""
                  fill
                  aria-hidden="true"
                  className="object-cover opacity-62 transition duration-500 group-hover:scale-105 group-hover:opacity-74"
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.14)_0%,rgba(2,6,23,0.26)_44%,rgba(2,6,23,0.84)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-ink/84 via-brand-ink/34 to-transparent" />
                <div className="relative flex min-h-40 flex-col justify-end">
                  <div>
                    <h3 className="max-w-64 text-[1.35rem] font-medium leading-tight tracking-[-0.045em] text-white drop-shadow-sm">
                      {reference}
                    </h3>
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-3.5 py-2 text-[0.82rem] font-medium tracking-[-0.01em] text-slate-100 backdrop-blur-md transition-colors group-hover:border-cyan-100/55 group-hover:bg-white/16">
                      {industryCtaLabel}
                      <span
                        aria-hidden="true"
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-white/12 text-[0.78rem] text-cyan-100 transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="home-section home-contact-section px-5 py-20 sm:px-6 lg:px-8">
        <div className="home-contact-panel mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-slate-300">
          <div className="home-contact-layout grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.6fr] lg:p-14">
            <div>
              <p className="home-context-eyebrow text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {home.contact.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {home.contact.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                {home.contact.description}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Link
                href={localizeHref(locale, "/kontakt")}
                className="home-contact-primary rounded-full bg-cyan-400 px-6 py-4 text-center text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                {home.contact.cta}
              </Link>
              <a
                href="mailto:info@reltest-solutions.com"
                className="home-contact-secondary rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
              >
                info@reltest-solutions.com
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
      </LandingConceptVisibility>
    </>
  );
}
