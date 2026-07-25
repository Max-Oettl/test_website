"use client";

import { useEffect, useSyncExternalStore } from "react";

import {
  getLandingConceptFromUrl,
  getServerLandingConcept,
  subscribeToLandingConceptChanges,
} from "./landing-concept-store";

export function LandingConceptBodySync() {
  const concept = useSyncExternalStore(
    subscribeToLandingConceptChanges,
    getLandingConceptFromUrl,
    getServerLandingConcept,
  );

  useEffect(() => {
    const visualConcept =
      concept === "kacheln2" ||
      concept === "kacheln3" ||
      concept === "kacheln31" ||
      concept === "winnstein" ||
      concept === "winnsteinLogo"
        ? "kacheln"
        : concept;

    document.body.dataset.landingConcept = visualConcept;
    document.body.dataset.landingConceptVariant = concept;

    return () => {
      document.body.dataset.landingConcept = "current";
      document.body.dataset.landingConceptVariant = "current";
    };
  }, [concept]);

  return null;
}
