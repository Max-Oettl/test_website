# Wissensinventar der alten Website

Stand: 12. August 2026
Status: Inhaltlich und technisch in den neuen Wissensbereich übernommen; Validierung mit Search Console und Backlinkdaten vor dem Go-live offen

## Umsetzungsstand im neuen Projekt

Der Wissensbereich wurde auf Basis dieses Inventars neu aufgebaut und an das aktuelle Corporate Design angepasst. Dabei wurden die fachlichen Suchintentionen der alten WordPress-Seiten nicht in eine einzelne allgemeine Seite verdichtet, sondern als eigenständige, intern verlinkte Informationsziele erhalten.

Umgesetzt sind:

- die fachliche Übersicht zur Zuverlässigkeitstechnik,
- die fünf Themen Planung, Schwachstellenanalyse, Erprobung, Absicherung und Prognosen,
- eine eigenständige Wissensseite zu Design of Experiments,
- eine ergänzende Wissensseite zu technischem Risikomanagement,
- ein deutsch- und englischsprachiges Glossar mit sämtlichen 22 Begriffen des alten Glossars und zusätzlichen relevanten Begriffen,
- eindeutige Seitentitel, Beschreibungen, Canonicals und Sprachalternativen,
- direkte Redirects der bekannten alten Wissens-URLs auf die jeweils passende neue Informationsseite,
- in den Textfluss integrierte Bildplätze mit konkreten Briefings für die spätere Bildproduktion.

Die Wissensseiten sind bewusst als redaktionelle Fachseiten und nicht als Kopien der kommerziellen Solutions-Seiten aufgebaut. Noch offen sind die Prüfung realer Suchanfragen, Rankings und Backlinks in der Google Search Console sowie die spätere Erstellung und Optimierung der vorgesehenen Abbildungen.

## Zweck

Dieses Dokument erfasst die fachlichen Wissensinhalte der öffentlich
erreichbaren WordPress-Website `https://reltest-solutions.com/`. Es dient als
Entscheidungsgrundlage für die spätere Übernahme in den neuen Wissensbereich.

Das Ziel ist nicht, jede alte Seite unverändert zu kopieren. Bestehende
Suchsignale, Suchintentionen und fachliche Themen sollen jedoch erhalten und
auf der neuen Website besser strukturiert werden.

## Wichtige Einordnung

Die alte Website besitzt keinen einzelnen Menüpunkt „Wissen“. Fachwissen ist
auf mehrere Bereiche verteilt:

1. Zuverlässigkeitsprozess mit fünf Fachseiten
2. Design of Experiments
3. Glossar
4. Fachbeiträge und Webinare unter „Aktuelles“
5. Fachliche Inhalte innerhalb von Leistungs- und Seminarseiten

Die Bestandsaufnahme unterscheidet daher zwischen echten Wissensseiten,
fachlichen Beiträgen und kommerziellen Leistungsseiten mit Wissensanteilen.

## Kurzfazit

- Es gibt acht zentrale deutschsprachige Wissensziele: eine
  Zuverlässigkeitsübersicht, fünf Fachseiten, eine DoE-Seite und das Glossar.
- Eine zusätzliche, nahezu leere DoE-Seite erzeugt ein technisches und
  inhaltliches Doppelungsrisiko.
- Für die Zuverlässigkeitstechnik existieren sechs englische Seiten:
  Übersichtsseite plus fünf Fachseiten.
- Das alte Glossar enthält 22 Begriffe. Alle Begriffe wurden übernommen und
  um weitere fachlich relevante Begriffe ergänzt.
- Drei deutschsprachige Fachbeiträge besitzen einen dauerhaften Wissenswert:
  Smart Data, effiziente Lebensdauertestplanung und beschleunigte
  Lebensdauertests. Englische Gegenstücke sind vorhanden.
- Die vorhandenen Redirects sind eine gute technische Grundlage, müssen für
  die Wissensmigration aber inhaltlich noch geprüft werden.
- Eine belastbare Priorisierung nach Klicks, Rankings und Backlinks ist erst
  mit Google Search Console und Backlinkdaten möglich.

## A. Zentrale Wissensseiten auf Deutsch

Die Wortzahlen sind Näherungswerte aus den öffentlich ausgelieferten
WordPress-Inhalten. Sie dienen nur zur Einordnung und nicht als Qualitätsmaß.

| ID | Alter Inhalt | Alte URL | Umfang | Suchintention und Kernthemen | Aktueller Stand im neuen Projekt | Vorläufige Empfehlung |
| --- | --- | --- | ---: | --- | --- | --- |
| W01 | Zuverlässigkeitstechnik / Zuverlässigkeitsprozess | `/zuverlaessigkeitstechnik/` | ca. 597 Wörter | Definition von Zuverlässigkeit, Reliability Engineering, Überblick über Planung, Schwachstellenanalyse, Erprobung, Absicherung und Prognose | Eigene Fachübersicht unter `/de/wissen/zuverlaessigkeitstechnik`; direkter Redirect eingerichtet | **Umgesetzt:** Informations- und Leistungsintention sind getrennt. |
| W02 | Zuverlässigkeitsplanung | `/zuverlaessigkeitstechnik/planung/` | ca. 319 Wörter | Anforderungen, Kunden- und Gesetzgebervorgaben, Produktstrategie, Entscheidungsraum, Top-down- und Bottom-up-Planung | `/de/wissen/planung` vorhanden | **P0:** Als eigenständige Wissensseite erhalten und inhaltliche Gleichwertigkeit prüfen. |
| W03 | Schwachstellenanalyse | `/zuverlaessigkeitstechnik/schwachstellenanalyse/` | ca. 365 Wörter | Frühe Schwachstellenerkennung, Zuverlässigkeitsverbesserung, FMEA, FTA und HALT | `/de/wissen/schwachstellenanalyse` vorhanden | **P0:** Als eigenständige Wissensseite erhalten. FMEA, FTA und HALT müssen fachlich sichtbar bleiben. |
| W04 | Zuverlässigkeitserprobung | `/zuverlaessigkeitstechnik/erprobung/` | ca. 267 Wörter | Erprobungsstrategie, Lebensdauer- und Funktionstests, Last- und Nutzungskollektive, Produktlebenszyklus | `/de/wissen/erprobung` vorhanden | **P0:** Als eigenständige Wissensseite erhalten. Abgrenzung zur kommerziellen Leistung „Test & Datenanalyse“ klar halten. |
| W05 | Zuverlässigkeitsabsicherung | `/zuverlaessigkeitstechnik/absicherung/` | ca. 349 Wörter | Qualitative und quantitative Absicherung, Mechanik, Elektronik und Software, Anforderungsnachweis | `/de/wissen/absicherung` vorhanden | **P0:** Als eigenständige Wissensseite erhalten. Nachweisführung und Systembezug nicht verkürzen. |
| W06 | Zuverlässigkeitsprognose | `/zuverlaessigkeitstechnik/prognosen/` | ca. 259 Wörter | Versuchs- und Felddaten, statistische Analyse, Lebensdauermodelle, Belastungs-Lebensdauer-Zusammenhang | `/de/wissen/prognosen` vorhanden | **P0:** Als eigenständige Wissensseite erhalten. Felddaten, Modellbildung und Unsicherheit sollten deutlich behandelt werden. |
| W07 | Design of Experiments | `/design-of-experiments/` | ca. 670 Wörter | Statistische Versuchsplanung, Faktoren, Faktorstufen, Störgrößen, Auswertung, Effizienz, Qualität und Robustheit | Wissensseite `/de/wissen/design-of-experiments` und getrennte Solutions-Seite vorhanden; Alt-Redirect führt auf die Wissensseite | **Umgesetzt:** Informations- und Leistungsintention sind getrennt. Search-Console-Daten vor Go-live noch kontrollieren. |
| W08 | Glossar | `/glossar/` | 22 gelistete Begriffe | Begriffserklärungen rund um Reliability Engineering, Lebensdauer, Ausfälle, Verfügbarkeit und Analyseverfahren | `/de/glossar` enthält den vollständigen Altbestand und zusätzliche Begriffe | **Umgesetzt:** Gemeinsame Glossarseite mit stabilen Sprungmarken. |
| W09 | Zweite DoE-Seite | `/design-of-experiments-doe/` | ca. 1 Wort | Kein eigenständiger sichtbarer Mehrwert | Historische Varianten leiten direkt auf `/de/wissen/design-of-experiments` | **Umgesetzt:** Keine dünne Doppelseite und keine Redirectkette. |

## B. Glossarbegriffe der alten Website

Das alte Glossar listet folgende 22 Begriffe:

| Buchstabe | Begriffe |
| --- | --- |
| A | Ausfallmechanismus, Ausfallrate |
| B | B10-Lebensdauer, Badewannenkurve |
| D | Design for Reliability (DfR), Design of Experiments (DOE) |
| E | Ermüdungsausfall |
| F | Fault Tree Analysis (FTA), Frühausfall |
| L | Lebensdaueranalyse, Lebensdauermodell |
| M | Maintainability, Mean Time Between Failures (MTBF), Mean Time To Repair (MTTR) |
| P | Prognostics and Health Management (PHM) |
| R | Reliability Block Diagram (RBD), Reliability Engineering, Root Cause Analysis (RCA) |
| S | Stress Screening, Systemverfügbarkeit |
| V | Verschleißausfall |
| W | Weibull-Analyse |

### Abgleich mit dem neuen Glossar

Der vollständige Altbestand ist inzwischen in einer gemeinsamen, alphabetisch
gegliederten Glossarseite enthalten. Ergänzt wurden unter anderem
Zuverlässigkeit, Lebensdauer, MTTF, FMEA und Health Monitoring. Die Begriffe
werden bewusst nicht als viele dünne Einzel-URLs veröffentlicht. Ob einzelne
Themen später eine eigene Fachseite erhalten, wird erst anhand von
Search-Console-Daten, fachlichem Erklärungsbedarf und möglicher
Keyword-Kannibalisierung entschieden.

## C. Fachbeiträge und Webinare

Diese Inhalte liegen auf der alten Website unter „Aktuelles“, besitzen aber
einen fachlichen, längerfristigen Wissenswert.

| ID | Inhalt | Alte URL | Umfang | Neue Abdeckung | Empfehlung |
| --- | --- | --- | ---: | --- | --- |
| B01 | Smart Data: der neue Ansatz für das Produktdesign | `/smart-data-der-neue-ansatz-fuer-das-produktdesign-von-martin-dazer/` | ca. 452 Wörter | `/de/aktuelles/smart-data-produktdesign` vorhanden | Als Fachbeitrag erhalten; später aus passenden Wissens- und Leistungsseiten intern verlinken. |
| B02 | Effiziente Lebensdauertestplanung | `/unser-aktuelles-webinar-zum-thema-effiziente-lebensdauertestplanung/` | ca. 199 Wörter | `/de/aktuelles/webinar-effiziente-lebensdauertestplanung` vorhanden | Inhalt fachlich ausbauen oder mit einer stärkeren Fachseite zur Testplanung verbinden. |
| B03 | Beschleunigte Lebensdauertests | `/webinar-beschleunigte-lebensdauertests/` | ca. 140 Wörter | `/de/aktuelles/webinar-beschleunigte-lebensdauertests` vorhanden | Als Beitrag erhalten; sinnvoll mit Erprobung, Lebensdaueranalyse und DoE verknüpfen. |
| B04 | RAMS-Award | `/rams-award/` | ca. 75 Wörter | `/de/aktuelles/rams-award` vorhanden | Eher News- und Expertise-Signal als zentrale Wissensseite. Nicht künstlich in den Wissensbereich verschieben. |

Der Beitrag zur Kooperation mit Holland Innovative ist eine Unternehmens- und
Kooperationsmeldung. Er wird deshalb nicht als Kernbestand des
Wissensbereichs eingeordnet.

## D. Englische Wissensseiten

Für den Zuverlässigkeitsprozess existiert eine vollständige englische
Grundstruktur:

| Alter Inhalt | Alte URL | Aktuelles Ziel im neuen Projekt |
| --- | --- | --- |
| Reliability Engineering | `/en/reliability-engineering/` | `/en/wissen/zuverlaessigkeitstechnik` |
| Reliability Planning | `/en/reliability-engineering/reliability-planning/` | `/en/wissen/planung` |
| Vulnerability Analysis | `/en/reliability-engineering/vulnerability-analysis/` | `/en/wissen/schwachstellenanalyse` |
| Reliability Testing | `/en/reliability-engineering/reliability-testing/` | `/en/wissen/erprobung` |
| Reliability Assurance | `/en/reliability-engineering/reliability-assurance/` | `/en/wissen/absicherung` |
| Reliability Forecast | `/en/reliability-engineering/reliability-forecast/` | `/en/wissen/prognosen` |

Außerdem existieren englische Gegenstücke zu Smart Data, den beiden
Lebensdauertest-Webinaren und dem RAMS-Award.

In der alten öffentlichen Sitemap wurden keine eigenständige englische
DoE-Hauptseite und kein englisches Glossar gefunden. Die neue Website kann
diese Lücke sinnvoll schließen, muss dann aber konsistente englische Inhalte,
Canonicals und `hreflang`-Verweise bereitstellen.

## E. Fachliche Inhalte, die keine eigenen Wissensziele werden sollten

Folgende Seiten enthalten Fachtext, verfolgen aber primär eine kommerzielle
oder transaktionale Suchintention:

- Zuverlässigkeitsmanagement
- Consulting, Coaching und Training im Zuverlässigkeitsmanagement
- DoE Consulting, DoE Coaching und DoE Training
- Seminarübersicht
- Zuverlässigkeit und Erprobung für Praktiker
- Praxisorientierte statistische Versuchsplanung
- Entwicklung und Absicherung elektronischer Komponenten

Die fachlich wertvollen Aussagen daraus dürfen in Wissensseiten einfließen.
Die Seiten sollten aber nicht ungeprüft als zusätzliche Wissensartikel
dupliziert werden. Wissensseite, Leistung und Education-Angebot benötigen je
eine klar unterscheidbare Suchintention:

- **Wissen:** Was ist die Methode, wann wird sie eingesetzt und wie wird sie
  technisch eingeordnet?
- **Leistung:** Wobei übernimmt RelTest konkrete Projektarbeit und welches
  Ergebnis erhält der Kunde?
- **Education:** Welche Inhalte werden in welchem Lernformat vermittelt?

## F. Wichtigste SEO-Risiken vor der Umsetzung

### 1. DoE-Zielseite ist festgelegt

Die alte DoE-Seite kombiniert Fachinformation und Leistungsangebot. Der alte
Pfad führt nun auf die neue DoE-Wissensseite. Das konkrete Beratungsangebot
bleibt als getrennte Solutions-Seite erhalten. Die Zuordnung wird vor dem
Go-live noch mit Search-Console-Daten kontrolliert.

### 2. Die Themenbreite des Glossars ist geschützt

Die 22 alten Begriffe sind vollständig übernommen und fachlich erweitert. Das
Risiko eines Verlusts der bisherigen Long-Tail-Abdeckung ist damit inhaltlich
adressiert.

### 3. Die Suchintention der Übersichtsseite bleibt erhalten

Die alte Zuverlässigkeitstechnik-Seite führt auf eine eigenständige fachliche
Übersicht. Die kommerzielle Solutions-Seite ist separat verlinkt und muss
nicht gleichzeitig die Informationsintention erfüllen.

### 4. Rankings und Backlinks sind noch nicht bewertet

Die inhaltliche Analyse zeigt Relevanz, aber keine tatsächlichen
Google-Klicks, Impressionen, Ranking-Keywords oder Backlinks. Vor finalen
Zusammenführungen werden benötigt:

- Google-Search-Console-Export nach Seiten und Suchanfragen
- idealerweise 16 Monate Vergleichszeitraum
- Backlinkexport für alte Wissens-URLs
- Zugriffe aus Analytics, sofern vorhanden

### 5. Deutsche und englische Seiten müssen paarweise funktionieren

Jede indexierbare Sprachversion braucht:

- einen selbstreferenziellen Canonical
- korrektes `hreflang` für Deutsch und Englisch
- ein `x-default`
- eine inhaltlich echte Übersetzung
- eine passende Sprachumschaltung auf die entsprechende Fachseite

## G. Umgesetzte Wissensstruktur

1. Wissensübersicht
2. Zuverlässigkeitstechnik
3. Zuverlässigkeitsplanung
4. Schwachstellenanalyse
5. Zuverlässigkeitserprobung
6. Zuverlässigkeitsabsicherung
7. Zuverlässigkeitsprognose und Lebensdauermodelle
8. Design of Experiments
9. Risikomanagement als neues, ergänzendes Thema
10. Glossar
11. Fachbeiträge und Webinare

Die fünf Bereiche Planung, Schwachstellenanalyse, Erprobung, Absicherung und
Prognose müssen nicht als starre nummerierte Prozesskette dargestellt werden.
Sie können als eigenständig nutzbare Fachfelder erscheinen und bleiben
dadurch später erweiterbar.

## H. Noch offene Prüfungen

- Search-Console- und Backlinkdaten vor dem Go-live gegen die Redirectziele
  prüfen.
- Für die vorgesehenen Bildplätze fachlich korrekte Grafiken erstellen,
  komprimieren und mit aussagekräftigen Alt-Texten versehen.
- Nach dem Go-live Indexierung, hreflang-Verarbeitung, Rankings und 404-Fehler
  überwachen.
- Später datenbasiert entscheiden, ob einzelne Glossarbegriffe eine eigene
  Fachseite benötigen.

## Quellen und Prüfmethode

Analysiert wurden:

- öffentliche WordPress-Sitemaps
- Haupt- und Footer-Navigation
- öffentlich ausgelieferte WordPress-REST-Daten
- Seitentitel, Meta Descriptions, H1- und Zwischenüberschriften
- sichtbare Inhalte und ungefähre Textumfänge
- bestehende Redirectkonfiguration im neuen Next.js-Projekt
- bereits vorhandene neue Wissens- und Glossarseiten

Zentrale öffentliche Quellen:

- [Zuverlässigkeitstechnik](https://reltest-solutions.com/zuverlaessigkeitstechnik/)
- [Zuverlässigkeitsplanung](https://reltest-solutions.com/zuverlaessigkeitstechnik/planung/)
- [Schwachstellenanalyse](https://reltest-solutions.com/zuverlaessigkeitstechnik/schwachstellenanalyse/)
- [Zuverlässigkeitserprobung](https://reltest-solutions.com/zuverlaessigkeitstechnik/erprobung/)
- [Zuverlässigkeitsabsicherung](https://reltest-solutions.com/zuverlaessigkeitstechnik/absicherung/)
- [Zuverlässigkeitsprognose](https://reltest-solutions.com/zuverlaessigkeitstechnik/prognosen/)
- [Design of Experiments](https://reltest-solutions.com/design-of-experiments/)
- [Glossar](https://reltest-solutions.com/glossar/)
- [Smart Data im Produktdesign](https://reltest-solutions.com/smart-data-der-neue-ansatz-fuer-das-produktdesign-von-martin-dazer/)
- [Effiziente Lebensdauertestplanung](https://reltest-solutions.com/unser-aktuelles-webinar-zum-thema-effiziente-lebensdauertestplanung/)
- [Beschleunigte Lebensdauertests](https://reltest-solutions.com/webinar-beschleunigte-lebensdauertests/)

## Abgrenzung

Diese Analyse bewertet öffentlich sichtbare Inhalte und technische
Migrationspfade. Sie ersetzt keine Auswertung aus Google Search Console,
Analytics oder einem professionellen Backlinktool. Deshalb sind die genannten
Prioritäten vorläufige SEO- und Inhaltsprioritäten, keine Aussage über
tatsächlichen aktuellen Traffic.
