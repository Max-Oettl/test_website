param([string]$OutputDirectory = "public/graphics/wissen/technical-plots")

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing
New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null

$W = 1600; $H = 700
$navy = [Drawing.Color]::FromArgb(20,36,82)
$navy80 = [Drawing.Color]::FromArgb(67,80,117)
$cyan10 = [Drawing.Color]::FromArgb(234,245,251)
$navy10 = [Drawing.Color]::FromArgb(231,233,238)
$divider = [Drawing.Color]::FromArgb(202,210,222)
$white = [Drawing.Color]::White

function Font([float]$size,[bool]$bold=$false) { [Drawing.Font]::new('Segoe UI',$size,$(if($bold){'Bold'}else{'Regular'}),'Pixel') }
function Text($g,[string]$value,[float]$x,[float]$y,[float]$size,$color,[bool]$bold=$false) {
  $f=Font $size $bold; $brush=[Drawing.SolidBrush]::new($color); $g.DrawString($value,$f,$brush,$x,$y); $f.Dispose(); $brush.Dispose()
}
function Line($g,$color,[float]$width,[float]$x1,[float]$y1,[float]$x2,[float]$y2,[bool]$dashed=$false) {
  $pen=[Drawing.Pen]::new($color,$width); $pen.StartCap='Round'; $pen.EndCap='Round'; if($dashed){$pen.DashPattern=@(5,5)}; $g.DrawLine($pen,$x1,$y1,$x2,$y2); $pen.Dispose()
}
function Band($g,$color,[float]$x,[float]$y,[float]$w,[float]$h) {
  $brush=[Drawing.SolidBrush]::new($color); $g.FillRectangle($brush,$x,$y,$w,$h); $brush.Dispose()
}

function Render([string]$locale) {
  $de=$locale-eq'de'; $lambda=[char]0x03BB
  $ue=[char]0x00FC; $ae=[char]0x00E4; $sz=[char]0x00DF
  $bmp=[Drawing.Bitmap]::new($W,$H); $g=[Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode='AntiAlias'; $g.TextRenderingHint='ClearTypeGridFit'; $g.Clear($white)
  $l=130; $t=180; $r=1510; $b=535; $pw=$r-$l; $p1=$l+$pw*.27; $p2=$l+$pw*.73

  Band $g ([Drawing.Color]::FromArgb(112,$cyan10)) $l $t ($p1-$l) ($b-$t)
  Band $g ([Drawing.Color]::FromArgb(72,$navy10)) $p1 $t ($p2-$p1) ($b-$t)
  Band $g ([Drawing.Color]::FromArgb(112,$cyan10)) $p2 $t ($r-$p2) ($b-$t)

  Text $g $(if($de){'Badewannenmodell der Ausfallrate'}else{'Bathtub model of the failure rate'}) 92 42 38 $navy $true
  Text $g $(if($de){'Schematische Darstellung - die Form entsteht aus unterschiedlichen Ausfallmechanismen.'}else{'Schematic representation - the shape results from different failure mechanisms.'}) 94 96 19 $navy80
  Line $g $navy 3 $l $b $r $b; Line $g $navy 3 $l $b $l $t
  Line $g $divider 2 $p1 $t $p1 $b $true; Line $g $divider 2 $p2 $t $p2 $b $true

  $points=[Drawing.PointF[]]@(
    [Drawing.PointF]::new($l+15,$t+35),[Drawing.PointF]::new($l+95,$t+145),[Drawing.PointF]::new($p1-45,$t+245),
    [Drawing.PointF]::new($p1+95,$t+272),[Drawing.PointF]::new(($p1+$p2)/2,$t+282),[Drawing.PointF]::new($p2-95,$t+272),
    [Drawing.PointF]::new($p2+45,$t+240),[Drawing.PointF]::new($r-95,$t+145),[Drawing.PointF]::new($r-15,$t+35)
  )
  $curvePen=[Drawing.Pen]::new($navy,8); $curvePen.StartCap='Round'; $curvePen.EndCap='Round'; $curvePen.LineJoin='Round'
  $g.DrawCurve($curvePen,$points,.28); $curvePen.Dispose()

  Text $g $(if($de){"Fr${ue}hausfallphase"}else{'Early-failure phase'}) ($l+44) 205 21 $navy $true
  Text $g $(if($de){'Nutzungsphase'}else{'Useful-life phase'}) ($p1+42) 205 21 $navy $true
  Text $g $(if($de){"Verschlei${sz}phase"}else{'Wear-out phase'}) ($p2+42) 205 21 $navy $true
  Text $g $(if($de){'Fertigungs-, Montage-'}else{'Manufacturing and'}) ($l+44) 575 17 $navy80
  Text $g $(if($de){'und Materialabweichungen'}else{'assembly deviations'}) ($l+44) 600 17 $navy80
  Text $g $(if($de){"Zuf${ae}llige Beanspruchungen"}else{'Random operating loads'}) ($p1+42) 575 17 $navy80
  Text $g $(if($de){"bei ann${ae}hernd konstanter Rate"}else{'at an approximately constant rate'}) ($p1+42) 600 17 $navy80
  Text $g $(if($de){"Alterung, Erm${ue}dung"}else{'Ageing, fatigue'}) ($p2+42) 575 17 $navy80
  Text $g $(if($de){"und Verschlei${sz}"}else{'and wear'}) ($p2+42) 600 17 $navy80
  Text $g $(if($de){'Betriebszeit t'}else{'Operating time t'}) 738 650 18 $navy $true

  $state=$g.Save(); $g.TranslateTransform(42,430); $g.RotateTransform(-90)
  Text $g $(if($de){"Ausfallrate $lambda(t)"}else{"Failure rate $lambda(t)"}) 0 0 18 $navy $true
  $g.Restore($state)

  $path=Join-Path $OutputDirectory "reliability-engineering-context-$locale.png"
  $bmp.Save($path,[Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $bmp.Dispose(); Write-Output $path
}

Render 'de'
Render 'en'
