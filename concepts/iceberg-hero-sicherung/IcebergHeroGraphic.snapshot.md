# IcebergHeroGraphic Snapshot

Dies ist ein Sicherungsschnappschuss der bisherigen Eisberg-Komponente.

```tsx
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

              {/* Weitere Overlay-, Button- und Ebenen-Elemente siehe ursprüngliche Datei app/_components/iceberg-hero-graphic.tsx. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

Hinweis: Der Snapshot ist bewusst als Markdown abgelegt, damit er nicht vom TypeScript-Build kompiliert wird.
