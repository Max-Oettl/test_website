import Image from "next/image";
import Link from "next/link";

import { getDetailPages } from "../../_content/migration-pages";
import { getSiteContent } from "../../_content/site-content";
import {
  localizeHref,
  resolveLocale,
  type Locale,
} from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const educationCopy = {
  de: {
    hero: {
      title: "Reliability Engineering. Digital lernen. Sicher anwenden.",
      description:
        "RelTest Education macht Zuverlässigkeitstechnik und DoE für Ingenieurinnen und Ingenieure flexibel zugänglich: strukturiert, praxisnah und im eigenen Tempo. Vor-Ort-Schulungen ergänzen das digitale Angebot bei konkretem Teambedarf.",
      onSiteCta: "Vor-Ort-Schulungen ergänzend",
      digitalCta: "Zur RelTest Education",
      imageAlt:
        "Digitales Lern-Dashboard für Reliability Engineering mit Kursmodulen und Fortschrittsanzeige",
    },
    paths: {
      title: "E-Learning im Fokus. Vor Ort, wenn der Projektkontext zählt.",
      description:
        "Das digitale Lernangebot ist der skalierbare Einstieg in Reliability Engineering und DoE. Vor-Ort-Schulungen setzen dort an, wo Teams Wissen gemeinsam auf konkrete Produkte und Projekte übertragen möchten.",
      onSite: {
        title: "Vor-Ort-Schulungen als gezielte Ergänzung",
        text:
          "Wenn ein Team an derselben technischen Fragestellung arbeitet, übertragen wir Methoden gemeinsam auf Produkte, Daten und offene Projektfragen im Unternehmen.",
        points: [
          "im Unternehmen oder an einem vereinbarten Schulungsort",
          "auf Wissensstand und Fragestellung des Teams abgestimmt",
          "mit Raum für Diskussion, Übungen und eigene Beispiele",
        ],
        cta: "Schulung anfragen",
      },
      digital: {
        title: "RelTest Education: Wissen flexibel aufbauen",
        text:
          "Die digitalen Lernmodule vermitteln Reliability Engineering und DoE strukturiert, nachvollziehbar und praxisnah. Einzelne Fachkräfte und verteilte Teams können Wissen unabhängig von Ort und Zeit aufbauen.",
        points: [
          "orts- und zeitunabhängig verfügbar",
          "Inhalte im eigenen Tempo erarbeiten und wiederholen",
          "als Grundlage oder Ergänzung zur Präsenzschulung nutzbar",
        ],
        cta: "E-Learning-Angebot ansehen",
      },
    },
    seminars: {
      title: "Ergänzende Vor-Ort-Schulungen",
      description:
        "Für Teams mit einer gemeinsamen technischen Fragestellung stimmen wir Inhalt, Dauer und Beispiele direkt auf den Projektkontext ab.",
      linkLabel: "Seminar ansehen",
    },
    choice: {
      title: "Digital starten. Bei Bedarf gemeinsam vertiefen.",
      description:
        "Für individuelles oder standortübergreifendes Lernen ist RelTest Education der empfohlene Einstieg. Ein gemeinsamer Projektkontext spricht zusätzlich für eine Vor-Ort-Schulung.",
      items: [
        {
          question: "Ein Team arbeitet an derselben technischen Frage.",
          answer: "Vor-Ort-Schulung",
        },
        {
          question: "Fachkräfte sollen Grundlagen flexibel aufbauen.",
          answer: "E-Learning",
        },
        {
          question: "Grundlagen vorab, Anwendung anschließend im Team.",
          answer: "Kombination",
        },
      ],
      ctaTitle: "Noch nicht sicher, welches Format sinnvoll ist?",
      ctaText:
        "Wir klären in einem kurzen Gespräch, welches Lernziel, welcher Umfang und welches Format zu Ihrem Team passen.",
      ctaLabel: "Education-Bedarf besprechen",
    },
  },
  en: {
    hero: {
      title: "Reliability engineering. Learn digitally. Apply with confidence.",
      description:
        "RelTest Education makes reliability engineering and DoE accessible to engineers through structured, practical learning at their own pace. On-site training complements the digital offer for specific team needs.",
      onSiteCta: "Complement with on-site training",
      digitalCta: "Open RelTest Education",
      imageAlt:
        "Digital reliability engineering learning dashboard with course modules and progress tracking",
    },
    paths: {
      title: "E-learning first. On site when project context matters.",
      description:
        "The digital learning programme is the scalable entry point into reliability engineering and DoE. On-site training helps teams transfer that knowledge to specific products and projects.",
      onSite: {
        title: "On-site training as a focused complement",
        text:
          "When a team shares the same technical challenge, we apply the methods directly to products, data and open project questions within the company.",
        points: [
          "at your company or an agreed training location",
          "aligned with the team's experience and technical questions",
          "with time for discussion, exercises and your own examples",
        ],
        cta: "Request training",
      },
      digital: {
        title: "RelTest Education: build knowledge flexibly",
        text:
          "The digital modules teach reliability engineering and DoE in a clear, structured and practical way. Individual engineers and distributed teams can build knowledge independent of time and location.",
        points: [
          "available independent of location and schedule",
          "learn and revisit content at your own pace",
          "use as a foundation or complement to on-site training",
        ],
        cta: "View the e-learning offer",
      },
    },
    seminars: {
      title: "Complementary on-site training",
      description:
        "For teams working on a shared technical challenge, we align content, duration and examples directly with the project context.",
      linkLabel: "View seminar",
    },
    choice: {
      title: "Start digitally. Deepen together when needed.",
      description:
        "RelTest Education is the recommended starting point for individual or distributed learning. A shared project context can then be addressed through on-site training.",
      items: [
        {
          question: "A team is working on the same technical question.",
          answer: "On-site training",
        },
        {
          question: "Engineers need to build fundamentals flexibly.",
          answer: "E-learning",
        },
        {
          question: "Fundamentals first, team application afterwards.",
          answer: "Combined",
        },
      ],
      ctaTitle: "Not sure which format is the right fit?",
      ctaText:
        "In a short conversation, we clarify the learning objective, scope and format that suit your team.",
      ctaLabel: "Discuss your Education needs",
    },
  },
} as const satisfies Record<Locale, object>;

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
  const content = getSiteContent(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/education",
    title:
      locale === "de"
        ? "RelTest Education: E-Learning für Ingenieure | RelTest"
        : "RelTest Education: E-learning for Engineers | RelTest",
    description: content.pages.education.intro.description,
  });
}

export default async function EducationPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const copy = educationCopy[locale];
  const seminars = getDetailPages("education", locale).filter(
    ({ slug }) => slug !== "seminare" && slug !== "academy",
  );

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full border border-brand-education/20" />
        <div className="absolute -right-4 top-16 h-56 w-56 rounded-full border border-brand-education/15" />

        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1.1fr)]">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="w-fit bg-white px-5 py-3">
              <Image
                src="/branding/reltest-education-horizontal-positive.svg"
                alt="RelTest Education"
                width={466}
                height={226}
                priority
                className="h-auto w-52 sm:w-60"
              />
            </div>
            <h1 className="mt-10 max-w-3xl font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[4.35rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
              {copy.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://reltest-academy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-between gap-7 bg-brand-education px-7 py-4 font-winnstein-display text-base font-bold text-white shadow-[0_18px_45px_rgba(0,167,84,.22)] transition-colors hover:bg-[#008f48]"
              >
                {copy.hero.digitalCta}
                <ArrowIcon />
              </Link>
              <Link
                href={
                  locale === "de"
                    ? "#vor-ort-schulung"
                    : "#on-site-training"
                }
                className="inline-flex min-h-14 items-center justify-between gap-5 border border-white/35 px-6 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/8"
              >
                {copy.hero.onSiteCta}
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[25rem] border-t border-white/15 lg:min-h-[42rem] lg:border-t-0 lg:border-l">
            <Image
              src="/education/digital-learning-hero.png"
              alt={copy.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="bg-[#f4f8fb] object-contain object-center p-4 sm:p-7 lg:p-9"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,52,.14),transparent_24%)]" />
          </div>
        </div>
        <div className="h-2 bg-brand-education" />
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 border-b border-brand-marine/15 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="max-w-2xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {copy.paths.title}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-brand-marine/72 lg:justify-self-end">
              {copy.paths.description}
            </p>
          </div>

          <article
            id="e-learning"
            className="grid scroll-mt-32 border-b border-brand-marine/15 lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="flex flex-col justify-center bg-brand-marine p-7 text-white sm:p-10 lg:p-16">
              <Link
                href="https://reltest-academy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit bg-white px-5 py-3 transition-transform hover:-translate-y-0.5"
                aria-label={copy.paths.digital.cta}
              >
                <Image
                  src="/branding/reltest-education-horizontal-positive.svg"
                  alt="RelTest Education"
                  width={466}
                  height={226}
                  className="h-auto w-56 sm:w-72"
                />
              </Link>
              <h2 className="mt-9 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                {copy.paths.digital.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
                {copy.paths.digital.text}
              </p>
              <ul className="mt-8 divide-y divide-white/15 border-y border-white/15">
                {copy.paths.digital.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-4 py-4 text-sm leading-6 font-semibold text-white/90"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 bg-brand-education" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="https://reltest-academy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex min-h-14 w-full items-center justify-between gap-7 bg-brand-education px-7 py-4 font-winnstein-display text-base font-bold text-white shadow-[0_18px_45px_rgba(0,167,84,.2)] transition-colors hover:bg-[#008f48] sm:w-fit"
              >
                {copy.paths.digital.cta}
                <ArrowIcon />
              </Link>
            </div>
            <div className="relative min-h-[25rem] lg:min-h-[44rem]">
              <Image
                src="/team/academy-e-learning.png"
                alt={
                  locale === "de"
                    ? "Ingenieur nutzt das digitale Lernangebot von RelTest Education"
                    : "Engineer using the RelTest Education digital learning programme"
                }
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </article>

          <article
            id={
              locale === "de" ? "vor-ort-schulung" : "on-site-training"
            }
            className="grid scroll-mt-32 border-b border-brand-marine/15 lg:grid-cols-[0.82fr_1.18fr]"
          >
            <div className="relative min-h-[20rem] lg:min-h-[32rem]">
              <Image
                src="/team/img-0107.png"
                alt={
                  locale === "de"
                    ? "RelTest Experten vermitteln Zuverlässigkeitstechnik in einer Vor-Ort-Schulung"
                    : "RelTest experts teaching reliability engineering in an on-site seminar"
                }
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center bg-brand-steel-cyan-10 p-7 sm:p-10 lg:p-14">
              <span className="h-1 w-16 bg-brand-education" />
              <h2 className="mt-7 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
                {copy.paths.onSite.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-brand-marine/75">
                {copy.paths.onSite.text}
              </p>
              <ul className="mt-8 divide-y divide-brand-marine/15 border-y border-brand-marine/15">
                {copy.paths.onSite.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-4 py-4 text-sm leading-6 font-semibold"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 bg-brand-education" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={localizeHref(locale, "/kontakt")}
                className="mt-9 inline-flex w-fit items-center gap-5 border-b-2 border-brand-education pb-2 font-winnstein-display text-sm font-bold"
              >
                {copy.paths.onSite.cta}
                <ArrowIcon />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-brand-steel-cyan-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <h2 className="font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {copy.seminars.title}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-brand-marine/72 lg:justify-self-end">
              {copy.seminars.description}
            </p>
          </div>
          <div className="mt-12 border-t border-brand-marine/20">
            {seminars.map((seminar, index) => (
              <Link
                key={seminar.slug}
                href={localizeHref(
                  locale,
                  `/weiterbildung/${seminar.slug}`,
                )}
                className="group grid gap-4 border-b border-brand-marine/20 bg-white px-5 py-7 transition-colors hover:bg-brand-marine hover:text-white sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-center sm:px-7"
              >
                <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan group-hover:text-brand-education">
                  0{index + 1}
                </span>
                <span>
                  <strong className="block font-winnstein-display text-xl leading-snug font-bold sm:text-2xl">
                    {seminar.title}
                  </strong>
                  <span className="mt-2 block max-w-4xl text-sm leading-6 text-brand-marine/65 group-hover:text-white/70">
                    {seminar.description}
                  </span>
                </span>
                <span className="inline-flex items-center gap-4 font-winnstein-display text-sm font-bold">
                  {copy.seminars.linkLabel}
                  <span className="flex h-10 w-10 items-center justify-center border border-brand-marine/20 group-hover:border-white/30">
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <h2 className="font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
                {copy.choice.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-marine/72">
                {copy.choice.description}
              </p>
            </div>
            <dl className="border-t border-brand-marine/20">
              {copy.choice.items.map((item) => (
                <div
                  key={item.answer}
                  className="grid gap-2 border-b border-brand-marine/20 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
                >
                  <dt className="text-base leading-7 text-brand-marine/75">
                    {item.question}
                  </dt>
                  <dd className="font-winnstein-display text-lg font-bold text-brand-education">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-brand-marine px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em]">
              {copy.choice.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">
              {copy.choice.ctaText}
            </p>
          </div>
          <Link
            href={localizeHref(locale, "/kontakt")}
            className="inline-flex min-h-12 items-center justify-between gap-6 bg-brand-education px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-[#008f48]"
          >
            {copy.choice.ctaLabel}
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
