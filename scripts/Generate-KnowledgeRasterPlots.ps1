param([string]$OutputDirectory = "public/graphics/wissen/technical-plots")

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing
New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null

$W = 1600; $H = 900
$navy = [Drawing.Color]::FromArgb(20,36,82)
$cyan = [Drawing.Color]::FromArgb(46,161,207)
$light = [Drawing.Color]::FromArgb(234,245,251)
$ink = [Drawing.Color]::FromArgb(55,72,104)
$muted = [Drawing.Color]::FromArgb(105,120,146)
$grid = [Drawing.Color]::FromArgb(218,228,238)
$green = [Drawing.Color]::FromArgb(0,167,84)
$orange = [Drawing.Color]::FromArgb(224,142,55)
$red = [Drawing.Color]::FromArgb(190,66,62)
$white = [Drawing.Color]::White

function New-Canvas([string]$title, [string]$subtitle) {
  $bitmap = [Drawing.Bitmap]::new($W,$H)
  $graphics = [Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.TextRenderingHint = [Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $graphics.Clear($white)
  Write-Text $graphics $title 92 60 40 $navy $true
  Write-Text $graphics $subtitle 94 118 21 $muted $false
  return @{ Bitmap=$bitmap; Graphics=$graphics }
}
function New-Font([float]$size,[bool]$bold=$false) { [Drawing.Font]::new('Segoe UI',$size,$(if($bold){'Bold'}else{'Regular'}),'Pixel') }
function Write-Text($g,[string]$text,[float]$x,[float]$y,[float]$size=22,$color=$ink,[bool]$bold=$false) {
  $font=New-Font $size $bold; $brush=[Drawing.SolidBrush]::new($color)
  $g.DrawString($text,$font,$brush,$x,$y); $font.Dispose(); $brush.Dispose()
}
function Draw-Line($g,$color,[float]$width,[float]$x1,[float]$y1,[float]$x2,[float]$y2,[bool]$dashed=$false) {
  $pen=[Drawing.Pen]::new($color,$width); $pen.StartCap='Round'; $pen.EndCap='Round'
  if($dashed){$pen.DashStyle=[Drawing.Drawing2D.DashStyle]::Dash}
  $g.DrawLine($pen,$x1,$y1,$x2,$y2); $pen.Dispose()
}
function Fill-Rect($g,$color,[float]$x,[float]$y,[float]$w,[float]$h) { $b=[Drawing.SolidBrush]::new($color); $g.FillRectangle($b,$x,$y,$w,$h); $b.Dispose() }
function Draw-Rect($g,$color,[float]$width,[float]$x,[float]$y,[float]$w,[float]$h) { $p=[Drawing.Pen]::new($color,$width); $g.DrawRectangle($p,$x,$y,$w,$h); $p.Dispose() }
function Fill-Polygon($g,$color,[object[]]$pairs) { $b=[Drawing.SolidBrush]::new($color);$g.FillPolygon($b,(To-Points $pairs));$b.Dispose() }
function Draw-Polygon($g,$color,[float]$width,[object[]]$pairs) { $p=[Drawing.Pen]::new($color,$width);$p.LineJoin='Round';$g.DrawPolygon($p,(To-Points $pairs));$p.Dispose() }
function Draw-Ellipse($g,$color,[float]$x,[float]$y,[float]$d) { $b=[Drawing.SolidBrush]::new($color); $g.FillEllipse($b,$x-$d/2,$y-$d/2,$d,$d); $b.Dispose() }
function To-Points([object[]]$pairs) { [Drawing.PointF[]]($pairs | ForEach-Object { [Drawing.PointF]::new([float]$_[0],[float]$_[1]) }) }
function Draw-Polyline($g,$color,[float]$width,[object[]]$pairs) { $p=[Drawing.Pen]::new($color,$width);$p.LineJoin='Round';$g.DrawLines($p,(To-Points $pairs));$p.Dispose() }
function Draw-ChartFrame($g,[string]$xLabel,[string]$yLabel,[double]$xMax,[double]$yMax) {
  $left=165; $top=205; $right=1480; $bottom=745
  for($i=0;$i-le5;$i++){ $y=$bottom-($bottom-$top)*$i/5; Draw-Line $g $grid 1 $left $y $right $y; Write-Text $g ([math]::Round($yMax*$i/5,2)) 92 ($y-13) 17 $muted }
  for($i=0;$i-le5;$i++){ $x=$left+($right-$left)*$i/5; Draw-Line $g $grid 1 $x $top $x $bottom; Write-Text $g ([math]::Round($xMax*$i/5,1)) ($x-12) 758 17 $muted }
  Draw-Line $g $navy 3 $left $bottom $right $bottom; Draw-Line $g $navy 3 $left $bottom $left $top
  Write-Text $g $xLabel 720 810 20 $navy $true
  $state=$g.Save(); $g.TranslateTransform(40,570); $g.RotateTransform(-90); Write-Text $g $yLabel 0 0 20 $navy $true; $g.Restore($state)
  return @{L=$left;T=$top;R=$right;B=$bottom;W=($right-$left);H=($bottom-$top)}
}
function Save-Plot($canvas,[string]$name) { $path=Join-Path $OutputDirectory $name; $canvas.Bitmap.Save($path,[Drawing.Imaging.ImageFormat]::Png);$canvas.Graphics.Dispose();$canvas.Bitmap.Dispose();Write-Output $path }
function Map-X($f,[double]$value,[double]$max){$f.L+$f.W*$value/$max}
function Map-Y($f,[double]$value,[double]$max){$f.B-$f.H*$value/$max}

function Plot-Bathtub([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'Ausfallrate über den Produktlebenszyklus'}else{'Failure rate across the product life cycle'}) $(if($de){'Die Gesamtgefährdung entsteht aus unterschiedlichen Ausfallmechanismen.'}else{'The total hazard combines different failure mechanisms.'}); $g=$c.Graphics
  $f=Draw-ChartFrame $g $(if($de){'Nutzungsdauer t'}else{'Operating time t'}) $(if($de){'Ausfallrate λ(t)'}else{'Failure rate λ(t)'}) 100 1.0
  $early=@();$random=@();$wear=@();$total=@()
  for($i=0;$i-le100;$i+=2){$e=.62*[math]::Exp(-$i/13);$r=.11;$w=.62*[math]::Pow($i/100,7);$early+=,@((Map-X $f $i 100),(Map-Y $f $e 1));$random+=,@((Map-X $f $i 100),(Map-Y $f $r 1));$wear+=,@((Map-X $f $i 100),(Map-Y $f $w 1));$total+=,@((Map-X $f $i 100),(Map-Y $f ($e+$r+$w) 1))}
  Draw-Polyline $g $cyan 4 $early; Draw-Polyline $g $muted 4 $random; Draw-Polyline $g $orange 4 $wear; Draw-Polyline $g $navy 8 $total
  Write-Text $g $(if($de){'Frühausfälle'}else{'Early failures'}) 230 270 19 $cyan $true; Write-Text $g $(if($de){'Zufallsausfälle'}else{'Random failures'}) 680 630 19 $muted $true; Write-Text $g $(if($de){'Verschleiß'}else{'Wear-out'}) 1230 300 19 $orange $true
  if($detail){Draw-Line $g $red 2 (Map-X $f 15 100) $f.T (Map-X $f 15 100) $f.B $true;Draw-Line $g $red 2 (Map-X $f 72 100) $f.T (Map-X $f 72 100) $f.B $true;Write-Text $g $(if($de){'Mechanismen bestimmen die passende Methode.'}else{'Failure mechanisms determine the appropriate method.'}) 945 165 19 $red $true}
  Save-Plot $c $name
}
function Plot-Allocation([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'Zuverlässigkeitsziel im System allokieren'}else{'Allocate a reliability target across the system'}) $(if($de){'Top-down-Ziele werden bottom-up auf technische Plausibilität geprüft.'}else{'Top-down targets are checked bottom-up for technical plausibility.'});$g=$c.Graphics
  $nodes=@(@(800,220,'System','R = 0,950'),@(400,430,'Antrieb','R = 0,985'),@(800,430,'Steuerung','R = 0,982'),@(1200,430,'Sensorik','R = 0,982'))
  foreach($n in $nodes){Fill-Rect $g $light ($n[0]-145) ($n[1]-62) 290 124;Draw-Rect $g $grid 2 ($n[0]-145) ($n[1]-62) 290 124;Write-Text $g $n[2] ($n[0]-112) ($n[1]-35) 21 $navy $true;Write-Text $g $n[3] ($n[0]-112) $n[1] 20 $cyan $true}
  foreach($x in @(400,800,1200)){Draw-Line $g $cyan 3 800 282 $x 368}
  Fill-Rect $g $navy 405 625 790 90;Write-Text $g $(if($de){'Bottom-up: 0,985 × 0,982 × 0,982 = 0,950'}else{'Bottom-up: 0.985 × 0.982 × 0.982 = 0.950'}) 525 653 26 $white $true
  if($detail){Write-Text $g $(if($de){'Ziel, Architektur und Nachweis bleiben rechnerisch verbunden.'}else{'Target, architecture and evidence remain mathematically linked.'}) 470 765 20 $muted}
  Save-Plot $c $name
}
function Plot-Pareto([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'Schwachstellen nach Risikobeitrag priorisieren'}else{'Prioritise weak points by risk contribution'}) $(if($de){'Pareto-Auswertung eines beispielhaften Feldbefunds.'}else{'Pareto analysis of an illustrative field finding.'});$g=$c.Graphics
  $f=Draw-ChartFrame $g $(if($de){'Fehlerursache'}else{'Failure cause'}) $(if($de){'Anteil der Befunde [%]'}else{'Share of findings [%]'}) 6 50
  $vals=@(38,24,16,10,7,5);$labels=$(if($de){@('Dichtung','Lager','Stecker','Software','Montage','Sonstige')}else{@('Seal','Bearing','Connector','Software','Assembly','Other')});$cum=0;$line=@()
  for($i=0;$i-lt6;$i++){$x=Map-X $f ($i+.5) 6;$h=$f.H*$vals[$i]/50;Fill-Rect $g $(if($i-lt2){$cyan}else{$light}) ($x-55) ($f.B-$h) 110 $h;Write-Text $g $labels[$i] ($x-48) 758 15 $ink;$cum+=$vals[$i];$line+=,@($x,(Map-Y $f ($cum/2) 50))}
  Draw-Polyline $g $navy 5 $line;Draw-Line $g $red 2 $f.L (Map-Y $f 40 50) $f.R (Map-Y $f 40 50) $true;Write-Text $g '80 %' 1400 (Map-Y $f 40 50 - 28) 18 $red $true
  if($detail){Write-Text $g $(if($de){'Die ersten drei Ursachen erklären 78 % der Befunde.'}else{'The first three causes explain 78% of findings.'}) 940 164 20 $navy $true}
  Save-Plot $c $name
}
function Plot-FmeaFta([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'FMEA und FTA: zwei Blickrichtungen auf dasselbe Risiko'}else{'FMEA and FTA: two views of the same risk'}) $(if($de){'Vorwärts entlang der Wirkungskette, rückwärts vom unerwünschten Top-Ereignis.'}else{'Forward along the effect chain, backward from the unwanted top event.'});$g=$c.Graphics
  Write-Text $g 'FMEA' 112 190 24 $cyan $true; Write-Text $g 'FTA' 900 190 24 $cyan $true
  $fmeaLabels=$(if($de){@('Ursache','Fehlerart','Fehlerfolge')}else{@('Cause','Failure mode','Effect')})
  $fmeaText=$(if($de){@('Dichtung verschleißt','Leckage im Gehäuse','Schmierstoffverlust')}else{@('Seal wears','Housing leakage','Loss of lubricant')})
  for($i=0;$i-lt3;$i++){$x=105+$i*245;Fill-Rect $g $light $x 280 205 150;Draw-Rect $g $grid 2 $x 280 205 150;Write-Text $g $fmeaLabels[$i] ($x+18) 302 17 $cyan $true;Write-Text $g $fmeaText[$i] ($x+18) 350 18 $navy $true;if($i-lt2){Draw-Line $g $cyan 4 ($x+205) 355 ($x+245) 355}}
  Write-Text $g $(if($de){'Vorwärtsanalyse'}else{'Forward analysis'}) 318 470 18 $muted $true

  $topX=1195;$topY=265;Fill-Rect $g $navy ($topX-150) $topY 300 78;Write-Text $g $(if($de){'Top-Ereignis: Antriebsausfall'}else{'Top event: drive failure'}) ($topX-124) ($topY+22) 18 $white $true
  Draw-Line $g $navy 3 $topX ($topY+78) $topX 390
  Fill-Rect $g $light ($topX-48) 390 96 52;Draw-Rect $g $cyan 2 ($topX-48) 390 96 52;Write-Text $g 'ODER' ($topX-30) 403 17 $navy $true
  Draw-Line $g $cyan 3 $topX 442 $topX 485;Draw-Line $g $cyan 3 970 485 1420 485
  foreach($x in @(970,1195,1420)){Draw-Line $g $cyan 3 $x 485 $x 545}
  $ftaLabels=$(if($de){@('Lager blockiert','Schmierstoff fehlt','Steuerung fällt aus')}else{@('Bearing blocks','Lubricant missing','Control fails')})
  for($i=0;$i-lt3;$i++){$x=865+$i*225;Fill-Rect $g $light $x 545 210 105;Draw-Rect $g $grid 2 $x 545 210 105;Write-Text $g $ftaLabels[$i] ($x+18) 578 17 $navy $true}
  Write-Text $g $(if($de){'Rückwärtsanalyse'}else{'Backward analysis'}) 1090 695 18 $muted $true
  Write-Text $g $(if($de){'FMEA priorisiert Fehlerketten. FTA prüft, welche Ursachenkombinationen zum Top-Ereignis führen.'}else{'FMEA prioritises failure chains. FTA tests which combinations of causes lead to the top event.'}) 255 790 19 $ink $true
  Save-Plot $c $name
}
function Plot-LoadSpectrum([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'Vom Feldsignal zum äquivalenten Prüfprofil'}else{'From field signal to an equivalent test profile'}) $(if($de){'Zeitliche Verdichtung bei erhaltener Lastverteilung und Schädigung.'}else{'Time compression while preserving load distribution and damage.'});$g=$c.Graphics
  $f=Draw-ChartFrame $g $(if($de){'Zeit [h]'}else{'Time [h]'}) $(if($de){'Lastamplitude [kN]'}else{'Load amplitude [kN]'}) 100 12
  $pts=@();for($i=0;$i-le100;$i++){ $v=5+2.4*[math]::Sin($i*.34)+1.1*[math]::Sin($i*1.31);if($i-ge62-and$i-le67){$v+=3};$pts+=,@((Map-X $f $i 100),(Map-Y $f $v 12))};Draw-Polyline $g $cyan 4 $pts
  Draw-Line $g $orange 3 (Map-X $f 62 100) $f.T (Map-X $f 67 100) $f.T;Write-Text $g $(if($de){'Spitzenlasten erhalten'}else{'Preserve peak loads'}) 965 170 18 $orange $true
  if($detail){Fill-Rect $g ([Drawing.Color]::FromArgb(30,46,161,207)) 1020 240 360 180;Write-Text $g $(if($de){'Schädigungsäquivalenz'}else{'Damage equivalence'}) 1050 270 20 $navy $true;Write-Text $g 'D_test / D_field = 1,02' 1050 320 27 $cyan $true;Write-Text $g $(if($de){'Ausfallphysik unverändert'}else{'Failure physics unchanged'}) 1050 370 18 $muted}
  Save-Plot $c $name
}
function Plot-Evidence([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'Von der Anforderung zur Freigabe'}else{'From requirement to release'}) $(if($de){'Jede Aussage ist über eindeutige Evidenz rückverfolgbar.'}else{'Every statement is traceable through explicit evidence.'});$g=$c.Graphics
  $labels=$(if($de){@('Anforderung','Risiko','Methode','Ergebnis','Freigabe')}else{@('Requirement','Risk','Method','Result','Release')})
  for($i=0;$i-lt5;$i++){$x=70+$i*310;Fill-Rect $g $(if($i-eq4){$navy}else{$light}) $x 310 250 150;Draw-Rect $g $(if($i-eq4){$navy}else{$grid}) 2 $x 310 250 150;Write-Text $g ('0'+($i+1)) ($x+25) 335 18 $(if($i-eq4){$cyan}else{$cyan}) $true;Write-Text $g $labels[$i] ($x+25) 390 23 $(if($i-eq4){$white}else{$navy}) $true;if($i-lt4){Draw-Line $g $cyan 4 ($x+250) 385 ($x+310) 385}}
  if($detail){Write-Text $g 'REQ-17 -> RISK-04 -> TEST-12 -> REP-12 -> REL-03' 370 590 27 $navy $true;Write-Text $g $(if($de){'Die ID-Kette macht Annahmen, Luecken und Entscheidungen pruefbar.'}else{'The ID chain makes assumptions, gaps and decisions auditable.'}) 410 645 20 $muted}
  Save-Plot $c $name
}
function Plot-Survival([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'Lebensdauer mit zensierten Daten bewerten'}else{'Assess lifetime with censored observations'}) $(if($de){'Kaplan-Meier-Schätzung mit 95-%-Konfidenzgrenzen und B10.'}else{'Kaplan-Meier estimate with 95% confidence limits and B10.'});$g=$c.Graphics
  $f=Draw-ChartFrame $g $(if($de){'Betriebsstunden'}else{'Operating hours'}) 'R(t)' 5000 1
  $times=@(0,450,900,1400,1900,2450,3000,3700,4400,5000);$surv=@(1,.96,.91,.86,.79,.71,.62,.50,.38,.30)
  $upper=@();$lower=@()
  for($i=0;$i-lt$times.Count;$i++){
    $upperValue=[math]::Min(1,$surv[$i]+.045+$i*.008)
    if($i-eq0){$upper+=,@((Map-X $f $times[$i] 5000),(Map-Y $f $upperValue 1))}
    else{
      $previousUpper=[math]::Min(1,$surv[$i-1]+.045+($i-1)*.008)
      $upper+=,@((Map-X $f $times[$i] 5000),(Map-Y $f $previousUpper 1))
      $upper+=,@((Map-X $f $times[$i] 5000),(Map-Y $f $upperValue 1))
    }
  }
  for($i=$times.Count-1;$i-ge0;$i--){
    $lowerValue=[math]::Max(0,$surv[$i]-.045-$i*.008)
    $lower+=,@((Map-X $f $times[$i] 5000),(Map-Y $f $lowerValue 1))
    if($i-gt0){
      $previousLower=[math]::Max(0,$surv[$i-1]-.045-($i-1)*.008)
      $lower+=,@((Map-X $f $times[$i] 5000),(Map-Y $f $previousLower 1))
    }
  }
  Draw-Polyline $g ([Drawing.Color]::FromArgb(145,46,161,207)) 3 $upper
  Draw-Polyline $g ([Drawing.Color]::FromArgb(145,46,161,207)) 3 $lower
  $pts=@();for($i=0;$i-lt$times.Count;$i++){if($i-eq0){$pts+=,@((Map-X $f $times[$i] 5000),(Map-Y $f $surv[$i] 1))}else{$pts+=,@((Map-X $f $times[$i] 5000),(Map-Y $f $surv[$i-1] 1));$pts+=,@((Map-X $f $times[$i] 5000),(Map-Y $f $surv[$i] 1))}};Draw-Polyline $g $navy 6 $pts
  foreach($t in @(1100,2200,3350,4100)){ $x=Map-X $f $t 5000;$idx=[math]::Min([math]::Floor($t/550),$surv.Count-1);$y=Map-Y $f $surv[$idx] 1;Draw-Line $g $cyan 3 ($x-9) $y ($x+9) $y;Draw-Line $g $cyan 3 $x ($y-9) $x ($y+9)}
  Draw-Line $g $red 2 $f.L (Map-Y $f .9 1) (Map-X $f 980 5000) (Map-Y $f .9 1) $true;Draw-Line $g $red 2 (Map-X $f 980 5000) (Map-Y $f .9 1) (Map-X $f 980 5000) $f.B $true;Write-Text $g 'B10 ≈ 980 h' 355 255 18 $red $true
  if($detail){Write-Text $g $(if($de){'+  rechtszensiert: bis hier ohne Ausfall beobachtet'}else{'+  right-censored: observed without failure up to this point'}) 990 165 18 $cyan $true}
  Save-Plot $c $name
}
function Plot-Interaction([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'DoE zeigt Haupteffekte und Wechselwirkungen'}else{'DoE reveals main effects and interactions'}) $(if($de){'Beispiel: Einfluss von Temperatur und Drehzahl auf den Verschleiß.'}else{'Example: effect of temperature and speed on wear.'});$g=$c.Graphics
  $f=Draw-ChartFrame $g $(if($de){'Temperaturstufe'}else{'Temperature level'}) $(if($de){'Verschleiß [µm]'}else{'Wear [µm]'}) 2 100
  $a=@(@((Map-X $f .5 2),(Map-Y $f 32 100)),@((Map-X $f 1.5 2),(Map-Y $f 78 100)));$b=@(@((Map-X $f .5 2),(Map-Y $f 58 100)),@((Map-X $f 1.5 2),(Map-Y $f 48 100)));Draw-Polyline $g $cyan 6 $a;Draw-Polyline $g $navy 6 $b
  foreach($p in $a){Draw-Ellipse $g $cyan $p[0] $p[1] 18}
  foreach($p in $b){Draw-Ellipse $g $navy $p[0] $p[1] 18}
  Write-Text $g $(if($de){'hohe Drehzahl'}else{'high speed'}) 1130 300 18 $cyan $true;Write-Text $g $(if($de){'niedrige Drehzahl'}else{'low speed'}) 1130 475 18 $navy $true;Write-Text $g $(if($de){'Nicht parallele Linien = Wechselwirkung'}else{'Non-parallel lines = interaction'}) 960 165 20 $red $true
  if($detail){Fill-Rect $g ([Drawing.Color]::FromArgb(22,46,161,207)) 260 575 390 100;Write-Text $g $(if($de){'Optimierungsziel: < 45 µm'}else{'Optimisation target: < 45 µm'}) 300 610 21 $navy $true}
  Save-Plot $c $name
}
function Plot-DoESpace([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'DoE-Designraum mit Zielgebiet'}else{'DoE design space with target region'}) $(if($de){'Versuchspunkte tragen ein empirisches Modell innerhalb des untersuchten Faktorraums.'}else{'Experimental points support an empirical model inside the investigated factor space.'});$g=$c.Graphics
  $left=220;$top=215;$size=540
  for($i=0;$i-lt18;$i++){for($j=0;$j-lt18;$j++){$xn=($i+.5)/18;$yn=($j+.5)/18;$z=([math]::Pow($xn-.68,2)*1.4+[math]::Pow($yn-.38,2)*1.1+.15*$xn*$yn);$alpha=[int](35+125*[math]::Min(1,$z));$col=[Drawing.Color]::FromArgb(255,[int](234-$alpha*.25),[int](245-$alpha*.15),[int](251-$alpha*.02));Fill-Rect $g $col ($left+$i*$size/18) ($top+(17-$j)*$size/18) ($size/18+1) ($size/18+1)}}
  Draw-Rect $g $navy 3 $left $top $size $size
  Write-Text $g $(if($de){'Faktor A: Temperatur'}else{'Factor A: temperature'}) 360 790 20 $navy $true
  $state=$g.Save();$g.TranslateTransform(112,610);$g.RotateTransform(-90);Write-Text $g $(if($de){'Faktor B: Drehzahl'}else{'Factor B: speed'}) 0 0 20 $navy $true;$g.Restore($state)
  $design=@(@(.15,.15),@(.15,.85),@(.85,.15),@(.85,.85),@(.5,.5),@(.5,.15),@(.5,.85),@(.15,.5),@(.85,.5))
  foreach($p in $design){$x=$left+$p[0]*$size;$y=$top+(1-$p[1])*$size;Draw-Ellipse $g $white $x $y 26;Draw-Ellipse $g $navy $x $y 14}
  $optX=$left+.68*$size;$optY=$top+(1-.38)*$size;Draw-Ellipse $g $white $optX $optY 48;Draw-Ellipse $g $green $optX $optY 28;Write-Text $g $(if($de){'Zielgebiet'}else{'Target region'}) ($optX+28) ($optY-24) 18 $green $true
  Write-Text $g $(if($de){'Modellgüte'}else{'Model quality'}) 930 250 19 $cyan $true
  Write-Text $g 'R² = 0,94' 930 292 34 $navy $true
  Write-Text $g $(if($de){'Versuchspunkte'}else{'Design points'}) 930 405 19 $cyan $true
  Write-Text $g 'n = 9' 930 447 34 $navy $true
  Write-Text $g $(if($de){'Aussagen außerhalb des Rahmens sind Extrapolation.'}else{'Statements outside the frame are extrapolation.'}) 930 575 20 $red $true
  Draw-Line $g $red 3 930 625 1410 625 $true
  Write-Text $g $(if($de){'Der Zielbereich ist eine Modellprognose und muss bestätigt werden.'}else{'The target region is a model prediction and must be confirmed.'}) 930 655 18 $muted
  Save-Plot $c $name
}
function Plot-Risk([string]$name,[bool]$de,[bool]$detail) {
  $c=New-Canvas $(if($de){'Risiko vor und nach der Maßnahme'}else{'Risk before and after action'}) $(if($de){'Bewertung wird durch Wirksamkeitsnachweis und Restrisiko geschlossen.'}else{'Assessment is closed through effectiveness evidence and residual risk.'});$g=$c.Graphics
  $size=92;$x0=420;$y0=230
  for($row=1;$row-le5;$row++){for($col=1;$col-le5;$col++){$score=$row*$col;$color=$(if($score-ge15){$red}elseif($score-ge8){$orange}else{$green});Fill-Rect $g ([Drawing.Color]::FromArgb(205,$color)) ($x0+($col-1)*$size) ($y0+(5-$row)*$size) ($size-5) ($size-5);Write-Text $g $score ($x0+($col-1)*$size+31) ($y0+(5-$row)*$size+25) 20 $white $true}}
  Write-Text $g $(if($de){'Eintritt'}else{'Likelihood'}) 570 720 19 $navy $true;$state=$g.Save();$g.TranslateTransform(330,600);$g.RotateTransform(-90);Write-Text $g $(if($de){'Auswirkung'}else{'Severity'}) 0 0 19 $navy $true;$g.Restore($state)
  $beforeX=$x0+4*$size+43;$beforeY=$y0+1*$size+43;$afterX=$x0+2*$size+43;$afterY=$y0+3*$size+43;Draw-Ellipse $g $navy $beforeX $beforeY 28;Draw-Line $g $navy 4 $beforeX $beforeY $afterX $afterY;Draw-Ellipse $g $white $afterX $afterY 32;Draw-Ellipse $g $cyan $afterX $afterY 20
  Write-Text $g $(if($de){'Ausgangsrisiko'}else{'Initial risk'}) 1030 310 20 $navy $true;Write-Text $g $(if($de){'Restrisiko nach Nachweis'}else{'Residual risk after evidence'}) 1030 390 20 $cyan $true
  if($detail){Write-Text $g $(if($de){'Maßnahme: konstruktive Begrenzung + Verifikation im Versuch'}else{'Action: design limitation + verification by test'}) 970 520 18 $muted}
  Save-Plot $c $name
}

$plots=@(
  # The knowledge hero uses the dedicated, editorially simplified bathtub-curve generator.
  @('reliability-dimensions','Plot-Bathtub',$true),
  @('reliability-planning-context','Plot-Allocation',$false),@('target-allocation','Plot-Allocation',$true),
  @('weak-point-analysis-context','Plot-Pareto',$false),@('fmea-fta','Plot-FmeaFta',$true),
  @('reliability-testing-context','Plot-LoadSpectrum',$false),@('field-to-test-profile','Plot-LoadSpectrum',$true),
  @('assurance-context','Plot-Evidence',$false),@('assurance-traceability','Plot-Evidence',$true),
  @('lifetime-prediction-context','Plot-Survival',$false),@('censored-data-prediction','Plot-Survival',$true),
  @('doe-context','Plot-Interaction',$false),@('doe-design-space','Plot-DoESpace',$true),
  @('risk-management-context','Plot-Risk',$false),@('risk-measure-evidence','Plot-Risk',$true)
)
foreach($locale in @('de','en')){foreach($plot in $plots){& $plot[1] ($plot[0]+'-'+$locale+'.png') ($locale-eq'de') $plot[2]}}
