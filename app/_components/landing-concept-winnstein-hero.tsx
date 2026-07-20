"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useEffect, useState } from "react";

import { localizeHref, type Locale } from "../_i18n/config";

type LandingConceptWinnsteinHeroProps = {
  locale: Locale;
};

const iconBase = "/concepts/landingpage-ingenics-kacheln";

const conceptContent = {
  de: {
    carouselLabel: "RelTest Leistungsbereiche",
    slideLabel: "Hero-Thema auswählen",
    contactTitle: "Projekt besprechen",
    academyPrompt: "Weiterbildung gesucht?",
    academyCta: "RelTest Academy entdecken",
    slides: [
      {
        title: "Zuverlässigkeit verstehen. Entscheidungen absichern.",
        description:
          "Ingenieursberatung für Zuverlässigkeitstechnik und Risikomanagement von der Entwicklung bis zur Freigabe.",
        cta: "Zuverlässigkeitstechnik ansehen",
        href: "/leistungen/zuverlaessigkeitstechnik",
        image: "/team/home-engineering-consulting.png",
        imagePosition: "object-[65%_center]",
      },
      {
        title: "Risiken priorisieren. Maßnahmen wirksam ausrichten.",
        description:
          "RelTest verbindet technische Risikobewertung mit Absicherung, Nachweisen und nachvollziehbarer Dokumentation.",
        cta: "Risikomanagement ansehen",
        href: "/leistungen/risikomanagement",
        image: "/graphics/knowledge/risk-management.png",
        imagePosition: "object-center",
      },
      {
        title: "Tests und Daten in belastbare Aussagen übersetzen.",
        description:
          "Versuchsplanung, DoE und statistische Analyse schaffen Klarheit über Lebensdauer, Streuung und Feldverhalten.",
        cta: "Datenanalyse ansehen",
        href: "/leistungen/datenanalyse-prognostik",
        image: "/graphics/knowledge/testing.png",
        imagePosition: "object-center",
      },
    ],
    services: [
      {
        title: "Zuverlässigkeitstechnik",
        href: "/leistungen/zuverlaessigkeitstechnik",
        icon: "icon-target.svg",
      },
      {
        title: "Risiko & Absicherung",
        href: "/leistungen/risikomanagement",
        icon: "icon-shield.svg",
      },
      {
        title: "Test & Datenanalyse",
        href: "/leistungen/datenanalyse-prognostik",
        icon: "icon-database.svg",
      },
      {
        title: "Projektpartnerschaft",
        href: "/leistungen/langfristige-kooperation",
        icon: "icon-handshake.svg",
      },
    ],
  },
  en: {
    carouselLabel: "RelTest service areas",
    slideLabel: "Select hero topic",
    contactTitle: "Discuss a project",
    academyPrompt: "Looking for professional training?",
    academyCta: "Explore the RelTest Academy",
    slides: [
      {
        title: "Understand reliability. Safeguard decisions.",
        description:
          "Engineering consulting for reliability and risk management from development through release.",
        cta: "Explore reliability engineering",
        href: "/leistungen/zuverlaessigkeitstechnik",
        image: "/team/home-engineering-consulting.png",
        imagePosition: "object-[65%_center]",
      },
      {
        title: "Prioritise risks. Direct measures effectively.",
        description:
          "RelTest connects technical risk assessment with assurance, evidence and traceable documentation.",
        cta: "Explore risk management",
        href: "/leistungen/risikomanagement",
        image: "/graphics/knowledge/risk-management.png",
        imagePosition: "object-center",
      },
      {
        title: "Turn tests and data into robust conclusions.",
        description:
          "Test planning, DoE and statistical analysis clarify lifetime, variation and field behaviour.",
        cta: "Explore data analysis",
        href: "/leistungen/datenanalyse-prognostik",
        image: "/graphics/knowledge/testing.png",
        imagePosition: "object-center",
      },
    ],
    services: [
      {
        title: "Reliability engineering",
        href: "/leistungen/zuverlaessigkeitstechnik",
        icon: "icon-target.svg",
      },
      {
        title: "Risk & assurance",
        href: "/leistungen/risikomanagement",
        icon: "icon-shield.svg",
      },
      {
        title: "Testing & data analysis",
        href: "/leistungen/datenanalyse-prognostik",
        icon: "icon-database.svg",
      },
      {
        title: "Project partnership",
        href: "/leistungen/langfristige-kooperation",
        icon: "icon-handshake.svg",
      },
    ],
  },
} as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
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

export function LandingConceptWinnsteinHero({
  locale,
}: LandingConceptWinnsteinHeroProps) {
  const content = conceptContent[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      startTransition(() => {
        setActiveIndex((current) => (current + 1) % content.slides.length);
      });
    }, 6500);

    return () => window.clearInterval(timer);
  }, [content.slides.length, isPaused]);

  return (
    <section className="border-t border-line-soft bg-white">
      <div
        className="relative mx-auto max-w-[120rem] px-5 pt-8 sm:px-6 sm:pt-10 lg:px-12 xl:px-16"
        role="region"
        aria-roledescription="carousel"
        aria-label={content.carouselLabel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="relative min-h-[35rem] overflow-hidden border border-line-soft bg-[#edf5f8] shadow-[0_28px_80px_rgba(23,52,76,0.12)] sm:min-h-[38rem] lg:min-h-[40rem]">
          {content.slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={slide.title}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-[opacity,transform] duration-1000 ease-out motion-reduce:transition-none ${
                  isActive
                    ? "z-10 scale-100 opacity-100"
                    : "pointer-events-none z-0 scale-[1.015] opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={index === 0}
                  aria-hidden="true"
                  className={`object-cover ${slide.imagePosition}`}
                  sizes="(min-width: 1280px) 110rem, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.98)_35%,rgba(255,255,255,0.82)_52%,rgba(255,255,255,0.2)_78%,rgba(255,255,255,0.08)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white/85 to-transparent" />

                <div className="relative flex min-h-[35rem] items-center px-6 py-20 sm:min-h-[38rem] sm:px-10 lg:min-h-[40rem] lg:px-16 xl:px-20">
                  <div className="max-w-[49rem]">
                    <h1 className="max-w-[47rem] text-[clamp(2.65rem,4.3vw,5.25rem)] leading-[0.96] font-semibold tracking-[-0.068em] text-brand-ink">
                      {slide.title}
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-7 font-medium text-slate-600 sm:text-lg sm:leading-8">
                      {slide.description}
                    </p>
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                      <Link
                        href={localizeHref(locale, slide.href)}
                        className="inline-flex min-h-12 items-center justify-center gap-4 bg-brand-ink px-7 text-sm font-bold text-white shadow-[0_14px_30px_rgba(7,20,48,0.16)] transition hover:bg-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
                      >
                        {slide.cta}
                        <ArrowIcon />
                      </Link>
                      <Link
                        href={localizeHref(locale, "/kontakt")}
                        className="inline-flex min-h-12 items-center justify-center gap-3 border-b-2 border-brand-cyan px-1 text-sm font-bold text-brand-ink transition hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
                      >
                        {content.contactTitle}
                        <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className="absolute bottom-7 left-6 z-30 flex items-center gap-2.5 sm:left-10 lg:left-16 xl:left-20"
            aria-label={content.slideLabel}
          >
            {content.slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => {
                    startTransition(() => setActiveIndex(index));
                  }}
                  className={
                    isActive
                      ? "h-2.5 w-10 bg-brand-cyan transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
                      : "h-2.5 w-2.5 bg-slate-400/65 transition-all duration-300 hover:bg-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
                  }
                  aria-label={`${index + 1}: ${slide.title}`}
                  aria-current={isActive ? "true" : undefined}
                />
              );
            })}
          </div>
        </div>

        <nav
          aria-label={content.carouselLabel}
          className="grid border-x border-b border-line-soft bg-white shadow-[0_18px_55px_rgba(23,52,76,0.08)] sm:grid-cols-2 lg:grid-cols-5"
        >
          {content.services.map((service) => (
            <Link
              key={service.href}
              href={localizeHref(locale, service.href)}
              className="group flex min-h-28 items-center gap-5 border-r border-b border-line-soft px-5 py-5 transition hover:z-10 hover:bg-[#f3fbfe] focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:min-h-32 sm:px-6 lg:border-b-0"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-cyan-50 ring-1 ring-cyan-100 transition group-hover:bg-white">
                <Image
                  src={`${iconBase}/${service.icon}`}
                  alt=""
                  aria-hidden="true"
                  width={44}
                  height={44}
                  className="h-10 w-10"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-lg leading-tight font-semibold tracking-[-0.035em] text-brand-ink">
                  {service.title}
                </span>
              </span>
            </Link>
          ))}

          <Link
            href={localizeHref(locale, "/kontakt")}
            className="group flex min-h-28 items-center justify-between gap-5 bg-brand-ink px-6 py-5 text-white transition hover:bg-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:col-span-2 sm:min-h-32 lg:col-span-1"
          >
            <span className="text-xl font-semibold tracking-[-0.035em]">
              {content.contactTitle}
            </span>
            <span className="shrink-0 text-cyan-100 transition-transform duration-200 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </nav>

      </div>

      <div className="mx-auto flex max-w-[120rem] justify-end px-5 pt-6 sm:px-6 lg:px-12 xl:px-16">
        <div className="border border-line-soft bg-[#f7fafc] shadow-[0_8px_26px_rgba(23,52,76,0.06)]">
          <Link
            href={localizeHref(locale, "/weiterbildung/academy")}
            className="group inline-flex min-h-16 items-center gap-5 px-5 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:px-6"
          >
            <span className="flex min-w-0 items-center gap-4 sm:gap-5">
              <Image
                src="/academy/reltest-academy-logo.webp"
                alt=""
                aria-hidden="true"
                width={820}
                height={406}
                className="h-11 w-auto shrink-0 object-contain sm:h-12"
              />
              <span className="min-w-0 text-slate-500">
                {content.academyPrompt}{" "}
                <span className="font-semibold text-brand-ink transition-colors group-hover:text-brand-cyan">
                  {content.academyCta}
                </span>
              </span>
            </span>
            <span className="shrink-0 text-brand-cyan transition-transform duration-200 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>

      <div className="h-12 border-b border-line-soft bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] sm:h-16" />
    </section>
  );
}
