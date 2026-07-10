"use client";

import {
  useId,
  useSyncExternalStore,
  type ChangeEvent,
  type ReactNode,
} from "react";

import {
  getLandingConceptFromUrl,
  isLandingConcept,
  landingConceptOptions,
  subscribeToLandingConceptChanges,
  updateLandingConceptUrl,
} from "./landing-concept-store";

type LandingConceptComparisonProps = {
  current: ReactNode;
  kacheln: ReactNode;
  iceberg: ReactNode;
};

export function LandingConceptComparison({
  current,
  kacheln,
  iceberg,
}: LandingConceptComparisonProps) {
  const selectId = useId();
  const concept = useSyncExternalStore(
    subscribeToLandingConceptChanges,
    getLandingConceptFromUrl,
    () => "current",
  );

  function handleConceptChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextConcept = event.target.value;

    if (!isLandingConcept(nextConcept)) {
      return;
    }

    updateLandingConceptUrl(nextConcept);
  }

  return (
    <>
      <div className="fixed left-4 top-24 z-[80] rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-xl shadow-slate-300/40 backdrop-blur md:left-6">
        <label
          htmlFor={selectId}
          className="block px-2 pb-1 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-cyan-800"
        >
          Landingpage
        </label>
        <select
          id={selectId}
          value={concept}
          onChange={handleConceptChange}
          className="w-44 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
          aria-label="Landingpage-Konzept auswählen"
        >
          {landingConceptOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {concept === "kacheln"
        ? kacheln
        : concept === "iceberg"
          ? iceberg
          : current}
    </>
  );
}
