import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";

import type { DetailPage } from "../_content/migration-pages";
import { localizeHref, type Locale } from "../_i18n/config";
import { absoluteUrl, siteUrl } from "../_seo/metadata";

type PersonProfilePageProps = {
  locale: Locale;
  page: DetailPage;
};

const podcastUrl =
  "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan";
const calendlyUrl = "https://calendly.com/kevin-lucan";
const reliabilityTestsBookUrl =
  "https://link.springer.com/book/9783662729663";
const reliabilityBookUrl =
  "https://link.springer.com/book/10.1007/978-3-662-65024-0";

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
      evidenceTitle: "Publizierte Expertise.",
      evidenceText:
        "Die beiden Springer-Fachbücher machen die methodische Arbeit nachvollziehbar und übertragen Forschungserkenntnisse in die industrielle Anwendung.",
      booksLabel: "Fachbücher von Bernd Bertsche",
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
      evidenceTitle: "Published expertise.",
      evidenceText:
        "The two Springer reference books make the methodological work tangible and transfer research findings into industrial application.",
      booksLabel: "Reference books by Bernd Bertsche",
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

function PodcastWave() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 130"
      className="h-auto w-full"
      fill="none"
    >
      <path
        d="M4 66h36l18-24 24 62 28-88 28 102 30-74 28 46 30-34 28 18 32-48 34 74 30-62 30 50 28-34 28 18h54"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
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
    "@id": absoluteUrl(`/${locale}${profilePath}#person`),
    name: page.title,
    jobTitle: personCopy.role,
    description: page.metaDescription,
    image: page.visual ? absoluteUrl(page.visual.src) : undefined,
    url: absoluteUrl(`/${locale}${profilePath}`),
    sameAs: isKevin ? [podcastUrl] : undefined,
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
                  priority
                  className={`object-cover ${
                    isKevin
                      ? "object-[50%_8%] lg:object-[50%_10%]"
                      : "object-[50%_20%] lg:object-[50%_34%]"
                  }`}
                  sizes="(min-width: 1024px) 43vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-marine/25 via-transparent to-transparent" />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <h2 className="max-w-3xl font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {personCopy.narrativeTitle}
            </h2>
            <div className="mt-8 max-w-3xl space-y-6">
              {page.sections.map((section) => (
                <p
                  key={section.title}
                  className="text-base leading-8 text-copy-muted"
                >
                  {section.body}
                </p>
              ))}
            </div>
          </div>

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
      </section>

      {isKevin ? (
        <section className="bg-brand-marine text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8 lg:py-20">
            <div>
              <h2 className="font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                {personCopy.evidenceTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
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
            <div className="border-y border-white/18 py-7 text-brand-steel-cyan">
              <PodcastWave />
            </div>
          </div>
        </section>
      ) : (
        <section className="border-y border-line-soft bg-surface-muted">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-8 lg:py-20">
            <div>
              <h2 className="font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                {personCopy.evidenceTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-copy-muted">
                {personCopy.evidenceText}
              </p>
              <div className="mt-8">
                <ProfileLink href={localizeHref(locale, "/expertise#fachbuecher")}>
                  {locale === "de" ? "Alle Fachbücher" : "All reference books"}
                </ProfileLink>
              </div>
            </div>

            <div
              aria-label={copy.bernd.booksLabel}
              className="grid grid-cols-2 divide-x divide-line-soft border border-line-soft bg-white"
            >
              <Link
                href={reliabilityTestsBookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[25rem] items-center justify-center p-6 transition-colors hover:bg-brand-steel-cyan-10 sm:p-8"
              >
                <Image
                  src="/book-reliability-tests-cover.webp"
                  alt="Zuverlässigkeitstests für eine effiziente und entwicklungsbegleitende Absicherung von Bauteilen und Systemen"
                  width={368}
                  height={504}
                  className="h-auto max-h-[23rem] w-auto shadow-[0_20px_35px_-20px_rgba(3,19,52,0.55)] transition-transform duration-500 group-hover:-translate-y-1"
                />
              </Link>
              <Link
                href={reliabilityBookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[25rem] items-center justify-center p-6 transition-colors hover:bg-brand-steel-cyan-10 sm:p-8"
              >
                <Image
                  src="/book-reliability-cover.jpg"
                  alt="Zuverlässigkeit im Fahrzeug- und Maschinenbau"
                  width={478}
                  height={683}
                  className="h-auto max-h-[23rem] w-auto shadow-[0_20px_35px_-20px_rgba(3,19,52,0.55)] transition-transform duration-500 group-hover:-translate-y-1"
                />
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
