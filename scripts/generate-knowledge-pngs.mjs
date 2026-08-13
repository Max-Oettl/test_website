import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const W = 1800;
const H = 1040;
const C = { navy: "#142452", cyan: "#2EA1CF", pale: "#EAF5FA", mid: "#89B9CD", grid: "#D7E4EA", ink: "#40526B", white: "#FFFFFF", red: "#D9564A", green: "#3F9B78" };
const out = path.join(process.cwd(), "public", "graphics", "wissen", "png");
const esc = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const text = (x, y, value, size = 24, weight = 500, fill = C.ink, anchor = "start") => `<text x="${x}" y="${y}" fill="${fill}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${esc(value)}</text>`;
const line = (x1, y1, x2, y2, stroke = C.grid, width = 2, dash = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ""}/>`;
const rect = (x, y, width, height, fill = C.white, stroke = C.grid, strokeWidth = 2, radius = 0) => `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
const circle = (x, y, radius, fill = C.white, stroke = C.cyan, strokeWidth = 3) => `<circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
const polyline = (points, stroke = C.cyan, width = 5, fill = "none", dash = "") => `<polyline points="${points.map((point) => point.join(",")).join(" ")}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${dash ? `stroke-dasharray="${dash}"` : ""}/>`;
const polygon = (points, fill, opacity = 1) => `<polygon points="${points.map((point) => point.join(",")).join(" ")}" fill="${fill}" opacity="${opacity}"/>`;

function documentSvg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="${C.white}"/>${body}</svg>`;
}

function plot(x, y, width, height, xLabel, yLabel, xTicks, yTicks) {
  let body = rect(x, y, width, height, C.white, C.grid, 2);
  xTicks.forEach(([position, label]) => {
    const px = x + position * width;
    body += line(px, y, px, y + height, C.grid, 1) + text(px, y + height + 38, label, 20, 500, C.ink, "middle");
  });
  yTicks.forEach(([position, label]) => {
    const py = y + (1 - position) * height;
    body += line(x, py, x + width, py, C.grid, 1) + text(x - 18, py + 7, label, 20, 500, C.ink, "end");
  });
  body += line(x, y + height, x + width, y + height, C.navy, 3) + line(x, y, x, y + height, C.navy, 3);
  body += text(x + width / 2, y + height + 82, xLabel, 23, 600, C.navy, "middle");
  body += `<g transform="translate(${x - 90} ${y + height / 2}) rotate(-90)">${text(0, 0, yLabel, 23, 600, C.navy, "middle")}</g>`;
  return body;
}

function chartShell(title, note, body, lang) {
  const example = lang === "de" ? "Illustrative Beispieldaten" : "Illustrative example data";
  return documentSvg(`${text(100, 82, title, 36, 700, C.navy)}${text(1700, 82, example, 20, 500, C.ink, "end")}${line(100, 112, 1700, 112, C.cyan, 4)}${body}${text(100, 1000, note, 20, 500, C.ink)}`);
}

function reliabilityCurves(lang) {
  const x = 190, y = 170, w = 1450, h = 690;
  let body = plot(x, y, w, h, lang === "de" ? "Betriebsdauer t [h]" : "Operating time t [h]", "R(t)", [[0,"0"],[.25,"500"],[.5,"1 000"],[.75,"1 500"],[1,"2 000"]], [[0,"0"],[.2,"0,2"],[.4,"0,4"],[.6,"0,6"],[.8,"0,8"],[1,"1,0"]]);
  const series = [[900,1.45,C.navy],[1250,1.7,C.cyan],[1650,2,C.green]];
  series.forEach(([eta,beta,color]) => {
    const points = Array.from({length:101},(_,i)=>{const time=i*20;const r=Math.exp(-Math.pow(time/eta,beta));return [x+i/100*w,y+(1-r)*h];});
    body += polyline(points,color,6);
  });
  const labels = lang === "de" ? ["hohe Beanspruchung","Referenzprofil","reduzierte Beanspruchung"] : ["high load","reference profile","reduced load"];
  labels.forEach((label,i)=>{body += line(1120,205+i*42,1170,205+i*42,series[i][2],6)+text(1190,213+i*42,label,21,600,C.ink);});
  return chartShell(lang === "de" ? "Zuverlässigkeit ist an Einsatz und Zeit gebunden" : "Reliability depends on use and time", lang === "de" ? "Weibull-Modell: R(t)=exp[-(t/η)^β]. Parameter dienen ausschließlich der Veranschaulichung." : "Weibull model: R(t)=exp[-(t/η)^β]. Parameters are illustrative only.", body, lang);
}

function bathtub(lang) {
  const x=190,y=170,w=1450,h=690;
  let body=plot(x,y,w,h,lang==="de"?"Lebenszyklus":"Life cycle",lang==="de"?"Ausfallrate λ(t)":"Failure rate λ(t)",[[0,"0"],[.25,"25 %"],[.5,"50 %"],[.75,"75 %"],[1,"100 %"]],[[0,"0"],[.25,"0,25"],[.5,"0,50"],[.75,"0,75"],[1,"1,00"]]);
  const early=[],random=[],wear=[],total=[];
  for(let i=0;i<=100;i++){const u=i/100;const a=.72*Math.exp(-u*10);const b=.12;const c=.72*Math.pow(Math.max(0,(u-.68)/.32),2.4);early.push([x+u*w,y+(1-a)*h]);random.push([x+u*w,y+(1-b)*h]);wear.push([x+u*w,y+(1-c)*h]);total.push([x+u*w,y+(1-Math.min(1,a+b+c))*h]);}
  body+=polyline(early,C.mid,3,"none","10 8")+polyline(random,C.green,3,"none","10 8")+polyline(wear,C.cyan,3,"none","10 8")+polyline(total,C.navy,8);
  const labels=lang==="de"?["Frühausfälle","Zufallsausfälle","Verschleißausfälle","Gesamtrate"]:["Early failures","Random failures","Wear-out failures","Total rate"];
  [[C.mid,"10 8"],[C.green,"10 8"],[C.cyan,"10 8"],[C.navy,""]].forEach(([color,dash],i)=>{body+=line(1070,205+i*42,1120,205+i*42,color,i===3?7:3,dash)+text(1140,213+i*42,labels[i],21,600,C.ink);});
  return chartShell(lang==="de"?"Überlagerte Ausfallmechanismen im Lebenszyklus":"Superimposed failure mechanisms over the life cycle",lang==="de"?"Die Gesamt-Ausfallrate entsteht aus unterschiedlichen zeitabhängigen Mechanismen.":"The total failure rate results from different time-dependent mechanisms.",body,lang);
}

function allocation(lang, forecast=false) {
  const x=220,y=185,w=1360,h=650;
  let body=plot(x,y,w,h,lang==="de"?(forecast?"Entwicklungsmeilenstein":"Subsystem"):forecast?"Development milestone":"Subsystem",lang==="de"?"Zuverlässigkeit R":"Reliability R",[[0,"1"],[.25,"2"],[.5,"3"],[.75,"4"],[1,"5"]],[[0,"0,90"],[.2,"0,92"],[.4,"0,94"],[.6,"0,96"],[.8,"0,98"],[1,"1,00"]]);
  if(forecast){
    const target=.95;body+=line(x,y+(1-target)*h/.1,x+w,y+(1-target)*h/.1,C.navy,5,"14 10");
    const vals=[.915,.928,.941,.949,.954];const pts=vals.map((v,i)=>[x+i*w/4,y+(1-v)*h/.1]);body+=polyline(pts,C.cyan,7);pts.forEach((p,i)=>body+=circle(p[0],p[1],10,C.white,C.cyan,4)+text(p[0],p[1]-22,vals[i].toFixed(3).replace(".",","),19,700,C.navy,"middle"));
    body+=text(1550,y+(1-target)*h/.1-18,lang==="de"?"Systemziel":"System target",20,700,C.navy,"end");
  } else {
    const vals=[.985,.982,.982];vals.forEach((v,i)=>{const bw=240;const px=x+180+i*390;const barH=(v-.9)/.1*h;body+=rect(px,y+h-barH,bw,barH,i===0?C.navy:C.cyan,"none",0,4)+text(px+bw/2,y+h-barH-20,v.toFixed(3).replace(".",","),23,700,C.navy,"middle")+text(px+bw/2,y+h+42,`${lang==="de"?"Subsystem":"Subsystem"} ${i+1}`,21,600,C.ink,"middle");});
    body+=text(900,300,"0,985 × 0,982 × 0,982 = 0,950",30,700,C.navy,"middle");
  }
  return chartShell(forecast?(lang==="de"?"Ziel und Prognose im Entwicklungsverlauf":"Target and forecast over development"):(lang==="de"?"Zuverlässigkeitsbudget eines seriellen Systems":"Reliability budget of a series system"),lang==="de"?"Top-down-Ziel und Bottom-up-Bewertung müssen konsistent zusammengeführt werden.":"Top-down targets and bottom-up assessment must be reconciled consistently.",body,lang);
}

function pareto(lang, criticality=false) {
  const x=210,y=175,w=1390,h=680;
  if(criticality){
    let body=plot(x,y,w,h,lang==="de"?"Auftretenswahrscheinlichkeit":"Occurrence likelihood",lang==="de"?"Auswirkung":"Severity",[[0,"niedrig"],[.5,"mittel"],[1,"hoch"]],[[0,"niedrig"],[.5,"mittel"],[1,"hoch"]]);
    const points=[[.18,.28,18],[.3,.72,28],[.46,.44,22],[.62,.82,34],[.78,.58,26],[.87,.9,39]];
    points.forEach(([px,py,r],i)=>{body+=circle(x+px*w,y+(1-py)*h,r,i>3?"#F2D7D2":C.pale,i>3?C.red:C.cyan,4)+text(x+px*w,y+(1-py)*h+7,`M${i+1}`,18,700,C.navy,"middle");});
    body+=polygon([[x+w*.55,y],[x+w,y],[x+w,y+h*.45]],C.red,.08);
    return chartShell(lang==="de"?"Mechanismen nach Kritikalität ordnen":"Rank mechanisms by criticality",lang==="de"?"Blasengröße repräsentiert die relative Unsicherheit der Bewertung.":"Bubble size represents relative assessment uncertainty.",body,lang);
  }
  let body=plot(x,y,w,h,lang==="de"?"Ausfallmechanismus":"Failure mechanism",lang==="de"?"Anteil / kumuliert [%]":"Share / cumulative [%]",[[.1,"Kontakt"],[.3,"Ermüdung"],[.5,"Dichtung"],[.7,"Software"],[.9,"Sonstige"]],[[0,"0"],[.25,"25"],[.5,"50"],[.75,"75"],[1,"100"]]);
  const vals=[42,25,16,10,7];let cumulative=0;const cumulativePoints=[];
  vals.forEach((v,i)=>{const bw=145;const px=x+70+i*278;body+=rect(px,y+h-v/100*h,bw,v/100*h,i<2?C.cyan:C.mid,"none",0,3)+text(px+bw/2,y+h-v/100*h-16,`${v} %`,20,700,C.navy,"middle");cumulative+=v;cumulativePoints.push([px+bw/2,y+h-cumulative/100*h]);});
  body+=polyline(cumulativePoints,C.navy,6);cumulativePoints.forEach((point)=>body+=circle(point[0],point[1],8,C.white,C.navy,4));
  return chartShell(lang==="de"?"Pareto der beobachteten Ausfallmechanismen":"Pareto of observed failure mechanisms",lang==="de"?"Die kumulierte Linie zeigt, welche wenigen Mechanismen den Großteil der Befunde erklären.":"The cumulative line shows which few mechanisms explain most findings.",body,lang);
}

function loadPlot(lang, histogram=false) {
  const x=200,y=180,w=1400,h=660;
  if(histogram){
    let body=plot(x,y,w,h,lang==="de"?"Lastamplitude [kN]":"Load amplitude [kN]",lang==="de"?"relative Häufigkeit [%]":"Relative frequency [%]",[[0,"0"],[.2,"2"],[.4,"4"],[.6,"6"],[.8,"8"],[1,"10"]],[[0,"0"],[.25,"10"],[.5,"20"],[.75,"30"],[1,"40"]]);
    const field=[6,14,26,33,18,3],test=[3,10,25,36,22,4];field.forEach((v,i)=>{const px=x+105+i*210;body+=rect(px,y+h-v/40*h,70,v/40*h,C.mid,"none",0,2)+rect(px+76,y+h-test[i]/40*h,70,test[i]/40*h,C.cyan,"none",0,2);});
    body+=line(1180,220,1230,220,C.mid,14)+text(1250,228,lang==="de"?"Feldkollektiv":"Field spectrum",20,600)+line(1180,260,1230,260,C.cyan,14)+text(1250,268,lang==="de"?"Prüfkollektiv":"Test spectrum",20,600);
    return chartShell(lang==="de"?"Lastkollektive statt bloßer Zeitraffung":"Load spectra instead of simple time compression",lang==="de"?"Ein Prüfprofil muss relevante Amplituden und Schädigungsanteile des Feldes abbilden.":"A test profile must represent relevant field amplitudes and damage contributions.",body,lang);
  }
  let body=plot(x,y,w,h,lang==="de"?"Zeit [s]":"Time [s]",lang==="de"?"Last [kN]":"Load [kN]",[[0,"0"],[.2,"20"],[.4,"40"],[.6,"60"],[.8,"80"],[1,"100"]],[[0,"-8"],[.25,"-4"],[.5,"0"],[.75,"4"],[1,"8"]]);
  const points=Array.from({length:201},(_,i)=>{const u=i/200;const val=.5+.22*Math.sin(i*.24)+.1*Math.sin(i*.77)+(i%47===0?.22:0);return [x+u*w,y+(1-val)*h];});body+=polyline(points,C.navy,4);
  body+=line(x,y+.15*h,x+w,y+.15*h,C.red,3,"12 9")+text(1570,y+.15*h-14,lang==="de"?"Grenzlast":"Load limit",20,700,C.red,"end");
  return chartShell(lang==="de"?"Gemessenes Last-Zeit-Signal aus dem Einsatz":"Measured load-time signal from operation",lang==="de"?"Spitzen, Reihenfolge und Mittelwert beeinflussen die technische Bewertung.":"Peaks, sequence and mean value influence the engineering assessment.",body,lang);
}

function evidence(lang, trend=false) {
  const x=220,y=190,w=1360,h=650;
  if(trend){
    let body=plot(x,y,w,h,lang==="de"?"Projektmeilenstein":"Project milestone",lang==="de"?"Nachweisabdeckung [%]":"Evidence coverage [%]",[[0,"Konzept"],[.25,"Design"],[.5,"DV"],[.75,"PV"],[1,"Freigabe"]],[[0,"0"],[.25,"25"],[.5,"50"],[.75,"75"],[1,"100"]]);
    const vals=[[10,28,52,78,96,C.navy],[4,16,38,66,91,C.cyan],[0,8,25,55,88,C.green]];vals.forEach((series)=>{const color=series[5];const points=series.slice(0,5).map((v,i)=>[x+i*w/4,y+h-v/100*h]);body+=polyline(points,color,6);points.forEach((point)=>body+=circle(point[0],point[1],8,C.white,color,4));});
    [[C.navy,"Anforderungen"],[C.cyan,"Risiken"],[C.green,"Nachweise"]].forEach(([color,label],i)=>{body+=line(1120,225+i*40,1170,225+i*40,color,6)+text(1190,233+i*40,label,20,600);});
    return chartShell(lang==="de"?"Nachweisabdeckung über Projektmeilensteine":"Evidence coverage across project milestones",lang==="de"?"Abdeckung misst Vollständigkeit; fachliche Wirksamkeit muss zusätzlich bewertet werden.":"Coverage measures completeness; technical effectiveness must also be assessed.",body,lang);
  }
  let body=text(100,175,lang==="de"?"Abdeckung von Anforderungen durch Evidenz":"Coverage of requirements by evidence",26,700,C.navy);
  const rows=lang==="de"?["R-01 Lebensdauer","R-02 Dichtheit","R-03 Sicherheit","R-04 Diagnose","R-05 Umwelt"]:["R-01 Lifetime","R-02 Sealing","R-03 Safety","R-04 Diagnostics","R-05 Environment"];
  const cols=lang==="de"?["Analyse","Simulation","Versuch","Felddaten","Review"]:["Analysis","Simulation","Test","Field data","Review"];
  const sx=430,sy=230,cw=230,rh=120;cols.forEach((label,i)=>body+=text(sx+i*cw+cw/2,sy-28,label,20,700,C.navy,"middle"));
  rows.forEach((label,r)=>{body+=text(sx-28,sy+r*rh+70,label,21,600,C.ink,"end");cols.forEach((_,c)=>{const covered=(r+c)%4!==1;body+=rect(sx+c*cw,sy+r*rh,cw,rh,covered?C.pale:C.white,C.grid,2)+text(sx+c*cw+cw/2,sy+r*rh+76,covered?"✓":"–",30,700,covered?C.cyan:C.ink,"middle");});});
  return chartShell(lang==="de"?"Traceability-Matrix für die Freigabe":"Traceability matrix for release",lang==="de"?"Leere Felder zeigen fehlende Nachweise oder bewusst begründete Lücken.":"Empty cells indicate missing evidence or deliberately justified gaps.",body,lang);
}

function lifetime(lang, survival=false) {
  const x=220,y=170,w=1360,h=690;
  if(survival){
    let body=plot(x,y,w,h,lang==="de"?"Betriebsdauer [h]":"Operating time [h]",lang==="de"?"Überlebenswahrscheinlichkeit R(t)":"Survival probability R(t)",[[0,"0"],[.2,"500"],[.4,"1 000"],[.6,"1 500"],[.8,"2 000"],[1,"2 500"]],[[0,"0"],[.2,"0,2"],[.4,"0,4"],[.6,"0,6"],[.8,"0,8"],[1,"1,0"]]);
    const times=[0,.1,.17,.27,.39,.51,.67,.82,1],vals=[1,.96,.9,.81,.68,.54,.4,.29,.21];const upper=times.map((u,i)=>[x+u*w,y+(1-Math.min(1,vals[i]+.08))*h]);const lower=times.map((u,i)=>[x+u*w,y+(1-Math.max(0,vals[i]-.08))*h]);body+=polygon([...upper,...lower.reverse()],C.pale,.9);
    const step=[];times.forEach((u,i)=>{if(i)step.push([x+u*w,y+(1-vals[i-1])*h]);step.push([x+u*w,y+(1-vals[i])*h]);});body+=polyline(step,C.navy,6);
    [.22,.46,.59,.75].forEach((u)=>{const idx=times.findIndex((v)=>v>u)-1;const yy=y+(1-vals[Math.max(0,idx)])*h;body+=line(x+u*w,yy-12,x+u*w,yy+12,C.cyan,4)+line(x+u*w-10,yy,x+u*w+10,yy,C.cyan,4);});
    return chartShell(lang==="de"?"Kaplan-Meier-Schätzung mit Zensierungen":"Kaplan-Meier estimate with censoring",lang==="de"?"Kreuze markieren rechtszensierte Beobachtungen; das Band zeigt Schätzunsicherheit.":"Crosses mark right-censored observations; the band shows estimation uncertainty.",body,lang);
  }
  const probs=[1,5,10,20,50,80,90,95,99];const transform=(p)=>Math.log(-Math.log(1-p/100));const lo=transform(1),hi=transform(99);
  let body=plot(x,y,w,h,lang==="de"?"Lebensdauer t [h] (logarithmisch)":"Lifetime t [h] (log scale)","F(t)",[[0,"200"],[.25,"400"],[.5,"800"],[.75,"1 600"],[1,"3 200"]],probs.map((p)=>[(transform(p)-lo)/(hi-lo),`${p} %`]));
  const points=[350,430,520,610,690,790,910,1050,1220,1430,1680,2050];points.forEach((time,i)=>{const u=(Math.log(time)-Math.log(200))/(Math.log(3200)-Math.log(200));const p=(i+.7)/(points.length+1);const v=(Math.log(-Math.log(1-p))-lo)/(hi-lo);body+=circle(x+u*w,y+(1-v)*h,8,C.white,C.cyan,4);});
  body+=polyline([[x+.13*w,y+.88*h],[x+.88*w,y+.12*h]],C.navy,6);[.57,.72,.94].forEach((u)=>{const v=.88-(u-.13)/.75*.76;body+=line(x+u*w-11,y+v*h-11,x+u*w+11,y+v*h+11,C.red,4)+line(x+u*w-11,y+v*h+11,x+u*w+11,y+v*h-11,C.red,4);});
  return chartShell(lang==="de"?"Weibull-Wahrscheinlichkeitsnetz":"Weibull probability plot",lang==="de"?"Punkte sind Ausfälle, rote Kreuze rechtszensierte Beobachtungen.":"Dots are failures; red crosses are right-censored observations.",body,lang);
}

function doe(lang, interaction=false) {
  const x=220,y=170,w=1360,h=690;
  if(interaction){
    let body=plot(x,y,w,h,lang==="de"?"Temperaturstufe":"Temperature level",lang==="de"?"Antwort y":"Response y",[[.15,"niedrig"],[.85,"hoch"]],[[0,"20"],[.25,"30"],[.5,"40"],[.75,"50"],[1,"60"]]);
    const a=[[.15,.25],[.85,.82]],b=[[.15,.7],[.85,.4]];body+=polyline(a.map(([u,v])=>[x+u*w,y+(1-v)*h]),C.cyan,7)+polyline(b.map(([u,v])=>[x+u*w,y+(1-v)*h]),C.navy,7);[...a.map((p)=>[...p,C.cyan]),...b.map((p)=>[...p,C.navy])].forEach(([u,v,color])=>body+=circle(x+u*w,y+(1-v)*h,10,C.white,color,4));
    body+=line(1110,220,1160,220,C.cyan,7)+text(1180,228,lang==="de"?"Druck: hoch":"Pressure: high",20,600)+line(1110,262,1160,262,C.navy,7)+text(1180,270,lang==="de"?"Druck: niedrig":"Pressure: low",20,600);
    return chartShell(lang==="de"?"Wechselwirkung zweier Einflussgrößen":"Interaction between two factors",lang==="de"?"Nicht parallele Linien zeigen: Die Wirkung der Temperatur hängt vom Druckniveau ab.":"Non-parallel lines show that the temperature effect depends on pressure level.",body,lang);
  }
  let body=plot(x,y,w,h,lang==="de"?"Faktor A: Temperatur [°C]":"Factor A: temperature [°C]",lang==="de"?"Faktor B: Druck [bar]":"Factor B: pressure [bar]",[[0,"40"],[.25,"50"],[.5,"60"],[.75,"70"],[1,"80"]],[[0,"1"],[.25,"2"],[.5,"3"],[.75,"4"],[1,"5"]]);
  const cols=24,rows=16;for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const u=c/(cols-1),v=r/(rows-1);const z=Math.exp(-((u-.68)**2/.06+(v-.58)**2/.09));const rr=Math.round(234-(z*155)),gg=Math.round(245-(z*83)),bb=Math.round(250-(z*47));body+=rect(x+c*w/cols,y+(rows-r-1)*h/rows,w/cols+1,h/rows+1,`rgb(${rr},${gg},${bb})`,"none",0);}
  const points=[[.1,.1],[.1,.9],[.9,.1],[.9,.9],[.5,.5],[.3,.65],[.7,.35],[.62,.72],[.78,.62]];points.forEach(([u,v])=>body+=circle(x+u*w,y+(1-v)*h,10,C.white,C.navy,4));body+=circle(x+.68*w,y+(1-.58)*h,42,"none",C.white,5)+text(x+.68*w,y+(1-.58)*h+7,lang==="de"?"Ziel":"Target",18,700,C.white,"middle");
  return chartShell(lang==="de"?"Antwortfläche im untersuchten Versuchsraum":"Response surface in the investigated design space",lang==="de"?"Versuchspunkte decken den Design Space gezielt ab; die Farbe kodiert die Modellantwort.":"Experimental points cover the design space deliberately; colour encodes the model response.",body,lang);
}

function risk(lang, comparison=false) {
  const x=300,y=170,w=1100,h=690;
  if(comparison){
    let body=plot(x,y,w,h,lang==="de"?"Risiko-ID":"Risk ID",lang==="de"?"Risikopriorität":"Risk priority",[[.1,"R1"],[.3,"R2"],[.5,"R3"],[.7,"R4"],[.9,"R5"]],[[0,"0"],[.25,"5"],[.5,"10"],[.75,"15"],[1,"20"]]);const before=[18,15,12,10,8],after=[8,6,5,4,3];before.forEach((v,i)=>{const px=x+65+i*220;body+=rect(px,y+h-v/20*h,65,v/20*h,C.mid,"none",0,2)+rect(px+72,y+h-after[i]/20*h,65,after[i]/20*h,C.cyan,"none",0,2);});body+=line(1120,215,1170,215,C.mid,14)+text(1190,223,lang==="de"?"Ausgangsrisiko":"Initial risk",20,600)+line(1120,255,1170,255,C.cyan,14)+text(1190,263,lang==="de"?"Restrisiko":"Residual risk",20,600);return chartShell(lang==="de"?"Risikobewertung vor und nach Maßnahmen":"Risk assessment before and after actions",lang==="de"?"Eine Maßnahme gilt erst nach Wirksamkeitsnachweis und erneuter Bewertung als abgeschlossen.":"An action is complete only after effectiveness evidence and reassessment.",body,lang);
  }
  let body=plot(x,y,w,h,lang==="de"?"Eintrittswahrscheinlichkeit":"Likelihood",lang==="de"?"Auswirkung":"Impact",[[.1,"1"],[.3,"2"],[.5,"3"],[.7,"4"],[.9,"5"]],[[.1,"1"],[.3,"2"],[.5,"3"],[.7,"4"],[.9,"5"]]);const s=w/5;for(let r=0;r<5;r++)for(let c=0;c<5;c++){const score=(r+1)*(c+1);const fill=score>=15?"#E8DADD":score>=7?"#DDE7F1":"#DDEEE8";body+=rect(x+c*s,y+(4-r)*h/5,s,h/5,fill,C.white,3)+text(x+c*s+s/2,y+(4-r)*h/5+h/10+8,score,22,700,C.navy,"middle");}body+=circle(x+4.5*s,y+.5*h/5,18,C.red,C.white,4)+text(x+4.5*s+32,y+.5*h/5+7,lang==="de"?"vorher":"before",20,700,C.red)+line(x+4.35*s,y+.72*h/5,x+2.65*s,y+3.28*h/5,C.navy,5)+circle(x+2.5*s,y+3.5*h/5,18,C.cyan,C.white,4)+text(x+2.5*s+32,y+3.5*h/5+7,lang==="de"?"nachher":"after",20,700,C.cyan);return chartShell(lang==="de"?"Technische Risikomatrix mit Maßnahmenwirkung":"Technical risk matrix with action effect",lang==="de"?"Positionen sind beispielhaft; Bewertungskriterien müssen projektspezifisch definiert werden.":"Positions are illustrative; assessment criteria must be defined for the project.",body,lang);
}

const specs = [
  ["reliability-engineering-context", reliabilityCurves], ["reliability-dimensions", bathtub],
  ["reliability-planning-context", (lang)=>allocation(lang,false)], ["target-allocation", (lang)=>allocation(lang,true)],
  ["weak-point-analysis-context", (lang)=>pareto(lang,false)], ["fmea-fta", (lang)=>pareto(lang,true)],
  ["reliability-testing-context", (lang)=>loadPlot(lang,false)], ["field-to-test-profile", (lang)=>loadPlot(lang,true)],
  ["assurance-context", (lang)=>evidence(lang,false)], ["assurance-traceability", (lang)=>evidence(lang,true)],
  ["lifetime-prediction-context", (lang)=>lifetime(lang,false)], ["censored-data-prediction", (lang)=>lifetime(lang,true)],
  ["doe-context", (lang)=>doe(lang,false)], ["doe-design-space", (lang)=>doe(lang,true)],
  ["risk-management-context", (lang)=>risk(lang,false)], ["risk-measure-evidence", (lang)=>risk(lang,true)],
];

await fs.mkdir(out, { recursive: true });
for (const [name, render] of specs) {
  for (const lang of ["de", "en"]) {
    await sharp(Buffer.from(render(lang))).png({ compressionLevel: 9, quality: 100 }).toFile(path.join(out, `${name}-${lang}.png`));
  }
}
console.log(`Generated ${specs.length * 2} technical PNG plots in ${out}`);
