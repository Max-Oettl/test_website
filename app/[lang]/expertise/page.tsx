import Link from "next/link";

import { AiAwareImage as Image } from "../../_components/ai-aware-image";
import { BrandLineWatermark } from "../../_components/brand-line-watermark";
import { PageClosingCta } from "../../_components/page-closing-cta";
import { getSummaryIndustries } from "../../_content/industry-overview-content";
import { getSiteContent, referenceLogos } from "../../_content/site-content";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const featuredReferences = [
  "Mercedes-Benz",
  "Kärcher",
  "ASYS",
  "PI",
  "SMA",
  "Nidec",
] as const;

const featuredReferenceLogoSources: Record<string, string> = {
  "Mercedes-Benz": "/references/mercedes-benz-logo-landing.webp",
  "Kärcher": "/references/kaercher-logo-landing.webp",
  ASYS: "/references/asys-logo-landing.webp",
  PI: "/references/physik-instrumente-logo-landing.webp",
  SMA: "/references/sma-logo-landing.webp",
  Nidec: "/references/nidec-logo-landing.webp",
};

const expertiseContent = {
  de: {
    metaTitle: "Expertise | Referenzen, Literatur und Podcast",
    metaDescription:
      "Referenzen, Springer-Fachbücher, Podcast und Branchenkontexte zeigen die fachliche Substanz hinter RelTest Solutions.",
    intro: {
      title: "Industrieerfahrung, Forschung und Fachliteratur.",
      description:
        "RelTest arbeitet in anspruchsvollen technischen Kontexten. Industrielle Referenzen, veröffentlichte Fachbücher, persönliche Einblicke und konkrete Branchenanwendungen zeigen, wie aus Methoden und Daten belastbare technische Entscheidungen werden.",
      imageAlt:
        "Technisches Meeting mit Zuverlässigkeitsdashboard, Risikomatrix und Projektdaten",
    },
    reference: {
      eyebrow: "Referenzen",
      title: "Projekterfahrung in anspruchsvollen Entwicklungsumfeldern",
      description:
        "Die Referenzen zeigen, dass RelTest dort arbeitet, wo Produktzuverlässigkeit, Lebensdauer, Erprobung und belastbare Nachweise echte Projektwirkung haben.",
      cta: "Alle Referenzen ansehen",
      linkLabel: "Referenzwebsite öffnen",
    },
    books: {
      eyebrow: "Literatur",
      title: "Zwei Springer-Fachbücher",
      cta: "Zur Literaturseite",
    },
    podcast: {
      eyebrow: "Podcast",
      title: "Kevin Lucan im Ingenieurshelden-Podcast",
      description:
        "Im Podcast der Ingenieurshelden spricht Geschäftsführer Dr.-Ing. Kevin Lucan über Werdegang, technische Verantwortung und Engineering-Mindset. Besucher erhalten so einen persönlichen Eindruck von einem der Gründer von RelTest.",
      cta: "Podcast anhören",
      href: "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan",
      imageAlt:
        "Dr.-Ing. Kevin Lucan von RelTest Solutions in einem technischen Arbeitsumfeld",
    },
    industries: {
      eyebrow: "Branchen",
      title: "Expertise für anspruchsvolle technische Branchen",
      description:
        "RelTest unterstützt besonders technische B2B-Umfelder mit hohen Anforderungen an Qualität, Lebensdauer, Sicherheit, Verfügbarkeit und Nachweisführung.",
      cta: "Alle Branchen im Detail entdecken",
      imageAlt:
        "Remote-Review mit geteiltem Zuverlässigkeitsdashboard und drei Ingenieuren",
    },
    cta: {
      title: "Expertise für Ihr Projekt",
      description:
        "In einem ersten Gespräch ordnen wir ein, welche fachliche Unterstützung für Ihr Projekt sinnvoll ist.",
      primary: "Projekt besprechen",
      secondary: "Leistungen ansehen",
    },
  },
  en: {
    metaTitle: "Expertise | References, books and podcast",
    metaDescription:
      "References, Springer books, podcast insights and industry contexts show the technical substance behind RelTest Solutions.",
    intro: {
      title: "Industrial experience, research and technical literature.",
      description:
        "RelTest works in demanding technical environments. Industrial references, published books, personal insights and concrete industry applications show how methods and data become robust technical decisions.",
      imageAlt:
        "Technical meeting with reliability dashboard, risk matrix and project data",
    },
    reference: {
      eyebrow: "References",
      title: "Project experience in demanding development environments",
      description:
        "The references show that RelTest works where product reliability, lifetime, testing and robust evidence directly influence project outcomes.",
      cta: "View all references",
      linkLabel: "Open reference website",
    },
    books: {
      eyebrow: "Books",
      title: "Two Springer books",
      cta: "View literature page",
    },
    podcast: {
      eyebrow: "Podcast",
      title: "Kevin Lucan on the Ingenieurshelden podcast",
      description:
        "In the Ingenieurshelden podcast, Managing Director Dr.-Ing. Kevin Lucan talks about his career, technical responsibility and engineering mindset. It gives visitors a personal introduction to one of RelTest's founders.",
      cta: "Listen to the podcast",
      href: "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan",
      imageAlt:
        "Dr.-Ing. Kevin Lucan from RelTest Solutions in a technical working environment",
    },
    industries: {
      eyebrow: "Industries",
      title: "Expertise for demanding technical industries",
      description:
        "RelTest supports technical B2B environments with high requirements for quality, lifetime, safety, availability and evidence.",
      cta: "Explore all industries in detail",
      imageAlt:
        "Remote review with shared reliability dashboard and three engineers",
    },
    cta: {
      title: "Expertise for your project",
      description:
        "In an initial conversation, we assess which technical support is appropriate for your project.",
      primary: "Discuss your project",
      secondary: "View services",
    },
  },
} as const;

function getContent(locale: Locale) {
  return expertiseContent[locale];
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

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/expertise",
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function ExpertisePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const siteContent = getSiteContent(locale);
  const summaryIndustries = getSummaryIndustries(locale);
  const logos = featuredReferences.flatMap((name) => {
    const logo = referenceLogos.find((item) => item.name === name);

    return logo
      ? [{ ...logo, src: featuredReferenceLogoSources[name] ?? logo.src }]
      : [];
  });
  const sectionIds =
    locale === "de"
      ? {
          references: "referenzen",
          books: "fachbuecher",
          industries: "branchen",
        }
      : {
          references: "references",
          books: "books",
          industries: "industries",
        };
  const sectionLinks = [
    {
      label: content.reference.eyebrow,
      href: `#${sectionIds.references}`,
    },
    { label: content.books.eyebrow, href: `#${sectionIds.books}` },
    { label: content.podcast.eyebrow, href: "#podcast" },
    { label: content.industries.eyebrow, href: `#${sectionIds.industries}` },
  ];

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <BrandLineWatermark placement="expertise" />
        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[minmax(0,1.05fr)_minmax(28rem,0.95fr)]">
          <div className="flex min-w-0 flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <h1 className="max-w-4xl hyphens-auto font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem] xl:text-[3.55rem]">
              {content.intro.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76">
              {content.intro.description}
            </p>
            <div className="mt-10 h-1 w-16 bg-brand-steel-cyan" />
          </div>
          <div className="relative min-h-[25rem] border-t border-white/15 lg:min-h-[39rem] lg:border-t-0 lg:border-l">
            <Image
              src="/expertise/decision-dashboard.webp"
              alt={content.intro.imageAlt}
              fill
              preload
              sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,52,.45),transparent_52%)]" />
          </div>
        </div>
        <nav
          aria-label={
            locale === "de" ? "Expertise-Bereiche" : "Expertise sections"
          }
          className="relative border-t border-white/15"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-16 items-center justify-between gap-4 border-r border-b border-white/15 px-5 font-winnstein-display text-sm font-bold transition-colors hover:bg-white/8 sm:border-b-0 sm:px-7"
              >
                {item.label}
                <ArrowIcon />
              </a>
            ))}
          </div>
        </nav>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section
        id={sectionIds.references}
        className="scroll-mt-28 bg-brand-steel-cyan-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
                {content.reference.eyebrow}
              </p>
              <h2 className="mt-4 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
                {content.reference.title}
              </h2>
            </div>
            <div className="lg:border-l lg:border-brand-marine/18 lg:pl-10">
              <p className="max-w-3xl text-base leading-8 text-brand-marine/72">
                {content.reference.description}
              </p>
              <Link
                href={localizeHref(locale, "/referenzen")}
                className="mt-6 inline-flex items-center gap-4 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold"
              >
                {content.reference.cta}
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid border-t border-l border-brand-marine/18 sm:grid-cols-2 lg:grid-cols-3">
            {logos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${content.reference.linkLabel}: ${logo.name}`}
                className="group relative flex min-h-44 items-center justify-center overflow-hidden border-r border-b border-brand-marine/18 bg-white px-8 py-9"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-steel-cyan transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                <span className="relative block h-20 w-full max-w-[14rem]">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    fill
                    className="object-contain"
                    sizes="224px"
                    unoptimized
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id={sectionIds.books}
        className="scroll-mt-28 bg-brand-marine px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-white/20 pb-8">
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {content.books.eyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {content.books.title}
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(19rem,0.8fr)] lg:items-start">
            <div className="brand-panel-cut-bottom-right relative min-h-[20rem] overflow-hidden border border-white/20 sm:min-h-[24rem] lg:min-h-[27rem]">
              <Image
                src="/expertise/books-and-methods.webp"
                alt={
                  locale === "de"
                    ? "Beide RelTest Springer-Fachbücher auf einem Arbeitstisch mit technischen Notizen"
                    : "Both RelTest Springer reference books on a desk with technical notes"
                }
                fill
                showAiDisclosure={false}
                sizes="(min-width: 1024px) 68vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,52,.16),transparent_50%)]" />
            </div>

            <div className="flex flex-col justify-center lg:pl-4">
              {siteContent.books.map((book) => (
                <article
                  key={book.title}
                  className="border-b border-white/18 py-6 first:pt-0"
                >
                  <h3 className="font-winnstein-display text-xl leading-7 font-bold text-white">
                    {book.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {book.subtitle}
                  </p>
                </article>
              ))}
              <Link
                href={localizeHref(locale, "/literatur")}
                className="mt-6 inline-flex w-fit items-center gap-4 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold text-white transition-colors hover:text-brand-steel-cyan"
              >
                {content.books.cta}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="podcast"
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl border-y border-brand-marine/18 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative min-h-[26rem] border-b border-brand-marine/18 lg:min-h-[38rem] lg:border-b-0">
            <Image
              src="/expertise/podcast-recording.png"
              alt={content.podcast.imageAlt}
              fill
              showAiDisclosure={false}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-r from-transparent to-white lg:block" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {content.podcast.eyebrow}
            </p>
            <h2 className="mt-4 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {content.podcast.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-marine/72">
              {content.podcast.description}
            </p>
            <a
              href={content.podcast.href}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-action mt-8 inline-flex min-h-12 w-fit items-center gap-6 bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan"
            >
              {content.podcast.cta}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        id={sectionIds.industries}
        className="scroll-mt-28 bg-brand-steel-cyan-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <div>
            <h2 className="font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {content.industries.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-marine/72">
              {content.industries.description}
            </p>
            <Link
              href={localizeHref(locale, "/branchen")}
              className="group mt-8 inline-flex items-center gap-5 border-b-2 border-brand-steel-cyan pb-2 font-winnstein-display text-sm font-bold transition-colors hover:text-brand-steel-cyan"
            >
              {content.industries.cta}
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>

          <div>
            <div className="relative min-h-[22rem] border border-brand-marine/18 bg-white">
              <Image
                src="/expertise/remote-review.png"
                alt={content.industries.imageAlt}
                fill
                sizes="(min-width: 1024px) 57vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid border-l border-brand-marine/18 sm:grid-cols-2">
              {summaryIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={localizeHref(locale, `/branchen/${industry.slug}`)}
                  className="group flex min-h-20 items-center justify-between gap-5 border-r border-b border-brand-marine/18 bg-white px-6 py-4 transition-colors hover:bg-brand-steel-cyan-10 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset"
                >
                  <span className="font-winnstein-display text-base font-bold">
                    {industry.title}
                  </span>
                  <span className="text-brand-steel-cyan transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageClosingCta
        locale={locale}
        title={content.cta.title}
        description={content.cta.description}
      />
    </main>
  );
}
