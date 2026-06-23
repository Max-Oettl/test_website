# URL-Migrationsmatrix

Stand: 21. Juni 2026

## Zweck

Diese Datei ist die Arbeitsgrundlage für die Migration von der aktuellen
WordPress-Website auf die neue Next.js-Website.

Jede relevante alte URL muss vor dem Go-live bewertet und einer Maßnahme
zugeordnet werden.

## Grundregel

Keine alte URL wird unbewusst entfernt.

Für jede URL gilt:

- behalten
- verbessern
- zusammenführen
- per `301` weiterleiten
- bewusst entfernen
- auf `noindex` setzen, wenn sie erreichbar bleiben, aber nicht indexiert
  werden soll

## Status der Matrix

Erste technische Migrationswelle umgesetzt.

Auf Basis der öffentlichen Sitemaps der aktuellen WordPress-Website wurden
83 URLs erfasst. Die daraus abgeleiteten Redirects sind technisch in
`next.config.ts` hinterlegt. Die lokale Crawl-Datei liegt als Arbeitsartefakt
unter `tmp/live-url-inventory.json`.

Wichtig:

- Diese erste Welle deckt die öffentlich sichtbaren Sitemap-URLs ab.
- Lokaler Redirect-Check nach `next build` und `next start`: 83 von 83
  bekannten Alt-URLs liefern entweder `200` oder `301`, keine getestete URL
  fällt in `404`.
- Search Console, Analytics und Backlinkdaten sind weiterhin erforderlich, um
  nicht gelistete, aber SEO-relevante URLs zu erkennen.
- Die Matrix bleibt vor Go-live zu prüfen und um Datenwerte wie Klicks,
  Impressionen und Backlinks zu ergänzen.

Weitere Daten werden ergänzt, sobald sie aus folgenden Quellen vorliegen:

- öffentliche Sitemaps der aktuellen Website
- Google Search Console
- Analytics
- Backlinkdaten
- WordPress-Export
- manuelle Sichtung wichtiger Inhalte

## Vorlage

| Alte URL | Sprache | Seitentyp | Status alt | SEO-Wert | Search-Console-Daten | Backlinks | Neue Ziel-URL | Maßnahme | Priorität | Notiz |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `https://reltest-solutions.com/` | DE | Startseite | 200 | hoch | offen | offen | `/de` oder finale Startseiten-URL | 301 oder beibehalten | P0 | Hauptdomain-Strategie klären |

## Maßnahmencodes

| Code | Bedeutung |
| --- | --- |
| behalten | URL bleibt identisch oder nahezu identisch erhalten |
| verbessern | Inhalt bleibt, wird aber überarbeitet |
| zusammenführen | Inhalt geht in einer stärkeren Zielseite auf |
| 301 | permanente Weiterleitung auf passende neue URL |
| 410 | bewusst entfernt, kein Ersatz sinnvoll |
| noindex | erreichbar, aber nicht für Suchmaschinen gedacht |

## Prioritäten

| Priorität | Bedeutung |
| --- | --- |
| P0 | Muss vor Go-live geklärt sein |
| P1 | Sollte vor Go-live geklärt sein |
| P2 | Kann nach Go-live nachgezogen werden |

## Bewertung des SEO-Werts

| Wert | Bedeutung |
| --- | --- |
| hoch | Klicks, Impressionen, Backlinks oder zentrale Leistung |
| mittel | fachlich relevant, aber unklare oder moderate SEO-Daten |
| niedrig | geringe Relevanz, interne Seite, Archiv oder veralteter Inhalt |
| unbekannt | Daten fehlen noch |

## Arbeitsregel

Wenn eine URL in Search Console oder Backlinkdaten relevant ist, darf sie nicht
pauschal auf die Startseite weitergeleitet werden. Sie braucht eine fachlich
passende Zielseite oder eine bewusste Entscheidung.
