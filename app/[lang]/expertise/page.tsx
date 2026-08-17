import Link from "next/link";

import { AiAwareImage as Image } from "../../_components/ai-aware-image";
import { BrandLineWatermark } from "../../_components/brand-line-watermark";
import { referenceLogos } from "../../_content/site-content";
import { PageClosingCta } from "../../_components/page-closing-cta";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

function BookHotspotIcon({ number }: { number: 1 | 2 }) {
  return (
    <span className="relative grid size-9 place-items-center transition-transform duration-200 group-hover/book-hotspot:scale-110 group-focus-visible/book-hotspot:scale-110 group-focus-visible/book-hotspot:outline-none group-focus-visible/book-hotspot:ring-4 group-focus-visible/book-hotspot:ring-white/70 sm:size-10">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 42.52 42.52"
        fill="none"
      >
        <path
          fill="#142553"
          d="M42.52,14.62V0S10.94,0,10.94,0C4.9,0,0,4.89,0,10.94v2.14s.03.02.04.04v3.06s-.03-.02-.04-.03v4.79h.04S.04,23.34.04,23.34H0v10.22s.03,0,.04,0v2.41s-.03,0-.04,0v6.55h34.34l8.17-8.03s-.01,0-.02,0v-2.43s.02,0,.02,0v-15.02h-.02s0-2.41,0-2.41h.02Z"
        />
      </svg>
      <span
        aria-hidden="true"
        className="relative -translate-y-px font-winnstein-display text-[1.85rem] leading-none font-bold text-white sm:text-[2rem]"
      >
        {number}
      </span>
    </span>
  );
}

const featuredReferences = [
  "Bosch",
  "Mercedes-Benz",
  "Porsche",
  "Stihl",
  "ZEISS",
  "ZF",
] as const;

const expertiseContent = {
  de: {
    metaTitle: "Expertise | Referenzen, Literatur und Podcast",
    metaDescription:
      "Referenzen, Springer-Fachbücher, Podcast und Branchenkontexte zeigen die fachliche Substanz hinter RelTest Solutions.",
    intro: {
      title: "Fachliche Substanz, die über reine Leistungsversprechen hinausgeht.",
      description:
        "RelTest arbeitet in anspruchsvollen technischen Kontexten. Diese Seite bündelt ausgewählte Vertrauenssignale: industrielle Referenzen, veröffentlichte Fachbücher, persönliche Einblicke und Branchen, in denen Zuverlässigkeit messbar entscheidend ist.",
    },
    proof: {
      eyebrow: "Kompetenz in der Anwendung",
      title:
        "Expertise wird sichtbar, wenn Daten, Produkt und Entscheidung zusammenkommen.",
      description:
        "RelTest verbindet technische Bewertung, methodische Diskussion und nachvollziehbare Ergebnisse. Entscheidend ist nicht die einzelne Methode, sondern ihr belastbarer Einsatz im Projekt.",
      items: [
        "Zuverlässigkeit technisch bewerten",
        "Ergebnisse entscheidbar machen",
        "Fachwissen nachvollziehbar belegen",
      ],
      imageAlt:
        "Technisches Meeting mit Zuverlässigkeitsdashboard, Risikomatrix und Projektdaten",
    },
    reference: {
      eyebrow: "Referenzen",
      title: "Industrieerfahrung in anspruchsvollen Entwicklungsumfeldern",
      description:
        "Die Referenzen zeigen, dass RelTest dort arbeitet, wo Produktzuverlässigkeit, Lebensdauer, Erprobung und belastbare Nachweise echte Projektwirkung haben.",
      cta: "Alle Referenzen ansehen",
      linkLabel: "Referenzwebsite öffnen",
      imageAlt:
        "Industriegruppe bespricht Zuverlässigkeitsdaten im Prüfumfeld",
    },
    books: {
      eyebrow: "Literatur",
      title: "Veröffentlichte Expertise statt reiner Marketingaussage",
      description:
        "Die Springer-Fachbücher machen die methodische Tiefe sichtbar, auf der Beratung, Schulung und technische Absicherung bei RelTest aufbauen.",
      cta: "Zur Literaturseite",
      externalLabel: "Springer-Buchseite öffnen",
      items: [
        {
          title:
            "Zuverlässigkeitstests für eine effiziente und entwicklungsbegleitende Absicherung",
          subtitle: "Testplanung, Testauswertung und Zuverlässigkeitsnachweis",
          cover: "/book-reliability-tests-cover.webp",
          href: "https://link.springer.com/book/9783662729663",
          alt: "Cover des Springer-Fachbuchs Zuverlässigkeitstests für eine effiziente und entwicklungsbegleitende Absicherung",
        },
        {
          title: "Zuverlässigkeit im Fahrzeug- und Maschinenbau",
          subtitle: "Ermittlung von Bauteil- und System-Zuverlässigkeiten",
          cover: "/book-reliability-cover.jpg",
          href: "https://link.springer.com/book/10.1007/978-3-662-65024-0",
          alt: "Cover des Springer-Fachbuchs Zuverlässigkeit im Fahrzeug- und Maschinenbau",
        },
      ],
    },
    podcast: {
      eyebrow: "Podcast",
      title: "Ein persönlicher Einstieg in Denkweise und Haltung",
      description:
        "Im Podcast der Ingenieurshelden spricht Geschäftsführer Dr.-Ing. Kevin Lucan über Werdegang, technische Verantwortung und Engineering-Mindset. Für Besucher ist das ein guter erster Kontakt mit der Person hinter RelTest.",
      cta: "Podcast anhören",
      href: "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan",
      imageAlt:
        "Dr.-Ing. Kevin Lucan von RelTest Solutions in einem technischen Arbeitsumfeld",
    },
    industries: {
      eyebrow: "Branchen",
      title:
        "Relevant überall dort, wo Ausfälle teuer, kritisch oder erklärungsbedürftig sind",
      description:
        "RelTest unterstützt besonders technische B2B-Umfelder mit hohen Anforderungen an Qualität, Lebensdauer, Sicherheit, Verfügbarkeit und Nachweisführung.",
      ctaHint:
        "Branchenspezifische Anforderungen, typische Risiken und passende RelTest-Leistungen",
      cta: "Alle Branchen im Detail entdecken",
      imageAlt:
        "Remote-Review mit geteiltem Zuverlässigkeitsdashboard und drei Ingenieuren",
      items: [
        "Automotive",
        "Maschinenbau",
        "Elektronik",
        "Medizintechnik",
        "Erneuerbare Energien",
        "Luft- und Raumfahrt",
      ],
    },
    cta: {
      title: "Passt diese Expertise zu Ihrer technischen Fragestellung?",
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
      title: "Technical substance that goes beyond service claims.",
      description:
        "RelTest works in demanding technical environments. This page brings together selected trust signals: industrial references, published technical books, personal insights and industries where reliability has measurable impact.",
    },
    proof: {
      eyebrow: "Expertise in application",
      title:
        "Expertise becomes visible where data, product and decision meet.",
      description:
        "RelTest combines technical assessment, methodological discussion and traceable results. What matters is not the individual method, but its robust use in the project.",
      items: [
        "Assess reliability technically",
        "Make results decision-ready",
        "Demonstrate expertise credibly",
      ],
      imageAlt:
        "Technical meeting with reliability dashboard, risk matrix and project data",
    },
    reference: {
      eyebrow: "References",
      title: "Industrial experience in demanding development environments",
      description:
        "The references show that RelTest works where product reliability, lifetime, testing and robust evidence directly influence project outcomes.",
      cta: "View all references",
      linkLabel: "Open reference website",
      imageAlt:
        "Industrial team discussing reliability data in a test environment",
    },
    books: {
      eyebrow: "Books",
      title: "Published expertise instead of pure marketing claims",
      description:
        "The Springer books make visible the methodological depth behind RelTest's consulting, training and technical validation work.",
      cta: "View literature page",
      externalLabel: "Open Springer book page",
      items: [
        {
          title:
            "Reliability tests for efficient development-accompanying validation",
          subtitle: "Test planning, test evaluation and reliability demonstration",
          cover: "/book-reliability-tests-cover.webp",
          href: "https://link.springer.com/book/9783662729663",
          alt: "Cover of the Springer book on reliability tests for efficient development-accompanying validation",
        },
        {
          title: "Reliability in automotive and mechanical engineering",
          subtitle: "Determining component and system reliability",
          cover: "/book-reliability-cover.jpg",
          href: "https://link.springer.com/book/10.1007/978-3-662-65024-0",
          alt: "Cover of the Springer book Reliability in Automotive and Mechanical Engineering",
        },
      ],
    },
    podcast: {
      eyebrow: "Podcast",
      title: "A personal entry point into mindset and engineering attitude",
      description:
        "In the Ingenieurshelden podcast, Managing Director Dr.-Ing. Kevin Lucan talks about his career, technical responsibility and engineering mindset. It gives visitors a first personal impression of the people behind RelTest.",
      cta: "Listen to the podcast",
      href: "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan",
      imageAlt:
        "Dr.-Ing. Kevin Lucan from RelTest Solutions in a technical working environment",
    },
    industries: {
      eyebrow: "Industries",
      title:
        "Relevant wherever failures are costly, critical or require explanation",
      description:
        "RelTest supports technical B2B environments with high requirements for quality, lifetime, safety, availability and evidence.",
      ctaHint:
        "Industry-specific requirements, typical risks and matching RelTest services",
      cta: "Explore all industries in detail",
      imageAlt:
        "Remote review with shared reliability dashboard and three engineers",
      items: [
        "Automotive",
        "Mechanical engineering",
        "Electronics",
        "Medical technology",
        "Renewable energy",
        "Aerospace",
      ],
    },
    cta: {
      title: "Does this expertise match your technical challenge?",
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
  const logos = featuredReferences.flatMap((name) => {
    const logo = referenceLogos.find((item) => item.name === name);

    return logo ? [logo] : [];
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
              src="/expertise/decision-dashboard.png"
              alt={content.proof.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
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
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-16 items-center justify-between gap-4 border-r border-b border-white/15 px-5 font-winnstein-display text-sm font-bold transition-colors hover:bg-white/8 sm:border-b-0 sm:px-7"
              >
                {item.label}
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </nav>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl border-y border-brand-marine/18 lg:grid-cols-[minmax(0,1.12fr)_minmax(24rem,0.88fr)]">
          <div className="relative min-h-[28rem] border-b border-brand-marine/18 lg:min-h-[42rem] lg:border-r lg:border-b-0">
            <Image
              src="/expertise/lab-review.png"
              alt={content.reference.imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,19,52,.2),transparent_45%)]" />
          </div>
          <div className="flex flex-col justify-center bg-brand-steel-cyan-10 p-7 sm:p-10 lg:p-12">
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {content.proof.eyebrow}
            </p>
            <h2 className="mt-4 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {content.proof.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-marine/72">
              {content.proof.description}
            </p>
            <ol className="mt-9 border-t border-brand-marine/18">
              {content.proof.items.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[3rem_1fr] items-center gap-4 border-b border-brand-marine/18 py-5"
                >
                  <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                    0{index + 1}
                  </span>
                  <span className="font-winnstein-display text-lg font-bold">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
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
                <span
                  className={
                    logo.name === "ZEISS"
                      ? "relative block h-24 w-24"
                      : "relative block h-16 w-full max-w-[13rem]"
                  }
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    fill
                    className="object-contain"
                    sizes="210px"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id={sectionIds.books}
        className="scroll-mt-28 bg-brand-marine px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-white/20 pb-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
                {content.books.eyebrow}
              </p>
              <h2 className="mt-4 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
                {content.books.title}
              </h2>
            </div>
            <div className="lg:border-l lg:border-white/20 lg:pl-10">
              <p className="max-w-3xl text-base leading-8 text-white/72">
                {content.books.description}
              </p>
              <Link
                href={localizeHref(locale, "/literatur")}
                className="mt-6 inline-flex items-center gap-4 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold text-white"
              >
                {content.books.cta}
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid border border-white/20 lg:grid-cols-[minmax(0,1.25fr)_minmax(23rem,0.75fr)]">
            <div className="relative min-h-[24rem] border-b border-white/20 lg:min-h-[34rem] lg:border-r lg:border-b-0">
              <Image
                src="/expertise/books-and-methods.png"
                alt={
                  locale === "de"
                    ? "Beide RelTest Springer-Fachbücher auf einem Arbeitstisch mit technischen Notizen"
                    : "Both RelTest Springer reference books on a desk with technical notes"
                }
                fill
                showAiDisclosure={false}
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,52,.12),transparent_55%)]" />
              {content.books.items.map((book, index) => {
                const hotspotPosition =
                  index === 0
                    ? "top-[23%] left-[63%]"
                    : "top-[16%] left-[27%]";

                return (
                  <a
                    key={book.href}
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${content.books.externalLabel}: ${book.title}`}
                    className={`group/book-hotspot absolute z-10 -translate-x-1/2 -translate-y-1/2 ${hotspotPosition}`}
                  >
                    <BookHotspotIcon number={index === 0 ? 1 : 2} />

                    <span
                      className={`pointer-events-none absolute top-[calc(100%+1rem)] z-20 w-64 border border-brand-marine/15 bg-white p-4 text-left text-brand-marine opacity-0 shadow-[0_18px_45px_rgba(3,19,52,.24)] transition-all duration-200 group-hover/book-hotspot:translate-y-0 group-hover/book-hotspot:opacity-100 group-focus-visible/book-hotspot:translate-y-0 group-focus-visible/book-hotspot:opacity-100 ${
                        index === 0
                          ? "right-0 translate-y-2"
                          : "left-0 translate-y-2"
                      }`}
                    >
                      <strong className="block font-winnstein-display text-sm leading-5 font-bold">
                        {book.title}
                      </strong>
                      <span className="mt-2 flex items-center justify-between gap-4 text-xs font-semibold text-brand-steel-cyan">
                        {content.books.externalLabel}
                        <ArrowIcon />
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
            <div className="bg-white text-brand-marine">
              {content.books.items.map((book, index) => (
                <article
                  key={book.href}
                  className="flex min-h-64 flex-col justify-between border-b border-brand-marine/18 p-7 last:border-b-0 sm:p-9"
                >
                  <div>
                    <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 font-winnstein-display text-xl leading-snug font-bold">
                      {book.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-brand-marine/68">
                      {book.subtitle}
                    </p>
                  </div>
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${content.books.externalLabel}: ${book.title}`}
                    className="mt-6 inline-flex w-fit items-center gap-4 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold"
                  >
                    {content.books.externalLabel}
                    <ArrowIcon />
                  </a>
                </article>
              ))}
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
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {content.industries.eyebrow}
            </p>
            <h2 className="mt-4 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {content.industries.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-marine/72">
              {content.industries.description}
            </p>
            <p className="mt-8 max-w-xl font-winnstein-display text-base leading-7 font-bold">
              {content.industries.ctaHint}
            </p>
            <Link
              href={localizeHref(locale, "/branchen")}
              className="brand-action group mt-4 inline-flex min-h-14 items-center justify-between gap-8 bg-brand-marine px-7 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan"
            >
              {content.industries.cta}
              <span className="text-brand-steel-cyan transition-all group-hover:translate-x-1 group-hover:text-white">
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
              {content.industries.items.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center gap-5 border-r border-b border-brand-marine/18 bg-white px-6 py-4"
                >
                  <span className="font-winnstein-display text-xs font-bold text-brand-steel-cyan">
                    0{index + 1}
                  </span>
                  <span className="font-winnstein-display text-base font-bold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageClosingCta
        title={content.cta.title}
        description={content.cta.description}
        primary={{
          href: localizeHref(locale, "/kontakt"),
          label: content.cta.primary,
        }}
        secondary={{
          href: localizeHref(locale, "/leistungen"),
          label: content.cta.secondary,
        }}
      />
    </main>
  );
}
