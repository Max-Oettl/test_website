import Image from "next/image";
import Link from "next/link";

import { localizeHref, type Locale } from "../_i18n/config";

type LandingConceptKacheln2HeroProps = {
  heroImage?: string;
  heroImageFraming?: "default" | "process";
  locale: Locale;
  serviceLayout?: "tiles" | "consulting";
};

const assetBase = "/concepts/landingpage-ingenics-kacheln";

const conceptContent = {
  de: {
    title: [
      "Zuverlässigkeit verstehen.",
      "Risiken beherrschen.",
      "Entscheidungen absichern.",
    ],
    description:
      "Ingenieursberatung für Zuverlässigkeitstechnik und Risikomanagement von der Entwicklung bis zur Freigabe.",
    primaryCta: "Projekt besprechen",
    secondaryCta: "Leistungen",
    taskTitle: "Typische Aufgaben in Entwicklung und Erprobung",
    services: [
      {
        title: "Beratung & Engineering",
        description:
          "Methoden, Analysen und Nachweise für belastbare Entwicklungsentscheidungen.",
        href: "/leistungen/beratung",
        icon: "icon-target.svg",
        image: "consulting-weibull.png",
        imageFit: "object-contain",
        imageClass: "right-0 bottom-0 h-[78%] w-[67%] opacity-70",
      },
      {
        title: "Projektpartnerschaft",
        description:
          "Kontinuierliche Unterstützung – vom Konzept bis in die Serie.",
        href: "/leistungen/langfristige-kooperation",
        icon: "icon-handshake.svg",
        image: "partnership-contours.png",
        imageFit: "object-contain",
        imageClass: "-right-8 -bottom-8 h-[88%] w-[78%] opacity-64",
      },
      {
        title: "Seminare vor Ort",
        description:
          "Praxiswissen für Teams, direkt an Ihren Fragestellungen.",
        href: "/weiterbildung/seminare",
        icon: "icon-seminar.svg",
        image: "seminar-audience.png",
        imageFit: "object-cover",
        imageClass: "right-0 bottom-0 h-[76%] w-[68%] opacity-34",
      },
      {
        title: "RelTest Academy",
        description:
          "Strukturiertes E-Learning für flexible technische Weiterbildung.",
        href: "/weiterbildung/academy",
        icon: "icon-academy.svg",
        image: "academy-laptop.png",
        imageFit: "object-cover",
        imageClass: "right-0 bottom-0 h-[76%] w-[68%] opacity-34",
      },
    ],
    consultingServices: [
      {
        title: "Zuverlässigkeitstechnik",
        href: "/leistungen/zuverlaessigkeitstechnik",
        icon: "icon-target.svg",
      },
      {
        title: "Risiko- und Absicherungsmanagement",
        href: "/leistungen/risikomanagement",
        icon: "icon-shield.svg",
      },
      {
        title: "Test und Datenanalyse",
        href: "/leistungen/datenanalyse-prognostik",
        icon: "icon-database.svg",
      },
      {
        title: "Projektpartnerschaft",
        href: "/leistungen/langfristige-kooperation",
        icon: "icon-handshake.svg",
      },
    ],
    academyPrompt: {
      title: "Weiterbildung gesucht?",
      cta: "Zur Academy",
    },
    tasks: [
      {
        icon: "icon-chart.svg",
        title: "Unerwartete Ausfälle",
        description: "Ursachen erkennen, bevor Termine und Kosten kippen.",
      },
      {
        icon: "icon-shield.svg",
        title: "Unsichere Nachweise",
        description: "Freigaben auf belastbare Kriterien stützen.",
      },
      {
        icon: "icon-database.svg",
        title: "Verteilte Daten",
        description: "Aus Mess- und Felddaten klare Entscheidungen ableiten.",
      },
      {
        icon: "icon-team.svg",
        title: "Wissen im Team",
        description: "Methoden dauerhaft verfügbar und anwendbar machen.",
      },
    ],
  },
  en: {
    title: [
      "Understand reliability.",
      "Manage risks.",
      "Safeguard decisions.",
    ],
    description:
      "Engineering for robust decisions – from initial risk analysis to release.",
    primaryCta: "Discuss project",
    secondaryCta: "Services",
    taskTitle: "Typical development and testing challenges",
    services: [
      {
        title: "Consulting & engineering",
        description:
          "Methods, analysis and evidence for robust development decisions.",
        href: "/leistungen/beratung",
        icon: "icon-target.svg",
        image: "consulting-weibull.png",
        imageFit: "object-contain",
        imageClass: "right-0 bottom-0 h-[78%] w-[67%] opacity-70",
      },
      {
        title: "Project partnership",
        description:
          "Continuous support from initial concept through series production.",
        href: "/leistungen/langfristige-kooperation",
        icon: "icon-handshake.svg",
        image: "partnership-contours.png",
        imageFit: "object-contain",
        imageClass: "-right-8 -bottom-8 h-[88%] w-[78%] opacity-64",
      },
      {
        title: "On-site seminars",
        description:
          "Practical knowledge for teams, applied to their actual challenges.",
        href: "/weiterbildung/seminare",
        icon: "icon-seminar.svg",
        image: "seminar-audience.png",
        imageFit: "object-cover",
        imageClass: "right-0 bottom-0 h-[76%] w-[68%] opacity-34",
      },
      {
        title: "RelTest Academy",
        description:
          "Structured e-learning for flexible technical development.",
        href: "/weiterbildung/academy",
        icon: "icon-academy.svg",
        image: "academy-laptop.png",
        imageFit: "object-cover",
        imageClass: "right-0 bottom-0 h-[76%] w-[68%] opacity-34",
      },
    ],
    consultingServices: [
      {
        title: "Reliability engineering",
        href: "/leistungen/zuverlaessigkeitstechnik",
        icon: "icon-target.svg",
      },
      {
        title: "Risk and assurance management",
        href: "/leistungen/risikomanagement",
        icon: "icon-shield.svg",
      },
      {
        title: "Testing and data analysis",
        href: "/leistungen/datenanalyse-prognostik",
        icon: "icon-database.svg",
      },
      {
        title: "Project partnership",
        href: "/leistungen/langfristige-kooperation",
        icon: "icon-handshake.svg",
      },
    ],
    academyPrompt: {
      title: "Looking for professional development?",
      cta: "Explore the Academy",
    },
    tasks: [
      {
        icon: "icon-chart.svg",
        title: "Unexpected failures",
        description: "Find causes before schedules and costs are affected.",
      },
      {
        icon: "icon-shield.svg",
        title: "Uncertain evidence",
        description: "Base release decisions on robust criteria.",
      },
      {
        icon: "icon-database.svg",
        title: "Scattered data",
        description: "Turn test and field data into clear decisions.",
      },
      {
        icon: "icon-team.svg",
        title: "Knowledge in teams",
        description: "Make methods permanently available and applicable.",
      },
    ],
  },
} as const;

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
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

export function LandingConceptKacheln2Hero({
  heroImage = `${assetBase}/hero-blueprint.png`,
  heroImageFraming = "default",
  locale,
  serviceLayout = "tiles",
}: LandingConceptKacheln2HeroProps) {
  const content = conceptContent[locale];

  return (
    <section className="kacheln2-hero relative overflow-hidden border-t border-line-soft bg-white">
      <div className="relative mx-auto grid max-w-[120rem] gap-12 px-5 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[minmax(0,0.78fr)_minmax(40rem,1fr)] lg:gap-20 lg:px-12 lg:pt-24 xl:gap-24 xl:px-16">
        <div className="relative z-10 flex min-w-0 flex-col justify-center">
          <h1 className="max-w-[48rem] text-[clamp(1.45rem,7.7vw,3.2rem)] leading-[1.12] font-semibold tracking-[-0.065em] text-slate-950 lg:text-[clamp(2.65rem,3vw,4rem)]">
            {content.title.map((line) => (
              <span key={line} className="block whitespace-nowrap">
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

          <p className="mt-7 max-w-xl text-lg leading-8 font-medium text-slate-600">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-9">
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded-[0.3rem] bg-brand-ink px-7 text-sm font-bold text-white shadow-[0_14px_30px_rgba(7,20,48,0.16)] transition hover:bg-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
            >
              {content.primaryCta}
              <ArrowIcon />
            </Link>
            <Link
              href={localizeHref(locale, "/leistungen")}
              className="inline-flex min-h-12 items-center justify-center gap-3 border-b-2 border-brand-cyan px-1 text-sm font-bold text-brand-ink transition hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
            >
              {content.secondaryCta}
              <ArrowIcon />
            </Link>
          </div>

          <div
            className={`pointer-events-none relative -ml-12 mt-6 w-[min(54vw,50rem)] overflow-hidden opacity-58 [mask-image:linear-gradient(90deg,transparent_0%,#000_12%,#000_62%,transparent_100%)] ${
              heroImageFraming === "process"
                ? "h-[18rem] sm:h-[20rem]"
                : "h-[15rem] sm:h-[17rem]"
            }`}
          >
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              className={`object-cover ${
                heroImageFraming === "process"
                  ? "object-[center_57%]"
                  : "object-bottom"
              }`}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        {serviceLayout === "consulting" ? (
          <div className="relative z-10 flex min-w-0 flex-col gap-3 lg:-translate-y-4">
            {content.consultingServices.map((service) => (
              <Link
                key={service.title}
                href={localizeHref(locale, service.href)}
                className="group relative grid min-h-[5.75rem] grid-cols-[3.25rem_minmax(0,1fr)_2.75rem] items-center gap-5 overflow-hidden border border-line-soft bg-white px-5 py-3 transition duration-300 hover:z-10 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-[#fbfeff] hover:shadow-[0_18px_45px_rgba(17,36,58,0.09)] focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-cyan sm:px-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-brand-cyan transition-transform duration-300 group-hover:scale-y-100"
                />
                <span className="flex h-12 w-12 items-center justify-center bg-cyan-50 text-brand-blue ring-1 ring-cyan-100">
                  <Image
                    src={`${assetBase}/${service.icon}`}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="h-9 w-9"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-xl leading-tight font-semibold tracking-[-0.035em] text-slate-950 sm:text-[1.4rem]">
                    {service.title}
                  </span>
                </span>
                <span className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-brand-ink transition duration-200 group-hover:translate-x-1 group-hover:border-brand-cyan group-hover:text-brand-cyan">
                  <ArrowIcon />
                </span>
              </Link>
            ))}

            <Link
              href={localizeHref(locale, "/weiterbildung/academy")}
              className="group mt-1 flex min-h-20 flex-col justify-between gap-4 border border-cyan-100 bg-[#f2fbfe] px-5 py-3 text-brand-ink transition hover:border-brand-cyan hover:bg-[#eaf9fd] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan sm:flex-row sm:items-center sm:px-6"
            >
              <span className="flex min-w-0 items-center gap-4">
                <Image
                  src="/academy/reltest-academy-logo.webp"
                  alt=""
                  aria-hidden="true"
                  width={820}
                  height={406}
                  className="h-12 w-auto shrink-0 object-contain"
                />
                <span className="block text-base font-semibold tracking-[-0.02em]">
                  {content.academyPrompt.title}
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-3 text-sm font-bold text-brand-blue">
                {content.academyPrompt.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          </div>
        ) : (
          <div className="kacheln2-service-grid relative z-10 grid min-w-0 border-t border-l border-line-soft sm:grid-cols-2 lg:-translate-y-4">
            {content.services.map((service) => (
              <Link
                key={service.title}
                href={localizeHref(locale, service.href)}
                className="kacheln2-service-tile group relative flex min-h-[17rem] flex-col overflow-hidden border-r border-b border-line-soft bg-white p-6 transition duration-300 hover:z-10 hover:border-cyan-200 hover:bg-[#fbfeff] focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:min-h-[20rem] sm:p-7"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center text-brand-blue">
                  <Image
                    src={`${assetBase}/${service.icon}`}
                    alt=""
                    aria-hidden="true"
                    width={42}
                    height={42}
                    className="h-10 w-10"
                  />
                </span>

                <span className="relative z-10 mt-auto flex items-end justify-between gap-5 pt-14">
                  <span>
                    <span className="block max-w-64 text-[1.65rem] leading-[1.04] font-semibold tracking-[-0.052em] text-slate-950">
                      {service.title}
                    </span>
                    <span className="mt-3 block max-w-64 text-sm leading-6 font-medium text-slate-600">
                      {service.description}
                    </span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-slate-200 bg-white/80 text-brand-ink transition duration-200 group-hover:translate-x-1 group-hover:border-cyan-200 group-hover:text-brand-cyan">
                    <ArrowIcon />
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute z-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,#000_45%,#000_100%)] ${service.imageClass}`}
                >
                  <Image
                    src={`${assetBase}/${service.image}`}
                    alt=""
                    fill
                    className={service.imageFit}
                    sizes="(min-width: 1024px) 25vw, 100vw"
                  />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {serviceLayout === "tiles" ? (
        <div className="relative border-y border-line-soft bg-[#f5f9fc] px-5 sm:px-6 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[120rem] py-10 sm:py-12">
            <h2 className="max-w-3xl text-2xl leading-tight font-semibold tracking-[-0.045em] text-brand-ink sm:text-3xl">
              {content.taskTitle}
            </h2>
            <ul className="mt-7 grid border-t border-l border-line-soft sm:grid-cols-2 lg:grid-cols-4">
              {content.tasks.map((task) => (
                <li
                  key={task.title}
                  className="kacheln2-task-item grid min-h-36 grid-cols-[2.75rem_1fr] items-start gap-4 border-r border-b border-line-soft bg-white/65 px-5 py-6 sm:min-h-40 sm:px-6"
                >
                  <Image
                    src={`${assetBase}/${task.icon}`}
                    alt=""
                    aria-hidden="true"
                    width={42}
                    height={42}
                    className="h-10 w-10 shrink-0"
                  />
                  <span>
                    <span className="block text-base leading-6 font-semibold tracking-[-0.02em] text-brand-ink">
                      {task.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 font-medium text-slate-600">
                      {task.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
