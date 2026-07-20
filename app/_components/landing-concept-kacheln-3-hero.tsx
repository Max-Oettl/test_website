import { type Locale } from "../_i18n/config";
import { LandingConceptKacheln2Hero } from "./landing-concept-kacheln-2-hero";

type LandingConceptKacheln3HeroProps = {
  heroImage?: string;
  heroImageFraming?: "default" | "process";
  locale: Locale;
};

export function LandingConceptKacheln3Hero({
  heroImage,
  heroImageFraming,
  locale,
}: LandingConceptKacheln3HeroProps) {
  return (
    <LandingConceptKacheln2Hero
      heroImage={heroImage}
      heroImageFraming={heroImageFraming}
      locale={locale}
      serviceLayout="consulting"
    />
  );
}
