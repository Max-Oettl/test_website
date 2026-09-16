# URL-Migrationsmatrix

Stand: 15. September 2026

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

Am 15. September 2026 erneut gegen die vier öffentlichen WordPress-Sitemaps
und einen lokalen Produktionsbuild geprüft: 83 Alt-URLs (70 Seiten, 10 Beiträge,
2 Kategorien, 1 Autorenarchiv). Alle liefern genau einen 301 auf ein Ziel mit 200;
keine Redirect-Kette und kein defektes Ziel in dieser Stichmenge.

Die neue Website umfasst 104 Inhaltsseiten (52 DE, 52 EN). Die aktuellen
öffentlichen Sitemaps enthalten gegenüber dem früheren Inventar keine weiteren
URLs. Das belegt nicht die Vollständigkeit außerhalb der öffentlichen Sitemaps:
Search-Console-, Analytics-, Backlink- und WordPress-Exporte fehlen weiterhin.

Die neue Website bleibt standardmäßig für Crawler gesperrt, auch bei einem
Vercel-Production-Deployment. Es wurde kein Deployment und kein DNS-Wechsel
durchgeführt. Siehe [Prüfbericht](reviews/2026-09-15-prelaunch-audit.md).

## Festgelegte Zielentscheidungen

- Der neue Auftritt enthält bewusst keinen Karrierebereich. Die bisherigen
  Karriere-URLs werden per `301` auf die jeweilige Sprachversion von
  `Wir sind RelTest` weitergeleitet und nicht in der XML-Sitemap geführt.
- `/de|en/weiterbildung/seminare` und `/de|en/weiterbildung/academy` sind
  reine Weiterleitungsziele in die Education-Seite und deshalb nicht als
  eigenständige Sitemap-URLs gelistet.
- Die deutsche News-Struktur bleibt unter `/de/aktuelles/...`; die englische
  Struktur verwendet kanonisch `/en/news/...`.
- Alle öffentlichen englischen URLs verwenden englische Slugs, zum Beispiel
  `/en/services`, `/en/knowledge`, `/en/industries`, `/en/about-us`,
  `/en/contact`, `/en/legal-notice` und `/en/privacy-policy`.
- Frühere englische URLs mit deutschen Slugs sowie bestehende WordPress-Pfade
  werden per `301` ohne Redirect-Kette auf die kanonische englische Ziel-URL
  geführt. Die Zuordnung ist zentral in `app/_i18n/routes.ts` definiert.

Weitere Daten werden ergänzt, sobald sie aus folgenden Quellen vorliegen:

- öffentliche Sitemaps der aktuellen Website
- Google Search Console
- Analytics
- Backlinkdaten
- WordPress-Export
- manuelle Sichtung wichtiger Inhalte

## Vollständige geprüfte Seitenmatrix

SEO-Wert, Klicks/Impressionen und Backlinks sind ohne die genannten Exporte
für alle Zeilen **unbekannt**, nicht null. Statuswerte beziehen sich auf den
öffentlichen Altauftritt und den lokalen neuen Produktionsbuild.

| Alte URL (Pfad auf reltest-solutions.com) | Sprache | Typ | Status alt | Neues Ziel | Test | Einordnung |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | DE | Seite | 200 | `/de` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitstechnik/planung/` | DE | Seite | 200 | `/de/wissen/planung` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitstechnik/absicherung/` | DE | Seite | 200 | `/de/wissen/absicherung` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/coaching/` | DE | Seite | 200 | `/de/leistungen/coaching` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/ueber-uns/dr-ing-kevin-lucan/` | DE | Seite | 200 | `/de/ueber-uns/kevin-lucan` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/aktuelles/` | DE | Seite | 200 | `/de/aktuelles` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/seminare/entwicklung-und-absicherung-elektronischer-komponenten/` | DE | Seite | 200 | `/de/weiterbildung/entwicklung-absicherung-elektronischer-komponenten` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitstechnik/schwachstellenanalyse/` | DE | Seite | 200 | `/de/wissen/schwachstellenanalyse` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitstechnik/prognosen/` | DE | Seite | 200 | `/de/wissen/prognosen` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitstechnik/erprobung/` | DE | Seite | 200 | `/de/wissen/erprobung` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/about-us/dr-ing-kevin-lucan/` | EN | Seite | 200 | `/en/about-us/kevin-lucan` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/credentials/` | EN | Seite | 200 | `/en/references` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/news/` | EN | Seite | 200 | `/en/news` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-engineering/reliability-planning/` | EN | Seite | 200 | `/en/knowledge/reliability-planning` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-engineering/reliability-testing/` | EN | Seite | 200 | `/en/knowledge/reliability-testing` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-engineering/vulnerability-analysis/` | EN | Seite | 200 | `/en/knowledge/weak-point-analysis` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/coaching/` | EN | Seite | 200 | `/en/services/reliability-coaching` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/consulting/` | EN | Seite | 200 | `/en/services/reliability-consulting` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-engineering/reliability-forecast/` | EN | Seite | 200 | `/en/knowledge/reliability-prediction` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-engineering/reliability-assurance/` | EN | Seite | 200 | `/en/knowledge/reliability-assurance` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/buch-fuer-zuverlaessigkeit-im-fahrzeug-und-maschinenbau/` | DE | Seite | 200 | `/de/literatur` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/maschinenbau/` | DE | Seite | 200 | `/de/branchen/maschinenbau` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/ueber-uns/prof-dr-ing-bernd-bertsche/` | DE | Seite | 200 | `/de/ueber-uns/bernd-bertsche` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/about-us/prof-dr-ing-bernd-bertsche/` | EN | Seite | 200 | `/en/about-us/bernd-bertsche` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/consulting/` | DE | Seite | 200 | `/de/leistungen/beratung` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/design-of-experiments/consulting/` | DE | Seite | 200 | `/de/leistungen/doe-consulting` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/design-of-experiments/coaching/` | DE | Seite | 200 | `/de/leistungen/doe-coaching` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/design-of-experiments/training/` | DE | Seite | 200 | `/de/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung` | 301 → 200 | Education bzw. fachlich passendes Seminarziel. |
| `/zuverlaessigkeitsmanagement/seminare/doe-praxisorientierte-statistische-versuchsplanung/` | DE | Seite | 200 | `/de/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/membership-login/` | DE | Seite | 200 | `/de/kontakt` | 301 → 200 | Login-Funktion nicht ersetzt; fachliche Freigabe erforderlich. |
| `/zuverlaessigkeitstechnik/` | DE | Seite | 200 | `/de/wissen/zuverlaessigkeitstechnik` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/` | DE | Seite | 200 | `/de/leistungen/zuverlaessigkeitsmanagement` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/branchen/` | DE | Seite | 200 | `/de/branchen` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/automotive/` | DE | Seite | 200 | `/de/branchen/automotive` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/elektronische-produkte/` | DE | Seite | 200 | `/de/branchen/elektronische-produkte` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/erneuerbare-energien/` | DE | Seite | 200 | `/de/branchen/erneuerbare-energien` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/konsumgueter/` | DE | Seite | 200 | `/de/branchen/konsumgueter` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/luft-und-raumfahrt/` | DE | Seite | 200 | `/de/branchen/luft-und-raumfahrt` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/medizintechnik/` | DE | Seite | 200 | `/de/branchen/medizintechnik` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/produktionstechnik/` | DE | Seite | 200 | `/de/branchen/produktionstechnik` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/` | EN | Seite | 200 | `/en` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-engineering/` | EN | Seite | 200 | `/en/knowledge/reliability-engineering` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/` | EN | Seite | 200 | `/en/services/reliability-management` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/industries/` | EN | Seite | 200 | `/en/industries` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/production-technology/` | EN | Seite | 200 | `/en/industries/production-technology` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/medical/` | EN | Seite | 200 | `/en/industries/medical-technology` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/mechanical-engineering/` | EN | Seite | 200 | `/en/industries/mechanical-engineering` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/aerospace/` | EN | Seite | 200 | `/en/industries/aerospace` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/consumer-goods/` | EN | Seite | 200 | `/en/industries/consumer-products` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/renewable-energy/` | EN | Seite | 200 | `/en/industries/renewable-energy` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/electronic-products/` | EN | Seite | 200 | `/en/industries/electronic-products` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/automotive/` | EN | Seite | 200 | `/en/industries/automotive` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/seminare/zuverlaessigkeit-erprobung-fuer-praktiker/` | DE | Seite | 200 | `/de/weiterbildung/zuverlaessigkeit-erprobung-fuer-praktiker` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/reliability-management/seminars/` | EN | Seite | 200 | `/en/education#on-site-training` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/training/` | DE | Seite | 200 | `/de/education#vor-ort-schulung` | 301 → 200 | Education bzw. fachlich passendes Seminarziel. |
| `/en/reliability-management/training/` | EN | Seite | 200 | `/en/education#on-site-training` | 301 → 200 | Education bzw. fachlich passendes Seminarziel. |
| `/glossar/` | DE | Seite | 200 | `/de/glossar` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/design-of-experiments-doe/` | DE | Seite | 200 | `/de/wissen/design-of-experiments` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/about-us/` | EN | Seite | 200 | `/en/about-us` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/ueber-uns/` | DE | Seite | 200 | `/de/ueber-uns` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/kontakt/` | DE | Seite | 200 | `/de/kontakt` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/contact/` | EN | Seite | 200 | `/en/contact` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/datenschutz/` | DE | Seite | 200 | `/de/datenschutz` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/zuverlaessigkeitsmanagement/seminare/` | DE | Seite | 200 | `/de/education#vor-ort-schulung` | 301 → 200 | Education bzw. fachlich passendes Seminarziel. |
| `/impressum/` | DE | Seite | 200 | `/de/impressum` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/referenzen/` | DE | Seite | 200 | `/de/referenzen` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/karriere/werkstudentin-e-learning/` | DE | Seite | 200 | `/de/ueber-uns` | 301 → 200 | Bewusst kein Karrierebereich; bestehende Zielentscheidung. |
| `/karriere/` | DE | Seite | 200 | `/de/ueber-uns` | 301 → 200 | Bewusst kein Karrierebereich; bestehende Zielentscheidung. |
| `/karriere/marketing-manager/` | DE | Seite | 200 | `/de/ueber-uns` | 301 → 200 | Bewusst kein Karrierebereich; bestehende Zielentscheidung. |
| `/design-of-experiments/` | DE | Seite | 200 | `/de/wissen/design-of-experiments` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/webinar-beschleunigte-lebensdauertests/` | DE | Beitrag | 200 | `/de/aktuelles/webinar-beschleunigte-lebensdauertests` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/kooperation-mit-holland-innovative/` | DE | Beitrag | 200 | `/de/aktuelles/kooperation-holland-innovative` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/webinar-accelerated-life-testing/` | EN | Beitrag | 200 | `/en/news/accelerated-life-testing-webinar` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/rams-award/` | DE | Beitrag | 200 | `/de/aktuelles/rams-award` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/rams-award-2/` | EN | Beitrag | 200 | `/en/news/rams-award` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/smart-data-the-new-approach-to-product-design-by-martin-dazer/` | EN | Beitrag | 200 | `/en/news/smart-data-product-design` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/cooperation-with-holland-innovative/` | EN | Beitrag | 200 | `/en/news/cooperation-with-holland-innovative` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/unser-aktuelles-webinar-zum-thema-effiziente-lebensdauertestplanung/` | DE | Beitrag | 200 | `/de/aktuelles/webinar-effiziente-lebensdauertestplanung` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/en/our-current-webinar-on-efficient-life-test-planning/` | EN | Beitrag | 200 | `/en/news/efficient-life-test-planning-webinar` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/smart-data-der-neue-ansatz-fuer-das-produktdesign-von-martin-dazer/` | DE | Beitrag | 200 | `/de/aktuelles/smart-data-produktdesign` | 301 → 200 | Thematisch zugeordnet; Linkziel geprüft. |
| `/category/a/` | DE | Kategorie | 200 | `/de/aktuelles` | 301 → 200 | Archiv in Aktuelles zusammengeführt. |
| `/category/cee/` | DE | Kategorie | 200 | `/de/aktuelles` | 301 → 200 | Archiv in Aktuelles zusammengeführt. |
| `/author/MasterRel20/` | DE | Autorenarchiv | 200 | `/de/aktuelles` | 301 → 200 | Archiv in Aktuelles zusammengeführt. |

## Medien und Downloads

101 alte Bilder und drei Seminar-PDFs sind unverändert unter ihren bisherigen
Pfaden in `public/wp-content/uploads/` übernommen. Alle 104 Dateien wurden
per SHA-256 mit den öffentlichen Originalen und mit der lokalen HTTP-Auslieferung
abgeglichen. Gesamtgröße: 7,55 MB.

Die drei PDFs bleiben Archivmaterial, sind nicht als aktuelle Angebote neu
beworben und erhalten auch nach einer späteren Indexierungsfreigabe ein
`X-Robots-Tag: noindex`. Die alten Bild-URLs werden dagegen nicht dauerhaft
von der Bildersuche ausgeschlossen.

Vollständiges [Dateimanifest mit Prüfsummen](reviews/2026-09-15-legacy-assets.json).
Ein WordPress-Medienexport bleibt notwendig, um unreferenzierte Dateien,
Hintergrundbilder und zusätzliche Größenvarianten vollständig zu erfassen.

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
