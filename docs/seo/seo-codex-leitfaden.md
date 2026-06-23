# SEO-Codex-Leitfaden für die RelTest-Website

Stand: 10. Juni 2026

## 1. Zweck dieses Dokuments

Dieses Dokument ist die zentrale SEO-Arbeitsanweisung für Codex in diesem
Repository.

Es bündelt:

- die offenen SEO-Aufgaben,
- die fachlichen SEO-Grundlagen,
- die Anforderungen an einen sauberen Website-Relaunch,
- die konkrete Struktur dieses Next.js-Repos,
- die Kriterien, nach denen Codex SEO-relevante Änderungen prüfen, challengen,
  erweitern und umsetzen soll.

Dieses Dokument ist nicht nur eine Zusammenfassung. Es ist ein operativer
Leitfaden.

Codex soll dieses Dokument verwenden, um:

- bestehende Seiten auf SEO-Risiken zu prüfen,
- neue Seiten SEO-gerecht zu planen,
- Inhalte und Seitentypen sauber zu strukturieren,
- technische SEO-Lücken zu identifizieren,
- Relaunch-Risiken der bestehenden WordPress-Website zu minimieren,
- Änderungen mit klaren Abnahmekriterien umzusetzen.

## 2. Projektkontext

### 2.1 Unternehmen

RelTest Solutions ist eine technische B2B-Beratung mit Fokus auf:

- Zuverlässigkeitstechnik
- Reliability Engineering
- Erprobung
- Design of Experiments
- Datenanalyse
- Prognostik und Health Monitoring
- Risikomanagement
- Weiterbildung, Seminare und Academy

### 2.2 Zielgruppen

SEO-Inhalte und Seitenstruktur müssen für diese Zielgruppen verständlich und
fachlich belastbar sein:

- technische Entscheider
- Einkäufer
- Projektleiter
- Geschäftsführer

### 2.3 Relaunch-Situation

Die aktuelle Website ersetzt eine bestehende WordPress-Website auf derselben
Domain.

Das bedeutet:

- die Domain bleibt bestehen,
- die bestehende Sichtbarkeit darf nicht leichtfertig verloren gehen,
- alte URLs, Rankings, Backlinks und Suchsignale müssen bei jeder
  Strukturentscheidung berücksichtigt werden,
- jede SEO-Änderung ist auch eine Migrationsentscheidung.

Der Grundsatz lautet:

> Aus SEO-Sicht ist dies keine neue Website, sondern eine Migration einer
> bestehenden indexierten Website.

## 3. Technischer Kontext dieses Repos

### 3.1 Stack

Die Website verwendet:

- Next.js 16 mit App Router
- React 19
- TypeScript
- Tailwind CSS 4

### 3.2 Wichtige SEO-relevante Dateien

Codex muss bei SEO-Arbeit insbesondere diese Bereiche berücksichtigen:

- `app/[lang]/layout.tsx`
- `app/[lang]/page.tsx`
- `app/[lang]/**/page.tsx`
- `app/_content/site-content.ts`
- `app/_components/site-header.tsx`
- `app/_components/site-footer.tsx`
- `app/_components/language-switcher.tsx`
- `proxy.ts`
- `app/api/locale/route.ts`
- `public/` für Bilder, Logos, Grafiken und Dateinamen

Zusätzlich sollten folgende Dateien vorhanden sein oder geschaffen werden, wenn
sie fehlen:

- `app/sitemap.ts`
- `app/robots.ts`
- `app/[lang]/not-found.tsx`
- strukturierte Daten in Layouts oder Seitendateien
- Seiten für `impressum` und `datenschutz`

### 3.3 Inhaltliche Quelle

Der meiste strukturierte Seiteninhalt liegt zentral in:

- `app/_content/site-content.ts`

Wenn Codex Inhalte oder Metadaten erweitert, muss immer geprüft werden:

- ob die Inhalte in `de` und `en` gepflegt sind,
- ob Titel, Descriptions und Linktexte sprachlich sauber sind,
- ob Suchintention und URL-Struktur zur Seite passen.

## 4. Wie Codex SEO in diesem Projekt verstehen soll

SEO besteht hier aus vier Ebenen:

### 4.1 Technical SEO

Codex prüft:

- Crawlbarkeit
- Indexierbarkeit
- Statuscodes
- Redirects
- Canonicals
- `hreflang`
- Sitemap
- `robots.txt`
- Core Web Vitals
- Mehrsprachigkeit
- JavaScript-Robustheit
- Mobile-First-Tauglichkeit

### 4.2 On-Page SEO

Codex prüft:

- Title
- Meta-Description
- H1, H2, H3
- Suchintention
- Klarheit der Hauptaussage
- interne Verlinkung
- Bilder und Alt-Texte
- CTAs
- semantische Struktur

### 4.3 Content SEO

Codex prüft:

- ob Themen sauber getrennt sind,
- ob Kernleistungen eigene Zielseiten haben,
- ob der Wissensbereich echte Fragen beantwortet,
- ob Keyword-Kannibalisierung vermieden wird,
- ob Inhalte nur oberflächlich oder wirklich hilfreich sind,
- ob Vertrauen und Expertise sichtbar werden.

### 4.4 Off-Page- und Relaunch-SEO

Codex prüft:

- ob bestehende Backlink-Ziele erhalten bleiben,
- ob alte URLs korrekt migriert werden,
- ob Fachbuch, Podcast, Academy und Profile sauber eingebunden sind,
- ob die neue Website bestehende externe Signale stützt statt entwertet.

## 5. Nicht verhandelbare SEO-Regeln

Diese Regeln gelten in diesem Projekt als Pflicht.

### 5.1 Jede indexierbare Seite braucht ein klares Ziel

Eine Seite darf nicht nur existieren, weil sie gestalterisch sinnvoll wirkt.
Sie braucht mindestens eines dieser Ziele:

- konkrete Leistungsanfrage
- klare Informationsfrage
- Vertrauensaufbau
- Autoritätsnachweis
- strukturierte Unternehmensinformation

### 5.2 Jede wichtige Suchintention bekommt genau eine primäre Zielseite

Codex muss Keyword-Kannibalisierung aktiv vermeiden.

Wenn mehrere Seiten dieselbe Hauptsuchintention bedienen, muss Codex:

- die Seiten klarer abgrenzen,
- eine Hauptseite definieren,
- Seiten zusammenführen,
- oder eine zusätzliche Seite ausdrücklich vermeiden.

### 5.3 Keine generischen SEO-Platzhalter

Nicht zulässig sind:

- identische Titles auf mehreren Seiten,
- identische Descriptions auf mehreren Seiten,
- `Inhalt folgt`,
- dünne Seiten ohne klare Aussage,
- austauschbare Textblöcke mit nur minimalen Umformulierungen,
- nichtssagende Linktexte in wichtigen Kontexten.

### 5.4 Jede Seite muss für Nutzer und Suchmaschinen verständlich sein

Das heißt:

- klare H1,
- logische H2 und H3,
- aussagekräftige Linktexte,
- HTML-Inhalte statt rein visueller Aussagen,
- verständliche und sichtbare CTAs,
- klare Beziehung zu anderen Themen und Seiten.

## 6. Anforderungen pro Seitentyp

### 6.1 Startseite

Die Startseite muss:

- die Marke klar positionieren,
- die Kernleistungen verständlich sichtbar machen,
- intern auf die wichtigsten Leistungsseiten verlinken,
- Vertrauen durch Expertise und Nachweise aufbauen,
- nicht zu viele inhaltlich konkurrierende Themen gleichrangig vermischen,
- eine starke erste H1 besitzen.

Die Startseite ist keine Ersatz-Landingpage für alle Themen.

### 6.2 Leistungsübersicht

Die Leistungsübersicht ist eine Hub-Seite.

Sie soll:

- die wichtigsten Leistungsbereiche strukturieren,
- zu einzelnen Detailseiten verlinken,
- keine Sackgasse sein,
- nicht nur aus Design-Karten ohne thematische Tiefe bestehen.

### 6.3 Leistungsdetailseiten

Jede Kernleistung sollte eine eigene Seite besitzen, wenn sie:

- wirtschaftlich relevant ist,
- eine eigene Suchintention hat,
- in der alten Website bereits Signale besitzt,
- fachlich ausreichend eigenständig ist.

Eine Leistungsdetailseite soll mindestens enthalten:

- H1 mit klarem Thema
- Problemstellung
- Zielgruppe oder Einsatzkontext
- Vorgehen oder Methodik
- Nutzen
- typische Projektergebnisse
- relevante interne Links
- klaren CTA

### 6.4 Wissensseiten

Wissensseiten müssen echte Fragen beantworten.

Sie dürfen nicht:

- nur aus Ankerpunkten bestehen,
- Platzhalter enthalten,
- inhaltlich zu dünn sein,
- nur als Vorwand für Keywords existieren.

Jede Wissensseite soll idealerweise enthalten:

- klare Nutzerfrage
- strukturierte Antwort
- sinnvolle Überschriften
- fachliche Einordnung
- erklärende Grafiken mit Textkontext
- interne Links zu Leistungen
- sichtbaren Autor oder fachliche Verantwortung

### 6.5 Referenzen

Eine reine Logo-Sammlung hilft begrenzt.

Codex soll bevorzugen:

- Fachkontext
- Projektarten
- Methodeneinsatz
- optional kurze Case Studies

### 6.6 Literatur, Podcast und Autoritätssignale

Diese Seiten dienen nicht nur dem Vertrauen, sondern auch der inhaltlichen
Autorität.

Codex soll sie so aufbauen, dass:

- die fachliche Relevanz erklärt wird,
- interne Verbindungen zu Team, Leistungen und Wissen bestehen,
- Suchmaschinen erkennen, warum diese Inhalte wichtig sind.

## 7. Anforderungen an Metadaten

### 7.1 Title

Jede indexierbare Seite braucht einen eindeutigen Title.

Regeln:

- Thema zuerst
- Marke sinnvoll ergänzen
- kein Copy-Paste über mehrere Seiten
- Title muss Suchintention und Inhalt wirklich abbilden

### 7.2 Meta-Description

Jede wichtige Seite braucht eine eigene Description.

Regeln:

- kurzer fachlicher Nutzen
- keine allgemeine Werbefloskel
- nicht identisch mit anderen Seiten
- pro Sprache individuell geschrieben

### 7.3 Open Graph und Social Cards

Codex soll prüfen oder ergänzen:

- `og:title`
- `og:description`
- `og:url`
- `og:image`
- `og:type`
- sprachlich passende Open-Graph-Daten

## 8. Anforderungen an Überschriften

Für jede indexierbare Seite gilt:

- genau eine primäre H1
- H2 für Hauptabschnitte
- H3 für Untergliederung
- keine Sprünge ohne Grund
- keine rein dekorativen H1

Wenn Komponenten visuell wie Überschriften wirken, aber semantisch nicht die
Hauptebene darstellen, darf Codex nicht automatisch `h1` verwenden.

## 9. Anforderungen an URL-Struktur

URLs sollen:

- stabil,
- verständlich,
- dauerhaft,
- sprachlich konsistent,
- ohne unnötige Parameter

sein.

Codex muss besonders prüfen:

- deutsche und englische Slugs,
- Slash-Konsistenz,
- `www` und Nicht-`www`,
- Groß- und Kleinschreibung,
- bestehende WordPress-Pfade.

Wichtig:

Eine gute neue URL ist wertlos, wenn sie bestehende wertvolle Alt-URLs ohne
saubere Migration ersetzt.

## 10. Anforderungen an Canonicals und hreflang

### 10.1 Canonical

Jede indexierbare Seite soll eine absolute Self-Canonical besitzen.

Canonical darf nicht:

- auf eine Weiterleitung zeigen,
- auf eine Staging-Domain zeigen,
- unabsichtlich auf eine andere Sprachversion zeigen.

### 10.2 hreflang

Für Sprachversionen gilt:

- jede Seite verweist auf sich selbst,
- jede Seite verweist auf ihr sprachliches Gegenstück,
- Verweise sind wechselseitig,
- nur fachlich äquivalente Seiten werden verknüpft,
- URLs sind absolut.

### 10.3 Sprachumschaltung

Der sichtbare Sprachwechsel muss:

- echte HTML-Links mit `href` verwenden,
- auf das Gegenstück derselben Seite zeigen,
- nicht einfach immer auf `/de` oder `/en` verweisen,
- für Suchmaschinen crawlbar bleiben.

## 11. Anforderungen an interne Links und JavaScript

### 11.1 Interne Links

Codex muss sicherstellen:

- wichtige Seiten sind über echte Links erreichbar,
- Linktexte sind aussagekräftig,
- keine wichtige Seite ist verwaist,
- Wissen und Leistungen verlinken sich thematisch,
- interne Links zeigen möglichst direkt auf Zielseiten und nicht auf Redirects.

### 11.2 JavaScript

Wichtige SEO-Inhalte müssen im initialen oder serverseitig gerenderten HTML
stehen.

Codex darf wichtige Inhalte nicht ausschließlich abhängig machen von:

- Hover-Zuständen
- JavaScript-Klickhandlern
- nachgeladenen Client-Aktionen
- Canvas-Visuals ohne HTML-Alternative
- Animationen als Träger der eigentlichen Information

Wenn eine Grafik fachlich etwas erklärt, muss die Kernaussage zusätzlich als
HTML-Text auf der Seite vorkommen.

## 12. Anforderungen an Sitemap und robots.txt

### 12.1 Sitemap

Die Sitemap muss:

- alle kanonischen indexierbaren URLs enthalten,
- keine Redirects enthalten,
- keine 404-Seiten enthalten,
- deutsche und englische Seiten enthalten,
- zur Produktionsdomain passen.

### 12.2 robots.txt

Die `robots.txt` muss:

- Produktionsseiten crawlbar lassen,
- die Sitemap referenzieren,
- keine wichtigen CSS-, JS- oder Bildressourcen blockieren,
- nicht versehentlich aus einer Staging-Konfiguration übernommen sein.

## 13. Anforderungen an Bilder

Codex soll Bilder nicht nur optisch, sondern auch SEO-seitig prüfen.

### 13.1 Dateinamen

Dateinamen sollen beschreibend sein.

Nicht gut:

- `img-0071.jpg`
- `bild1.png`

Besser:

- `reltest-weibull-datenanalyse.jpg`
- `zuverlaessigkeit-seminar.jpg`

### 13.2 Alt-Texte

Alt-Texte müssen:

- den relevanten Bildinhalt beschreiben,
- der Funktion des Bildes entsprechen,
- nicht aus Keyword-Listen bestehen,
- bei dekorativen Bildern leer sein.

### 13.3 Kontext

Fachgrafiken sollen:

- mit erklärendem Text umgeben sein,
- möglichst mit sichtbarer Bildunterschrift ergänzt sein,
- wenn wichtig auf eigenen Wissensseiten oder passenden Fachseiten erscheinen.

### 13.4 Performance

Codex soll prüfen:

- Quelldateigrößen
- Abmessungen
- WebP oder AVIF
- Priorisierung kritischer Bilder
- unnötige doppelte Downloads
- Hintergrundbilder außerhalb von `next/image`

## 14. Anforderungen an Performance

Die Zielwerte für Core Web Vitals sind:

- `LCP`: höchstens 2,5 Sekunden
- `INP`: höchstens 200 Millisekunden
- `CLS`: höchstens 0,1

Diese Werte gelten am 75. Perzentil für Mobil und Desktop, sobald
Produktions-Felddaten verfügbar sind.

Codex soll bei Performance-Themen prüfen:

- Bildgewicht
- JavaScript-Menge
- Drittanbieter-Skripte
- Layout-Stabilität
- Font-Loading
- Serverantwortzeit
- Animationen

Wichtig:

Lighthouse ist hilfreich, aber kein vollständiger Nachweis. Felddaten aus Search
Console oder Real User Monitoring haben Vorrang.

## 15. Anforderungen an mobile Nutzbarkeit und Barrierefreiheit

Mobile-First ist für SEO zentral.

Codex soll sicherstellen:

- gleiche wesentliche Inhalte auf Mobil und Desktop,
- keine versteckten SEO-relevanten Inhalte in der mobilen Version,
- keine überlagerten oder unbedienbaren Menüs,
- ausreichend große Bedienelemente,
- Tastaturbedienbarkeit,
- Fokuszustände,
- sinnvolle Fokusreihenfolge,
- ausreichende Farbkontraste,
- beschriftete Formulare,
- reduzierte Bewegung bei `prefers-reduced-motion`.

Barrierefreiheit ist nicht nur UX, sondern unterstützt auch:

- bessere semantische Struktur,
- sauberere Link- und Überschriftenhierarchie,
- klarere Formulare,
- robustere mobile Nutzbarkeit.

## 16. Anforderungen an strukturierte Daten

Relevante Schemata für dieses Projekt:

- `Organization`
- `WebSite`
- `WebPage`
- `BreadcrumbList`
- `Person`
- `Article`
- `Book`
- eventuell `Course`

Regeln:

- nur sichtbare und echte Inhalte auszeichnen,
- keine erfundenen Bewertungen,
- keine widersprüchlichen Firmendaten,
- nur offizielle Profile in `sameAs`.

## 17. Relaunch- und Migrationsregeln

Dies ist der wichtigste Bereich für Codex bei größeren Strukturänderungen.

### 17.1 Alte URLs zuerst erfassen

Vor jeder endgültigen URL-Änderung müssen Alt-URLs aus mindestens diesen
Quellen berücksichtigt werden:

- bestehende Sitemaps
- Search Console
- Analytics
- Backlinks
- WordPress-Inhalte

### 17.2 Für jede Alt-URL eine Maßnahme definieren

Mögliche Maßnahmen:

- beibehalten
- überarbeiten
- zusammenführen
- umleiten
- bewusst entfernen

### 17.3 Redirect-Qualität

Codex muss vermeiden:

- Redirect-Ketten
- Redirect-Loops
- pauschale Weiterleitungen auf die Startseite
- Sprachmischung bei Weiterleitungen
- Verlust von PDFs, Bildern und Downloads

### 17.4 Alte Inhalte nicht unbedacht löschen

Wenn eine alte Seite Rankings, Backlinks oder Suchintention besitzt, darf sie
nicht ersatzlos entfallen, nur weil die neue Navigation kompakter ist.

## 18. Off-Page- und Vertrauenssignale

Codex soll prüfen, ob die Website diese Nachweise sichtbar nutzt:

- Fachbuch
- Podcast
- Academy
- Referenzen
- Team und Autoren
- Hochschul- und Award-Bezüge
- Unternehmensdaten

Die Seite soll nicht nur behaupten, kompetent zu sein, sondern Nachweise
sichtbar machen.

## 19. Search Console, Analytics und Monitoring

Codex soll SEO-Arbeit nicht nur am Code, sondern auch an Daten ausrichten.

Wenn verfügbar, sollen berücksichtigt werden:

- Search Console
- Analytics
- Bing Webmaster Tools
- Backlink-Daten
- Feldwerte für Core Web Vitals

Wichtige Kennzahlen:

- Impressionen
- Klicks
- Klickrate
- durchschnittliche Position
- indexierte Seiten
- organische Landingpages
- organische Conversions
- 404- und 5xx-Fehler

## 20. Codex-Workflow bei SEO-Arbeit

Wenn Codex an Seiten, Struktur oder Inhalten arbeitet, soll er diese Reihenfolge
einhalten:

1. betroffene Seiten und Suchintentionen identifizieren
2. prüfen, ob bestehende URLs, Rankings oder Backlinks betroffen sind
3. technische SEO-Anforderungen prüfen
4. inhaltliche SEO-Anforderungen prüfen
5. Sprachversionen und `hreflang` mitdenken
6. interne Links und CTAs prüfen
7. Bild- und Performance-Folgen prüfen
8. bei Bedarf Redirects und Sitemap-/robots-Auswirkungen berücksichtigen
9. Abnahmekriterien formulieren oder testen

## 21. Codex-Checkliste für jede neue oder geänderte Seite

- [ ] Hat die Seite eine klare Suchintention?
- [ ] Gibt es bereits eine konkurrierende Seite mit derselben Hauptintention?
- [ ] Hat die Seite einen eindeutigen Title?
- [ ] Hat die Seite eine eindeutige Description?
- [ ] Gibt es genau eine sinnvolle H1?
- [ ] Sind H2 und H3 logisch?
- [ ] Ist der Inhalt substanziell und nicht nur Platzhalter?
- [ ] Sind interne Links sinnvoll gesetzt?
- [ ] Sind Linktexte konkret?
- [ ] Gibt es Canonical und korrekte `hreflang`-Verweise?
- [ ] Ist die Sprachumschaltung korrekt?
- [ ] Ist die Seite über echte HTML-Links erreichbar?
- [ ] Ist der Hauptinhalt im HTML vorhanden?
- [ ] Sind Bilder sinnvoll benannt und mit Alt-Text versehen?
- [ ] Gibt es Performance-Risiken?
- [ ] Funktioniert die Seite mobil?
- [ ] Sind Vertrauenssignale sichtbar?
- [ ] Muss eine alte URL weitergeleitet werden?

## 22. Codex-Checkliste für technische Gesamtprüfungen

- [ ] `robots.txt` vorhanden und korrekt
- [ ] `sitemap.xml` vorhanden und korrekt
- [ ] keine 404 in Sitemap
- [ ] keine Redirects in Sitemap
- [ ] keine Staging-Signale in Produktion
- [ ] korrekte Statuscodes
- [ ] HTTPS und Hauptdomain konsistent
- [ ] `hreflang` wechselseitig
- [ ] Self-Canonicals vorhanden
- [ ] keine mehrfachen H1 auf indexierbaren Seiten
- [ ] keine offensichtliche Keyword-Kannibalisierung
- [ ] Core-Web-Vitals-Ziele berücksichtigt
- [ ] mobile Inhalte vollständig
- [ ] Formulare und CTAs funktionieren

## 23. Aktuell bekannte SEO-Lücken in diesem Projekt

Stand dieses Dokuments sind unter anderem bereits identifiziert:

- globale statt seitenspezifische Metadaten
- unvollständige `hreflang`-Zuordnung
- fehlende Canonicals
- fehlende `robots.txt`
- fehlende `sitemap.xml`
- fehlende strukturierte Daten
- fehlende oder unvollständige Redirect-Matrix
- dünne oder unfertige Wissensinhalte
- mehrere Überschriftenprobleme
- noch nicht ausreichend ausdifferenzierte Leistungs-Landingpages
- große Bilddateien und Bild-SEO-Lücken
- fehlende oder unvollständige Rechtstextseiten

Codex soll diese Punkte nicht nur erkennen, sondern aktiv in jede weitere
Planung und Umsetzung einbeziehen.

## 24. Prioritäten für Codex

### P0

Vor Go-live oder bei kritischen Strukturänderungen zuerst:

- Redirects
- Canonicals
- `hreflang`
- Sitemap
- `robots.txt`
- Metadaten
- H1-Struktur
- Rechtstexte
- Indexierbarkeit

### P1

Danach:

- Leistungsseiten
- Wissensseiten
- DoE- und Methodenseiten
- Bilder und Performance
- strukturierte Daten
- interne Verlinkung
- Team- und Autoritätsseiten

### P2

Langfristig:

- Digital PR
- Fachpublikationen
- Case Studies
- Backlink-Ausbau
- fortlaufende Content-Strategie

## 25. Quellenbasis

Dieser Leitfaden baut auf diesen internen Dokumenten auf:

- `docs/seo/seo-audit-und-aufgaben.md`
- `docs/seo/google-seo-leitfaden-fuer-reltest.md`
- `docs/project/repo-dokumentation.md`
- `docs/vision/reltest-website-vision.md`

Wichtige externe Primärquellen:

- Google SEO-Startleitfaden
- Google Search Essentials
- Google: So funktioniert die Suche
- Google: Website mit URL-Änderungen migrieren
- Google: Canonical URLs
- Google: Lokalisierte Seiten und `hreflang`
- Google: Search Console
- Google: hilfreiche Inhalte
- Google: Core Web Vitals
- web.dev Web Vitals
- Schema.org

## 26. Erwartetes Verhalten von Codex

Wenn Codex an dieser Website arbeitet, soll er SEO nicht als nachgelagertes
Extra behandeln.

Codex soll:

- Änderungen immer auch SEO-seitig mitdenken,
- Strukturentscheidungen challengen, wenn sie Ranking-Risiken erzeugen,
- fehlende Seiten oder Signale benennen,
- bei neuen Inhalten Suchintention und Kannibalisierung prüfen,
- bei technischen Änderungen Crawlbarkeit und Indexierung prüfen,
- bei Migrationen konsequent URL-Signale und Redirects absichern,
- bei Unsicherheit eher auf Suchmaschinenrobustheit als auf rein dekorative
  Lösungen optimieren.

Wenn ein Design, ein Routing-Wechsel oder eine Inhaltsentscheidung SEO-Risiken
erzeugt, soll Codex das aktiv ansprechen und eine bessere Alternative
vorschlagen.
