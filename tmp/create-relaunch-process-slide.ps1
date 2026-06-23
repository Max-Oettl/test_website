$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path "."
$outDir = Join-Path $repoRoot "docs\project"
$pptxPath = Join-Path $outDir "folgetermin-vorgehen-relaunch.pptx"
$previewPath = Join-Path $outDir "folgetermin-vorgehen-relaunch-preview.png"
$seoPreviewPath = Join-Path $outDir "folgetermin-vorgehen-relaunch-seo-preview.png"
$stageDir = Join-Path $repoRoot "tmp\relaunch-process-slide-pptx"
$logoPath = Join-Path $repoRoot "public\reltest-solutions-logo.png"
$ae = [char]0x00E4
$oeLower = [char]0x00F6
$ueLower = [char]0x00FC
$ueUpper = [char]0x00DC
$ss = [char]0x00DF

if (Test-Path $stageDir) {
  Remove-Item -LiteralPath $stageDir -Recurse -Force
}

New-Item -ItemType Directory -Force -Path `
  $stageDir, `
  (Join-Path $stageDir "_rels"), `
  (Join-Path $stageDir "docProps"), `
  (Join-Path $stageDir "ppt"), `
  (Join-Path $stageDir "ppt\_rels"), `
  (Join-Path $stageDir "ppt\slides"), `
  (Join-Path $stageDir "ppt\slides\_rels"), `
  (Join-Path $stageDir "ppt\slideMasters"), `
  (Join-Path $stageDir "ppt\slideMasters\_rels"), `
  (Join-Path $stageDir "ppt\slideLayouts"), `
  (Join-Path $stageDir "ppt\slideLayouts\_rels"), `
  (Join-Path $stageDir "ppt\theme"), `
  (Join-Path $stageDir "ppt\media") | Out-Null

Copy-Item -LiteralPath $logoPath -Destination (Join-Path $stageDir "ppt\media\image1.png") -Force

$emuPerInch = 914400
function Emu([double]$value) { return [int64][Math]::Round($value * $emuPerInch) }
function EscapeXml([string]$value) { return [System.Security.SecurityElement]::Escape($value) }

$script:shapeId = 1
function NextId() {
  $script:shapeId += 1
  return $script:shapeId
}

function NoTextShapeHeader([int]$id, [string]$name) {
  return @"
<p:nvSpPr><p:cNvPr id="$id" name="$name"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr>
"@
}

function RectShape([string]$name, [double]$x, [double]$y, [double]$w, [double]$h, [string]$fill, [string]$line = "", [string]$prst = "rect", [int]$transparency = 0) {
  $id = NextId
  $fillXml = if ($transparency -gt 0) {
    $alpha = 100000 - ($transparency * 1000)
    "<a:solidFill><a:srgbClr val=""$fill""><a:alpha val=""$alpha""/></a:srgbClr></a:solidFill>"
  } else {
    "<a:solidFill><a:srgbClr val=""$fill""/></a:solidFill>"
  }
  $lineXml = if ($line) {
    "<a:ln w=""9525""><a:solidFill><a:srgbClr val=""$line""/></a:solidFill></a:ln>"
  } else {
    "<a:ln><a:noFill/></a:ln>"
  }

  return @"
<p:sp>
$(NoTextShapeHeader $id $name)
<p:spPr>
  <a:xfrm><a:off x="$(Emu $x)" y="$(Emu $y)"/><a:ext cx="$(Emu $w)" cy="$(Emu $h)"/></a:xfrm>
  <a:prstGeom prst="$prst"><a:avLst/></a:prstGeom>
  $fillXml
  $lineXml
</p:spPr>
</p:sp>
"@
}

function TextBox([string]$name, [double]$x, [double]$y, [double]$w, [double]$h, [string]$text, [int]$fontSize, [string]$color, [bool]$bold = $false, [string]$align = "left", [string]$fontFace = "Aptos", [string]$fill = "") {
  $id = NextId
  $boldAttr = if ($bold) { ' b="1"' } else { "" }
  $fillXml = if ($fill) { "<a:solidFill><a:srgbClr val=""$fill""/></a:solidFill>" } else { "<a:noFill/>" }
  $paragraphs = @()
  foreach ($line in ($text -split "`n")) {
    $paragraphs += @"
<a:p>
  <a:pPr algn="$align"/>
  <a:r>
    <a:rPr lang="de-DE" sz="$($fontSize * 100)"$boldAttr>
      <a:solidFill><a:srgbClr val="$color"/></a:solidFill>
      <a:latin typeface="$fontFace"/>
    </a:rPr>
    <a:t>$(EscapeXml $line)</a:t>
  </a:r>
  <a:endParaRPr lang="de-DE" sz="$($fontSize * 100)"/>
</a:p>
"@
  }

  return @"
<p:sp>
<p:nvSpPr><p:cNvPr id="$id" name="$name"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr>
<p:spPr>
  <a:xfrm><a:off x="$(Emu $x)" y="$(Emu $y)"/><a:ext cx="$(Emu $w)" cy="$(Emu $h)"/></a:xfrm>
  <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
  $fillXml
  <a:ln><a:noFill/></a:ln>
</p:spPr>
<p:txBody>
  <a:bodyPr wrap="square" anchor="t"><a:spAutoFit/></a:bodyPr>
  <a:lstStyle/>
  $($paragraphs -join "`n")
</p:txBody>
</p:sp>
"@
}

function Picture([string]$name, [double]$x, [double]$y, [double]$w, [double]$h, [string]$relId) {
  $id = NextId
  return @"
<p:pic>
<p:nvPicPr><p:cNvPr id="$id" name="$name"/><p:cNvPicPr/><p:nvPr/></p:nvPicPr>
<p:blipFill>
  <a:blip r:embed="$relId"/>
  <a:stretch><a:fillRect/></a:stretch>
</p:blipFill>
<p:spPr>
  <a:xfrm><a:off x="$(Emu $x)" y="$(Emu $y)"/><a:ext cx="$(Emu $w)" cy="$(Emu $h)"/></a:xfrm>
  <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
</p:spPr>
</p:pic>
"@
}

function Card([int]$number, [string]$title, [string]$body, [string]$result, [double]$x, [double]$y) {
  $elements = @()
  $elements += RectShape "Card $number" $x $y 3.85 1.42 "FFFFFF" "DCE7EF" "roundRect"
  $elements += RectShape "Step $number circle" ($x + 0.22) ($y + 0.24) 0.48 0.48 "0891B2" "" "ellipse"
  $elements += TextBox "Step $number number" ($x + 0.22) ($y + 0.335) 0.48 0.2 ("0$number") 8 "FFFFFF" $true "center" "Aptos"
  $elements += TextBox "Step $number title" ($x + 0.82) ($y + 0.19) 2.78 0.33 $title 13 "061B2D" $true "left" "Aptos Display"
  $elements += TextBox "Step $number body" ($x + 0.82) ($y + 0.54) 2.75 0.38 $body 8 "40566B" $false "left" "Aptos"
  $elements += TextBox "Step $number result" ($x + 0.22) ($y + 1.04) 3.32 0.22 $result 7 "0E7490" $true "left" "Aptos"
  return $elements
}

function SeoIssueCard([string]$metric, [string]$title, [string]$consequence, [double]$x, [double]$y) {
  $elements = @()
  $elements += RectShape "SEO issue $metric" $x $y 3.94 0.93 "FFFFFF" "DCE7EF" "roundRect"
  $elements += RectShape "SEO issue marker $metric" ($x + 0.18) ($y + 0.19) 0.58 0.54 "EAF6FA" "BFE5EE" "roundRect"
  $elements += TextBox "SEO issue metric $metric" ($x + 0.23) ($y + 0.33) 0.48 0.16 $metric 9 "0E7490" $true "center" "Aptos"
  $elements += TextBox "SEO issue title $metric" ($x + 0.9) ($y + 0.15) 2.82 0.22 $title 10 "061B2D" $true "left" "Aptos Display"
  $elements += TextBox "SEO issue consequence $metric" ($x + 0.9) ($y + 0.43) 2.78 0.34 $consequence 7 "40566B" $false "left" "Aptos"
  return $elements
}

function SeoStrengthLine([string]$label, [string]$text, [double]$y) {
  $elements = @()
  $elements += RectShape "Strength dot $label" 0.96 $y 0.12 0.12 "19B5CE" "" "ellipse"
  $elements += TextBox "Strength label $label" 1.2 ($y - 0.08) 2.7 0.18 $label 9 "FFFFFF" $true "left" "Aptos"
  $elements += TextBox "Strength text $label" 1.2 ($y + 0.18) 2.45 0.26 $text 7 "C7D8E6" $false "left" "Aptos"
  return $elements
}

$slideElements = @()
$slideElements += RectShape "Background" 0 0 13.333 7.5 "F5F8FA"
$slideElements += RectShape "Header" 0 0 13.333 1.48 "061B2D"
$slideElements += RectShape "Header cyan block" 9.6 0 3.733 1.48 "0E7490" "" "rect" 10
$slideElements += RectShape "Logo chip" 11.05 0.28 1.55 0.52 "FFFFFF" "" "roundRect"
$slideElements += Picture "RelTest logo" 11.18 0.36 1.29 0.35 "rId2"
$slideElements += TextBox "Eyebrow" 0.62 0.22 5.4 0.24 "Folgetermin Website-Relaunch" 9 "73D4EA" $true "left" "Aptos"
$slideElements += TextBox "Title" 0.62 0.52 8.55 0.48 "Vorgehen bis zum Go-live" 26 "FFFFFF" $true "left" "Aptos Display"
$slideElements += TextBox "Subtitle" 0.64 1.02 8.25 0.25 "Kontrollierter Relaunch: SEO-Bestand sichern, Inhalte abstimmen, Migration sauber vorbereiten." 10 "C7D8E6" $false "left" "Aptos"

$slideElements += TextBox "Section label" 0.72 1.78 3.4 0.26 "Vom Pitch zur kontrollierten Umsetzung" 12 "061B2D" $true "left" "Aptos Display"
$slideElements += TextBox "Section intro" 0.72 2.16 3.35 1.16 "Die neue Website wird nicht in einem einzelnen technischen Schritt ersetzt. Entscheidend ist, zuerst SEO-Signale und Inhalte zu sichern und danach sauber umzuschalten." 12 "40566B" $false "left" "Aptos"
$slideElements += RectShape "Left callout" 0.72 3.72 3.25 1.46 "EAF6FA" "BFE5EE" "roundRect"
$slideElements += TextBox "Left callout title" 0.98 3.98 2.75 0.28 "Wichtig für den Termin" 12 "061B2D" $true "left" "Aptos Display"
$slideElements += TextBox "Left callout text" 0.98 4.34 2.66 0.46 "SEO ist kein nachgelagerter Check, sondern Teil der Migration." 10 "40566B" $false "left" "Aptos"

$slideElements += RectShape "Divider" 4.35 1.76 0.02 3.75 "D4E2EA"
$slideElements += Card 1 "SEO-Bestand sichern" "URLs, Rankings, Search Console und Backlinks erfassen." "Ergebnis: belastbare Ausgangsbasis" 4.65 1.78
$slideElements += Card 2 "Inhalte bewerten" "$($ueUpper)bernehmen, verbessern, zusammenf$($ueLower)hren oder entfernen." "Ergebnis: Content- und Zielstruktur" 8.82 1.78
$slideElements += TextBox "Arrow 1" 8.42 2.28 0.25 0.25 ">" 18 "0891B2" $true "center" "Aptos"
$slideElements += Card 3 "Feedback einholen" "Erst Kim und Kevin, danach weitere fachliche Stimmen." "Ergebnis: abgestimmte Priorit$($ae)ten" 4.65 3.52
$slideElements += Card 4 "Feedback einarbeiten" "Design, Texte und Nutzerf$($ueLower)hrung gezielt sch$($ae)rfen." "Ergebnis: freigabereifer Stand" 8.82 3.52
$slideElements += TextBox "Arrow 2" 8.42 4.02 0.25 0.25 ">" 18 "0891B2" $true "center" "Aptos"

$slideElements += RectShape "Migration band" 0.72 5.75 11.9 0.96 "061B2D" "" "roundRect"
$slideElements += RectShape "Migration accent" 0.95 6.04 0.34 0.34 "19B5CE" "" "ellipse"
$slideElements += TextBox "Migration number" 0.98 6.115 0.28 0.14 "05" 7 "061B2D" $true "center" "Aptos"
$slideElements += TextBox "Migration title" 1.38 5.95 2.3 0.28 "SEO-Migration vorbereiten" 12 "FFFFFF" $true "left" "Aptos Display"
$slideElements += TextBox "Migration text" 3.56 5.93 4.36 0.32 "Redirects, Metadaten, Sitemap, robots.txt, Canonicals und hreflang testen." 9 "C7D8E6" $false "left" "Aptos"
$slideElements += RectShape "Go live accent" 7.78 6.04 0.34 0.34 "19B5CE" "" "ellipse"
$slideElements += TextBox "Go live number" 7.81 6.115 0.28 0.14 "06" 7 "061B2D" $true "center" "Aptos"
$slideElements += TextBox "Go live title" 8.22 5.95 1.8 0.28 "Go-live & Kontrolle" 12 "FFFFFF" $true "left" "Aptos Display"
$slideElements += TextBox "Go live text" 9.86 5.93 2.24 0.32 "Live schalten, Fehler pr$($ueLower)fen und SEO-Entwicklung eng $($ueLower)berwachen." 9 "C7D8E6" $false "left" "Aptos"
$slideElements += TextBox "Footer note" 0.72 7.05 9.4 0.24 "Kernaussage: Erst sichern und abstimmen, dann kontrolliert migrieren. So wird SEO-Risiko reduziert und Sichtbarkeit gezielt verbessert." 8 "50667A" $false "left" "Aptos"

$slideXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
      $($slideElements -join "`n")
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sld>
"@

$slideXml | Set-Content -LiteralPath (Join-Path $stageDir "ppt\slides\slide1.xml") -Encoding UTF8

$script:shapeId = 1
$slide2Elements = @()
$slide2Elements += RectShape "Background" 0 0 13.333 7.5 "F5F8FA"
$slide2Elements += RectShape "Header" 0 0 13.333 1.48 "061B2D"
$slide2Elements += RectShape "Header cyan block" 9.6 0 3.733 1.48 "0E7490" "" "rect" 10
$slide2Elements += RectShape "Logo chip" 11.05 0.28 1.55 0.52 "FFFFFF" "" "roundRect"
$slide2Elements += Picture "RelTest logo" 11.18 0.36 1.29 0.35 "rId2"
$slide2Elements += TextBox "SEO eyebrow" 0.62 0.22 5.4 0.24 "SEO-Einordnung der aktuellen Website" 9 "73D4EA" $true "left" "Aptos"
$slide2Elements += TextBox "SEO title" 0.62 0.52 8.55 0.48 "SEO-Stand der alten Website" 26 "FFFFFF" $true "left" "Aptos Display"
$slide2Elements += TextBox "SEO subtitle" 0.64 1.02 8.35 0.25 "Wertvoller Bestand mit klaren Verbesserungshebeln f$($ueLower)r den Relaunch." 10 "C7D8E6" $false "left" "Aptos"

$slide2Elements += RectShape "SEO left panel" 0.72 1.78 3.35 4.86 "061B2D" "" "roundRect"
$slide2Elements += TextBox "SEO left title" 1.0 2.06 2.82 0.36 "Ausgangslage" 17 "FFFFFF" $true "left" "Aptos Display"
$slide2Elements += TextBox "SEO left intro" 1.0 2.52 2.72 0.7 "Die alte Website ist kein SEO-Nullpunkt. Sie besitzt bestehende Signale, muss aber kontrolliert migriert werden." 10 "C7D8E6" $false "left" "Aptos"
$slide2Elements += SeoStrengthLine "St$($ae)rke" "Domain, Inhalte und Themenbreite sind vorhanden." 3.5
$slide2Elements += SeoStrengthLine "Risiko" "Technische und strukturelle Schw$($ae)chen k$($oeLower)nnen Sichtbarkeit kosten." 4.25
$slide2Elements += SeoStrengthLine "Chance" "Next.js kann Performance, Struktur und Mehrsprachigkeit verbessern." 5.0
$slide2Elements += RectShape "SEO left conclusion" 0.98 5.72 2.58 0.54 "0E7490" "" "roundRect"
$slide2Elements += TextBox "SEO left conclusion text" 1.18 5.88 2.2 0.2 "Nicht pauschal ersetzen, sondern SEO-sicher migrieren." 8 "FFFFFF" $true "center" "Aptos"

$slide2Elements += TextBox "SEO issue title" 4.45 1.78 5.8 0.32 "Wichtigste Schw$($ae)chen und m$($oeLower)gliche Folgen" 15 "061B2D" $true "left" "Aptos Display"
$slide2Elements += TextBox "SEO issue subtitle" 4.45 2.14 7.6 0.24 "Diese Punkte sind keine Showstopper, aber sie begr$($ueLower)nden, warum der Relaunch SEO-geplant erfolgen muss." 8 "50667A" $false "left" "Aptos"
$slide2Elements += SeoIssueCard "25%" "Keine Meta-Descriptions" "Google erzeugt Snippets selbst; Suchergebnis weniger $($ueLower)berzeugend." 4.45 2.58
$slide2Elements += SeoIssueCard "10%" "H1-Struktur uneinheitlich" "Hauptthema schw$($ae)cher; Seite wirkt f$($ueLower)r Suche weniger sauber." 8.62 2.58
$slide2Elements += SeoIssueCard "22%" "Kein hreflang" "Sprachvarianten werden schlechter zugeordnet." 4.45 3.76
$slide2Elements += SeoIssueCard "Map" "Sitemap enth$($ae)lt Neben-URLs" "Archive, Login und alte Seiten verbrauchen Crawl-Aufmerksamkeit." 8.62 3.76
$slide2Elements += SeoIssueCard "LCP" "Schwere Startseite" "Langsamer erster Eindruck; Risiko f$($ueLower)r Core Web Vitals und Anfragen." 4.45 4.94
$slide2Elements += SeoIssueCard "20%" "Bilder ohne Alt-Text" "Bildinhalte f$($ueLower)r Suchmaschine und Screenreader schlechter verst$($ae)ndlich." 8.62 4.94

$slide2Elements += RectShape "SEO bottom bar" 4.45 6.34 8.11 0.34 "EAF6FA" "BFE5EE" "roundRect"
$slide2Elements += TextBox "SEO bottom note" 4.66 6.43 7.68 0.13 "Einordnung: Bestehende Signale erhalten, technische Schw$($ae)chen beheben und neue Seitenstruktur SEO-gerecht aufbauen." 7 "0E7490" $true "center" "Aptos"
$slide2Elements += TextBox "SEO footer note" 0.72 7.05 10.4 0.24 "Botschaft f$($ueLower)r den Termin: Die alte Website hat SEO-Wert, aber der Relaunch bietet klare Chancen, wenn URL-Migration, Inhalte und Technik sauber vorbereitet werden." 8 "50667A" $false "left" "Aptos"

$slide2Xml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
      $($slide2Elements -join "`n")
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sld>
"@

$slide2Xml | Set-Content -LiteralPath (Join-Path $stageDir "ppt\slides\slide2.xml") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="png" ContentType="image/png"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/slides/slide1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>
  <Override PartName="/ppt/slides/slide2.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
</Types>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "[Content_Types].xml") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "_rels\.rels") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Codex</Application>
  <PresentationFormat>Widescreen</PresentationFormat>
  <Slides>2</Slides>
  <Company>RelTest Solutions</Company>
</Properties>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "docProps\app.xml") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>Folgetermin Website-Relaunch: Vorgehen bis zum Go-live</dc:title>
  <dc:creator>Codex</dc:creator>
  <cp:lastModifiedBy>Codex</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">2026-06-22T00:00:00Z</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">2026-06-22T00:00:00Z</dcterms:modified>
</cp:coreProperties>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "docProps\core.xml") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst>
  <p:sldIdLst>
    <p:sldId id="256" r:id="rId2"/>
    <p:sldId id="257" r:id="rId3"/>
  </p:sldIdLst>
  <p:sldSz cx="12192000" cy="6858000" type="wide"/>
  <p:notesSz cx="6858000" cy="9144000"/>
  <p:defaultTextStyle/>
</p:presentation>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "ppt\presentation.xml") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide1.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide2.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>
</Relationships>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "ppt\_rels\presentation.xml.rels") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr></p:spTree></p:cSld>
  <p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>
  <p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst>
  <p:txStyles><p:titleStyle/><p:bodyStyle/><p:otherStyle/></p:txStyles>
</p:sldMaster>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "ppt\slideMasters\slideMaster1.xml") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>
</Relationships>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "ppt\slideMasters\_rels\slideMaster1.xml.rels") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="blank" preserve="1">
  <p:cSld name="Blank"><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr></p:spTree></p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sldLayout>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "ppt\slideLayouts\slideLayout1.xml") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/>
</Relationships>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "ppt\slideLayouts\_rels\slideLayout1.xml.rels") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image1.png"/>
</Relationships>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "ppt\slides\_rels\slide1.xml.rels") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image1.png"/>
</Relationships>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "ppt\slides\_rels\slide2.xml.rels") -Encoding UTF8

@"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="RelTest Relaunch">
  <a:themeElements>
    <a:clrScheme name="RelTest">
      <a:dk1><a:srgbClr val="061B2D"/></a:dk1><a:lt1><a:srgbClr val="FFFFFF"/></a:lt1>
      <a:dk2><a:srgbClr val="1E293B"/></a:dk2><a:lt2><a:srgbClr val="F5F8FA"/></a:lt2>
      <a:accent1><a:srgbClr val="0891B2"/></a:accent1><a:accent2><a:srgbClr val="0E7490"/></a:accent2>
      <a:accent3><a:srgbClr val="19B5CE"/></a:accent3><a:accent4><a:srgbClr val="94A3B8"/></a:accent4>
      <a:accent5><a:srgbClr val="DCE7EF"/></a:accent5><a:accent6><a:srgbClr val="C7D8E6"/></a:accent6>
      <a:hlink><a:srgbClr val="0891B2"/></a:hlink><a:folHlink><a:srgbClr val="0E7490"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="RelTest Fonts">
      <a:majorFont><a:latin typeface="Aptos Display"/></a:majorFont>
      <a:minorFont><a:latin typeface="Aptos"/></a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="RelTest Format">
      <a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:fillStyleLst>
      <a:lnStyleLst><a:ln w="9525"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst>
      <a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst>
      <a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
  <a:objectDefaults/><a:extraClrSchemeLst/>
</a:theme>
"@ | Set-Content -LiteralPath (Join-Path $stageDir "ppt\theme\theme1.xml") -Encoding UTF8

if (Test-Path $pptxPath) {
  Remove-Item -LiteralPath $pptxPath -Force
}

Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($stageDir, $pptxPath)

# Create a PNG preview with the same layout for quick visual QA.
Add-Type -AssemblyName System.Drawing
$width = 1920
$height = 1080
$scale = 144
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function Brush([string]$hex) {
  return New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#$hex"))
}
function PenObj([string]$hex, [float]$width = 1) {
  return New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#$hex"), $width)
}
function RectPx([double]$x, [double]$y, [double]$w, [double]$h) {
  return New-Object System.Drawing.RectangleF(($x * $scale), ($y * $scale), ($w * $scale), ($h * $scale))
}
function RoundRectPath([System.Drawing.RectangleF]$rect, [float]$radius) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $radius * 2
  $path.AddArc($rect.X, $rect.Y, $d, $d, 180, 90)
  $path.AddArc($rect.Right - $d, $rect.Y, $d, $d, 270, 90)
  $path.AddArc($rect.Right - $d, $rect.Bottom - $d, $d, $d, 0, 90)
  $path.AddArc($rect.X, $rect.Bottom - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}
function FillRound([double]$x, [double]$y, [double]$w, [double]$h, [string]$fill, [string]$line = "") {
  $rect = RectPx $x $y $w $h
  $path = RoundRectPath $rect 18
  $g.FillPath((Brush $fill), $path)
  if ($line) { $g.DrawPath((PenObj $line 1.5), $path) }
}
function DrawText([string]$text, [double]$x, [double]$y, [double]$w, [double]$h, [float]$size, [string]$color, [bool]$bold = $false, [string]$family = "Segoe UI") {
  $style = if ($bold) { [System.Drawing.FontStyle]::Bold } else { [System.Drawing.FontStyle]::Regular }
  $font = New-Object System.Drawing.Font($family, $size, $style, [System.Drawing.GraphicsUnit]::Point)
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Near
  $format.LineAlignment = [System.Drawing.StringAlignment]::Near
  $g.DrawString($text, $font, (Brush $color), (RectPx $x $y $w $h), $format)
}
function DrawCard([int]$number, [string]$title, [string]$body, [string]$result, [double]$x, [double]$y) {
  FillRound $x $y 3.85 1.42 "FFFFFF" "DCE7EF"
  $circle = RectPx ($x + 0.22) ($y + 0.24) 0.48 0.48
  $g.FillEllipse((Brush "0891B2"), $circle)
  DrawText ("0$number") ($x + 0.31) ($y + 0.34) 0.3 0.2 8 "FFFFFF" $true
  DrawText $title ($x + 0.82) ($y + 0.17) 2.8 0.34 14 "061B2D" $true
  DrawText $body ($x + 0.82) ($y + 0.54) 2.72 0.38 9 "40566B"
  DrawText $result ($x + 0.22) ($y + 1.04) 3.3 0.22 8 "0E7490" $true
}
function DrawSeoIssueCard([string]$metric, [string]$title, [string]$consequence, [double]$x, [double]$y) {
  FillRound $x $y 3.94 0.93 "FFFFFF" "DCE7EF"
  FillRound ($x + 0.18) ($y + 0.19) 0.58 0.54 "EAF6FA" "BFE5EE"
  DrawText $metric ($x + 0.28) ($y + 0.34) 0.38 0.16 10 "0E7490" $true
  DrawText $title ($x + 0.9) ($y + 0.13) 2.82 0.22 11 "061B2D" $true
  DrawText $consequence ($x + 0.9) ($y + 0.43) 2.78 0.34 8.2 "40566B"
}
function DrawSeoStrengthLine([string]$label, [string]$text, [double]$y) {
  $g.FillEllipse((Brush "19B5CE"), (RectPx 0.96 $y 0.12 0.12))
  DrawText $label 1.2 ($y - 0.08) 2.7 0.18 10 "FFFFFF" $true
  DrawText $text 1.2 ($y + 0.18) 2.45 0.26 8.5 "C7D8E6"
}

$g.FillRectangle((Brush "F5F8FA"), 0, 0, $width, $height)
$g.FillRectangle((Brush "061B2D"), (RectPx 0 0 13.333 1.48))
$g.FillRectangle((Brush "0E7490"), (RectPx 9.6 0 3.733 1.48))
FillRound 11.05 0.28 1.55 0.52 "FFFFFF"
if (Test-Path $logoPath) {
  $logo = [System.Drawing.Image]::FromFile($logoPath)
  $g.DrawImage($logo, (RectPx 11.18 0.36 1.29 0.35))
  $logo.Dispose()
}
DrawText "Folgetermin Website-Relaunch" 0.62 0.22 5.4 0.24 10 "73D4EA" $true
DrawText "Vorgehen bis zum Go-live" 0.62 0.50 8.6 0.52 28 "FFFFFF" $true
DrawText "Kontrollierter Relaunch: SEO-Bestand sichern, Inhalte abstimmen, Migration sauber vorbereiten." 0.64 1.02 8.3 0.25 11 "C7D8E6"
DrawText "Vom Pitch zur kontrollierten Umsetzung" 0.72 1.78 3.4 0.26 13 "061B2D" $true
DrawText "Die neue Website wird nicht in einem einzelnen technischen Schritt ersetzt. Entscheidend ist, zuerst SEO-Signale und Inhalte zu sichern und danach sauber umzuschalten." 0.72 2.16 3.25 1.16 13 "40566B"
FillRound 0.72 3.72 3.25 1.46 "EAF6FA" "BFE5EE"
DrawText "Wichtig f$($ueLower)r den Termin" 0.98 3.98 2.75 0.28 13 "061B2D" $true
DrawText "SEO ist kein nachgelagerter Check, sondern Teil der Migration." 0.98 4.34 2.65 0.46 11 "40566B"
$g.FillRectangle((Brush "D4E2EA"), (RectPx 4.35 1.76 0.02 3.75))
DrawCard 1 "SEO-Bestand sichern" "URLs, Rankings, Search Console und Backlinks erfassen." "Ergebnis: belastbare Ausgangsbasis" 4.65 1.78
DrawCard 2 "Inhalte bewerten" "$($ueUpper)bernehmen, verbessern, zusammenf$($ueLower)hren oder entfernen." "Ergebnis: Content- und Zielstruktur" 8.82 1.78
DrawText ">" 8.42 2.24 0.25 0.25 22 "0891B2" $true
DrawCard 3 "Feedback einholen" "Erst Kim und Kevin, danach weitere fachliche Stimmen." "Ergebnis: abgestimmte Priorit$($ae)ten" 4.65 3.52
DrawCard 4 "Feedback einarbeiten" "Design, Texte und Nutzerf$($ueLower)hrung gezielt sch$($ae)rfen." "Ergebnis: freigabereifer Stand" 8.82 3.52
DrawText ">" 8.42 3.98 0.25 0.25 22 "0891B2" $true
FillRound 0.72 5.75 11.9 0.96 "061B2D"
$g.FillEllipse((Brush "19B5CE"), (RectPx 0.95 6.04 0.34 0.34))
DrawText "05" 1.01 6.10 0.24 0.16 8 "061B2D" $true
DrawText "SEO-Migration vorbereiten" 1.38 5.95 2.3 0.28 13 "FFFFFF" $true
DrawText "Redirects, Metadaten, Sitemap, robots.txt, Canonicals und hreflang testen." 3.56 5.93 4.36 0.32 10 "C7D8E6"
$g.FillEllipse((Brush "19B5CE"), (RectPx 7.78 6.04 0.34 0.34))
DrawText "06" 7.84 6.10 0.24 0.16 8 "061B2D" $true
DrawText "Go-live & Kontrolle" 8.22 5.95 1.8 0.28 13 "FFFFFF" $true
DrawText "Live schalten, Fehler pr$($ueLower)fen und SEO-Entwicklung eng $($ueLower)berwachen." 9.86 5.93 2.24 0.32 10 "C7D8E6"
DrawText "Kernaussage: Erst sichern und abstimmen, dann kontrolliert migrieren. So wird SEO-Risiko reduziert und Sichtbarkeit gezielt verbessert." 0.72 7.05 9.4 0.24 9 "50667A"

$bmp.Save($previewPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()

$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

$g.FillRectangle((Brush "F5F8FA"), 0, 0, $width, $height)
$g.FillRectangle((Brush "061B2D"), (RectPx 0 0 13.333 1.48))
$g.FillRectangle((Brush "0E7490"), (RectPx 9.6 0 3.733 1.48))
FillRound 11.05 0.28 1.55 0.52 "FFFFFF"
if (Test-Path $logoPath) {
  $logo = [System.Drawing.Image]::FromFile($logoPath)
  $g.DrawImage($logo, (RectPx 11.18 0.36 1.29 0.35))
  $logo.Dispose()
}
DrawText "SEO-Einordnung der aktuellen Website" 0.62 0.22 5.4 0.24 10 "73D4EA" $true
DrawText "SEO-Stand der alten Website" 0.62 0.50 8.6 0.52 28 "FFFFFF" $true
DrawText "Wertvoller Bestand mit klaren Verbesserungshebeln f$($ueLower)r den Relaunch." 0.64 1.02 8.3 0.25 11 "C7D8E6"
FillRound 0.72 1.78 3.35 4.86 "061B2D"
DrawText "Ausgangslage" 1.0 2.06 2.82 0.36 19 "FFFFFF" $true
DrawText "Die alte Website ist kein SEO-Nullpunkt. Sie besitzt bestehende Signale, muss aber kontrolliert migriert werden." 1.0 2.52 2.72 0.7 11 "C7D8E6"
DrawSeoStrengthLine "St$($ae)rke" "Domain, Inhalte und Themenbreite sind vorhanden." 3.5
DrawSeoStrengthLine "Risiko" "Technische und strukturelle Schw$($ae)chen k$($oeLower)nnen Sichtbarkeit kosten." 4.25
DrawSeoStrengthLine "Chance" "Next.js kann Performance, Struktur und Mehrsprachigkeit verbessern." 5.0
FillRound 0.98 5.72 2.58 0.54 "0E7490"
DrawText "Nicht pauschal ersetzen, sondern SEO-sicher migrieren." 1.18 5.88 2.2 0.2 8.5 "FFFFFF" $true
DrawText "Wichtigste Schw$($ae)chen und m$($oeLower)gliche Folgen" 4.45 1.78 5.8 0.32 17 "061B2D" $true
DrawText "Diese Punkte sind keine Showstopper, aber sie begr$($ueLower)nden, warum der Relaunch SEO-geplant erfolgen muss." 4.45 2.14 7.6 0.24 9 "50667A"
DrawSeoIssueCard "25%" "Keine Meta-Descriptions" "Google erzeugt Snippets selbst; Suchergebnis weniger $($ueLower)berzeugend." 4.45 2.58
DrawSeoIssueCard "10%" "H1-Struktur uneinheitlich" "Hauptthema schw$($ae)cher; Seite wirkt f$($ueLower)r Suche weniger sauber." 8.62 2.58
DrawSeoIssueCard "22%" "Kein hreflang" "Sprachvarianten werden schlechter zugeordnet." 4.45 3.76
DrawSeoIssueCard "Map" "Sitemap enth$($ae)lt Neben-URLs" "Archive, Login und alte Seiten verbrauchen Crawl-Aufmerksamkeit." 8.62 3.76
DrawSeoIssueCard "LCP" "Schwere Startseite" "Langsamer erster Eindruck; Risiko f$($ueLower)r Core Web Vitals und Anfragen." 4.45 4.94
DrawSeoIssueCard "20%" "Bilder ohne Alt-Text" "Bildinhalte f$($ueLower)r Suchmaschine und Screenreader schlechter verst$($ae)ndlich." 8.62 4.94
FillRound 4.45 6.34 8.11 0.34 "EAF6FA" "BFE5EE"
DrawText "Einordnung: Bestehende Signale erhalten, technische Schw$($ae)chen beheben und neue Seitenstruktur SEO-gerecht aufbauen." 4.66 6.43 7.68 0.13 8 "0E7490" $true
DrawText "Botschaft f$($ueLower)r den Termin: Die alte Website hat SEO-Wert, aber der Relaunch bietet klare Chancen, wenn URL-Migration, Inhalte und Technik sauber vorbereitet werden." 0.72 7.05 10.4 0.24 9 "50667A"

$bmp.Save($seoPreviewPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()

Write-Host "Created $pptxPath"
Write-Host "Created $previewPath"
Write-Host "Created $seoPreviewPath"
