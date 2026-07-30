"use client";

export type LandingConcept =
  | "current"
  | "kacheln"
  | "kacheln2"
  | "kacheln3"
  | "kacheln31"
  | "winnstein"
  | "winnsteinLogo"
  | "iceberg";

export const landingConceptOptions: Array<{
  value: LandingConcept;
  label: string;
}> = [
  { value: "current", label: "Problemfragen" },
  { value: "kacheln", label: "Leistungskacheln" },
  { value: "kacheln2", label: "Leistungskacheln 2.0" },
  { value: "kacheln3", label: "Leistungskacheln 3.0" },
  { value: "kacheln31", label: "Leistungskacheln 3.1" },
  { value: "winnstein", label: "Winnstein-Konzept" },
  { value: "winnsteinLogo", label: "Winnstein - neues Logo" },
  { value: "iceberg", label: "Eisbergdiagnose" },
];

const conceptChangeEvent = "reltest-landing-concept-change";
// Alternative concepts remain archived in the repository, but are not public UI options.
const activeLandingConcept: LandingConcept = "winnstein";

export function isLandingConcept(value: string): value is LandingConcept {
  return (
    value === "current" ||
    value === "kacheln" ||
    value === "kacheln2" ||
    value === "kacheln3" ||
    value === "kacheln31" ||
    value === "winnstein" ||
    value === "winnsteinLogo" ||
    value === "iceberg"
  );
}

export function getLandingConceptFromUrl(): LandingConcept {
  return activeLandingConcept;
}

export function getServerLandingConcept(): LandingConcept {
  return activeLandingConcept;
}

export function subscribeToLandingConceptChanges(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  window.addEventListener(conceptChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("popstate", onStoreChange);
    window.removeEventListener(conceptChangeEvent, onStoreChange);
  };
}

export function updateLandingConceptUrl(concept: LandingConcept) {
  void concept;

  const url = new URL(window.location.href);
  url.searchParams.delete("landing");

  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(conceptChangeEvent));
}
