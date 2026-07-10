# Landingpage-Konzept: Helle Leistungs-Kacheln

Dieses Konzept baut auf dem generierten Mockup auf, das eine helle, ruhige
Beratungs-Startseite mit vier grossen Leistungsmodulen zeigt. Es ist inspiriert
vom Prinzip hochwertiger Beratungs-Websites, bei denen die Leistungsangebote
frueh und grossflaechig als Kacheln gezeigt werden, uebernimmt aber kein fremdes
Design.

## Ziel des Konzepts

- Leistungen direkt im ersten Viewport sichtbar machen
- weniger abstrakte Hero-Grafik, mehr konkrete Buchbarkeit und Orientierung
- hochwertige, ruhige B2B-Wirkung ohne bunte Kampagnenoptik
- klare Trennung der vier Hauptangebote:
  Beratung, langfristige Kooperation, Vor-Ort-Schulungen und Academy
- darunter ein schneller Einstieg in typische Kundenprobleme

## Design-Idee

- Klassische, aufgeraeumte Top-Navigation
- Grosses, klares Hero-Statement links
- Dezente technische Blueprint-Anmutung im linken unteren Bereich
- 2x2-Kachelmatrix rechts mit vier hellen, technischen Angebotsmodulen
- Diagramm-, Linien- und Bild-Fades statt schwerer Fotokacheln
- zurueckhaltende Navy-/Cyan-Farbwelt
- darunter ein Aufgabenband mit typischen Problemstellungen

## Asset-Inventar

Die neue HTML-Seite nutzt eigene Konzept-Assets, damit sie naeher am Mockup
liegt und nicht nur mit groben CSS-Platzhaltern arbeitet.

Bildassets:

- `assets/hero-blueprint.png` fuer das technische Blueprint-Motiv unten links
- `assets/consulting-weibull.png` fuer die Consulting-Kachel
- `assets/partnership-contours.png` fuer die langfristige Partnerschaft
- `assets/seminar-audience.png` fuer Seminare vor Ort
- `assets/academy-laptop.png` fuer RelTest Academy

Piktogramme:

- `assets/icon-target.svg` fuer Consulting
- `assets/icon-handshake.svg` fuer Projektpartnerschaft
- `assets/icon-seminar.svg` fuer Seminare
- `assets/icon-academy.svg` fuer Academy
- `assets/icon-chart.svg` fuer unerwartete Ausfaelle
- `assets/icon-shield.svg` fuer unsichere Nachweise
- `assets/icon-database.svg` fuer zerstreute Daten
- `assets/icon-team.svg` fuer personengebundenes Wissen

## Dateien

Die Vorschau liegt in:

`concepts/landingpage-ingenics-kacheln/index.html`

Die urspruengliche Bildreferenz liegt in:

`concepts/landingpage-ingenics-kacheln/reference-mockup.png`

## Pruefung

- Alle in der HTML-Datei referenzierten lokalen Assets wurden auf Existenz
  geprueft.
- Die Kernbilder wurden visuell geprueft: Blueprint, Weibull-Plot,
  Konturlinien, Seminarbild und Academy-Laptop.
- Ein automatischer Headless-Browser-Screenshot konnte in dieser Umgebung nicht
  erzeugt werden, weil Edge ohne Fehlertext keine Screenshot-Datei geschrieben
  hat. Die Seite ist daher als statisches Konzept im Browser zu oeffnen und
  gegen `reference-mockup.png` zu vergleichen.
