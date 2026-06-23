# Eisberg-Hero Sicherung

Stand: 23. Juni 2026

Diese Sicherung bewahrt den bisherigen Hero-Ansatz mit dem Eisberg-Motiv, bevor die Startseite auf das neue Problemfragen-/Beratungsbild-Design umgestellt wird.

## Zweck

Der Eisberg-Hero zeigt die Idee:

- Ein sichtbarer Ausfall ist oft nur das Symptom.
- Die eigentlichen Ursachen liegen unter der Oberfläche.
- Zuverlässigkeitstechnik macht diese Ursachen, Risiken und Nachweislogiken sichtbar.

Das Konzept soll erhalten bleiben, falls es später wieder genutzt, in eine Wissensseite verschoben oder als Kampagnen-/Erklärgrafik weiterentwickelt werden soll.

## Gesicherte Bestandteile

- `IcebergHeroGraphic.snapshot.md`: Schnappschuss der bisherigen React-Komponente.
- `HomeHero-Integration.snapshot.md`: Schnappschuss, wie der Eisberg in den Startseiten-Hero eingebunden war.
- Bildassets im echten Projekt:
  - `public/graphics/hero/reliability-iceberg-start.png`
  - `public/graphics/hero/reliability-iceberg-revealed.png`
  - `public/graphics/hero/reliability-iceberg-hero.png`
- Zugehörige CSS-Klassen im echten Projekt:
  - `app/globals.css`, Klassen und Keyframes mit Prefix `.iceberg-*` bzw. `@keyframes iceberg-*`

## Wiederherstellung

Wenn der Eisberg-Hero später wieder auf der Startseite genutzt werden soll:

1. Die Komponente aus `IcebergHeroGraphic.snapshot.md` zurück nach `app/_components/iceberg-hero-graphic.tsx` übernehmen.
2. In `app/_components/home-hero.tsx` wieder `IcebergHeroGraphic` importieren und im rechten Hero-Bereich rendern.
3. Prüfen, ob die `.iceberg-*` CSS-Klassen in `app/globals.css` noch vorhanden sind.
4. Prüfen, ob die drei PNG-Dateien unter `public/graphics/hero/` noch vorhanden sind.

Empfehlung: Wenn der Eisberg nicht mehr auf der Startseite genutzt wird, eignet er sich weiterhin gut für eine Wissensseite zum Thema “Warum Zuverlässigkeitstechnik?” oder “Symptom vs. Ursache”.
