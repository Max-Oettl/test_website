"use client";

export type LandingConcept = "current" | "kacheln" | "iceberg";

export const landingConceptOptions: Array<{
  value: LandingConcept;
  label: string;
}> = [
  { value: "current", label: "Aktueller Stand" },
  { value: "kacheln", label: "Kachel-Konzept" },
  { value: "iceberg", label: "Eisberg-Konzept" },
];

const conceptChangeEvent = "reltest-landing-concept-change";

export function isLandingConcept(value: string): value is LandingConcept {
  return value === "current" || value === "kacheln" || value === "iceberg";
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
