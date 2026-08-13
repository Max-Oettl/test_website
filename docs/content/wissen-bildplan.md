# Bildkonzept Wissen

## Ziel

Der Wissensbereich verwendet keine dekorativen Pseudo-Diagramme. Jede Grafik muss eine konkrete technische Aussage erklaeren, im zugehoerigen Text eingefuehrt werden und als eigenstaendige PNG-Datei vorliegen.

Die Diagramme werden reproduzierbar mit `scripts/generate-knowledge-pngs.mjs` erzeugt. Die Quelldaten sind bewusst schematische Beispieldaten und werden in jeder Grafik als solche gekennzeichnet. Sie duerfen nicht als reale Kunden-, Feld- oder Versuchsdaten verstanden werden.

## Gestaltungsregeln

- Ausgabeformat: PNG, 1.800 x 1.125 Pixel
- Marineblau `#142452`, Stahlcyan `#2EA1CF`, helle Blautoene und Graphit
- kein Gold, keine Ampelfarben ohne fachliche Bedeutung
- klare Achsen, Einheiten, Legenden und technische Annotationen
- keine Dashboards, keine dekorativen UI-Karten und keine erfundenen Kennzahlen
- deutsche und englische Grafiken werden getrennt erzeugt
- Bildunterschrift und Fliesstext erklaeren, was aus dem Diagramm abgelesen werden kann

## Geplante Visuals

| Wissensthema | Leitvisual | Erklaergrafik |
| --- | --- | --- |
| Zuverlaessigkeitstechnik | Systemkontext aus Anforderung, Last, Nachweis und Entscheidung | Badewannenkurve mit Frueh-, Zufalls- und Verschleissausfaellen |
| Planung | Allokation eines Systemziels auf Subsysteme | Top-down-Ziel und Bottom-up-Prognose im Abgleich |
| Schwachstellenanalyse | Pareto-Diagramm technischer Ausfallmechanismen | Fehlerbaum und FMEA-Wirkungskette im Vergleich |
| Erprobung | Ueberfuehrung eines Feldlastsignals in ein Pruefprofil | Vergleich von Feld- und Pruefschaedigung |
| Absicherung | Durchgaengige Nachweiskette von Anforderung bis Freigabe | Traceability-Matrix fuer Risiko, Methode und Evidenz |
| Prognosen | Weibull-Wahrscheinlichkeitsnetz mit zensierten Daten | Ueberlebensfunktion mit B10 und Unsicherheitsband |
| Design of Experiments | Konturplot mit Versuchsplan und Zielbereich | Haupteffekte und Wechselwirkung zweier Faktoren |
| Risikomanagement | Risikomatrix vor und nach Massnahmen | Bow-Tie-Darstellung aus Ursachen, Barrieren und Folgen |

## Einbindung

Die Zuordnung erfolgt in `app/_content/knowledge-visuals.ts`. Die Wissensuebersicht muss alle acht Themen sichtbar und direkt verlinkt enthalten. Die Grafiken werden ueber `next/image` mit festen Seitenverhaeltnissen eingebunden.
