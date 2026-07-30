"use client";

import { useEffect } from "react";

export function LandingConceptBodySync() {
  useEffect(() => {
    document.body.dataset.landingConcept = "kacheln";
    document.body.dataset.landingConceptVariant = "winnstein";

    const url = new URL(window.location.href);

    if (url.searchParams.has("landing")) {
      url.searchParams.delete("landing");
      window.history.replaceState(null, "", url);
    }
  }, []);

  return null;
}
