"use client";

import Link from "next/link";
import { startTransition, useEffect, useState } from "react";

import { AiAwareImage as Image } from "./ai-aware-image";
import { localizeHref, type Locale } from "../_i18n/config";

type HomePageHeroProps = {
  locale: Locale;
};

const iconBase = "/graphics/solutions-icons";

const conceptContent = {
  de: {
    carouselLabel: "RelTest Leistungsbereiche",
    slideLabel: "Hero-Thema auswählen",
    contactTitle: "Projekt besprechen",
    academyPrompt: "Weiterbildung gesucht?",
    academyCta: "RelTest Education entdecken",
    slides: [
      {
        title:
          "Zuverlässigkeits\u00adberatung für Industrieprodukte.",
        description:
          "Wir verbinden Zuverlässigkeitsziele, technische Risiken, Tests und Daten zu belastbaren Produktentscheidungen.",
        cta: "Zuverlässigkeitstechnik ansehen",
        href: "/leistungen/zuverlaessigkeitstechnik",
        image: "/team/home-engineering-consulting.webp",
        imagePosition:
          "object-[50%_48%] sm:translate-x-[14%] sm:translate-y-[8%] sm:scale-[1.3] sm:object-center",
      },
      {
        title: "Technische Risiken gezielt absichern.",
        description:
          "FMEA, FTA, Risikobewertung und Nachweisplanung werden zu einer nachvollziehbaren Entscheidungsgrundlage verbunden.",
        cta: "Risikomanagement ansehen",
        href: "/leistungen/risikomanagement",
        image: "/graphics/knowledge/risk-management.png",
        imagePosition: "object-center",
      },
      {
        title: "Versuche planen. Lebensdauer belastbar bewerten.",
        description:
          "Design of Experiments, Lebensdauererprobung, Felddatenanalyse und statistische Modelle werden passend zur technischen Frage eingesetzt.",
        cta: "Datenanalyse ansehen",
        href: "/leistungen/datenanalyse-prognostik",
        image: "/graphics/knowledge/testing-realistic.webp",
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
    academyCta: "Explore RelTest Education",
    slides: [
      {
        title: "Reliability consulting for industrial products.",
        description:
          "We connect reliability targets, technical risks, testing and data to support robust product decisions.",
        cta: "Explore reliability engineering",
        href: "/leistungen/zuverlaessigkeitstechnik",
        image: "/team/home-engineering-consulting.webp",
        imagePosition:
          "object-[50%_48%] sm:translate-x-[14%] sm:translate-y-[8%] sm:scale-[1.3] sm:object-center",
      },
      {
        title: "Assure technical risks systematically.",
        description:
          "FMEA, FTA, risk assessment and evidence planning are combined into a traceable basis for decisions.",
        cta: "Explore risk management",
        href: "/leistungen/risikomanagement",
        image: "/graphics/knowledge/risk-management.png",
        imagePosition: "object-center",
      },
      {
        title: "Plan tests. Assess lifetime robustly.",
        description:
          "Design of Experiments, lifetime testing, field data analysis and statistical models are selected for the technical question.",
        cta: "Explore data analysis",
        href: "/leistungen/datenanalyse-prognostik",
        image: "/graphics/knowledge/testing-realistic.webp",
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

export function HomePageHero({
  locale,
}: HomePageHeroProps) {
  const content = conceptContent[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedSlideIndexes, setLoadedSlideIndexes] = useState(
    () => new Set([0]),
  );
  const activeSlide = content.slides[activeIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const nextIndex = (activeIndex + 1) % content.slides.length;
    const timer = window.setTimeout(() => {
      setLoadedSlideIndexes((current) => {
        if (current.has(nextIndex)) {
          return current;
        }

        const next = new Set(current);
        next.add(nextIndex);
        return next;
      });
    }, 4800);

    return () => window.clearTimeout(timer);
  }, [activeIndex, content.slides.length]);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % content.slides.length;

      startTransition(() => {
        setActiveIndex(nextIndex);
      });
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [activeIndex, content.slides.length, isPaused]);

  return (
    <section className="winnstein-hero border-t border-line-soft bg-white">
      <div
        className="relative mx-auto max-w-[96rem] px-5 pt-12 sm:px-6 sm:pt-14 lg:px-12 lg:pt-16 xl:px-16"
        role="region"
        aria-roledescription="carousel"
        aria-label={content.carouselLabel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="relative min-h-[40rem] overflow-hidden border border-line-soft bg-brand-steel-cyan-10 shadow-[0_28px_80px_rgba(3,19,52,0.12)] sm:min-h-[36rem]">
          {content.slides.map((slide, index) => {
            if (!loadedSlideIndexes.has(index)) {
              return null;
            }

            const isActive = index === activeIndex;

            return (
              <div
                key={slide.title}
                aria-hidden="true"
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
                  preload={index === 0}
                  aria-hidden="true"
                  className={`object-cover ${slide.imagePosition}`}
                  sizes="(min-width: 1536px) 1408px, (min-width: 1280px) calc(100vw - 128px), (min-width: 1024px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)"
                />
              </div>
            );
          })}

          <div className="absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.98)_35%,rgba(255,255,255,0.82)_52%,rgba(255,255,255,0.2)_78%,rgba(255,255,255,0.08)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 z-20 h-44 bg-gradient-to-t from-white/85 to-transparent" />

          <div className="relative z-20 flex min-h-[40rem] items-center px-6 py-14 sm:min-h-[36rem] sm:px-10 sm:py-16 lg:px-16 xl:px-20">
            <div
              key={activeSlide.title}
              className="winnstein-hero-copy flex h-[31rem] w-full max-w-[56rem] translate-y-3 flex-col sm:h-[27rem] sm:translate-y-3.5"
            >
              <div className="flex min-h-0 flex-1 items-end">
                <h1
                  className={`text-[clamp(2.05rem,3.2vw,4.1rem)] leading-[1] font-semibold tracking-[-0.045em] text-brand-ink hyphens-manual ${
                    activeSlide.href === "/leistungen/risikomanagement"
                      ? "max-w-[36rem] 2xl:max-w-[52rem]"
                      : "max-w-[52rem]"
                  }`}
                >
                  {activeSlide.title}
                </h1>
              </div>
              <p className="mt-7 min-h-[4.25rem] max-w-[50rem] text-[clamp(1.1rem,1.25vw,1.35rem)] leading-[1.45] font-semibold tracking-[-0.015em] text-brand-marine/82">
                {activeSlide.description}
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                <Link
                  href={localizeHref(locale, activeSlide.href)}
                  className="brand-action inline-flex min-h-12 items-center justify-center gap-4 bg-brand-marine px-7 text-sm font-bold text-white transition hover:bg-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4"
                >
                  {activeSlide.cta}
                  <ArrowIcon />
                </Link>
                <Link
                  href={localizeHref(locale, "/kontakt")}
                  className="brand-action brand-action-outline brand-action-outline-light inline-flex min-h-12 items-center justify-center gap-3 border border-brand-marine/35 bg-white/65 px-7 text-sm font-bold text-brand-marine transition hover:border-brand-steel-cyan hover:text-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4"
                >
                  {content.contactTitle}
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-3 left-6 z-30 flex items-center gap-2.5 sm:bottom-4 sm:left-10 lg:bottom-5 lg:left-16 xl:left-20"
            aria-label={content.slideLabel}
          >
            {content.slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => {
                    setLoadedSlideIndexes((current) => {
                      if (current.has(index)) {
                        return current;
                      }

                      const next = new Set(current);
                      next.add(index);
                      return next;
                    });
                    startTransition(() => setActiveIndex(index));
                  }}
                  className={
                    isActive
                      ? "h-2.5 w-10 bg-brand-steel-cyan transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4"
                      : "h-2.5 w-2.5 bg-brand-marine/35 transition-all duration-300 hover:bg-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4"
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
          className="grid border-x border-b border-line-soft bg-white shadow-[0_18px_55px_rgba(23,52,76,0.08)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        >
          {content.services.map((service) => (
            <Link
              key={service.href}
              href={localizeHref(locale, service.href)}
              className="group flex min-h-28 min-w-0 items-center gap-3 border-r border-b border-line-soft px-5 py-5 transition hover:z-10 hover:bg-brand-steel-cyan-10 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset sm:min-h-32 sm:px-6 2xl:border-b-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand-steel-cyan-10 ring-1 ring-brand-steel-cyan/15 transition group-hover:bg-white">
                <Image
                  src={`${iconBase}/${service.icon}`}
                  alt=""
                  aria-hidden="true"
                  width={44}
                  height={44}
                  className="h-9 w-9"
                />
              </span>
              <span className="min-w-0">
                <span className="block break-words text-base leading-[1.15] font-semibold tracking-[-0.025em] text-brand-ink">
                  {service.title}
                </span>
              </span>
            </Link>
          ))}

          <Link
            href={localizeHref(locale, "/kontakt")}
            className="group flex min-h-28 min-w-0 items-center justify-between gap-5 bg-brand-marine px-6 py-5 text-white transition hover:bg-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset sm:col-span-2 sm:min-h-32 lg:col-span-2 xl:col-span-4 2xl:col-span-1"
          >
            <span className="break-words text-xl font-semibold tracking-[-0.025em]">
              {content.contactTitle}
            </span>
            <span className="shrink-0 text-white transition-transform duration-200 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </nav>

      </div>

      <div className="mx-auto flex max-w-[96rem] justify-stretch px-5 pt-6 sm:justify-end sm:px-6 lg:px-12 xl:px-16">
        <div className="w-full border border-brand-education/25 bg-white shadow-[0_8px_26px_rgba(3,19,52,0.06)] sm:w-auto">
          <Link
            href="https://reltest-academy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-16 w-full flex-col items-start gap-3 px-4 py-4 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-education focus-visible:ring-inset sm:w-auto sm:flex-row sm:items-center sm:gap-5 sm:px-6 sm:py-4"
          >
            <span className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
              <span className="relative h-11 w-28 shrink-0 overflow-hidden sm:h-14 sm:w-40 lg:h-16 lg:w-48">
                <Image
                  src="/branding/reltest-education-horizontal-positive.svg"
                  alt="RelTest Education"
                  width={466}
                  height={226}
                  className="absolute left-0 top-1/2 h-14 w-28 -translate-y-1/2 object-contain sm:h-20 sm:w-40 lg:h-24 lg:w-48"
                />
              </span>
              <span className="min-w-0 text-slate-500">
                {content.academyPrompt}{" "}
                <span className="font-semibold text-brand-marine transition-colors group-hover:text-brand-education">
                  {content.academyCta}
                </span>
              </span>
            </span>
            <span className="self-end shrink-0 text-brand-education transition-transform duration-200 group-hover:translate-x-1 sm:self-auto">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>

      <div className="h-12 border-b border-line-soft bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] sm:h-16" />
    </section>
  );
}
