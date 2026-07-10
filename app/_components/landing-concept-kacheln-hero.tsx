import Image from "next/image";
import Link from "next/link";

import { localizeHref, type Locale } from "../_i18n/config";

type LandingConceptKachelnHeroProps = {
  locale: Locale;
};

const assetBase = "/concepts/landingpage-ingenics-kacheln";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="m13 7 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

const conceptContent = {
  de: {
    title: ["Wenn", "Produktzuverlässigkeit", "entscheidend wird."],
    description:
      "RelTest unterstützt Entwicklung, Erprobung und Qualität mit Beratung, DoE, Datenanalyse, Weiterbildung und langfristiger Projektbegleitung.",
    primaryCta: "Projekt besprechen",
    secondaryCta: "Leistungen ansehen",
    taskEyebrow: "Typische Aufgaben",
    taskTitle: "Wir lösen Ihre entscheidenden Zuverlässigkeitsfragen.",
    services: [
      {
        title: "Reliability Engineering Consulting",
        description:
          "Methodisch fundierte Beratung für Zuverlässigkeit, DoE, Datenanalyse und Nachweisführung.",
        href: "/leistungen/beratung",
        icon: "icon-target.svg",
        image: "consulting-weibull.png",
        imageFit: "object-contain",
        imageClass: "right-0 bottom-2 h-56 w-[58%] opacity-75",
      },
      {
        title: "Langfristige Projektpartnerschaft",
        description:
          "Verlässlicher Partner über den gesamten Produktlebenszyklus: strategisch, operativ und an Ihrer Seite.",
        href: "/leistungen/langfristige-kooperation",
        icon: "icon-handshake.svg",
        image: "partnership-contours.png",
        imageFit: "object-contain",
        imageClass: "-right-10 -bottom-10 h-64 w-[72%] opacity-70",
      },
      {
        title: "Seminare vor Ort",
        description:
          "Praxisnahe Schulungen und Workshops für Entwicklungsteams, individuell auf Ihre Themen zugeschnitten.",
        href: "/weiterbildung/seminare",
        icon: "icon-seminar.svg",
        image: "seminar-audience.png",
        imageFit: "object-cover",
        imageClass: "right-0 bottom-0 h-[70%] w-[62%] opacity-35",
      },
      {
        title: "RelTest Academy",
        description:
          "Digitales E-Learning für Ingenieurinnen und Ingenieure, flexibel, skalierbar und sofort einsetzbar.",
        href: "/weiterbildung/academy",
        icon: "icon-academy.svg",
        image: "academy-laptop.png",
        imageFit: "object-cover",
        imageClass: "right-0 bottom-0 h-[70%] w-[62%] opacity-35",
      },
    ],
    tasks: [
      {
        icon: "icon-chart.svg",
        text: "Unerwartete Ausfälle verzögern den Markteintritt und treiben Kosten.",
      },
      {
        icon: "icon-shield.svg",
        text: "Unsichere Nachweise gefährden Freigaben und erhöhen Haftungsrisiken.",
      },
      {
        icon: "icon-database.svg",
        text: "Zerstreute Daten und fehlende Methoden erschweren belastbare Entscheidungen.",
      },
      {
        icon: "icon-team.svg",
        text: "Wissen ist personengebunden und schwer im Team verfügbar.",
      },
    ],
  },
  en: {
    title: ["When", "product reliability", "becomes decisive."],
    description:
      "RelTest supports development, testing and quality teams with consulting, DoE, data analysis, training and long-term project support.",
    primaryCta: "Discuss project",
    secondaryCta: "View services",
    taskEyebrow: "Typical tasks",
    taskTitle: "We solve your critical reliability questions.",
    services: [
      {
        title: "Reliability Engineering Consulting",
        description:
          "Method-based consulting for reliability, DoE, data analysis and reliability demonstration.",
        href: "/leistungen/beratung",
        icon: "icon-target.svg",
        image: "consulting-weibull.png",
        imageFit: "object-contain",
        imageClass: "right-0 bottom-2 h-56 w-[58%] opacity-75",
      },
      {
        title: "Long-term project partnership",
        description:
          "A reliable partner across the product lifecycle: strategically, operationally and by your side.",
        href: "/leistungen/langfristige-kooperation",
        icon: "icon-handshake.svg",
        image: "partnership-contours.png",
        imageFit: "object-contain",
        imageClass: "-right-10 -bottom-10 h-64 w-[72%] opacity-70",
      },
      {
        title: "On-site seminars",
        description:
          "Practical training and workshops for development teams, tailored to your technical topics.",
        href: "/weiterbildung/seminare",
        icon: "icon-seminar.svg",
        image: "seminar-audience.png",
        imageFit: "object-cover",
        imageClass: "right-0 bottom-0 h-[70%] w-[62%] opacity-35",
      },
      {
        title: "RelTest Academy",
        description:
          "Digital e-learning for engineers: flexible, scalable and ready to use.",
        href: "/weiterbildung/academy",
        icon: "icon-academy.svg",
        image: "academy-laptop.png",
        imageFit: "object-cover",
        imageClass: "right-0 bottom-0 h-[70%] w-[62%] opacity-35",
      },
    ],
    tasks: [
      {
        icon: "icon-chart.svg",
        text: "Unexpected failures delay market launch and drive cost.",
      },
      {
        icon: "icon-shield.svg",
        text: "Uncertain evidence endangers release decisions and increases liability risk.",
      },
      {
        icon: "icon-database.svg",
        text: "Scattered data and missing methods make robust decisions difficult.",
      },
      {
        icon: "icon-team.svg",
        text: "Knowledge is tied to individuals and hard to scale across teams.",
      },
    ],
  },
} as const;

export function LandingConceptKachelnHero({
  locale,
}: LandingConceptKachelnHeroProps) {
  const content = conceptContent[locale];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_46%,rgba(8,145,178,0.08),transparent_32rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-line-soft" />

      <div className="relative mx-auto grid max-w-[120rem] gap-14 px-5 pt-20 pb-0 sm:px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(40rem,1fr)] lg:gap-24 lg:px-12 lg:pt-24 xl:gap-28 xl:px-16">
        <div className="relative z-10 flex min-w-0 flex-col justify-center pb-0">
          <h1 className="max-w-[47rem] text-[clamp(3.35rem,4vw,5.05rem)] leading-[0.98] font-semibold tracking-[-0.068em] text-slate-950">
            {content.title.map((line) => (
              <span key={line} className="block">
                {line.endsWith(".") ? (
                  <>
                    {line.slice(0, -1)}
                    <span className="text-brand-cyan-bright">.</span>
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 font-medium text-slate-600">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded bg-brand-ink px-7 text-sm font-bold text-white shadow-xl shadow-slate-300 transition hover:bg-brand-blue"
            >
              {content.primaryCta}
              <ArrowIcon />
            </Link>
            <Link
              href={localizeHref(locale, "/leistungen")}
              className="inline-flex min-h-12 items-center justify-center gap-4 border-b-2 border-brand-cyan px-1 text-sm font-bold text-brand-ink transition hover:text-brand-cyan"
            >
              {content.secondaryCta}
              <ArrowIcon />
            </Link>
          </div>

          <div className="pointer-events-none relative -ml-16 mt-4 h-[19rem] w-[min(55vw,53rem)] overflow-hidden opacity-68 [mask-image:linear-gradient(90deg,transparent_0%,#000_10%,#000_62%,transparent_100%)]">
            <Image
              src={`${assetBase}/hero-blueprint.png`}
              alt=""
              fill
              priority
              className="object-cover object-bottom"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
        </div>

        <div className="relative z-10 grid min-w-0 gap-4 sm:grid-cols-2 lg:-translate-y-6 lg:pl-6 xl:-translate-y-8 xl:pl-10 2xl:pl-12">
          {content.services.map((service) => (
            <Link
              key={service.title}
              href={localizeHref(locale, service.href)}
              className="group relative min-h-[18.75rem] overflow-hidden rounded-xl border border-line-soft bg-white/96 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-panel"
            >
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-brand-blue">
                <Image
                  src={`${assetBase}/${service.icon}`}
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="h-7 w-7"
                />
              </span>

              <span className="relative z-10 mt-8 block max-w-80 text-2xl leading-[1.08] font-semibold tracking-[-0.045em] text-slate-950">
                {service.title}
              </span>
              <span className="relative z-10 mt-5 block max-w-80 text-sm leading-7 font-medium text-slate-600">
                {service.description}
              </span>
              <span className="relative z-10 mt-7 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/75 text-brand-ink shadow-sm transition duration-200 group-hover:translate-x-1 group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-brand-cyan">
                <ArrowIcon />
              </span>

              <span
                aria-hidden="true"
                className={`pointer-events-none absolute z-0 max-h-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,#000_44%,#000_100%)] ${service.imageClass}`}
              >
                <Image
                  src={`${assetBase}/${service.image}`}
                  alt=""
                  fill
                  className={service.imageFit}
                  sizes="(min-width: 1024px) 24vw, 100vw"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative border-t border-line-soft bg-surface-muted/70 px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[104rem]">
          <div className="text-center">
            <p className="inline-flex items-center justify-center gap-3 text-base font-semibold tracking-[-0.02em] text-slate-600 sm:text-lg">
              <span
                aria-hidden="true"
                className="h-0.5 w-12 rounded-full bg-gradient-to-r from-brand-cyan to-slate-300"
              />
              {content.taskEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-3xl">
              {content.taskTitle}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.tasks.map((task) => (
              <article
                key={task.text}
                className="grid min-h-28 grid-cols-[3.5rem_1fr] items-center gap-4 rounded-xl border border-line-soft bg-white/85 p-5"
              >
                <span className="flex h-12 w-12 items-center justify-center text-brand-blue">
                  <Image
                    src={`${assetBase}/${task.icon}`}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </span>
                <p className="text-sm leading-6 font-semibold text-slate-700">
                  {task.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
