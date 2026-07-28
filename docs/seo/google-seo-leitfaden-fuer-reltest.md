# Google-SEO-Leitfaden für die RelTest-Website

Stand: 8. Juni 2026

## 1. Zweck dieses Dokuments

Dieses Dokument überträgt die für RelTest relevanten Empfehlungen aus dem
offiziellen SEO-Startleitfaden und den dazugehörigen Google-Search-Central-
Dokumentationen auf dieses Website-Projekt.

Es beantwortet insbesondere:

- Wie findet und verarbeitet Google die Website?
- Was muss technisch vor dem Relaunch vorhanden sein?
- Wie werden die deutsche und englische Version korrekt ausgezeichnet?
- Wie bleibt die bestehende Sichtbarkeit beim Wechsel von WordPress zu Next.js
  erhalten?
- Welche Inhalte, Bilder und Links helfen Google und den Besuchern?
- Was muss nach dem Go-live regelmäßig überwacht werden?

Dieses Dokument ist eine praxisorientierte Referenz. Die bereits vorhandene
Datei `SEO-AUDIT-UND-AUFGABEN.md` enthält den konkreten Ist-Zustand und die
priorisierten offenen Aufgaben. `SEO-GRUNDLAGEN-ERKLAERT.md` erläutert die
wichtigsten Begriffe für Einsteiger.

## 2. Was Google grundsätzlich benötigt

Google verarbeitet Websites vereinfacht in mehreren Schritten:

1. **Entdecken:** Google findet eine URL über interne Links, externe Links oder
   eine Sitemap.
2. **Crawlen:** Googlebot ruft die Seite und benötigte Ressourcen wie CSS,
   JavaScript und Bilder ab.
3. **Rendern:** Google stellt die Seite ähnlich wie ein Browser dar.
4. **Indexieren:** Google analysiert Inhalt, Sprache, Bilder, Links, Canonical
   URL und weitere Signale.
5. **Ausspielen:** Bei einer passenden Suchanfrage entscheidet Google, ob und
   wie die Seite in den Suchergebnissen erscheint.

SEO garantiert keine bestimmte Platzierung. Es beseitigt Hindernisse, hilft
Google beim Verstehen der Website und verbessert die Wahrscheinlichkeit, für
passende Suchanfragen gefunden zu werden.

Änderungen können laut Google innerhalb weniger Stunden sichtbar werden, aber
auch mehrere Wochen oder Monate benötigen. SEO muss deshalb über längere
Zeiträume bewertet werden.

## 3. Für RelTest relevante Ausgangslage

Die neue Website besitzt bereits eine gute technische Basis:

- Next.js mit serverseitig bzw. statisch erzeugtem HTML
- responsive Darstellung
- getrennte URLs für Deutsch und Englisch
- semantische Seitentexte und interne Navigation
- optimierte Bildauslieferung über `next/image`
- funktionierender Produktions-Build

Vor dem Go-live fehlen oder benötigen besondere Prüfung:

- individuelle Metadaten für jede Unterseite
- korrekte Canonical URLs
- vollständige `hreflang`-Zuordnung pro Unterseite
- `sitemap.xml`
- `robots.txt`
- Redirect-Matrix für die alte WordPress-Website
- strukturierte Daten
- Google Search Console
- technisches Monitoring nach dem Relaunch

## 4. Crawling und Auffindbarkeit

### 4.1 Interne Links

Google entdeckt neue Seiten überwiegend über Links. Jede indexierbare Seite
sollte deshalb über normale HTML-Links erreichbar sein.

Für RelTest bedeutet das:

- Alle wichtigen Seiten müssen über Navigation, Footer oder passende
  Inhaltslinks erreichbar sein.
- Wissensartikel müssen von der Wissensübersicht und von thematisch passenden
  Leistungsseiten verlinkt werden.
- Leistungen sollten auf relevante Wissensartikel, Weiterbildung und Kontakt
  verweisen.
- Links sollten als echte `href`-Links ausgegeben werden, nicht ausschließlich
  durch JavaScript-Klickhandler.
- Es darf keine fachlich wichtige Seite geben, die nur über die Sitemap
  erreichbar ist.

**Linktexte**

Linktexte sollen das Ziel verständlich beschreiben. Formulierungen wie
`Mehr über Lebensdaueranalyse erfahren` sind aussagekräftiger als
`Hier klicken`.

**Aufgaben**

- [ ] Jede öffentliche Seite von mindestens einer anderen öffentlichen Seite
      aus verlinken.
- [ ] Wissensartikel thematisch untereinander und mit Leistungen verknüpfen.
- [ ] Unklare Linktexte wie `Mehr` oder `Hier` vermeiden.
- [ ] Nach dem Ausbau einen internen Link-Crawl durchführen.

### 4.2 XML-Sitemap

Eine Sitemap listet die URLs auf, die Google indexieren soll. Sie ist ein
Hinweis und keine Garantie für Crawling oder Indexierung.

Für dieses Projekt soll Next.js automatisch eine Sitemap unter
`https://reltest-solutions.com/sitemap.xml` erzeugen.

Die Sitemap soll:

- nur öffentliche, indexierbare und kanonische URLs enthalten
- absolute HTTPS-URLs verwenden
- deutsche und englische Seiten enthalten
- nur echte Änderungsdaten als `lastModified` angeben
- keine alten WordPress-URLs, Weiterleitungen oder Fehlerseiten enthalten
- bei neuen Wissensartikeln automatisch erweitert werden

Google ignoriert die Sitemap-Werte `priority` und `changefreq`. Diese müssen
nicht gepflegt werden.

**Aufgaben**

- [ ] `app/sitemap.ts` anlegen.
- [ ] alle deutschen und englischen Zielseiten aufnehmen.
- [ ] Sitemap nach dem Go-live in der Search Console einreichen.
- [ ] Sitemap in `robots.txt` referenzieren.
- [ ] Sitemap nach jedem größeren Seitenumbau kontrollieren.

### 4.3 robots.txt

`robots.txt` steuert, welche URLs Crawler abrufen dürfen. Die Datei ist nicht
das richtige Mittel, um Seiten sicher aus Google zu entfernen. Eine durch
`robots.txt` blockierte URL kann unter Umständen trotzdem ohne Beschreibung in
den Suchergebnissen erscheinen.

Für RelTest soll `robots.txt`:

- das Crawlen der öffentlichen Website erlauben
- interne technische Bereiche nur dann ausschließen, wenn dies wirklich nötig
  ist
- die URL der Sitemap nennen
- CSS, JavaScript und relevante Bilder nicht blockieren

Nicht öffentliche Testversionen sollen nicht allein mit `robots.txt`, sondern
mit Passwortschutz abgesichert werden.

**Aufgaben**

- [ ] `app/robots.ts` anlegen.
- [ ] Produktionsdomain und Sitemap korrekt eintragen.
- [ ] prüfen, dass `/_next/`-Ressourcen nicht versehentlich blockiert werden.
- [ ] Preview-Deployments vor öffentlichem Zugriff schützen.

### 4.4 Google muss die vollständige Seite rendern können

Google soll dieselben wesentlichen Inhalte und Ressourcen sehen wie ein
normaler Besucher. CSS, JavaScript, Bilder und Schriften dürfen nicht
unbeabsichtigt blockiert sein.

Die wesentlichen Texte sollten bereits im ausgelieferten HTML stehen. Das ist
bei den aktuellen Next.js-Seiten grundsätzlich gegeben. Inhalte sollten nicht
erst nach einer Nutzeraktion oder ausschließlich in einer Canvas-Grafik
verfügbar sein.

**Aufgaben**

- [ ] wichtige Seiten nach dem Go-live mit dem URL-Prüftool testen.
- [ ] gerenderten HTML-Inhalt und Screenshot in der Search Console prüfen.
- [ ] sicherstellen, dass Navigation und Sprachlinks crawlbar bleiben.
- [ ] fachliche Aussagen in Grafiken zusätzlich als HTML-Text bereitstellen.

### 4.5 HTTP-Statuscodes und Fehlerseiten

Google muss erkennen können, ob eine Seite existiert, dauerhaft umgezogen oder
entfernt wurde.

- `200`: Seite ist erfolgreich erreichbar.
- `301` oder `308`: Seite ist dauerhaft umgezogen.
- `404`: URL wurde nicht gefunden.
- `410`: Inhalt wurde bewusst und dauerhaft entfernt.
- `5xx`: Serverfehler, der untersucht werden muss.

Eine optisch gestaltete Fehlerseite darf nicht mit Status `200` ausgeliefert
werden. Das wäre ein sogenannter Soft-404.

**Aufgaben**

- [ ] eine hilfreiche `not-found.tsx` erstellen.
- [ ] Statuscodes der wichtigsten URLs automatisiert testen.
- [ ] Weiterleitungen nicht auf Fehlerseiten oder weitere Weiterleitungen
      zeigen lassen.
- [ ] 404- und Serverfehler nach dem Go-live überwachen.

## 5. URL-Struktur, Canonicals und doppelte Inhalte

### 5.1 Verständliche URLs

URLs sollen kurz, stabil und für Menschen nachvollziehbar sein.

Geeignete Beispiele:

- `/de/leistungen`
- `/de/weiterbildung`
- `/de/wissen/lebensdaueranalyse`
- `/en/knowledge/lifetime-analysis`

Zufällige IDs, unnötige Parameter und wechselnde URL-Strukturen sollten
vermieden werden.

Da die aktuelle englische Website teilweise deutsche Pfade verwendet, muss vor
dem Go-live bewusst entschieden werden:

- gemeinsame Slugs für beide Sprachen beibehalten, oder
- englische Slugs verwenden und eine zentrale Zuordnung pflegen.

Beide Varianten können funktionieren. Entscheidend sind Stabilität, korrekte
Links, Redirects und `hreflang`.

### 5.2 Canonical URLs

Wenn derselbe oder sehr ähnliche Inhalt unter mehreren URLs erreichbar ist,
soll eine bevorzugte kanonische URL angegeben werden.

Für RelTest soll jede öffentliche Seite grundsätzlich einen selbstreferenziellen
Canonical besitzen:

```text
https://reltest-solutions.com/de/leistungen
```

Die deutsche und englische Version sind keine Duplikate, die auf eine einzige
Sprache kanonisiert werden sollten. Jede Sprachversion erhält ihren eigenen
Canonical und verweist zusätzlich per `hreflang` auf die andere Sprache.

**Aufgaben**

- [ ] `metadataBase` auf die endgültige HTTPS-Domain setzen.
- [ ] für jede Seite einen absoluten Canonical erzeugen.
- [ ] Varianten mit `www`, ohne `www`, HTTP und unnötigem Slash vereinheitlichen.
- [ ] nur Canonical URLs in die Sitemap aufnehmen.
- [ ] Canonicals nach dem Deployment im gerenderten HTML prüfen.

## 6. Mehrsprachige Website

Die getrennten Verzeichnisse `/de/` und `/en/` sind eine gute Grundlage. Google
muss jedoch für jede Seite wissen, welche deutsche und englische URL
zusammengehören.

### 6.1 hreflang

Jede Seite soll im HTML-Kopf enthalten:

- einen Verweis auf ihre deutsche Version
- einen Verweis auf ihre englische Version
- einen Verweis auf sich selbst
- optional eine sinnvolle `x-default`-URL

Beispiel für die Leistungsseite:

```html
<link rel="alternate"
      hreflang="de"
      href="https://reltest-solutions.com/de/leistungen" />
<link rel="alternate"
      hreflang="en"
      href="https://reltest-solutions.com/en/leistungen" />
```

Die Zuordnung muss wechselseitig sein. Wenn die deutsche Seite auf die englische
Version zeigt, muss die englische Seite zurück auf die deutsche zeigen.

Die aktuelle globale Zuordnung darf nicht jede Unterseite nur mit `/de` und
`/en` verbinden. Jede Unterseite benötigt ihr tatsächliches Gegenstück.

### 6.2 Sprachumschaltung und automatische Weiterleitung

- Besucher sollen die Sprache jederzeit manuell wechseln können.
- Der Sprachwechsel soll auf der entsprechenden Unterseite bleiben.
- Sprachversionen sollen über crawlbare URLs erreichbar sein.
- Eine automatische Spracherkennung darf Google und Nutzer nicht daran hindern,
  eine bestimmte Version direkt aufzurufen.
- Die Sprache muss im `lang`-Attribut des HTML-Dokuments korrekt angegeben sein.

**Aufgaben**

- [ ] zentrale Zuordnung aller deutschen und englischen Pfade erstellen.
- [ ] pro Seite korrekte `hreflang`-Alternates generieren.
- [ ] Rückverweise und selbstreferenzierende Einträge testen.
- [ ] Sprachwechsel auf jeder Unterseite prüfen.
- [ ] beide Sprachbereiche separat crawlen.

## 7. Relaunch und Migration der alten Website

Der Relaunch ersetzt eine bereits indexierte WordPress-Website. Das ist aus
SEO-Sicht eine Website-Migration und kein gewöhnlicher Erststart.

### 7.1 Vollständige URL-Zuordnung

Jede relevante alte URL braucht vor dem Umschalten eine Entscheidung:

- gleichwertige neue URL
- zusammengeführte fachlich passende Zielseite
- bewusste Entfernung

Alte URLs dürfen nicht pauschal auf die Startseite umgeleitet werden. Eine
Weiterleitung muss inhaltlich nachvollziehbar sein.

### 7.2 Permanente Weiterleitungen

Google empfiehlt serverseitige permanente Weiterleitungen, insbesondere `301`
oder `308`.

Für RelTest gilt:

- direkt von der alten zur endgültigen neuen URL weiterleiten
- keine Redirect-Ketten erzeugen
- keine Sprachversionen miteinander vermischen
- Redirects mindestens ein Jahr, besser dauerhaft, bestehen lassen
- interne Links sofort auf die neuen URLs aktualisieren

Google weist darauf hin, dass permanente Weiterleitungen keinen grundsätzlichen
PageRank-Verlust verursachen.

### 7.3 Ablauf des Umzugs

**Vor dem Go-live**

- [ ] vollständige Liste aller alten URLs exportieren.
- [ ] Rankings, Klicks und häufig verlinkte Seiten sichern.
- [ ] jede alte URL einem neuen Ziel zuordnen.
- [ ] Redirects in einer Testumgebung prüfen.
- [ ] neue Sitemap und `robots.txt` vorbereiten.
- [ ] Canonicals und `hreflang` kontrollieren.
- [ ] wichtige externe Links und Unternehmensprofile erfassen.

**Beim Go-live**

- [ ] neue Anwendung veröffentlichen.
- [ ] permanente Redirects aktivieren.
- [ ] HTTPS, Hauptdomain und Sprachweiterleitungen prüfen.
- [ ] neue Sitemap in der Search Console einreichen.
- [ ] zentrale URLs über das URL-Prüftool testen.
- [ ] alte Sitemap nur so lange verwenden, wie sie beim Erkennen des Umzugs
      sinnvoll unterstützt.

**Nach dem Go-live**

- [ ] täglich in der ersten Woche zentrale URLs und Fehler prüfen.
- [ ] Indexierung, Klicks und Impressionen vergleichen.
- [ ] 404-Fehler und falsche Redirect-Ziele korrigieren.
- [ ] externe Links auf wichtigen Profilen aktualisieren.
- [ ] Redirects nicht nach wenigen Monaten entfernen.

## 8. Inhalte und Suchintention

Google betont, dass hilfreiche, zuverlässige und nutzerorientierte Inhalte meist
mehr bewirken als technische Detailoptimierungen.

Für RelTest sollen Inhalte:

- fachlich korrekt und aus eigener Erfahrung erstellt sein
- konkrete Fragen technischer Entscheider beantworten
- verständlich strukturiert und sprachlich sauber sein
- Autoren oder fachlich verantwortliche Personen nennen
- bei Bedarf Quellen und weiterführende Literatur angeben
- regelmäßig fachlich überprüft und aktualisiert werden

### 8.1 Relevante Suchintentionen

Die Website sollte sowohl Fachbegriffe als auch verständlichere Formulierungen
abdecken. Beispiele:

- Zuverlässigkeitstechnik Beratung
- Reliability Engineering Consulting
- Design of Experiments Beratung
- DoE Versuchsplanung
- Weibull-Analyse
- Lebensdaueranalyse
- Zuverlässigkeit im Maschinenbau
- Erprobungsplanung
- Risikomanagement in der Produktentwicklung
- Zuverlässigkeit Schulung oder Seminar

Begriffe sollen natürlich in hilfreichen Inhalten vorkommen. Keyword-Wiederholung
ohne Mehrwert ist zu vermeiden.

### 8.2 Wissensbereich

Der geplante Wissensbereich ist für RelTest besonders wertvoll. Er kann:

- komplexe Methoden verständlich erklären
- technische Expertise sichtbar machen
- für spezialisierte Suchanfragen gefunden werden
- Leistungsseiten mit fachlichen Belegen unterstützen
- Grafiken für Google Bilder bereitstellen

Jeder umfangreiche Wissensbeitrag sollte enthalten:

- einen klaren Seitentitel und eine eindeutige H1
- eine kurze Antwort oder Einordnung am Anfang
- logisch gegliederte Zwischenüberschriften
- eigene Grafiken oder Diagramme
- Autor oder fachlich verantwortliche Person
- Erstellungs- und Aktualisierungsdatum
- interne Links zu verwandten Themen und Leistungen
- passende Quellen, wenn externe Aussagen verwendet werden

### 8.3 Kein starres Wortzahl-Ziel

Google nennt keine minimale oder maximale ideale Wortanzahl. Ein Text soll so
lang sein, wie es zur vollständigen und verständlichen Beantwortung des Themas
nötig ist. Künstlich verlängerte Texte sind nicht hilfreich.

## 9. Titel, Beschreibungen und Suchergebnisdarstellung

### 9.1 Seitentitel

Jede Seite benötigt einen individuellen und aussagekräftigen Title.

Beispiele:

```text
Zuverlässigkeitstechnik Beratung | RelTest Solutions
DoE und Versuchsplanung | RelTest Solutions
Seminare zur Zuverlässigkeit | RelTest Solutions
```

Der Title soll:

- das Seitenthema klar benennen
- zur tatsächlichen Seite passen
- die Marke sinnvoll ergänzen
- nicht mit Keywords überladen werden
- sich von anderen Seitentiteln unterscheiden

### 9.2 Meta-Description

Die Meta-Description kann von Google als Beschreibung im Suchergebnis verwendet
werden. Google kann je nach Suchanfrage auch einen anderen Textausschnitt wählen.

Jede wichtige Seite soll eine eigene Beschreibung erhalten, die:

- Inhalt und Nutzen präzise zusammenfasst
- die angesprochene Zielgruppe berücksichtigt
- keine unbelegten Superlative verwendet
- zur Handlung oder zum Weiterlesen motiviert

### 9.3 Überschriften

Überschriften sollen vor allem Lesern und Screenreadern eine klare Struktur
geben. Es gibt laut Google keine magische Anzahl an Überschriften.

Für dieses Projekt gilt als Qualitätsstandard:

- eine klar erkennbare Hauptüberschrift pro Seite
- H2 für Hauptabschnitte
- H3 für echte Unterpunkte
- keine Überschrift nur aus optischen Gründen

## 10. Bilder und Grafiken

Bilder sind für RelTest sowohl für Vertrauen als auch für Google Bilder
relevant.

### 10.1 Bildqualität und Kontext

- hochwertige, thematisch passende Bilder verwenden
- Bilder in der Nähe des zugehörigen Textes platzieren
- Grafiken nicht nur dekorativ, sondern erklärend einsetzen
- keine wichtigen Textinhalte ausschließlich in Bilder einbauen
- sichtbare Bildunterschriften einsetzen, wenn sie zusätzlichen Kontext liefern

### 10.2 Dateinamen und Alt-Texte

Dateinamen sollen verständlich sein:

```text
badewannenkurve-zuverlaessigkeit.png
weibull-analyse-reltest.jpg
doe-versuchsplanung-grafik.svg
```

Alt-Texte beschreiben den relevanten Bildinhalt für Menschen, die das Bild
nicht sehen können. Sie sollen konkret sein, aber keine Keywordlisten enthalten.
Rein dekorative Bilder erhalten einen leeren Alt-Text.

### 10.3 Leistung und Indexierbarkeit

- sinnvolle Bildabmessungen verwenden
- moderne und komprimierte Formate bevorzugen
- Layoutgrößen reservieren, um Verschiebungen zu vermeiden
- Hero-Bilder priorisieren, andere Bilder bei Bedarf verzögert laden
- Google den Zugriff auf Bilddateien erlauben

Für besonders wertvolle Wissensgrafiken kann die Sitemap um Bildinformationen
ergänzt werden. Die Grafik muss auf einer indexierbaren Seite mit erklärendem
Text eingebunden sein.

## 11. Strukturierte Daten

Strukturierte Daten helfen Google, Entitäten und Seiteninhalte präziser zu
verstehen. Sie garantieren kein besonderes Suchergebnis.

Für RelTest sind potenziell relevant:

- `Organization` für RelTest Solutions
- gegebenenfalls `LocalBusiness`, falls vollständige lokale Unternehmensdaten
  dargestellt werden
- `BreadcrumbList` für Unterseiten und Wissensartikel
- `Article` für ausführliche Fachbeiträge
- `Person` für sichtbare Autorenprofile
- `Book` im Zusammenhang mit dem Fachbuch
- `Course` oder passende Bildungsdaten nur, wenn die sichtbaren Inhalte und
  Googles Anforderungen erfüllt sind

Strukturierte Daten müssen dem sichtbaren Seiteninhalt entsprechen. Es dürfen
keine Bewertungen, Autoren, Kurse oder andere Eigenschaften ausgezeichnet
werden, die auf der Seite nicht tatsächlich vorhanden sind.

**Aufgaben**

- [ ] zentrale Unternehmensdaten verbindlich festlegen.
- [ ] `Organization` als JSON-LD einbauen.
- [ ] Breadcrumbs und `BreadcrumbList` gemeinsam umsetzen.
- [ ] Wissensartikel später mit `Article` und Autorenangaben versehen.
- [ ] Markup mit Googles Rich Results Test validieren.
- [ ] Fehlerberichte in der Search Console überwachen.

## 12. Nutzerfreundlichkeit und Core Web Vitals

Eine gute Seitenerfahrung umfasst mehr als reine Geschwindigkeit:

- mobile Nutzbarkeit
- sichere HTTPS-Verbindung
- stabile Darstellung ohne springende Elemente
- schnelle Reaktion auf Eingaben
- gut lesbare Inhalte
- keine störenden Vollbilddialoge

Für dieses Projekt sind insbesondere relevant:

- Hero-Bilder und große Teamfotos komprimieren
- Bildgrößen korrekt reservieren
- unnötiges clientseitiges JavaScript vermeiden
- Animationen kurz, ruhig und leistungsarm halten
- Schriften effizient laden
- Navigation auf Mobilgeräten zuverlässig bedienbar halten
- Cookie- oder Consent-Dialoge nicht unnötig dominant gestalten

Messungen sollen sowohl im Labor, etwa mit Lighthouse oder PageSpeed Insights,
als auch mit realen Nutzerdaten aus der Search Console bewertet werden.

**Aufgaben**

- [ ] Lighthouse für zentrale Seitentypen ausführen.
- [ ] Core Web Vitals nach dem Go-live in der Search Console prüfen.
- [ ] Startseite, Leistungsseite, Wissensseite und Kontaktseite getrennt messen.
- [ ] Bildgrößen und JavaScript-Budget bei jeder größeren Erweiterung prüfen.

## 13. Externe Bekanntmachung und Off-Page-Signale

Google findet Seiten auch über externe Links. RelTest besitzt dafür bereits
wertvolle Anknüpfungspunkte:

- Fachbuch bei Springer
- Podcast-Auftritt
- Kunden- und Partnerbeziehungen
- persönliche und geschäftliche LinkedIn-Profile
- Hochschul- und Fachnetzwerke
- RelTest Education

Sinnvolle Maßnahmen:

- neue Domain und relevante Unterseiten in allen eigenen Profilen aktualisieren
- Podcast-Seite um einen Link zur passenden RelTest-Seite bitten
- Autoren- und Verlagsprofile auf korrekte Unternehmenslinks prüfen
- Fachbeiträge über LinkedIn und Newsletter bekannt machen
- Partner nur um sachlich passende Links bitten
- keine Links kaufen und keine künstlichen Linknetzwerke verwenden

Die Domainendung `.com` ist laut Google grundsätzlich kein Nachteil. Keywords im
Domainnamen allein haben nur geringe Rankingwirkung.

## 14. Google Search Console

Die Search Console ist das wichtigste Google-Werkzeug für Crawling,
Indexierung und organische Suchleistung.

### 14.1 Einrichtung

- Domain-Property für `reltest-solutions.com` per DNS bestätigen
- Zugriff für mindestens zwei verantwortliche Personen einrichten
- bestehende Property der alten Website nicht voreilig entfernen
- neue Sitemap einreichen
- E-Mail-Benachrichtigungen aktiv lassen

### 14.2 Wichtige Berichte

**Indexierung**

- Welche Seiten sind indexiert?
- Welche Seiten sind ausgeschlossen?
- Gibt es 404, Weiterleitungs- oder Canonical-Probleme?

**URL-Prüfung**

- Ist eine konkrete Seite indexiert?
- Welche Canonical URL verwendet Google?
- Kann Google die Live-Seite abrufen und rendern?
- Kann eine erneute Indexierung angefordert werden?

**Leistung**

- Impressionen
- Klicks
- Klickrate
- durchschnittliche Position
- Suchanfragen
- erfolgreiche und schwache Zielseiten
- Unterschiede nach Land, Gerät und Zeitraum

**Core Web Vitals**

- reale Leistungsdaten der Nutzer
- betroffene URL-Gruppen
- mobile und Desktop-Probleme

**Sicherheit und manuelle Maßnahmen**

- Hinweise auf gehackte Inhalte oder Schadsoftware
- manuelle Maßnahmen durch Google

Google empfiehlt keine tägliche Kontrolle. Im Normalbetrieb genügt ungefähr
eine monatliche Prüfung und eine zusätzliche Kontrolle nach größeren
Änderungen. Direkt nach einem Relaunch ist eine deutlich engere Überwachung
sinnvoll.

## 15. Monitoringplan für RelTest

### 15.1 Vor dem Relaunch: Ausgangswerte sichern

- [ ] Klicks und Impressionen der letzten 16 Monate exportieren.
- [ ] wichtigste Suchanfragen exportieren.
- [ ] Seiten mit den meisten organischen Klicks exportieren.
- [ ] indexierte alte URLs dokumentieren.
- [ ] bestehende Sitemaps sichern.
- [ ] wichtige Backlinks und externe Ziel-URLs sichern.
- [ ] aktuelle Core Web Vitals dokumentieren.

### 15.2 Erste Woche nach dem Relaunch

Täglich prüfen:

- Erreichbarkeit der Website
- zentrale Redirects
- Startseite und wichtigste Unterseiten im URL-Prüftool
- neue 404- und Serverfehler
- Sitemap-Verarbeitung
- Sicherheitswarnungen

### 15.3 Wochen zwei bis sechs

Mindestens wöchentlich prüfen:

- Verlauf der indexierten neuen URLs
- Rückgang alter URLs im Index
- Klicks und Impressionen im Vergleich zum vorherigen Zeitraum
- Suchanfragen für Marke, Leistungen und Wissensthemen
- falsche Canonicals
- fehlerhafte `hreflang`-Zuordnungen
- Weiterleitungsketten
- Core Web Vitals

### 15.4 Dauerbetrieb

Monatlich:

- Search-Console-Nachrichten
- Indexierungsbericht
- Leistung nach Suchanfrage und Zielseite
- Core Web Vitals
- Sicherheitsprobleme
- Sitemap-Status
- neue 404-Fehler

Vierteljährlich:

- Wissensinhalte aktualisieren
- interne Links prüfen
- Titel und Beschreibungen anhand realer Suchanfragen verbessern
- schwache, aber häufig angezeigte Seiten untersuchen
- neue fachliche Themen aus Kundenfragen ableiten
- externe Profile und Backlinks kontrollieren

## 16. Vorgehen bei einem Traffic-Rückgang

Nicht jede Schwankung ist ein technischer Fehler. Bei einem deutlichen Rückgang
soll strukturiert geprüft werden:

1. Ist die gesamte Domain oder nur eine einzelne Seite betroffen?
2. Betrifft es Klicks, Impressionen oder nur die Klickrate?
3. Betrifft es ein Land, Gerät oder eine Sprache?
4. Trat der Rückgang direkt nach einem Deployment auf?
5. Sind Seiten nicht mehr indexiert oder falsch kanonisiert?
6. Funktionieren Redirects, Sitemap und `robots.txt`?
7. Gibt es Serverfehler, Sicherheitsprobleme oder manuelle Maßnahmen?
8. Haben sich Nachfrage, Saison oder Suchergebnisse verändert?
9. Gab es ein bestätigtes Google-Update?

Änderungen sollten dokumentiert werden, damit zeitliche Zusammenhänge zwischen
Deployment und Suchleistung erkennbar bleiben.

## 17. Themen, auf die RelTest keine unnötige Zeit verwenden sollte

Google nennt mehrere häufig überschätzte Punkte:

- Das `meta keywords`-Tag wird von Google nicht verwendet.
- Keyword-Wiederholungen verbessern Inhalte nicht und können Spam darstellen.
- Es gibt keine ideale Mindestwortzahl.
- Die Anzahl der Überschriften ist kein eigener Rankingtrick.
- Keywords in Domain oder URL sorgen allein nicht für gute Rankings.
- PageRank ist nur einer von vielen Bestandteilen der Google-Systeme.
- Duplicate Content führt nicht automatisch zu einer manuellen Strafe, sollte
  aber aus Gründen der Klarheit und Crawlingeffizienz reduziert werden.
- E-E-A-T ist kein einzelner messbarer Rankingfaktor. Sichtbare Erfahrung,
  Fachkompetenz und Vertrauen bleiben trotzdem für Nutzer und Inhalte wichtig.

## 18. Priorisierte Gesamtcheckliste

### P0: Vor dem Go-live

- [ ] vollständige Redirect-Matrix erstellen und testen.
- [ ] individuelle Titles und Meta-Descriptions einbauen.
- [ ] Canonicals für jede Seite einbauen.
- [ ] korrekte `hreflang`-Paare für alle Seiten einbauen.
- [ ] `sitemap.xml` und `robots.txt` erzeugen.
- [ ] HTTPS- und Domainvarianten vereinheitlichen.
- [ ] Search Console und Domain-Property vorbereiten.
- [ ] Fehlerseite und korrekte Statuscodes prüfen.
- [ ] zentrale Seiten mobil und mit deaktiviertem Cache testen.
- [ ] Ausgangswerte der alten Website sichern.

### P1: Direkt zum Relaunch

- [ ] Redirects und neue Website gleichzeitig aktivieren.
- [ ] Sitemap einreichen.
- [ ] zentrale URLs live prüfen.
- [ ] Crawl der neuen Website durchführen.
- [ ] Analytics und Consent korrekt aktivieren.
- [ ] externe Unternehmensprofile aktualisieren.

### P2: Erste sechs Wochen

- [ ] Indexierung und Migration eng überwachen.
- [ ] 404, Canonical- und `hreflang`-Fehler beheben.
- [ ] Core Web Vitals aus realen Nutzerdaten prüfen.
- [ ] Suchanfragen und Zielseiten analysieren.
- [ ] wichtige Wissensartikel veröffentlichen.

### P3: Laufender Ausbau

- [ ] monatliches Monitoring durchführen.
- [ ] Wissensbereich regelmäßig erweitern.
- [ ] Inhalte fachlich aktuell halten.
- [ ] interne Links ausbauen.
- [ ] strukturierte Daten weiterentwickeln.
- [ ] seriöse externe Erwähnungen und Links fördern.

## 19. Offizielle Quellen

Grundlage dieses Dokuments sind insbesondere:

- [Google SEO-Startleitfaden](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de)
- [Sitemap erstellen und einreichen](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Einführung in robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Website mit URL-Änderungen umziehen](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Lokalisierte Seiten und hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Erste Schritte mit der Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start)
- [Hilfreiche, zuverlässige und nutzerorientierte Inhalte](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Rückgänge beim Suchtraffic untersuchen](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops)

Die Google-Dokumentation wird regelmäßig aktualisiert. Vor größeren
Migrationen oder grundlegenden SEO-Änderungen sollten die verlinkten Quellen
erneut geprüft werden.
