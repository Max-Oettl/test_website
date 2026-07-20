# Landingpage-Konzept: Leistungskacheln 2.0

Diese Variante baut auf dem bestehenden Leistungskachel-Konzept auf, bleibt
aber bewusst eigenständig auswählbar. Die ursprüngliche Variante wird nicht
verändert.

## Ziel

- deutlich weniger Text, ohne fachliche Zusammenhänge zu verlieren
- schnellere Erfassbarkeit für technische Entscheider
- Piktogramme dort einsetzen, wo sie Aufgaben und Leistungen klarer erklären
- weniger abgerundete, generische Kartenoptik
- weiterhin seriöse RelTest-Farbwelt in Weiß, Navy und Cyan

## Seitenaufbau

1. reduzierter Hero mit vier Leistungskacheln und je einem kurzen Erklärungssatz
2. vier piktogrammgestützte Aufgabenfelder mit knapper Einordnung
3. technische Unterstützungsleiste mit fünf konkreten Tätigkeiten
4. drei kompakte, klar als Muster gekennzeichnete Projektbeispiele mit
   Projektlogik und Ergebnis
5. Vertrauensbereich mit Kennzahlen, Fachbüchern, Podcast und Referenzen
6. gemeinsame, großzügige Branchenliste mit Bildhintergründen und direkter
   Verlinkung auf die Branchenseiten

## Gestaltungsregeln

- pro Abschnitt höchstens eine sichtbare Hauptüberschrift
- kurze, zusammenhängende Aussagen statt Absatzketten oder Stichwortsammlungen
- Piktogramme unterstützen den Text, ersetzen aber nicht seine Aussage
- offene Raster und Trennlinien statt vieler freistehender Karten
- bestehende RelTest-Piktogramme werden wiederverwendet
- Deutsch und Englisch werden parallel gepflegt

## Umsetzung

- `app/_components/landing-concept-kacheln-2-hero.tsx`
- `app/_components/landing-concept-kacheln-2-tail.tsx`
- Auswahl über `?landing=kacheln2` oder den Landingpage-Umschalter
