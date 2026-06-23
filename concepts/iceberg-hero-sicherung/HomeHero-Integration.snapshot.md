# HomeHero-Integration Snapshot

Dieser Ausschnitt zeigt, wie der Eisberg-Hero bisher in `app/_components/home-hero.tsx` eingebunden war.

```tsx
import { IcebergHeroGraphic } from "./iceberg-hero-graphic";

// ...

<div className="relative min-w-0 lg:ml-auto lg:w-full lg:max-w-[45rem] xl:max-w-[51rem]">
  <IcebergHeroGraphic locale={locale} />
</div>
```

Der umgebende Hero verwendete:

- links Eyebrow, H1, Beschreibung, Facts und CTAs aus `getSiteContent(locale).hero`
- rechts `IcebergHeroGraphic`
- Hintergrund: heller technischer Verlauf mit dezenten radialen Highlights

