"use client";

import Link from "next/link";
import {
  startTransition,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

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
    previousSlide: "Vorheriges Hero-Thema",
    nextSlide: "Nächstes Hero-Thema",
    contactTitle: "Projekt besprechen",
    serviceCta: "Leistung im Detail",
    academyPrompt: "Weiterbildung gesucht?",
    academyCta: "RelTest Education entdecken",
    slides: [
      {
        title: "Ziele definieren. Lebensdauer systematisch bewerten.",
        description:
          "Wir übersetzen reale Nutzung in messbare Zuverlässigkeitsziele, bewerten relevante Ausfallmechanismen und entwickeln passende Nachweiskonzepte.",
        href: "/leistungen/zuverlaessigkeitstechnik",
        image: "/team/home-engineering-consulting.webp",
        imagePosition:
          "object-[50%_48%] sm:translate-x-[14%] sm:translate-y-[8%] sm:scale-[1.3] sm:object-center",
      },
      {
        title: "Technische Risiken gezielt absichern.",
        description:
          "FMEA, FTA, Risikobewertung und Nachweisplanung werden zu einer nachvollziehbaren Entscheidungsgrundlage verbunden.",
        href: "/leistungen/risikomanagement",
        image: "/graphics/knowledge/risk-management.png",
        imagePosition: "object-center",
      },
      {
        title: "Versuche planen. Lebensdauer belastbar bewerten.",
        description:
          "Design of Experiments, Lebensdauererprobung, Felddatenanalyse und statistische Modelle werden passend zur technischen Frage eingesetzt.",
        href: "/leistungen/datenanalyse-prognostik",
        image: "/graphics/knowledge/testing-realistic.webp",
        imagePosition: "object-center",
      },
      {
        title: "Engineering-Arbeitspakete verlässlich übernehmen.",
        description:
          "RelTest übernimmt klar definierte Arbeitspakete über Projektphasen hinweg. Ergebnisse, Schnittstellen, Abnahme, Dokumentation und Verantwortungsrahmen werden vorab vereinbart.",
        href: "/leistungen/langfristige-kooperation",
        image: "/team/project-partnership-team-review-v2.webp",
        imagePosition: "object-center",
      },
    ],
    services: [
      {
        title: "Planung & Lebensdauer",
        summary: "Ziele, Nutzung, Nachweiskonzept",
        icon: "icon-target.svg",
      },
      {
        title: "Risiko & Absicherung",
        summary: "Schwachstellen, FMEA, Freigabe",
        icon: "icon-shield.svg",
      },
      {
        title: "Test & Datenanalyse",
        summary: "Versuche, Felddaten, Modelle",
        icon: "icon-database.svg",
      },
      {
        title: "Projektpartnerschaft",
        summary: "Arbeitspakete, Abnahme, Verantwortung",
        icon: "icon-handshake.svg",
      },
    ],
  },
  en: {
    carouselLabel: "RelTest service areas",
    slideLabel: "Select hero topic",
    previousSlide: "Previous hero topic",
    nextSlide: "Next hero topic",
    contactTitle: "Discuss a project",
    serviceCta: "View service details",
    academyPrompt: "Looking for professional training?",
    academyCta: "Explore RelTest Education",
    slides: [
      {
        title: "Define targets. Assess lifetime systematically.",
        description:
          "We translate real-world use into measurable reliability targets, assess relevant failure mechanisms and develop suitable verification concepts.",
        href: "/leistungen/zuverlaessigkeitstechnik",
        image: "/team/home-engineering-consulting.webp",
        imagePosition:
          "object-[50%_48%] sm:translate-x-[14%] sm:translate-y-[8%] sm:scale-[1.3] sm:object-center",
      },
      {
        title: "Assure technical risks systematically.",
        description:
          "FMEA, FTA, risk assessment and evidence planning are combined into a traceable basis for decisions.",
        href: "/leistungen/risikomanagement",
        image: "/graphics/knowledge/risk-management.png",
        imagePosition: "object-center",
      },
      {
        title: "Plan tests. Assess lifetime robustly.",
        description:
          "Design of Experiments, lifetime testing, field data analysis and statistical models are selected for the technical question.",
        href: "/leistungen/datenanalyse-prognostik",
        image: "/graphics/knowledge/testing-realistic.webp",
        imagePosition: "object-center",
      },
      {
        title: "Take ownership of defined engineering work packages.",
        description:
          "RelTest takes ownership of clearly defined work packages across project phases. Deliverables, interfaces, acceptance, documentation and responsibility are agreed in advance.",
        href: "/leistungen/langfristige-kooperation",
        image: "/team/project-partnership-team-review-v2.webp",
        imagePosition: "object-center",
      },
    ],
    services: [
      {
        title: "Planning & lifetime",
        summary: "Targets, use, verification concept",
        icon: "icon-target.svg",
      },
      {
        title: "Risk & assurance",
        summary: "Weak points, FMEA, release",
        icon: "icon-shield.svg",
      },
      {
        title: "Testing & data analysis",
        summary: "Tests, field data, models",
        icon: "icon-database.svg",
      },
      {
        title: "Project partnership",
        summary: "Work packages, acceptance, ownership",
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
  const [isDragging, setIsDragging] = useState(false);
  const [loadedSlideIndexes, setLoadedSlideIndexes] = useState(
    () => new Set([0]),
  );
  const pointerGestureRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
  } | null>(null);
  const suppressClickRef = useRef(false);
  const activeSlide = content.slides[activeIndex];

  function selectSlide(index: number, userInitiated = false) {
    setLoadedSlideIndexes((current) => {
      if (current.has(index)) {
        return current;
      }

      const next = new Set(current);
      next.add(index);
      return next;
    });

    if (userInitiated) {
      setActiveIndex(index);
      return;
    }

    startTransition(() => setActiveIndex(index));
  }

  function moveSlide(direction: -1 | 1) {
    const nextIndex =
      (activeIndex + direction + content.slides.length) %
      content.slides.length;

    selectSlide(nextIndex, true);
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    if (
      event.target instanceof Element &&
      event.target.closest("a, button")
    ) {
      return;
    }

    pointerGestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const gesture = pointerGestureRef.current;

    if (!gesture || gesture.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - gesture.startX;
    const deltaY = event.clientY - gesture.startY;
    const isHorizontalSwipe =
      Math.abs(deltaX) >= 54 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15;

    pointerGestureRef.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!isHorizontalSwipe) {
      return;
    }

    suppressClickRef.current = true;
    window.requestAnimationFrame(() => {
      suppressClickRef.current = false;
    });
    moveSlide(deltaX < 0 ? 1 : -1);
  }

  function handlePointerCancel(event: ReactPointerEvent<HTMLDivElement>) {
    pointerGestureRef.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
    if (!suppressClickRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  }

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
    if (
      isPaused ||
      isDragging ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % content.slides.length;

      selectSlide(nextIndex);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [
    activeIndex,
    content.slides.length,
    isDragging,
    isPaused,
  ]);

  return (
    <section className="winnstein-hero border-t border-line-soft bg-white">
      <div
        className="relative mx-auto max-w-[96rem] px-5 pt-12 sm:px-6 sm:pt-14 lg:px-12 lg:pt-16 xl:px-16"
        role="region"
        aria-roledescription="carousel"
        aria-label={content.carouselLabel}
        onFocusCapture={(event) =>
          setIsPaused(
            event.target instanceof HTMLElement &&
              event.target.matches(":focus-visible"),
          )
        }
        onBlurCapture={() => setIsPaused(false)}
      >
        <div
          className="relative min-h-[49rem] touch-pan-y overflow-hidden border border-line-soft bg-brand-steel-cyan-10 shadow-[0_28px_80px_rgba(3,19,52,0.12)] sm:min-h-[40rem] md:min-h-[38rem]"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onClickCapture={handleClickCapture}
          onDragStart={(event) => event.preventDefault()}
        >
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
                  quality={90}
                  aria-hidden="true"
                  draggable={false}
                  className={`object-cover ${slide.imagePosition}`}
                  sizes="(min-width: 1536px) 1408px, (min-width: 1280px) calc(100vw - 128px), (min-width: 1024px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)"
                />
              </div>
            );
          })}

          <div className="absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.96)_24%,rgba(255,255,255,0.76)_38%,rgba(255,255,255,0.46)_52%,rgba(255,255,255,0.18)_66%,rgba(255,255,255,0.04)_78%,rgba(255,255,255,0)_86%)]" />
          <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-white/40 via-white/10 to-transparent" />

          <div className="relative z-20 flex min-h-[49rem] items-center px-6 pt-12 pb-36 sm:min-h-[40rem] sm:px-10 sm:pt-14 sm:pb-36 md:min-h-[38rem] md:pt-16 md:pb-24 lg:px-16 xl:px-20">
            <div
              key={activeSlide.title}
              className="winnstein-hero-copy flex min-h-[31rem] w-full min-w-0 max-w-[56rem] translate-y-3 flex-col sm:min-h-[27rem] sm:translate-y-3.5"
            >
              <div className="flex min-h-0 flex-1 items-end">
                <h1
                  className={`winnstein-hero-title min-w-0 max-w-full text-[clamp(2rem,8vw,2.5rem)] leading-[1.15] font-semibold text-brand-ink hyphens-auto [overflow-wrap:anywhere] sm:text-[clamp(2.5rem,4.8vw,4.1rem)] lg:text-[clamp(3rem,3.2vw,4.1rem)] ${
                    activeSlide.href === "/leistungen/risikomanagement"
                      ? "max-w-[36rem] 2xl:max-w-[52rem]"
                      : "max-w-[52rem]"
                  }`}
                >
                  {activeSlide.href ===
                  "/leistungen/zuverlaessigkeitstechnik" ? (
                    <>
                      <span>
                        {locale === "de"
                          ? "Ziele definieren."
                          : "Define targets."}
                      </span>
                      <span className="block">
                        {locale === "de"
                          ? "Lebensdauer systematisch bewerten."
                          : "Assess lifetime systematically."}
                      </span>
                    </>
                  ) : activeSlide.href ===
                    "/leistungen/datenanalyse-prognostik" ? (
                    <>
                      <span>
                        {locale === "de" ? "Versuche planen." : "Plan tests."}
                      </span>
                      <span className="block">
                        {locale === "de"
                          ? "Lebensdauer belastbar bewerten."
                          : "Assess lifetime robustly."}
                      </span>
                    </>
                  ) : activeSlide.href ===
                    "/leistungen/langfristige-kooperation" ? (
                    <>
                      <span>
                        {locale === "de"
                          ? "Engineering-Arbeitspakete"
                          : "Take ownership of defined"}
                      </span>
                      <span className="min-[1120px]:block 2xl:inline">
                        {locale === "de"
                          ? " verlässlich übernehmen."
                          : " engineering work packages."}
                      </span>
                    </>
                  ) : (
                    activeSlide.title
                  )}
                </h1>
              </div>
              <p className="mt-7 min-h-[4.25rem] max-w-[50rem] text-[clamp(1.1rem,1.25vw,1.35rem)] leading-[1.45] font-semibold tracking-[-0.015em] text-brand-marine/82">
                {activeSlide.description}
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                <Link
                  href={localizeHref(locale, "/kontakt")}
                  className="brand-action group inline-flex min-h-14 items-center justify-center gap-4 bg-brand-marine px-8 text-base font-bold text-white transition-colors hover:bg-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4"
                >
                  {content.contactTitle}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
                <Link
                  href={localizeHref(locale, activeSlide.href)}
                  aria-label={`${content.serviceCta}: ${content.services[activeIndex].title}`}
                  className="group inline-flex min-h-12 w-fit items-center justify-center gap-3 border-b-2 border-brand-steel-cyan px-1 py-2 text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-4"
                >
                  {content.serviceCta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-30 border-t border-brand-marine/12 bg-white/88 px-3 py-2 backdrop-blur-md sm:px-5 lg:px-6">
            <div className="flex items-stretch gap-2">
              <div
                className="grid min-w-0 flex-1 grid-cols-2 items-stretch md:grid-cols-4"
                aria-label={content.slideLabel}
              >
                {content.slides.map((slide, index) => {
                  const isActive = index === activeIndex;
                  const topic = content.services[index];

                  return (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => selectSlide(index, true)}
                      onMouseEnter={() => selectSlide(index, true)}
                      onFocus={() => selectSlide(index, true)}
                      className={`group relative flex min-h-14 min-w-0 items-center justify-start gap-2.5 px-2.5 py-2 text-left font-winnstein-display transition-colors focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset sm:gap-3 sm:px-3 lg:px-4 ${
                        isActive
                          ? "text-brand-marine"
                          : "text-brand-marine/68 hover:bg-white/55 hover:text-brand-marine"
                      }`}
                      aria-pressed={isActive}
                      aria-label={`${topic.title}: ${topic.summary}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 top-0 h-0.5 transition-colors ${
                          isActive
                            ? "bg-brand-steel-cyan"
                            : "bg-transparent group-hover:bg-brand-steel-cyan/35"
                        }`}
                      />
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center transition-colors ${
                          isActive
                            ? "bg-brand-steel-cyan-20"
                            : "bg-white/60 group-hover:bg-brand-steel-cyan-10"
                        }`}
                      >
                        <Image
                          src={`${iconBase}/${topic.icon}`}
                          alt=""
                          aria-hidden="true"
                          width={40}
                          height={40}
                          className="h-8 w-8"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block hyphens-auto text-xs leading-tight font-bold [overflow-wrap:anywhere] sm:text-sm xl:text-[0.95rem]">
                          {topic.title}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="hidden shrink-0 items-center gap-1 border-l border-brand-marine/12 pl-2 lg:flex">
                <button
                  type="button"
                  onClick={() => moveSlide(-1)}
                  className="flex h-11 w-11 items-center justify-center text-brand-marine transition-colors hover:bg-white/70 hover:text-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
                  aria-label={content.previousSlide}
                >
                  <span className="rotate-180">
                    <ArrowIcon />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => moveSlide(1)}
                  className="flex h-11 w-11 items-center justify-center text-brand-marine transition-colors hover:bg-white/70 hover:text-brand-steel-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
                  aria-label={content.nextSlide}
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mx-auto flex max-w-[96rem] justify-stretch px-5 pt-5 sm:justify-end sm:px-6 lg:px-12 xl:px-16">
        <div className="w-full border border-brand-education/25 bg-white shadow-[0_8px_26px_rgba(3,19,52,0.06)] sm:w-auto">
          <Link
            href="https://reltest-academy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-16 w-full flex-col items-start gap-3 px-4 py-3.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-education focus-visible:ring-inset sm:w-auto sm:flex-row sm:items-center sm:gap-5 sm:px-6 sm:py-3"
          >
            <span className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
              <span className="relative h-10 w-28 shrink-0 overflow-hidden sm:h-12 sm:w-36 lg:h-14 lg:w-40">
                <Image
                  src="/branding/reltest-education-horizontal-positive.svg"
                  alt="RelTest Education"
                  width={466}
                  height={226}
                  className="absolute left-0 top-1/2 h-14 w-28 -translate-y-1/2 object-contain sm:h-[4.5rem] sm:w-36 lg:h-20 lg:w-40"
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

      <div className="h-6 border-b border-line-soft bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] sm:h-8" />
    </section>
  );
}
