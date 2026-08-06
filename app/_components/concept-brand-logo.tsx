"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

import {
  getLandingConceptFromUrl,
  getServerLandingConcept,
  subscribeToLandingConceptChanges,
} from "./landing-concept-store";

type ConceptBrandLogoProps = {
  placement: "header" | "footer";
};

function usesWinnsteinBrand(concept: string) {
  return concept === "winnstein" || concept === "winnsteinLogo";
}

export function ConceptBrandLogo({ placement }: ConceptBrandLogoProps) {
  const concept = useSyncExternalStore(
    subscribeToLandingConceptChanges,
    getLandingConceptFromUrl,
    getServerLandingConcept,
  );
  const useNewLogo = usesWinnsteinBrand(concept);

  if (placement === "header") {
    return (
      <Image
        src={
          useNewLogo
            ? "/branding/reltest-horizontal-positive.svg"
            : "/reltest-solutions-logo.png"
        }
        alt={useNewLogo ? "RelTest" : "RelTest Solutions"}
        fill
        priority
        className="object-contain object-left"
        sizes="(min-width: 640px) 208px, 168px"
      />
    );
  }

  return useNewLogo ? (
    <div className="flex h-28 w-80 max-w-full items-center">
      <Image
        src="/branding/reltest-horizontal-negative.svg"
        alt="RelTest"
        width={466}
        height={195}
        className="h-full w-full object-contain object-left"
      />
    </div>
  ) : (
    <div className="flex h-20 w-64 items-center rounded-2xl bg-white px-6">
      <Image
        src="/reltest-solutions-logo.png"
        alt="RelTest Solutions GmbH"
        width={220}
        height={82}
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
