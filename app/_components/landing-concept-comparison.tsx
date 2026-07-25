"use client";

import {
  useId,
  useSyncExternalStore,
  type ChangeEvent,
  type ReactNode,
} from "react";

import {
  getLandingConceptFromUrl,
  getServerLandingConcept,
  isLandingConcept,
  landingConceptOptions,
  subscribeToLandingConceptChanges,
  updateLandingConceptUrl,
} from "./landing-concept-store";

type LandingConceptComparisonProps = {
  current: ReactNode;
  kacheln: ReactNode;
  kacheln2: ReactNode;
  kacheln3: ReactNode;
  kacheln31: ReactNode;
  winnstein: ReactNode;
  winnsteinLogo: ReactNode;
  iceberg: ReactNode;
};

export function LandingConceptComparison({
  current,
  kacheln,
  kacheln2,
  kacheln3,
  kacheln31,
  winnstein,
  winnsteinLogo,
  iceberg,
}: LandingConceptComparisonProps) {
  const selectId = useId();
  const concept = useSyncExternalStore(
    subscribeToLandingConceptChanges,
    getLandingConceptFromUrl,
    getServerLandingConcept,
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
      <div className="relative z-[80] mt-4 ml-4 w-fit rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-xl shadow-slate-300/40 backdrop-blur md:fixed md:top-24 md:left-6 md:mt-0 md:ml-0">
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
          className="w-52 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
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
        : concept === "kacheln2"
          ? kacheln2
          : concept === "kacheln3"
            ? kacheln3
            : concept === "kacheln31"
              ? kacheln31
              : concept === "winnstein"
                ? winnstein
                : concept === "winnsteinLogo"
                  ? winnsteinLogo
                  : concept === "iceberg"
                    ? iceberg
                    : current}
    </>
  );
}
