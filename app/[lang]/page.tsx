import Image from "next/image";
import Link from "next/link";

import { AnimatedBathtubCurve } from "../_components/animated-bathtub-curve";
import { HomeHero } from "../_components/home-hero";
import { SectionHeading } from "../_components/section-heading";
import { ServiceCard } from "../_components/service-card";
import { serviceCardImages } from "../_content/service-card-assets";
import { getSiteContent } from "../_content/site-content";
import { localizeHref, resolveLocale } from "../_i18n/config";
import { buildLocalizedMetadata } from "../_seo/metadata";

const podcastHref =
  "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan";

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
      <HomeHero locale={locale} />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
              {home.practical.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {home.practical.title}
            </h2>
            {home.practical.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 text-base leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <Link
                href={localizeHref(locale, "/wissen")}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
              >
                {home.practical.cta}
              </Link>
            </div>
          </div>

          <div className="grid min-w-0 gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
              <AnimatedBathtubCurve
                alt={home.practical.curveAlt}
                locale={locale}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-sm">
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
              <div className="rounded-[1.8rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
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

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {practicalGalleryImages.map((image) => (
            <div
              key={image.src}
              className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-sm"
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading {...home.serviceIntro} />
        <div className="mt-8 flex flex-wrap gap-3">
          {content.methodHighlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-900"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              image={serviceImages[service.href]}
              href={localizeHref(locale, service.href)}
              ctaLabel={content.common.learnMore}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading {...home.educationIntro} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {content.educationFormats.map((format, index) => {
              const external = "external" in format && format.external;

              return (
                <article
                  key={format.title}
                  className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm"
                >
                  <div className="relative aspect-[1.8/1]">
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
                  <div className="flex h-full flex-col p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200">
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
                    <div className="mt-6 grid gap-3">
                      {format.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200"
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

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading {...home.benefitsIntro} />
          <div className="grid gap-5 sm:grid-cols-2">
            {content.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <div className="mb-5 h-1.5 w-16 rounded-full bg-cyan-500" />
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbfd_0%,#eef4f7_100%)] shadow-sm">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-300">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-56"
                style={{
                  backgroundImage:
                    "url('/podcast/kevin-lucan-background.png')",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.56)_0%,rgba(15,23,42,0.38)_42%,rgba(15,23,42,0.18)_100%)]" />
              <div className="absolute inset-y-0 left-0 w-[62%] bg-[linear-gradient(90deg,rgba(15,23,42,0.34),rgba(15,23,42,0.02))]" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
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

            <div className="flex flex-col justify-center">
              <SectionHeading
                eyebrow={home.podcast.eyebrow}
                title={home.podcast.title}
                description={home.podcast.description}
              />
              <p className="mt-6 text-base leading-8 text-slate-600">
                {home.podcast.hostContext}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={podcastHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                >
                  {home.podcast.cta}
                </Link>
                <Link
                  href={localizeHref(locale, "/kontakt")}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                >
                  {home.podcast.contactCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
                {home.book.eyebrow}
              </p>
              <div className="mt-6 grid grid-cols-2 items-end gap-4">
                {content.books.map((book, index) => (
                  <Link
                    key={book.href}
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={index === 0 ? "block" : "block translate-y-5"}
                  >
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={900}
                      height={book.cover.endsWith(".webp") ? 1306 : 1284}
                      className="h-auto w-full shadow-xl shadow-slate-300/70 transition-transform duration-200 hover:-translate-y-1"
                      sizes="(min-width: 1024px) 16vw, 42vw"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow={home.book.sectionEyebrow}
              title={home.book.title}
              description={`${content.book.description} ${home.book.trustText}`}
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              {content.book.subtitle}. {home.book.authorsLabel}:{" "}
              {content.book.authors}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localizeHref(locale, "/literatur")}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
              >
                {home.book.literatureCta}
              </Link>
              <Link
                href={content.book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
              >
                {home.book.bookCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading {...home.references} align="center" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.industryReferences.map((reference) => (
            <div
              key={reference}
              className="rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm"
            >
              <p className="text-base font-semibold text-slate-900">
                {reference}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-slate-300">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.6fr] lg:p-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
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
                className="rounded-full bg-cyan-400 px-6 py-4 text-center text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                {home.contact.cta}
              </Link>
              <a
                href="mailto:info@reltest-solutions.com"
                className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
              >
                info@reltest-solutions.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
