# Prelaunch-Audit und Änderungsprotokoll

Stand: 15. September 2026

Umfang: neue RelTest-Website, Deutsch und Englisch, Vergleich mit dem öffentlichen WordPress-Auftritt.

## Ergebnis und Freigabestatus

Die im Audit gefundenen, im Repository behebbaren Fehler sind korrigiert und am
lokalen Produktionsbuild nachgetestet. **Noch keine uneingeschränkte Launchfreigabe:**
Die tatsächliche Vercel-Konfiguration, E-Mail-Zustellung, nicht öffentlich
inventarisierbare Altinhalte und fachliche/rechtliche Freigaben bleiben offen.
Diese Grenzen sind unten als konkrete Freigabeschritte dokumentiert.

Es wurde **nichts committet, gepusht oder deployed**, kein DNS geändert und keine
echte Anfrage-/Bestätigungsmail versendet. Bereits vorhandene Änderungen am
Kontaktformular, an der Bestätigungsmail und am Datenschutz wurden erhalten.
Die Gestaltung der Bestätigungsmail war bereits vor diesem Audit in Bearbeitung
und wird hier nicht als vollständig neu erstellte Audit-Leistung ausgewiesen.

**Die neue Website bleibt standardmäßig für Suchmaschinen gesperrt, auch wenn
Vercel das Deployment „Production“ nennt.** Die zuvor veröffentlichte Testversion
unter `reltest-solutions-website.vercel.app` lieferte beim Check dagegen noch ein
erlaubendes robots.txt und keinen entsprechenden X-Robots-Tag aus. Die lokalen
Korrekturen wirken dort erst nach einem neuen, bewusst geschützten Testdeployment.
Der bestehende öffentliche WordPress-Auftritt wurde nicht verändert.

## Nachgewiesener Prüfumfang

| Prüfung | Ergebnis nach Korrektur | Aussagegrenze |
| --- | --- | --- |
| Alle Inhaltsseiten | 104 von 104 mit HTTP 200, 52 DE / 52 EN | Lokaler Produktionsbuild |
| Bekannte alte Seitenadressen | 83 von 83: genau ein 301 auf ein gültiges 200-Ziel | Öffentliche WordPress-Sitemaps, nicht GSC/Backlink-Export |
| Interne Links | 495 unterschiedliche Linkziele geprüft, kein defektes Ziel/Fragment | Im gerenderten HTML gefundene Links |
| Bildressourcen | 167 gefundene Ressourcen ohne Auslieferungsfehler | Keine vollständige manuelle Bildrechtsprüfung |
| Alte Dateien | 101 Bilder + 3 PDFs, 104 SHA-256-Abgleiche erfolgreich | Nur öffentlich referenzierte, erfasste Originaldateien |
| Metadaten | Keine fehlenden Titles/Descriptions, fehlerhaften Canonicals/hreflang-Paare oder doppelten Descriptions | Technische Prüfung, keine Rankinggarantie |
| Überschriften/Struktur | Genau eine H1 und ein Hauptinhaltsbereich pro Inhaltsseite | Automatische Strukturprüfung |
| Platzhalter/Alt-Texte | Keine erkannten sichtbaren Platzhalter und keine fehlenden Bild-Alt-Attribute | Quellcode-Fallbacks sind nicht automatisch sichtbare Platzhalter |
| Strukturierte Daten | Keine JSON-LD-Parsefehler | Keine Zusage für Google-Rich-Results |
| Barrierefreiheit | Alle 104 Seiten ohne Treffer in geprüften axe-WCAG-2/2.1-A/AA-Regeln | Kein vollständiges WCAG-Zertifikat oder Screenreader-Audit |
| Responsive Darstellung | 104 Seiten bei 360 px; Startseite zusätzlich 320–2560 px | Edge/Chromium, keine echten iOS/Safari-Geräte |
| Interaktionen | 16 Tests bestanden: Navigation, Tastatur, Suche, Sprache, Consent, Formular | Formularantworten/Calendly im Browser gemockt |
| Kontakt-API | 17 isolierte Tests bestanden | Mailtransport gemockt; zusätzlich TLS/SMTP-Anmeldung real geprüft |
| Indexierungslogik | 5 isolierte Tests bestanden | Freigabezustand simuliert, nicht tatsächlich eingeschaltet |
| Fehlerseiten | Echte DE/EN-404 inkl. unbekanntem Download; Fehleransicht und Wiederholen getestet | Segment-Fehlerfall im Browser simuliert |
| Qualität/Sicherheit | Production-Build und ESLint erfolgreich; npm audit: 0 gemeldete Schwachstellen | Bekannte Advisories zum Prüfzeitpunkt, kein Penetrationstest |

Drei identische Seitentitel über Sprachgrenzen hinweg sind Eigennamen
(Kevin Lucan, Bernd Bertsche, RAMS Student Paper Award), nicht versehentlich
duplizierte Seitentitel innerhalb einer Sprache. Sie wurden bewusst nicht
künstlich verändert. Canonicals zeigen weiterhin auf die vorgesehene
Hauptdomain `.com`; englische öffentliche Slugs bleiben englisch.

## Was geändert wurde – und warum

Pfade in dieser Tabelle sind relativ zum Repository. Zusammengehörige
mechanische Korrekturen sind gruppiert, damit der Grund nicht pro Seite
wiederholt werden muss.

| ID | Befund / warum es nicht passte | Korrektur | Betroffene Dateien / Bereiche |
| --- | --- | --- | --- |
| A01 | Ein Production-Deployment konnte vor der Freigabe indexierbar werden. | Explizites Opt-in `SITE_INDEXING_ENABLED=true`; standardmäßig noindex/nofollow, robots `Disallow: /`, leere Sitemap. Preview/Development dürfen nicht freischalten. | `app/_seo/deployment.ts`, `app/_seo/metadata.ts`, `app/robots.ts`, `app/sitemap.ts`, `next.config.ts` |
| A02 | Generierte Vercel-Adressen dürfen auch später keine parallelen Suchergebnisse erzeugen. | Hostabhängiger X-Robots-Tag für `.vercel.app` bleibt auch bei später freigegebener Hauptdomain erhalten. | `next.config.ts` |
| A03 | Pauschales lastModified-Datum behauptete eine inhaltliche Aktualisierung aller Seiten. | Nicht belegtes Einheitsdatum aus der Sitemap entfernt; spätere Daten nur mit echter Inhaltsquelle. | `app/sitemap.ts` |
| A04 | Unterseiten hatten keine zuverlässig eigenen Social-Image-Metadaten. Das gemeinsame Bild verwendete ein generisches R statt der offiziellen Marke. | OG/Twitter-Bildzuordnung auf allen Seiten, offizielle vorhandene Logo-Datei, Marine/Cyan, verbindlicher Claim DE/EN. Keine externen Logo-Requests beim Rendern. | `app/_seo/metadata.ts`, `app/_seo/social-image.tsx` |
| A05 | Nach deaktivierter Next-Trailing-Slash-Automatik blieben zusätzliche URL-Varianten ohne eindeutige Normalisierung. | Verbleibende Slash-Varianten mit 301 normalisiert, Query beibehalten; bestehende Alt-Redirects haben Vorrang. Plain URL statt NextURL verhindert eine beim Zwischencheck entdeckte Schleife. | `proxy.ts` |
| A06 | Unbekannte Seiten/Slugs hatten keine durchgängig brauchbare lokalisierte Fehlerdarstellung. | Globale und sprachbezogene 404 mit echten Statuscodes, verständlichen Rückwegen und noindex; unbekannte dynamische Parameter ausgeschlossen. | `app/global-not-found.tsx`, `app/[lang]/not-found.tsx`, `app/_components/error-screen.tsx`, `app/[lang]/layout.tsx`, sechs `[slug]/page.tsx`, `next.config.ts` |
| A07 | Für Laufzeitfehler fehlten gebrandete Rückwege und Wiederholen. | DE/EN-Fehleransichten für Segment und Root; Recovery an die dokumentierte `retry`-API von Next 16.3.5 angepasst. Keine technischen Stacktraces im UI. | `app/[lang]/error.tsx`, `app/global-error.tsx`, `app/_components/error-screen.tsx` |
| A08 | Bei 320 px entstand horizontaler Überlauf, insbesondere durch Grid-Mindestbreiten und lange Überschriften. | Explizite einspaltige Basis-Grids, `min-w-0`, passende Wortumbrüche/Trennung; Desktop-Hierarchie bleibt erhalten. | `home-page-content.tsx`, `site-footer.tsx`, `app/globals.css` |
| A09 | Kleine cyan-/grüne bzw. zu transparente Texte unterschritten erforderliche Kontraste auf hellen Flächen. | Marine für lesbare Labels, Links und kleine Texte; geeignete Deckkraft; dunkle Beschriftung auf Cyan/Grün. Akzentlinien, Bereichsfarben und offizielle Logos bleiben erhalten. Hover-/Aktivzustände mitgeprüft. | Seiten `aktuelles`, `branchen`, `education`, `expertise`, `glossar`, `kontakt`, `leistungen`, `literatur`, `referenzen`, `ueber-uns`, `wissen`; gemeinsame Detail-/Listen-/Navigations-/CTA-/Consent-/Formular-Komponenten und `globals.css` |
| A10 | Verschachtelte main-Elemente erzeugten mehrere Haupt-Landmarks. | Innere main-Wrapper der Seiten/Templates zu div geändert; ein äußerer Hauptbereich bleibt. | 15 Seiten/Templates sowie `app/[lang]/layout.tsx` |
| A11 | Tastaturnutzer mussten jedes Mal durch die komplette Kopf-Navigation. Ein SFZ-Link hatte ein vom sichtbaren Text abweichendes Accessible Name. | Lokalisierter, bei Fokus sichtbarer Skip-Link; redundantes SFZ-aria-label entfernt. | `app/[lang]/layout.tsx`, `app/globals.css`, `home-page-content.tsx` |
| A12 | Gesperrter Browser-Speicher konnte Consent-Entscheidungen unbrauchbar machen; zukünftige Zeitstempel wurden akzeptiert. | Flüchtiger In-Memory-Fallback nur bei Storage-Fehlern, keine implizite Zustimmung; ungültige Zeitstempel verworfen und Storage-Löschungen berücksichtigt. | `app/_components/consent-state.ts` |
| A13 | Nach Schließen/Widerrufen konnte der vorherige Fokus verloren gehen. | Fokusziel vor dem Zurücksetzen des Refs sichern, anschließend wiederherstellen. | `app/_components/cookie-consent-manager.tsx` |
| A14 | Origin-Validierung vertraute zusätzlich manipulierbaren Forwarded-Headern. | Abgleich nur gegen die Request-URL-Origin; Spoofing-Fall als Regressionstest. | `app/api/contact/route.ts` |
| A15 | E-Mail-Eingaben konnten Empfängerlisten-/Header-Syntax enthalten. | Genau eine Empfängeradresse, keine Listen/Steuerzeichen/Header-Syntax; strukturierte Nodemailer-Adressen und HTML-Escaping beibehalten. | `app/api/contact/route.ts`, `scripts/test-contact.mjs` |
| A16 | Größenbegrenzung über Stringlänge begrenzte keine tatsächlichen UTF-8-Bytes und kam zu spät. | Request-Stream bis maximal 16 KiB lesen; tatsächliche Bytes zählen, übergroße Requests abbrechen. | `app/api/contact/route.ts` |
| A17 | Prozesslokale Rate-Limit-Einträge konnten unbeschränkt wachsen. | Abgelaufene Einträge bereinigen, maximale Anzahl begrenzen; 4 Anfragen je 15 Minuten beibehalten. Kein Ersatz für verteilten Spam-Schutz. | `app/api/contact/route.ts` |
| A18 | Bei SMTP ohne implizites TLS sollte keine unverschlüsselte Verbindung als Ausweichweg möglich sein. | STARTTLS mit `requireTLS` erzwingen, wenn `secure` false ist. | `app/api/contact/route.ts` |
| A19 | UI erklärte das Unternehmen nur für Privatpersonen als optional, setzte die Pflicht aber nicht entsprechend durch. | Unternehmens-/öffentliche Anfragen verlangen eine Organisation; Privatpersonen dürfen das Feld leer lassen. Client und Server stimmen überein. | `contact-inquiry-form.tsx`, `app/api/contact/route.ts` |
| A20 | Validierungs- und Rate-Limit-Probleme erschienen unnötig als allgemeiner Versandfehler. | Verständliche lokalisierte Rückmeldungen für 400/429; Eingaben bleiben bei Fehlern erhalten. Bestehende sichtbare Erfolgs-/Teil-Erfolgsmeldungen und Bestätigungsmail erhalten. | `contact-inquiry-form.tsx` |
| A21 | Beim Sprachwechsel konnte ein deutscher Education-Anker auf der englischen Seite ins Leere führen. | `vor-ort-schulung` ↔ `on-site-training` übersetzen, Pfad und Query beibehalten. Sprachparameter am Wissensbild explizit weitergeben. | `app/_i18n/routes.ts`, `language-switcher.tsx`, `app/[lang]/wissen/page.tsx` |
| A22 | Nicht verwendete frühere Schriftfamilien wurden weiterhin vorbereitet; das wichtigste Hero-Bild hatte keine passende Fetch-Priorität. | IBM Plex Sans/Sora entfernt, Tokens auf Archivo/Oxanium konsolidiert; erstes Hero-Bild eager/high bei Qualität 75, Logo eager. Weitere Slides bleiben lazy. | `app/[lang]/layout.tsx`, `app/globals.css`, `home-page-hero.tsx`, `site-brand-logo.tsx` |
| A23 | Next/Sharp und transitive Pakete hatten bekannte Sicherheitsmeldungen. | Next + ESLint-Konfiguration auf 16.3.5; gezielte kompatible Lockfile-Updates einschließlich Sharp, PostCSS und betroffener Entwicklungsabhängigkeiten. Kein `audit fix --force`. Build/Tests nach API-Anpassung erfolgreich. | `package.json`, `package-lock.json` |
| A24 | Allgemeine defensive Response-Header fehlten. | `X-Content-Type-Options: nosniff` und `Referrer-Policy: strict-origin-when-cross-origin`. Keine ungeprüfte CSP eingeführt, die Calendly/Bilder blockieren könnte. | `next.config.ts` |
| A25 | Ein Seminarbericht verlinkte auf eine echte externe 404. | Veralteten High-Tech-Campus-Link durch den thematisch passenden Originalbericht des Veranstalters ersetzt, Beschriftung in DE/EN angepasst. | `app/_content/migration-pages.ts` |
| A26 | Alte Bild-/PDF-Adressen wären nach der Domain-Umstellung verloren gegangen. | 104 öffentlich referenzierte Originaldateien unverändert am alten Pfad archiviert; Prüfsummen gespeichert. Alte Seminar-PDFs dauerhaft noindex, nicht als aktuelle Angebote beworben. | `public/wp-content/uploads/**`, `next.config.ts`, Datei-Migrationsmanifest |
| A27 | Die Migrationsmatrix enthielt nur eine Vorlagenzeile, ältere Audit-Dokumente beschrieben inzwischen behobene Probleme als aktuell. | Vollständige 83-Zeilen-Matrix, 104-Seiten-Metadaten-Snapshot, Dateimanifest und aktueller Bericht; historische Dokumente eindeutig eingeordnet. | `docs/seo/url-migrationsmatrix.md`, `docs/seo/reviews/**`, SEO-Backlog, Migrationsplan |
| A28 | Mail-/Indexierungsregressionen waren nicht einfach ohne echte Mails reproduzierbar. | Zwei wiederholbare Node-Testsuiten, isolierte Umgebungsvariablen und gemockter Mailversand; npm-Kommandos ergänzt. | `scripts/test-contact.mjs`, `scripts/test-indexing.mjs`, `package.json` |

Die Next-Aktualisierung berücksichtigt unter anderem die veröffentlichte
Windows-spezifische kritische Schwachstelle. Das bedeutet nicht, dass eine
Ausnutzung nachgewiesen wurde oder dieselbe Windows-Lücke den Linux-Host bei
Vercel betraf. Quellen: [Next-Advisory](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36),
[Sharp-Advisory](https://github.com/lovell/sharp/security/advisories/GHSA-rgj7-g3m4-5g8c),
[Next 16.3.5](https://github.com/vercel/next.js/releases/tag/v16.3.5).
Der ersetzte externe Link führt zum [Veranstalterbericht](https://www.holland-innovative.nl/blog/experts-address-reliability-in-the-high-tech).

## Migration: Was übernommen ist – und was noch nicht bewiesen ist

Die vier öffentlichen Alt-Sitemaps enthalten weiterhin 70 Seiten, 10 Beiträge,
2 Kategorien und ein Autorenarchiv. Alle 83 URLs haben ein erreichbares
Nachfolgeziel. Themenseiten, Seminarseiten, Team, Referenzen, Literatur, News
und DE/EN-Rechts-/Kontaktseiten sind im neuen Inventar vorhanden.

- Karriere entfällt gemäß der bereits festgelegten Projektentscheidung;
  bestehende Redirects auf „Wir sind RelTest“ wurden nicht als neue
  Karrierefunktion ausgegeben.
- Kategorien/Autorenarchiv sind in „Aktuelles“ zusammengeführt.
- **Membership-Login ist nicht funktional migriert.** Der bestehende Redirect
  führt zum Kontakt. Vor Launch muss bestätigt werden, dass kein benötigter
  Mitgliederzugang/Kundeninhalt dadurch entfällt; sonst ist ein echtes
  funktionales Ziel erforderlich.
- Education verlinkt weiterhin auf die Academy; Calendly bleibt erhalten und
  wird erst nach Zustimmung geladen. Kurskauf, Konten und echte Buchungen
  wurden nicht durchgeführt.
- Die 104 archivierten Dateien belegen keine vollständige Übernahme der
  WordPress-Mediathek. Nicht referenzierte Uploads, CSS-Hintergründe und weitere
  Auflösungsvarianten benötigen einen vollständigen Export.
- Die drei alten Seminar-PDFs bleiben historische Dateien, nicht automatisch
  fachlich/zeitlich freigegebene aktuelle Angebotsunterlagen.
- Redaktions-/Fachfreigabe für Teamdaten, Leistungszusagen, Kundenlogos,
  Bildrechte, Termine und fachliche Aussagen bleibt bei RelTest. Ein
  automatischer Crawl kann diese Freigabe nicht ersetzen.

Nachweise: [URL-Matrix](../url-migrationsmatrix.md),
[Seiten- und Redirect-Snapshot](2026-09-15-url-checks.json),
[Dateimanifest mit SHA-256](2026-09-15-legacy-assets.json).
Die alten Dateien umfassen 7.546.788 Bytes (7,55 MB).

## Performance und Grenzen der Messung

Lighthouse, mobiler Modus, lokaler Produktionsserver; finaler Einzel-Durchlauf:

| Seite | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `/de` | 94 | 100 | 100 | 69 | 3,1 s | 0 |
| `/de/kontakt` | 94 | 100 | 100 | 69 | 3,1 s | 0 |
| `/de/education` | 98 | 100 | 100 | 69 | 2,4 s | 0 |
| `/de/wissen/absicherung` | 93 | 100 | 100 | 69 | 3,2 s | 0 |

TBT jeweils 20 ms. Vor Korrektur lagen die Accessibility-Werte derselben
Stichprobe bei 96–97. Performance schwankt zwischen Durchläufen; deshalb keine
pauschale Geschwindigkeitszusage aus wenigen Punkten Differenz ableiten.
Der SEO-Abzug stammt aus der **gewollten Crawling-/Indexierungssperre**. Diese
wird nicht für einen schöneren Testwert aufgehoben.

LCP liegt bei drei der vier Tests noch über 2,5 Sekunden. Weitere Bild-/Font-
Optimierung ist sinnvoll, aber kein Grund, ohne Bildprüfung alle Bilder
pauschal stärker zu komprimieren. Es liegen keine echten Core-Web-Vitals-
Felddaten vor. Nach geschütztem Vercel-Test erneut messen; nach dem späteren
Launch Search Console/CrUX prüfen. Automatische A11y-Tests ersetzen keine
manuelle Prüfung mit Screenreader und echten mobilen Geräten.

## Offene Freigaben und konkrete nächste Schritte

### Jetzt: Teststand sicher prüfen, noch nicht launchen

1. Im **richtigen Vercel-Projekt** `reltest-solutions-website` die
   Deployment Protection für **alle Deployments einschließlich Production**
   aktivieren bzw. prüfen. Dann die korrigierte Version nur als geschützten
   Teststand bereitstellen. Keine DNS-Umstellung der bestehenden `.com`-Website.
2. `SITE_INDEXING_ENABLED` jetzt **nicht auf true setzen**. Fehlend oder false
   hält die Sperre aktiv. Nach dem Testdeployment `/robots.txt`, `/sitemap.xml`
   und den `X-Robots-Tag` erneut direkt am Deployment prüfen.
3. Echte Testanfrage mit einer kontrollierten Empfängeradresse durchführen:
   Eingang intern, Besucherbestätigung, Spamordner, Darstellung und Antworten
   prüfen. Lokale IONOS-TLS-Verbindung und Anmeldung waren erfolgreich, aber
   das beweist weder die Vercel-Variablen noch die Zustellung beider Mails.
4. SMTP-From bleibt technisch `website@reltest-solutions.de`; internes Ziel
   und Reply-To der Bestätigung sind `info@reltest-solutions.com`. Die
   Besucheradresse ist kein frei einsetzbarer Absender. Keine Zugangsdaten
   in Tickets, Screenshots oder Git aufnehmen.

Robots-Regeln sind **keine Zugriffssperre**. Google kann eine gesperrte URL
unter Umständen ohne Inhalt in Suchergebnissen aufführen; ein durch robots
blockierter Crawler sieht das noindex-Dokument nicht. Für „noch nicht
öffentlich sichtbar“ ist deshalb Authentifizierung/Deployment Protection die
passende zusätzliche Schranke. Siehe [Google zu robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro),
[Google zu noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
und [Vercel Deployment Protection](https://vercel.com/docs/deployment-protection).

### Vor einer späteren echten Launchfreigabe

- Vollständiges WordPress-Backup/-Export und Search-Console-/Analytics-/
  Backlink-URL-Exporte gegen die Matrix abgleichen; fehlende URLs ergänzen.
  Membership-Funktion und bewusst entfernte Bereiche ausdrücklich abnehmen.
- Impressum, Datenschutz, Auftragsverarbeitung und Consent sowie öffentliche
  Geschäfts-/Bildangaben fachlich/rechtlich freigeben. Das Audit ist keine
  Rechtsberatung oder juristische Freigabe.
- Spam-Schutz für den realen Betrieb festlegen: Honeypot und prozesslokales
  Rate-Limit sind Basisschutz, kein verteiltes Limit über alle Vercel-Instanzen.
  Es wurde **kein Turnstile** ohne passende Schlüssel/Konfiguration eingebaut.
  Firewall-/Rate-Limit-Regeln oder ein geeigneter zusätzlicher Schutz sind
  auf dem echten Hosting zu entscheiden und zu testen.
- Hauptdomain, www-Weiterleitung, TLS und Hostingübergabe planen; bestehende
  MX-, SPF-, DKIM- und DMARC-Einträge für den Mailbetrieb erhalten. Einen
  Verantwortlichen und getesteten Rollback mit altem Hosting/Backup festlegen.
- Externe ASYS-Seite (403 bei automatischem Abruf) und IEEE-Ziele (202/Anti-Bot)
  manuell prüfen. Das sind unbestätigte Zugriffe, nicht nachgewiesene tote Links.
- Reale mobile Browser/Safari, Tastatur/Screenreader und Mail-Clients prüfen.
  Im lokalen Next-Server erschien bei einzelnen unbekannten Slugs die interne
  Meldung `NoFallbackError`, obwohl HTTP 404 und die lokalisierte Seite korrekt
  waren. Auf dem Vercel-Testdeployment die entsprechenden Runtime-Logs
  nachprüfen; für gültige Inhaltsseiten gab es keine Browser-JavaScript-Fehler
  oder fehlgeschlagenen Seitenantworten.
- Erst nach ausdrücklicher Freigabe, Domain-Übergabe und entferntem
  Zugriffsschutz der echten Hauptdomain `SITE_INDEXING_ENABLED=true` setzen
  und neu bauen/deployen. Dann robots, Sitemap mit 104 Einträgen, Canonicals,
  hreflang, alte URLs und Formular erneut prüfen. Test-/Vercel-URLs geschützt
  halten. Sitemap erst dann in Search Console einreichen.

## Reproduzierbare Prüfungen und Belege

Im Repository ohne echte Mailzustellung ausführbar:

```sh
npm run lint
npm run test:contact
npm run test:indexing
npm run build
npm audit
npm run start -- --port 3100
```

Die beiden Testskripte verwenden isolierte Testkonfiguration und lesen keine
SMTP-Geheimnisse. Build kann für die konfigurierten Google-Fonts Netz benötigen;
die ausgelieferten Website-Fonts werden anschließend lokal gehostet.

Die umfangreichen Browser-/Crawl-/Lighthouse-Werkzeuge liefen getrennt vom
Projekt in einem temporären Audit-Verzeichnis, damit keine zusätzlichen
Produktionsabhängigkeiten entstehen. Browser-Plugin war ohne verbundenen
Browser; daher Playwright-Fallback mit lokalem Edge. Kein Tracking, keine
Calendly-Buchung und kein Formularversand wurden durch diese Browser-Tests
ausgelöst. Der separate SMTP-Check prüfte nur TLS und Anmeldung.

Dauerhafte Ergebnisdateien:

- [Testzusammenfassung](2026-09-15-test-results.json)
- [104 Seiten und 83 Weiterleitungen](2026-09-15-url-checks.json)
- [104 alte Dateien und Prüfsummen](2026-09-15-legacy-assets.json)
- [Migrationsmatrix mit fachlichen Hinweisen](../url-migrationsmatrix.md)

Rohdaten und Screenshots liegen lokal unter
`C:/Users/MaximilianÖttl/AppData/Local/Temp/reltest-launch-audit-20260915/`.
Diese temporären Dateien sind nicht Bestandteil eines Deployments.
