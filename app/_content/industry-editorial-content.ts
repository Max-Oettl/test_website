import type { Locale } from "../_i18n/config";

export type IndustryEditorialLayout =
  | "field-loop"
  | "lifetime-curve"
  | "stress-map"
  | "qualification-stack"
  | "usage-spectrum"
  | "asset-cycle"
  | "safety-case"
  | "mission-chain"
  | "availability-loop";

export type IndustryEditorialContent = {
  layout: IndustryEditorialLayout;
  heroTag: string;
  seoEyebrow: string;
  seoTitle: string;
  seoParagraphs: [string, string];
  productTitle: string;
  productLead: string;
  products: Array<{
    name: string;
    context: string;
    risk: string;
    evidence: string;
  }>;
  imageBriefs: Array<{
    label: string;
    title: string;
    description: string;
    alt: string;
    format: "wide" | "portrait";
  }>;
  project: {
    eyebrow: string;
    title: string;
    challenge: string;
    approach: string;
    result: string;
    deliverables: string[];
  };
  knowledgeTitle: string;
  knowledgeLead: string;
  knowledge: Array<{
    title: string;
    text: string;
    href: string;
    linkLabel: string;
  }>;
  history?: {
    eyebrow: string;
    title: string;
    text: string;
    lesson: string;
    sourceLabel: string;
    sourceHref: string;
  };
};

const de: Record<string, IndustryEditorialContent> = {
  automotive: {
    layout: "field-loop",
    heroTag: "E-Mobilität · Steuergeräte · Fahrwerk",
    seoEyebrow: "Reliability Engineering Automotive",
    seoTitle: "Automotive-Zuverlässigkeit entsteht zwischen Kundennutzung, Prüfstand und Serie",
    seoParagraphs: [
      "Zuverlässigkeitstechnik im Automotive Engineering muss Fahrprofile, Temperatur, Vibration, Ladeverhalten und Softwarezustände gemeinsam betrachten. Ein Prüfplan ist erst dann belastbar, wenn sein Lastkollektiv die reale Fahrzeugnutzung abbildet und die relevanten Ausfallmechanismen von E-Antrieb, Batterieperipherie, Steuergerät oder Fahrwerkskomponente anregt.",
      "RelTest verbindet Automotive-Lebensdauererprobung, FMEA und FTA, Design of Experiments, Garantie- und Felddatenanalyse sowie statistische Zuverlässigkeitsnachweise. So wird aus einzelnen Tests eine argumentierbare Freigabestrategie für OEM, Tier-1 und Komponentenentwicklung.",
    ],
    productTitle: "Drei Produkte, drei unterschiedliche Zuverlässigkeitsfragen",
    productLead: "Die Branche ist kein einheitlicher Belastungsfall. Produktfunktion, Einbauort und Kundenkollektiv bestimmen, welche Aussage ein Test überhaupt liefern kann.",
    products: [
      { name: "E-Achse und elektrischer Antrieb", context: "Drehmomentkollektive, Lagerkräfte, Kühlung und hochdynamische Betriebswechsel wirken gleichzeitig.", risk: "Lagerermüdung, Dichtungsverschleiß, thermische Alterung und Wechselwirkungen zwischen Inverter und Maschine.", evidence: "Lastkollektivbasierte Erprobung, Temperatur- und Schwingungsmessung sowie Lebensdauermodell mit Streuung." },
      { name: "Batteriekühlung und Nebenaggregate", context: "Pumpen und Ventile laufen in wechselnden Betriebspunkten, Medienzuständen und Umgebungstemperaturen.", risk: "Leckage, Trockenlauf, Partikelbelastung, Blockierung und schleichender Wirkungsgradverlust.", evidence: "DoE für Einflussfaktoren, beschleunigte Prüfprofile und Abgleich mit Fahrzeug- beziehungsweise Flottendaten." },
      { name: "Steuergerät und ADAS-Sensorik", context: "Elektronik, Stecksystem, Software und Fahrzeugbordnetz bilden eine gemeinsame Funktionskette.", risk: "Lötstellen- und Kontaktprobleme, Transienten, Feuchte, Diagnosefehler und intermittierende Ausfälle.", evidence: "Umwelterprobung, Fehlerhypothesen, Ereignisdaten und reproduzierbare Systemtests über relevante Zustände." },
    ],
    imageBriefs: [
      { label: "Prüfstrategie", title: "Vom Fahrprofil zum Prüfstand", description: "Ein Prüfstand liefert erst dann belastbare Aussagen, wenn Drehmoment, Temperatur und dynamische Betriebswechsel aus der realen Nutzung in ein reproduzierbares Lastkollektiv übersetzt werden. Die instrumentierte E-Achse verbindet Einsatzprofil, Messgröße und Freigabeentscheidung.", alt: "Instrumentierte elektrische Achse auf einem Prüfstand mit Mess- und Auswertungstechnik", format: "wide" },
      { label: "Felddaten und Befund", title: "Garantieereignis und Bauteilbefund zusammenführen", description: "Garantieereignisse werden aussagekräftig, wenn Laufleistung, Nutzung und Schadteilbefund gemeinsam bewertet werden. So entstehen prüfbare Ursachenhypothesen statt einer reinen Ausfallzählung.", alt: "Geöffnetes Automotive-Steuergerät mit Schadteil und zugehörigen Felddaten in einer technischen Analyse", format: "portrait" },
    ],
    project: {
      eyebrow: "Konkreter Projektaspekt",
      title: "Aus wenigen Prüfstands- und Garantiedaten eine belastbare Fehlerhypothese entwickeln",
      challenge: "Ein Nebenaggregat fällt nur in einzelnen Fahrzeugen früh aus. Prüfstände zeigen keinen eindeutigen Fehler, die Felddaten enthalten unterschiedliche Laufleistungen und unvollständige Nutzungsinformationen.",
      approach: "RelTest strukturiert Zensierung und Laufleistung, segmentiert Fahrzeuge nach Klima und Nutzung, gleicht Schadteilbefunde mit Belastungshypothesen ab und entwirft einen gezielten DoE-Prüfplan für Dichtung, Medium, Temperatur und Betriebswechsel.",
      result: "Das Projekt liefert keine isolierte Kurve, sondern eine priorisierte Ursachenhypothese, einen reproduzierbaren Test und eine dokumentierte Entscheidungsgrundlage für Änderung und Freigabe.",
      deliverables: ["bereinigter Felddatensatz", "technische Ursachenhypothesen", "DoE- und Prüfplan", "Nachweis- und Entscheidungsbericht"],
    },
    knowledgeTitle: "Wissen, das Automotive-Projekte direkt vertieft",
    knowledgeLead: "Die Methoden werden nicht als Lexikon verlinkt, sondern dort, wo sie im Entwicklungsprozess eine konkrete Entscheidung unterstützen.",
    knowledge: [
      { title: "Zuverlässigkeitsplanung", text: "Ziele, Lastkollektive und Verantwortlichkeiten vor dem ersten Prüfstandslauf eindeutig festlegen.", href: "/wissen/planung", linkLabel: "Planung im Detail" },
      { title: "Zuverlässigkeitserprobung", text: "Prüfdauer, Stichprobe und Beschleunigung an Mechanismus und Zielaussage ausrichten.", href: "/wissen/erprobung", linkLabel: "Erprobung verstehen" },
      { title: "Prognosen aus Felddaten", text: "Laufleistungen, Zensierung und Unsicherheit in eine belastbare Lebensdaueraussage überführen.", href: "/wissen/prognosen", linkLabel: "Prognosen vertiefen" },
    ],
    history: {
      eyebrow: "Branchenrückblick",
      title: "Takata zeigt, warum Umwelteinfluss und Flottensegmentierung nicht nachträglich gedacht werden dürfen",
      text: "Die US-Verkehrssicherheitsbehörde NHTSA bezeichnet die Takata-Airbag-Rückrufe als die größten und komplexesten Fahrzeugrückrufe der US-Geschichte. Der Fall macht sichtbar, wie Alterung, Temperatur und Feuchte, globale Fahrzeugpopulationen sowie Rückverfolgbarkeit gemeinsam über das reale Risiko entscheiden.",
      lesson: "Für Reliability Engineering folgt daraus: Ein Nachweis muss nicht nur den Neuzustand bestehen, sondern Alterung, regionale Nutzung und Unsicherheit der gesamten Population abbilden.",
      sourceLabel: "NHTSA: State of the Takata Recalls",
      sourceHref: "https://www.nhtsa.gov/takata-recall-spotlight/state-takata-recalls",
    },
  },
  maschinenbau: {
    layout: "lifetime-curve",
    heroTag: "Getriebe · Spindeln · Hydraulik",
    seoEyebrow: "Zuverlässigkeitstechnik Maschinenbau",
    seoTitle: "Maschinenzuverlässigkeit verbindet Lebensdauer, Verfügbarkeit und Instandhaltung",
    seoParagraphs: [
      "Zuverlässigkeit im Maschinenbau wird durch reale Lastkollektive, Verschleiß, Ermüdung, Schmierung, Verschmutzung und die Wechselwirkung mehrerer Baugruppen bestimmt. Für Getriebe, Spindeln, Hydraulikaggregate oder Sondermaschinen reicht eine pauschale MTBF-Angabe deshalb selten aus.",
      "RelTest entwickelt Lebensdauermodelle, Weibull-Analysen, Prüfstrategien und Verfügbarkeitsbewertungen mit klarer Systemgrenze. Felddaten, Wartungsereignisse und Schadteilanalysen werden so verbunden, dass Konstruktion, Betrieb und Service dieselbe technische Ursache bewerten.",
    ],
    productTitle: "Zuverlässigkeit am konkreten Maschinensystem",
    productLead: "Je nach Produkt stehen andere Ausfallmechanismen und wirtschaftliche Folgen im Vordergrund.",
    products: [
      { name: "Werkzeugmaschinenspindel", context: "Hohe Drehzahlen, wechselnde Bearbeitungskräfte und thermische Gradienten beeinflussen Präzision und Lagerleben.", risk: "Lagerermüdung, Unwucht, Schmierungsdefizite und thermisch verursachte Maßabweichung.", evidence: "Last- und Temperaturmessung, Zustandsmerkmale, Lebensdaueranalyse und klar definierte Präzisionsgrenze." },
      { name: "Industriegetriebe", context: "Drehmomentspitzen, Start-Stopp-Zyklen, Ölzustand und Ausrichtung wirken auf Zahnflanken und Lager.", risk: "Pitting, Graufleckigkeit, Lagerausfall, Dichtungsverschleiß und Folgeschäden durch Partikel.", evidence: "Schadensmechanismus, Lastkollektiv, beschleunigter Komponentenversuch und Betriebsdaten werden abgeglichen." },
      { name: "Hydraulischer Aktor", context: "Druckzyklen, Temperatur, Medium und Kontamination bestimmen Funktion und Leckageverhalten.", risk: "Dichtungsalterung, interne Leckage, Ventilklemmen und dynamischer Funktionsverlust.", evidence: "Prüfprofil über Druck und Temperatur, DoE der Einflussgrößen und Grenzwert für Funktionsdegradation." },
    ],
    imageBriefs: [
      { label: "Schadensanalyse", title: "Schadteil, Lastkollektiv und Zustandsdaten", description: "Zahnflanke, Lagerbefund und Betriebsdaten müssen auf denselben Ausfallmechanismus bezogen werden. Erst die Verbindung aus physischem Schadbild und zeitlichem Zustandsverlauf zeigt, ob Last, Schmierung oder Einbau den dominierenden Beitrag leisten.", alt: "Geöffnetes Industriegetriebe mit sichtbarer Zahnflanke, Lager und zugehörigen Zustandsdaten", format: "wide" },
      { label: "Lebensdauererprobung", title: "Spindelprüfung unter realistischen Bearbeitungskräften", description: "Kraft, Temperatur und Schwingung werden gemeinsam erfasst, damit nicht nur die Laufzeit, sondern auch die tatsächliche Beanspruchung der Spindel bekannt ist. Daraus lassen sich belastbare Prüfprofile und technisch begründete Grenzkriterien ableiten.", alt: "Instrumentierte Werkzeugmaschinenspindel auf einem Prüfstand mit Kraft-, Temperatur- und Schwingungssensorik", format: "portrait" },
    ],
    project: {
      eyebrow: "Typisches Lebensdauerprojekt",
      title: "Wiederkehrende Lagerschäden nicht nur statistisch, sondern mechanistisch erklären",
      challenge: "Mehrere Anlagen zeigen ähnliche Lagerschäden, aber Ausfallzeiten und Betriebsstunden streuen stark. Wartung und Konstruktion bewerten unterschiedliche Ursachen.",
      approach: "RelTest vereinheitlicht Ereignisdefinitionen, trennt zensierte von ausgefallenen Einheiten, analysiert Last- und Schmierungsbedingungen und verknüpft Weibull-Parameter mit den technischen Befunden.",
      result: "Die Bewertung zeigt, welche Population wirklich vergleichbar ist, welcher Mechanismus dominiert und ob konstruktive Änderung, Betriebsgrenze oder Wartungsintervall den größten Hebel besitzt.",
      deliverables: ["Daten- und Populationsdefinition", "Weibull- und Lebensdauerbewertung", "Mechanismen-Ranking", "Maßnahmen- und Prüfempfehlung"],
    },
    knowledgeTitle: "Methodische Vertiefung für Maschinen und Anlagen",
    knowledgeLead: "Lebensdauerkennwerte erhalten erst durch Mechanismus, Systemgrenze und Beobachtungskontext ihre technische Bedeutung.",
    knowledge: [
      { title: "Schwachstellenanalyse", text: "Schadbild, Funktion und Ausfallursache systematisch statt symptomorientiert verbinden.", href: "/wissen/schwachstellenanalyse", linkLabel: "Schwachstellen analysieren" },
      { title: "Zuverlässigkeitsprognose", text: "Aus kleinen Stichproben und zensierten Betriebsdaten belastbare Aussagen mit Unsicherheit entwickeln.", href: "/wissen/prognosen", linkLabel: "Prognosen verstehen" },
      { title: "Absicherung", text: "Berechnung, Versuch und Felddaten zu einem nachvollziehbaren technischen Nachweis zusammenführen.", href: "/wissen/absicherung", linkLabel: "Absicherung vertiefen" },
    ],
  },
  "elektronische-produkte": {
    layout: "stress-map",
    heroTag: "Leiterplatte · Leistungselektronik · Sensorik",
    seoEyebrow: "Elektronik-Zuverlässigkeit und Umwelterprobung",
    seoTitle: "Elektronik fällt selten an nur einer Belastung aus",
    seoParagraphs: [
      "Zuverlässigkeit elektronischer Produkte entsteht aus dem Zusammenspiel von Bauteil, Leiterplatte, Verbindungstechnik, Gehäuse, Software und realer Umgebung. Temperaturwechsel, Feuchte, Vibration, elektrische Last und Fertigungsstreuung können gemeinsam Ausfallmechanismen anregen, die ein isolierter Standardtest nicht sichtbar macht.",
      "RelTest plant Umwelterprobung für Elektronik, analysiert intermittierende Feldausfälle und nutzt DoE, HALT-orientierte Entwicklungsversuche, Lebensdauermodelle und physikalische Fehleranalyse. Entscheidend ist die Übersetzung des Einsatzprofils in eine prüfbare Stress- und Mechanismenlandkarte.",
    ],
    productTitle: "Elektroniksysteme nach Stresspfad unterscheiden",
    productLead: "Ein Leistungsmodul altert anders als ein Sensor und ein vernetztes Steuergerät. Die Prüfstrategie muss diese Unterschiede sichtbar machen.",
    products: [
      { name: "Leistungselektronischer Umrichter", context: "Hohe Sperrschichttemperaturen und Leistungswechsel beanspruchen Chip, Bondverbindungen, Substrat und Kühlpfad.", risk: "Power Cycling, Bond-Wire-Lift-off, Lotermüdung, Delamination und thermischer Widerstandsanstieg.", evidence: "Missionsprofil, Temperaturhub, Lastwechseltest und Degradationsmerkmal werden in einem Modell verbunden." },
      { name: "Industriesensor", context: "Feuchte, Medien, Dichtung, Steckkontakt und Kalibrierung bestimmen die Messfunktion im Feld.", risk: "Drift, Korrosion, Kontaktunterbrechung, Membran- oder Dichtungsalterung.", evidence: "Kombinierte Klima- und Funktionsprüfung, Driftgrenze sowie Analyse nach Einsatzort und Chargen." },
      { name: "Embedded Control Unit", context: "Hardware, Firmware, Versorgung und Kommunikation müssen über alle Betriebszustände zusammen funktionieren.", risk: "Reset, Brownout, Timingfehler, Lötstellenrisse und nur sporadisch reproduzierbare Kommunikationsausfälle.", evidence: "Zustandsbasierte Systemtests, elektrische Transienten, Temperaturwechsel und Ereignislogging mit eindeutiger Fehlerdefinition." },
    ],
    imageBriefs: [
      { label: "Kombinierte Umwelterprobung", title: "Leiterplatte in Umwelt- und Funktionsprüfung", description: "Temperatur, Feuchte, Versorgung und Funktion wirken bei elektronischen Produkten gleichzeitig. Durch synchronisierte Belastung und Ereignisaufzeichnung werden kurze Unterbrechungen reproduzierbar und einer konkreten Baugruppe oder Schnittstelle zuordenbar.", alt: "Elektronische Baugruppe in einer Klimakammer mit angeschlossener Mess- und Loggingtechnik", format: "wide" },
      { label: "Physikalische Fehleranalyse", title: "Vom intermittierenden Fehler zur physischen Ursache", description: "Ein Schliffbild allein erklärt noch keinen Feldausfall. Erst die Verknüpfung von Lötstellenbefund, Temperaturwechselprofil und elektrischem Ereignis zeigt, welcher Mechanismus vorliegt und ob eine Änderung wirksam ist.", alt: "Mikroskopische Analyse einer Lötstelle neben Temperaturwechselprofil und Prüfprotokoll", format: "portrait" },
    ],
    project: {
      eyebrow: "Projektbeispiel Elektronik",
      title: "Intermittierende Sensorausfälle unter Feuchte und Temperatur reproduzierbar machen",
      challenge: "Ein Sensor verliert im Feld kurzzeitig sein Signal. Rückläufer funktionieren bei Raumtemperatur, Standard-Klimatests bleiben ohne eindeutigen Befund.",
      approach: "RelTest beschreibt die Fehlerfunktion präzise, kombiniert Feuchte, Temperaturwechsel, Versorgung und Steckzustand in einem fokussierten DoE und legt Trigger sowie Logging für kurze Unterbrechungen fest.",
      result: "Ein reproduzierbarer Stresspfad trennt Kontakt-, Dichtungs- und Elektronikhypothesen. Änderungen können danach mit derselben Metrik bewertet werden.",
      deliverables: ["Fehler- und Ereignisdefinition", "Stress-Mechanismen-Matrix", "DoE-Prüfplan", "Wirksamkeitsnachweis der Änderung"],
    },
    knowledgeTitle: "Wissenselemente für die Elektronikentwicklung",
    knowledgeLead: "Umwelterprobung wird stärker, wenn sie mit Ursachenanalyse und effizienter Versuchsplanung verbunden ist.",
    knowledge: [
      { title: "Design of Experiments", text: "Kombinierte Belastungen und Wechselwirkungen mit begrenztem Versuchsumfang untersuchen.", href: "/wissen/design-of-experiments", linkLabel: "DoE anwenden" },
      { title: "Schwachstellenanalyse", text: "Intermittierende Symptome in technische Fehlerpfade und prüfbare Hypothesen übersetzen.", href: "/wissen/schwachstellenanalyse", linkLabel: "Fehlerpfade vertiefen" },
      { title: "Erprobung", text: "IEC-60068-nahe Umweltprüfungen an reale Nutzung und Ausfallmechanismen anpassen.", href: "/wissen/erprobung", linkLabel: "Erprobung planen" },
    ],
  },
  halbleiterindustrie: {
    layout: "qualification-stack",
    heroTag: "Wafer · Package · Power Cycling",
    seoEyebrow: "Semiconductor Reliability Engineering",
    seoTitle: "Halbleiterqualifikation braucht Missionsprofil, Mechanismus und statistische Evidenz",
    seoParagraphs: [
      "Halbleiter-Zuverlässigkeit wird nicht allein durch das Bestehen einer Qualifikationsnorm bestimmt. Für MOSFET, IGBT, Sensor-ASIC oder Mikrocontroller muss klar sein, welche elektrischen und thermischen Belastungen im späteren Produkt auftreten und welche Mechanismen durch HTOL, Temperaturwechsel, Feuchte- oder Power-Cycling-Tests tatsächlich abgedeckt werden.",
      "RelTest unterstützt bei Semiconductor Reliability, AEC-Q-orientierter Qualifikation, DoE, Stichproben- und Ausfallplanung sowie der Verbindung von Wafer-, Package- und Applikationsdaten. Das Ergebnis ist eine Evidenzkette vom Missionsprofil bis zur Freigabe – inklusive Grenzen und verbleibender Unsicherheit.",
    ],
    productTitle: "Qualifikationslogik nach Halbleiterfunktion",
    productLead: "Bauelementtyp, Package und Einsatzprofil entscheiden darüber, welche Belastung beschleunigt werden kann und welche Aussage daraus zulässig ist.",
    products: [
      { name: "Leistungs-MOSFET oder IGBT", context: "Strom, Sperrspannung, Temperaturhub und Kühlpfad erzeugen zyklische und zeitabhängige Belastungen.", risk: "Bond- und Lotermüdung, Gate-Oxid-Degradation, Delamination und Anstieg des thermischen Widerstands.", evidence: "Power Cycling, HTOL, elektrische Kennwerte und missionsprofilbasierte Extrapolation mit klarer Ausfallgrenze." },
      { name: "MEMS- oder Sensor-ASIC", context: "Mechanische Struktur, Packaging, Kalibrierung und Signalverarbeitung bestimmen gemeinsam die Messgüte.", risk: "Offsetdrift, Stiction, Feuchteeinfluss, Package-Stress und schleichende Parameteränderung.", evidence: "Temperatur- und Feuchtematrix, Driftmodell, Lotvergleich und Messsystemanalyse." },
      { name: "Mikrocontroller im sicherheitsrelevanten System", context: "Siliziumzuverlässigkeit, Speicher, Diagnose und Applikationslast müssen als System betrachtet werden.", risk: "Latente Defekte, Alterung, Speicherfehler, Common-Cause-Anteile und unzureichende Diagnoseabdeckung.", evidence: "Qualifikationsdaten, FMEDA-nahe Annahmen, Felddaten und anwendungsbezogene Robustheitsnachweise." },
    ],
    imageBriefs: [
      { label: "Qualifikationskette", title: "Evidenzkette vom Wafer bis zur Applikation", description: "Prozessdaten, Package-Qualifikation und das Lastprofil der Anwendung beantworten unterschiedliche Teile derselben Zuverlässigkeitsfrage. Die durchgängige Evidenzkette zeigt, was bereits nachgewiesen ist und wo applikationsspezifische Lücken verbleiben.", alt: "Wafer, Halbleiter-Die, geöffnetes Package und Leistungselektronik-Prüfaufbau als zusammenhängende Evidenzkette", format: "wide" },
      { label: "Beschleunigte Erprobung", title: "Power-Cycling-Prüfung mit Degradationsmerkmal", description: "Beim Power Cycling wird nicht nur bis zum Ausfall gezählt. Der thermische Widerstand macht fortschreitende Degradation sichtbar und erlaubt, Beschleunigungsannahmen, Abbruchkriterium und Lebensdauermodell technisch aufeinander abzustimmen.", alt: "Leistungshalbleitermodul im Power-Cycling-Prüfstand mit Temperaturmessung und Degradationstrend", format: "portrait" },
    ],
    project: {
      eyebrow: "Qualifikationsprojekt",
      title: "Aus generischen Qualifikationstests eine applikationsbezogene Freigabe ableiten",
      challenge: "Ein Leistungshalbleiter erfüllt Standardprüfungen, soll aber in einem neuen Lastprofil mit größeren Temperaturhüben und längerer Ziellebensdauer eingesetzt werden.",
      approach: "RelTest übersetzt das Missionsprofil in relevante Stressgrößen, prüft Beschleunigungsannahmen, bewertet vorhandene Qualifikations- und Lotdaten und plant ergänzende Power-Cycling- beziehungsweise Robustheitsversuche.",
      result: "Die Freigabe trennt belegte Bereiche, modellbasierte Extrapolation und offene Risiken. Zusätzliche Tests werden nur dort eingesetzt, wo sie die Entscheidung tatsächlich verändern.",
      deliverables: ["Missionsprofil-Übersetzung", "Evidenz- und Lückenanalyse", "Stichproben- und Testplan", "Freigabeargumentation mit Unsicherheit"],
    },
    knowledgeTitle: "Methoden für Halbleiterqualifikation und Robustheit",
    knowledgeLead: "DoE, Erprobung und Prognose bilden eine Kette – von der effizienten Faktoruntersuchung bis zur Lebensdaueraussage.",
    knowledge: [
      { title: "Design of Experiments", text: "Prozess- und Package-Einflüsse samt Wechselwirkungen effizient und reproduzierbar bewerten.", href: "/wissen/design-of-experiments", linkLabel: "DoE vertiefen" },
      { title: "Zuverlässigkeitserprobung", text: "Beschleunigung, Zensierung und Ausfallkriterium passend zum Mechanismus definieren.", href: "/wissen/erprobung", linkLabel: "Erprobung verstehen" },
      { title: "Zuverlässigkeitsprognose", text: "Qualifikations- und Felddaten mit Annahmen und Unsicherheit auf das Missionsprofil übertragen.", href: "/wissen/prognosen", linkLabel: "Prognosen einordnen" },
    ],
  },
  konsumgueter: {
    layout: "usage-spectrum",
    heroTag: "Smart Devices · Akkus · Haushaltsgeräte",
    seoEyebrow: "Consumer Electronics Reliability",
    seoTitle: "Konsumgüter müssen reale Nutzung, Fehlgebrauch und hohe Stückzahlen beherrschen",
    seoParagraphs: [
      "Zuverlässigkeit von Konsumgütern entscheidet sich nicht nur im Labor. Smartphones, Wearables, Akkuwerkzeuge, Smart-Home-Produkte und Haushaltsgeräte erleben Stürze, Feuchte, Ladezyklen, blockierte Lüftung, wechselnde Nutzer und große Fertigungsstreuungen. Seltene Fehler werden bei hoher Stückzahl schnell wirtschaftlich und sicherheitsrelevant.",
      "RelTest verbindet Consumer-Electronics-Tests, Batterie- und Ladeprofilbewertung, beschleunigte Lebensdauererprobung, Felddatenanalyse und Risikomanagement. Der Fokus liegt auf robusten Produkten, klaren Garantieannahmen und einer Prüfstrategie, die normalen Gebrauch und plausiblen Fehlgebrauch unterscheidet.",
    ],
    productTitle: "Nutzungsspektrum statt Einheitsprüfung",
    productLead: "Kundenprodukte werden unterschiedlich behandelt. Diese Varianz gehört in die technische Zuverlässigkeitsbewertung.",
    products: [
      { name: "Smartphone oder Wearable", context: "Ladezustand, Temperatur, Sturz, Feuchte und dauerhafte Körpernähe erzeugen ein breites Nutzungsspektrum.", risk: "Batterieüberhitzung, Display- und Gehäuseschäden, Dichtungsverlust, Steck- und Kontaktprobleme.", evidence: "Nutzungssegmente, Drop- und Klimaerprobung, Ladezyklusdaten sowie klare Sicherheits- und Funktionsgrenzen." },
      { name: "Akkuwerkzeug", context: "Hohe Leistungsimpulse, Staub, Stöße, Tiefentladung und wechselnde Akkupacks belasten das Gesamtsystem.", risk: "Zellalterung, Kontaktwiderstand, Motortemperatur, Getriebeverschleiß und Schutzabschaltung.", evidence: "Lastprofilbasierte Systemtests, Temperatur- und Stromlogging sowie Vergleich mehrerer Nutzerklassen." },
      { name: "Vernetztes Haushaltsgerät", context: "Mechanik, Wasserführung, Elektronik, Softwareupdates und jahrelanger Standby-Betrieb greifen ineinander.", risk: "Leckage, Pumpenverschleiß, Sensor-Drift, Relais- oder Netzteilausfall und updatebedingte Funktionsprobleme.", evidence: "Lebensdauerzyklen, Fehlerbaumanalyse, Felddaten und regressionsfähige Funktionsprüfungen." },
    ],
    imageBriefs: [
      { label: "Reale Nutzung", title: "Nutzungsszenarien eines Akkuprodukts", description: "Hohe Last, Staub, Ladeverhalten und Pausenzeiten erzeugen sehr unterschiedliche Beanspruchungen. Repräsentative Nutzungsprofile verhindern, dass Prüfung und Garantieprognose nur einen theoretischen Durchschnittsnutzer abbilden.", alt: "Akkuwerkzeug in unterschiedlichen Nutzungssituationen mit geöffnetem Akku und Messleitungen", format: "wide" },
      { label: "Systembetrachtung", title: "Batterie, Ladeelektronik und Gehäuse als System", description: "Zellen, Schutzschaltung, Temperatursensor, Ladegerät und Gehäuse bestimmen Sicherheit und Lebensdauer gemeinsam. Die Systembetrachtung macht Wechselwirkungen sichtbar, die bei isolierten Komponentenprüfungen unentdeckt bleiben.", alt: "Geöffneter Consumer-Akkupack mit Zellen, Schutzschaltung, Temperatursensor und Gehäuse", format: "portrait" },
    ],
    project: {
      eyebrow: "Projekt zwischen Kosten und Garantie",
      title: "Garantieausfälle eines Akkuwerkzeugs nach Nutzerprofilen erklären",
      challenge: "Die Gesamtausfallquote wirkt akzeptabel, einzelne Märkte und Anwendungen zeigen jedoch deutlich frühere Akku- und Getriebeschäden.",
      approach: "RelTest segmentiert Nutzung und Klima, bereinigt Rückläuferdaten, ordnet Schadbilder technischen Mechanismen zu und entwickelt repräsentative Last- und Ladeprofile für Systemtests.",
      result: "Konstruktion und Einkauf erhalten eine belastbare Basis für Komponentenänderung, Lieferantenanforderung und Garantieprognose – ohne alle Nutzer über denselben Mittelwert zu bewerten.",
      deliverables: ["Nutzer- und Marktsegmente", "Schadbildklassifikation", "Systemprüfprofile", "Garantie- und Maßnahmenbewertung"],
    },
    knowledgeTitle: "Wissen für robuste Consumer-Produkte",
    knowledgeLead: "Hohe Stückzahlen verlangen frühe Risikopriorisierung und eine Teststrategie, die seltene, aber folgenreiche Fehler nicht verwässert.",
    knowledge: [
      { title: "Risikomanagement", text: "Sicherheit, Garantie und Kundenerlebnis nach Ursache und Auswirkung priorisieren.", href: "/wissen/risikomanagement", linkLabel: "Risiken strukturieren" },
      { title: "Schwachstellenanalyse", text: "Rückläufer nicht nur zählen, sondern Schadbilder und Nutzung zu Mechanismen verbinden.", href: "/wissen/schwachstellenanalyse", linkLabel: "Schwachstellen vertiefen" },
      { title: "Erprobung", text: "Sturz, Klima, Zyklen und Fehlgebrauch zu einer aussagekräftigen Systemprüfung kombinieren.", href: "/wissen/erprobung", linkLabel: "Erprobung planen" },
    ],
    history: {
      eyebrow: "Branchenrückblick",
      title: "Der Galaxy-Note7-Rückruf machte Batteriesicherheit zur Systemfrage",
      text: "Die US-Verbraucherschutzbehörde CPSC dokumentierte 2016 den Rückruf von rund einer Million Galaxy-Note7-Geräten in den USA, nachdem Lithium-Ionen-Batterien überhitzen und Brände verursachen konnten. Der Fall zeigt, wie Bauraum, Zelle, Fertigung, Ladeelektronik und Nutzung gemeinsam bewertet werden müssen.",
      lesson: "Für Consumer Reliability bedeutet das: Ein bestandenes Bauteilprogramm ersetzt keinen Systemnachweis unter realer Ladung, Temperatur, mechanischer Toleranz und Fertigungsstreuung.",
      sourceLabel: "CPSC: Samsung Galaxy Note7 Recall",
      sourceHref: "https://www.cpsc.gov/Recalls/2016/Samsung-Recalls-Galaxy-Note7-Smartphones",
    },
  },
  "erneuerbare-energien": {
    layout: "asset-cycle",
    heroTag: "Windenergie · PV-Wechselrichter · Speicher",
    seoEyebrow: "Reliability Engineering für erneuerbare Energiesysteme",
    seoTitle: "Zuverlässigkeit bestimmt Ertrag, Wartung und Lebenszykluskosten erneuerbarer Anlagen",
    seoParagraphs: [
      "Zuverlässigkeit von Windenergieanlagen, Photovoltaik-Wechselrichtern und Batteriespeichern ist unmittelbar mit Energieertrag und Servicekosten verbunden. Variable Umweltlasten, schwer erreichbare Standorte und lange Ziellebensdauern machen Ausfälle deutlich teurer als den reinen Komponentenpreis.",
      "RelTest verbindet Wind-Turbine-Reliability, Leistungselektronik-Lebensdauer, Condition Monitoring, Felddatenanalyse und risikobasierte Instandhaltung. Prüf- und Betriebsdaten werden so ausgewertet, dass Designverbesserung, Ersatzteilstrategie und Wartungszeitpunkt technisch und wirtschaftlich zusammenpassen.",
    ],
    productTitle: "Zuverlässigkeit entlang des Energiepfads",
    productLead: "Mechanische Großkomponenten, Leistungselektronik und Speicher besitzen unterschiedliche Alterungslogiken, wirken aber auf denselben Anlagenwert.",
    products: [
      { name: "Windenergie-Drivetrain", context: "Turbulenz, Netzereignisse, Start-Stopp-Zyklen und Regelung erzeugen nichtstationäre Lager- und Zahnlasten.", risk: "Lager- und Getriebeschäden, Schmierungsprobleme, Fehlausrichtung und lange reparaturbedingte Stillstände.", evidence: "SCADA- und Condition-Monitoring-Daten, Schadteilbefund, Lastkollektiv und Zuverlässigkeitsmodell." },
      { name: "Rotorblatt", context: "Regen, Partikel, UV, Blitz und zyklische Biegelast wirken über Jahrzehnte auf Struktur und Oberfläche.", risk: "Leading-Edge-Erosion, Delamination, Verklebungsfehler, Blitzschäden und Ertragsverlust.", evidence: "Inspektionsdaten, Material- und Subkomponententests, Ermüdungsnachweis und Degradationsverlauf." },
      { name: "PV-Wechselrichter oder Speicherumrichter", context: "Tageszyklen, hohe Temperaturen, Teillast und Netztransienten belasten Leistungsmodule und Zwischenkreis.", risk: "Power-Cycling-Schäden, Kondensatoralterung, Lüfterausfall, Isolations- und Steuerungsprobleme.", evidence: "Missionsprofil, thermisches Modell, beschleunigte Tests und Feldauswertung nach Standort und Betriebsweise." },
    ],
    imageBriefs: [
      { label: "Felddaten und Instandhaltung", title: "Inspektion eines Drivetrains in der Gondel", description: "Der physische Befund an Lager oder Getriebe erhält erst durch Last-, Standort- und Zustandsdaten seine Bedeutung. So lassen sich wiederkehrende Mechanismen erkennen und Wartung, Ersatzteile sowie konstruktive Maßnahmen gezielter priorisieren.", alt: "Inspektion von Hauptlager und Getriebe einer Windenergieanlage mit angezeigtem Zustandsverlauf", format: "wide" },
      { label: "Missionsprofil", title: "Missionsprofil eines PV- oder Speicherumrichters", description: "Temperatur- und Leistungswechsel über Tag, Jahr und Standort bestimmen die Beanspruchung von Halbleitern, Kondensatoren und Kühlung. Das Missionsprofil übersetzt diese Nutzung in prüfbare Lasten und belastbare Lebensdaueraussagen.", alt: "Geöffneter Industrie-Wechselrichter mit Leistungshalbleitern, Kühlpfad und Temperatur-Leistungs-Profil", format: "portrait" },
    ],
    project: {
      eyebrow: "Asset-Lifecycle-Projekt",
      title: "Getriebeereignisse mehrerer Windparks vergleichbar machen",
      challenge: "SCADA-Alarme, Serviceberichte und Komponententausch sind unterschiedlich codiert. Eine reine Ausfallrate erklärt weder Standortunterschiede noch den Einfluss der Betriebsführung.",
      approach: "RelTest definiert Systemgrenzen und Ereignisse, harmonisiert Betriebs- und Schadensdaten, bildet Exposition und Zensierung ab und untersucht Last-, Standort- und Lieferantenmerkmale.",
      result: "Betreiber erhalten ein belastbares Komponentenranking, eine transparentere Ersatzteil- und Wartungsplanung sowie technische Hypothesen für Design und Betrieb.",
      deliverables: ["harmonisierte Ereignislogik", "standortbezogene Zuverlässigkeitskennwerte", "Kritikalitäts- und Kostenbewertung", "Monitoring- und Maßnahmenplan"],
    },
    knowledgeTitle: "Wissensbausteine für den Anlagenlebenszyklus",
    knowledgeLead: "Prognose und Absicherung verbinden Entwicklungsnachweis mit der späteren Betriebs- und Instandhaltungsentscheidung.",
    knowledge: [
      { title: "Zuverlässigkeitsprognosen", text: "Zustands- und Ausfalldaten mit Exposition, Zensierung und Unsicherheit auswerten.", href: "/wissen/prognosen", linkLabel: "Prognosen vertiefen" },
      { title: "Absicherung", text: "Materialtest, Komponentenversuch und Feldbeobachtung in einer Evidenzkette zusammenführen.", href: "/wissen/absicherung", linkLabel: "Nachweise aufbauen" },
      { title: "Risikomanagement", text: "Ausfallfolge, Zugänglichkeit, Stillstand und Reparaturkosten gemeinsam priorisieren.", href: "/wissen/risikomanagement", linkLabel: "Risiken bewerten" },
    ],
    history: {
      eyebrow: "Technischer Branchenimpuls",
      title: "Rotorblatt- und Drivetrain-Tests zeigen den Wert repräsentativer Belastung",
      text: "Das US Department of Energy beschreibt, wie großskalige Blatt- und Drivetrain-Prüfungen seit den 1990er-Jahren Methoden für Ermüdungsvalidierung und höhere Windturbinen-Zuverlässigkeit geprägt haben. Entscheidend war nicht mehr Testlast, sondern eine realistischere Abbildung der wirksamen Belastungen.",
      lesson: "Für heutige Windenergieprojekte folgt daraus: Prüfdaten, Feldlasten und Condition Monitoring müssen auf denselben Mechanismus und dieselbe Systemgrenze bezogen sein.",
      sourceLabel: "U.S. DOE: Blade and Drivetrain Testing",
      sourceHref: "https://www.energy.gov/cmei/systems/articles/blade-and-drivetrain-testing-advance-wind-turbine-efficiency-and-reliability",
    },
  },
  medizintechnik: {
    layout: "safety-case",
    heroTag: "Infusionssysteme · Diagnostik · Aktive Medizinprodukte",
    seoEyebrow: "Medical Device Reliability und Risikomanagement",
    seoTitle: "Medizinprodukte brauchen eine geschlossene Kette von Risiko, Nachweis und Post-Market-Daten",
    seoParagraphs: [
      "Zuverlässigkeit in der Medizintechnik betrifft nicht nur Bauteillebensdauer. Bei Infusionspumpen, Diagnostiksystemen, chirurgischen Instrumenten und aktiven Medizinprodukten müssen technische Ausfälle, Software, Gebrauchsumgebung und mögliche Patientenschäden gemeinsam bewertet werden.",
      "RelTest unterstützt Medical Device Reliability, ISO-14971-orientiertes Risikomanagement, Design Verification und Validation, Zuverlässigkeitsnachweise sowie Post-Market-Datenanalyse. Die technische Argumentation verbindet Gefährdung, Fehlerursache, Risikokontrollmaßnahme und Evidenz über den gesamten Produktlebenszyklus.",
    ],
    productTitle: "Produkte nach klinischer Funktion und Risikopfad betrachten",
    productLead: "Die gleiche Ausfallwahrscheinlichkeit kann je nach klinischer Funktion eine völlig andere Bedeutung besitzen.",
    products: [
      { name: "Infusionspumpe", context: "Mechanik, Sensorik, Software, Verbrauchsmaterial und Bedienung bestimmen gemeinsam die abgegebene Dosis.", risk: "Über- oder Unterinfusion, blockierter Fluss, Batterieversagen, Alarm- und Bedienfehler.", evidence: "Safety Case, Flussgenauigkeit über Betriebszustände, Softwaretests, Gebrauchsumgebung und Post-Market-Signale." },
      { name: "Diagnostisches Analysegerät", context: "Probenhandling, Reagenz, Optik, Temperaturführung und Algorithmus beeinflussen das Ergebnis.", risk: "Drift, Kontamination, falsche Klassifikation, unerkannte Kalibrierabweichung und Verfügbarkeitsverlust.", evidence: "Messsystemanalyse, Robustheits-DoE, Grenzfalltests und nachvollziehbare Fehlererkennung." },
      { name: "Elektromechanisches chirurgisches Instrument", context: "Kraft, Bewegung, Sterilisation, Aufbereitung und Nutzerinteraktion wirken auf die sichere Funktion.", risk: "Blockierung, mechanischer Bruch, Dichtungsverlust, Sensorfehler und degradierte Leistung nach Aufbereitungszyklen.", evidence: "Lebensdauerzyklen, Worst-Case-Konfiguration, Gebrauchstauglichkeit und dokumentierter Risikokontrollnachweis." },
    ],
    imageBriefs: [
      { label: "Risiko und Nachweis", title: "Safety Case einer Infusionspumpe", description: "Dosierfunktion, Sensorik, Softwarealarm und mechanische Verifikation bilden gemeinsam die Sicherheitsargumentation. Eine nachvollziehbare Evidenzkette zeigt für jede relevante Gefährdung, welche Maßnahme wirkt und wodurch ihre Wirksamkeit belegt ist.", alt: "Infusionspumpe in einer Testumgebung mit Evidenzkette aus Dosierfunktion, Sensor, Softwarealarm und Verifikation", format: "wide" },
      { label: "Wiederholte Aufbereitung", title: "Prüfung nach Reinigung und Sterilisation", description: "Wiederholte Aufbereitung kann Dichtungen, Oberflächen und Betätigungskräfte schleichend verändern. Messwerte und Sichtbefunde werden deshalb über die Zyklen verfolgt und gegen ein vorab definiertes Akzeptanzkriterium bewertet.", alt: "Prüfung eines elektromechanischen Medizinprodukts nach Aufbereitungszyklen mit Kraftmessung und Sichtbefund", format: "portrait" },
    ],
    project: {
      eyebrow: "Safety-Case-Projekt",
      title: "Risikokontrollmaßnahmen einer Infusionspumpe nachweisbar schließen",
      challenge: "FMEA, Softwaretests und mechanische Verifikation existieren, lassen sich aber nicht eindeutig auf konkrete Gefährdungssituationen und klinische Betriebszustände zurückführen.",
      approach: "RelTest strukturiert Gefährdung, Sequenz von Ereignissen, technische Ursache und Kontrolle, ordnet bestehende Prüfungen zu und definiert fehlende Grenz- und Umwelttests.",
      result: "Die Nachweisführung zeigt für jede wesentliche Kontrolle, welche Evidenz vorliegt, welche Annahmen gelten und wie Produktions- und Post-Market-Daten zurückwirken.",
      deliverables: ["Risiko-Evidenz-Matrix", "Prüf- und Traceability-Lücken", "ergänzende Verifikationsplanung", "technischer Safety-Case-Beitrag"],
    },
    knowledgeTitle: "Wissen für Risiko- und Nachweisführung",
    knowledgeLead: "Medizintechnische Zuverlässigkeit wird belastbar, wenn Planung, Risikomanagement und Absicherung dieselben Anforderungen referenzieren.",
    knowledge: [
      { title: "Risikomanagement", text: "Gefährdung, Fehlermechanismus, Maßnahme und Wirksamkeitsnachweis nachvollziehbar verbinden.", href: "/wissen/risikomanagement", linkLabel: "Risikomanagement vertiefen" },
      { title: "Zuverlässigkeitsabsicherung", text: "Verifikation, Validierung und technische Evidenz zu einer schlüssigen Argumentation bündeln.", href: "/wissen/absicherung", linkLabel: "Absicherung verstehen" },
      { title: "Zuverlässigkeitsplanung", text: "Ziel, Gebrauchskontext, Verantwortlichkeit und Nachweis früh im Entwicklungsplan verankern.", href: "/wissen/planung", linkLabel: "Planung aufbauen" },
    ],
    history: {
      eyebrow: "Regulatorischer Branchenrückblick",
      title: "Die FDA-Initiative zu Infusionspumpen stärkte den Total-Product-Life-Cycle-Blick",
      text: "Die FDA reagierte 2010 auf wiederkehrende Sicherheitsprobleme bei Infusionspumpen, darunter Software-, Bedienoberflächen-, mechanische und elektrische Fehler. Die Initiative forderte detailliertere Engineering-Informationen, anwendungsnahe Designvalidierung und eine stärkere Verbindung von Entwicklung und Post-Market-Beobachtung.",
      lesson: "Für Reliability Engineering in der Medizintechnik folgt daraus: Tests müssen Gebrauchsumgebung und Risikokontrollen abbilden; Feldsignale sind Teil der Sicherheitsargumentation und kein nachgelagerter Qualitätsbericht.",
      sourceLabel: "FDA: Infusion Pump Improvement Initiative",
      sourceHref: "https://www.fda.gov/medical-devices/infusion-pumps/infusion-pump-improvement-initiative",
    },
  },
  "luft-und-raumfahrt": {
    layout: "mission-chain",
    heroTag: "Avionik · Aktuatorik · Raumfahrtsysteme",
    seoEyebrow: "Aerospace Reliability und Mission Assurance",
    seoTitle: "In Luft- und Raumfahrt muss jede Zuverlässigkeitsaussage zur Mission passen",
    seoParagraphs: [
      "Reliability Engineering in Luft- und Raumfahrt arbeitet mit kleinen Stückzahlen, extremen Umgebungen, hoher Systemkopplung und oft fehlender Reparaturmöglichkeit. Avionik, Aktuatoren, Strukturen und Raumfahrtmechanismen benötigen deshalb eine Evidenzkette aus Analyse, Qualifikation, Akzeptanztest und kontrollierten Annahmen.",
      "RelTest unterstützt Aerospace Reliability, FMEA und FTA, RAMS- und Dependability-Bewertungen, DO-160-nahe Umwelterprobung sowie statistische Nachweisplanung. Missionsprofil, Common-Cause-Risiken und Redundanz werden nicht getrennt, sondern als Systementscheidung betrachtet.",
    ],
    productTitle: "Zuverlässigkeit entlang einer Missionskette",
    productLead: "Entscheidend ist nicht nur, ob ein Bauteil funktioniert, sondern wann, wie lange und in welchem Systemzustand seine Funktion benötigt wird.",
    products: [
      { name: "Elektromechanischer Flugsteuerungsaktuator", context: "Lastkollektiv, Temperatur, Schmierung, Sensorik und Regelung bestimmen die verfügbare Stellfunktion.", risk: "Getriebe- und Lagerermüdung, Klemmen, Sensor-Drift, latente Fehler und gemeinsamer Versorgungsverlust.", evidence: "Missionsprofil, FTA, Lebensdauer- und Umweltprüfung sowie Überwachung sicherheitsrelevanter Degradationsmerkmale." },
      { name: "Avionik-LRU", context: "Elektronik, Software, Stecksystem und Kühlung arbeiten unter Vibration, Druck- und Temperaturwechseln.", risk: "Kontakt- und Lötstellenfehler, Übertemperatur, transiente Resets und unzureichende Fehlererkennung.", evidence: "DO-160-nahe Umweltprofile, Funktionsüberwachung, Fehlerinklusion und Konfigurationsnachweis." },
      { name: "Satellitenmechanismus", context: "Startlasten, Vakuum, Strahlung und lange Standzeiten treffen auf nur wenige reale Prüflinge.", risk: "Kaltverschweißung, Schmierungsverlust, Materialdegradation, Single-Point-Failure und Nichtentfaltung.", evidence: "Worst-Case-Analyse, Qualifikationsmodell, Thermal-Vacuum- und Vibrationsprüfung sowie probabilistische Unsicherheit." },
    ],
    imageBriefs: [
      { label: "Mission Assurance", title: "Missionskette vom Start bis zur Funktionsphase", description: "Vibration, Thermal-Vakuum, Standby und Funktionsbetrieb beanspruchen ein Raumfahrtsystem auf unterschiedliche Weise. Die Missionskette ordnet jeder Phase ihre dominierenden Lasten, Fehlermechanismen und Nachweise zu und macht Lücken in der Qualifikation sichtbar.", alt: "Raumfahrtmechanismus zwischen Vibrationsprüfung und Thermal-Vakuum-Kammer mit dargestellten Missionsphasen", format: "wide" },
      { label: "Umweltqualifikation", title: "Avionik-LRU in repräsentativer Umweltprüfung", description: "Schwingung, Temperatur und Funktion werden nicht getrennt bewertet. Der begleitende Funktionstest zeigt, ob die Avionik-Einheit ihre Anforderungen während des gesamten Umweltprofils erfüllt und macht intermittierende Fehler unmittelbar sichtbar.", alt: "Avionik-LRU auf einem Schwingprüfstand mit Kabelbaum, Temperaturmessstellen und Funktionstest", format: "portrait" },
    ],
    project: {
      eyebrow: "Mission-Assurance-Projekt",
      title: "Qualifikationsnachweise eines Aktuators auf ein geändertes Missionsprofil übertragen",
      challenge: "Ein bewährter Aktuator soll in einer neuen Plattform mit anderen Lastspitzen, längerer Bereitschaftszeit und veränderter thermischer Umgebung eingesetzt werden.",
      approach: "RelTest vergleicht alte und neue Missionsprofile, ordnet Belastungen den Ausfallmechanismen zu, bewertet Nachweisabdeckung und Redundanzannahmen und definiert gezielte Delta-Qualifikation.",
      result: "Die Entscheidung trennt wiederverwendbare Evidenz von echten Nachweislücken. Das reduziert unnötige Wiederholungsprüfungen, ohne neue Missionsrisiken zu verdecken.",
      deliverables: ["Mission-Profile-Delta", "Mechanismen- und Abdeckungsmatrix", "Delta-Qualifikationsplan", "begründete Freigabegrenzen"],
    },
    knowledgeTitle: "Wissen für Mission Assurance und Dependability",
    knowledgeLead: "Risiko, Absicherung und Prognose müssen auf denselben Missionszustand und dieselbe Systemarchitektur bezogen sein.",
    knowledge: [
      { title: "Zuverlässigkeitsabsicherung", text: "Analyse, Qualifikation und Systemnachweis zu einer traceable Evidence Chain verbinden.", href: "/wissen/absicherung", linkLabel: "Absicherung vertiefen" },
      { title: "Technisches Risikomanagement", text: "Single-Point-, Common-Cause- und latente Fehler in Architektur und Nachweis priorisieren.", href: "/wissen/risikomanagement", linkLabel: "Risiken analysieren" },
      { title: "Zuverlässigkeitsprognosen", text: "Kleine Stichproben, Vorwissen und Unsicherheit transparent in Missionsaussagen einordnen.", href: "/wissen/prognosen", linkLabel: "Prognosen verstehen" },
    ],
    history: {
      eyebrow: "Branchenrückblick",
      title: "Ariane 501 zeigt die Grenze von Wiederverwendung ohne repräsentative Systemqualifikation",
      text: "Der ESA-Untersuchungsbericht zum Fehlstart der Ariane 5 im Jahr 1996 führte den Verlust auf Spezifikations- und Designfehler in der Software des inertialen Referenzsystems zurück. Die Reviews und Tests hatten das Referenzsystem und die vollständige Flugsteuerung nicht ausreichend repräsentativ abgedeckt.",
      lesson: "Die technische Lehre bleibt aktuell: Bewährte Komponenten sind nur innerhalb ihrer belegten Einsatzgrenzen zuverlässig. Neue Missionsprofile verlangen eine systematische Delta-Analyse und repräsentative End-to-End-Tests.",
      sourceLabel: "ESA: Ariane 501 Inquiry Board Report",
      sourceHref: "https://www.esa.int/Newsroom/Press_Releases/Ariane_501_-_Presentation_of_Inquiry_Board_report",
    },
  },
  produktionstechnik: {
    layout: "availability-loop",
    heroTag: "Montagelinien · Robotik · Prozessanlagen",
    seoEyebrow: "Anlagenverfügbarkeit und Production Reliability",
    seoTitle: "Produktionszuverlässigkeit beginnt am Engpass, nicht beim globalen MTBF-Mittelwert",
    seoParagraphs: [
      "Zuverlässigkeit in der Produktionstechnik entscheidet über Output, Ausschuss, Personalaufwand und Lieferfähigkeit. Bei Montagelinien, Robotik, Pressen, Prüfständen oder Prozessanlagen ist jedoch nicht jedes Ereignis gleich relevant: Systemgrenze, Taktabhängigkeit, Redundanz und Reparaturzeit bestimmen die tatsächliche Wirkung auf die Anlage.",
      "RelTest analysiert Anlagenverfügbarkeit, MTBF und MTTR, Stillstands- und Instandhaltungsdaten, kritische Baugruppen und Condition-Monitoring-Signale. Statt Kennzahlen lediglich zu berichten, werden Ausfallmechanismus, Engpasswirkung und Wirksamkeit von Maßnahmen nachvollziehbar verbunden.",
    ],
    productTitle: "Produktionsmittel nach Engpasswirkung bewerten",
    productLead: "Ein seltener Ausfall am Engpass kann wirtschaftlich relevanter sein als viele kurze Störungen an einer gepufferten Station.",
    products: [
      { name: "Roboterachse", context: "Dynamische Bewegungen, Kabelschlepp, Getriebe und Greifer wirken auf Taktzeit und Positioniergenauigkeit.", risk: "Getriebeverschleiß, Kabelbruch, Schmierungsdefizit, Sensorfehler und schleichende Präzisionsverluste.", evidence: "Bewegungs- und Lastklassen, Alarmhistorie, Zustandsmerkmale und funktionale Grenzwerte statt nur Stillstand." },
      { name: "Füge- oder Pressstation", context: "Kraft-Weg-Prozess, Werkzeugzustand, Materialcharge und Zuführung bestimmen Prozessfähigkeit und Verfügbarkeit.", risk: "Werkzeugverschleiß, Fehlausrichtung, Sensor-Drift, Zuführstörung und unerkanntes Qualitätsrisiko.", evidence: "Prozessdaten, DoE, Störgrundlogik und Verbindung von Qualitäts- mit Instandhaltungsereignissen." },
      { name: "End-of-Line-Prüfstand", context: "Prüfmittel, Adapter, Software und Grenzwertlogik beeinflussen Produktionstakt und Produktentscheidung.", risk: "False Fail, übersehener Fehler, Kontaktverschleiß, Drift und softwarebedingter Stillstand.", evidence: "Messsystemanalyse, Wiederhol- und Reproduzierbarkeit, Adapterlebensdauer und klare Fehlerklassifikation." },
    ],
    imageBriefs: [
      { label: "Verfügbarkeit am Engpass", title: "Engpassanalyse an einer Montagelinie", description: "Nicht jeder Stillstand beeinflusst den Ausstoß gleich stark. Takt, Ereignisfolge und Pufferzustand zeigen, welche Station den Prozess tatsächlich begrenzt und wo Zuverlässigkeitsmaßnahmen den größten Produktionsnutzen erzeugen.", alt: "Verkettete Montagelinie mit hervorgehobener Engpassstation und Auswertung von Takt, Stillstand und Pufferzustand", format: "wide" },
      { label: "Zustandsüberwachung", title: "Zustandsmerkmal einer Roboterachse", description: "Schwingungs- oder Stromsignale werden erst dann handlungsrelevant, wenn sie mit Last, Funktion und einem technischen Grenzkriterium verknüpft sind. So wird aus einem Trend eine begründete Instandhaltungsentscheidung vor dem funktionalen Ausfall.", alt: "Roboterachse mit Schwingungs- und Strommessung sowie einem ansteigenden Degradationstrend", format: "portrait" },
    ],
    project: {
      eyebrow: "Verfügbarkeitsprojekt",
      title: "Störmeldungen einer Montagelinie in technische Maßnahmen übersetzen",
      challenge: "Die Linie erzeugt tausende Alarme, MTBF und OEE sind bekannt, trotzdem wiederholen sich ungeplante Stillstände und Maßnahmen werden nach Häufigkeit statt Engpasswirkung priorisiert.",
      approach: "RelTest vereinheitlicht Ereignis- und Systemgrenzen, trennt Ursache von Folgealarm, ordnet Stillstände der Produktionswirkung zu und verbindet Wiederholung, Reparaturzeit und technische Mechanismen.",
      result: "Aus Alarmdaten entsteht ein belastbares Risikobild mit konkreten Design-, Ersatzteil-, Wartungs- und Monitoringmaßnahmen für die kritischen Stationen.",
      deliverables: ["bereinigte Störgrundstruktur", "Engpass- und Kritikalitätsmodell", "MTBF-/MTTR-Bewertung mit Grenzen", "priorisierter Maßnahmenplan"],
    },
    knowledgeTitle: "Wissen hinter Verfügbarkeit und Instandhaltungsentscheidung",
    knowledgeLead: "Prognose, Risikoanalyse und Erprobung helfen, Zustandsdaten in wirksame technische Entscheidungen zu überführen.",
    knowledge: [
      { title: "Zuverlässigkeitsprognosen", text: "Ereigniszeit, Zensierung und Zustandsverlauf für Restlebensdauer und Wartungsfenster nutzen.", href: "/wissen/prognosen", linkLabel: "Prognosen vertiefen" },
      { title: "Risikomanagement", text: "Häufigkeit, Stillstandsdauer, Qualitätsfolge und Engpasswirkung gemeinsam priorisieren.", href: "/wissen/risikomanagement", linkLabel: "Risiken bewerten" },
      { title: "Design of Experiments", text: "Prozessparameter und Wechselwirkungen bei wiederkehrenden Qualitäts- oder Anlagenproblemen effizient untersuchen.", href: "/wissen/design-of-experiments", linkLabel: "DoE einsetzen" },
    ],
  },
};

const en: Record<string, IndustryEditorialContent> = {
  automotive: {
    ...de.automotive,
    heroTag: "E-mobility · ECUs · Chassis",
    seoEyebrow: "Automotive reliability engineering",
    seoTitle: "Automotive reliability is created between customer usage, test bench and series production",
    seoParagraphs: [
      "Automotive reliability engineering must consider driving profiles, temperature, vibration, charging behaviour and software states together. A validation plan is robust only when its load collective represents actual vehicle usage and excites the relevant failure mechanisms in electric drives, battery peripherals, ECUs or chassis components.",
      "RelTest combines automotive lifetime testing, FMEA and FTA, Design of Experiments, warranty and field data analysis, and statistical reliability demonstration. Individual tests become a defensible release strategy for OEMs, Tier 1 suppliers and component development teams.",
    ],
    productTitle: "Three products, three different reliability questions",
    productLead: "Automotive is not one uniform load case. Product function, installation position and customer population determine what a test can demonstrate.",
    products: [
      { name: "Electric axle and drive", context: "Torque collectives, bearing forces, cooling and highly dynamic operating changes act simultaneously.", risk: "Bearing fatigue, seal wear, thermal ageing and interactions between inverter and electric machine.", evidence: "Load-collective testing, temperature and vibration measurement, and a lifetime model that includes variation." },
      { name: "Battery cooling and auxiliaries", context: "Pumps and valves operate under changing duty points, media conditions and ambient temperatures.", risk: "Leakage, dry running, contamination, blockage and gradual efficiency loss.", evidence: "DoE for influencing factors, accelerated test profiles and comparison with vehicle or fleet data." },
      { name: "ECU and ADAS sensing", context: "Electronics, connectors, software and the vehicle electrical system form one functional chain.", risk: "Solder and contact problems, transients, humidity, diagnostic faults and intermittent failures.", evidence: "Environmental testing, failure hypotheses, event data and reproducible system tests across relevant states." },
    ],
    imageBriefs: [
      { label: "Test strategy", title: "From driving profile to test bench", description: "A test bench supports a release decision only when torque, temperature and dynamic operating changes from real use are translated into a reproducible load collective. The instrumented electric axle connects the usage profile, measured response and acceptance decision.", alt: "Instrumented electric axle on a test bench with measurement and evaluation equipment", format: "wide" },
      { label: "Field data and findings", title: "Connect warranty event and component finding", description: "Warranty events become meaningful when mileage, usage and the physical component finding are assessed together. This creates testable causal hypotheses instead of a simple failure count.", alt: "Opened automotive ECU with a returned component and related field data in an engineering review", format: "portrait" },
    ],
    project: { eyebrow: "Specific project lens", title: "Develop a robust failure hypothesis from limited test-bench and warranty data", challenge: "An auxiliary component fails early in only a subset of vehicles. Bench tests show no clear fault, while field data contain different mileages and incomplete usage information.", approach: "RelTest structures censoring and mileage, segments vehicles by climate and use, aligns returned-part findings with load hypotheses and designs a focused DoE for seal, medium, temperature and operating transitions.", result: "The project delivers a prioritised causal hypothesis, a reproducible test and a documented basis for design change and release rather than an isolated curve.", deliverables: ["cleaned field dataset", "technical causal hypotheses", "DoE and test plan", "evidence and decision report"] },
    knowledgeTitle: "Knowledge that directly supports automotive projects",
    knowledgeLead: "Methods are linked where they support a real development decision rather than presented as an isolated glossary.",
    knowledge: [
      { title: "Reliability planning", text: "Define targets, load collectives and responsibilities before the first bench run.", href: "/wissen/planung", linkLabel: "Explore planning" },
      { title: "Reliability testing", text: "Align duration, sample size and acceleration with failure mechanism and required statement.", href: "/wissen/erprobung", linkLabel: "Understand testing" },
      { title: "Field-data prognosis", text: "Turn mileage, censoring and uncertainty into a robust lifetime statement.", href: "/wissen/prognosen", linkLabel: "Explore prognosis" },
    ],
    history: { eyebrow: "Industry retrospective", title: "Takata shows why environmental ageing and fleet segmentation cannot be an afterthought", text: "The U.S. National Highway Traffic Safety Administration describes the Takata air-bag recalls as the largest and most complex vehicle recalls in U.S. history. The case demonstrates how ageing, heat and humidity, global vehicle populations and traceability jointly determine real risk.", lesson: "The reliability lesson is clear: evidence must cover more than the new condition. It needs to represent ageing, regional use and uncertainty across the population.", sourceLabel: "NHTSA: State of the Takata Recalls", sourceHref: "https://www.nhtsa.gov/takata-recall-spotlight/state-takata-recalls" },
  },
  maschinenbau: {
    ...de.maschinenbau,
    heroTag: "Gearboxes · Spindles · Hydraulics",
    seoEyebrow: "Mechanical engineering reliability",
    seoTitle: "Machine reliability connects lifetime, availability and maintenance",
    seoParagraphs: ["Reliability in mechanical engineering is governed by real load collectives, wear, fatigue, lubrication, contamination and interactions between assemblies. For gearboxes, spindles, hydraulic units or special-purpose machinery, a generic MTBF figure is rarely sufficient.", "RelTest develops lifetime models, Weibull analyses, test strategies and availability assessments with explicit system boundaries. Field data, maintenance events and returned-part analysis are connected so that design, operations and service evaluate the same technical cause."],
    productTitle: "Reliability at the actual machine system",
    productLead: "Different products place different failure mechanisms and commercial consequences in the foreground.",
    products: [
      { name: "Machine-tool spindle", context: "High speeds, changing machining forces and thermal gradients influence precision and bearing life.", risk: "Bearing fatigue, imbalance, lubrication deficits and thermally induced dimensional deviation.", evidence: "Load and temperature measurement, condition features, lifetime analysis and a clearly defined precision limit." },
      { name: "Industrial gearbox", context: "Torque peaks, start-stop cycles, oil condition and alignment act on gears and bearings.", risk: "Pitting, micropitting, bearing failure, seal wear and particle-induced secondary damage.", evidence: "Damage mechanism, load collective, accelerated component test and operating data are aligned." },
      { name: "Hydraulic actuator", context: "Pressure cycles, temperature, fluid and contamination determine function and leakage.", risk: "Seal ageing, internal leakage, valve sticking and dynamic functional loss.", evidence: "Pressure-temperature profile, DoE of influencing factors and a functional degradation limit." },
    ],
    imageBriefs: [
      { label: "Failure analysis", title: "Returned part, load collective and condition data", description: "Gear flank, bearing finding and operating data must be linked to the same failure mechanism. Combining the physical damage pattern with the condition history reveals whether load, lubrication or installation is the dominant contributor.", alt: "Opened industrial gearbox with visible gear flank, bearing and related condition data", format: "wide" },
      { label: "Lifetime testing", title: "Spindle test under representative machining forces", description: "Force, temperature and vibration are recorded together so that the actual stress on the spindle is known, not merely its running time. This supports representative test profiles and technically justified acceptance limits.", alt: "Instrumented machine-tool spindle on a test bench with force, temperature and vibration sensors", format: "portrait" },
    ],
    project: { eyebrow: "Typical lifetime project", title: "Explain recurring bearing damage mechanistically, not statistically alone", challenge: "Several machines show similar bearing damage, but failure times and operating hours vary widely. Maintenance and design teams suspect different causes.", approach: "RelTest harmonises event definitions, separates censored units from failures, analyses load and lubrication conditions and links Weibull parameters to physical findings.", result: "The assessment identifies which population is truly comparable, which mechanism dominates and whether redesign, operating limits or maintenance intervals provide the strongest lever.", deliverables: ["data and population definition", "Weibull and lifetime assessment", "mechanism ranking", "action and test recommendation"] },
    knowledgeTitle: "Methods for machines and industrial equipment",
    knowledgeLead: "Lifetime metrics gain engineering meaning only through mechanism, system boundary and observation context.",
    knowledge: [
      { title: "Weak-point analysis", text: "Connect damage pattern, function and failure cause systematically rather than symptom by symptom.", href: "/wissen/schwachstellenanalyse", linkLabel: "Analyse weak points" },
      { title: "Reliability prognosis", text: "Develop robust statements from small samples and censored operating data, including uncertainty.", href: "/wissen/prognosen", linkLabel: "Understand prognosis" },
      { title: "Reliability assurance", text: "Combine calculation, test and field evidence into a traceable engineering demonstration.", href: "/wissen/absicherung", linkLabel: "Explore assurance" },
    ],
  },
  "elektronische-produkte": {
    ...de["elektronische-produkte"],
    heroTag: "PCBs · Power electronics · Sensors",
    seoEyebrow: "Electronics reliability and environmental testing",
    seoTitle: "Electronic products rarely fail because of one stress alone",
    seoParagraphs: ["Electronic product reliability emerges from the interaction of component, PCB, interconnect, housing, software and real environment. Temperature cycling, humidity, vibration, electrical load and manufacturing variation can jointly excite mechanisms that an isolated standard test will not reveal.", "RelTest plans electronics environmental testing, analyses intermittent field failures and applies DoE, HALT-oriented development testing, lifetime models and physical failure analysis. The core task is translating the use profile into a testable stress and mechanism map."],
    productTitle: "Distinguish electronic systems by stress path",
    productLead: "A power module ages differently from a sensor or connected control unit. The test strategy must make those differences visible.",
    products: [
      { name: "Power electronic inverter", context: "High junction temperatures and power cycles stress chip, bonds, substrate and cooling path.", risk: "Power-cycling damage, bond-wire lift-off, solder fatigue, delamination and increasing thermal resistance.", evidence: "Mission profile, temperature swing, load cycling and degradation features are connected in one model." },
      { name: "Industrial sensor", context: "Humidity, media, sealing, contacts and calibration determine measurement function in the field.", risk: "Drift, corrosion, contact interruption, membrane or seal ageing.", evidence: "Combined climate and functional test, drift limit and analysis by location and production lot." },
      { name: "Embedded control unit", context: "Hardware, firmware, power supply and communication must work across all operating states.", risk: "Reset, brownout, timing faults, solder cracks and sporadic communication failures.", evidence: "State-based system tests, electrical transients, temperature cycling and event logging with a clear failure definition." },
    ],
    imageBriefs: [
      { label: "Combined environmental testing", title: "PCB under environmental and functional test", description: "Temperature, humidity, supply conditions and function act on electronic products at the same time. Synchronized stress and event logging make short interruptions reproducible and traceable to a specific assembly or interface.", alt: "Electronic assembly in a climate chamber with connected measurement and logging equipment", format: "wide" },
      { label: "Physical failure analysis", title: "From intermittent symptom to physical cause", description: "A cross-section alone does not explain a field failure. Linking the solder-joint finding, temperature-cycle profile and electrical event reveals the active mechanism and whether a design change is effective.", alt: "Microscopic analysis of a solder joint beside its temperature-cycle profile and test record", format: "portrait" },
    ],
    project: { eyebrow: "Electronics project", title: "Make intermittent sensor failures under humidity and temperature reproducible", challenge: "A sensor briefly loses its signal in the field. Returned units work at room temperature and standard climate tests remain inconclusive.", approach: "RelTest defines the failure function precisely, combines humidity, temperature cycling, supply and connector state in a focused DoE, and specifies triggers and logging for short interruptions.", result: "A reproducible stress path separates contact, sealing and electronics hypotheses. Design changes can then be assessed with the same metric.", deliverables: ["failure and event definition", "stress-mechanism matrix", "DoE test plan", "change-effectiveness evidence"] },
    knowledgeTitle: "Knowledge modules for electronics development",
    knowledgeLead: "Environmental testing becomes stronger when it is connected to causal analysis and efficient experimental design.",
    knowledge: [
      { title: "Design of Experiments", text: "Investigate combined stresses and interactions with a limited number of tests.", href: "/wissen/design-of-experiments", linkLabel: "Apply DoE" },
      { title: "Weak-point analysis", text: "Translate intermittent symptoms into engineering failure paths and testable hypotheses.", href: "/wissen/schwachstellenanalyse", linkLabel: "Explore failure paths" },
      { title: "Reliability testing", text: "Tailor IEC 60068-related environmental tests to actual use and failure mechanisms.", href: "/wissen/erprobung", linkLabel: "Plan testing" },
    ],
  },
  halbleiterindustrie: {
    ...de.halbleiterindustrie,
    heroTag: "Wafer · Package · Power cycling",
    seoEyebrow: "Semiconductor reliability engineering",
    seoTitle: "Semiconductor qualification needs a mission profile, mechanism and statistical evidence",
    seoParagraphs: ["Semiconductor reliability is not established by passing a qualification standard alone. For MOSFETs, IGBTs, sensor ASICs or microcontrollers, engineers must understand which electrical and thermal stresses occur in the application and which mechanisms are covered by HTOL, temperature cycling, humidity or power-cycling tests.", "RelTest supports semiconductor reliability, AEC-Q-oriented qualification, DoE, sample and failure planning, and the connection of wafer, package and application data. The result is an evidence chain from mission profile to release, including limitations and residual uncertainty."],
    productTitle: "Qualification logic by semiconductor function",
    productLead: "Device type, package and use profile determine which stress can be accelerated and what conclusion is valid.",
    products: [
      { name: "Power MOSFET or IGBT", context: "Current, blocking voltage, temperature swing and cooling path create cyclic and time-dependent stresses.", risk: "Bond and solder fatigue, gate-oxide degradation, delamination and rising thermal resistance.", evidence: "Power cycling, HTOL, electrical parameters and mission-profile extrapolation with a defined failure limit." },
      { name: "MEMS or sensor ASIC", context: "Mechanical structure, packaging, calibration and signal processing jointly determine measurement quality.", risk: "Offset drift, stiction, humidity effects, package stress and gradual parameter change.", evidence: "Temperature-humidity matrix, drift model, lot comparison and measurement-system analysis." },
      { name: "Microcontroller in a safety-related system", context: "Silicon reliability, memory, diagnostics and application load must be treated as one system.", risk: "Latent defects, ageing, memory faults, common-cause contributions and insufficient diagnostic coverage.", evidence: "Qualification data, FMEDA-related assumptions, field data and application-specific robustness evidence." },
    ],
    imageBriefs: [
      { label: "Qualification chain", title: "Evidence chain from wafer to application", description: "Process data, package qualification and the application load profile answer different parts of the same reliability question. The continuous evidence chain shows what has already been demonstrated and where application-specific gaps remain.", alt: "Wafer, semiconductor die, opened package and power-electronics test setup forming a connected evidence chain", format: "wide" },
      { label: "Accelerated testing", title: "Power-cycling test with degradation feature", description: "Power cycling is more than counting cycles to failure. Thermal resistance exposes progressive degradation and helps align the acceleration assumptions, stopping criterion and lifetime model.", alt: "Power semiconductor module on a power-cycling test bench with temperature measurement and degradation trend", format: "portrait" },
    ],
    project: { eyebrow: "Qualification project", title: "Derive an application-specific release from generic qualification tests", challenge: "A power semiconductor passes standard qualification but is intended for a new profile with larger temperature swings and a longer target life.", approach: "RelTest translates the mission profile into relevant stresses, reviews acceleration assumptions, assesses existing qualification and lot data, and plans focused power-cycling or robustness tests.", result: "The release separates demonstrated regions, model-based extrapolation and open risk. Additional tests are used only where they can change the decision.", deliverables: ["mission-profile translation", "evidence and gap assessment", "sample and test plan", "release argument with uncertainty"] },
    knowledgeTitle: "Methods for semiconductor qualification and robustness",
    knowledgeLead: "DoE, testing and prognosis form a chain from efficient factor investigation to a defensible lifetime statement.",
    knowledge: [
      { title: "Design of Experiments", text: "Assess process and package effects, including interactions, efficiently and reproducibly.", href: "/wissen/design-of-experiments", linkLabel: "Explore DoE" },
      { title: "Reliability testing", text: "Define acceleration, censoring and failure criteria in line with the mechanism.", href: "/wissen/erprobung", linkLabel: "Understand testing" },
      { title: "Reliability prognosis", text: "Transfer qualification and field data to the mission profile with explicit assumptions and uncertainty.", href: "/wissen/prognosen", linkLabel: "Assess prognosis" },
    ],
  },
  konsumgueter: {
    ...de.konsumgueter,
    heroTag: "Smart devices · Batteries · Appliances",
    seoEyebrow: "Consumer electronics reliability",
    seoTitle: "Consumer products must withstand real use, foreseeable misuse and high volumes",
    seoParagraphs: ["Consumer product reliability is not decided in the laboratory alone. Smartphones, wearables, cordless tools, smart-home products and appliances experience drops, humidity, charge cycles, blocked ventilation, changing users and high manufacturing variation. At scale, rare failures quickly become commercially and safety relevant.", "RelTest combines consumer electronics testing, battery and charge-profile assessment, accelerated life testing, field data analysis and risk management. The focus is on robust products, transparent warranty assumptions and test strategies that distinguish normal use from foreseeable misuse."],
    productTitle: "Usage spectrum rather than one standard test",
    productLead: "Customers treat products differently. That variation belongs in the engineering reliability assessment.",
    products: [
      { name: "Smartphone or wearable", context: "State of charge, temperature, drops, humidity and continuous body contact create a broad use spectrum.", risk: "Battery overheating, display and housing damage, seal loss, connector and contact problems.", evidence: "Usage segments, drop and climate testing, charge-cycle data and clear safety and functional limits." },
      { name: "Cordless power tool", context: "High power pulses, dust, impacts, deep discharge and changing battery packs stress the full system.", risk: "Cell ageing, contact resistance, motor temperature, gearbox wear and protective shutdown.", evidence: "Load-profile system tests, temperature and current logging, and comparison of multiple user classes." },
      { name: "Connected household appliance", context: "Mechanics, water handling, electronics, software updates and years of standby operation interact.", risk: "Leakage, pump wear, sensor drift, relay or power-supply failure and update-induced functional faults.", evidence: "Lifetime cycles, fault-tree analysis, field data and regression-capable functional tests." },
    ],
    imageBriefs: [
      { label: "Real-world use", title: "Usage scenarios for a battery product", description: "High load, dust, charging behaviour and idle periods create very different stresses. Representative usage profiles prevent tests and warranty forecasts from describing only a theoretical average user.", alt: "Cordless tool in different usage scenarios with an opened battery pack and measurement leads", format: "wide" },
      { label: "System perspective", title: "Battery, charging electronics and housing as a system", description: "Cells, protection circuit, temperature sensor, charger and housing determine safety and lifetime together. A system-level view exposes interactions that isolated component tests can miss.", alt: "Opened consumer battery pack with cells, protection circuit, temperature sensor and housing", format: "portrait" },
    ],
    project: { eyebrow: "Project between cost and warranty", title: "Explain cordless-tool warranty failures by user profile", challenge: "The overall failure rate appears acceptable, but certain markets and applications show much earlier battery and gearbox damage.", approach: "RelTest segments use and climate, cleans returned-part data, maps damage patterns to mechanisms and develops representative load and charge profiles for system tests.", result: "Design and purchasing obtain a robust basis for component changes, supplier requirements and warranty forecasts without reducing every user to one average.", deliverables: ["user and market segments", "damage-pattern classification", "system test profiles", "warranty and action assessment"] },
    knowledgeTitle: "Knowledge for robust consumer products",
    knowledgeLead: "High volumes require early risk prioritisation and a test strategy that does not dilute rare but consequential failures.",
    knowledge: [
      { title: "Risk management", text: "Prioritise safety, warranty and customer experience by cause and consequence.", href: "/wissen/risikomanagement", linkLabel: "Structure risk" },
      { title: "Weak-point analysis", text: "Connect returns, damage patterns and usage with physical mechanisms instead of counting alone.", href: "/wissen/schwachstellenanalyse", linkLabel: "Explore weak points" },
      { title: "Reliability testing", text: "Combine drops, climate, cycles and foreseeable misuse into meaningful system evidence.", href: "/wissen/erprobung", linkLabel: "Plan testing" },
    ],
    history: { eyebrow: "Industry retrospective", title: "The Galaxy Note7 recall made battery safety a system issue", text: "In 2016, the U.S. Consumer Product Safety Commission documented the recall of about one million Galaxy Note7 devices in the United States after lithium-ion batteries could overheat and catch fire. The case shows why packaging, cell, production, charging electronics and use must be assessed together.", lesson: "For consumer reliability, a passed component programme does not replace system evidence under real charge, temperature, mechanical tolerance and production variation.", sourceLabel: "CPSC: Samsung Galaxy Note7 Recall", sourceHref: "https://www.cpsc.gov/Recalls/2016/Samsung-Recalls-Galaxy-Note7-Smartphones" },
  },
  "erneuerbare-energien": {
    ...de["erneuerbare-energien"],
    heroTag: "Wind energy · PV inverters · Storage",
    seoEyebrow: "Renewable energy reliability engineering",
    seoTitle: "Reliability determines yield, maintenance and lifecycle cost in renewable assets",
    seoParagraphs: ["Reliability of wind turbines, photovoltaic inverters and battery storage systems is directly tied to energy yield and service cost. Variable environmental loads, remote locations and long design lives make failures far more expensive than the component price alone.", "RelTest connects wind turbine reliability, power-electronics lifetime, condition monitoring, field data analysis and risk-based maintenance. Test and operating data are assessed so that design improvement, spares strategy and maintenance timing support the same technical and commercial objective."],
    productTitle: "Reliability along the energy path",
    productLead: "Mechanical major components, power electronics and storage follow different ageing logics but affect the same asset value.",
    products: [
      { name: "Wind-turbine drivetrain", context: "Turbulence, grid events, start-stop cycles and control produce non-stationary bearing and gear loads.", risk: "Bearing and gearbox damage, lubrication problems, misalignment and long repair-related downtime.", evidence: "SCADA and condition-monitoring data, returned-part findings, load collectives and a reliability model." },
      { name: "Rotor blade", context: "Rain, particles, UV, lightning and cyclic bending act on structure and surface for decades.", risk: "Leading-edge erosion, delamination, bond defects, lightning damage and yield loss.", evidence: "Inspection data, material and subcomponent tests, fatigue evidence and degradation trends." },
      { name: "PV or storage inverter", context: "Daily cycles, high temperature, partial load and grid transients stress power modules and the DC link.", risk: "Power-cycling damage, capacitor ageing, fan failure, insulation and control faults.", evidence: "Mission profile, thermal model, accelerated tests and field analysis by location and operating mode." },
    ],
    imageBriefs: [
      { label: "Field data and maintenance", title: "Inspection of a drivetrain in the nacelle", description: "A physical bearing or gearbox finding becomes meaningful when it is combined with load, site and condition data. This reveals recurring mechanisms and supports better priorities for maintenance, spares and design action.", alt: "Inspection of a wind-turbine main bearing and gearbox with a displayed condition trend", format: "wide" },
      { label: "Mission profile", title: "Mission profile of a PV or storage inverter", description: "Temperature and power cycles across the day, year and site drive the stress on semiconductors, capacitors and cooling. The mission profile translates actual use into test loads and defensible lifetime statements.", alt: "Opened industrial inverter with power modules, cooling path and temperature-power profile", format: "portrait" },
    ],
    project: { eyebrow: "Asset-lifecycle project", title: "Make gearbox events from multiple wind farms comparable", challenge: "SCADA alarms, service reports and component replacements use different codes. A single failure rate explains neither site differences nor operating-strategy effects.", approach: "RelTest defines system boundaries and events, harmonises operating and damage data, represents exposure and censoring, and analyses load, site and supplier features.", result: "Operators gain a robust component ranking, more transparent spares and maintenance planning, and engineering hypotheses for design and operation.", deliverables: ["harmonised event logic", "site-specific reliability metrics", "criticality and cost assessment", "monitoring and action plan"] },
    knowledgeTitle: "Knowledge modules for the asset lifecycle",
    knowledgeLead: "Prognosis and assurance connect development evidence with later operations and maintenance decisions.",
    knowledge: [
      { title: "Reliability prognosis", text: "Assess condition and failure data with exposure, censoring and uncertainty.", href: "/wissen/prognosen", linkLabel: "Explore prognosis" },
      { title: "Reliability assurance", text: "Connect material testing, component evidence and field observations in one evidence chain.", href: "/wissen/absicherung", linkLabel: "Build evidence" },
      { title: "Risk management", text: "Prioritise failure consequence, accessibility, downtime and repair cost together.", href: "/wissen/risikomanagement", linkLabel: "Assess risk" },
    ],
    history: { eyebrow: "Engineering industry insight", title: "Rotor-blade and drivetrain testing demonstrate the value of representative loads", text: "The U.S. Department of Energy describes how large-scale blade and drivetrain testing has shaped fatigue-validation methods and wind-turbine reliability since the 1990s. The decisive advance was not more test load, but a more representative description of effective loads.", lesson: "For current wind-energy projects, test data, field loads and condition monitoring must refer to the same mechanism and system boundary.", sourceLabel: "U.S. DOE: Blade and Drivetrain Testing", sourceHref: "https://www.energy.gov/cmei/systems/articles/blade-and-drivetrain-testing-advance-wind-turbine-efficiency-and-reliability" },
  },
  medizintechnik: {
    ...de.medizintechnik,
    heroTag: "Infusion systems · Diagnostics · Active devices",
    seoEyebrow: "Medical device reliability and risk management",
    seoTitle: "Medical devices need a closed chain of risk, evidence and post-market data",
    seoParagraphs: ["Medical-device reliability covers more than component life. For infusion pumps, diagnostic systems, surgical instruments and active medical devices, technical failures, software, the use environment and potential patient harm must be assessed together.", "RelTest supports medical device reliability, ISO 14971-oriented risk management, design verification and validation, reliability demonstration and post-market data analysis. The engineering argument links hazard, failure cause, risk-control measure and evidence across the full product lifecycle."],
    productTitle: "Assess products by clinical function and risk path",
    productLead: "The same failure probability can have a completely different meaning depending on the clinical function.",
    products: [
      { name: "Infusion pump", context: "Mechanics, sensing, software, consumables and operation jointly determine delivered dose.", risk: "Over- or under-infusion, blocked flow, battery failure, alarm and user-interface faults.", evidence: "Safety case, flow accuracy across states, software tests, use environment and post-market signals." },
      { name: "Diagnostic analyser", context: "Sample handling, reagent, optics, thermal control and algorithm influence the result.", risk: "Drift, contamination, misclassification, undetected calibration deviation and loss of availability.", evidence: "Measurement-system analysis, robustness DoE, boundary testing and traceable fault detection." },
      { name: "Electromechanical surgical instrument", context: "Force, motion, sterilisation, reprocessing and user interaction act on safe function.", risk: "Blocking, mechanical fracture, seal loss, sensing faults and degraded performance after reprocessing cycles.", evidence: "Lifetime cycles, worst-case configuration, usability and documented risk-control evidence." },
    ],
    imageBriefs: [
      { label: "Risk and evidence", title: "Safety case for an infusion pump", description: "Dosing function, sensors, software alarms and mechanical verification form one safety argument. A traceable evidence chain shows which control addresses each significant hazard and how its effectiveness is demonstrated.", alt: "Infusion pump in a test environment with an evidence chain for dosing, sensors, software alarms and verification", format: "wide" },
      { label: "Repeated reprocessing", title: "Test after cleaning and sterilisation", description: "Repeated reprocessing can gradually change seals, surfaces and actuation forces. Measurements and visual findings are therefore tracked across cycles and assessed against a predefined acceptance criterion.", alt: "Electromechanical medical device tested after reprocessing cycles with force measurement and visual inspection", format: "portrait" },
    ],
    project: { eyebrow: "Safety-case project", title: "Close the evidence chain for infusion-pump risk controls", challenge: "FMEA, software tests and mechanical verification exist but cannot be traced clearly to specific hazardous situations and clinical operating states.", approach: "RelTest structures hazard, sequence of events, technical cause and control, assigns existing tests and defines missing boundary and environmental evidence.", result: "The evidence case shows what supports each significant control, which assumptions apply and how production and post-market data feed back into the argument.", deliverables: ["risk-evidence matrix", "test and traceability gaps", "supplementary verification plan", "engineering safety-case contribution"] },
    knowledgeTitle: "Knowledge for risk and evidence management",
    knowledgeLead: "Medical reliability becomes robust when planning, risk management and assurance reference the same requirements.",
    knowledge: [
      { title: "Risk management", text: "Connect hazard, failure mechanism, control and effectiveness evidence traceably.", href: "/wissen/risikomanagement", linkLabel: "Explore risk management" },
      { title: "Reliability assurance", text: "Combine verification, validation and engineering evidence into a coherent argument.", href: "/wissen/absicherung", linkLabel: "Understand assurance" },
      { title: "Reliability planning", text: "Anchor targets, use context, responsibilities and evidence early in development.", href: "/wissen/planung", linkLabel: "Build the plan" },
    ],
    history: { eyebrow: "Regulatory retrospective", title: "The FDA infusion-pump initiative strengthened the total-product-lifecycle perspective", text: "In 2010, the FDA responded to persistent infusion-pump safety problems including software, user-interface, mechanical and electrical failures. The initiative called for more detailed engineering information, use-specific design validation and stronger links between development and post-market observation.", lesson: "The reliability lesson is that tests must represent the use environment and risk controls. Field signals are part of the safety argument, not a downstream quality report.", sourceLabel: "FDA: Infusion Pump Improvement Initiative", sourceHref: "https://www.fda.gov/medical-devices/infusion-pumps/infusion-pump-improvement-initiative" },
  },
  "luft-und-raumfahrt": {
    ...de["luft-und-raumfahrt"],
    heroTag: "Avionics · Actuation · Space systems",
    seoEyebrow: "Aerospace reliability and mission assurance",
    seoTitle: "Every aerospace reliability statement must fit the mission",
    seoParagraphs: ["Aerospace reliability engineering operates with small populations, extreme environments, strong system coupling and often no possibility of repair. Avionics, actuators, structures and space mechanisms therefore require an evidence chain spanning analysis, qualification, acceptance testing and controlled assumptions.", "RelTest supports aerospace reliability, FMEA and FTA, RAMS and dependability assessments, DO-160-related environmental testing and statistical demonstration planning. Mission profile, common-cause risks and redundancy are treated as one system decision."],
    productTitle: "Reliability along a mission chain",
    productLead: "The question is not only whether a component works, but when, for how long and in which system state its function is required.",
    products: [
      { name: "Electromechanical flight-control actuator", context: "Load collective, temperature, lubrication, sensing and control determine available motion.", risk: "Gear and bearing fatigue, jamming, sensor drift, latent faults and common power loss.", evidence: "Mission profile, FTA, lifetime and environmental testing, and monitoring of safety-relevant degradation features." },
      { name: "Avionics LRU", context: "Electronics, software, connectors and cooling operate under vibration, pressure and temperature changes.", risk: "Contact and solder faults, overheating, transient resets and insufficient fault detection.", evidence: "DO-160-related environments, functional monitoring, fault injection and configuration evidence." },
      { name: "Satellite mechanism", context: "Launch loads, vacuum, radiation and long dormant periods meet a very small test population.", risk: "Cold welding, lubricant loss, material degradation, single-point failure and deployment failure.", evidence: "Worst-case analysis, qualification model, thermal-vacuum and vibration testing, and probabilistic uncertainty." },
    ],
    imageBriefs: [
      { label: "Mission assurance", title: "Mission chain from launch to functional phase", description: "Vibration, thermal vacuum, standby and functional operation stress a space system in different ways. The mission chain assigns dominant loads, failure mechanisms and evidence to each phase and makes qualification gaps visible.", alt: "Space mechanism between vibration testing and a thermal-vacuum chamber with mission phases shown", format: "wide" },
      { label: "Environmental qualification", title: "Avionics LRU in a representative environmental test", description: "Vibration, temperature and function are not assessed in isolation. Continuous functional monitoring shows whether the avionics unit meets its requirements throughout the environmental profile and exposes intermittent faults as they occur.", alt: "Avionics LRU on a shaker with harness, temperature measurement points and functional monitoring", format: "portrait" },
    ],
    project: { eyebrow: "Mission-assurance project", title: "Transfer actuator qualification evidence to a changed mission profile", challenge: "A proven actuator is planned for a new platform with different load peaks, longer standby and a changed thermal environment.", approach: "RelTest compares old and new mission profiles, maps loads to failure mechanisms, assesses evidence coverage and redundancy assumptions, and defines targeted delta qualification.", result: "The decision separates reusable evidence from genuine gaps. Unnecessary repeat testing is reduced without hiding new mission risk.", deliverables: ["mission-profile delta", "mechanism and coverage matrix", "delta-qualification plan", "justified release limits"] },
    knowledgeTitle: "Knowledge for mission assurance and dependability",
    knowledgeLead: "Risk, assurance and prognosis must refer to the same mission state and system architecture.",
    knowledge: [
      { title: "Reliability assurance", text: "Connect analysis, qualification and system evidence in a traceable evidence chain.", href: "/wissen/absicherung", linkLabel: "Explore assurance" },
      { title: "Technical risk management", text: "Prioritise single-point, common-cause and latent faults in architecture and evidence.", href: "/wissen/risikomanagement", linkLabel: "Analyse risk" },
      { title: "Reliability prognosis", text: "Use small samples, prior evidence and uncertainty transparently in mission statements.", href: "/wissen/prognosen", linkLabel: "Understand prognosis" },
    ],
    history: { eyebrow: "Industry retrospective", title: "Ariane 501 shows the limit of reuse without representative system qualification", text: "The ESA inquiry into the 1996 Ariane 5 failure traced the loss to specification and design errors in the inertial-reference-system software. Reviews and testing had not represented the reference system and complete flight-control system adequately.", lesson: "The engineering lesson remains current: proven components are reliable only inside demonstrated operating boundaries. New missions require systematic delta analysis and representative end-to-end testing.", sourceLabel: "ESA: Ariane 501 Inquiry Board Report", sourceHref: "https://www.esa.int/Newsroom/Press_Releases/Ariane_501_-_Presentation_of_Inquiry_Board_report" },
  },
  produktionstechnik: {
    ...de.produktionstechnik,
    heroTag: "Assembly lines · Robotics · Process equipment",
    seoEyebrow: "Production reliability and equipment availability",
    seoTitle: "Production reliability starts at the bottleneck, not at the global MTBF average",
    seoParagraphs: ["Reliability in production engineering determines output, scrap, labour effort and delivery performance. For assembly lines, robots, presses, test stands or process equipment, however, events are not equally relevant: system boundary, cycle dependency, redundancy and repair time determine the real production impact.", "RelTest analyses equipment availability, MTBF and MTTR, downtime and maintenance data, critical assemblies and condition-monitoring signals. Instead of reporting metrics alone, failure mechanism, bottleneck effect and action effectiveness are connected traceably."],
    productTitle: "Assess production equipment by bottleneck impact",
    productLead: "A rare failure at the bottleneck can matter more than many short disruptions at a buffered station.",
    products: [
      { name: "Robot axis", context: "Dynamic motion, cable routing, gearbox and gripper affect cycle time and positioning accuracy.", risk: "Gear wear, cable break, lubrication deficit, sensor fault and gradual precision loss.", evidence: "Motion and load classes, alarm history, condition features and functional limits rather than downtime alone." },
      { name: "Joining or press station", context: "Force-displacement process, tool condition, material lot and feeding determine capability and availability.", risk: "Tool wear, misalignment, sensor drift, feeding fault and undetected quality risk.", evidence: "Process data, DoE, fault-reason logic and links between quality and maintenance events." },
      { name: "End-of-line tester", context: "Test equipment, adapters, software and limit logic influence production cycle and product decisions.", risk: "False fail, missed defect, contact wear, drift and software-related downtime.", evidence: "Measurement-system analysis, repeatability and reproducibility, adapter life and clear fault classification." },
    ],
    imageBriefs: [
      { label: "Availability at the bottleneck", title: "Bottleneck analysis on an assembly line", description: "Not every stop affects output to the same degree. Cycle time, event sequence and buffer state reveal which station truly constrains the process and where reliability action creates the greatest production benefit.", alt: "Linked assembly line with the bottleneck station highlighted and cycle, downtime and buffer data displayed", format: "wide" },
      { label: "Condition monitoring", title: "Condition feature of a robot axis", description: "Vibration or current signals become actionable only when they are linked to load, function and a technical limit. This turns a trend into a justified maintenance decision before functional failure.", alt: "Robot axis with vibration and current measurement and an increasing degradation trend", format: "portrait" },
    ],
    project: { eyebrow: "Availability project", title: "Translate assembly-line fault messages into engineering actions", challenge: "The line produces thousands of alarms and MTBF and OEE are known, yet unplanned downtime repeats and actions are prioritised by frequency rather than bottleneck effect.", approach: "RelTest harmonises event and system boundaries, separates root event from consequential alarms, ranks downtime by production impact and connects recurrence, repair time and physical mechanisms.", result: "Alarm data become a robust risk picture with specific design, spares, maintenance and monitoring actions for the critical stations.", deliverables: ["cleaned fault-reason structure", "bottleneck and criticality model", "MTBF/MTTR assessment with limitations", "prioritised action plan"] },
    knowledgeTitle: "Knowledge behind availability and maintenance decisions",
    knowledgeLead: "Prognosis, risk analysis and experimentation help turn condition data into effective engineering decisions.",
    knowledge: [
      { title: "Reliability prognosis", text: "Use event times, censoring and condition trends for remaining-life and maintenance windows.", href: "/wissen/prognosen", linkLabel: "Explore prognosis" },
      { title: "Risk management", text: "Prioritise frequency, downtime, quality impact and bottleneck effect together.", href: "/wissen/risikomanagement", linkLabel: "Assess risk" },
      { title: "Design of Experiments", text: "Investigate process parameters and interactions efficiently when quality or equipment problems recur.", href: "/wissen/design-of-experiments", linkLabel: "Use DoE" },
    ],
  },
};

const editorialByLocale: Record<Locale, Record<string, IndustryEditorialContent>> = { de, en };

export function getIndustryEditorial(locale: Locale, slug: string) {
  return editorialByLocale[locale][slug];
}
