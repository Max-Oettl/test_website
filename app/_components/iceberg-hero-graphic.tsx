"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

import type { Locale } from "../_i18n/config";

type IcebergHeroGraphicProps = {
  locale: Locale;
};

type IcebergStyle = CSSProperties & Record<`--iceberg-${string}`, string>;
type IcebergPhase = "surface" | "revealing" | "discovered";

const content = {
  de: {
    eyebrow: "Warum Zuverlässigkeitstechnik?",
    title: "Ein sichtbarer Ausfall ist oft nur der Anfang der Analyse.",
    subtitle:
      "Auffällige Testergebnisse, Reklamationen oder Feldausfälle zeigen meist nur das Symptom. Belastbare Entscheidungen entstehen erst, wenn die Ursachen unter der Oberfläche verstanden werden.",
    surfaceLabel: "Sichtbar",
    surfaceTitle: "Auffälliges Testergebnis, Reklamation oder Ausfall",
    contrastLabel: "Symptom ≠ Ursache",
    depthLabel: "Unter der Oberfläche",
    depthTitle: "Mechanismen, Lasten, Streuung und Nachweislogik",
    revealCta: "Ursachen unter der Oberfläche sichtbar machen",
    playingCta: "Übergang läuft ...",
    resetCta: "Zur sichtbaren Ebene zurück",
    imageAlt:
      "KI-generierte technische Eisberg-Grafik zur Zuverlässigkeitstechnik mit sichtbarem Ausfall und verborgenen Ursachen unter der Wasserlinie",
    outcome:
      "Zuverlässigkeitstechnik macht diese Ebenen sichtbar, bewertet Risiken und schafft eine belastbare Grundlage für Entwicklung, Freigabe und Dokumentation.",
    layers: [
      {
        title: "Ausfallmechanismen",
        description: "Welche physikalischen Ursachen das Verhalten treiben.",
      },
      {
        title: "Lasten & Nutzung",
        description: "Welche Einsatzprofile, Umgebungen und Kollektive relevant sind.",
      },
      {
        title: "Streuung & Fertigung",
        description: "Wie Toleranzen, Varianten und Prozesse die Robustheit beeinflussen.",
      },
      {
        title: "Datenqualität & Statistik",
        description: "Wie belastbar Aussagen aus Tests, Felddaten und Stichproben sind.",
      },
      {
        title: "Prüfstrategie & Nachweis",
        description: "Was für Absicherung, Freigabe und Haftungsfragen dokumentiert sein muss.",
      },
    ],
  },
  en: {
    eyebrow: "Why reliability engineering?",
    title: "A visible failure is often only the start of the analysis.",
    subtitle:
      "Conspicuous test results, complaints or field failures usually show only the symptom. Robust decisions require understanding the causes below the surface.",
    surfaceLabel: "Visible",
    surfaceTitle: "Failure, complaint or conspicuous test result",
    contrastLabel: "Signal ≠ root cause",
    depthLabel: "Below the surface",
    depthTitle: "Mechanisms, loads, variation and evidence logic",
    revealCta: "Reveal the causes below the surface",
    playingCta: "Transition in progress ...",
    resetCta: "Return to the visible layer",
    imageAlt:
      "AI-generated technical iceberg visual for reliability engineering with a visible failure signal and hidden causes below the waterline",
    outcome:
      "Reliability engineering makes these layers visible, assesses risks and creates a robust basis for development, release and documentation.",
    layers: [
      {
        title: "Failure mechanisms",
        description: "Which physical causes drive the observed behavior.",
      },
      {
        title: "Loads & usage",
        description: "Which duty cycles, environments and operating profiles matter.",
      },
      {
        title: "Variation & manufacturing",
        description: "How tolerances, variants and processes influence robustness.",
      },
      {
        title: "Data quality & statistics",
        description: "How reliable conclusions from tests, field data and samples are.",
      },
      {
        title: "Test strategy & evidence",
        description: "What needs to be documented for validation, release and liability questions.",
      },
    ],
  },
} as const;

function layerStyle(index: number) {
  return {
    "--iceberg-delay": `${0.18 + index * 0.08}s`,
  } as IcebergStyle;
}

const icebergStartImage = "/graphics/hero/reliability-iceberg-start.png";
const icebergFinalImage = "/graphics/hero/reliability-iceberg-revealed.png";

export function IcebergHeroGraphic({ locale }: IcebergHeroGraphicProps) {
  const text = content[locale];
  const [phase, setPhase] = useState<IcebergPhase>("surface");
  const isDiscovered = phase === "discovered";
  const isRevealing = phase === "revealing";

  useEffect(() => {
    if (phase !== "revealing") {
      return;
    }

    const timer = window.setTimeout(() => {
      setPhase("discovered");
    }, 1900);

    return () => window.clearTimeout(timer);
  }, [phase]);

  function handleRevealClick() {
    if (isRevealing) {
      return;
    }

    if (isDiscovered) {
      setPhase("surface");
      return;
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setPhase("discovered");
      return;
    }

    setPhase("revealing");
  }

  return (
    <div className="iceberg-hero-panel w-full overflow-hidden rounded-[2.4rem] border border-slate-200/80 bg-white/[0.94] p-3 shadow-[0_42px_96px_-44px_rgba(15,23,42,0.46)] ring-1 ring-white/90 backdrop-blur sm:p-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#f5f9fb]">
        <div className="hero-editorial-grid absolute inset-0 opacity-90" />
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute -bottom-32 left-8 h-64 w-64 rounded-full bg-slate-300/35 blur-3xl" />

        <div className="relative z-10 p-4 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-cyan-800">
                {text.eyebrow}
              </p>
              <h2 className="mt-3 max-w-lg text-2xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-3xl">
                {text.title}
              </h2>
            </div>
            <div className="hidden rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-right shadow-sm sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                {text.surfaceLabel}
              </p>
              <p className="mt-1 max-w-36 text-sm font-semibold leading-5 text-slate-900">
                {text.contrastLabel}
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            {text.subtitle}
          </p>

          <div className="mt-5 grid gap-4">
            <div
              className={`relative min-h-[26rem] overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-sm sm:min-h-[30rem] lg:min-h-[32rem] xl:min-h-[34rem] ${
                isDiscovered ? "iceberg-discovered" : "iceberg-collapsed"
              } ${isRevealing ? "iceberg-revealing" : ""}`}
            >
              <Image
                src={icebergStartImage}
                alt=""
                aria-hidden="true"
                fill
                priority
                sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 48vw, 100vw"
                className="iceberg-image-stage iceberg-image-stage-surface object-cover object-[58%_50%]"
              />
              <Image
                src={icebergFinalImage}
                alt={text.imageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 48vw, 100vw"
                className="iceberg-image-stage iceberg-image-stage-full object-cover object-[58%_50%]"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/50 via-white/18 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950/22 via-slate-950/4 to-transparent" />
              <div className="iceberg-morph-edge pointer-events-none absolute left-[6%] right-[6%] top-[28%] h-28 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.72),rgba(186,230,253,0.2)_48%,transparent_72%)] blur-md" />
              <div className="pointer-events-none absolute left-[7%] right-[7%] top-[31%] h-px overflow-hidden rounded-full bg-cyan-950/16">
                <span className="iceberg-water-sheen absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-transparent via-white/85 to-transparent" />
              </div>
              <div className="iceberg-diagnostic-pulse pointer-events-none absolute left-[59.7%] top-[11.7%] h-20 w-20 rounded-full border border-rose-300/55" />
              <div className="iceberg-diagnostic-core pointer-events-none absolute left-[59.7%] top-[11.7%] h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_0_6px_rgba(244,63,94,0.12)]" />
              <div className="iceberg-subsurface-scan pointer-events-none absolute left-[29%] top-[35%] h-[52%] w-px bg-gradient-to-b from-transparent via-cyan-200/75 to-transparent" />
              <div className="iceberg-analysis-node pointer-events-none absolute left-[41%] top-[58%] h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_0_5px_rgba(103,232,249,0.14)]" />
              <div className="iceberg-analysis-node iceberg-analysis-node-delayed pointer-events-none absolute left-[68%] top-[66%] h-2 w-2 rounded-full bg-cyan-100/85 shadow-[0_0_0_5px_rgba(103,232,249,0.12)]" />

              <div className="iceberg-surface-card absolute left-5 top-5 max-w-[14rem] overflow-hidden rounded-[1.35rem] border border-rose-200/80 bg-white/94 px-4 py-3.5 shadow-[0_22px_42px_-22px_rgba(127,29,29,0.44)] ring-1 ring-white/90 backdrop-blur">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500 via-orange-300 to-transparent" />
                <p className="inline-flex rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-700 ring-1 ring-rose-100">
                  {text.surfaceLabel}
                </p>
                <p className="mt-2 text-[0.92rem] font-semibold leading-5 text-slate-950">
                  {text.surfaceTitle}
                </p>
                <button
                  type="button"
                  aria-pressed={phase !== "surface"}
                  disabled={isRevealing}
                  onClick={handleRevealClick}
                  className="iceberg-reveal-button mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-slate-950 via-cyan-950 to-cyan-700 px-4 py-3 text-center text-[11px] font-bold leading-4 text-white shadow-[0_18px_34px_-18px_rgba(8,145,178,0.9)] ring-1 ring-cyan-200/50 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_-20px_rgba(8,145,178,0.95)] disabled:cursor-wait disabled:from-slate-700 disabled:via-slate-700 disabled:to-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                >
                  {isRevealing
                    ? text.playingCta
                    : isDiscovered
                      ? text.resetCta
                      : text.revealCta}
                </button>
              </div>

              <div className="iceberg-depth-card absolute bottom-5 left-5 right-5 overflow-hidden rounded-[1.35rem] border border-cyan-200/90 bg-white/92 px-4 py-3.5 shadow-[0_24px_52px_-24px_rgba(8,47,73,0.46)] ring-1 ring-white/80 backdrop-blur">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-300 to-transparent" />
                <p className="inline-flex rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-800 ring-1 ring-cyan-100">
                  {text.depthLabel}
                </p>
                <p className="mt-2 text-[0.92rem] font-semibold leading-5 text-slate-950">
                  {text.depthTitle}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {text.layers.map((layer) => (
                    <span
                      key={layer.title}
                      className="rounded-full border border-cyan-100 bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-700 shadow-sm"
                    >
                      {layer.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="iceberg-depth-layer rounded-2xl border border-cyan-200/80 bg-cyan-50/80 p-4 shadow-sm"
              style={layerStyle(0)}
            >
              <p className="text-sm font-semibold leading-6 text-cyan-950">
                {text.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
