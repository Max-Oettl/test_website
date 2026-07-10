"use client";

import { useEffect, useSyncExternalStore } from "react";

import {
  getLandingConceptFromUrl,
  subscribeToLandingConceptChanges,
} from "./landing-concept-store";

export function LandingConceptBodySync() {
  const concept = useSyncExternalStore(
    subscribeToLandingConceptChanges,
    getLandingConceptFromUrl,
    () => "current",
  );

  useEffect(() => {
    document.body.dataset.landingConcept = concept;

    return () => {
      document.body.dataset.landingConcept = "current";
    };
  }, [concept]);

  return null;
}
