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
        "RelTest Education macht Zuverlässigkeitstechnik und DoE flexibel zugänglich. Im Mittelpunkt steht zeit- und ortsunabhängiges E-Learning; Vor-Ort-Schulungen bieten wir als eigenständige Alternative für gemeinsames Lernen mit festen Terminen an.",
      onSiteCta: "Vor-Ort-Alternative",
      digitalCta: "Zur RelTest Education",
      imageAlt:
        "Digitales Lern-Dashboard für Reliability Engineering mit Kursmodulen und Fortschrittsanzeige",
    },
    paths: {
      selector: {
        label: "Direkt zum Lernformat",
        digitalTitle: "E-Learning",
        digitalText: "Flexibel, ortsunabhängig und wiederholbar",
        onSiteTitle: "Vor Ort",
        onSiteText: "Fester Termin und direkter Austausch",
      },
      onSite: {
        title: "Vor-Ort-Schulung: gemeinsam lernen",
        text:
          "Vor-Ort-Schulungen sind die Präsenzalternative zum digitalen Lernen. Unsere Referenten vermitteln ausgewählte Fachthemen in einem festen Seminarformat; konkrete Entwicklungsaufgaben bearbeiten wir getrennt davon im Rahmen unserer Solutions-Beratung.",
        points: [
          "kompaktes Lernen zu festen Terminen",
          "direkter Austausch mit unseren Referenten",
          "im Unternehmen oder an einem vereinbarten Schulungsort",
        ],
        cta: "Schulung anfragen",
      },
      digital: {
        title: "RelTest Education: flexibel und unabhängig lernen",
        text:
          "Die digitalen Module vermitteln Reliability Engineering und DoE strukturiert und praxisnah. Lernende greifen während ihres gebuchten Nutzungszeitraums orts- und zeitunabhängig auf die Inhalte zu und können Lektionen gezielt wiederholen.",
        points: [
          "zeit- und ortsunabhängig online verfügbar",
          "Lerntempo selbst bestimmen und Inhalte wiederholen",
          "für einzelne Fachkräfte und ganze Teams skalierbar",
        ],
        cta: "E-Learning-Angebot ansehen",
      },
    },
    seminars: {
      title: "Vor-Ort-Schulungen als Präsenzalternative",
      description:
        "Für alle, die ein festes Seminarformat und direkten Austausch bevorzugen. Die Schulungen vermitteln definierte Fachthemen; individuelle Projektarbeit ist Teil unserer separaten Solutions-Beratung.",
      linkLabel: "Seminar ansehen",
    },
    choice: {
      title: "Welches Lernformat passt?",
      description:
        "E-Learning und Vor-Ort-Schulung vermitteln Fachwissen auf zwei unterschiedlichen Wegen. Die Wahl richtet sich danach, wie und wann gelernt werden soll – nicht nach einer aufeinander aufbauenden Reihenfolge.",
      items: [
        {
          question: "Zeitlich flexibel lernen und Inhalte wiederholt nutzen.",
          answer: "E-Learning",
        },
        {
          question: "Gemeinsam zu einem festen Termin mit Referenten lernen.",
          answer: "Vor-Ort-Schulung",
        },
        {
          question: "Eine konkrete technische Aufgabe im Entwicklungsprojekt lösen.",
          answer: "Solutions-Beratung",
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
        "RelTest Education makes reliability engineering and DoE flexibly accessible. The focus is on e-learning independent of time and location; on-site training is available as a separate alternative for learning together at scheduled times.",
      onSiteCta: "On-site alternative",
      digitalCta: "Open RelTest Education",
      imageAlt:
        "Digital reliability engineering learning dashboard with course modules and progress tracking",
    },
    paths: {
      selector: {
        label: "Go directly to the learning format",
        digitalTitle: "E-learning",
        digitalText: "Flexible, location-independent and repeatable",
        onSiteTitle: "On site",
        onSiteText: "Scheduled sessions and direct exchange",
      },
      onSite: {
        title: "On-site training: learn together",
        text:
          "On-site training is the face-to-face alternative to digital learning. Our instructors teach selected technical subjects in a scheduled seminar format; specific development tasks are handled separately through our Solutions consulting.",
        points: [
          "focused learning at scheduled times",
          "direct exchange with our instructors",
          "at your company or an agreed training location",
        ],
        cta: "Request training",
      },
      digital: {
        title: "RelTest Education: learn flexibly and independently",
        text:
          "The digital modules teach reliability engineering and DoE in a structured and practical way. Learners can access the content independent of time and location throughout their booked access period and revisit individual lessons as needed.",
        points: [
          "available online independent of time and location",
          "set your own pace and revisit content",
          "scalable for individual engineers and whole teams",
        ],
        cta: "View the e-learning offer",
      },
    },
    seminars: {
      title: "On-site training as a face-to-face alternative",
      description:
        "For those who prefer a scheduled seminar and direct exchange. Training covers defined technical subjects; individual project work remains part of our separate Solutions consulting.",
      linkLabel: "View seminar",
    },
    choice: {
      title: "Which learning format fits?",
      description:
        "E-learning and on-site training provide two different ways to build expertise. The choice depends on how and when people want to learn, not on a required sequence.",
      items: [
        {
          question: "Learn flexibly and revisit content over time.",
          answer: "E-learning",
        },
        {
          question: "Learn together with instructors at a scheduled time.",
          answer: "On-site training",
        },
        {
          question: "Solve a specific technical task in a development project.",
          answer: "Solutions consulting",
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

        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
            <div className="w-fit">
              <Image
                src="/branding/reltest-education-horizontal-negative.svg"
                alt="RelTest Education"
                width={466}
                height={226}
                priority
                className="h-auto w-60 sm:w-72"
              />
            </div>
            <h1 className="mt-7 max-w-3xl font-winnstein-display text-4xl leading-[1.08] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[2.8rem] xl:text-5xl">
              {copy.hero.title.split(". ").map((line, index, lines) => (
                <span
                  key={line}
                  className="block xl:whitespace-nowrap"
                >
                  {line}
                  {index < lines.length - 1 ? "." : ""}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 lg:text-lg">
              {copy.hero.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://reltest-academy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-action inline-flex min-h-14 items-center justify-between gap-7 bg-brand-education px-7 py-4 font-winnstein-display text-base font-bold text-white transition-colors hover:bg-[#008f48]"
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
                className="brand-action brand-action-outline inline-flex min-h-14 items-center justify-between gap-5 border border-white/35 px-6 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/8"
              >
                {copy.hero.onSiteCta}
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[24rem] border-t border-white/15 lg:min-h-[36rem] lg:border-t-0 lg:border-l">
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

      <section className="bg-white px-5 pt-14 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label={copy.paths.selector.label}
            className="mb-10 grid border border-brand-marine/15 sm:grid-cols-2 lg:grid-cols-[0.62fr_1fr_1fr]"
          >
            <div className="flex min-h-32 items-center bg-brand-marine px-7 py-6 text-white sm:col-span-2 sm:px-9 lg:col-span-1">
              <p className="max-w-56 font-winnstein-display text-xl leading-tight font-bold sm:text-2xl">
                {copy.paths.selector.label}
              </p>
            </div>
            <Link
              href="https://reltest-academy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-32 items-center justify-between gap-6 border-t border-brand-marine/15 bg-brand-education/[0.045] px-7 py-6 transition-colors hover:bg-brand-education/[0.09] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-education lg:border-t-0 lg:border-l"
            >
              <span>
                <span className="block font-winnstein-display text-2xl font-bold text-brand-marine">
                  {copy.paths.selector.digitalTitle}
                </span>
                <span className="mt-2 block text-sm leading-6 text-brand-marine/65">
                  {copy.paths.selector.digitalText}
                </span>
              </span>
              <span className="brand-action flex h-11 w-11 shrink-0 items-center justify-center bg-brand-education text-white transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="group flex min-h-32 items-center justify-between gap-6 border-t border-brand-marine/15 px-7 py-6 transition-colors hover:bg-brand-steel-cyan-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-steel-cyan sm:border-l lg:border-t-0"
            >
              <span>
                <span className="block font-winnstein-display text-2xl font-bold text-brand-marine">
                  {copy.paths.selector.onSiteTitle}
                </span>
                <span className="mt-2 block text-sm leading-6 text-brand-marine/65">
                  {copy.paths.selector.onSiteText}
                </span>
              </span>
              <span className="brand-action brand-action-outline brand-action-outline-light flex h-11 w-11 shrink-0 items-center justify-center text-brand-steel-cyan transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </nav>

          <article
            id="e-learning"
            className="grid scroll-mt-32 border-b border-brand-marine/15 lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="flex flex-col justify-center bg-brand-marine p-7 text-white sm:p-10 lg:p-16">
              <Link
                href="https://reltest-academy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition-transform hover:-translate-y-0.5"
                aria-label={copy.paths.digital.cta}
              >
                <Image
                  src="/branding/reltest-education-horizontal-negative.svg"
                  alt="RelTest Education"
                  width={466}
                  height={226}
                  className="h-auto w-64 sm:w-80"
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
                    <span
                      aria-hidden="true"
                      className="brand-list-dash brand-list-dash-education"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="https://reltest-academy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-action mt-9 inline-flex min-h-14 w-full items-center justify-between gap-7 bg-brand-education px-7 py-4 font-winnstein-display text-base font-bold text-white transition-colors hover:bg-[#008f48] sm:w-fit"
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
                    <span
                      aria-hidden="true"
                      className="brand-list-dash brand-list-dash-education"
                    />
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
                  <span className="education-seminar-icon brand-action brand-action-outline brand-action-outline-light flex h-10 w-10 items-center justify-center">
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
            className="brand-action inline-flex min-h-12 items-center justify-between gap-6 bg-brand-education px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-[#008f48]"
          >
            {copy.choice.ctaLabel}
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
