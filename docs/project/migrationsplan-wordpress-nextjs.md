# Migrationsplan WordPress zu Next.js

Stand: 21. Juni 2026  
Status: Arbeitsdokument fuer Planung, Umsetzung und Go-live

## 1. Ziel des Migrationsplans

Die aktuelle WordPress-Website `https://reltest-solutions.com/` soll durch die
neue Next.js-Website ersetzt werden, ohne wichtige SEO-Signale,
Kontaktmoeglichkeiten oder technische Integrationen zu verlieren.

Der Relaunch soll nicht nur optisch besser werden. Er soll auch:

- bestehende organische Sichtbarkeit schuetzen
- die technische SEO-Basis verbessern
- Kontakt- und Terminbuchungswege erhalten
- die Mehrsprachigkeit sauber abbilden
- Performance, Wartbarkeit und Nutzerfuehrung verbessern
- alte Inhalte kontrolliert uebernehmen, zusammenfuehren oder weiterleiten

## 2. Datenbasis der aktuellen Website

Die Live-Website wurde am 21. Juni 2026 erneut geprueft.

### 2.1 Oeffentliche Sitemaps

| Sitemap | Anzahl URLs | Bedeutung fuer Migration |
| --- | ---: | --- |
| `post-sitemap.xml` | 10 | News, Webinare, Artikel; SEO-Wert muss anhand Search Console bewertet werden |
| `page-sitemap.xml` | 70 | wichtigste Seitenbasis der aktuellen Website |
| `category-sitemap.xml` | 2 | WordPress-Archivseiten; meist Kandidaten fuer `noindex`, Redirect oder Entfernung |
| `author-sitemap.xml` | 1 | WordPress-Autorenseite; meist Kandidat fuer Redirect oder Entfernung |
| Gesamt | 83 | jede URL braucht eine bewusste Migrationsentscheidung |

Wichtig: In `robots.txt` wird aktuell nur `page-sitemap.xml` referenziert,
obwohl ein Sitemap-Index mit weiteren Sitemaps existiert. Das sollte in der
neuen Website sauberer geloest werden.

### 2.2 Aktuelle robots.txt

Aktuelle Regeln:

```txt
User-agent: *
Disallow: /wp-admin/
Disallow: /*.pdf$
Allow: /wp-admin/admin-ajax.php

sitemap: https://reltest-solutions.com/page-sitemap.xml
```

Migrationsrelevanz:

- `/wp-admin/` entfaellt nach dem Wechsel auf Next.js.
- Die PDF-Sperre muss bewusst neu bewertet werden.
- Die neue `robots.txt` sollte auf die finale Sitemap oder Sitemap-Indexdatei
  zeigen.
- Es darf kein versehentliches `noindex` oder globales `Disallow` auf
  Produktion bleiben.

### 2.3 Gefundene globale Integrationen der aktuellen Website

Auf den aktuellen Seiten sind mehrere Dienste global eingebunden oder
referenziert:

| Bereich | Aktuell gefunden | Migrationsentscheidung |
| --- | --- | --- |
| Terminbuchung | Calendly, Ziel `https://calendly.com/kevin-lucan` | Muss erhalten bleiben, ideal mit Consent und Fallback-Link |
| Kontaktformular | Contact Form 7, `wpcf7`, reCAPTCHA | Muss durch neue Formularloesung oder bewusst durch Mail/Calendly ersetzt werden |
| Cookie Consent | Borlabs Cookie | Muss durch neue Consent-Loesung ersetzt werden, falls Drittanbieter eingebunden bleiben |
| Analytics | Matomo, Google Tag Manager, `gtag` | Tracking-Konzept klaeren und datenschutzkonform migrieren |
| Videos | YouTube, Vimeo | Nur consent-freundlich einbinden oder als externe Links nutzen |
| Social | LinkedIn, Xing | Links uebernehmen; Widgets nur wenn wirklich noetig |
| Externe Links | RelTest Education, Uni Stuttgart, Springer, Podcast | Pruefen und in Inhaltsstruktur uebernehmen |
| WordPress-Funktionen | API, Theme, Plugins, Membership Login | Entscheiden, was entfaellt und was ersetzt wird |

### 2.4 Performance- und Technikhinweise der alten Website

Die alte WordPress-Seite hat typische Relaunch-Chancen:

- viele globale Skripte auf der Startseite
- viele Stylesheets
- viele Bilder auf der Startseite
- Pagebuilder- und Plugin-Last
- Caching-Header der Live-Seite wirkten in frueheren Checks unguenstig
- mobile Performance war in frueheren Lighthouse-Checks verbesserungsfaehig

Das ist eine Chance fuer die neue Website. Die neue Next.js-Seite sollte
weniger Drittanbieter-JavaScript, optimierte Bilder und stabilere Core Web
Vitals ausliefern.

## 3. Grundprinzipien der Migration

### 3.1 Keine URL verschwindet unbewusst

Jede alte URL aus Sitemap, Search Console, Analytics und Backlinkdaten braucht
eine Entscheidung:

- Inhalt bleibt unter gleicher oder vergleichbarer URL erhalten
- Inhalt wird verbessert
- Inhalt wird in eine staerkere Zielseite integriert
- alte URL bekommt eine fachlich passende `301`-Weiterleitung
- alte URL wird bewusst entfernt
- Seite bleibt erreichbar, aber wird auf `noindex` gesetzt

Keine relevante alte URL soll pauschal auf die Startseite weitergeleitet
werden.

### 3.2 SEO vor Design-Euphorie schuetzen

Die neue Website darf visuell moderner werden. Trotzdem muessen folgende
Signale erhalten oder verbessert werden:

- klare URL-Struktur
- eindeutige Seitenthemen
- eindeutige H1 je Seite
- unique Title und Meta Description
- crawlbare HTML-Links
- gute interne Verlinkung
- saubere Canonicals
- saubere `hreflang`-Signale
- strukturierte Daten, wo sinnvoll
- mobile Nutzbarkeit
- schnelle Ladezeiten
- fachlich belastbare Inhalte

### 3.3 Sprachrouting bewusst entscheiden

Die neue Website verwendet aktuell Sprachpfade wie `/de` und `/en`. Der
aktuelle `proxy.ts` leitet Pfade ohne Sprachkuerzel anhand von Cookie oder
`Accept-Language` weiter.

Das muss vor Go-live bewusst entschieden werden, weil die alte Website unter
`/` deutsch ist.

Empfehlung fuer SEO:

- Root-URL `/` nicht unkontrolliert anhand von Browser-Sprache variieren lassen.
- Entweder `/` als deutsche Startseite beibehalten oder stabil per `301` auf
  `/de` weiterleiten.
- Wenn `/` auf `/de` weiterleitet, muss das konsistent und crawlerfreundlich
  passieren.
- Sprachwechsel ueber echte HTML-Links anbieten.
- Jede deutsche Seite braucht ein englisches Pendant, wenn es fachlich
  existiert, und umgekehrt.
- `hreflang` inklusive `x-default` sauber definieren.

## 4. Aktueller Stand der neuen Website

Die neue Next.js-App hat aktuell diese sichtbaren Hauptseiten:

| Neuer Bereich | Status |
| --- | --- |
| Startseite | vorhanden |
| Leistungen | vorhanden |
| Weiterbildung | vorhanden |
| Wissen | vorhanden, Inhalte noch auszubauen |
| Prozess | vorhanden, aber von Startseite entfernt |
| Literatur | vorhanden |
| Referenzen | vorhanden |
| Kontakt | vorhanden |
| Deutsch/Englisch | grundlegend vorhanden |

Aktuell noch besonders migrationsrelevant offen:

- finale URL-Strategie fuer `/`, `/de`, `/en`
- alte URL-Migrationsmatrix fuellen
- Redirects technisch einrichten
- Metadaten je Seite finalisieren
- `sitemap.xml` oder Sitemap-Index erzeugen
- `robots.txt` fuer Produktion erzeugen
- `hreflang` und Canonicals final pruefen
- Datenschutz und Impressum als neue Seiten aufbauen
- Calendly sauber einbinden
- Kontaktformular oder Kontaktprozess final entscheiden
- Tracking, Consent und Datenschutz final klaeren
- alte News, Karriere-, Branchen-, Team- und Fachseiten bewerten

## 5. Migrationsumfang nach Bereichen

### 5.1 SEO- und URL-Migration

Muss vor Go-live:

- alle 83 Sitemap-URLs in `docs/seo/url-migrationsmatrix.md` eintragen
- Search-Console-Daten pro URL ergaenzen
- Analytics-Daten pro URL ergaenzen, falls verfuegbar
- Backlinks pro URL pruefen, zumindest fuer wichtigste Seiten
- alte URLs in P0, P1, P2 priorisieren
- passende neue Ziel-URL je alter URL definieren
- Redirects als `301` vorbereiten
- Redirects auf Staging testen
- Canonicals je neuer Seite pruefen
- `hreflang` je Sprachpaar pruefen
- XML-Sitemap der neuen Website erzeugen
- `robots.txt` neu erstellen
- 404- und 410-Strategie definieren

Besonders wichtige alte URL-Gruppen:

| Alte URL-Gruppe | Empfehlung |
| --- | --- |
| `/` und `/en/` | Startseiten-Migration als P0 behandeln |
| `/kontakt/`, `/en/contact/` | Kontakt und Calendly als P0 behandeln |
| `/impressum/`, `/datenschutz/` | rechtlich zwingend neu aufbauen |
| `/zuverlaessigkeitstechnik/...` | in neue Leistungen/Wissen-Struktur ueberfuehren oder gezielt weiterleiten |
| `/zuverlaessigkeitsmanagement/...` | Leistungen, Beratung, Weiterbildung und Branchen zuordnen |
| `/design-of-experiments/...` | DoE-Leistungs- und Wissensseiten sauber abbilden |
| `/branchen/...` | entscheiden: eigene Branchenunterseiten oder Redirects auf Leistungsseiten |
| `/ueber-uns/...` | Team-/Vertrauenssignale uebernehmen oder gezielt weiterleiten |
| `/buch-fuer-zuverlaessigkeit-im-fahrzeug-und-maschinenbau/` | auf Literaturseite oder eigene Buchseite abbilden |
| `/glossar/` | Wissensbereich-Entscheidung treffen |
| `/aktuelles/` und Posts | nach SEO-Daten bewerten, nicht pauschal entfernen |
| `/karriere/...` | Bedarf klaeren: Karrierebereich, Redirect oder Entfernung |
| `/membership-login/` | Zweck klaeren; wahrscheinlich nicht indexrelevant |
| Kategorie-/Autorenseiten | meist Redirect, `noindex` oder Entfernung |

### 5.2 Inhaltsmigration

Die neue Website soll nicht alle alten Inhalte ungefiltert kopieren. Sie soll
aber keine wichtigen Suchintentionen verlieren.

Muss vor Go-live:

- zentrale Leistungsinhalte migrieren und verbessern
- DoE sichtbar und fachlich korrekt integrieren
- Weiterbildung sauber trennen in Seminare und RelTest Education
- Fachbuch sichtbar einbinden
- Podcast sichtbar einbinden
- Referenzen und Logos uebernehmen
- reale Team-/Projektbilder sinnvoll nutzen
- Kontakt- und Vertrauenssignale erhalten
- englische Version fuer wichtige Seiten anbieten

Sollte vor Go-live:

- Wissensseiten-Grundstruktur mit Planung, Schwachstellenanalyse, Absicherung,
  Erprobung und Prognosen ausarbeiten
- alte Brancheninhalte bewerten
- alte Personenprofile bewerten
- alte Seminarunterseiten bewerten
- alte News/Webinar-Beitraege bewerten

Kann nach Go-live erweitert werden:

- Glossar
- tiefere Fachartikel
- weitere Wissensgrafiken
- detaillierte Branchenlandingpages
- weitere Case-Study- oder Referenzinhalte

### 5.3 Kontakt, Calendly und Lead-Prozess

Calendly ist ein Muss-Kriterium der Migration.

Aktuell gefunden:

- Calendly-Ziel: `https://calendly.com/kevin-lucan`
- Einbindung ueber Calendly Widget
- Borlabs-Cookie-Grafik/Consent-Hinweis fuer Calendly vorhanden

Muss vor Go-live:

- Calendly-Embed auf der Kontaktseite final technisch und rechtlich freigeben
- Terminbuchung auf Kontaktseite sichtbar anbieten
- Terminbuchung an geeigneter Stelle als CTA auf der Startseite oder im Footer
  erwaegen
- Fallback anbieten, falls Embed blockiert wird: normaler Link zu Calendly
- mobile Darstellung testen
- Datenschutztext aktualisieren
- Consent-Verhalten klaeren, falls Calendly eingebettet wird
- Tracking von Terminbuchungs-Klicks nur nach Datenschutzfreigabe
- Ziel-Account und Event-Typ von Calendly final bestaetigen

Empfehlung:

- Aktueller Umsetzungsstand: Calendly wird als iframe nur auf der Kontaktseite
  eingebunden.
- Ein direkter Calendly-Link bleibt als Fallback sichtbar.
- Vor Go-live muss das Consent- und Datenschutzverhalten fuer den Embed final
  freigegeben werden.
- Kein Calendly-Script global auf jeder Seite laden, wenn es nur auf Kontakt
  gebraucht wird.

### 5.4 Kontaktformular und Spam-Schutz

Die alte Website nutzt Contact Form 7 und reCAPTCHA.

Vor Go-live entscheiden:

- Wird ein Formular weiterhin gebraucht?
- Oder reichen Mail-Link, Telefon und Calendly?
- Wenn Formular: wohin werden Anfragen gesendet?
- Welche Pflichtfelder?
- Welcher Spam-Schutz?
- Wird ein externer Form-Service genutzt oder eine eigene API-Route?
- Welche Datenschutzhinweise sind erforderlich?

Vorgemerkte Zielumsetzung (18. August 2026):

- Das sichtbare Kontaktformular soll perspektivisch nicht mehr per `mailto:`
  das lokale E-Mail-Programm öffnen, sondern im Browser an eine serverseitige
  Next.js-Route senden.
- Empfohlener Versandweg ist die Resend-E-Mail-API. Zieladresse bleibt
  `info@reltest-solutions.com`; die vom Besucher angegebene Adresse wird als
  `Reply-To` gesetzt.
- Der Versand erfolgt ausschließlich serverseitig. API-Schlüssel und
  Empfängeradresse werden als geschützte Umgebungsvariablen in Vercel
  hinterlegt und niemals an den Browser ausgeliefert oder in Git gespeichert.
- Für den Absender wird vorzugsweise eine eigene Versand-Subdomain mit SPF und
  DKIM verifiziert, damit die bestehende Microsoft-365-Mailkonfiguration der
  Hauptdomain nicht unnötig verändert wird.
- Als Spam-Schutz ist Cloudflare Turnstile vorgesehen; Honeypot, serverseitige
  Feldvalidierung, Größenlimits und eine begrenzte Anfragefrequenz bleiben
  zusätzlich erforderlich.
- Das Formular benötigt Lade-, Erfolgs- und Fehlerzustände sowie einen
  weiterhin sichtbaren E-Mail-Fallback.
- Vor Aktivierung sind Auftragsverarbeitung, Datenflüsse und Datenschutzhinweise
  für Hosting, Resend und Turnstile zu prüfen und zu dokumentieren.
- Bis API-Schlüssel, DNS-Freigabe und Datenschutzentscheidung vorliegen, bleibt
  der bestehende `mailto:`-Versand als vorläufige, funktionsfähige Lösung aktiv.

Migrationsrisiko:

Ein Formular ist ein Lead-Kanal. Wenn es wegfaellt, muss der alternative
Kontaktweg mindestens gleich sichtbar und verlässlich sein.

### 5.5 Cookie Consent, Datenschutz und Tracking

Die alte Website nutzt Borlabs Cookie, Matomo, Google Tag Manager und
Drittanbieter-Einbindungen.

Muss vor Go-live:

- entscheiden, welche Tracking-Dienste wirklich gebraucht werden
- entscheiden, ob Matomo, Google Analytics/GTM oder keine Analytics genutzt
  werden
- Consent-Loesung fuer Next.js festlegen
- Datenschutzseite neu aufbauen
- Impressum neu aufbauen
- Calendly, Videos, Analytics, externe Fonts und sonstige Drittanbieter
  dokumentieren
- keine Tracking-Skripte vor Consent laden, wenn Einwilligung erforderlich ist
- Cookie-Banner auf Desktop und Mobil testen

Empfehlung:

- so wenig Drittanbieter-JavaScript wie moeglich
- Analytics bewusst und schlank einbinden
- Videos und Calendly nicht global laden
- Datenschutz und Consent vor Go-live juristisch oder intern freigeben lassen

### 5.6 Mehrsprachigkeit

Muss vor Go-live:

- finale deutsche und englische URL-Struktur definieren
- Sprachumschaltung auf jeder Seite testen
- `hreflang` fuer DE/EN einrichten
- Canonicals je Sprachversion setzen
- keine automatische Sprachweiterleitung, die Crawling verwirrt
- Inhalte nicht halb uebersetzen
- englische Alt-Texte und Metadaten pflegen

Wichtig:

Wenn eine alte englische URL einen passenden Inhalt hatte, sollte die neue
Website nicht nur auf die deutsche Seite weiterleiten.

### 5.7 Medien, Bilder, Logos und Downloads

Muss vor Go-live:

- alle genutzten Bilder in `public/` strukturiert ablegen
- Dateinamen sprechend waehlen
- Alt-Texte fuer inhaltliche Bilder pflegen
- dekorative Bilder mit leerem Alt-Text kennzeichnen
- Bildgroessen optimieren
- Referenzlogos uebernehmen
- RelTest-Solutions- und RelTest-Education-Logo korrekt einsetzen
- Buchcover lokal und sauber verwenden
- Podcast-/Personenbild rechtlich klaeren
- alte Downloads und PDFs bewerten

Besonderer Punkt:

Die aktuelle `robots.txt` sperrt PDFs. Vor der neuen Website muss entschieden
werden, ob alte PDFs indexierbar sein sollen, ersetzt werden oder bewusst
gesperrt bleiben.

### 5.8 Externe Inhalte und Vertrauenssignale

Behalten oder sauber neu einbinden:

- Springer-Fachbuch
- Podcast mit Kevin Lucan
- RelTest Education
- Referenzkunden
- reale Mitarbeiterbilder
- ggf. Uni-Stuttgart-/Fachbezug
- LinkedIn/Xing-Profile, falls aktuell und gewuenscht

Diese Elemente sind nicht nur Dekoration. Sie sind Vertrauenssignale fuer
B2B-Kunden, technische Entscheider und Geschaeftsfuehrer.

### 5.9 Hosting, Domain, DNS und E-Mail

Die Domain existiert bereits. Beim Relaunch muss nicht zwingend eine neue Domain
gekauft werden, aber Hosting und DNS muessen sauber geplant werden.

Muss vor Go-live:

- Hosting-Anbieter final waehlen
- Produktionsumgebung einrichten
- Preview-/Staging-Umgebung einrichten
- Domainaufschaltung planen
- DNS-Zugriff klaeren
- TTL vor Go-live reduzieren
- SSL-Zertifikat sicherstellen
- E-Mail-DNS nicht beschaedigen
- Microsoft-365-/Mail-Eintraege schuetzen
- Redirects auf Hosting-Ebene oder in Next.js definieren
- Umgebungsvariablen dokumentieren
- Backup- und Rollback-Plan festlegen

Wichtig:

Beim DNS-Wechsel duerfen MX-, SPF-, DKIM- und DMARC-Eintraege nicht versehentlich
geloescht oder ueberschrieben werden.

## 6. Phasenplan

### Phase 0: Freigaben und Zugaenge klaeren

Ziel: sicherstellen, dass Umsetzung und Go-live nicht an fehlenden Zugaengen
scheitern.

Aufgaben:

- Domain-/DNS-Zugang klaeren
- aktueller Hosting-Zugang klaeren
- WordPress-Admin-Zugang klaeren
- Google Search Console Zugang klaeren
- Analytics-/Matomo-/GTM-Zugang klaeren
- Calendly-Zugang oder mindestens finalen Buchungslink klaeren
- E-Mail-/Microsoft-365-DNS-Schutz klaeren
- Verantwortliche fuer Datenschutz und Freigabe benennen

### Phase 1: Vollstaendige Bestandsaufnahme

Ziel: alte Website vollstaendig erfassen.

Aufgaben:

- alle 83 Sitemap-URLs in die Migrationsmatrix uebernehmen
- weitere URLs aus Search Console exportieren
- weitere URLs aus Analytics exportieren
- Backlinks pruefen
- alte PDFs, Downloads und Bilder erfassen
- alte Formulare und Conversion-Ziele erfassen
- alte Tracking- und Consent-Konfiguration dokumentieren
- alte Top-Seiten nach Klicks/Impressionen markieren

### Phase 2: Zielstruktur und URL-Mapping

Ziel: jede alte URL bekommt eine neue Entscheidung.

Aufgaben:

- finale Navigationsstruktur festlegen
- Wissensbereich-Struktur finalisieren
- Leistungsseiten-Struktur finalisieren
- deutsche und englische Seitenpaare definieren
- URL-Migrationsmatrix fuellen
- Redirect-Regeln ableiten
- Seiten priorisieren: P0, P1, P2
- Inhalte zusammenfuehren, wo es SEO- und UX-seitig sinnvoll ist

### Phase 3: Neue Website vervollstaendigen

Ziel: alle P0-Funktionen und P0-Inhalte sind in Next.js umgesetzt.

Aufgaben:

- fehlende Pflichtseiten bauen: Impressum, Datenschutz
- Kontaktseite finalisieren
- Calendly-CTA oder Embed einbauen
- Formularentscheidung umsetzen
- Consent-Loesung einbauen, falls erforderlich
- Tracking-Konzept umsetzen
- Metadaten je Seite pflegen
- Sitemap/robots aufbauen
- `hreflang`/Canonicals implementieren
- strukturierte Daten pruefen und einbauen, wo sinnvoll
- Bildoptimierung und Alt-Texte finalisieren

### Phase 4: Staging, QA und SEO-Review

Ziel: vor Go-live Fehler finden, nicht danach.

Aufgaben:

- Staging-Domain oder Preview bereitstellen
- `npm run build` erfolgreich ausfuehren
- zentrale Seiten manuell testen
- Mobile-Ansichten testen
- Sprachwechsel testen
- Dropdowns und Navigation testen
- Kontaktwege testen
- Calendly testen
- Consent-Verhalten testen
- Lighthouse/PageSpeed pruefen
- Staging mit Screaming Frog oder vergleichbarem Tool crawlen
- alte URL-Liste gegen Redirects testen
- 404, Redirect-Ketten und falsche Sprache pruefen

### Phase 5: Go-live

Ziel: kontrollierter Wechsel ohne SEO- oder Kontaktverlust.

Aufgaben:

- finaler Build
- Produktion deployen
- DNS/Domain umschalten
- SSL pruefen
- Redirects aktivieren
- `robots.txt` pruefen
- Sitemap pruefen
- keine Staging- oder `noindex`-Reste auf Produktion
- wichtigste alte URLs manuell testen
- Kontakt und Calendly live testen
- Search Console Sitemap einreichen

### Phase 6: Nachkontrolle

Ziel: SEO-Verlust frueh erkennen und gegensteuern.

Erste 48 Stunden:

- Live-Seite crawlen
- 404-Fehler pruefen
- Redirects pruefen
- Search Console Abdeckung beobachten
- Kontaktanfragen und Calendly testen
- Analytics/Tracking pruefen

Erste 2 Wochen:

- Search Console Crawling-Fehler pruefen
- Indexierung zentraler Seiten pruefen
- Ranking-/Impressionsveraenderungen beobachten
- Weiterleitungen nachschaerfen
- Performance pruefen

Erste 8 bis 12 Wochen:

- Klicks und Impressionen gegen Vorperiode vergleichen
- Top-Keywords beobachten
- organische Landingpages vergleichen
- neue Wissensseiten gezielt ausbauen
- interne Verlinkung verbessern
- Content-Luecken nachziehen

## 7. Priorisierte Aufgabenliste

### P0: Muss vor Go-live erledigt sein

| Aufgabe | Ergebnis |
| --- | --- |
| URL-Migrationsmatrix fuellen | jede alte wichtige URL hat eine Zielentscheidung |
| Redirects definieren und testen | keine wichtigen alten URLs laufen in 404 |
| Kontaktseite finalisieren | Besucher koennen sicher Kontakt aufnehmen |
| Calendly erhalten | `https://calendly.com/kevin-lucan` bleibt erreichbar |
| Impressum und Datenschutz bauen | rechtliche Pflichtseiten vorhanden |
| Consent-Konzept klaeren | Drittanbieter werden rechts- und nutzerfreundlich geladen |
| Sitemap und robots erstellen | Suchmaschinen koennen die neue Seite verstehen |
| Canonicals und hreflang pruefen | Mehrsprachigkeit ist SEO-sauber |
| Metadaten je Kernseite pflegen | Title und Description sind eindeutig |
| Mobile QA | keine abgeschnittenen oder ueberlappenden Bereiche |
| Performance-Basispruefung | keine groben Bild- oder Skriptprobleme |
| DNS/Mail-Schutz | Domainwechsel beschaedigt keine E-Mail-Infrastruktur |
| Rollback-Plan | bei Go-live-Problemen gibt es einen Rueckweg |

### P1: Sollte vor Go-live erledigt sein

| Aufgabe | Ergebnis |
| --- | --- |
| Wissensbereich-Grundseiten anlegen | alte Fachthemen verlieren keine Relevanz |
| Brancheninhalte bewerten | alte Branchen-URLs bekommen passende Ziele |
| News/Webinare bewerten | relevante Artikel bleiben erhalten oder werden weitergeleitet |
| Team-/Personenseiten bewerten | Vertrauen und Personenbezug bleiben erhalten |
| Strukturierte Daten pruefen | Organisation, Breadcrumbs, ggf. Article/Book sinnvoll abbilden |
| Referenzlogos und Trust-Elemente pruefen | B2B-Vertrauen bleibt sichtbar |
| Formularersatz testen | Lead-Prozess ist robust |

### P2: Kann nach Go-live nachgezogen werden

| Aufgabe | Ergebnis |
| --- | --- |
| Glossar ausbauen | langfristiger SEO-Wissensbereich |
| weitere Fachartikel erstellen | bessere organische Reichweite |
| detaillierte Branchenlandingpages | gezieltere B2B-Suchintentionen |
| Case Studies oder Projektbeispiele | staerkere Conversion |
| automatisierte Screenshot-Tests | bessere langfristige QA |

## 8. Konkrete URL-Mapping-Regeln

### 8.1 Deutsch

| Alte URL-Gruppe | Neue Zielrichtung |
| --- | --- |
| `/` | deutsche Startseite oder stabiler Redirect auf `/de` |
| `/kontakt/` | neue Kontaktseite |
| `/referenzen/` | neue Referenzseite |
| `/impressum/` | neues Impressum |
| `/datenschutz/` | neue Datenschutzerklaerung |
| `/buch-fuer-zuverlaessigkeit-im-fahrzeug-und-maschinenbau/` | Literaturseite oder eigene Buchdetailseite |
| `/zuverlaessigkeitstechnik/planung/` | Wissensseite Planung oder Leistungsseite |
| `/zuverlaessigkeitstechnik/schwachstellenanalyse/` | Wissensseite Schwachstellenanalyse |
| `/zuverlaessigkeitstechnik/absicherung/` | Wissensseite Absicherung oder Leistung |
| `/zuverlaessigkeitstechnik/erprobung/` | Wissensseite Erprobung oder Leistung |
| `/zuverlaessigkeitstechnik/prognosen/` | Wissensseite Prognosen |
| `/zuverlaessigkeitsmanagement/consulting/` | Leistungen/Beratung |
| `/zuverlaessigkeitsmanagement/coaching/` | Leistungen oder Weiterbildung |
| `/zuverlaessigkeitsmanagement/training/` | Weiterbildung |
| `/zuverlaessigkeitsmanagement/seminare/` | Weiterbildung/Seminare |
| `/design-of-experiments/...` | DoE-Leistungs- oder Wissensbereich |
| `/branchen/...` | neue Branchenstruktur oder passende Leistungsseite |
| `/ueber-uns/...` | Ueber-uns/Team/Vertrauensseite oder passende Zielseite |
| `/karriere/...` | Karrierebereich, Redirect oder bewusste Entfernung |
| `/membership-login/` | Zweck klaeren, vermutlich nicht indexieren |

### 8.2 Englisch

| Alte URL-Gruppe | Neue Zielrichtung |
| --- | --- |
| `/en/` | englische Startseite |
| `/en/contact/` | englische Kontaktseite |
| `/en/credentials/` | englische Referenzseite |
| `/en/reliability-engineering/...` | englischer Wissens-/Leistungsbereich |
| `/en/reliability-management/...` | englischer Leistungs-/Weiterbildungsbereich |
| `/en/industries/...` | englische Branchenstruktur oder passende Zielseite |
| `/en/about-us/...` | englische Ueber-uns-/Team-Zielseite |

## 9. No-Go-Kriterien vor Go-live

Nicht live gehen, wenn:

- Kontakt oder Calendly nicht funktioniert
- Impressum oder Datenschutz fehlen
- alte P0-URLs in 404 laufen
- Root- und Sprachrouting unklar sind
- `robots.txt` die Website blockiert
- Produktionsseite versehentlich `noindex` hat
- Sitemap fehlt oder falsche URLs enthaelt
- `hreflang` auf falsche oder nicht existente Seiten zeigt
- mobile Startseite sichtbar kaputt ist
- DNS-Umstellung E-Mail-Eintraege gefaehrdet
- kein Rollback-Weg existiert

## 10. Offene Klaerpunkte

Diese Punkte muessen vor der finalen Umsetzung entschieden werden:

- Soll `/` die deutsche Startseite bleiben oder auf `/de` weiterleiten?
- Soll Calendly eingebettet werden oder als externer CTA-Link starten?
- Wird ein Kontaktformular benoetigt?
- Welcher Analytics-Stack soll genutzt werden: Matomo, GTM/GA oder schlanker
  eigener Ansatz?
- Welche Consent-Loesung wird genutzt?
- Sollen alte News/Webinare erhalten bleiben?
- Werden Branchenunterseiten wieder aufgebaut?
- Wird ein Karrierebereich benoetigt?
- Was passiert mit `membership-login/`?
- Sollen PDFs weiterhin blockiert werden?
- Wer prueft Datenschutz/Impressum final?
- Wer hat Search Console, DNS, Hosting, Calendly und Analytics-Zugriff?

## 11. Empfohlenes Arbeitsdokumente-Set

| Dokument | Zweck |
| --- | --- |
| `docs/seo/url-migrationsmatrix.md` | konkrete URL-Entscheidungen und Redirects |
| `docs/seo/seo-codex-leitfaden.md` | SEO-Regeln fuer Codex und Umsetzung |
| `docs/seo/seo-audit-und-aufgaben.md` | bisherige SEO-Befunde und Aufgaben |
| `docs/project/qa-review-und-migration.md` | QA-, Mobile-, Performance- und Review-Prozess |
| `docs/content/content-und-seitenregeln.md` | Inhaltsqualitaet und Seitenlogik |
| `docs/vision/reltest-website-vision.md` | Marken-, Zielgruppen- und Designrichtung |

## 12. Quellen

- Live-Website: `https://reltest-solutions.com/`
- Sitemap-Index: `https://reltest-solutions.com/sitemap_index.xml`
- Page-Sitemap: `https://reltest-solutions.com/page-sitemap.xml`
- Robots: `https://reltest-solutions.com/robots.txt`
- Calendly-Ziel der aktuellen Kontaktseite: `https://calendly.com/kevin-lucan`
- Google Search Central: Websiteverschiebung mit URL-Aenderungen
- Google Search Central: Weiterleitungen und die Google Suche
- Google Search Central: lokalisierte Versionen mehrsprachiger Seiten
