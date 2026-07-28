# Arbeitsregeln und Workflows für die RelTest-Website

Stand: 19. Juni 2026

## 1. Zweck dieses Dokuments

Dieses Dokument beschreibt, wie an der neuen RelTest-Website gearbeitet werden
soll.

Es ergänzt:

- `docs/vision/reltest-website-vision.md`
- `docs/content/content-und-seitenregeln.md`
- `docs/seo/seo-codex-leitfaden.md`
- `docs/project/qa-review-und-migration.md`
- `docs/project/repo-dokumentation.md`

Die Website wird neben dem Tagesgeschäft aufgebaut. Deshalb müssen Arbeit,
Abstimmung und Qualitätssicherung schlank, aber sauber organisiert sein.

## 2. Projektkontext

RelTest ist ein kleines Unternehmen mit etwa 7 Personen.

Aktuelle Arbeitsrealität:

- die Website wird intern koordiniert
- die Umsetzung läuft neben dem Tagesgeschäft
- realistische verfügbare Zeit: etwa 4 bis 5 Stunden pro Woche
- ein Kollege kann als Sparringspartner und zweiter Blick unterstützen
- fachliche Inhalte sollen bei Bedarf mit der Firma abgestimmt werden
- die Geschäftsführung unterstützt den Relaunch grundsätzlich

Konsequenz:

Die Website darf nicht wie ein großes Agenturprojekt mit unnötiger
Projektbürokratie behandelt werden. Sie braucht klare Prioritäten,
kurze Feedbackschleifen und dokumentierte Entscheidungen.

## 3. Grundprinzipien der Zusammenarbeit

### 3.1 Kleine, abschließbare Arbeitspakete

Änderungen sollen möglichst in kleinen Paketen erfolgen:

- eine Seite
- ein Abschnitt
- ein SEO-Thema
- ein wiederverwendbares Bauteil
- ein klar abgegrenzter Inhaltstyp

Große, vermischte Änderungen erschweren Review, SEO-Bewertung und spätere
Fehlersuche.

### 3.2 Erst Ziel klären, dann umsetzen

Vor jeder sichtbaren Änderung muss klar sein:

- welches Problem gelöst wird
- welche Zielgruppe betroffen ist
- ob die Änderung eher Design, Inhalt, SEO oder Technik betrifft
- ob alte URLs, Rankings oder bestehende Inhalte berührt werden
- ob Deutsch und Englisch betroffen sind

Wenn das Ziel nicht klar ist, soll zuerst ein kurzer Vorschlag formuliert
werden, statt direkt beliebige Varianten umzusetzen.

### 3.3 Keine rein dekorativen Entscheidungen

Jede sichtbare Änderung soll eine Funktion haben:

- verständlicher machen
- Vertrauen stärken
- Leistungen klarer verkaufen
- fachliche Kompetenz zeigen
- SEO-Struktur verbessern
- Nutzer schneller zur Anfrage führen

Dekoration ohne fachlichen oder kommunikativen Nutzen ist zu vermeiden.

### 3.4 Bestehende SEO-Signale respektieren

Die neue Website ersetzt eine bestehende, indexierte WordPress-Website.

Deshalb gilt:

- alte URLs sind nicht egal
- bestehende Themenbreite ist SEO-Wert
- Inhalte dürfen nicht unbewusst verschwinden
- Weiterleitungen müssen fachlich passend sein
- Navigation darf moderner werden, aber nicht fachlich flacher

## 4. Entscheidungsarten

Nicht jede Frage braucht die Geschäftsführung.

### 4.1 Kann intern direkt entschieden werden

- kleine Layoutkorrekturen
- Schreibfehler und Umlaute
- Button-Ausrichtung
- technische Codequalität
- responsive Feinschliffe
- kleine Textverbesserungen ohne inhaltliche Aussageänderung
- Bildgrößen und Performanceoptimierung

### 4.2 Sollte mit dem Sparringspartner geprüft werden

- neue Hero-Konzepte
- neue Seitenstruktur
- neue Leistungsdarstellung
- Änderungen an Navigation
- Zusammenführen oder Entfernen von Seiten
- wichtige SEO-Entscheidungen
- neue Wissensseiten
- größere visuelle Stiländerungen

### 4.3 Sollte mit der Firma oder Geschäftsführung abgestimmt werden

- endgültige Positionierung
- Aussagen zu Haftung, Verantwortung und Stand der Technik
- Leistungsversprechen
- Referenzen und Kundenlogos
- Mitarbeiterbilder und Personenbezug
- Fachbuch- und Podcastdarstellung
- Datenschutz, Tracking und Formulare
- Go-live-Zeitpunkt
- Entfernen wertvoller alter Inhalte

## 5. Standard-Workflow für Änderungen

Jede größere Änderung folgt diesem Ablauf.

### Schritt 1: Ziel definieren

Kurz festhalten:

- Was soll verbessert werden?
- Für wen?
- Auf welcher Seite?
- Welche Wirkung soll entstehen?

### Schritt 2: Relevante Dokumente prüfen

Je nach Thema:

- Design und Wirkung: `docs/vision/reltest-website-vision.md`
- Inhalte: `docs/content/content-und-seitenregeln.md`
- SEO: `docs/seo/seo-codex-leitfaden.md`
- Technik: `docs/project/repo-dokumentation.md`

### Schritt 3: Betroffene Dateien identifizieren

Typische Stellen:

- `app/[lang]/**/page.tsx`
- `app/_content/site-content.ts`
- `app/_components/**`
- `app/globals.css`
- `public/**`
- `app/_i18n/config.ts`
- `proxy.ts`

### Schritt 4: SEO-Auswirkung prüfen

Vor allem bei:

- Navigation
- URL-Struktur
- Sprachumschaltung
- Metadaten
- Überschriften
- internem Linkaufbau
- Bildern
- alten Inhalten

### Schritt 5: Umsetzung

Umsetzung soll:

- bestehende Komponenten respektieren
- keine unnötigen neuen Abhängigkeiten einführen
- Deutsch und Englisch berücksichtigen
- responsive funktionieren
- keine Platzhalter in produktionsnahen Bereichen hinterlassen

### Schritt 6: Prüfung

Mindestens prüfen:

- Desktop-Ansicht
- mobile Ansicht
- deutsche Version
- englische Version
- Navigation und Links
- Buttons und CTAs
- sichtbare Textüberläufe
- Umlaute und deutsche Schreibweise
- grundlegende SEO-Signale

Für größere Reviews, mobile Layoutfragen, Ladeoptimierung, SEO-Audits und
Migration gilt zusätzlich:

- `docs/project/qa-review-und-migration.md`

### Schritt 7: Dokumentieren, wenn relevant

Dokumentation anpassen bei:

- neuen Seiten
- geänderter Seitenstruktur
- neuen Workflows
- neuen SEO-Entscheidungen
- neuen Bild- oder Inhaltsregeln
- Hosting- oder Deploymentänderungen

## 6. Workflow für neue Seiten

Neue Seiten werden nicht nur angelegt, weil ein Thema interessant ist.

Vor einer neuen Seite muss geklärt sein:

- Welche Suchintention bedient die Seite?
- Welche Zielgruppe liest sie?
- Ist die Seite Leistung, Wissen, Vertrauen oder Kontaktunterstützung?
- Gibt es bereits eine ähnliche Seite?
- Droht Keyword-Kannibalisierung?
- Gibt es eine alte WordPress-URL, die darauf zeigen sollte?
- Gibt es eine deutsche und englische Variante?

Definition of Done für neue Seiten:

- eindeutige H1
- klare Meta-Daten
- sinnvolle H2-Struktur
- konkrete interne Links
- CTA oder nächster Schritt
- deutsche und englische Inhalte
- passende Bilder oder Grafiken, wenn sinnvoll
- Alt-Texte für relevante Bilder
- Canonical und `hreflang`
- Eintrag in Sitemap, wenn indexierbar

## 7. Workflow für Designänderungen

Designänderungen müssen zur gewünschten Markenwirkung passen.

Prüfen:

- wirkt es modern, hochwertig, technisch und seriös?
- ist die visuelle Hierarchie klar?
- sind Texte sofort lesbar?
- bleibt die Seite ruhig und professionell?
- wirkt es wie technische Kompetenz statt wie Dekoration?
- passt es zur B2B-Zielgruppe?
- funktioniert es auf Smartphone, Tablet und Desktop?

Nicht erwünscht:

- verspielte Effekte
- übertriebene Animationen
- generische Agentur-Optik
- rein dekorative Technikgrafiken
- überladene Hero-Bereiche
- unklare Leistungsdarstellung
- Text, der Grafik oder andere Elemente überdeckt

Animationen sind erlaubt, wenn sie:

- ruhig sind
- hochwertig wirken
- Inhalt unterstützen
- keine Bedienung erschweren
- auf Mobilgeräten sauber funktionieren

## 8. Workflow für Bilder und Grafiken

Vor dem Einbau eines Bildes klären:

- Welche Aussage unterstützt das Bild?
- Ist das Bild fachlich passend?
- Wirkt es authentisch und hochwertig?
- Gibt es Rechte und Freigaben?
- Passt es zur jeweiligen Seite?
- Ist es für Webgröße und Performance optimiert?
- Braucht es eine deutsche und englische Variante?

Besonders geeignete Bildarten:

- echte Mitarbeiterbilder
- technische Arbeitssituationen
- Schulungssituationen
- Prüfstand- und Analysekontexte
- seriöse Fachgrafiken
- Referenz- und Vertrauenssignale

Nicht verwenden:

- beliebige Stockbilder
- unscharfe oder unruhige Motive
- Grafiken ohne fachlichen Mehrwert
- zu kleine Logos ohne Weißraum
- Bilder, die wichtige Texte überlagern

## 9. Workflow für SEO-Änderungen

SEO wird nicht nachträglich geprüft, sondern vor Strukturentscheidungen
mitgedacht.

Bei jeder SEO-relevanten Änderung prüfen:

- Ist eine alte URL betroffen?
- Gibt es Search-Console-Daten dazu?
- Gibt es Backlinks?
- Welche neue Zielseite übernimmt die Suchintention?
- Wird ein Redirect benötigt?
- Hat die neue Seite genug fachliche Tiefe?
- Sind Deutsch und Englisch korrekt verknüpft?
- Gibt es eine klare interne Verlinkung?

Vor Go-live sind Pflicht:

- vollständige URL-Liste der alten Website
- Redirect-Matrix
- URL-Migrationsmatrix unter `docs/seo/url-migrationsmatrix.md`
- Sitemap
- `robots.txt`
- Canonicals
- `hreflang`
- eindeutige Titles und Descriptions
- saubere H1-Struktur
- Search Console
- Monitoring nach Go-live

## 10. Workflow für interne Feedbackrunden

Feedback soll gezielt eingeholt werden, damit es nicht beliebig wird.

Empfohlene Fragen an die Firma:

- Ist klar, was RelTest anbietet?
- Wirkt die Seite fachlich kompetent?
- Fehlt eine wichtige Leistung?
- Ist etwas fachlich falsch oder missverständlich?
- Würde ein technischer Entscheider Vertrauen aufbauen?
- Sind Bilder und Beispiele passend?
- Sind Aussagen zu stark, zu schwach oder unklar?

Nicht als offene Frage stellen:

- Wie findet ihr die Website?

Besser:

- Welche Aussage ist unklar?
- Welche Leistung ist nicht sichtbar genug?
- Wo würdet ihr als Kunde noch zögern?
- Was fehlt, damit RelTest kompetent und vertrauenswürdig wirkt?

## 11. Priorisierung

### P0: Vor Go-live zwingend

- technische Stabilität
- korrekte Navigation
- responsive Darstellung
- Rechtstexte
- Domain- und Hostingentscheidung
- SEO-Migration
- Redirects
- Sitemap und `robots.txt`
- deutsche und englische Kernseiten
- Kontaktmöglichkeit

### P1: Für guten Relaunch wichtig

- starke Startseite
- klare Leistungsseiten
- Weiterbildung sauber getrennt in Seminare und RelTest Education
- Fachbuch und Podcast als Vertrauenssignale
- echte Mitarbeiterbilder
- Referenzen
- saubere interne Verlinkung
- grundlegender Wissensbereich

### P2: Nach Go-live ausbauen

- tiefere Wissensartikel
- Case Studies
- zusätzliche Brancheninhalte
- weitere Fachgrafiken
- Ausbau Bild-SEO
- strukturierte Daten verfeinern
- laufende SEO-Optimierung

## 12. Definition of Done für größere Änderungen

Eine größere Änderung gilt erst als fertig, wenn:

- sie fachlich korrekt ist
- sie zur Markenwirkung passt
- sie mobil und auf Desktop funktioniert
- sie Deutsch und Englisch berücksichtigt
- sie keine SEO-Signale beschädigt
- Links und CTAs funktionieren
- Bilder optimiert und sinnvoll beschriftet sind
- keine sichtbaren Layoutfehler auftreten
- relevante Dokumentation angepasst ist
- bei Bedarf ein zweiter Blick erfolgt ist

## 13. Arbeitsregel für Codex

Codex soll bei jeder Website-Änderung prüfen:

1. Passt die Änderung zur RelTest-Positionierung?
2. Macht sie Leistungen klarer?
3. Unterstützt sie Vertrauen, Kompetenz und technische Expertise?
4. Ist sie SEO-seitig unkritisch oder sauber abgesichert?
5. Funktioniert sie auf Deutsch und Englisch?
6. Ist sie responsive und lesbar?
7. Wird unnötige Komplexität vermieden?

Wenn eine Änderung gut aussieht, aber inhaltlich unklar, SEO-riskant oder zu
verspielt wirkt, soll Codex eine bessere Lösung bevorzugen.
