# QA, SEO-Review und Migration

Stand: 21. Juni 2026

## 1. Zweck dieses Dokuments

Dieses Dokument beschreibt, wie die neue RelTest-Website vor wichtigen
Abnahmen und vor dem Go-live geprüft wird.

Es beantwortet konkret:

- Wie wird geprüft, ob die mobile Version korrekt aussieht?
- Wie wird geprüft, ob Inhalte und Bilder ladeoptimiert sind?
- Gibt es einen SEO-Reviewer, den man bei Bedarf laufen lassen kann?
- Gibt es einen Migrationsplan von der alten auf die neue Website?

Die Prüfungen müssen nicht nach jeder kleinen Anpassung vollständig laufen.
Sie sollen gezielt eingesetzt werden:

- vor internen Feedbackrunden
- vor Geschäftsführungs-Reviews
- vor größeren Strukturentscheidungen
- vor dem Go-live
- nach dem Go-live zur Kontrolle

## 2. Grundprinzip

Die Website wird nicht nur danach bewertet, ob sie lokal auf einem großen
Monitor gut aussieht.

Qualität bedeutet hier:

- mobil und auf Desktop sauber lesbar
- keine überlappenden Texte oder Grafiken
- schnelle Ladezeit
- SEO-technisch crawlbar und verständlich
- saubere Mehrsprachigkeit
- alte SEO-Signale werden nicht beschädigt
- Kontakt- und Navigationswege funktionieren

## 3. Mobile-Prüfung

### 3.1 Was geprüft wird

Bei der mobilen Version geht es nicht nur darum, ob die Seite kleiner wird.

Geprüft werden:

- Navigation und Menü
- Sprachumschaltung
- Hero-Bereich
- Leistungskarten
- Weiterbildung und RelTest Education
- Fachbuch und Podcast
- Referenzen
- Kontakt-CTA
- Footer
- Formulare, falls vorhanden
- alle wichtigen Unterseiten

### 3.2 Mobile Prüfkriterien

Eine mobile Ansicht gilt nur als sauber, wenn:

- kein Text über andere Elemente läuft
- keine Buttons abgeschnitten sind
- keine Grafiken Text verdecken
- Navigation erreichbar und bedienbar ist
- Dropdowns auf Touch funktionieren
- CTAs klar sichtbar sind
- Logos nicht gequetscht werden
- Bilder sinnvoll zugeschnitten sind
- Abschnitte nicht zu dicht stehen
- Schriftgrößen lesbar bleiben
- keine horizontalen Scrollbalken entstehen
- Deutsch und Englisch funktionieren

### 3.3 Empfohlene Viewports

Mindestens prüfen:

| Gerätetyp | Breite x Höhe | Zweck |
| --- | --- | --- |
| kleines Smartphone | 360 x 800 | enge Android-Ansicht |
| typisches Smartphone | 390 x 844 | iPhone-ähnliche Standardansicht |
| großes Smartphone | 430 x 932 | große moderne Smartphones |
| Tablet hochkant | 768 x 1024 | iPad-ähnliche Ansicht |
| Tablet quer | 1024 x 768 | Übergang zu Desktop |
| Desktop | 1440 x 900 | typische Arbeitsansicht |

### 3.4 Manuelle Prüfung

Für normale Entwicklungsarbeit reicht meistens:

1. `npm run dev` starten.
2. Website unter `http://localhost:3000/de` und `/en` öffnen.
3. Browser-DevTools öffnen.
4. Responsive-Modus aktivieren.
5. die Viewports aus Abschnitt 3.3 durchgehen.
6. wichtige Seiten einmal nach unten scrollen.
7. Navigation, Dropdowns, Sprachwechsel und CTAs testen.

Diese manuelle Prüfung bleibt wichtig, weil automatisierte Tools nicht
zuverlässig beurteilen, ob ein B2B-Auftritt hochwertig und vertrauenswürdig
wirkt.

### 3.5 Automatisierte visuelle Prüfung

Für wichtige Meilensteine kann Playwright genutzt werden.

Sinn:

- Screenshots mehrerer Viewports automatisch erzeugen
- visuelle Änderungen zwischen Versionen vergleichen
- versehentliche Layoutverschiebungen erkennen

Empfohlener Einsatz:

- nicht nach jeder Textkorrektur
- vor größerem Review
- vor Go-live
- wenn Hero, Navigation, Leistungen oder mobile Layouts verändert wurden

Möglicher späterer Ausbau:

- Playwright installieren
- Tests für `/de`, `/en`, `/de/leistungen`, `/de/weiterbildung`,
  `/de/kontakt` anlegen
- Viewports aus Abschnitt 3.3 konfigurieren
- Screenshot-Baselines versionieren

Wichtig:

Screenshottests ersetzen keinen menschlichen Blick. Sie zeigen Unterschiede,
bewerten aber nicht automatisch, ob die Änderung gestalterisch besser ist.

## 4. Ladeoptimierung und Performance

### 4.1 Was bedeutet ladeoptimiert?

Inhalte sind ladeoptimiert, wenn sie:

- schnell sichtbar werden
- keine unnötig großen Bilder laden
- kein unnötiges JavaScript ausliefern
- keine Layoutsprünge verursachen
- auf mobilen Verbindungen akzeptabel funktionieren
- wichtige Inhalte im HTML verfügbar machen
- externe Dienste nur bewusst einsetzen

### 4.2 Wichtige Messwerte

Für RelTest sind vor allem die Core Web Vitals relevant:

| Metrik | Zielwert | Bedeutung |
| --- | --- | --- |
| LCP | höchstens 2,5 Sekunden | größter sichtbarer Hauptinhalt lädt schnell |
| INP | höchstens 200 Millisekunden | Seite reagiert schnell auf Nutzereingaben |
| CLS | höchstens 0,1 | Layout bleibt stabil und springt nicht |

Diese Werte gelten idealerweise am 75. Perzentil für mobile und Desktop-Nutzer.

Wichtig:

- Lighthouse ist eine Labormessung.
- Search Console und Chrome User Experience Report liefern Felddaten, wenn
  genug echte Nutzer vorhanden sind.
- Lighthouse kann INP nicht vollständig im Labor messen und nutzt Total
  Blocking Time als Näherung für Interaktivitätsprobleme.

### 4.3 Manuelle Ladeprüfung

Vor Reviews prüfen:

- Startseite mobil und Desktop
- Leistungsübersicht
- Weiterbildung
- Kontakt
- eine Wissensseite, sobald vorhanden
- eine bildlastige Seite

Prüfwerkzeuge:

- Chrome DevTools Network
- Chrome DevTools Lighthouse
- PageSpeed Insights, sobald eine öffentlich erreichbare Preview oder
  Live-Version existiert
- Google Search Console nach Go-live

### 4.4 Was konkret geprüft wird

| Bereich | Prüffrage |
| --- | --- |
| Bilder | sind Bilder passend skaliert und komprimiert? |
| Next Image | wird `next/image` genutzt, wo sinnvoll? |
| Hero-Bild | ist das wichtigste Bild priorisiert? |
| Lazy Loading | werden weiter unten liegende Bilder verzögert geladen? |
| Layout Stability | besitzen Bilder feste Größen oder Seitenverhältnisse? |
| JavaScript | gibt es unnötige Client-Komponenten oder Drittanbieter? |
| Fonts | werden Schriftarten effizient geladen? |
| CSS | gibt es unnötige oder blockierende Styles? |
| externe Medien | werden Videos, Maps oder Tracker bewusst geladen? |
| Caching | werden statische Assets sinnvoll gecacht? |

### 4.5 Next.js-Bildregeln

Für relevante Bilder gilt:

- möglichst `next/image` verwenden
- echte Breite und Höhe definieren
- sinnvolle `sizes`-Angaben verwenden
- relevante `alt`-Texte setzen
- dekorative Bilder mit leerem `alt` auszeichnen
- Hero-Bilder priorisieren, wenn sie LCP-relevant sind
- keine Originalfotos mit unnötig hoher Auflösung direkt ausliefern
- Dateinamen beschreibend wählen

### 4.6 Akzeptanzkriterien vor Go-live

Vor Go-live sollte gelten:

- `npm run build` läuft erfolgreich
- keine offensichtlichen Layoutsprünge
- keine extrem großen Bilddateien im kritischen Bereich
- Lighthouse Performance auf Kernseiten ist plausibel gut
- LCP-Probleme der Startseite sind analysiert
- keine unnötigen Drittanbieter-Skripte
- mobile Startseite lädt spürbar schneller als die alte WordPress-Seite

## 5. SEO-Reviewer auf Abruf

### 5.1 Gibt es so einen Reviewer?

Ja. Es sollte einen definierten SEO-Review-Lauf geben, der bei Bedarf
ausgeführt wird.

Dieser Review ist kein einzelnes Tool, sondern eine Kombination aus:

- lokalem Build
- Crawl
- Lighthouse oder PageSpeed Insights
- manueller SEO-Checkliste
- optional Screaming Frog SEO Spider
- später Search Console

### 5.2 Wann der SEO-Review laufen sollte

Nicht nötig:

- nach jedem kleinen Schreibfehler
- nach kleinen Abständen oder Buttonkorrekturen

Sinnvoll:

- vor internem Review
- vor Geschäftsführungspräsentation
- vor Go-live
- nach Änderungen an Navigation oder URL-Struktur
- nach größeren Änderungen an Inhalten
- nach Einbau von Wissensseiten
- nach Mehrsprachigkeitsänderungen

### 5.3 Empfohlene Review-Stufen

#### Stufe 1: Schneller interner SEO-Check

Prüfen:

- `npm run build`
- alle wichtigen Seiten aufrufbar
- genau eine H1 pro Seite
- Title und Description vorhanden
- interne Links funktionieren
- deutsche und englische Seite vorhanden
- Sprachwechsel funktioniert
- keine offensichtlichen Platzhalter

#### Stufe 2: Lighthouse/PageSpeed-Review

Prüfen:

- Performance
- Accessibility
- Best Practices
- SEO
- mobile und Desktop, wenn möglich

Wichtig:

Ein Lighthouse-SEO-Score von 100 bedeutet nicht, dass die komplette
SEO-Migration sauber ist. Lighthouse prüft einzelne technische Signale pro
Seite, aber nicht die vollständige alte URL-Struktur, Backlinks,
Keyword-Kannibalisierung oder strategische Suchintentionen.

#### Stufe 3: Crawl-Review

Geeignetes Tool:

- Screaming Frog SEO Spider

Warum passend:

- die bestehende Website hat 83 öffentlich gelistete URLs
- die kostenlose Version von Screaming Frog kann bis zu 500 URLs crawlen
- damit reicht sie für den aktuellen RelTest-Umfang wahrscheinlich aus

Prüfen:

- Statuscodes
- 404-Fehler
- Redirects
- Redirect-Ketten
- Titles
- Meta-Descriptions
- H1
- H2
- Canonicals
- `hreflang`
- `robots.txt`
- indexierbare und nicht indexierbare Seiten
- interne Links
- Bilder und Alt-Texte

#### Stufe 4: Search-Console-Review

Erst sinnvoll nach Go-live oder bei Zugriff auf die aktuelle Live-Website.

Prüfen:

- Indexierung
- Crawling-Fehler
- Core Web Vitals
- Suchanfragen
- Impressionen
- Klicks
- organische Landingpages
- 404-Fehler nach Migration

### 5.4 Ergebnis des SEO-Reviews

Jeder größere SEO-Review sollte ein kurzes Ergebnis erzeugen:

- Datum
- geprüfte Umgebung
- geprüfte URLs
- wichtigste Befunde
- kritische Fehler
- empfohlene Maßnahmen
- Entscheidung: go, go mit Einschränkung oder no-go

Möglicher Ablageort:

- `docs/seo/reviews/`

## 6. Migrationsplan alte Website zu neue Website

### 6.1 Gibt es einen Migrationsplan?

Ja, der Migrationsplan ist in den Relaunch-Dokumenten bereits grob angelegt.
Für die Umsetzung braucht es zusätzlich eine konkrete URL-Migrationsmatrix.

Ziel:

Keine relevante alte URL darf ungeprüft verschwinden.

### 6.2 Migrationsphasen

| Phase | Ziel |
| --- | --- |
| 1. Bestand erfassen | alle alten URLs, Sitemaps, Inhalte, PDFs, Bilder und Downloads sammeln |
| 2. Daten ergänzen | Search Console, Analytics und Backlinks je URL ergänzen |
| 3. URLs bewerten | behalten, verbessern, zusammenführen, weiterleiten oder entfernen |
| 4. Zielstruktur festlegen | neue Ziel-URLs definieren |
| 5. Redirect-Matrix erstellen | jede relevante alte URL bekommt ein Ziel |
| 6. Staging testen | neue Website vor Go-live crawlen |
| 7. Go-live durchführen | DNS oder Hosting kontrolliert umschalten |
| 8. Nachkontrolle | Search Console, 404, Rankings und Weiterleitungen prüfen |

### 6.3 URL-Migrationsmatrix

Für jede alte URL sollte dokumentiert werden:

| Feld | Bedeutung |
| --- | --- |
| alte URL | bestehende WordPress-URL |
| Sprache | DE oder EN |
| Seitentyp | Leistung, Wissen, Branche, Person, News, Rechtliches, Sonstiges |
| aktueller Status | 200, 301, 404 oder anderer Status |
| SEO-Wert | hoch, mittel, niedrig oder unbekannt |
| Search-Console-Daten | Klicks, Impressionen, Suchanfragen |
| Backlinks | externe Links vorhanden oder unbekannt |
| neue Ziel-URL | Zielseite auf der neuen Website |
| Maßnahme | behalten, verbessern, zusammenführen, 301, 410, noindex |
| Priorität | P0, P1 oder P2 |
| Notiz | fachliche oder technische Bemerkung |

Empfohlener Ablageort:

- `docs/seo/url-migrationsmatrix.md`

### 6.4 Regeln für Weiterleitungen

Redirects müssen fachlich passend sein.

Regeln:

- alte Leistungsseiten auf passende neue Leistungsseiten leiten
- alte Wissensseiten auf passende neue Wissensseiten leiten
- alte Seminarseiten auf Weiterbildung oder passende Seminarseite leiten
- alte Personenprofile auf passende Team- oder Vertrauensseite leiten
- keine massenhafte Weiterleitung auf die Startseite
- keine Redirect-Ketten
- keine Sprachmischung
- möglichst dauerhafte `301`-Weiterleitungen

### 6.5 Was vor Go-live fertig sein muss

Vor Go-live:

- alte URLs vollständig erfasst
- P0- und P1-URLs bewertet
- Redirect-Matrix erstellt
- Redirects technisch eingerichtet
- neue Sitemap erzeugt
- `robots.txt` geprüft
- Canonicals geprüft
- `hreflang` geprüft
- Staging gecrawlt
- Kontaktwege getestet
- Search Console vorbereitet

### 6.6 Nach Go-live

In den ersten Tagen:

- wichtigste alte URLs manuell testen
- 404-Fehler prüfen
- Search Console beobachten
- Sitemap einreichen
- URL-Prüfung für zentrale Seiten nutzen
- Kontaktanfragen testen

In den ersten 8 bis 12 Wochen:

- Klicks und Impressionen beobachten
- Indexierung prüfen
- Weiterleitungen nachschärfen
- Performancewerte kontrollieren
- auffällige Rankingverluste analysieren

## 7. Wann welcher Check genügt

| Situation | Empfohlener Check |
| --- | --- |
| kleine Textänderung | manuelle Sichtprüfung |
| neuer Abschnitt auf Startseite | mobile Sichtprüfung und Build |
| neue Seite | Seiten-Checkliste plus SEO-Basischeck |
| neue Bilder | Bildgröße, `next/image`, Alt-Text, mobile Ansicht |
| neue Navigation | mobile Prüfung, Linkprüfung, SEO-Check |
| vor internem Review | Mobile-QA, Lighthouse, zentrale Seiten durchklicken |
| vor Go-live | vollständiger SEO-Review, Crawl, Redirect-Test, Performancecheck |
| nach Go-live | Search Console, 404, Weiterleitungen, Core Web Vitals |

## 8. Quellen und Referenzen

- Lighthouse: `https://developer.chrome.com/docs/lighthouse/overview/`
- Playwright Visual Comparisons: `https://playwright.dev/docs/test-snapshots`
- Web Vitals: `https://web.dev/articles/vitals`
- Google Search Console Core Web Vitals: `https://support.google.com/webmasters/answer/9205520?hl=de`
- Google Website-Migration: `https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=de`
- Next.js Image Optimization: `https://nextjs.org/docs/app/getting-started/images`
- Screaming Frog SEO Spider: `https://www.screamingfrog.co.uk/seo-spider/`
