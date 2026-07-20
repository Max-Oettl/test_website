"use client";

export type LandingConcept =
  | "current"
  | "kacheln"
  | "kacheln2"
  | "kacheln3"
  | "kacheln31"
  | "winnstein"
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
  { value: "iceberg", label: "Eisbergdiagnose" },
];

const conceptChangeEvent = "reltest-landing-concept-change";

export function isLandingConcept(value: string): value is LandingConcept {
  return (
    value === "current" ||
    value === "kacheln" ||
    value === "kacheln2" ||
    value === "kacheln3" ||
    value === "kacheln31" ||
    value === "winnstein" ||
    value === "iceberg"
  );
}

export function getLandingConceptFromUrl(): LandingConcept {
  if (typeof window === "undefined") {
    return "current";
  }

  const selectedConcept = new URLSearchParams(window.location.search).get(
    "landing",
  );

  return selectedConcept && isLandingConcept(selectedConcept)
    ? selectedConcept
    : "current";
}

export function getServerLandingConcept(): LandingConcept {
  return "current";
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
  const url = new URL(window.location.href);

  if (concept === "current") {
    url.searchParams.delete("landing");
  } else {
    url.searchParams.set("landing", concept);
  }

  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(conceptChangeEvent));
}
