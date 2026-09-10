import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";

import { berndUniversityProfileUrl } from "../_content/bernd-publications";
import type { DetailPage } from "../_content/migration-pages";
import { localizeHref, type Locale } from "../_i18n/config";
import { absoluteUrl, siteUrl } from "../_seo/metadata";
import { PageContextBar } from "./page-context-bar";

type PersonProfilePageProps = {
  locale: Locale;
  page: DetailPage;
};

const podcastUrl =
  "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan";
const calendlyUrl = "https://calendly.com/kevin-lucan";

const profileCopy = {
  de: {
    backLabel: "Zurück zu Wir sind RelTest",
    kevin: {
      role: "Geschäftsführer, Gründer und direkter Ansprechpartner",
      narrativeTitle: "Technische Tiefe, die im Projekt ankommt.",
      evidenceTitle: "Kevin im Gespräch.",
      evidenceText:
        "Der Ingenieurshelden-Podcast vermittelt einen persönlichen Eindruck von seinem Werdegang, seiner technischen Denkweise und seinem Verständnis guter Zusammenarbeit.",
      podcastLabel: "Podcast anhören",
      contactLabel: "Termin mit Kevin vereinbaren",
      topicsLabel: "Fachliche Schwerpunkte von Kevin Lucan",
    },
    bernd: {
      role: "Gründer, Mentor und prägender Zuverlässigkeitsexperte",
      narrativeTitle: "Wissen, das die Zuverlässigkeitstechnik geprägt hat.",
      collaborationLabel:
        "Wissenschaft und Praxis · in fachlicher Zusammenarbeit mit RelTest",
      evidenceTitle: "Publizierte Expertise.",
      evidenceText:
        "Fachbücher, Herausgeberschaften und peer-reviewte Beiträge dokumentieren Bernd Bertsches Arbeit von den Grundlagen der Zuverlässigkeitstechnik bis zu moderner Testplanung und nachhaltiger Produktentwicklung.",
      literatureLabel: "Publikationen auf der Literaturseite ansehen",
      contactLabel: "Fachliches Gespräch anfragen",
      topicsLabel: "Fachliche Schwerpunkte von Bernd Bertsche",
    },
  },
  en: {
    backLabel: "Back to About RelTest",
    kevin: {
      role: "Managing Director, founder and direct contact",
      narrativeTitle: "Technical depth that delivers in projects.",
      evidenceTitle: "A conversation with Kevin.",
      evidenceText:
        "The Ingenieurshelden podcast offers a personal impression of his professional path, technical thinking and understanding of effective collaboration.",
      podcastLabel: "Listen to the podcast",
      contactLabel: "Schedule a meeting with Kevin",
      topicsLabel: "Kevin Lucan's areas of expertise",
    },
    bernd: {
      role: "Founder, mentor and leading reliability expert",
      narrativeTitle: "Knowledge that has shaped reliability engineering.",
      collaborationLabel:
        "Research and practice · in technical collaboration with RelTest",
      evidenceTitle: "Published expertise.",
      evidenceText:
        "Books, edited volumes and peer-reviewed papers document Bernd Bertsche's work from the foundations of reliability engineering to modern demonstration planning and sustainable product development.",
      literatureLabel: "View publications on the literature page",
      contactLabel: "Request a technical conversation",
      topicsLabel: "Bernd Bertsche's areas of expertise",
    },
  },
} satisfies Record<Locale, object>;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
    >
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ProfileLink({
  href,
  children,
  external = false,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={
        primary
          ? "brand-action inline-flex min-h-12 items-center justify-center gap-3 bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan"
          : "inline-flex items-center gap-3 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan"
      }
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

function PodcastWaveformGraphic({ locale }: { locale: Locale }) {
  const caption =
    locale === "de"
      ? "Gespräch über Ingenieurpraxis und Verantwortung"
      : "A conversation about engineering practice and responsibility";

  const waveform = [
    18, 26, 15, 35, 22, 42, 28, 54, 32, 45, 24, 36, 60, 86, 52, 30, 48,
    66, 40, 28, 44, 72, 38, 26, 42, 30, 48, 34, 24, 20,
  ];

  return (
    <figure
      aria-label={caption}
      className="flex flex-col justify-center px-6 py-8 sm:px-8 lg:py-10"
    >
      <svg aria-hidden="true" viewBox="0 0 760 270" className="mx-auto w-full max-w-xl" fill="none">
        <g transform="translate(28 39)">
          <rect x="22" y="0" width="70" height="122" rx="35" fill="white" />
          <path d="M22 32h25M22 54h25M22 76h25M67 32h25M67 54h25M67 76h25" stroke="#142452" strokeWidth="8" />
          <path d="M8 75v14c0 35 22 57 49 57s49-22 49-57V75" stroke="#568BE0" strokeWidth="10" strokeLinecap="round" />
          <path d="M57 146v31M27 181h60" stroke="#568BE0" strokeWidth="10" strokeLinecap="round" />
        </g>
        <g transform="translate(180 108)" stroke="#568BE0" strokeWidth="8" strokeLinecap="round">
          {waveform.map((height, index) => {
            const x = index * 18;
            return <path key={`${height}-${index}`} d={`M${x} ${-height / 2}v${height}`} />;
          })}
        </g>
      </svg>
    </figure>
  );
}

export function PersonProfilePage({
  locale,
  page,
}: PersonProfilePageProps) {
  const copy = profileCopy[locale];
  const isKevin = page.slug === "kevin-lucan";
  const personCopy = isKevin ? copy.kevin : copy.bernd;
  const profilePath = `/ueber-uns/${page.slug}`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl(localizeHref(locale, profilePath))}#person`,
    name: page.title,
    jobTitle: personCopy.role,
    description: page.metaDescription,
    image: page.visual ? absoluteUrl(page.visual.src) : undefined,
    url: absoluteUrl(localizeHref(locale, profilePath)),
    sameAs: isKevin ? [podcastUrl] : [berndUniversityProfileUrl],
    worksFor: {
      "@type": "Organization",
      name: "RelTest Solutions GmbH",
      url: siteUrl,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universität Stuttgart",
      url: "https://www.uni-stuttgart.de/",
    },
    knowsAbout: page.proofPoints,
  };

  return (
    <div className="overflow-x-clip bg-white font-winnstein-body text-brand-marine">
      <section className="border-b border-line-soft bg-[linear-gradient(115deg,#ffffff_0%,#ffffff_58%,#e7f3f8_100%)]">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <Link
            href={localizeHref(locale, "/ueber-uns")}
            className="inline-flex items-center gap-3 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan"
          >
            <span aria-hidden="true">←</span>
            {copy.backLabel}
          </Link>

          <div className="mt-10 grid overflow-hidden border border-line-soft bg-white shadow-[0_30px_80px_-50px_rgba(3,19,52,0.52)] lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="font-winnstein-display text-base font-semibold text-brand-steel-cyan">
                {personCopy.role}
              </p>
              <h1 className="mt-4 font-winnstein-display text-[2.35rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-copy-muted">
                {page.description}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-copy-soft">
                {page.lead}
              </p>
              <div className="mt-9">
                <ProfileLink
                  href={
                    isKevin
                      ? calendlyUrl
                      : localizeHref(locale, "/kontakt")
                  }
                  external={isKevin}
                  primary
                >
                  {personCopy.contactLabel}
                </ProfileLink>
              </div>
            </div>

            {page.visual ? (
              <div className="relative min-h-[25rem] lg:min-h-[38rem]">
                <Image
                  src={page.visual.src}
                  alt={page.visual.alt}
                  fill
                  preload
                  quality={90}
                  className="object-cover object-[50%_20%] lg:object-[50%_34%]"
                  sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-marine/25 via-transparent to-transparent" />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <PageContextBar
        locale={locale}
        sectionHref="/ueber-uns"
        sectionLabel={locale === "de" ? "Wir sind RelTest" : "About RelTest"}
        currentLabel={page.title}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-8 px-5 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <h2 className="max-w-3xl font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            {personCopy.narrativeTitle}
          </h2>
          <div aria-hidden="true" className="hidden lg:block" />

          <div className="max-w-3xl space-y-6">
            {page.sections.map((section) => (
              <p
                key={section.title}
                className="text-base leading-8 text-copy-muted"
              >
                {section.body}
              </p>
            ))}
          </div>

          <div className="self-start">
            <ul
              aria-label={personCopy.topicsLabel}
              className="divide-y divide-line-soft border-y border-line-soft"
            >
              {page.proofPoints.map((point) => (
                <li
                  key={point}
                  className="grid grid-cols-[1rem_1fr] items-center gap-4 py-5"
                >
                  <span
                    aria-hidden="true"
                    className="brand-list-dash brand-list-dash-center"
                  />
                  <span className="font-winnstein-display text-base font-semibold leading-6">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {isKevin ? (
        <section className="border-t border-line-soft bg-white">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="brand-panel-cut-bottom-right grid overflow-hidden rounded-tl-2xl bg-brand-marine text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="p-8 sm:p-10 lg:p-12">
                <h2 className="font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                  {personCopy.evidenceTitle}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                  {personCopy.evidenceText}
                </p>
                <div className="mt-8">
                  <Link
                    href={podcastUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-action inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 py-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:bg-brand-steel-cyan-10"
                  >
                    {copy.kevin.podcastLabel}
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
              <PodcastWaveformGraphic locale={locale} />
            </div>
          </div>
        </section>
      ) : (
        <section
          id={locale === "de" ? "fachbuecher" : "books"}
          className="scroll-mt-28 border-y border-line-soft bg-surface-muted"
        >
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="brand-panel-cut-bottom-right bg-brand-marine p-8 text-white sm:p-10 lg:p-12">
              <p className="font-winnstein-display text-sm font-semibold leading-6 text-brand-steel-cyan">
                {copy.bernd.collaborationLabel}
              </p>
              <h2 className="mt-3 font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                {personCopy.evidenceTitle}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">
                {personCopy.evidenceText}
              </p>
              <Link
                href={`${localizeHref(locale, "/literatur")}#bernd-bertsche-publications`}
                className="brand-action mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 py-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:bg-brand-steel-cyan-10"
              >
                {copy.bernd.literatureLabel}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
