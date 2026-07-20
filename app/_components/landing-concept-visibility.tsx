"use client";

import { useSyncExternalStore, type ReactNode } from "react";

import {
  getLandingConceptFromUrl,
  getServerLandingConcept,
  subscribeToLandingConceptChanges,
  type LandingConcept,
} from "./landing-concept-store";

type LandingConceptVisibilityProps = {
  children: ReactNode;
  hiddenFor?: LandingConcept | readonly LandingConcept[];
  visibleFor?: LandingConcept | readonly LandingConcept[];
};

function matchesConcept(
  configuredConcept: LandingConcept | readonly LandingConcept[],
  activeConcept: LandingConcept,
) {
  return typeof configuredConcept === "string"
    ? configuredConcept === activeConcept
    : configuredConcept.includes(activeConcept);
}

export function LandingConceptVisibility({
  children,
  hiddenFor,
  visibleFor,
}: LandingConceptVisibilityProps) {
  const concept = useSyncExternalStore(
    subscribeToLandingConceptChanges,
    getLandingConceptFromUrl,
    getServerLandingConcept,
  );

  if (visibleFor && !matchesConcept(visibleFor, concept)) {
    return null;
  }

  return hiddenFor && matchesConcept(hiddenFor, concept) ? null : children;
}
