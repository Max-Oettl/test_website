import Image from "next/image";
import Link from "next/link";

import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import {
  absoluteUrl,
  buildLocalizedMetadata,
  siteUrl,
} from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

type LeaderProfile = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  introduction: string;
  facts: string[];
  profileHref: string;
  profileLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  secondaryExternal?: boolean;
};

type TeamProfile = {
  name: string;
  field: string;
  summary: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
};

const podcastUrl =
  "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan";
const calendlyUrl = "https://calendly.com/kevin-lucan";
const linkedInUrl = "https://www.linkedin.com/company/reltest-solutions";
const marcoArndtResearchUrl =
  "https://www.ima.uni-stuttgart.de/forschung/zuverlaessigkeitstechnik/projekte/lebensdauermodellzahnriemen/";
const dshamilEfingerProfileUrl =
  "https://www.sfb1244.uni-stuttgart.de/team/Efinger-00001/";
const kimHintzPublicationsUrl =
  "https://www.ima.uni-stuttgart.de/archiv/forschung/zuverlaessigkeit/publikationen/";

const aboutContent: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    hero: {
      title: string;
      description: string;
      principles: string[];
    };
    leadership: {
      title: string;
      description: string;
      profiles: LeaderProfile[];
    };
    podcast: {
      label: string;
      title: string;
      description: string;
      linkLabel: string;
      contactLabel: string;
      durationLabel: string;
    };
    team: {
      title: string;
      description: string;
      imageAlt: string;
      profiles: TeamProfile[];
      moreTitle: string;
      moreDescription: string;
      linkedInLabel: string;
      expertiseLabel: string;
    };
    cta: {
      title: string;
      description: string;
      primaryLabel: string;
      secondaryLabel: string;
    };
  }
> = {
  de: {
    metaTitle: "Wir sind RelTest | Menschen und Expertise",
    metaDescription:
      "Lernen Sie die Menschen hinter RelTest Solutions und ihre Expertise in Zuverlässigkeitstechnik, DoE, Erprobung und Datenanalyse kennen.",
    hero: {
      title: "Wir sind RelTest.",
      description:
        "Wir verbinden wissenschaftliche Tiefe mit Verantwortung für reale Entwicklungsentscheidungen. Im Projekt arbeiten Sie direkt mit Menschen, die technische Zusammenhänge verständlich machen und Entscheidungen belastbar vorbereiten.",
      principles: [
        "Persönlich ansprechbar",
        "Wissenschaftlich fundiert",
        "Industriell erfahren",
      ],
    },
    leadership: {
      title: "Verantwortung hat bei RelTest ein Gesicht.",
      description:
        "Dr.-Ing. Kevin Lucan und Prof. Dr.-Ing. Bernd Bertsche verbinden direkte Verantwortung im Kundenprojekt mit jahrzehntelang gewachsener Fachautorität.",
      profiles: [
        {
          name: "Dr.-Ing. Kevin Lucan",
          role: "Geschäftsführer, Gründer und direkter Ansprechpartner",
          image: "/about/kevin-lucan-professional.webp",
          imageAlt:
            "Dr.-Ing. Kevin Lucan, Geschäftsführer von RelTest Solutions",
          introduction:
            "Kevin Lucan führt RelTest Solutions und begleitet Unternehmen von der technischen Fragestellung bis zur belastbaren Entwicklungsentscheidung.",
          facts: [
            "Studium und stellvertretende Leitung der Zuverlässigkeitstechnik am IMA der Universität Stuttgart.",
            "Mitarbeit in DKE/K 132 und an der IEC 62506 für beschleunigte Produkttests.",
            "Methodik für repräsentative Lastkollektive und Leitung eines Arbeitskreises zur Nutzfahrzeugbremse.",
            "Beratung zu Zuverlässigkeitsprozessen, Erprobungsstrategien, Felddaten und DoE.",
          ],
          profileHref: "/ueber-uns/kevin-lucan",
          profileLabel: "Profil von Kevin Lucan",
          secondaryHref: calendlyUrl,
          secondaryLabel: "Termin mit Kevin",
          secondaryExternal: true,
        },
        {
          name: "Prof. Dr.-Ing. Bernd Bertsche",
          role: "Gründer, Mentor und fachlicher Wissensträger",
          image: "/about/bernd-bertsche-professional.webp",
          imageAlt:
            "Prof. Dr.-Ing. Bernd Bertsche, Gründer und fachlicher Berater von RelTest Solutions",
          introduction:
            "Bernd Bertsche zählt zu den prägenden deutschen Experten der Zuverlässigkeitstechnik und bringt wissenschaftliche Tiefe, Industrieerfahrung und jahrzehntelange Verantwortung in RelTest ein.",
          facts: [
            "Aufbau des Forschungsgebiets Zuverlässigkeitstechnik und langjährige Institutsleitung am IMA.",
            "Ausgezeichnet mit dem Forschungspreis von FAG Kugelfischer, dem VDI-Ehrenring und als Top-Experte beim Deutschen Gründerpreis.",
            "Neun Fachbücher, rund 300 nationale und internationale Publikationen sowie vier Patente.",
            "Leitende Facharbeit in DFG, VDI und DKE sowie Transfer zwischen Forschung und Industrie.",
          ],
          profileHref: "/ueber-uns/bernd-bertsche",
          profileLabel: "Profil von Bernd Bertsche",
          secondaryHref: "/expertise#fachbuecher",
          secondaryLabel: "Fachbücher ansehen",
        },
      ],
    },
    podcast: {
      label: "Ingenieurshelden-Podcast",
      title: "Kevin Lucan im Gespräch.",
      description:
        "Im Podcast spricht Kevin über seinen Weg, technische Verantwortung und die Zusammenarbeit in anspruchsvollen Entwicklungsprojekten. Ein persönlicher Einstieg, bevor wir miteinander sprechen.",
      linkLabel: "Podcast anhören",
      contactLabel: "Termin mit Kevin",
      durationLabel: "Gespräch über Ingenieurpraxis und Verantwortung",
    },
    team: {
      title: "Drei Perspektiven. Ein Team.",
      description:
        "Drei ausgewählte Profile zeigen, welche fachlichen Perspektiven in unseren Projekten zusammenkommen. Die weiteren Piktogramme stehen für das gesamte Team hinter RelTest.",
      imageAlt:
        "Drei ausgewählte RelTest-Experten als Piktogramme vor dem weiteren Team",
      profiles: [
        {
          name: "Kim Hintz",
          field: "Technisches Risikomanagement und Zuverlässigkeitsabsicherung",
          summary:
            "Kim Hintz berät und schult zu Risikoanalysen, quantitativer Zuverlässigkeitsbewertung, DoE und Zuverlässigkeitstests. Seine Forschung umfasst insbesondere die Absicherung von Photovoltaiksystemen.",
          links: [
            {
              label: "Risikomanagement bei RelTest",
              href: "/leistungen/risikomanagement",
            },
            {
              label: "Forschung und Publikationen",
              href: kimHintzPublicationsUrl,
              external: true,
            },
          ],
        },
        {
          name: "Dshamil Efinger",
          field: "Systemzuverlässigkeit und nachhaltige Produktentwicklung",
          summary:
            "Dshamil Efinger verbindet Zuverlässigkeitsanalysen mit nachhaltiger Produktgestaltung und datenbasierten Bewertungsmethoden.",
          links: [
            {
              label: "Wissen bei RelTest",
              href: "/wissen",
            },
            {
              label: "Forschungsprofil",
              href: dshamilEfingerProfileUrl,
              external: true,
            },
          ],
        },
        {
          name: "Marco Arndt",
          field: "DoE und statistische Modellbildung",
          summary:
            "Marco Arndt entwickelt effiziente Versuchspläne und probabilistische Modelle für komplexe technische Systeme und Lebensdauerdaten.",
          links: [
            {
              label: "DoE bei RelTest",
              href: "/leistungen/design-of-experiments",
            },
            {
              label: "Forschung und Publikationen",
              href: marcoArndtResearchUrl,
              external: true,
            },
          ],
        },
      ],
      moreTitle: "RelTest besteht aus mehr als dieser Auswahl.",
      moreDescription:
        "Diese Auswahl macht unterschiedliche Schwerpunkte sichtbar, ist aber keine vollständige Teamliste. Weitere Kolleginnen und Kollegen bringen ihre Erfahrung in Beratung, Analyse, Erprobung und Education ein.",
      linkedInLabel: "Das Team auf LinkedIn",
      expertiseLabel: "Gesamte Expertise ansehen",
    },
    cta: {
      title: "Lernen wir uns im Gespräch kennen.",
      description:
        "Schildern Sie uns Ihre technische Fragestellung. Gemeinsam klären wir, welche Unterstützung für Ihr Projekt sinnvoll ist.",
      primaryLabel: "Gespräch vereinbaren",
      secondaryLabel: "Leistungen ansehen",
    },
  },
  en: {
    metaTitle: "About RelTest | People and expertise",
    metaDescription:
      "Meet the people behind RelTest Solutions and their expertise in reliability engineering, DoE, testing and data analysis.",
    hero: {
      title: "We are RelTest.",
      description:
        "We combine scientific depth with responsibility for real development decisions. In every project, you work directly with people who make technical relationships understandable and prepare robust decisions.",
      principles: [
        "Personally accessible",
        "Scientifically grounded",
        "Industrially experienced",
      ],
    },
    leadership: {
      title: "At RelTest, responsibility has a face.",
      description:
        "Dr.-Ing. Kevin Lucan and Prof. Dr.-Ing. Bernd Bertsche combine direct responsibility in customer projects with technical authority built over decades.",
      profiles: [
        {
          name: "Dr.-Ing. Kevin Lucan",
          role: "Managing Director, founder and direct contact",
          image: "/about/kevin-lucan-professional.webp",
          imageAlt:
            "Dr.-Ing. Kevin Lucan, Managing Director of RelTest Solutions",
          introduction:
            "Kevin Lucan leads RelTest Solutions and supports companies from the initial technical question through to robust development decisions.",
          facts: [
            "Studied at the University of Stuttgart and served as deputy head of reliability engineering at IMA.",
            "Contributes to DKE/K 132 and IEC 62506 on accelerated product testing.",
            "Developed a methodology for representative load spectra and led a commercial-vehicle brake working group.",
            "Advises on reliability processes, test strategies, field data and Design of Experiments.",
          ],
          profileHref: "/ueber-uns/kevin-lucan",
          profileLabel: "Kevin Lucan's profile",
          secondaryHref: calendlyUrl,
          secondaryLabel: "Meet with Kevin",
          secondaryExternal: true,
        },
        {
          name: "Prof. Dr.-Ing. Bernd Bertsche",
          role: "Founder, mentor and technical authority",
          image: "/about/bernd-bertsche-professional.webp",
          imageAlt:
            "Prof. Dr.-Ing. Bernd Bertsche, founder and technical advisor to RelTest Solutions",
          introduction:
            "Bernd Bertsche is one of Germany's leading reliability engineering experts and contributes scientific depth, industrial experience and decades of leadership.",
          facts: [
            "Established reliability engineering as a research field and served for many years as director of IMA.",
            "Recipient of the FAG Kugelfischer Research Award, the VDI Ring of Honour and recognition as a top expert in the German Founders' Award.",
            "Nine specialist books, around 300 national and international publications, and four patents.",
            "Senior technical work in DFG, VDI and DKE bodies and sustained transfer between research and industry.",
          ],
          profileHref: "/ueber-uns/bernd-bertsche",
          profileLabel: "Bernd Bertsche's profile",
          secondaryHref: "/expertise#books",
          secondaryLabel: "View reference books",
        },
      ],
    },
    podcast: {
      label: "Ingenieurshelden podcast",
      title: "A conversation with Kevin Lucan.",
      description:
        "In the podcast, Kevin talks about his professional path, technical responsibility and collaboration in demanding development projects. A personal introduction before we speak directly.",
      linkLabel: "Listen to the podcast",
      contactLabel: "Meet with Kevin",
      durationLabel: "A conversation about engineering practice and responsibility",
    },
    team: {
      title: "Three perspectives. One team.",
      description:
        "Three selected profiles show how different technical perspectives come together in our projects. The additional pictograms represent the wider RelTest team.",
      imageAlt:
        "Three selected RelTest experts shown as pictograms in front of the wider team",
      profiles: [
        {
          name: "Kim Hintz",
          field: "Technical risk management and reliability assurance",
          summary:
            "Kim Hintz advises and trains teams in risk analysis, quantitative reliability assessment, DoE and reliability testing. His research includes the reliability assurance of photovoltaic systems.",
          links: [
            {
              label: "Risk management at RelTest",
              href: "/leistungen/risikomanagement",
            },
            {
              label: "Research and publications",
              href: kimHintzPublicationsUrl,
              external: true,
            },
          ],
        },
        {
          name: "Dshamil Efinger",
          field: "System reliability and sustainable product development",
          summary:
            "Dshamil Efinger combines reliability analysis with sustainable product design and data-driven assessment methods.",
          links: [
            {
              label: "RelTest knowledge",
              href: "/wissen",
            },
            {
              label: "Research profile",
              href: dshamilEfingerProfileUrl,
              external: true,
            },
          ],
        },
        {
          name: "Marco Arndt",
          field: "DoE and statistical modelling",
          summary:
            "Marco Arndt develops efficient experimental designs and probabilistic models for complex technical systems and lifetime data.",
          links: [
            {
              label: "DoE at RelTest",
              href: "/leistungen/design-of-experiments",
            },
            {
              label: "Research and publications",
              href: marcoArndtResearchUrl,
              external: true,
            },
          ],
        },
      ],
      moreTitle: "RelTest is more than this selection.",
      moreDescription:
        "This selection highlights different areas of expertise, but it is not a complete team list. Further colleagues contribute their experience in consulting, analysis, testing and education.",
      linkedInLabel: "Meet the team on LinkedIn",
      expertiseLabel: "View all expertise",
    },
    cta: {
      title: "Let us get to know each other.",
      description:
        "Tell us about your technical challenge. Together, we will determine which form of support makes sense for your project.",
      primaryLabel: "Arrange a conversation",
      secondaryLabel: "View services",
    },
  },
};

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

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M5.2 7.6A2.2 2.2 0 1 0 5.2 3a2.2 2.2 0 0 0 0 4.5ZM3.4 21h3.7V9H3.4v12Zm6 0h3.7v-6.6c0-1.7.3-3.4 2.5-3.4 2.1 0 2.2 2 2.2 3.5V21h3.7v-7.2c0-3.6-.8-6.3-4.9-6.3-2 0-3.3 1.1-3.8 2.1h-.1V9H9.3v12Z" />
    </svg>
  );
}

function PrimaryLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex min-h-12 items-center justify-center gap-3 bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan"
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

function TextLink({
  href,
  children,
  external = false,
  inverse = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  inverse?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-3 border-b pb-1 font-winnstein-display text-sm font-bold transition-colors ${
        inverse
          ? "border-white/45 text-white hover:border-brand-steel-cyan hover:text-brand-steel-cyan"
          : "border-brand-steel-cyan text-brand-marine hover:text-brand-steel-cyan"
      }`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = aboutContent[locale];

  return buildLocalizedMetadata({
    locale,
    path: "/ueber-uns",
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function AboutPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = aboutContent[locale];

  const peopleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": absoluteUrl(`/${locale}/ueber-uns#page`),
        url: absoluteUrl(`/${locale}/ueber-uns`),
        name: content.metaTitle,
        description: content.metaDescription,
        about: [
          { "@id": absoluteUrl(`/${locale}/ueber-uns/kevin-lucan#person`) },
          { "@id": absoluteUrl(`/${locale}/ueber-uns/bernd-bertsche#person`) },
        ],
      },
      {
        "@type": "Person",
        "@id": absoluteUrl(`/${locale}/ueber-uns/kevin-lucan#person`),
        name: "Dr.-Ing. Kevin Lucan",
        jobTitle: locale === "de" ? "Geschäftsführer" : "Managing Director",
        image: absoluteUrl("/about/kevin-lucan-professional.webp"),
        url: absoluteUrl(`/${locale}/ueber-uns/kevin-lucan`),
        sameAs: [podcastUrl],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universität Stuttgart",
          url: "https://www.uni-stuttgart.de/",
        },
        worksFor: {
          "@type": "Organization",
          name: "RelTest Solutions GmbH",
          url: siteUrl,
        },
      },
      {
        "@type": "Person",
        "@id": absoluteUrl(`/${locale}/ueber-uns/bernd-bertsche#person`),
        name: "Prof. Dr.-Ing. Bernd Bertsche",
        image: absoluteUrl("/about/bernd-bertsche-professional.webp"),
        url: absoluteUrl(`/${locale}/ueber-uns/bernd-bertsche`),
        affiliation: [
          {
            "@type": "Organization",
            name: "RelTest Solutions GmbH",
            url: siteUrl,
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Universität Stuttgart",
            url: "https://www.uni-stuttgart.de/",
          },
        ],
      },
    ],
  };

  return (
    <div className="overflow-x-clip bg-white font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden border-b border-white/12 bg-[radial-gradient(circle_at_88%_12%,rgba(12,132,180,0.24),transparent_34%),linear-gradient(112deg,#031334_0%,#071b3f_62%,#08264c_100%)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-brand-steel-cyan/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-brand-steel-cyan/14"
        />

        <div className="relative mx-auto flex min-h-[20rem] max-w-7xl items-center px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div className="relative z-10 min-w-0">
              <span
                aria-hidden="true"
                className="mb-7 block h-1 w-20 bg-brand-steel-cyan"
              />
              <h1 className="max-w-3xl font-winnstein-display text-[2.4rem] font-bold leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.7rem]">
                {content.hero.title}
              </h1>
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-white/76">
                {content.hero.description}
              </p>

              <div className="mt-8 grid border-y border-white/18 sm:grid-cols-3">
                {content.hero.principles.map((principle, index) => (
                  <div
                    key={principle}
                    className={`flex min-h-20 items-center gap-3 py-4 font-winnstein-display text-sm font-bold ${
                      index > 0 ? "sm:border-l sm:border-white/18 sm:pl-5" : ""
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 ${
                        index === 1 ? "bg-brand-gold" : "bg-brand-steel-cyan"
                      }`}
                    />
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 border-b border-line-soft pb-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <h2 className="max-w-3xl font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {content.leadership.title}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-copy-muted lg:justify-self-end">
              {content.leadership.description}
            </p>
          </div>

          <div className="mt-10 overflow-hidden border border-line-soft shadow-[0_30px_80px_-52px_rgba(3,19,52,0.5)]">
            {content.leadership.profiles.map((profile, index) => {
              const isInverse = index % 2 === 1;
              const portraitPosition = profile.name.includes("Kevin")
                ? "object-[50%_8%] lg:object-[50%_10%]"
                : "object-[50%_20%] lg:object-[50%_34%]";
              const image = (
                <div className="relative min-h-[28rem] lg:min-h-[34rem]">
                  <Image
                    src={profile.image}
                    alt={profile.imageAlt}
                    fill
                    priority
                    className={`object-cover ${portraitPosition}`}
                    sizes="(min-width: 1024px) 47vw, 100vw"
                  />
                </div>
              );

              const details = (
                <div
                  className={`flex min-w-0 flex-col justify-center p-7 sm:p-10 lg:p-12 ${
                    isInverse
                      ? "bg-brand-marine text-white"
                      : "bg-brand-steel-cyan-10 text-brand-marine"
                  }`}
                >
                  <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan sm:text-base">
                    {profile.role}
                  </p>
                  <h3 className="mt-3 font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                    {profile.name}
                  </h3>
                  <p
                    className={`mt-6 max-w-2xl text-base leading-8 ${
                      isInverse ? "text-white/76" : "text-copy-muted"
                    }`}
                  >
                    {profile.introduction}
                  </p>

                  <ul
                    className={`mt-7 grid border-t sm:grid-cols-2 ${
                      isInverse ? "border-white/18" : "border-line-soft"
                    }`}
                  >
                    {profile.facts.map((fact, factIndex) => (
                      <li
                        key={fact}
                        className={`flex gap-3 border-b py-4 text-sm leading-6 ${
                          isInverse
                            ? "border-white/18 text-white/82"
                            : "border-line-soft text-copy-muted"
                        } ${
                          factIndex % 2 === 1
                            ? "sm:border-l sm:pl-5"
                            : "sm:pr-5"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-2 w-2 shrink-0 ${
                            factIndex === 1
                              ? "bg-brand-gold"
                              : "bg-brand-steel-cyan"
                          }`}
                        />
                        {fact}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <Link
                      href={localizeHref(locale, profile.profileHref)}
                      className={`inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 font-winnstein-display text-sm font-bold transition-colors ${
                        isInverse
                          ? "bg-white text-brand-marine hover:bg-brand-steel-cyan-10"
                          : "bg-brand-marine text-white hover:bg-brand-steel-cyan"
                      }`}
                    >
                      {profile.profileLabel}
                      <ArrowIcon />
                    </Link>
                    <TextLink
                      href={
                        profile.secondaryExternal
                          ? profile.secondaryHref
                          : localizeHref(locale, profile.secondaryHref)
                      }
                      external={profile.secondaryExternal}
                      inverse={isInverse}
                    >
                      {profile.secondaryLabel}
                    </TextLink>
                  </div>
                </div>
              );

              return (
                <article
                  key={profile.name}
                  className={`grid lg:grid-cols-2 ${
                    index > 0 ? "border-t border-line-soft" : ""
                  }`}
                >
                  {isInverse ? details : image}
                  {isInverse ? image : details}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="podcast"
        className="scroll-mt-28 bg-brand-marine text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
              {content.podcast.label}
            </p>
            <h2 className="mt-3 font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              {content.podcast.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              {content.podcast.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href={podcastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 py-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:bg-brand-steel-cyan-10"
              >
                {content.podcast.linkLabel}
                <ArrowIcon />
              </Link>
              <TextLink href={calendlyUrl} external inverse>
                {content.podcast.contactLabel}
              </TextLink>
            </div>
          </div>

          <div className="border-y border-white/18 py-5">
            <div className="relative aspect-[3/1] overflow-hidden">
              <Image
                src="/about/podcast-waveform-corporate.webp"
                alt=""
                fill
                aria-hidden="true"
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-1 text-right text-sm text-white/60">
              {content.podcast.durationLabel}
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-28 bg-white">
        <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 border-b border-line-soft pb-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <h2 className="font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {content.team.title}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-copy-muted lg:justify-self-end">
              {content.team.description}
            </p>
          </div>

          <div className="mt-10 overflow-hidden border border-line-soft bg-surface-muted">
            <div className="relative aspect-[8/3] overflow-hidden border-b border-line-soft bg-white">
              <Image
                src="/about/team-expertise-pictograms-v3.webp"
                alt={content.team.imageAlt}
                fill
                sizes="(min-width: 1440px) 1280px, (min-width: 1024px) calc(100vw - 64px), calc(100vw - 40px)"
                className="object-cover object-center"
              />
            </div>

            <div className="grid bg-white md:grid-cols-3">
              {content.team.profiles.map((profile, index) => (
                <article
                  key={profile.name}
                  className="flex min-h-full flex-col border-b border-line-soft p-7 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0 lg:p-9"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-line-soft" />
                  </div>
                  <h3 className="mt-6 font-winnstein-display text-2xl font-bold text-brand-marine lg:text-3xl">
                    {profile.name}
                  </h3>
                  <p className="mt-3 min-h-12 text-sm font-semibold leading-6 text-brand-steel-cyan lg:text-base">
                    {profile.field}
                  </p>
                  <p className="mt-5 text-base leading-8 text-copy-muted">
                    {profile.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-8">
                    {profile.links.map((link) => (
                      <TextLink
                        key={`${profile.name}-${link.href}`}
                        href={localizeHref(locale, link.href)}
                        external={link.external}
                      >
                        {link.label}
                      </TextLink>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="grid gap-7 bg-brand-marine p-7 text-white sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
              <div>
                <h3 className="font-winnstein-display text-2xl font-bold">
                  {content.team.moreTitle}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/72">
                  {content.team.moreDescription}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 lg:justify-end">
                <Link
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 bg-brand-steel-cyan px-5 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-marine"
                >
                  <LinkedInIcon />
                  {content.team.linkedInLabel}
                </Link>
                <TextLink
                  href={localizeHref(locale, "/expertise")}
                  inverse
                >
                  {content.team.expertiseLabel}
                </TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 bg-brand-steel-cyan-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
          <div>
            <h2 className="font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              {content.cta.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-copy-muted">
              {content.cta.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 lg:justify-end">
            <PrimaryLink href={localizeHref(locale, "/kontakt")}>
              {content.cta.primaryLabel}
            </PrimaryLink>
            <TextLink href={localizeHref(locale, "/leistungen")}>
              {content.cta.secondaryLabel}
            </TextLink>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(peopleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
