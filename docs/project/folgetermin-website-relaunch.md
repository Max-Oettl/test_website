# Folgetermin: Vorgehen für den RelTest-Website-Relaunch

Stand: 10. Juni 2026

Hinweis:

Für den nächsten Abstimmungstermin mit der Geschäftsführung gibt es eine
kompaktere Gesprächsversion:

- `docs/project/folgetermin-kurzfahrplan.md`

Dieses Dokument bleibt die ausführliche Arbeits- und Nachschlageversion.

## 1. Zweck des Dokuments

Dieses Dokument ist die inhaltliche Grundlage für den Folgetermin nach der
grundsätzlichen Freigabe des Website-Relaunchs.

Es beantwortet in dieser Reihenfolge:

1. Wie wird das Projekt strukturiert durchgeführt?
2. Welche Personen, Zugänge, Entscheidungen und Buchungen werden benötigt?
3. Wo liegen die wichtigsten Projektrisiken?
4. Wie wird verhindert, dass beim Relaunch SEO-Sichtbarkeit verloren geht?
5. Wie kann die neue Website die bestehende SEO-Leistung gezielt verbessern?

Die neue Website ist bereits als funktionsfähiger Next.js-Prototyp vorhanden.
Sie ist aber noch nicht produktions- und migrationsbereit. Vor dem Go-live
müssen insbesondere Inhalte, URL-Migration, technische SEO, Rechtsthemen,
Hosting, Monitoring und Abnahme vollständig geklärt werden.

---

# Teil A: Vorgehen, Verantwortlichkeiten und Infrastruktur

## 2. Empfohlene Kernbotschaft im Termin

> Wir ersetzen die bestehende Website nicht in einem einzelnen technischen
> Schritt. Wir führen einen kontrollierten Relaunch mit Inhaltsinventur,
> Abnahme, SEO-Migration, Testbetrieb und anschließendem Monitoring durch.
> Die Domain und der E-Mail-Betrieb bleiben bestehen. Erst wenn alle
> Go-live-Kriterien erfüllt sind, wird die neue Anwendung produktiv geschaltet.

Der Relaunch ist damit kein reines Designprojekt. Er besteht aus vier
gleichwertigen Bereichen:

- Markenauftritt und Nutzerführung
- Inhalte und fachliche Freigabe
- technische Plattform und Betrieb
- SEO-Migration und anschließender Ausbau

### Geplanter technischer Stack

Die neue Website ist als selbst gebaute Webanwendung geplant, nicht als
WordPress-Relaunch.

Aktueller technischer Stand:

| Baustein | Einsatz |
| --- | --- |
| Next.js | Framework für Routing, Seitenaufbau, Build und Auslieferung |
| React | Komponenten und interaktive Bereiche |
| TypeScript | typsichere und wartbare Entwicklung |
| Tailwind CSS | Styling und responsive Gestaltung |
| Git/GitHub | Versionsverwaltung, Zusammenarbeit und Deployment-Basis |

Konsequenz:

Klassisches WordPress-Webhosting reicht nicht automatisch aus. Die Website
braucht ein Hosting, das Next.js bauen, ausliefern und im Idealfall mit
Preview-Deployments, Redirects, HTTPS, CDN und Rollback betreiben kann.

## 3. Empfohlenes Projektmodell

### Phase 0: Projektauftrag und Entscheidungsrahmen

Ziel:

- Umfang und Verantwortlichkeiten verbindlich festlegen
- Budgetrahmen für Hosting und optionale Dienste freigeben
- Ansprechpartner und Freigabeprozess bestimmen

Benötigte Entscheidungen:

- Wer gibt Design, Texte, technische Umsetzung und Go-live final frei?
- Wer liefert und prüft fachliche Inhalte?
- Soll die Website weiterhin hauptsächlich über Code gepflegt werden?
- Welche Funktionen der alten Website müssen übernommen werden?
- Welcher Hosting-Weg wird gewählt?

Ergebnis:

- schriftlich bestätigter Projektumfang
- Rollen- und Freigabematrix
- Liste benötigter Zugänge
- vereinbarter Zielkorridor für den Go-live

### Phase 1: Bestandsaufnahme und Übergabe der Alt-Website

Ziel:

- alle bestehenden Inhalte, Funktionen, URLs und externen Abhängigkeiten
  erfassen
- SEO- und Betriebsdaten sichern

Zu inventarisieren:

- alle bestehenden Seiten, Beiträge, PDFs, Bilder und Downloads
- deutsche und englische Inhalte
- Kontaktformulare und Formularziele
- Mitglieder- oder Login-Funktion
- Karriere- und Stellenanzeigen
- Seminar- und Veranstaltungsseiten
- Analytics, Tag Manager und Cookie-Consent
- bestehende Weiterleitungen
- Domain-, DNS-, Hosting- und E-Mail-Konfiguration
- Search Console, Analytics und mögliche Backlink-Daten

Ergebnis:

- vollständige URL- und Inhaltsliste
- Funktionsinventar
- Zugangsmatrix
- erste Redirect-Matrix
- Liste offener Entscheidungen

### Phase 2: Informationsarchitektur und Inhaltsplan

Ziel:

- festlegen, welche Themen eigene Seiten erhalten
- bestehende SEO-relevante Inhalte sinnvoll in die neue Struktur überführen

Für jede alte URL wird eine Entscheidung getroffen:

- unverändert beibehalten
- inhaltlich überarbeiten
- mit einer anderen Seite zusammenführen
- auf eine fachlich passende neue Seite weiterleiten
- bewusst entfernen und gegebenenfalls mit `410 Gone` beantworten

Wichtig:

Die alte Website besitzt 83 öffentlich gelistete URLs. Der aktuelle Prototyp
besitzt dagegen nur etwa 18 sprachabhängige Hauptseiten. Diese starke
Verdichtung darf nicht automatisch zum Verlust der fachlichen Tiefe führen.

Besonders zu entscheiden sind:

- eigene Seiten für zentrale Leistungen
- Branchen-Unterseiten
- Team- und Personenprofile
- einzelne Seminarseiten
- Wissens- und Glossarinhalte
- News, Webinare und Kooperationen
- Karriere- und Stelleninhalte
- Mitglieder-Login

Ergebnis:

- finale Sitemap der neuen Website
- Content-Matrix Deutsch/Englisch
- Suchintention pro wichtiger Seite
- vollständige URL-Zuordnung Alt zu Neu

### Phase 3: Umsetzung und Inhaltsmigration

Ziel:

- freigegebene Struktur und Inhalte im Next.js-System umsetzen

Arbeitspakete:

- Seiten und Komponenten fertigstellen
- deutsche und englische Texte pflegen
- Bilder technisch optimieren
- Metadaten und strukturierte Daten ergänzen
- Rechtstexte einbauen
- Formulare und externe Dienste integrieren
- Redirects technisch vorbereiten
- Sitemap, `robots.txt`, Canonicals und `hreflang` umsetzen

Ergebnis:

- vollständige Website auf einer nicht indexierbaren Vorschau-Umgebung
- keine offenen Platzhalter auf produktionsrelevanten Seiten

### Phase 4: Qualitätssicherung und Abnahme

Ziel:

- fachliche, technische, rechtliche und visuelle Qualität vor dem Go-live
  nachweisen

Prüfbereiche:

- Desktop, Tablet und Smartphone
- Deutsch und Englisch
- Links, Navigation und Sprachwechsel
- Formulare und E-Mail-Zustellung
- Browser-Kompatibilität
- Barrierefreiheitsgrundlagen
- Performance und Core Web Vitals
- Metadaten, Canonicals, `hreflang`, Sitemap und `robots.txt`
- Redirect-Matrix und Statuscodes
- Impressum, Datenschutz und Consent
- Bild-, Logo- und Nutzungsrechte

Empfohlene Abnahmen:

- fachliche Abnahme durch die zuständigen Experten
- geschäftliche Freigabe durch die Geschäftsführung
- technische Abnahme
- SEO-Abnahme vor dem DNS-Wechsel
- rechtliche Prüfung der Datenschutz- und Consent-Konfiguration

### Phase 5: Kontrollierter Go-live

Ziel:

- neue Website mit möglichst geringem Betriebs- und SEO-Risiko aktivieren

Ablauf:

1. finales Backup der WordPress-Website erstellen
2. DNS-Zone und bestehende DNS-Einträge sichern
3. Produktions-Build und Redirects aktivieren
4. Domain mit dem neuen Hosting verbinden
5. HTTPS, Hauptdomain und Weiterleitungen prüfen
6. technische Smoke-Tests durchführen
7. neue Sitemap in der Search Console einreichen
8. wichtige Seiten mit URL-Prüfung kontrollieren
9. 404-, 5xx- und Formular-Monitoring aktiv beobachten

Wichtig:

Das alte Hosting darf nicht am selben Tag gekündigt werden. Es bleibt zunächst
als Backup und Datenquelle bestehen, bis der neue Betrieb und alle
Weiterleitungen nachweislich stabil sind.

### Phase 6: Stabilisierungs- und Verbesserungsphase

Ziel:

- technische Fehler früh erkennen
- SEO-Signale stabilisieren
- erste Optimierungen datenbasiert durchführen

Zeitraum:

- intensive Kontrolle in den ersten 14 Tagen
- wöchentliche Kontrolle in den ersten 8 bis 12 Wochen
- anschließend reguläres monatliches Monitoring

Zu überwachen:

- Indexierung
- Impressionen und Klicks
- Rankings wichtiger Suchanfragen
- 404- und 5xx-Fehler
- Weiterleitungen
- Core Web Vitals
- Kontaktanfragen und andere Conversions

### Grober Zeitkorridor

Bei zeitnah verfügbaren Zugängen, klaren Entscheidungen und verlässlichen
fachlichen Freigaben ist für die produktionsreife Migration ein Korridor von
etwa 8 bis 12 Kalenderwochen realistisch.

Orientierung:

| Zeitraum | Schwerpunkt |
| --- | --- |
| Woche 1 | Projektauftrag, Zugänge, Backups und Hostingentscheidung |
| Woche 2 bis 3 | URL-Inventur, Zielstruktur und Content-Matrix |
| Woche 3 bis 8 | Inhalte, technische Umsetzung und SEO-Migration |
| Woche 8 bis 10 | Qualitätssicherung, fachliche Abnahme und Korrekturen |
| Woche 10 bis 12 | Go-live-Vorbereitung, Umschaltung und Stabilisierung |

Der tatsächliche Termin hängt weniger vom vorhandenen Prototyp als von
Inhaltsumfang, Übersetzungen, Zugängen und Freigabegeschwindigkeit ab. Ein
verbindlicher Go-live-Termin sollte deshalb erst nach Phase 1 festgelegt werden.

## 4. Rollen und Verantwortlichkeiten

| Rolle | Empfohlene Verantwortung |
| --- | --- |
| Geschäftsführung | Projektauftrag, Budget, finale Freigabe, Priorisierung |
| Projektkoordination | Gesamtplanung, Abstimmung, Aufgabensteuerung, Abnahmevorbereitung |
| Technische Umsetzung | Next.js, Hosting, Deployment, Redirects, technische QA |
| Fachverantwortliche | Prüfung von Leistungen, Methoden, Fachbegriffen und Aussagen |
| Content-Verantwortliche | Texte, Übersetzungen, Bilder, Referenzen und Freigabestatus |
| Datenschutz/Recht | Impressum, Datenschutz, Cookies, Formulare und Auftragsverarbeitung |
| Bestehender Dienstleister | Übergabe von Zugängen, Daten, Backups, Redirects und Altsystemwissen |
| Optionaler SEO-Reviewer | unabhängige Prüfung der Migration vor dem Go-live |

### Empfohlene Arbeitsweise

- eine zentrale Aufgabenliste mit Verantwortlichem und Termin
- eine feste fachliche Freigaberunde pro Woche oder alle zwei Wochen
- klare Kennzeichnung: Entwurf, in Prüfung, freigegeben
- Entscheidungen schriftlich dokumentieren
- Änderungen an URLs nur nach Prüfung der SEO-Auswirkungen

## 5. Was von RelTest benötigt wird

### Zugänge

- Domain- und DNS-Verwaltung
- bestehendes Webhosting
- WordPress-Administratorzugang
- Google Search Console
- Google Analytics, Matomo und/oder Google Tag Manager
- Cookie-Consent-System
- E-Mail- beziehungsweise Microsoft-365-Verwaltung nur bei Bedarf
- Unternehmensprofile, beispielsweise LinkedIn
- gegebenenfalls Bing Webmaster Tools

### Daten und Unterlagen

- aktueller WordPress-Export und vollständiges Backup
- Medienbibliothek in Originalqualität
- bestehende Redirect-Regeln
- Search-Console-Daten der letzten 16 Monate
- Analytics-Daten und definierte Conversions
- Liste relevanter PDFs und Downloads
- aktuelle Unternehmens- und Kontaktdaten
- freigegebene Logos, Kundenlogos und Bildrechte
- bestehende Datenschutz- und AV-Verträge

### Inhaltliche Entscheidungen

- welche Leistungsdetailseiten werden benötigt?
- welche alten News- und Webinarinhalte bleiben erhalten?
- werden Branchen-Unterseiten weitergeführt?
- werden Teamprofile veröffentlicht?
- bleibt der Mitglieder-Login bestehen?
- werden Stellenanzeigen und Karrierebereich übernommen?
- wie häufig sollen Inhalte nach dem Relaunch aktualisiert werden?

## 6. Aktuell erkennbare Infrastruktur

Die folgenden Angaben wurden am 10. Juni 2026 über öffentliche DNS- und
Website-Signale ermittelt:

- die Domain verwendet `ui-dns`-Nameserver
- die Website zeigt aktuell auf die IP-Adresse `217.160.0.83`
- der bestehende Webserver liefert über Apache aus
- der E-Mail-Empfang läuft separat über Microsoft 365

Die Nameserver und IP-Adresse sprechen für eine aktuelle IONOS-Infrastruktur.
Das ist eine technische Schlussfolgerung aus öffentlichen Daten und muss durch
die vorhandenen Vertragsunterlagen bestätigt werden.

Konsequenz für den Relaunch:

- die Domain muss nicht neu gekauft werden
- E-Mail muss nicht umgezogen werden
- beim Go-live dürfen nur die notwendigen Web-DNS-Einträge geändert werden
- MX-, SPF-, DKIM- und DMARC-Einträge müssen unverändert erhalten bleiben
- vor jeder DNS-Änderung wird die vollständige Zone exportiert oder dokumentiert

## 7. Was voraussichtlich neu gebucht oder eingerichtet werden muss

### Pflicht beziehungsweise sehr wahrscheinlich

| Baustein | Empfehlung | Bemerkung |
| --- | --- | --- |
| Produktionshosting | Vercel Pro oder vergleichbares Node.js-Hosting | Vercel ist für Next.js der einfachste Betriebsweg |
| Unternehmens-Repository | private GitHub-Organisation oder Firmen-Repository | Quellcode und Zugriffsrechte gehören dem Unternehmen |
| Deployment-Prozess | automatische Vorschau- und Produktionsdeployments | reduziert manuelle Fehler |
| Monitoring | Uptime-, Fehler- und Formularüberwachung | nicht erst nach einem Ausfall einrichten |
| Search Console | bestehende Property weiterverwenden und prüfen | kein kostenpflichtiges Produkt |
| Backup | WordPress-Abschlussbackup plus Repository- und Asset-Sicherung | vor Kündigung des Althostings |

Vercel weist den Pro-Tarif aktuell mit 20 US-Dollar pro Monat zuzüglich
verbrauchsabhängiger Nutzung aus. Preise und Vertragsbedingungen müssen vor
der Buchung nochmals geprüft werden. Der kostenlose Hobby-Tarif ist für eine
geschäftliche Produktionswebsite nicht die empfohlene Grundlage.

### Abhängig vom gewünschten Funktionsumfang

| Baustein | Wann benötigt? |
| --- | --- |
| Formular-/E-Mail-Dienst | wenn ein echtes Kontaktformular statt reiner E-Mail-Links verwendet wird |
| Spam-Schutz | bei öffentlich erreichbaren Formularen |
| Analytics | wenn Besucher- und Conversiondaten erfasst werden sollen |
| Consent-Management | sobald zustimmungspflichtige Dienste eingesetzt werden |
| Headless CMS | wenn Nicht-Entwickler regelmäßig Seiten selbst bearbeiten sollen |
| Error Tracking | wenn Laufzeitfehler zentral gemeldet werden sollen |
| Externes SEO-Tool | optional für Rankings, Backlinks und Wettbewerbsanalysen |

### Nicht automatisch neu buchen

- Domain
- Microsoft-365-E-Mail
- neues SSL-Zertifikat bei Vercel, da HTTPS dort automatisch bereitgestellt wird
- separates klassisches WordPress-Hosting
- ein CMS, wenn die Pflege bewusst über das Repository erfolgt

### Was beim Hosting enthalten sein sollte

Für diese Website bedeutet Hosting mehr als Webspace.

Benötigt oder stark empfehlenswert sind:

| Bestandteil | Bedeutung |
| --- | --- |
| Build-System | erstellt aus dem Code die produktive Website |
| Deployment | spielt neue Versionen kontrolliert live |
| Preview-Links | ermöglichen internes Feedback vor Veröffentlichung |
| CDN | liefert Seiten, Bilder, CSS und JavaScript schnell aus |
| HTTPS/SSL | stellt verschlüsselte Auslieferung bereit |
| Domain-Anbindung | verbindet `reltest-solutions.com` mit der neuen Website |
| Redirects | leitet alte WordPress-URLs SEO-schonend weiter |
| Logs | hilft bei Fehlersuche nach Deployments |
| Rollback | ermöglicht Rückkehr zu einer älteren Version |
| Monitoring | überwacht Erreichbarkeit, Fehler und Performance |

### Geeignete Anbieter und grobe Kosten

Stand: 15. Juni 2026. Preise sollten vor Buchung nochmals geprüft werden.

| Anbieter | Grobe Kosten | Einschätzung |
| --- | --- | --- |
| Vercel | Pro ab ca. 20 USD/Monat plus nutzungsabhängige Kosten | beste Passung für Next.js und geringster Betriebsaufwand |
| Netlify | Pro ca. 20 USD/Monat | gute Alternative mit Git-Deployments und Previews |
| Cloudflare Pages | Free möglich, Pro ca. 20 USD/Monat jährlich oder 25 USD/Monat monatlich | starkes CDN und attraktive Kosten, Next.js-Funktionen vorher genau testen |
| Azure Static Web Apps | Free und Standard, Preis über Azure-Kalkulator prüfen | sinnvoll, wenn Microsoft/Azure strategisch gewünscht ist |
| klassischer Webhoster oder VPS | stark abhängig vom Anbieter | nur sinnvoll, wenn Betrieb, Updates, Node.js und Deployments aktiv betreut werden |

Zusätzliche Kostenblöcke:

| Kostenblock | Grobe Erwartung |
| --- | --- |
| GitHub Repository | Free möglich, Team bei Bedarf ca. 4 USD pro Nutzer/Monat |
| Domain | bestehend, keine neue Domain nötig |
| E-Mail | bestehend über Microsoft 365, kein Relaunch-Kostenblock |
| Monitoring | zunächst kostenlos oder günstig möglich |
| Analytics/Consent | abhängig vom gewünschten Setup |
| Kontaktformular/E-Mail-Dienst | nur nötig, wenn ein echtes Formular eingesetzt wird |

Für RelTest ist Vercel Pro der pragmatischste Startpunkt, weil das Projekt auf
Next.js basiert und intern nur begrenzte Zeit für Serverbetrieb verfügbar ist.
Der relevante Kostenrahmen liegt voraussichtlich im niedrigen zweistelligen
Monatsbereich, solange Traffic und Zusatzdienste moderat bleiben.

## 8. Empfehlung zur Hosting-Entscheidung

### Empfohlener Weg: Vercel

Vorteile:

- sehr gute Next.js-Integration
- automatische Vorschau für Änderungen
- einfache Anbindung einer bestehenden Domain
- automatisches HTTPS
- kontrollierte Deployments und schnelle Rückkehr zu einer früheren Version
- wenig eigener Serverbetrieb

Zu prüfen:

- Vertragspartner und Rechnungsadresse
- Datenschutz und Auftragsverarbeitung
- Rollen und Zugriffsrechte
- gewünschte Analytics- oder Monitoring-Funktionen
- Kosten bei zukünftig höherem Traffic

### Alternative: bestehendes oder anderes Node.js-Hosting

Das ist möglich, wenn der Anbieter die eingesetzte Next.js-Version vollständig
unterstützt oder die Anwendung containerisiert betrieben wird.

Nachteile:

- mehr Betriebsverantwortung
- höherer Aufwand für Deployments, Updates, Logs und Rollbacks
- mögliche Einschränkungen bei Next.js-Funktionen

Für ein kleines internes Projektteam ist Vercel deshalb der pragmatischere
Startpunkt. Die Anwendung bleibt grundsätzlich portierbar.

## 9. Zentrale Knackpunkte des Projekts

### 9.1 SEO- und URL-Verlust

Risiko:

- bestehende Rankings und Backlinks zeigen auf alte URLs
- neue, kompaktere Navigation ersetzt fachlich tiefe Zielseiten

Gegenmaßnahme:

- vollständige URL-Inventur
- fachlich passende Eins-zu-eins-Weiterleitungen
- Content-Parität für wertvolle Seiten
- Search-Console-Monitoring

### 9.2 Unvollständige Übergabe des bisherigen Dienstleisters

Risiko:

- fehlende Zugänge, Backups, Analytics-Daten oder DNS-Kenntnisse

Gegenmaßnahme:

- Übergabecheckliste frühzeitig versenden
- Zugang und Export vor dem Go-live testen
- Althosting nicht vorschnell kündigen

### 9.3 Unklare Inhaltsverantwortung

Risiko:

- technisch fertige Seiten warten auf Texte oder fachliche Freigabe

Gegenmaßnahme:

- pro Seite einen fachlichen Verantwortlichen benennen
- Freigabetermine und Eskalationsweg vereinbaren

### 9.4 Pflege der Website nach dem Go-live

Risiko:

- Änderungen hängen dauerhaft an einer einzelnen Person

Gegenmaßnahme:

- Firmen-Repository
- dokumentierter Deployment-Prozess
- mindestens eine zweite technisch eingewiesene Person
- Entscheidung zwischen Code-Pflege und CMS

### 9.5 Formulare, Tracking und Datenschutz

Risiko:

- Formulare funktionieren nicht zuverlässig
- zustimmungspflichtige Dienste werden ohne korrekte Einwilligung geladen

Gegenmaßnahme:

- Dienstinventar und Datenschutzprüfung
- Test der E-Mail-Zustellung
- Spam-Schutz
- Consent vor Aktivierung von Tracking und externen Medien

### 9.6 Domainwechsel gefährdet E-Mail

Risiko:

- unvollständige DNS-Änderungen unterbrechen Microsoft 365

Gegenmaßnahme:

- keine pauschale Nameserver-Umstellung ohne Notwendigkeit
- DNS-Zone sichern
- nur Web-Einträge kontrolliert ändern

### 9.7 Deutsch und Englisch laufen auseinander

Risiko:

- Seiten fehlen in einer Sprache
- Sprachumschalter, Canonicals und `hreflang` zeigen falsch

Gegenmaßnahme:

- verbindliche Sprachmatrix
- gleiche fachliche Seitentiefe
- gegenseitige `hreflang`-Prüfung

### 9.8 Verdeckte Altfunktionen werden vergessen

Die alte WordPress-Installation zeigt öffentlich unter anderem:

- Contact Form 7
- Borlabs Cookie
- Video-Einbindungen
- Google Tag Manager beziehungsweise Tracking-Hinweise
- Matomo-Hinweise
- Simple Membership
- Karriere- und Stellenbereiche

Jede dieser Funktionen benötigt eine bewusste Entscheidung. Nicht jede muss
übernommen werden, aber keine sollte unbeabsichtigt verschwinden.

### 9.9 Rechtliche und mediale Freigaben

Risiko:

- Kundenlogos, Mitarbeiterbilder oder eingebettete Medien besitzen keine
  dokumentierte Freigabe

Gegenmaßnahme:

- Rechte- und Freigabeliste
- Datenschutzhinweise für Personenbilder und externe Medien
- finale Prüfung von Impressum und Datenschutz

## 10. Entscheidungen, die im Folgetermin eingeholt werden sollten

- Freigabe des vorgeschlagenen Projekt- und Abnahmeprozesses
- Benennung eines finalen Entscheiders
- Benennung der fachlichen Inhaltsprüfer
- Freigabe eines Hosting- und Monitoringbudgets
- Freigabe zur Anforderung aller Zugänge beim bisherigen Dienstleister
- Entscheidung zu Kontaktformular, Analytics und Consent
- Entscheidung zu Mitglieder-Login, Karriere, News und Branchen-Unterseiten
- Entscheidung zur späteren Inhaltspflege: Code oder CMS
- Zustimmung zu einer eigenen SEO-Abnahme vor dem Go-live
- gewünschter, aber nicht übereilter Go-live-Zeitraum

## 11. Konkrete nächste Schritte nach dem Termin

### In den ersten fünf Arbeitstagen

- Rollen und Freigaben schriftlich bestätigen
- Zugänge beim bestehenden Dienstleister anfordern
- Search Console und Analytics sichern
- WordPress- und Medienbackup erstellen
- Hostingentscheidung treffen
- Unternehmens-Repository einrichten

### Danach

- URL- und Content-Matrix fertigstellen
- Zielstruktur verbindlich freigeben
- fehlende Inhalte priorisieren
- Funktionsumfang festlegen
- technische SEO-Arbeitspakete umsetzen
- Staging-Abnahme vorbereiten

---

# Teil B: SEO sichern und gezielt verbessern

## 12. Management-Einordnung des SEO-Risikos

Die Sorge ist berechtigt:

Eine optisch bessere Website kann nach einem Relaunch schlechter gefunden
werden, wenn URLs, Inhalte, interne Links, Sprachsignale oder technische
Indexierung unkontrolliert geändert werden.

Der Relaunch bietet gleichzeitig eine klare Chance:

- technische Altlasten können entfernt werden
- wichtige Leistungen können bessere Zielseiten erhalten
- Ladezeit und mobile Nutzung können verbessert werden
- Deutsch und Englisch können korrekt verknüpft werden
- Fachwissen, Buch, Podcast und Personen können Autorität aufbauen
- interne Verlinkung kann Suchmaschinen und Nutzern die Themenstruktur erklären

Die richtige Zielsetzung lautet deshalb nicht:

> SEO darf nicht schlechter werden.

Sondern:

> Bestehende Signale werden kontrolliert migriert. Gleichzeitig werden
> technische Qualität, fachliche Zielseiten und messbare Sichtbarkeit
> systematisch verbessert.

Eine Rankinggarantie ist seriös nicht möglich. Ein sauberer Prozess kann das
Risiko jedoch stark reduzieren und die Voraussetzungen für Wachstum deutlich
verbessern.

## 13. Methodik der Bestandsanalyse

Die folgenden Befunde stammen aus einer öffentlichen technischen Prüfung der
bestehenden Website am 10. Juni 2026.

Geprüft wurden:

- `robots.txt`
- Sitemap-Index und einzelne Sitemaps
- alle 83 öffentlich gelisteten URLs
- HTTP-Statuscodes
- Titles, Meta-Descriptions, H1, Canonicals und `hreflang`
- HTML- und Ressourcenumfang der Startseite
- Bilder und `alt`-Attribute der Startseite
- öffentliche DNS- und Serverinformationen
- sichtbare WordPress-Plugins und Drittanbieter
- mobile Lighthouse-Labormessung der Startseite

Nicht öffentlich vollständig prüfbar sind:

- tatsächliche Google-Rankings und Suchanfragen
- Klicks, Impressionen und Conversions
- Indexierungsprobleme in der Search Console
- vollständiges Backlinkprofil
- reale Core-Web-Vitals-Felddaten

Dafür werden Search-Console-, Analytics- und gegebenenfalls Backlink-Zugänge
benötigt.

## 14. Stärken der bestehenden Website

- etablierte Domain und bestehende Suchhistorie
- 83 öffentlich gelistete URLs mit fachlicher Themenbreite
- eigene Inhalte für Planung, Schwachstellenanalyse, Absicherung, Erprobung und
  Prognosen
- eigene Seiten für Beratung, Coaching, Training und Seminare
- DoE-Inhalte und Seminarseiten
- Branchen-Unterseiten
- Team- und Personenprofile
- deutsche und englische Bereiche
- öffentlich gelistete URLs antworteten in der Prüfung mit `200 OK`
- auf den Sitemap-URLs waren Canonical-Angaben vorhanden
- fast alle Titles waren im Crawl eindeutig
- Fachbuch, Webinare, Kooperationen und Awards erzeugen Vertrauenssignale

Diese Werte dürfen nicht verloren gehen, nur weil die neue Navigation
reduzierter und moderner ist.

## 15. Konkrete Schwächen der bestehenden Website

### 15.1 Unvollständige Meta-Descriptions

21 von 83 geprüften URLs besaßen keine Meta-Description.

Betroffen waren unter anderem:

- Autor- und Kategoriearchive
- Buchseite
- Teamprofile
- Karriere- und Mitgliederseiten
- einzelne News-, Webinar- und Awardseiten

Auswirkung:

- geringere Kontrolle über die Darstellung in Suchergebnissen
- uneinheitliche Snippets
- schwächere Klickargumentation

### 15.2 Fehlerhafte H1-Struktur

8 URLs besaßen keine oder mehrere H1-Überschriften.

Beispiele:

- deutsche Kontaktseite ohne H1
- englische Kontaktseite ohne H1
- DoE-Seite ohne H1
- Karriereseite mit zwei H1
- Mitglieder-Login ohne H1

Auswirkung:

- schwächere semantische Seitenstruktur
- schlechtere Verständlichkeit für Nutzer und Suchmaschinen

### 15.3 Lücken bei `hreflang`

18 URLs besaßen keine `hreflang`-Angaben.

Betroffen waren beispielsweise:

- DoE-Seiten
- Glossar
- Buchseite
- Seminarseiten
- Karriere
- Impressum und Datenschutz

Auswirkung:

- Google kann deutsche und englische Varianten schlechter zuordnen
- falsche Sprachversionen können in Suchergebnissen erscheinen
- internationale Signale werden nicht konsistent genutzt

### 15.4 Fehlerhafte oder inkonsistente Begriffe

Die DoE-Hauptseite verwendet im Title und in der Description
`Design of Experience` statt `Design of Experiments`.

Auswirkung:

- fachlich falsches Signal
- schwächere Relevanz für die tatsächliche Suchintention
- Vertrauensverlust bei fachkundigen Besuchern

### 15.5 Nicht optimale Sitemap- und Indexierungssteuerung

Die Sitemap enthält auch:

- Autorarchiv
- zwei wenig aussagekräftige Kategoriearchive
- Mitglieder-Login
- teilweise veraltete Karriere- und Beitragsseiten

Diese Seitentypen sind nicht automatisch wertvoll für die organische Suche.
Sie sollten bewusst indexiert, verbessert oder ausgeschlossen werden.

Die `robots.txt` verweist nur auf die Seiten-Sitemap statt auf den
Sitemap-Index. Außerdem blockiert sie pauschal alle PDF-Dateien.

Auswirkung:

- nicht alle Inhaltstypen werden über `robots.txt` gleich klar signalisiert
- fachlich wertvolle PDFs können nicht regulär gecrawlt und indexiert werden

### 15.6 Unklare Sprach- und URL-Struktur

Neben `/en/...` existieren teilweise englische Root-URLs mit Canonical auf eine
andere englische URL. Deutsch und Englisch sind damit nicht überall nach einem
einheitlichen Schema organisiert.

Auswirkung:

- unnötige URL-Varianten
- kompliziertere Canonical- und Redirect-Logik
- höhere Fehlergefahr bei einem Relaunch

### 15.7 Duplicate Title

Die deutsche und englische RAMS-Award-Seite verwendeten denselben Title.

Auswirkung:

- schwächere sprachliche Differenzierung
- unklare Zuordnung der Suchergebnisse

### 15.8 Bild-SEO

Auf der Startseite wurden 50 Bilder gefunden. 9 davon besaßen kein
`alt`-Attribut.

Auswirkung:

- schlechtere Barrierefreiheit
- verlorener Bildkontext für Suchmaschinen
- verschenkte Chancen in der Bildersuche

### 15.9 Technische Last und Performance

Die Startseite zeigte in der Stichprobe:

- rund 217 KB HTML
- 51 Skripte
- 11 Stylesheets
- rund 2,6 MB übertragene Daten im mobilen Lighthouse-Lauf
- `Cache-Control: no-cache, no-store`
- mobilen Lighthouse-Performancewert 69 von 100
- Largest Contentful Paint von rund 6,0 Sekunden im Labortest

Zum Vergleich:

- empfohlenes LCP-Ziel: höchstens 2,5 Sekunden
- empfohlenes INP-Ziel: höchstens 200 Millisekunden
- empfohlenes CLS-Ziel: höchstens 0,1

Die Labormessung ist keine Felddatenmessung. Sie zeigt aber einen klaren
Optimierungsbedarf beim ersten sichtbaren Hauptinhalt und beim Gesamtgewicht.

Der Lighthouse-SEO-Wert der einzelnen Startseite lag in diesem Lauf bei
100 von 100. Dieser Wert prüft jedoch nur eine begrenzte Menge technischer
Seitensignale. Er erkennt beispielsweise keine vollständige URL-Migration,
keine inhaltliche Kannibalisierung, kein Backlinkrisiko und keine
seitenübergreifenden `hreflang`- oder Sitemap-Probleme. Er ist deshalb kein
Beleg dafür, dass die gesamte Website SEO-fehlerfrei ist.

### 15.10 WordPress-Altlasten und Drittanbieter

Öffentlich erkennbar sind unter anderem:

- Page Builder und Slider
- zahlreiche Skripte und Styles
- Cookie-Consent
- Kontaktformular
- Video-Einbindungen
- Tracking- und Analytics-Hinweise
- Mitglieder-Plugin

Die neue Next.js-Website kann einen großen Teil dieser Last vermeiden. Dafür
müssen benötigte Funktionen gezielt und datenschutzkonform neu aufgebaut
werden.

### 15.11 Off-Page-SEO ist ohne Kontozugänge nur teilweise bewertbar

Öffentlich sichtbar sind wertvolle Vertrauenssignale wie:

- Springer-Fachbuch
- Podcast
- Academy
- Kooperationen
- Hochschulbezug
- Referenzunternehmen

Nicht belastbar öffentlich feststellbar sind:

- Anzahl und Qualität aller Backlinks
- welche alten URLs besonders starke externe Links besitzen
- welche Verweise tatsächlich organischen Traffic liefern
- ob schädliche oder veraltete Links bestehen

Vor der finalen URL-Entscheidung müssen deshalb Search Console und ein
Backlink-Export ausgewertet werden. Sonst könnte eine äußerlich unauffällige
Unterseite mit wertvollen externen Signalen unbeabsichtigt entfernt werden.

## 16. Größtes konkretes Migrationsrisiko

Der aktuelle Prototyp bildet nur einen kleinen Teil der bisherigen URL- und
Themenstruktur als eigene Seiten ab.

Beispiele bestehender wertvoller Seitentypen:

- Zuverlässigkeitsplanung
- Schwachstellenanalyse
- Absicherung
- Erprobung
- Prognosen
- Consulting, Coaching und Training
- DoE Consulting, Coaching und Training
- einzelne Seminare
- acht Branchenbereiche
- Teamprofile
- Webinare und Fachbeiträge

Wenn diese Inhalte nur auf wenige Übersichtsseiten reduziert werden, können
Suchintentionen, Rankings, interne Links und externe Backlinkziele verloren
gehen.

Empfehlung:

- wichtige Themen erhalten weiterhin eigene, moderne und verbesserte Zielseiten
- schwache oder doppelte Seiten werden bewusst zusammengeführt
- keine pauschale Weiterleitung vieler alter URLs auf die Startseite

## 17. SEO-Migrationsstrategie

### Schritt 1: SEO-Baseline sichern

Vor größeren URL- oder Inhaltsentscheidungen:

- Search-Console-Daten der letzten 16 Monate exportieren
- Landingpages mit Klicks und Impressionen identifizieren
- wichtigste Suchanfragen pro Seite erfassen
- Conversions und Kontaktanfragen pro Landingpage prüfen
- Backlinks und externe Verweise erfassen
- aktuelle Core-Web-Vitals-Felddaten sichern

Ergebnis:

- belastbare Priorisierung statt Entscheidung nur nach Optik

### Schritt 2: URL- und Suchintentionsmatrix erstellen

Für jede alte URL werden dokumentiert:

- Statuscode
- Sprache
- Seitentyp
- Hauptthema
- bisherige Suchanfragen
- Klicks und Impressionen
- Backlinks
- neue Ziel-URL
- Maßnahme
- verantwortlicher Inhaltsprüfer

Regel:

Eine alte URL wird nur dann zusammengeführt, wenn die neue Zielseite die
gleiche oder eine sehr eng verwandte Suchintention vollständig beantwortet.

### Schritt 3: Bestehende Werte vor dem Relaunch übernehmen

Zu erhalten oder zu verbessern:

- relevante Texte und Fachthemen
- Titles und Descriptions als Ausgangsbasis
- Bilder und Downloads mit Suchwert
- interne Linkbeziehungen
- Personen- und Autoritätssignale
- deutsche und englische Entsprechungen

### Schritt 4: Neue Seitenstruktur SEO-gerecht ausbauen

Empfohlene zentrale Hubs und Zielseiten:

- Zuverlässigkeitstechnik
- Reliability Engineering
- Beratung und langfristige Projektbegleitung
- Erprobung und Versuchsplanung
- Design of Experiments
- Datenanalyse
- Prognostik und Health Monitoring
- Risikomanagement
- Seminare und Inhouse-Weiterbildung
- RelTest Academy
- Wissensbereiche
- Branchen und Anwendungsfelder
- Team und fachliche Verantwortliche

Die finale Aufteilung muss mit Suchdaten und fachlicher Abgrenzung validiert
werden, damit keine Keyword-Kannibalisierung entsteht.

### Schritt 5: Technische SEO vollständig umsetzen

Vor dem Go-live erforderlich:

- eindeutiger Title pro indexierbarer Seite
- eindeutige Meta-Description pro wichtiger Seite
- genau eine sinnvolle H1
- logische H2- und H3-Struktur
- absolute Self-Canonicals
- wechselseitige `hreflang`-Verknüpfung
- echte HTML-Links
- XML-Sitemap nur mit kanonischen indexierbaren URLs
- korrekte `robots.txt`
- strukturierte Daten
- optimierte Bilder und Alt-Texte
- benutzerfreundliche 404-Seite
- konsistente Hauptdomain und HTTPS

### Schritt 6: Redirect-Matrix implementieren

Anforderungen:

- permanente serverseitige `301`-Weiterleitungen
- möglichst genau eine Weiterleitung bis zum Ziel
- keine Redirect-Ketten
- keine Schleifen
- keine pauschale Umleitung auf die Startseite
- sprachlich passende Ziele
- alte PDFs und Downloads berücksichtigen

Google empfiehlt, Weiterleitungen bei Website-Umzügen im Allgemeinen mindestens
ein Jahr beizubehalten. Für relevante alte RelTest-URLs sollten sie dauerhaft
bestehen bleiben, solange externe Links oder Zugriffe möglich sind.

### Schritt 7: Performance als SEO- und Conversionziel behandeln

Ziele:

- LCP höchstens 2,5 Sekunden
- INP höchstens 200 Millisekunden
- CLS höchstens 0,1
- jeweils am 75. Perzentil für mobile und Desktop-Nutzung

Maßnahmen:

- moderne Bildformate und passende Abmessungen
- kritisches Hero-Bild priorisieren
- unnötiges JavaScript vermeiden
- Drittanbieter erst nach Bedarf oder Einwilligung laden
- Fonts optimieren
- Animationen GPU-schonend und reduziert einsetzen
- Caching und CDN nutzen

### Schritt 8: Fachliche Autorität ausbauen

Die neue Website soll vorhandene Nachweise stärker verbinden:

- Springer-Fachbuch
- Podcast mit Kevin Lucan
- RelTest Academy
- Referenzunternehmen
- Mitarbeiter- und Expertenprofile
- wissenschaftliche und industrielle Erfahrung
- Seminare, Webinare und Fachbeiträge

Geeignete strukturierte Daten:

- `Organization`
- `Person`
- `Book`
- `Article`
- `Course`
- `BreadcrumbList`

### Schritt 9: Wissensbereich als nachhaltigen Wachstumskanal entwickeln

Der Wissensbereich soll nicht aus oberflächlichen SEO-Texten bestehen. Er soll
konkrete technische Fragen beantworten und zur passenden Leistung führen.

Geeignete Themencluster:

- Planung
- Schwachstellenanalyse
- Absicherung
- Erprobung
- Prognosen
- DoE und Versuchsplanung
- Risikomanagement
- Lebensdaueranalyse
- Weibull-Analyse
- Health Monitoring

Jeder Beitrag benötigt:

- klare Suchintention
- fachliche Verantwortung oder Autor
- eigene Grafik oder belastbare Erklärung
- interne Links zu weiterführendem Wissen und passenden Leistungen
- klare Abgrenzung zu bestehenden Seiten

### Schritt 10: Off-Page-Signale aktualisieren und ausbauen

Nach dem Go-live:

- wichtige externe Links auf neue Zielseiten aktualisieren lassen
- Springer-, Podcast-, Academy-, Partner- und Hochschulverweise prüfen
- Unternehmensprofile konsistent aktualisieren
- fachliche Beiträge und Kooperationen gezielt als Link- und Vertrauenssignale
  nutzen
- keine gekauften oder minderwertigen Backlinks einsetzen

## 18. SEO-Go-live-Kriterien

Die Website darf aus SEO-Sicht erst live gehen, wenn:

- jede relevante alte URL einer Maßnahme zugeordnet ist
- Redirects technisch getestet sind
- keine relevanten Seiten unbeabsichtigt `noindex` sind
- Produktion nicht durch `robots.txt` blockiert wird
- Canonicals auf die Produktionsdomain zeigen
- Deutsch und Englisch korrekt mit `hreflang` verbunden sind
- Sitemap nur gültige kanonische URLs enthält
- wichtige Seiten eindeutige Titles, Descriptions und eine H1 besitzen
- interne Links direkt auf finale Ziele zeigen
- Formulare und Conversions messbar funktionieren
- mobile Performance geprüft wurde
- Search Console und Monitoring vorbereitet sind

## 19. Monitoring nach dem Go-live

### Täglich in der ersten Woche

- Erreichbarkeit
- 404- und 5xx-Fehler
- Formularfunktion
- wichtige Redirects
- Indexierbarkeit der wichtigsten Seiten

### Wöchentlich in den ersten 8 bis 12 Wochen

- Klicks und Impressionen
- Rankings der priorisierten Suchanfragen
- indexierte und ausgeschlossene Seiten
- Crawling- und Sitemapfehler
- Core Web Vitals
- organische Landingpages
- Leads aus organischem Traffic

### Monatlich

- Inhalte mit steigender oder sinkender Sichtbarkeit
- neue Suchanfragen
- interne Verlinkung
- technische Fehler
- Backlinks
- Content-Prioritäten

## 20. Erfolgsmessung

### Technische Ziele

- keine relevanten 404-Ziele nach der Migration
- keine Redirect-Ketten
- vollständige Canonical- und `hreflang`-Abdeckung
- gültige Sitemap
- keine unbeabsichtigten Indexierungsblockaden
- Core-Web-Vitals-Zielwerte erreichen

### SEO-Ziele

- bestehende Klicks und Impressionen auf wertvollen Seiten stabilisieren
- Sichtbarkeit für zentrale Nicht-Markenbegriffe ausbauen
- zusätzliche Sichtbarkeit über Wissensinhalte und Bildersuche gewinnen
- deutsch- und englischsprachige Suchintentionen sauber bedienen

### Geschäftliche Ziele

- mehr qualifizierte Projektanfragen
- bessere Zuordnung der Anfragen zu Leistungen
- stärkere Wahrnehmung als Advanced Reliability Engineering Partner
- messbare Nutzung von Academy-, Seminar- und Kontaktangeboten

## 21. Warum SEO mit der neuen Website besser werden kann

Die bestehende Website besitzt wertvolle Inhalte und Historie, aber auch klare
technische und strukturelle Schwächen.

Die neue Website kann besser werden, wenn:

- die fachliche Tiefe nicht gegen eine flache Navigation eingetauscht wird
- jede Kernleistung eine klare Such- und Nutzerfunktion erhält
- bestehende Signale über Redirects und Content-Migration erhalten bleiben
- Performance, Semantik und Mehrsprachigkeit sauber umgesetzt werden
- Wissen und Autorität kontinuierlich ausgebaut werden
- Erfolg über Search Console und Conversions gemessen wird

Der Vorteil des Relaunchs ist damit nicht nur ein moderneres Design. Die neue
Website kann eine technisch schnellere, fachlich klarere und langfristig
ausbaufähige Vertriebs- und Wissensplattform werden.

---

# Teil C: Vorschlag für den Folgetermin

## 22. Agenda für 60 Minuten

| Zeit | Thema | Ziel |
| --- | --- | --- |
| 5 Minuten | Ausgangslage und Freigabe | gemeinsames Zielbild bestätigen |
| 10 Minuten | Projektvorgehen | Phasen und Abnahmen erklären |
| 10 Minuten | Benötigte Zugänge und Rollen | Verantwortlichkeiten festlegen |
| 10 Minuten | Hosting, Betrieb und Buchungen | Infrastrukturentscheidung vorbereiten |
| 10 Minuten | Knackpunkte | Risiken sichtbar und beherrschbar machen |
| 10 Minuten | SEO-Sicherung und Ausbau | Migrationsstrategie freigeben |
| 5 Minuten | Entscheidungen und nächste Schritte | klare Aufträge und Termine vereinbaren |

## 23. Empfohlene Folienstruktur

1. Ziel des Relaunchs
2. Was bereits vorhanden ist
3. Warum der Relaunch mehr als ein Designprojekt ist
4. Projektphasen bis zum Go-live
5. Rollen und benötigte Zugänge
6. Hosting- und Betriebsmodell
7. Zentrale Risiken und Gegenmaßnahmen
8. SEO-Ausgangslage der bestehenden Website
9. SEO-Migrations- und Verbesserungsstrategie
10. Entscheidungen und nächste Schritte

## 24. Prägnantes Abschlussstatement

> Wir haben bereits einen überzeugenden visuellen und technischen Prototyp.
> Der nächste Schritt ist, daraus eine kontrolliert betriebene
> Unternehmenswebsite zu machen. Dafür sichern wir zuerst Inhalte, Zugänge und
> bestehende SEO-Signale, bauen die fachliche Seitenstruktur gezielt aus und
> schalten erst nach vollständiger Abnahme um. So minimieren wir das
> Relaunch-Risiko und nutzen gleichzeitig die Chance, Sichtbarkeit,
> Performance und Anfragen langfristig zu verbessern.

## 25. Quellen und weiterführende interne Dokumente

### Interne Dokumente

- `docs/vision/reltest-website-vision.md`
- `docs/seo/seo-codex-leitfaden.md`
- `docs/seo/seo-audit-und-aufgaben.md`
- `docs/project/repo-dokumentation.md`

### Externe Primärquellen

- [Google: Website mit URL-Änderungen migrieren](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=de)
- [Google: Weiterleitungen und Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=de)
- [Google: Lokalisierte Seiten und hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=de)
- [Google: Sitemap erstellen und einreichen](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=de)
- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [Vercel: Domains](https://vercel.com/docs/domains)
- [Vercel: Preise](https://vercel.com/pricing)
