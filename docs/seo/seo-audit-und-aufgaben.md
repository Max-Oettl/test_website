# SEO-Audit und Aufgabenplan

Stand: 10. Juni 2026

## 1. Ziel und Umfang

Dieses Dokument bewertet die aktuelle Next.js-Version der RelTest-Website aus Sicht von:

- Technical SEO
- On-Page SEO
- internationaler SEO für Deutsch und Englisch
- Content- und Informationsarchitektur
- Bild-SEO und Core Web Vitals
- Off-Page SEO und externen Vertrauenssignalen
- SEO-sicherer Migration von der bestehenden WordPress-Website

Die Punkte sind direkt als Aufgaben formuliert. Prioritäten:

- **P0:** vor dem Go-live erledigen
- **P1:** unmittelbar nach dem technischen Fundament, idealerweise vor oder in den ersten 30 Tagen nach Go-live
- **P2:** fortlaufender Ausbau

## 2. Kurzfazit

Die neue Website besitzt eine gute technische Ausgangsbasis:

- statisch vorgerenderte deutsche und englische Seiten
- korrektes `lang`-Attribut
- responsive Komponenten
- klare Hauptnavigation
- überwiegend sinnvolle Bildbeschreibungen
- interne Links zwischen den wichtigsten Bereichen
- fachlich starke Vertrauensanker durch Buch, Podcast und Referenzen

Die größten SEO-Risiken liegen aktuell nicht im Design, sondern in der noch fehlenden Suchmaschinenarchitektur:

1. Alle Unterseiten verwenden denselben Title und dieselbe Meta-Description.
2. Die `hreflang`-Alternates aller Unterseiten zeigen fälschlich nur auf `/de` und `/en`.
3. Canonical-URLs fehlen.
4. `robots.txt` und XML-Sitemap fehlen in der neuen Anwendung.
5. Die bestehende Website listet 83 URLs in ihren Sitemaps; die neue Website bildet nur 16 Sprach-URLs ab.
6. Es existiert noch keine Redirect-Matrix für alte Rankings und Backlinks.
7. Mehrere Seiten besitzen mehr als eine H1.
8. Leistungs-, Branchen- und Wissensthemen haben noch keine eigenständigen, suchfähigen Landingpages.
9. Ein großer Teil der Unterseiten ist inhaltlich sehr dünn.
10. Mehrere Bilder sind für Performance und Bildersuche nicht ausreichend optimiert.
11. Impressum und Datenschutz fehlen in der neuen Seitenstruktur.
12. Öffentliche Unternehmensangaben zu Gründungsjahr und Standort wirken nicht vollständig konsistent.

## 3. Gemessener Ist-Zustand

Der lokale Produktions-Build wurde automatisiert gecrawlt.

| Seite | Wörter inklusive Header/Footer | H1 | H2 |
|---|---:|---:|---:|
| `/de` | 850 | 1 | 9 |
| `/de/leistungen` | 243 | 1 | 1 |
| `/de/weiterbildung` | 215 | 3 | 0 |
| `/de/wissen` | 340 | 1 | 6 |
| `/de/prozess` | 177 | 1 | 4 |
| `/de/literatur` | 162 | 2 | 0 |
| `/de/referenzen` | 117 | 1 | 0 |
| `/de/kontakt` | 143 | 2 | 1 |

Da Header und Footer mitgezählt wurden, ist der eigentliche Seiteninhalt jeweils noch geringer.

Weitere Messwerte:

- alle geprüften Seiten verwenden denselben Title
- alle deutschen Seiten verwenden dieselbe Meta-Description
- alle englischen Seiten verwenden dieselbe Meta-Description
- keine Canonical-Tags
- keine Open-Graph-Metadaten
- keine Twitter-/Social-Card-Metadaten
- keine strukturierten Daten
- `/robots.txt`: 404
- `/sitemap.xml`: 404
- `/manifest.webmanifest`: 404
- bestehende WordPress-Sitemaps: 83 eindeutige URLs
- davon 51 deutsche bzw. Root-URLs und 32 englische URLs

## 4. P0: Aufgaben vor dem Go-live

### P0.1 URL-Migrationsplan für alle 83 bestehenden URLs erstellen

**Befund**

Die bestehende WordPress-Website veröffentlicht 83 URLs in vier XML-Sitemaps. Darunter befinden sich eigenständige Seiten zu:

- Zuverlässigkeitstechnik
- Zuverlässigkeitsmanagement
- Design of Experiments
- Beratung, Coaching, Training und Seminaren
- Planung, Schwachstellenanalyse, Absicherung, Erprobung und Prognosen
- Branchen
- Teammitgliedern
- Fachbeiträgen und Webinaren
- deutschen und englischen Seiten

Die neue Next.js-Seite besitzt aktuell nur 16 Sprach-URLs. Viele alte URLs hätten nach dem Relaunch kein direktes Ziel.

**Risiko**

- Verlust bestehender Rankings
- Verlust externer Linksignale
- 404-Fehler aus Google und von externen Websites
- Rückgang organischer Sichtbarkeit direkt nach dem Relaunch
- schlechte Nutzererfahrung für gespeicherte Links

**Aufgabe**

- [ ] Alle 83 Sitemap-URLs in eine Redirect-Tabelle exportieren.
- [ ] Für jede alte URL das fachlich passendste neue Ziel definieren.
- [ ] Relevante alte Themen nicht pauschal auf die Startseite umleiten.
- [ ] Für wertvolle alte Inhalte zunächst eine gleichwertige neue Zielseite erstellen.
- [ ] Dauerhafte Weiterleitungen als HTTP 308 oder 301 in `next.config.ts` umsetzen.
- [ ] Wirklich entfallene, nicht ersetzbare Inhalte gezielt mit 410 behandeln.
- [ ] Query-Parameter und Varianten mit bzw. ohne abschließenden Slash testen.
- [ ] Bestehende Links aus Podcast, Hochschulen, Partnerseiten und Social Profiles separat prüfen.

**Abnahmekriterium**

- Jede bisher indexierbare URL liefert entweder `200`, einen einzelnen permanenten Redirect auf ein relevantes Ziel oder bewusst `410`.
- Es existieren keine Redirect-Ketten.
- Kein relevanter alter Inhalt wird pauschal auf die Startseite umgeleitet.

### P0.2 Individuelle Titles und Meta-Descriptions für jede Seite anlegen

**Befund**

Aktuell erben alle Seiten den Title:

`RelTest Solutions | Advanced Reliability Engineering Partner`

Auch die Descriptions sind nur pro Sprache, nicht pro Seite definiert.

**Risiko**

- Google kann die thematische Abgrenzung der Seiten schlechter erkennen.
- Suchergebnisse wirken austauschbar.
- Klickrate und Keyword-Relevanz bleiben unter Potenzial.
- Google erzeugt häufiger eigene, unkontrollierte Titles.

**Aufgabe**

- [ ] Für jede deutsche und englische URL einen eindeutigen SEO-Title erstellen.
- [ ] Für jede URL eine eigenständige Meta-Description schreiben.
- [ ] Hauptkeyword und Suchintention der Seite im Title abbilden.
- [ ] Marke am Ende des Titles verwenden.
- [ ] Seitenspezifische Metadaten in den jeweiligen `page.tsx` oder einer zentralen SEO-Konfiguration definieren.
- [ ] Eine Title-Vorlage wie `%s | RelTest Solutions` einrichten.

**Beispiel**

- Deutsch: `Zuverlässigkeitstechnik & Reliability Engineering | RelTest`
- Englisch: `Reliability Engineering Consulting | RelTest Solutions`
- Leistung: `Zuverlässigkeitsberatung und DoE für Unternehmen | RelTest`
- Weiterbildung: `Schulungen für Zuverlässigkeitstechnik und DoE | RelTest`

**Abnahmekriterium**

- Keine zwei indexierbaren Seiten besitzen denselben Title oder dieselbe Description.
- Title und Description beschreiben genau die jeweilige Seite.

### P0.3 Canonicals und korrekte `hreflang`-Alternates umsetzen

**Befund**

Canonical-Tags fehlen vollständig. Die aktuellen Sprach-Alternates werden global im Layout definiert:

- Deutsch: `/de`
- Englisch: `/en`

Dadurch verweist beispielsweise `/de/leistungen` als englische Alternative fälschlich auf `/en` statt auf die entsprechende Leistungsseite.

**Risiko**

- falsche Sprachzuordnung
- Unterseiten konkurrieren unnötig mit Startseiten
- Google erhält widersprüchliche Konsolidierungssignale
- englische und deutsche Seiten werden eventuell nicht korrekt gegenseitig erkannt

**Aufgabe**

- [ ] `metadataBase` auf die endgültige Produktionsdomain setzen.
- [ ] Jede Seite mit einer absoluten Self-Canonical auszeichnen.
- [ ] Jede deutsche Seite mit ihrer inhaltlich entsprechenden englischen Seite verknüpfen.
- [ ] Jede englische Seite mit ihrer deutschen Entsprechung verknüpfen.
- [ ] Jede Sprachseite zusätzlich selbstreferenzierend in den `hreflang`-Alternates aufführen.
- [ ] Alle `hreflang`-URLs absolut mit Protokoll und Produktionsdomain ausgeben.
- [ ] Sicherstellen, dass die Sprachverweise wechselseitig sind.
- [ ] `x-default` auf die neutrale Einstiegs- oder Sprachauswahl-URL setzen.
- [ ] Nur tatsächlich äquivalente Inhalte als Alternates verknüpfen.
- [ ] Bei zukünftigen Wissensartikeln die Alternates je Artikel erzeugen.
- [ ] Sprachwechsel als echte HTML-Links mit `href` auf das jeweilige Seitengegenstück ausgeben.
- [ ] Beim Sprachwechsel auf der aktuellen Unterseite bleiben, statt immer auf die Startseite zu springen.
- [ ] Automatische Spracherkennung so umsetzen, dass `/de/...` und `/en/...` jederzeit direkt aufrufbar und crawlbar bleiben.

**Abnahmekriterium**

Auf `/de/leistungen` stehen beispielsweise:

- Canonical: `https://reltest-solutions.com/de/leistungen`
- `de`: `https://reltest-solutions.com/de/leistungen`
- `en`: entsprechende englische Leistungs-URL
- `x-default`: definierte neutrale URL
- Der sichtbare Sprachumschalter führt direkt zwischen diesen beiden Unterseiten.
- Alle Alternates verweisen wechselseitig und liefern Status 200.

### P0.4 XML-Sitemap für alle indexierbaren URLs erzeugen

**Befund**

Die neue Anwendung liefert unter `/sitemap.xml` derzeit 404.

**Aufgabe**

- [ ] `app/sitemap.ts` implementieren.
- [ ] Alle deutschen und englischen Canonical-URLs aufnehmen.
- [ ] Nicht fertige oder bewusst nicht indexierbare Seiten ausschließen.
- [ ] Sprachalternativen in der Sitemap auszeichnen.
- [ ] Bei späteren Fachartikeln `lastModified` aus echten Änderungsdaten beziehen.
- [ ] Sitemap nach Go-live in Google Search Console und Bing Webmaster Tools einreichen.

**Abnahmekriterium**

- `/sitemap.xml` liefert Status 200 und valides XML.
- Alle enthaltenen URLs liefern 200 und sind canonical.
- Keine Redirect- oder 404-URLs stehen in der Sitemap.

### P0.5 `robots.txt` für die neue Website erstellen

**Befund**

Die neue Anwendung liefert unter `/robots.txt` derzeit 404.

**Aufgabe**

- [ ] `app/robots.ts` implementieren.
- [ ] Crawling der öffentlichen Website erlauben.
- [ ] XML-Sitemap mit absoluter URL angeben.
- [ ] Staging- und Preview-Systeme separat durch Passwortschutz und `noindex` sperren.
- [ ] Keine wichtigen CSS-, JavaScript- oder Bildressourcen blockieren.

**Abnahmekriterium**

- `/robots.txt` liefert Status 200.
- Produktionsseiten sind crawlbar.
- Nicht öffentliche Umgebungen sind nicht indexierbar.

### P0.6 Überschriftenhierarchie bereinigen

**Befund**

Mehrere Seiten besitzen mehr als eine H1:

- `/de/weiterbildung`: 3 H1
- `/de/literatur`: 2 H1
- `/de/kontakt`: 2 H1
- entsprechende englische Seiten ebenfalls

Ursache sind zusätzliche H1 innerhalb von Karten oder Inhaltsbereichen neben der H1 des `PageIntro`.

**Aufgabe**

- [ ] Pro Seite genau eine primäre H1 verwenden.
- [ ] Titel der Weiterbildungsformate als H2 ausgeben.
- [ ] Buchtitel auf der Literaturseite als H2 ausgeben.
- [ ] `Direktkontakt` auf der Kontaktseite als H2 ausgeben.
- [ ] H2 und H3 entsprechend der visuellen und semantischen Hierarchie prüfen.

**Abnahmekriterium**

- Jede indexierbare Seite hat genau eine H1.
- Keine Überschriftenebene wird ohne Grund übersprungen.

### P0.7 Impressum und Datenschutz in die neue Website übernehmen

**Befund**

Die neue Anwendung besitzt keine Seiten für Impressum und Datenschutz. Die bestehende Website hat beide URLs.

**Risiko**

- rechtliches und vertrauensbezogenes Risiko
- Verlust bestehender indexierter URLs
- schwächere Unternehmens- und E-E-A-T-Signale

**Aufgabe**

- [ ] `/de/impressum` und `/de/datenschutz` anlegen.
- [ ] Passende englische Fassungen oder klar gekennzeichnete deutsche Rechtstexte bereitstellen.
- [ ] Bestehende URLs permanent auf die neuen Ziele weiterleiten.
- [ ] Beide Seiten im Footer verlinken.
- [ ] Inhalte juristisch prüfen lassen.
- [ ] Bei Einführung von Analytics, Formularen oder externen Medien die Datenschutzerklärung aktualisieren.

**Abnahmekriterium**

- Impressum und Datenschutz sind von jeder Seite mit einem Klick erreichbar.
- Alte Rechtstext-URLs liefern einen permanenten Redirect auf die neuen Seiten.

### P0.8 Indexierung unfertiger Wissensinhalte verhindern oder Inhalte fertigstellen

**Befund**

Auf der Wissensseite steht mehrfach sinngemäß `Inhalt folgt`. Die fünf Themen sind nur Anker auf einer Seite.

**Risiko**

- Thin Content
- schwaches Qualitätssignal direkt nach dem Relaunch
- keine eigenständige Rankingchance pro Fachthema
- enttäuschte Nutzer nach Klick aus Navigation oder Suche

**Aufgabe**

- [ ] Entscheiden: Inhalte vor Go-live fertigstellen oder Wissensseite vorübergehend `noindex`.
- [ ] Platzhaltertexte aus indexierbaren Seiten entfernen.
- [ ] Für Planung, Schwachstellenanalyse, Absicherung, Erprobung und Prognosen eigenständige Seiten vorbereiten.
- [ ] Erst publizieren, wenn jede Seite eine konkrete fachliche Frage substanziell beantwortet.

**Abnahmekriterium**

- Keine indexierbare Seite enthält redaktionelle Platzhalter.

### P0.9 Englische URLs und bestehende englische Pfade strategisch festlegen

**Umsetzungsstand: abgeschlossen am 19. August 2026**

Die englische Website verwendet kanonische, englische Slugs. Beispiele:

- `/en/services`
- `/en/education`
- `/en/knowledge`
- `/en/contact`
- `/en/industries`
- `/en/about-us`
- `/en/news`

Die frühere Next.js-Struktur mit deutschen Slugs unter `/en` sowie bestehende WordPress-Pfade wie `/en/credentials/` und `/en/reliability-engineering/` werden per `301` auf die jeweils inhaltlich passende kanonische URL weitergeleitet.

**Aufgabe**

- [x] Englische Slugs als kanonische Zielstruktur festlegen.
- [x] Englische Zielstruktur für Leistungen, Wissen, Branchen, News, Kontakt und Rechtstexte umsetzen.
- [x] Bestehende englische WordPress-URLs und frühere interne Next.js-Pfade berücksichtigen.
- [x] Altpfade per permanentem Redirect ohne Redirect-Kette auflösen.
- [x] Canonicals, `hreflang`, Sitemap, Sprachumschalter und interne Links auf dieselbe Zuordnung umstellen.
- [ ] Nach dem Go-live keine erneute URL-Umstellung ohne zwingenden Grund durchführen.

**Abnahmekriterium**

- Englische URLs sind verständlich, dauerhaft und konsistent.
- Jede alte englische URL besitzt ein relevantes Ziel.

### P0.10 Crawlbare HTML-Links und robuste JavaScript-Auslieferung sicherstellen

**Befund**

Die neue Website verwendet React und Next.js. Das ist grundsätzlich gut crawlbar, solange Navigation, Sprachwechsel und Hauptinhalte bereits im ausgelieferten HTML vorhanden sind. Interaktive Komponenten dürfen wichtige Seiten oder Inhalte nicht ausschließlich über JavaScript-Klickhandler zugänglich machen.

**Risiko**

- Google entdeckt wichtige Seiten schlechter oder verspätet.
- Links funktionieren ohne oder bei verzögertem JavaScript nicht zuverlässig.
- Inhalte in Canvas, clientseitig nachgeladenen Ansichten oder geschlossenen Interaktionen sind schlechter verständlich.
- Nutzer mit langsamen Geräten oder assistiven Technologien werden benachteiligt.

**Aufgabe**

- [ ] Navigation, Footer, Sprachwechsel, Karten und zentrale CTAs als echte Links mit gültigem `href` ausgeben.
- [ ] Keine indexierbare Zielseite ausschließlich über `onClick`, Buttons oder JavaScript-Routerlogik erreichbar machen.
- [ ] Hauptüberschriften, Kerntexte und relevante Links serverseitig oder statisch im initialen HTML ausliefern.
- [ ] Fachliche Aussagen aus SVG-, Canvas- oder Bildgrafiken zusätzlich als HTML-Text bereitstellen.
- [ ] Inhalte nicht erst nach Hover, Animation oder Nutzerinteraktion für Suchmaschinen zugänglich machen.
- [ ] Gerendertes HTML und Screenshot zentraler Seiten mit dem Search-Console-URL-Prüftool kontrollieren.
- [ ] Website stichprobenartig mit deaktiviertem JavaScript prüfen; Navigation und Kerninhalt müssen verständlich bleiben.

**Abnahmekriterium**

- Jede indexierbare Seite ist über mindestens einen normalen HTML-Link erreichbar.
- Alle wichtigen Inhalte stehen im initialen oder serverseitig gerenderten HTML.
- JavaScript-Ausfälle verhindern weder Navigation noch das Verständnis des Hauptinhalts.

## 5. P1: On-Page- und Content-Aufgaben

### P1.1 Eigenständige Landingpages für Kernleistungen erstellen

**Befund**

Die Leistungsseite wiederholt im Wesentlichen die vier Karten der Startseite. Alle Karten führen auf dieselbe Übersichtsseite.

**Fehlende oder zu schwache Suchintentionen**

- Zuverlässigkeitsberatung
- Reliability Engineering Consulting
- Design of Experiments / DoE Beratung
- Lebensdauererprobung
- Felddatenanalyse und Weibull-Analyse
- Zuverlässigkeitsnachweise
- Risikomanagement, FMEA und FTA
- langfristige Entwicklungsbegleitung
- Inhouse-Schulungen
- Reliability Engineering E-Learning

**Aufgabe**

- [ ] Eine Keyword- und Suchintention-Matrix mit Daten aus Search Console und Keyword-Tools erstellen.
- [ ] Pro Suchintention genau eine primäre Zielseite festlegen.
- [ ] Bestehende und geplante Seiten auf Keyword-Kannibalisierung prüfen.
- [ ] Seiten mit gleicher Suchintention zusammenführen, klarer voneinander abgrenzen oder bewusst auf eine Hauptseite kanonisieren.
- [ ] Für jede wirtschaftlich relevante Kernleistung eine eigene Landingpage erstellen.
- [ ] Problem, Vorgehen, Nutzen, typische Projektphase, Ergebnisse und CTA erklären.
- [ ] Reale Methoden und Liefergegenstände nennen.
- [ ] Jede Leistung mit passenden Wissensartikeln, Branchen und Referenzen intern verlinken.
- [ ] Karten auf Startseite und Übersicht direkt mit den Detailseiten verknüpfen.

**Abnahmekriterium**

- Jede Kernleistung besitzt eine eigene URL mit eindeutigem Suchziel.
- Keine Detailseite ist nur eine leicht umformulierte Kopie einer anderen Seite.
- Keine zwei Seiten konkurrieren unbeabsichtigt um dieselbe Hauptsuchintention.

### P1.2 DoE als eigenständiges Kompetenzfeld sichtbar machen

**Befund**

DoE wird mehrfach erwähnt, besitzt in der neuen Struktur aber keine eigene Seite. Die bestehende Website hat mehrere DoE-URLs, darunter Beratung, Coaching und Training.

**Aufgabe**

- [ ] Hauptseite zu Design of Experiments erstellen.
- [ ] Nutzen für Entwicklungszeit, Versuchsumfang, Robustheit und Wechselwirkungen erklären.
- [ ] Beratungs-, Trainings- und Projektbegleitungsangebote unterscheiden.
- [ ] Fachbegriffe mit konkreten Anwendungsfällen verbinden.
- [ ] Alte DoE-URLs auf fachlich passende neue Seiten migrieren.

**Abnahmekriterium**

- DoE ist über Navigation oder Leistungsarchitektur erreichbar.
- Die Seite beantwortet sowohl informationsorientierte als auch kommerzielle Suchintentionen.

### P1.3 Wissensbereich als SEO-Content-Hub ausbauen

**Befund**

Der geplante Wissensbereich ist strategisch sinnvoll, besteht aktuell aber nur aus einer Seite mit Ankern.

**Aufgabe**

- [ ] Für jedes Wissensgebiet eine eigene Hub- oder Detailseite erstellen.
- [ ] Artikel nicht nach Suchvolumen allein, sondern entlang typischer Kundenfragen planen.
- [ ] Jede Grafik mit erklärendem Text, Bildunterschrift und eigenständiger URL veröffentlichen.
- [ ] Autoren, fachliche Prüfung und Aktualisierungsdatum ausweisen.
- [ ] Von Artikeln zu passenden Leistungen verlinken.
- [ ] Von Leistungsseiten zurück zu vertiefenden Artikeln verlinken.

**Erste sinnvolle Themen**

- Was ist Zuverlässigkeitstechnik?
- Badewannenkurve richtig interpretieren
- B10-Lebensdauer und Weibull-Verteilung
- Zuverlässigkeitsziele definieren
- Lebensdauererprobung planen
- Unterschied zwischen Validierung, Verifikation und Zuverlässigkeitsnachweis
- DoE in der Produktentwicklung
- Felddatenanalyse und Ausfallwahrscheinlichkeit
- FMEA, FTA und Zuverlässigkeitsmanagement
- rechtssichere und nachvollziehbare Entwicklungsdokumentation

**Abnahmekriterium**

- Jeder Beitrag löst eine klar definierte Nutzerfrage.
- Jeder Beitrag hat einen Autor, ein Datum, interne Links und einen fachlich passenden CTA.

### P1.4 Branchen-Landingpages zurückholen oder neu erstellen

**Befund**

Die bestehende Website besitzt viele Branchen-URLs. Die neue Website nennt Branchen nur in sechs Karten auf der Startseite.

**Aufgabe**

- [ ] Organischen Traffic und Backlinks der alten Branchenseiten auswerten.
- [ ] Relevante Branchen als eigenständige Landingpages erhalten.
- [ ] Keine austauschbaren Branchenkopien erstellen.
- [ ] Je Branche typische Risiken, Normen, Entwicklungsphasen, Methoden und Projektergebnisse erläutern.
- [ ] Referenzen nur mit Freigabe und passendem Kontext einsetzen.

**Abnahmekriterium**

- Jede indexierte Branchenseite enthält branchenspezifische Substanz und Beispiele.

### P1.5 Referenzen in belastbare Fallbeispiele überführen

**Befund**

Die Referenzseite enthält fast ausschließlich Logos. Das schafft Vertrauen, liefert Suchmaschinen und technischen Entscheidern aber wenig Kontext.

**Aufgabe**

- [ ] Für freigegebene Projekte kurze Case Studies erstellen.
- [ ] Ausgangssituation, technische Herausforderung, Vorgehen und Ergebnis beschreiben.
- [ ] Messbare Ergebnisse nennen, sofern freigegeben.
- [ ] Branche, Methode und Leistung intern verlinken.
- [ ] Zitate oder Testimonials mit Name, Rolle und Unternehmen ergänzen.
- [ ] Nutzungserlaubnis für Logos und Aussagen dokumentieren.

**Abnahmekriterium**

- Mindestens drei belastbare, freigegebene Fallbeispiele sind vorhanden.

### P1.6 Team- und Autorenprofile für E-E-A-T erstellen

**Befund**

Die Website spricht von Jahrzehnten Erfahrung, stellt die Personen und ihre fachliche Historie aber nicht auf eigenen Seiten vor. Alte Teamprofile existieren bereits.

**Aufgabe**

- [ ] Unternehmensseite und fachliche Teamprofile erstellen.
- [ ] Kevin Lucan, Bernd Bertsche, Martin Dazer und weitere relevante Experten mit Rollen und Schwerpunkten vorstellen.
- [ ] Publikationen, Buch, Podcast, Awards, Vorträge und Hochschulbezug verknüpfen.
- [ ] Fachartikel sichtbaren Autoren zuordnen.
- [ ] `Person`- und `ProfilePage`-Schema prüfen.
- [ ] Alte Profil-URLs auf neue Profile weiterleiten.

**Abnahmekriterium**

- Fachliche Aussagen sind sichtbaren, qualifizierten Personen zugeordnet.

### P1.7 Unternehmensgeschichte konsistent und präzise formulieren

**Befund**

Die neue Website formuliert `Unternehmen seit 2016`. Öffentliche Profile und Firmendaten nennen teilweise 2022 für die GmbH. Gleichzeitig soll die Beratungserfahrung seit 2016 korrekt sichtbar bleiben.

**Aufgabe**

- [ ] Juristische Unternehmenshistorie intern verifizieren.
- [ ] Zwischen Beratungstätigkeit, Marke/Unternehmen und Gründung der GmbH unterscheiden.
- [ ] Eine präzise Formulierung für Website, LinkedIn, Verzeichnisse und strukturierte Daten festlegen.
- [ ] Widersprüchliche Angaben auf externen Profilen korrigieren.

**Mögliche Formulierung, nur nach interner Prüfung**

`Seit 2016 in der Zuverlässigkeitsberatung tätig; seit 2022 als RelTest Solutions GmbH.`

**Abnahmekriterium**

- Gründungsjahr, Rechtsform und Erfahrung werden überall widerspruchsfrei dargestellt.

### P1.8 Interne Linktexte konkreter formulieren

**Befund**

Mehrere Karten verwenden den generischen Linktext `Mehr erfahren`.

**Aufgabe**

- [ ] Linktexte nach Ziel und Kontext benennen.
- [ ] Beispiele: `Zuverlässigkeitsberatung ansehen`, `Inhouse-Schulungen entdecken`, `Mehr zur DoE-Beratung`.
- [ ] Wichtige Seiten nicht nur aus Navigation und Footer verlinken.
- [ ] Thematische Links im Fließtext ergänzen.
- [ ] Verwaiste Seiten durch automatisierten Crawl ausschließen.

**Abnahmekriterium**

- Jeder wichtige interne Link lässt sein Ziel auch ohne umgebenden Kartentext erkennen.

### P1.9 Breadcrumbs ergänzen

**Befund**

Es gibt keine Breadcrumb-Navigation. Mit wachsendem Wissens-, Leistungs- und Branchenbereich wird die Hierarchie sonst schwerer erkennbar.

**Aufgabe**

- [ ] Sichtbare Breadcrumbs für Seiten ab Ebene zwei ergänzen.
- [ ] `BreadcrumbList`-Schema ausgeben.
- [ ] Sprachabhängige Bezeichnungen verwenden.

**Abnahmekriterium**

- Nutzer und Suchmaschinen können die Seitenhierarchie eindeutig nachvollziehen.

## 6. P1: Technical SEO und Performance

### P1.10 Strukturierte Daten implementieren

**Befund**

Aktuell existiert kein JSON-LD.

**Aufgabe**

- [ ] `Organization` auf der Startseite implementieren.
- [ ] Firmenname, Logo, URL, Adresse, Telefon und verifizierte Profile angeben.
- [ ] `sameAs` nur für echte offizielle Profile verwenden.
- [ ] `WebSite` und gegebenenfalls `WebPage` ergänzen.
- [ ] `Person` für fachliche Profile ergänzen.
- [ ] `BreadcrumbList` für Unterseiten ergänzen.
- [ ] `Article` für Fachbeiträge ergänzen.
- [ ] Seminar- oder Kurs-Schema nur verwenden, wenn die Inhalte alle Google-Anforderungen erfüllen.
- [ ] Markup mit Rich Results Test und Schema Validator prüfen.

**Abnahmekriterium**

- Strukturierte Daten sind valide und stimmen mit sichtbaren Inhalten überein.

### P1.11 Open Graph und Social Cards anlegen

**Befund**

Open Graph und Twitter Card fehlen.

**Aufgabe**

- [ ] Standard-Social-Image im RelTest-Design erstellen.
- [ ] Für wichtige Landingpages eigene Social Images erwägen.
- [ ] `og:title`, `og:description`, `og:url`, `og:image`, `og:locale` und `og:type` ausgeben.
- [ ] Sprachalternativen für Open Graph korrekt setzen.
- [ ] Twitter Card Metadaten ergänzen.

**Abnahmekriterium**

- Links zeigen in LinkedIn, Teams, Slack und anderen Plattformen ein professionelles Vorschaubild mit korrektem Text.

### P1.12 Bilder komprimieren und Bildbudget definieren

**Befund**

Mehrere Quelldateien sind sehr groß:

- Teamfotos: ca. 1,7 bis 5,1 MB
- Education-Bild: ca. 1,9 MB
- Podcast-Hintergrund: ca. 1,45 MB
- fünf Hero-Piktogramme: jeweils ca. 1,39 bis 1,43 MB
- Startseite: 27 gerenderte Bild-Elemente

Next.js optimiert viele `<Image>`-Elemente bei der Auslieferung. Das Podcast-Bild wird jedoch als CSS-Hintergrund eingebunden und umgeht diese Bildoptimierung.

**Aufgabe**

- [ ] Quelldateien auf sinnvolle Pixelmaße reduzieren.
- [ ] Fotos als hochwertiges WebP oder AVIF bereitstellen.
- [ ] Piktogramme mit transparentem Hintergrund stark verkleinern.
- [ ] Podcast-Hintergrund über `next/image` oder voroptimierte Datei ausliefern.
- [ ] Prüfen, ob Desktop- und Mobile-Hero doppelte Bilddownloads verursachen.
- [ ] Nur tatsächlich kritische Bilder mit `priority` vorladen.
- [ ] Bildbudget festlegen, zum Beispiel Zielgröße pro sichtbarem Foto und pro Icon.
- [ ] Nach Deployment LCP und Gesamtdatenmenge mobil messen.

**Abnahmekriterium**

- Keine dekorative Piktogrammdatei benötigt annähernd 1 MB.
- LCP liegt im Feld am 75. Perzentil unter 2,5 Sekunden.
- Es werden keine unnötigen, unsichtbaren Bildvarianten geladen.

### P1.13 Bild-SEO verbessern

**Befund**

Dateinamen wie `img-0071.jpg` oder `img-0139.jpg` sind für Bildersuche nicht aussagekräftig. Die englische Website zeigt weiterhin deutsch beschriftete Grafiken.

**Aufgabe**

- [ ] Aussagekräftige Dateinamen verwenden.
- [ ] Beispiele: `reltest-weibull-datenanalyse.jpg`, `zuverlaessigkeit-seminar.jpg`.
- [ ] Deutsche und englische Varianten beschrifteter Grafiken erstellen.
- [ ] Alt-Texte pro Sprache auf Bildfunktion und Kontext abstimmen.
- [ ] Fachgrafiken mit sichtbarer Bildunterschrift und erklärendem Text umgeben.
- [ ] Für wichtige Grafiken eigene Wissensseiten schaffen.
- [ ] Bild-URLs bei einem Relaunch möglichst stabil halten oder weiterleiten.

**Abnahmekriterium**

- Jede fachliche Grafik ist in der Seitensprache verfügbar und textlich eingeordnet.

### P1.14 Core Web Vitals nach Deployment messen

**Befund**

Ein lokaler Build kann echte Feldwerte nicht ersetzen. Hosting, CDN, Cache, Endgerät und Netzanbindung beeinflussen LCP, INP und CLS.

**Aufgabe**

- [ ] Lighthouse mobil und Desktop auf allen Seitentypen ausführen.
- [ ] PageSpeed Insights nach öffentlichem Deployment prüfen.
- [ ] Core Web Vitals in Search Console beobachten.
- [ ] Web-Vitals-Monitoring oder Real User Monitoring einrichten.
- [ ] Startseite, Leistungsseite, Wissensartikel und bildreiche Referenzseite getrennt prüfen.
- [ ] Performance-Budget in CI erwägen.
- [ ] LCP am 75. Perzentil für Mobil und Desktop auf höchstens 2,5 Sekunden begrenzen.
- [ ] INP am 75. Perzentil für Mobil und Desktop auf höchstens 200 Millisekunden begrenzen.
- [ ] CLS am 75. Perzentil für Mobil und Desktop auf höchstens 0,1 begrenzen.
- [ ] Serverantwortzeit, Bildgewicht, JavaScript-Menge und Drittanbieter-Skripte zusätzlich dokumentieren.
- [ ] Feldwerte und Labormessungen getrennt bewerten; Lighthouse allein gilt nicht als endgültiger Nachweis.

**Abnahmekriterium**

- LCP liegt am 75. Perzentil bei höchstens 2,5 Sekunden.
- INP liegt am 75. Perzentil bei höchstens 200 Millisekunden.
- CLS liegt am 75. Perzentil bei höchstens 0,1.
- Die Grenzwerte werden für Mobil und Desktop anhand realer Felddaten bewertet, sobald genügend Daten vorliegen.

### P1.15 Eigene 404-Seite und Crawl-Qualität sicherstellen

**Befund**

Es ist keine projektspezifische `not-found.tsx` vorhanden.

**Aufgabe**

- [ ] Hilfreiche 404-Seite mit Sucheinstiegen und Hauptleistungen erstellen.
- [ ] Echte nicht vorhandene URLs müssen 404 oder 410 liefern.
- [ ] Keine Soft-404-Seiten mit Status 200 erzeugen.
- [ ] Nach Go-live regelmäßig 404-Berichte aus Search Console und Serverlogs prüfen.

**Abnahmekriterium**

- Nicht vorhandene URLs liefern den korrekten Status und eine hilfreiche Nutzerseite.

### P1.16 Domain- und URL-Varianten vereinheitlichen

**Aufgabe**

- [ ] Eine bevorzugte Domain festlegen: `https://reltest-solutions.com`.
- [ ] HTTP dauerhaft auf HTTPS weiterleiten.
- [ ] `www` dauerhaft auf die bevorzugte Domain weiterleiten oder umgekehrt.
- [ ] Regeln für abschließende Slashes konsistent halten.
- [ ] Groß-/Kleinschreibungsvarianten auf Canonical-URLs normalisieren.
- [ ] Canonicals, Sitemap, Structured Data und Social URLs exakt gleich schreiben.

**Abnahmekriterium**

- Jede URL besitzt genau eine indexierbare Variante.

### P1.17 Analytics und Search Console sauber einrichten

**Befund**

Im Repository ist keine Mess- oder Search-Console-Integration erkennbar.

**Aufgabe**

- [ ] Google Search Console für alle relevanten Domainvarianten verifizieren.
- [ ] Bing Webmaster Tools einrichten.
- [ ] Datenschutzkonforme Analytics-Lösung auswählen.
- [ ] Consent-Anforderungen rechtlich prüfen.
- [ ] Conversions definieren: E-Mail, Telefon, Kontaktanfrage, Education-Klick, Podcast-Klick, Buch-Klick.
- [ ] Sprachversion und Landingpage als Dimensionen erfassen.
- [ ] Vor Relaunch aktuelle GSC-Daten exportieren: Klicks, Impressionen, Rankings, Seiten und Backlinks.

**Abnahmekriterium**

- Organischer Traffic und qualifizierte Anfragen sind pro Seite und Sprache messbar.

### P1.18 Mobile Nutzbarkeit und grundlegende Barrierefreiheit absichern

**Befund**

Die Website ist responsive aufgebaut. Eine systematische Abnahme für Mobile-First-Indexierung, Tastaturbedienung, Fokusführung, Kontraste und Formulare ist im bisherigen Audit jedoch noch nicht dokumentiert.

**Risiko**

- Wesentliche Inhalte oder Links fehlen in der mobilen Darstellung.
- Navigation und Dropdowns sind per Tastatur oder Touch schwer bedienbar.
- Kleine Klickflächen, schwache Kontraste oder fehlende Beschriftungen verschlechtern die Nutzung.
- Google indexiert primär die mobile Version und erhält dort möglicherweise weniger Inhalt als auf Desktop.

**Aufgabe**

- [ ] Sicherstellen, dass Mobil und Desktop dieselben wesentlichen Inhalte, Links, Metadaten und strukturierten Daten enthalten.
- [ ] Alle Seitentypen bei kleinen, mittleren und großen Viewports prüfen.
- [ ] Horizontales Scrollen und überlagerte Inhalte ausschließen.
- [ ] Navigation, Dropdowns, Sprachwechsel und Formulare per Touch und Tastatur vollständig bedienen können.
- [ ] Sichtbare Fokuszustände für Links, Buttons und Formularelemente gewährleisten.
- [ ] Sinnvolle Fokusreihenfolge und semantische HTML-Struktur prüfen.
- [ ] Farbkontraste nach WCAG 2.2 AA prüfen.
- [ ] Bedienelemente ausreichend groß und mit genügend Abstand gestalten.
- [ ] Formularfelder mit sichtbaren Labels, verständlichen Fehlermeldungen und Statusmeldungen versehen.
- [ ] Bilder mit passenden Alt-Texten ausstatten; dekorative Bilder erhalten leere Alt-Texte.
- [ ] Animationen bei `prefers-reduced-motion` reduzieren oder deaktivieren.
- [ ] Automatisierte Accessibility-Prüfung mit Lighthouse oder axe durch manuelle Tastatur- und Screenreader-Stichproben ergänzen.

**Abnahmekriterium**

- Auf Mobilgeräten fehlen keine SEO-relevanten Inhalte oder Links.
- Die Website ist ohne Maus vollständig navigierbar.
- Es bestehen keine kritischen WCAG-2.2-AA-Fehler.
- Navigation, Sprachwechsel, CTAs und Formulare funktionieren auf Touchgeräten ohne Überlagerungen.

## 7. P1/P2: Off-Page-SEO-Aufgaben

Eine öffentliche Suche kann kein vollständiges Backlink-Tool ersetzen. Für eine belastbare Bewertung werden zusätzlich Google Search Console, Bing Webmaster Tools oder ein professioneller Linkindex benötigt.

### P1.19 Vollständiges Backlink-Audit vor dem Relaunch durchführen

**Befund**

Öffentlich sichtbar sind bereits mehrere potenziell wertvolle Signale:

- LinkedIn-Unternehmensprofil
- Podcast-Auftritt von Kevin Lucan
- Springer-Fachbuch
- Universität-Stuttgart-Bezug und RAMS-Award
- fachliche Instituts- und Personenprofile
- separates Angebot RelTest Education

**Aufgabe**

- [ ] Backlinks aus Search Console exportieren.
- [ ] Ziel-URLs aller Links erfassen.
- [ ] Verlinkte Alt-URLs in der Redirect-Matrix priorisieren.
- [ ] Verlorene, kaputte oder auf HTTP zeigende Links identifizieren.
- [ ] Nach Go-live wichtige Partner um Aktualisierung auf die neue Ziel-URL bitten.
- [ ] Keine minderwertigen Massenlinks einkaufen.

**Abnahmekriterium**

- Alle bekannten wertvollen Backlink-Ziele bleiben erreichbar und relevant.

### P1.20 Unternehmensdaten auf allen Plattformen vereinheitlichen

**Befund**

Die neue Website nennt:

- RelTest Solutions GmbH
- Steglen 26, 71083 Herrenberg
- Beratung seit 2016

Öffentliche Suchergebnisse und Profile nennen teilweise:

- Esslingen am Neckar als Standort
- 2022 als Gründungsjahr der GmbH

**Aufgabe**

- [ ] Offiziellen Unternehmensnamen, Anschrift, Telefonnummer und Historie verbindlich festlegen.
- [ ] LinkedIn, Google Business Profile, Bing Places und relevante Verzeichnisse prüfen.
- [ ] Veraltete Standorte und Telefonnummern korrigieren.
- [ ] Unterschied zwischen Tätigkeit seit 2016 und GmbH-Gründung transparent machen.
- [ ] Daten in Website, Impressum und `Organization`-Schema synchron halten.

**Abnahmekriterium**

- Name, Address, Phone und Unternehmenshistorie sind auf allen wichtigen Plattformen konsistent.

### P1.21 RelTest Education und RelTest Solutions als zusammengehörige Marken verknüpfen

**Aufgabe**

- [ ] Von RelTest Solutions kontextuell zu RelTest Education verlinken.
- [ ] Von RelTest Education zurück zu RelTest Solutions und den Beratungsleistungen verlinken.
- [ ] Markenbeziehung textlich erklären.
- [ ] Unternehmens- und Markenschema konsistent modellieren.
- [ ] Keine künstlichen, sitewide keywordlastigen Links verwenden.

**Abnahmekriterium**

- Nutzer und Suchmaschinen erkennen eindeutig, wie Beratung und RelTest Education zusammengehören.

### P1.22 Bestehende Autorität aus Buch, Podcast und Hochschule stärker nutzen

**Aufgabe**

- [ ] Eigene Buchseite mit Autorenprofilen, Inhaltskontext und Springer-Link ausbauen.
- [ ] Podcast-Seite mit Zusammenfassung, Kernaussagen und Sprecherprofil erstellen.
- [ ] Universitäts-, Award- und Institutsbezüge mit korrekten Quellen dokumentieren.
- [ ] Prüfen, ob externe Profile auf aktuelle RelTest-Seiten verlinken.
- [ ] Wo sinnvoll um Aktualisierung oder Ergänzung bestehender Links bitten.
- [ ] Keine Logos oder Aussagen ohne Freigabe übernehmen.

**Abnahmekriterium**

- Die fachlichen Nachweise sind intern sichtbar und von externen Quellen nachvollziehbar.

### P2.23 Digital-PR- und Fachpublikationsplan aufbauen

**Aufgabe**

- [ ] Quartalsweise datenbasierte Fachbeiträge planen.
- [ ] Ergebnisse aus anonymisierten Analysen als Studien oder Benchmarks aufbereiten.
- [ ] Gastbeiträge in relevanten Fachmedien und Verbänden anstreben.
- [ ] Vorträge, Webinare und Konferenzbeiträge auf dauerhaften Landingpages dokumentieren.
- [ ] Grafiken und Checklisten als zitierfähige Ressourcen veröffentlichen.
- [ ] Für jeden Beitrag einen realistischen Outreach-Plan definieren.

**Geeignete Formate**

- Leitfäden
- technische Checklisten
- Ausfall- und Lebensdauerdaten-Studien
- DoE-Beispiele
- Webinar-Zusammenfassungen
- Experteninterviews
- kommentierte Normen- und Methodenübersichten

**Abnahmekriterium**

- Neue Links entstehen überwiegend durch fachlich zitierwürdige Inhalte, nicht durch Verzeichniseinträge.

### P2.24 Branchen- und Fachprofile gezielt pflegen

**Aufgabe**

- [ ] Relevante Hochschul-, Instituts-, Autoren-, Speaker- und Verbandsprofile erfassen.
- [ ] Profile mit korrekter Website, Rolle und Biografie aktualisieren.
- [ ] Fachlich relevante Unternehmensverzeichnisse priorisieren.
- [ ] Ungepflegte oder widersprüchliche Profile bereinigen.
- [ ] Linkqualität vor Quantität stellen.

### P2.25 Reputations- und Empfehlungsstrategie etablieren

**Aufgabe**

- [ ] Freigegebene Kundenstimmen systematisch einholen.
- [ ] Referenzgeber um konkrete Aussagen statt allgemeiner Werbesätze bitten.
- [ ] Google-Unternehmensprofil prüfen, falls für die Geschäftstätigkeit sinnvoll.
- [ ] Erwähnungen ohne Link regelmäßig erfassen und bei passenden Quellen höflich eine Verlinkung anfragen.
- [ ] Marken-Suchergebnisse regelmäßig kontrollieren.

## 8. Empfohlene Informationsarchitektur

Die endgültige Struktur sollte erst nach Keyword-, GSC- und Migrationsanalyse festgelegt werden. Ein möglicher Zielzustand:

```text
/de
  /leistungen
    /zuverlaessigkeitsberatung
    /design-of-experiments
    /lebensdauererprobung
    /felddatenanalyse
    /risikomanagement
    /entwicklungsbegleitung
  /weiterbildung
    /inhouse-schulungen
    /academy
  /wissen
    /planung
    /schwachstellenanalyse
    /absicherung
    /erprobung
    /prognosen
    /badewannenkurve
    /weibull-analyse
  /branchen
  /referenzen
  /unternehmen
    /team
  /literatur
  /kontakt
  /impressum
  /datenschutz
```

Die englische Struktur sollte semantisch äquivalent aufgebaut werden. Alte URLs werden permanent auf die jeweils passendste neue URL umgeleitet.

## 9. Empfohlene Umsetzungsreihenfolge

### Phase 1: Relaunch absichern

- [ ] GSC-, Analytics- und Backlink-Daten der alten Website exportieren.
- [ ] Alle 83 Alt-URLs bewerten.
- [ ] Zielstruktur final festlegen.
- [ ] Redirect-Matrix erstellen.
- [ ] Rechtstexte übernehmen.
- [ ] Metadaten, Canonicals und `hreflang` korrigieren.
- [ ] Sprachumschaltung und crawlbare HTML-Links prüfen.
- [ ] Sitemap und robots.txt implementieren.
- [ ] H1-Struktur bereinigen.
- [ ] mobile Nutzbarkeit und grundlegende Barrierefreiheit abnehmen.
- [ ] Core-Web-Vitals-Zielwerte in Mobil- und Desktop-Tests prüfen.
- [ ] Unfertige Inhalte auf `noindex` setzen oder fertigstellen.

### Phase 2: Sichtbarkeit aufbauen

- [ ] Kernleistungsseiten erstellen.
- [ ] DoE-Seite erstellen.
- [ ] Team- und Unternehmensseiten erstellen.
- [ ] Wissens-Hub mit ersten hochwertigen Fachartikeln veröffentlichen.
- [ ] strukturierte Daten und Social Cards ergänzen.
- [ ] Bilder optimieren.

### Phase 3: Autorität ausbauen

- [ ] Case Studies veröffentlichen.
- [ ] Backlinks aktualisieren und zurückgewinnen.
- [ ] externe Profile vereinheitlichen.
- [ ] RelTest Education, Podcast, Buch und Hochschulbezug stärker verbinden.
- [ ] Fachpublikations- und Digital-PR-Prozess etablieren.

## 10. Monitoring nach dem Go-live

### In den ersten 72 Stunden

- [ ] Sitemap einreichen.
- [ ] robots.txt testen.
- [ ] wichtige URLs mit URL-Prüfung kontrollieren.
- [ ] Redirects und 404-Logs prüfen.
- [ ] Canonicals und `hreflang` stichprobenartig validieren.

### In den ersten vier Wochen

- [ ] Indexierungsberichte mindestens wöchentlich prüfen.
- [ ] Rankings und Klicks alter Top-Seiten mit neuen Zielen vergleichen.
- [ ] 404, Soft-404 und Redirect-Fehler korrigieren.
- [ ] Core Web Vitals kontrollieren.
- [ ] Snippets und Titles in Suchergebnissen beobachten.

### Fortlaufend

- [ ] organische Leads statt nur Traffic bewerten
- [ ] neue Inhalte nach tatsächlichen Kundenfragen planen
- [ ] Backlinks und Markenerwähnungen prüfen
- [ ] Inhalte aktualisieren und Änderungsdatum nur bei echten Änderungen anpassen
- [ ] deutsche und englische Inhalte qualitativ synchron halten

## 11. Benötigte Zugänge und Daten

Für die endgültige Priorisierung werden benötigt:

- Google Search Console der bestehenden Domain
- vorhandenes Analytics-System
- Bing Webmaster Tools, falls vorhanden
- Liste wichtiger Leads und Conversion-Ziele
- Freigaben für Referenzen und Case Studies
- bestätigte Unternehmenshistorie und aktuelle Firmendaten
- Informationen zu Hosting und geplanter Produktionsdomain
- Zugriff auf relevante externe Profile

## 12. Quellen und Prüfgrundlagen

### Lokale Prüfung

- Produktions-Build der Next.js-Anwendung
- automatisierter Crawl aller 16 Sprach-URLs
- Quellcodeprüfung von Metadaten, Routing, Überschriften und Bildern
- Dateigrößenanalyse unter `public/`

### Bestehende Domain und öffentliche Signale

- `https://reltest-solutions.com/robots.txt`
- `https://reltest-solutions.com/sitemap_index.xml`
- `https://reltest-solutions.com/page-sitemap.xml`
- `https://reltest-solutions.com/post-sitemap.xml`
- `https://www.linkedin.com/company/reltest-solutions-gmbh/`
- `https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan`
- `https://link.springer.com/book/10.1007/978-3-662-65024-0`
- `https://www.ima.uni-stuttgart.de/en/institute/news/news/Dr.-Kevin-Lucan-wins-the-2020-RAMS-award/`

### Google- und Web-Standards

- Google: Internationalisierte Seiten und `hreflang`  
  `https://developers.google.com/search/docs/specialty/international/localized-versions`
- Google: Title Links  
  `https://developers.google.com/search/docs/appearance/title-link`
- Google: Snippets und Meta-Descriptions  
  `https://developers.google.com/search/docs/appearance/snippet`
- Google: Canonical-URLs  
  `https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls`
- Google: XML-Sitemaps  
  `https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap`
- Google: Organization Structured Data  
  `https://developers.google.com/search/docs/appearance/structured-data/organization`
- web.dev: Largest Contentful Paint optimieren  
  `https://web.dev/articles/optimize-lcp`

## 13. Einschränkung der Analyse

Diese Prüfung ist ein technischer und öffentlich sichtbarer SEO-Audit. Sie ersetzt noch nicht:

- historische Search-Console-Daten
- vollständige Keyword- und Wettbewerbsanalyse
- vollständigen Backlink-Index
- echte Core-Web-Vitals-Feldwerte der neuen Produktionsseite
- Logfile-Analyse
- rechtliche Prüfung der Pflichtseiten und Tracking-Lösung

Diese Daten sollten vor dem Relaunch ergänzt werden, insbesondere bevor alte Inhalte gelöscht oder URLs endgültig verändert werden.
