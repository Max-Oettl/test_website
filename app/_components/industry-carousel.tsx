"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { AiAwareImage as Image } from "./ai-aware-image";

type IndustryCarouselItem = {
  name: string;
  href: string;
  image: string;
};

type IndustryCarouselProps = {
  items: readonly IndustryCarouselItem[];
  ctaLabel: string;
  eyebrowLabel?: string;
  navigationLabel: string;
  nextLabel: string;
  previousLabel: string;
  slideLabel: string;
  intervalMs?: number;
};

export function IndustryCarousel({
  items,
  ctaLabel,
  eyebrowLabel,
  navigationLabel,
  nextLabel,
  previousLabel,
  slideLabel,
  intervalMs = 5000,
}: IndustryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeItem = items[activeIndex] ?? items[0];
  const hasMultipleItems = items.length > 1;

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
  };

  useEffect(() => {
    if (isPaused || !hasMultipleItems) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [hasMultipleItems, intervalMs, isPaused, items.length]);

  if (!activeItem) {
    return null;
  }

  return (
    <div
      className="home-industries-carousel mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Link
        key={activeItem.href}
        href={activeItem.href}
        className="industry-carousel-card group relative block overflow-hidden rounded-[1.65rem] border border-white/80 bg-brand-ink p-6 text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-panel focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
      >
        <Image
          src={activeItem.image}
          alt=""
          fill
          aria-hidden="true"
          className="object-cover opacity-64 transition duration-700 group-hover:scale-105 group-hover:opacity-78"
          sizes="(min-width: 1320px) 72vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.48)_42%,rgba(2,6,23,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-ink/84 via-brand-ink/28 to-transparent" />
        <div className="relative flex min-h-[24rem] max-w-2xl flex-col justify-end">
          {eyebrowLabel ? (
            <p className="text-sm font-semibold tracking-[-0.02em] text-cyan-100/90">
              {eyebrowLabel}
            </p>
          ) : null}
          <h3 className="mt-3 text-4xl font-semibold leading-none tracking-[-0.065em] text-white sm:text-5xl">
            {activeItem.name}
          </h3>
          <p className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2.5 text-sm font-semibold tracking-[-0.01em] text-slate-100 backdrop-blur-md transition-colors group-hover:border-cyan-100/55 group-hover:bg-white/16">
            {ctaLabel}
            <span
              aria-hidden="true"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/12 text-cyan-100 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                <path
                  d="M3 8h9m-3.5-3.5L12 8l-3.5 3.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
          </p>
        </div>
      </Link>

      {hasMultipleItems ? (
        <div
          className="mt-6 flex items-center justify-center gap-4"
          aria-label={navigationLabel}
        >
          <button
            type="button"
            onClick={showPrevious}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/86 text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
            aria-label={previousLabel}
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3.5 5.5 8l4.5 4.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.9"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={
                    isActive
                      ? "h-2.5 w-9 rounded-full bg-brand-cyan shadow-[0_0_0_4px_rgba(8,145,178,0.12)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
                      : "h-2.5 w-2.5 rounded-full bg-slate-300 transition-all duration-300 hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
                  }
                  aria-label={`${slideLabel}: ${item.name}`}
                  aria-current={isActive ? "true" : undefined}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={showNext}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/86 text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
            aria-label={nextLabel}
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m6 3.5 4.5 4.5L6 12.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.9"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}
