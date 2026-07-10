import Image from "next/image";
import Link from "next/link";

import { referenceLogos } from "../../_content/site-content";
import { PageIntro } from "../../_components/page-intro";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

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
      eyebrow: "Expertise",
      title: "Fachliche Substanz, die über reine Leistungsversprechen hinausgeht.",
      description:
        "RelTest arbeitet in anspruchsvollen technischen Kontexten. Diese Seite bündelt ausgewählte Vertrauenssignale: industrielle Referenzen, veröffentlichte Fachbücher, persönliche Einblicke und Branchen, in denen Zuverlässigkeit messbar entscheidend ist.",
    },
    reference: {
      eyebrow: "Referenzen",
      title: "Industrieerfahrung in anspruchsvollen Entwicklungsumfeldern",
      description:
        "Die Referenzen zeigen, dass RelTest dort arbeitet, wo Produktzuverlässigkeit, Lebensdauer, Erprobung und belastbare Nachweise echte Projektwirkung haben.",
      cta: "Alle Referenzen ansehen",
      linkLabel: "Referenzwebsite öffnen",
    },
    books: {
      eyebrow: "Literatur",
      title: "Veröffentlichte Expertise statt reiner Marketingaussage",
      description:
        "Die Springer-Fachbücher machen die methodische Tiefe sichtbar, auf der Beratung, Schulung und technische Absicherung bei RelTest aufbauen.",
      cta: "Zur Literaturseite",
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
      title: "Relevant überall dort, wo Ausfälle teuer, kritisch oder erklärungsbedürftig sind",
      description:
        "RelTest unterstützt besonders technische B2B-Umfelder mit hohen Anforderungen an Qualität, Lebensdauer, Sicherheit, Verfügbarkeit und Nachweisführung.",
      cta: "Branchen ansehen",
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
      title: "Sie möchten prüfen, ob diese Expertise zu Ihrem Projekt passt?",
      description:
        "Ein kurzes Gespräch klärt, ob Beratung, Weiterbildung oder eine langfristige Kooperation der richtige nächste Schritt ist.",
      primary: "Projekt besprechen",
      secondary: "Leistungen ansehen",
    },
  },
  en: {
    metaTitle: "Expertise | References, books and podcast",
    metaDescription:
      "References, Springer books, podcast insights and industry contexts show the technical substance behind RelTest Solutions.",
    intro: {
      eyebrow: "Expertise",
      title: "Technical substance that goes beyond service claims.",
      description:
        "RelTest works in demanding technical environments. This page brings together selected trust signals: industrial references, published technical books, personal insights and industries where reliability has measurable impact.",
    },
    reference: {
      eyebrow: "References",
      title: "Industrial experience in demanding development environments",
      description:
        "The references show that RelTest works where product reliability, lifetime, testing and robust evidence directly influence project outcomes.",
      cta: "View all references",
      linkLabel: "Open reference website",
    },
    books: {
      eyebrow: "Books",
      title: "Published expertise instead of pure marketing claims",
      description:
        "The Springer books make visible the methodological depth behind RelTest's consulting, training and technical validation work.",
      cta: "View literature page",
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
      title: "Relevant wherever failures are costly, critical or require explanation",
      description:
        "RelTest supports technical B2B environments with high requirements for quality, lifetime, safety, availability and evidence.",
      cta: "View industries",
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
      title: "Would you like to assess whether this expertise fits your project?",
      description:
        "A short conversation clarifies whether consulting, training or a long-term partnership is the right next step.",
      primary: "Discuss your project",
      secondary: "View services",
    },
  },
} as const;

function getContent(locale: Locale) {
  return expertiseContent[locale];
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
  const visual = {
    proof:
      locale === "de"
        ? {
            eyebrow: "Kompetenz in der Anwendung",
            title:
              "Expertise wird sichtbar, wenn Daten, Produkt und Entscheidung zusammenkommen.",
            description:
              "Die neuen Bildwelten zeigen RelTest nicht abstrakt, sondern in typischen Situationen: technische Bewertung, methodische Diskussion, veröffentlichte Fachliteratur und persönliche Einblicke.",
            cards: [
              "Zuverlässigkeit technisch bewerten",
              "Ergebnisse entscheidbar machen",
              "Fachwissen nachvollziehbar belegen",
            ],
            alt: "Technisches Meeting mit Zuverlässigkeitsdashboard, Risikomatrix und Projektdaten",
          }
        : {
            eyebrow: "Expertise in application",
            title:
              "Expertise becomes visible where data, product and decision meet.",
            description:
              "The new visuals show RelTest in typical situations: technical assessment, methodological discussion, published expertise and personal insights.",
            cards: [
              "Assess reliability technically",
              "Make results decision-ready",
              "Demonstrate expertise credibly",
            ],
            alt: "Technical meeting with reliability dashboard, risk matrix and project data",
          },
    referenceAlt:
      locale === "de"
        ? "Industriegruppe bespricht Zuverlässigkeitsdaten im Prüfumfeld"
        : "Industrial team discussing reliability data in a test environment",
    booksAlt:
      locale === "de"
        ? "Springer-Fachbücher mit technischen Notizen und Lebensdauerdiagramm"
        : "Springer reference books with technical notes and lifetime diagram",
    remoteAlt:
      locale === "de"
        ? "Remote-Review mit geteiltem Zuverlässigkeitsdashboard und drei Ingenieuren"
        : "Remote review with shared reliability dashboard and three engineers",
  };

  return (
    <>
      <PageIntro
        eyebrow={content.intro.eyebrow}
        title={content.intro.title}
        description={content.intro.description}
      />

      <section className="bg-[linear-gradient(180deg,#f8fbfd_0%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
              {visual.proof.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              {visual.proof.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {visual.proof.description}
            </p>
            <div className="mt-8 grid gap-3">
              {visual.proof.cards.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cyan-100 bg-white/80 px-5 py-4 text-sm font-black tracking-[-0.01em] text-slate-900 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white bg-slate-100 shadow-2xl shadow-slate-300/70 ring-1 ring-slate-200">
            <Image
              src="/expertise/decision-dashboard.png"
              alt={visual.proof.alt}
              width={1680}
              height={945}
              priority
              className="aspect-[1.72] h-full w-full object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/28 via-transparent to-white/8" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-20">
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
              {content.reference.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {content.reference.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {content.reference.description}
            </p>
            <Link
              href={localizeHref(locale, "/referenzen")}
              className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
            >
              {content.reference.cta}
            </Link>
          </div>

          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/80">
              <Image
                src="/expertise/lab-review.png"
                alt={visual.referenceAlt}
                width={1680}
                height={945}
                className="aspect-[1.9] h-full w-full object-cover"
                sizes="(min-width: 1024px) 64vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/34 via-transparent to-transparent" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {logos.map((logo) => (
                <Link
                  key={logo.name}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${content.reference.linkLabel}: ${logo.name}`}
                  className="group flex min-h-36 items-center justify-center rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/80"
                >
                  <span className="relative block h-16 w-full">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} Logo`}
                      fill
                      className="object-contain transition duration-200 group-hover:scale-105"
                      sizes="180px"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fbfd_0%,#eef5f8_100%)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
                {content.books.eyebrow}
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                {content.books.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {content.books.description}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-slate-100 shadow-xl shadow-slate-300/60 ring-1 ring-slate-200/70">
              <Image
                src="/expertise/books-and-methods.png"
                alt={visual.booksAlt}
                width={1680}
                height={945}
                className="aspect-[1.9] h-full w-full object-cover"
                sizes="(min-width: 1024px) 56vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/18 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {content.books.items.map((book) => (
              <article
                key={book.href}
                className="grid gap-7 rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-sm ring-1 ring-slate-200/70 backdrop-blur sm:grid-cols-[10rem_1fr] sm:p-7"
              >
                <Link
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[0.68] w-36 overflow-hidden rounded-sm shadow-2xl shadow-slate-300/80 sm:w-full"
                >
                  <Image
                    src={book.cover}
                    alt={book.alt}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </Link>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {book.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {book.subtitle}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                    >
                      Springer-Link
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Link
            href={localizeHref(locale, "/literatur")}
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
          >
            {content.books.cta}
          </Link>
        </div>
      </section>

      <section id="podcast" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid overflow-hidden rounded-[2.2rem] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-300 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[22rem]">
            <Image
              src="/expertise/podcast-recording.png"
              alt={content.podcast.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
          </div>
          <div className="p-8 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
              {content.podcast.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              {content.podcast.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {content.podcast.description}
            </p>
            <Link
              href={content.podcast.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
            >
              {content.podcast.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
              {content.industries.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {content.industries.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {content.industries.description}
            </p>
            <Link
              href={localizeHref(locale, "/branchen")}
              className="mt-8 inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
            >
              {content.industries.cta}
            </Link>
          </div>
          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/70">
              <Image
                src="/expertise/remote-review.png"
                alt={visual.remoteAlt}
                width={1680}
                height={945}
                className="aspect-[1.9] h-full w-full object-cover"
                sizes="(min-width: 1024px) 64vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.industries.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 text-lg font-semibold tracking-[-0.02em] text-slate-950"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                {content.cta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                {content.cta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={localizeHref(locale, "/kontakt")}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                {content.cta.primary}
              </Link>
              <Link
                href={localizeHref(locale, "/leistungen")}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
              >
                {content.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
