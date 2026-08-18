# Repo-Dokumentation

Diese Datei beschreibt den Aufbau der RelTest-Website und die wichtigsten Stellen für eigene Anpassungen.

Weitere Projektdokumentation liegt unter [docs/README.md](C:/Users/MaximilianÖttl/Documents/test_website/docs/README.md).

## Tech-Stack

- Next.js 16 mit App Router
- React 19
- TypeScript
- Tailwind CSS 4
- keine zusätzliche UI-Bibliothek

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Website lokal starten

Wenn du ein neues Terminal geöffnet hast, gehst du so vor:

### 1. In den Projektordner wechseln

```powershell
cd C:\Users\MaximilianÖttl\Documents\test_website
```

### 2. Falls nötig Abhängigkeiten installieren

Das brauchst du in der Regel nur beim ersten Start oder wenn `node_modules` fehlt.

```powershell
npm install
```

### 3. Entwicklungsserver starten

```powershell
npm run dev
```

Danach ist die Website normalerweise hier erreichbar:

```text
http://localhost:3000
```

Für die aktuelle Website sind vor allem diese Einstiege relevant:

- `http://localhost:3000/de`
- `http://localhost:3000/en`

### 4. Entwicklungsserver wieder stoppen

Im Terminal:

```text
Ctrl + C
```

### Unterschied zwischen `dev` und `start`

- `npm run dev`: für die tägliche Entwicklung, mit automatischem Neuladen bei Änderungen
- `npm run build`: erstellt den Produktions-Build
- `npm run start`: startet die gebaute Produktionsversion

Wenn du die Produktionsversion lokal testen willst:

```powershell
npm run build
npm run start
```

## Grundstruktur

- `app/`: Seiten, Komponenten, Übersetzungen und globale Styles
- `public/`: Logos, Fotos, Grafiken, Piktogramme und Referenzlogos
- `proxy.ts`: Spracherkennung und Weiterleitung auf `/de` oder `/en`

## Design-System und Farben

Das Projekt nutzt Tailwind CSS 4. Der aktuelle Ansatz ist CSS-first:

- zentrale Design-Tokens liegen in `app/globals.css`
- es gibt bewusst keine klassische `tailwind.config.js`
- Farben, Fonts, Radien und Schatten werden über `@theme inline` für Tailwind verfügbar gemacht

Wichtige Tokens:

- `brand-ink`, `brand-navy`, `brand-blue`, `brand-cyan`: Kernfarben der Marke
- `surface-canvas`, `surface-muted`, `surface-card`: Flächen und Hintergründe
- `line-soft`: dezente Rahmen und Trennlinien
- `copy-muted`, `copy-soft`: ruhigere Textfarben
- `signal-risk`, `signal-warning`, `signal-success`: fachliche Signal-/Statusfarben

Beispiele für die Nutzung in Komponenten:

```tsx
className="bg-brand-ink text-white"
className="border-line-soft bg-surface-card"
className="rounded-panel shadow-panel"
```

Neue globale Farben sollten zuerst in `app/globals.css` als Token angelegt werden.
Direkte Einzelwerte wie `#075985` oder viele neue zufällige Farbklassen sollten nur
verwendet werden, wenn es dafür einen guten Grund gibt.

## Mehrsprachigkeit

Die Website unterstützt Deutsch und Englisch. Jede Seite liegt unter einem Sprachpräfix:

- Deutsch: `/de`, `/de/leistungen`, `/de/kontakt`
- Englisch: `/en`, `/en/leistungen`, `/en/kontakt`

Der Umschalter im Header speichert die Auswahl für ein Jahr. Ein Aufruf ohne Sprachpräfix wird anhand der gespeicherten Auswahl oder der Browsersprache weitergeleitet.

Wichtige Dateien:

- `app/_i18n/config.ts`: unterstützte Sprachen und Link-Helfer
- `app/_components/language-switcher.tsx`: sichtbarer DE/EN-Umschalter
- `app/api/locale/route.ts`: speichert die gewählte Sprache
- `proxy.ts`: erkennt und ergänzt das Sprachpräfix
- `app/_content/site-content.ts`: sämtliche deutschen und englischen Texte

Neue oder geänderte Texte müssen in `site-content.ts` immer sowohl unter `de` als auch unter `en` gepflegt werden.

## Seitenstruktur

Alle sprachabhängigen Seiten liegen in `app/[lang]/`:

- `app/[lang]/page.tsx`: Startseite
- `app/[lang]/leistungen/page.tsx`
- `app/[lang]/weiterbildung/page.tsx`
- `app/[lang]/wissen/page.tsx`
- `app/[lang]/prozess/page.tsx`
- `app/[lang]/literatur/page.tsx`
- `app/[lang]/referenzen/page.tsx`
- `app/[lang]/kontakt/page.tsx`

`app/[lang]/layout.tsx` setzt Header und Footer für alle Seiten und erzeugt die Sprachvarianten.

## Wiederverwendbare Komponenten

- `app/_components/site-header.tsx`: Navigation, Wissens-Dropdown und Sprachumschalter
- `app/_components/site-footer.tsx`: Footer, Schnellzugriff und Kontakt
- `app/_components/home-page-hero.tsx`: aktueller Startseiten-Hero
- `app/_components/home-page-content.tsx`: weitere Startseitenabschnitte
- `app/_components/service-card.tsx`: Leistungskarten
- `app/_components/page-intro.tsx`: Intro der Unterseiten
- `app/_components/section-heading.tsx`: einheitliche Abschnittsüberschriften

## Zentrale Inhalte

`app/_content/site-content.ts` enthält:

- Navigation und Footer
- Hero-Texte
- Leistungen und Methoden
- Weiterbildung und Stichpunkte
- Vorteile und Prozessschritte
- Wissensbereiche
- Buch- und Referenzdaten
- Texte aller Unterseiten

Das Design bleibt in den Komponenten. Inhaltliche Änderungen gehören möglichst in diese zentrale Content-Datei.

## Startseite

Die Reihenfolge wird in `app/[lang]/page.tsx` festgelegt:

1. Hero
2. Badewannenkurve und Praxisbezug
3. Leistungen
4. Weiterbildung
5. Warum RelTest
6. Podcast
7. Branchenreferenzen
8. Kontakt-CTA

Ganze `<section>`-Blöcke können dort verschoben werden, um die Reihenfolge zu ändern.

## Bilder und Grafiken

Statische Dateien liegen unter `public/` und werden mit Pfaden wie `/team/img-0107.jpg` eingebunden.

- `public/academy`: bestehende Legacy-Assets und Lernvisuals für RelTest Education
- `public/branding`: aktuelle RelTest-Solutions- und RelTest-Education-Logos
- `public/graphics`: Wissensgrafiken, Prozessgrafiken und aktive Solutions-Icons
- `public/icons`: Service-Icons
- `public/industries`: Branchenbilder fÃ¼r die Startseiten-Karten
- `public/podcast`: Podcast-Hintergrund
- `public/references`: Kundenlogos
- `public/team`: Mitarbeiter- und Education-Bilder

Die derzeit deutsch beschrifteten Grafiken werden auch in der englischen Website verwendet. Englische Grafikvarianten können später separat ergänzt und in den sprachabhängigen Seiten ausgewählt werden.

## Typische Änderungen

### Texte ändern

In `app/_content/site-content.ts` die entsprechende Stelle in `de` und `en` bearbeiten.

### Navigation ändern

Die Einträge stehen unter `navigation.items` und `navigation.knowledgeItems` in beiden Sprachen.

### Leistungen ändern

In `services` beide Sprachvarianten pflegen. Das Kartendesign liegt in `service-card.tsx`.

### Hero ändern

Aufbau, Texte, Positionen und Animationen liegen in
`home-page-hero.tsx`, `home-page-content.tsx` und `globals.css`.

### Bilder austauschen

Neue Datei unter `public/` ablegen und den `src`-Pfad in der jeweiligen Komponente ändern.

## Prüfung vor Veröffentlichung

```bash
npm run lint
npm run build
```

Danach mit `npm run dev` mindestens folgende Seiten prüfen:

- `/de`
- `/en`
- Sprachwechsel auf einer Unterseite
- Wissens-Dropdown auf Desktop und Mobilgerät
