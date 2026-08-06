# Wissensinventar der alten Website

Stand: 31. Juli 2026  
Status: Analyse zur Sichtung, noch keine Freigabe zur Umsetzung

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
- Das alte Glossar enthält 22 Begriffe. Das neue Glossar enthält aktuell nur
  neun Begriffe und deckt einen großen Teil des Altbestands nicht ab.
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
| W01 | Zuverlässigkeitstechnik / Zuverlässigkeitsprozess | `/zuverlaessigkeitstechnik/` | ca. 597 Wörter | Definition von Zuverlässigkeit, Reliability Engineering, Überblick über Planung, Schwachstellenanalyse, Erprobung, Absicherung und Prognose | Redirect zeigt aktuell auf `/de/leistungen/zuverlaessigkeitstechnik`; zusätzlich existiert `/de/wissen` | **P0:** Informations- und Leistungsintention sauber trennen. Prüfen, ob eine eigene Fachübersicht benötigt wird oder die Leistungsseite den bisherigen Informationswert vollständig trägt. |
| W02 | Zuverlässigkeitsplanung | `/zuverlaessigkeitstechnik/planung/` | ca. 319 Wörter | Anforderungen, Kunden- und Gesetzgebervorgaben, Produktstrategie, Entscheidungsraum, Top-down- und Bottom-up-Planung | `/de/wissen/planung` vorhanden | **P0:** Als eigenständige Wissensseite erhalten und inhaltliche Gleichwertigkeit prüfen. |
| W03 | Schwachstellenanalyse | `/zuverlaessigkeitstechnik/schwachstellenanalyse/` | ca. 365 Wörter | Frühe Schwachstellenerkennung, Zuverlässigkeitsverbesserung, FMEA, FTA und HALT | `/de/wissen/schwachstellenanalyse` vorhanden | **P0:** Als eigenständige Wissensseite erhalten. FMEA, FTA und HALT müssen fachlich sichtbar bleiben. |
| W04 | Zuverlässigkeitserprobung | `/zuverlaessigkeitstechnik/erprobung/` | ca. 267 Wörter | Erprobungsstrategie, Lebensdauer- und Funktionstests, Last- und Nutzungskollektive, Produktlebenszyklus | `/de/wissen/erprobung` vorhanden | **P0:** Als eigenständige Wissensseite erhalten. Abgrenzung zur kommerziellen Leistung „Test & Datenanalyse“ klar halten. |
| W05 | Zuverlässigkeitsabsicherung | `/zuverlaessigkeitstechnik/absicherung/` | ca. 349 Wörter | Qualitative und quantitative Absicherung, Mechanik, Elektronik und Software, Anforderungsnachweis | `/de/wissen/absicherung` vorhanden | **P0:** Als eigenständige Wissensseite erhalten. Nachweisführung und Systembezug nicht verkürzen. |
| W06 | Zuverlässigkeitsprognose | `/zuverlaessigkeitstechnik/prognosen/` | ca. 259 Wörter | Versuchs- und Felddaten, statistische Analyse, Lebensdauermodelle, Belastungs-Lebensdauer-Zusammenhang | `/de/wissen/prognosen` vorhanden | **P0:** Als eigenständige Wissensseite erhalten. Felddaten, Modellbildung und Unsicherheit sollten deutlich behandelt werden. |
| W07 | Design of Experiments | `/design-of-experiments/` | ca. 670 Wörter | Statistische Versuchsplanung, Faktoren, Faktorstufen, Störgrößen, Auswertung, Effizienz, Qualität und Robustheit | Wissensseite `/de/wissen/design-of-experiments` und Leistungsseite `/de/leistungen/design-of-experiments` vorhanden; Alt-Redirect zeigt aktuell auf die Leistungsseite | **P0:** Ein kanonisches Informationsziel und eine klar getrennte Leistungsseite festlegen. Das Redirectziel erst nach Prüfung der alten Suchintention finalisieren. |
| W08 | Glossar | `/glossar/` | 22 gelistete Begriffe | Begriffserklärungen rund um Reliability Engineering, Lebensdauer, Ausfälle, Verfügbarkeit und Analyseverfahren | `/de/glossar` vorhanden, aktuell nur 9 Einträge | **P0:** Alten Begriffsbestand mindestens vollständig abdecken und anschließend fachlich erweitern. |
| W09 | Zweite DoE-Seite | `/design-of-experiments-doe/` | ca. 1 Wort | Kein eigenständiger sichtbarer Mehrwert | Alter Pfad `/glossar/design-of-experiments-doe/` leitet hierhin; neue Redirectkonfiguration zeigt auf die DoE-Leistungsseite | **P0:** Nicht als eigene Seite übernehmen. Historische Varianten direkt auf das final gewählte DoE-Ziel weiterleiten und Redirectketten vermeiden. |

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

Das neue Glossar enthält aktuell:

- Zuverlässigkeit
- Lebensdauer
- B10-Wert
- MTTF
- Weibull-Analyse
- DoE
- FMEA
- FTA
- Health Monitoring

Damit sind mehrere sinnvolle neue Begriffe vorhanden. Aus dem alten Glossar
fehlen jedoch noch wesentliche Themen, insbesondere:

- Ausfallmechanismus und Ausfallrate
- Badewannenkurve
- Design for Reliability
- Ermüdungs-, Früh- und Verschleißausfälle
- Lebensdaueranalyse und Lebensdauermodell
- Maintainability, MTBF und MTTR
- PHM
- Reliability Block Diagram
- Reliability Engineering
- Root Cause Analysis
- Stress Screening
- Systemverfügbarkeit

### Vorläufige Empfehlung zum Glossar

- Zunächst eine starke Glossar-Sammelseite mit stabilen Sprungmarken je Begriff
  aufbauen.
- Begriffe nicht automatisch als 22 dünne Einzelseiten veröffentlichen.
- Für suchstarke und erklärungsbedürftige Themen können später eigenständige
  Fachseiten entstehen, zum Beispiel Weibull-Analyse, Badewannenkurve,
  Lebensdaueranalyse, MTBF/MTTR, PHM und Systemverfügbarkeit.
- Vor einer Aufteilung in Einzel-URLs Search-Console-Daten und Backlinks
  prüfen, damit keine künstliche Keyword-Kannibalisierung entsteht.

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
| Reliability Engineering | `/en/reliability-engineering/` | `/en/leistungen/zuverlaessigkeitstechnik` |
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

### 1. DoE-Zielseite ist noch nicht eindeutig

Die alte DoE-Seite kombiniert Fachinformation und Leistungsangebot. Im neuen
Projekt existieren bereits eine Wissens- und eine Leistungsseite. Der aktuelle
Redirect führt zur Leistungsseite. Ohne Search-Console-Daten ist noch nicht
belegt, ob dies für die bisherigen Suchanfragen das beste Ziel ist.

### 2. Das Glossar verliert derzeit Themenbreite

Eine Reduktion von 22 alten auf 9 neue Begriffe kann thematische Relevanz und
Long-Tail-Abdeckung verlieren. Der Altbestand sollte vor dem Go-live
vollständig aufgenommen oder pro Begriff bewusst bewertet werden.

### 3. Übersichtsseite wechselt ihre Suchintention

Die alte Zuverlässigkeitstechnik-Seite ist eine umfangreiche fachliche
Übersicht. Das aktuelle Redirectziel ist eine Leistungsseite. Diese Zuordnung
kann funktionieren, wenn Inhalt und Suchintention erhalten bleiben; sie muss
aber bewusst geprüft werden.

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

## G. Vorläufige Empfehlung zur neuen Wissensstruktur

Diese Struktur ist eine Empfehlung zur Sichtung, noch keine
Umsetzungsfreigabe:

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

## H. Entscheidungen für die gemeinsame Sichtung

Vor der Umsetzung sollten folgende Punkte entschieden werden:

- Soll die alte Zuverlässigkeitstechnik-Übersicht als eigene Wissensseite
  erhalten bleiben oder vollständig in der Leistungsseite aufgehen?
- Soll die alte DoE-URL auf die neue Wissensseite oder auf die Leistungsseite
  weiterleiten?
- Sollen alle 22 Glossarbegriffe sofort übernommen werden?
- Welche Glossarbegriffe verdienen später eine eigene Fachseite?
- Sollen die drei Fachbeiträge im Bereich „Aktuelles“ bleiben oder unter
  „Wissen“ zusätzlich kuratiert und verlinkt werden?
- Soll die englische Wissensstruktur gleichzeitig vollständig ausgebaut
  werden?

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
