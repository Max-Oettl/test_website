import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = join(root, "public", "graphics", "wissen");

const c = {
  marine: "#142452",
  marine80: "#435075",
  marine20: "#D0D3DC",
  marine10: "#E7E9EE",
  cyan: "#2EA1CF",
  cyanDark: "#0C84B4",
  cyan20: "#D5ECF7",
  cyan10: "#EAF5FB",
  graphite: "#25495F",
  coral: "#EC6244",
  yellow: "#E9B400",
  white: "#FFFFFF",
};

const defs = `
  <defs>
    <marker id="arrow-cyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${c.cyan}"/>
    </marker>
    <marker id="arrow-marine" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${c.marine}"/>
    </marker>
    <marker id="arrow-white" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${c.white}"/>
    </marker>
    <pattern id="dot-pattern" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="${c.cyan}" opacity=".14"/>
    </pattern>
    <linearGradient id="dark-panel" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${c.marine}"/>
      <stop offset="1" stop-color="#1B326D"/>
    </linearGradient>
    <linearGradient id="confidence" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="${c.cyan}" stop-opacity=".32"/>
      <stop offset="1" stop-color="${c.cyan}" stop-opacity=".05"/>
    </linearGradient>
  </defs>`;

function documentSvg(viewBox, background, content) {
  const [, , width, height] = viewBox.split(" ").map(Number);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${width}" height="${height}" fill="none">
${defs}
<rect width="${width}" height="${height}" fill="${background}"/>
${content}
</svg>
`;
}

function hero(content) {
  return documentSvg(
    "0 0 1200 900",
    "url(#dark-panel)",
    `<rect width="1200" height="900" fill="url(#dot-pattern)" opacity=".55"/>
     <path d="M-40 790C190 650 340 740 535 620S910 460 1240 590" stroke="${c.cyan}" stroke-width="2" opacity=".16"/>
     <path d="M-40 835C210 690 365 790 565 665S935 505 1240 640" stroke="${c.white}" stroke-width="1.5" opacity=".08"/>
     ${content}`,
  );
}

function diagram(content) {
  return documentSvg(
    "0 0 1600 700",
    "#F8FBFD",
    `<rect x="24" y="24" width="1552" height="652" stroke="${c.marine20}" stroke-width="2"/>
     <path d="M90 615H1510" stroke="${c.marine20}" stroke-width="2"/>
     ${content}`,
  );
}

function label(x, y, text, fill = c.white, size = 26, anchor = "middle", weight = 700) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" dominant-baseline="middle">${text}</text>`;
}

function card(x, y, width, height, title, body = "", dark = true) {
  const fill = dark ? "rgba(255,255,255,.055)" : c.white;
  const stroke = dark ? "rgba(255,255,255,.22)" : c.marine20;
  const titleFill = dark ? c.white : c.marine;
  const bodyFill = dark ? "rgba(255,255,255,.62)" : c.marine80;
  return `<g>
    <rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    ${label(x + 28, y + 34, title, titleFill, 22, "start", 700)}
    ${body ? label(x + 28, y + 70, body, bodyFill, 17, "start", 400) : ""}
  </g>`;
}

function reliabilityContext() {
  return hero(`
    <g transform="translate(390 238)">
      <circle cx="210" cy="210" r="182" fill="rgba(255,255,255,.035)" stroke="${c.cyan}" stroke-width="2"/>
      <circle cx="210" cy="210" r="132" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.24)" stroke-width="2"/>
      <path d="M144 174 210 134l66 40v76l-66 40-66-40z" stroke="${c.white}" stroke-width="5"/>
      <path d="m144 174 66 40 66-40M210 214v76" stroke="${c.cyan}" stroke-width="4"/>
      <circle cx="210" cy="210" r="12" fill="${c.cyan}"/>
      ${label(210, 356, "SYSTEM", c.white, 24)}
    </g>
    ${card(74, 94, 300, 120, "REQ", "function + conditions")}
    ${card(826, 94, 300, 120, "MODEL", "mechanism + R(t)")}
    ${card(74, 686, 300, 120, "FIELD", "loads + observations")}
    ${card(826, 686, 300, 120, "TEST", "profile + evidence")}
    <path d="M374 154C510 126 690 126 826 154" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    <path d="M1066 214C1148 338 1148 548 1066 686" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    <path d="M826 746C690 774 510 774 374 746" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    <path d="M134 686C52 550 52 350 134 214" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    <path d="M374 188 468 270M826 188 732 270M374 712 468 630M826 712 732 630" stroke="rgba(255,255,255,.30)" stroke-width="2" stroke-dasharray="8 10"/>
  `);
}

function reliabilityDimensions() {
  return diagram(`
    <g transform="translate(90 112)">
      <rect x="0" y="0" width="340" height="126" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      <circle cx="58" cy="63" r="30" fill="${c.cyan10}" stroke="${c.cyan}" stroke-width="3"/>
      <path d="m43 64 10 10 22-25" stroke="${c.marine}" stroke-width="5"/>
      ${label(108, 46, "f(x)", c.marine, 26, "start")}
      ${label(108, 78, "required function", c.marine80, 18, "start", 400)}
      <rect x="0" y="160" width="340" height="126" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      <path d="M42 238h36M60 203v70M44 218l32 40M76 218l-32 40" stroke="${c.cyanDark}" stroke-width="3"/>
      ${label(108, 206, "x = {L, T, U}", c.marine, 24, "start")}
      ${label(108, 238, "load + environment + use", c.marine80, 18, "start", 400)}
      <rect x="0" y="320" width="340" height="126" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      <circle cx="60" cy="383" r="30" stroke="${c.cyanDark}" stroke-width="3"/>
      <path d="M60 383v-18M60 383l17 9" stroke="${c.marine}" stroke-width="4"/>
      ${label(108, 367, "t", c.marine, 26, "start")}
      ${label(108, 399, "time or usage horizon", c.marine80, 18, "start", 400)}
    </g>
    <path d="M454 176H650M454 336H650M454 496H650" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    <rect x="650" y="188" width="350" height="300" fill="${c.marine}"/>
    ${label(825, 275, "R(t | x)", c.white, 52)}
    ${label(825, 332, "P { f(x) fulfilled }", "rgba(255,255,255,.70)", 23)}
    <path d="M720 420h210M740 395c36 2 61 15 90 34 28 19 49 27 81 28" stroke="${c.cyan}" stroke-width="5"/>
    <path d="M1000 338H1150" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    <g transform="translate(1150 176)">
      <path d="M0 320V0M0 320H320" stroke="${c.marine}" stroke-width="3"/>
      <path d="M20 36C116 42 205 92 300 286" stroke="${c.cyanDark}" stroke-width="6"/>
      <path d="M20 66C120 72 208 118 300 305L300 270C214 75 121 32 20 22Z" fill="url(#confidence)"/>
      ${label(154, 350, "t", c.marine, 24)}
      ${label(-32, 150, "R(t)", c.marine, 24, "middle", 700)}
    </g>
  `);
}

function planningContext() {
  return hero(`
    <g transform="translate(72 95)">
      ${card(0, 0, 330, 98, "R* SYSTEM", "target + conditions")}
      <path d="M165 98v74M165 172H55M165 172h110" stroke="${c.cyan}" stroke-width="4"/>
      ${card(0, 172, 110, 88, "A", "R_A")}
      ${card(110, 172, 110, 88, "B", "R_B")}
      ${card(220, 172, 110, 88, "C", "R_C")}
      <path d="M55 260v74M165 260v74M275 260v74" stroke="rgba(255,255,255,.25)" stroke-width="3" stroke-dasharray="8 8"/>
      <rect x="0" y="334" width="330" height="214" fill="rgba(255,255,255,.045)" stroke="rgba(255,255,255,.2)" stroke-width="2"/>
      <path d="M34 504V380M34 504H300" stroke="${c.white}" stroke-width="3"/>
      <path d="M48 470 106 435l61 17 54-75 58 24" stroke="${c.cyan}" stroke-width="5"/>
      <circle cx="106" cy="435" r="7" fill="${c.white}"/><circle cx="221" cy="377" r="7" fill="${c.white}"/>
    </g>
    <g transform="translate(500 130)">
      <path d="M0 500H610" stroke="rgba(255,255,255,.35)" stroke-width="4"/>
      <path d="M40 500V130M205 500V230M370 500V174M535 500V94" stroke="rgba(255,255,255,.18)" stroke-width="3"/>
      <circle cx="40" cy="500" r="18" fill="${c.cyan}"/><circle cx="205" cy="500" r="18" fill="${c.cyan}"/><circle cx="370" cy="500" r="18" fill="${c.cyan}"/><circle cx="535" cy="500" r="18" fill="${c.cyan}"/>
      ${label(40, 545, "M0", c.white, 22)}${label(205, 545, "M1", c.white, 22)}${label(370, 545, "M2", c.white, 22)}${label(535, 545, "M3", c.white, 22)}
      ${card(0, 58, 170, 90, "TARGETS", "function + R*")}
      ${card(164, 158, 170, 90, "ARCH", "allocation")}
      ${card(328, 102, 170, 90, "TEST", "evidence plan")}
      ${card(492, 22, 118, 90, "REL", "release")}
    </g>
  `);
}

function targetAllocation() {
  return diagram(`
    ${label(800, 70, "TOP-DOWN", c.cyanDark, 20)}
    <rect x="590" y="98" width="420" height="96" fill="${c.marine}"/>
    ${label(800, 133, "R_SYSTEM* = 0.950", c.white, 30)}
    ${label(800, 169, "defined target", "rgba(255,255,255,.68)", 17, "middle", 400)}
    <path d="M800 194v64M800 258H340M800 258h460M340 258v64M800 258v64M1260 258v64" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    <g>
      <rect x="190" y="322" width="300" height="118" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      <rect x="650" y="322" width="300" height="118" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      <rect x="1110" y="322" width="300" height="118" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      ${label(340, 362, "A", c.marine, 30)}${label(340, 407, "R_A = 0.980", c.cyanDark, 24)}
      ${label(800, 362, "B", c.marine, 30)}${label(800, 407, "R_B = 0.985", c.cyanDark, 24)}
      ${label(1260, 362, "C", c.marine, 30)}${label(1260, 407, "R_C = 0.985", c.cyanDark, 24)}
    </g>
    <path d="M340 440v76M800 440v76M1260 440v76M340 516H1260" stroke="${c.marine80}" stroke-width="3" stroke-dasharray="8 9"/>
    <path d="M800 516v-34" stroke="${c.marine80}" stroke-width="3" marker-end="url(#arrow-marine)"/>
    <rect x="520" y="516" width="560" height="82" fill="${c.cyan10}" stroke="${c.cyan}" stroke-width="2"/>
    ${label(800, 548, "R_SYSTEM = R_A x R_B x R_C", c.marine, 25)}
    ${label(800, 579, "0.980 x 0.985 x 0.985 = 0.9508  &#8805;  0.950", c.cyanDark, 21)}
    ${label(800, 645, "BOTTOM-UP", c.marine80, 20)}
  `);
}

function weakPointContext() {
  return hero(`
    <g transform="translate(90 180)">
      <path d="M80 275H950" stroke="rgba(255,255,255,.28)" stroke-width="8"/>
      <circle cx="230" cy="275" r="105" fill="rgba(255,255,255,.05)" stroke="${c.white}" stroke-width="4"/>
      <circle cx="230" cy="275" r="48" stroke="${c.cyan}" stroke-width="10"/>
      <path d="M520 190v170M435 275h170" stroke="${c.white}" stroke-width="18"/>
      <path d="m460 215 120 120M580 215 460 335" stroke="${c.cyan}" stroke-width="7"/>
      <g transform="translate(790 175)">
        <circle cx="100" cy="100" r="100" fill="rgba(255,255,255,.05)" stroke="${c.white}" stroke-width="4"/>
        <path d="M100 8v184M8 100h184M35 35l130 130M165 35 35 165" stroke="${c.white}" stroke-width="9"/>
        <circle cx="100" cy="100" r="30" fill="${c.marine}" stroke="${c.cyan}" stroke-width="8"/>
      </g>
      <path d="M294 218c22-24 48-26 72-10" stroke="${c.coral}" stroke-width="8"/>
      <circle cx="330" cy="205" r="16" fill="${c.coral}"/>
      <path d="M330 187V70h330" stroke="${c.coral}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
      <rect x="660" y="0" width="360" height="138" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.25)" stroke-width="2"/>
      <path d="M692 72h300M700 72c35-4 45-42 77-42s42 84 76 84 43-66 75-66 34 24 56 24" stroke="${c.cyan}" stroke-width="5"/>
      <path d="M330 345v150" stroke="${c.coral}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
      ${card(180, 495, 300, 100, "SYMPTOM", "location + signal")}
      ${card(520, 495, 300, 100, "MECHANISM", "cause + conditions")}
      <path d="M480 545h40" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    </g>
  `);
}

function fmeaFta() {
  return diagram(`
    ${label(392, 70, "FMEA", c.cyanDark, 24)}
    <g transform="translate(72 150)">
      <rect x="0" y="0" width="260" height="130" fill="${c.cyan10}" stroke="${c.cyan}" stroke-width="2"/>
      <rect x="330" y="0" width="260" height="130" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      <rect x="660" y="0" width="260" height="130" fill="#FDECE8" stroke="${c.coral}" stroke-width="2"/>
      ${label(130, 48, "C", c.marine, 34)}${label(130, 88, "cause", c.marine80, 18)}
      ${label(460, 48, "FM", c.marine, 34)}${label(460, 88, "failure mode", c.marine80, 18)}
      ${label(790, 48, "E", c.marine, 34)}${label(790, 88, "effect", c.marine80, 18)}
      <path d="M260 65h70M590 65h70" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
      <path d="M130 130v158h660V130" stroke="${c.marine80}" stroke-width="3" stroke-dasharray="8 8"/>
      <rect x="254" y="288" width="412" height="92" fill="${c.marine}"/>
      ${label(460, 322, "ACTION + EVIDENCE", c.white, 24)}
      ${label(460, 354, "priority follows mechanism and consequence", "rgba(255,255,255,.67)", 16, "middle", 400)}
    </g>
    <path d="M830 70V610" stroke="${c.marine20}" stroke-width="2"/>
    ${label(1215, 70, "FTA", c.cyanDark, 24)}
    <g transform="translate(900 112)">
      <rect x="190" y="0" width="250" height="76" fill="#FDECE8" stroke="${c.coral}" stroke-width="2"/>
      ${label(315, 38, "TOP EVENT", c.marine, 22)}
      <path d="M315 76v46" stroke="${c.marine}" stroke-width="3"/>
      <path d="M285 122h60l-30 44z" fill="${c.cyan10}" stroke="${c.cyanDark}" stroke-width="3"/>
      ${label(315, 142, "OR", c.marine, 16)}
      <path d="M315 166v40M315 206H100M315 206h215M100 206v48M530 206v48" stroke="${c.marine}" stroke-width="3"/>
      <circle cx="100" cy="292" r="48" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      ${label(100, 292, "B1", c.marine, 24)}
      <path d="M500 254h60l-30 44z" fill="${c.cyan10}" stroke="${c.cyanDark}" stroke-width="3"/>
      ${label(530, 274, "AND", c.marine, 14)}
      <path d="M530 298v40M530 338H410M530 338h120M410 338v52M650 338v52" stroke="${c.marine}" stroke-width="3"/>
      <circle cx="410" cy="438" r="48" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      <circle cx="650" cy="438" r="48" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      ${label(410, 438, "B2", c.marine, 24)}${label(650, 438, "B3", c.marine, 24)}
      ${label(315, 534, "TE = B1  OR  (B2 AND B3)", c.marine80, 20)}
    </g>
  `);
}

function testingContext() {
  return hero(`
    <g transform="translate(74 125)">
      ${card(0, 0, 290, 176, "FIELD", "load + environment")}
      <path d="M26 128H264M34 116c30-70 52 62 82 0s56-6 82-46 42 52 62 4" stroke="${c.cyan}" stroke-width="5"/>
      <path d="M290 88h110" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
      <rect x="400" y="0" width="520" height="445" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.22)" stroke-width="2"/>
      <path d="M462 280h395M520 226h278v108H520z" stroke="${c.white}" stroke-width="5"/>
      <circle cx="590" cy="280" r="42" stroke="${c.cyan}" stroke-width="8"/><circle cx="730" cy="280" r="42" stroke="${c.cyan}" stroke-width="8"/>
      <path d="M590 238v-80M730 238v-80M590 158h140" stroke="${c.cyan}" stroke-width="4"/>
      <circle cx="590" cy="158" r="10" fill="${c.yellow}"/><circle cx="730" cy="158" r="10" fill="${c.yellow}"/>
      ${label(660, 390, "TEST", c.white, 24)}
      <path d="M920 220h110" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
      ${card(760, 510, 290, 176, "EVIDENCE", "criterion + uncertainty")}
      <path d="M790 628h230M800 620c42-2 67-16 96-42 29-26 56-31 112-38" stroke="${c.cyan}" stroke-width="5"/>
      <path d="M660 445v153h100" stroke="rgba(255,255,255,.28)" stroke-width="3" stroke-dasharray="8 9"/>
    </g>
  `);
}

function fieldToTestProfile() {
  return diagram(`
    <g transform="translate(60 106)">
      ${label(245, 0, "FIELD", c.cyanDark, 20)}
      <path d="M0 370V52M0 370H500" stroke="${c.marine}" stroke-width="3"/>
      <path d="M12 286c32-48 45 42 78-72s44 102 77-4 53 46 78-80 39 174 73 22 55 74 82-22 52 62 88-28" stroke="${c.cyanDark}" stroke-width="5"/>
      <path d="M70 40v350M170 40v350M270 40v350M370 40v350M470 40v350" stroke="${c.marine20}" stroke-width="1"/>
      ${label(250, 414, "t", c.marine, 22)}
    </g>
    <path d="M585 300h100" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
    <g transform="translate(700 112)">
      ${label(225, 0, "COLLECTIVE", c.cyanDark, 20)}
      <path d="M0 370V52M0 370H450" stroke="${c.marine}" stroke-width="3"/>
      <rect x="42" y="110" width="54" height="260" fill="${c.cyanDark}" opacity=".9"/>
      <rect x="122" y="164" width="54" height="206" fill="${c.cyanDark}" opacity=".76"/>
      <rect x="202" y="228" width="54" height="142" fill="${c.cyanDark}" opacity=".62"/>
      <rect x="282" y="280" width="54" height="90" fill="${c.cyanDark}" opacity=".48"/>
      <rect x="362" y="326" width="54" height="44" fill="${c.cyanDark}" opacity=".34"/>
      ${label(225, 414, "load classes", c.marine80, 18)}
    </g>
    <path d="M1170 300h94" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
    <g transform="translate(1280 112)">
      ${label(130, 0, "TEST", c.cyanDark, 20)}
      <path d="M0 370V52M0 370H260" stroke="${c.marine}" stroke-width="3"/>
      <path d="M12 310h26v-170h42v170h28v-98h40v98h28v-222h40v222h30" stroke="${c.coral}" stroke-width="5"/>
      ${label(130, 414, "compressed blocks", c.marine80, 18)}
    </g>
    <rect x="588" y="540" width="420" height="70" fill="${c.marine}"/>
    ${label(798, 575, "D_TEST  &#8776;  D_FIELD", c.white, 27)}
    <path d="M1020 575h220" stroke="${c.marine80}" stroke-width="3" stroke-dasharray="8 8"/>
    <circle cx="1260" cy="575" r="28" fill="${c.cyan10}" stroke="${c.cyan}" stroke-width="3"/>
    <path d="m1247 575 10 10 18-22" stroke="${c.marine}" stroke-width="4"/>
  `);
}

function assuranceContext() {
  return hero(`
    <g transform="translate(72 110)">
      ${card(0, 0, 250, 98, "REQ-17", "function + target")}
      ${card(0, 144, 250, 98, "R-04", "failure mechanism")}
      <path d="M250 49h110M250 193h110" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
      <rect x="360" y="0" width="430" height="386" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.22)" stroke-width="2"/>
      ${label(575, 46, "ASSURANCE", c.white, 24)}
      <rect x="404" y="88" width="150" height="98" fill="rgba(255,255,255,.06)" stroke="${c.cyan}" stroke-width="2"/>
      <rect x="596" y="88" width="150" height="98" fill="rgba(255,255,255,.06)" stroke="${c.cyan}" stroke-width="2"/>
      <rect x="404" y="230" width="150" height="98" fill="rgba(255,255,255,.06)" stroke="${c.cyan}" stroke-width="2"/>
      <rect x="596" y="230" width="150" height="98" fill="rgba(255,255,255,.06)" stroke="${c.cyan}" stroke-width="2"/>
      ${label(479, 137, "FMEA", c.white, 20)}${label(671, 137, "SIM", c.white, 20)}
      ${label(479, 279, "TEST", c.white, 20)}${label(671, 279, "DATA", c.white, 20)}
      <path d="M790 193h110" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
      <rect x="900" y="82" width="220" height="222" fill="${c.cyan10}"/>
      <path d="M948 120h124v146H948zM970 154h80M970 186h80M970 218h52" stroke="${c.marine}" stroke-width="4"/>
      <circle cx="1060" cy="248" r="34" fill="${c.cyan}"/>
      <path d="m1044 248 12 12 22-28" stroke="${c.white}" stroke-width="5"/>
      ${label(1010, 350, "E-12", c.white, 22)}
      <path d="M1010 386v156" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
      <rect x="830" y="560" width="360" height="112" fill="rgba(255,255,255,.08)" stroke="${c.cyan}" stroke-width="3"/>
      ${label(1010, 596, "RELEASE", c.white, 26)}
      ${label(1010, 635, "traceable decision", "rgba(255,255,255,.65)", 18, "middle", 400)}
    </g>
  `);
}

function assuranceTraceability() {
  const columns = [100, 390, 680, 970, 1260];
  const names = ["REQ", "RISK", "METHOD", "EVIDENCE", "RELEASE"];
  const ids = [["REQ-17", "REQ-22"], ["R-04", "R-09"], ["FMEA", "TEST-03"], ["E-12", "E-18"], ["REL-02", "REL-02"]];
  let content = "";
  columns.forEach((x, i) => {
    content += `<rect x="${x}" y="98" width="240" height="422" fill="${i === 4 ? c.cyan10 : c.white}" stroke="${c.marine20}" stroke-width="2"/>`;
    content += label(x + 120, 138, names[i], i === 4 ? c.cyanDark : c.marine, 20);
    content += `<rect x="${x + 32}" y="204" width="176" height="72" fill="${i === 1 ? "#FDECE8" : c.marine10}"/>`;
    content += `<rect x="${x + 32}" y="350" width="176" height="72" fill="${i === 1 ? "#FDECE8" : c.marine10}"/>`;
    content += label(x + 120, 240, ids[i][0], c.marine, 20);
    content += label(x + 120, 386, ids[i][1], c.marine, 20);
  });
  return diagram(`
    ${content}
    <path d="M308 240H422M598 240H712M888 240H1002M1178 240H1292" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    <path d="M308 386H422M598 386H712M888 386H1002M1178 386H1292" stroke="${c.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
    <path d="M220 276v74M510 276v74M800 276v74M1090 276v74M1380 276v74" stroke="${c.marine80}" stroke-width="2" stroke-dasharray="7 7"/>
    <circle cx="1380" cy="240" r="18" fill="${c.cyan}"/><path d="m1371 240 7 7 13-16" stroke="${c.white}" stroke-width="3"/>
    <circle cx="1380" cy="386" r="18" fill="${c.cyan}"/><path d="m1371 386 7 7 13-16" stroke="${c.white}" stroke-width="3"/>
    <path d="M500 570h600" stroke="${c.marine80}" stroke-width="2" marker-start="url(#arrow-marine)" marker-end="url(#arrow-marine)"/>
    ${label(800, 620, "bidirectional traceability", c.marine80, 19)}
  `);
}

function predictionContext() {
  return hero(`
    <g transform="translate(64 124)">
      <rect x="0" y="0" width="420" height="590" fill="rgba(255,255,255,.045)" stroke="rgba(255,255,255,.2)" stroke-width="2"/>
      ${label(210, 50, "OBSERVATIONS", c.white, 22)}
      <path d="M60 120v360M60 480h310" stroke="rgba(255,255,255,.38)" stroke-width="3"/>
      <g stroke="${c.cyan}" stroke-width="4">
        <path d="M70 165h80M70 225h135M70 285h185M70 345h228M70 405h270"/>
      </g>
      <g stroke="${c.coral}" stroke-width="5">
        <path d="m142 155 16 20m0-20-16 20M197 215l16 20m0-20-16 20M247 275l16 20m0-20-16 20"/>
      </g>
      <g stroke="${c.yellow}" stroke-width="5">
        <path d="M298 335v20m0-10h20M340 395v20m0-10h20"/>
      </g>
      ${label(210, 535, "failure  x    censored  +", "rgba(255,255,255,.66)", 17)}
      <path d="M420 292h120" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
      <rect x="540" y="105" width="600" height="450" fill="rgba(255,255,255,.055)" stroke="rgba(255,255,255,.22)" stroke-width="2"/>
      <path d="M610 490V160M610 490h460" stroke="${c.white}" stroke-width="3"/>
      <path d="M632 190C770 202 890 278 1046 462L1046 420C900 232 771 164 632 154Z" fill="rgba(46,161,207,.20)"/>
      <path d="M632 174C770 184 893 252 1046 442" stroke="${c.cyan}" stroke-width="6"/>
      <path d="M690 490v-70" stroke="${c.coral}" stroke-width="4" stroke-dasharray="7 7"/>
      ${label(690, 530, "B10", c.coral, 20)}
      ${label(835, 120, "R(t)", c.white, 28)}
      ${label(860, 590, "MODEL + UNCERTAINTY", c.white, 22)}
    </g>
  `);
}

function censoredDataPrediction() {
  return diagram(`
    <g transform="translate(58 105)">
      ${label(230, 0, "DATA", c.cyanDark, 20)}
      <path d="M20 385V60M20 385H450" stroke="${c.marine}" stroke-width="3"/>
      <g stroke="${c.cyanDark}" stroke-width="4">
        <path d="M36 110h96M36 165h152M36 220h210M36 275h258M36 330h334"/>
      </g>
      <g stroke="${c.coral}" stroke-width="5">
        <path d="m124 100 16 20m0-20-16 20M180 155l16 20m0-20-16 20M238 210l16 20m0-20-16 20"/>
      </g>
      <g stroke="${c.yellow}" stroke-width="5"><path d="M294 265v20m0-10h20M370 320v20m0-10h20"/></g>
      ${label(230, 426, "x = failure     + = right-censored", c.marine80, 17)}
    </g>
    <path d="M535 300h92" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
    <g transform="translate(640 170)">
      <rect x="0" y="0" width="300" height="260" fill="${c.marine}"/>
      ${label(150, 76, "L(&#952; | data)", c.white, 34)}
      <path d="M50 142h200M70 210c38-78 70-78 112 0" stroke="${c.cyan}" stroke-width="5"/>
      ${label(150, 232, "model + mechanism", "rgba(255,255,255,.65)", 17)}
    </g>
    <path d="M960 300h92" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
    <g transform="translate(1060 105)">
      ${label(230, 0, "PREDICTION", c.cyanDark, 20)}
      <path d="M20 385V60M20 385H470" stroke="${c.marine}" stroke-width="3"/>
      <path d="M42 80C180 90 315 175 445 355L445 318C320 138 183 58 42 50Z" fill="url(#confidence)"/>
      <path d="M42 64C180 74 315 154 445 337" stroke="${c.cyanDark}" stroke-width="6"/>
      <path d="M116 385v-134" stroke="${c.coral}" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M20 251h96" stroke="${c.coral}" stroke-width="3" stroke-dasharray="8 8"/>
      ${label(116, 423, "B10", c.coral, 20)}
      ${label(-16, 210, "R(t)", c.marine, 20)}
    </g>
  `);
}

function doeContext() {
  return hero(`
    <g transform="translate(70 120)">
      <g transform="translate(0 70)">
        <path d="M80 80h220v220H80zM160 0h220v220H160zM80 80 160 0M300 80 380 0M300 300l80-80M80 300l80-80" stroke="rgba(255,255,255,.58)" stroke-width="4"/>
        <g fill="${c.cyan}">
          <circle cx="80" cy="80" r="9"/><circle cx="300" cy="80" r="9"/><circle cx="80" cy="300" r="9"/><circle cx="300" cy="300" r="9"/>
          <circle cx="160" cy="0" r="9"/><circle cx="380" cy="0" r="9"/><circle cx="160" cy="220" r="9"/><circle cx="380" cy="220" r="9"/>
        </g>
        ${label(320, 340, "A", c.white, 22)}${label(46, 190, "B", c.white, 22)}${label(400, 112, "C", c.white, 22)}
        ${label(225, 390, "2^3 DESIGN", c.white, 22)}
      </g>
      <path d="M420 260h100" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
      <rect x="520" y="100" width="300" height="340" fill="rgba(255,255,255,.055)" stroke="rgba(255,255,255,.23)" stroke-width="2"/>
      <path d="M568 310h205M610 250h122v120H610z" stroke="${c.white}" stroke-width="5"/>
      <circle cx="650" cy="310" r="30" stroke="${c.cyan}" stroke-width="7"/><circle cx="712" cy="310" r="30" stroke="${c.cyan}" stroke-width="7"/>
      <path d="M650 280v-78M712 280v-78" stroke="${c.cyan}" stroke-width="4"/>
      <circle cx="650" cy="202" r="9" fill="${c.yellow}"/><circle cx="712" cy="202" r="9" fill="${c.yellow}"/>
      ${label(670, 400, "EXPERIMENT", c.white, 21)}
      <path d="M820 260h100" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
      <g transform="translate(920 90)">
        <path d="M0 360V0M0 360H220" stroke="${c.white}" stroke-width="3"/>
        <path d="M12 310c50-220 118-220 196-20" stroke="${c.cyan}" stroke-width="6"/>
        <path d="M18 270c45-150 111-190 184-56" stroke="${c.white}" stroke-width="3" opacity=".4"/>
        <circle cx="120" cy="128" r="12" fill="${c.yellow}"/>
        ${label(110, 410, "RESPONSE", c.white, 21)}
      </g>
    </g>
  `);
}

function doeDesignSpace() {
  return diagram(`
    <g transform="translate(70 115)">
      ${label(220, 0, "DESIGN", c.cyanDark, 20)}
      <path d="M60 90h210v210H60zM140 20h210v210H140zM60 90 140 20M270 90 350 20M270 300l80-70M60 300l80-70" stroke="${c.marine80}" stroke-width="4"/>
      <g fill="${c.cyanDark}">
        <circle cx="60" cy="90" r="9"/><circle cx="270" cy="90" r="9"/><circle cx="60" cy="300" r="9"/><circle cx="270" cy="300" r="9"/>
        <circle cx="140" cy="20" r="9"/><circle cx="350" cy="20" r="9"/><circle cx="140" cy="230" r="9"/><circle cx="350" cy="230" r="9"/>
      </g>
      ${label(286, 335, "A", c.marine, 20)}${label(36, 190, "B", c.marine, 20)}${label(370, 112, "C", c.marine, 20)}
    </g>
    <path d="M500 300h90" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
    <g transform="translate(610 115)">
      ${label(180, 0, "EFFECTS", c.cyanDark, 20)}
      <path d="M0 370V45M0 370H360" stroke="${c.marine}" stroke-width="3"/>
      <path d="M55 300 130 170 205 260 280 78" stroke="${c.cyanDark}" stroke-width="6"/>
      <path d="M55 260 130 285 205 115 280 240" stroke="${c.coral}" stroke-width="5" stroke-dasharray="10 8"/>
      <circle cx="55" cy="300" r="8" fill="${c.cyanDark}"/><circle cx="130" cy="170" r="8" fill="${c.cyanDark}"/><circle cx="205" cy="260" r="8" fill="${c.cyanDark}"/><circle cx="280" cy="78" r="8" fill="${c.cyanDark}"/>
      ${label(55, 405, "A-", c.marine80, 16)}${label(130, 405, "A+", c.marine80, 16)}${label(205, 405, "B-", c.marine80, 16)}${label(280, 405, "B+", c.marine80, 16)}
      ${label(180, 448, "main effect + interaction", c.marine80, 17)}
    </g>
    <path d="M995 300h90" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
    <g transform="translate(1100 110)">
      ${label(210, 0, "RESPONSE", c.cyanDark, 20)}
      <rect x="0" y="45" width="420" height="350" fill="${c.cyan10}" stroke="${c.marine20}" stroke-width="2"/>
      <ellipse cx="220" cy="220" rx="164" ry="122" stroke="${c.cyan}" stroke-width="3"/>
      <ellipse cx="220" cy="220" rx="118" ry="82" stroke="${c.cyanDark}" stroke-width="4"/>
      <ellipse cx="220" cy="220" rx="66" ry="42" fill="${c.cyan20}" stroke="${c.marine}" stroke-width="3"/>
      <circle cx="220" cy="220" r="12" fill="${c.coral}"/>
      <path d="M220 208v-35M208 220h-35" stroke="${c.coral}" stroke-width="3"/>
      ${label(210, 438, "valid only inside design space", c.marine80, 17)}
    </g>
  `);
}

function riskContext() {
  let matrix = "";
  const colors = [c.cyan20, c.cyan20, "#F7EEC0", "#F7EEC0", "#FDE0D8"];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 5; col += 1) {
      const level = Math.min(4, Math.floor((row + col) / 2));
      matrix += `<rect x="${col * 45}" y="${(4 - row) * 45}" width="45" height="45" fill="${colors[level]}" stroke="${c.marine}" stroke-width="1"/>`;
    }
  }
  return hero(`
    <g transform="translate(74 126)">
      <g transform="translate(0 40)">
        ${matrix}
        <circle cx="180" cy="45" r="16" fill="${c.coral}" stroke="${c.white}" stroke-width="4"/>
        ${label(112, 270, "R0", c.white, 24)}
      </g>
      <path d="M270 155h100" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
      <rect x="370" y="48" width="260" height="250" fill="rgba(255,255,255,.055)" stroke="rgba(255,255,255,.22)" stroke-width="2"/>
      <path d="m435 185 55-55 45 45 65-80" stroke="${c.cyan}" stroke-width="6"/>
      <path d="M420 228h160" stroke="${c.white}" stroke-width="4"/>
      ${label(500, 270, "MEASURE", c.white, 20)}
      <path d="M630 173h100" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
      <rect x="730" y="48" width="260" height="250" fill="rgba(255,255,255,.055)" stroke="rgba(255,255,255,.22)" stroke-width="2"/>
      <path d="M780 95h160v110H780z" stroke="${c.white}" stroke-width="4"/>
      <path d="M802 178c28-72 62 40 116-52" stroke="${c.cyan}" stroke-width="5"/>
      <circle cx="916" cy="220" r="30" fill="${c.cyan}"/><path d="m901 220 11 11 20-25" stroke="${c.white}" stroke-width="5"/>
      ${label(860, 270, "EVIDENCE", c.white, 20)}
      <path d="M990 173h110" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
      <g transform="translate(790 390)">
        ${matrix}
        <circle cx="45" cy="180" r="16" fill="${c.cyanDark}" stroke="${c.white}" stroke-width="4"/>
        ${label(112, 270, "R1", c.white, 24)}
      </g>
      <path d="M860 298v92" stroke="rgba(255,255,255,.25)" stroke-width="3" stroke-dasharray="8 8"/>
    </g>
  `);
}

function riskMeasureEvidence() {
  function matrixAt(x, y, pointCol, pointRow, pointColor, tag) {
    let cells = "";
    for (let row = 0; row < 5; row += 1) {
      for (let col = 0; col < 5; col += 1) {
        const sum = row + col;
        const fill = sum <= 2 ? c.cyan20 : sum <= 5 ? "#F7EEC0" : "#FDE0D8";
        cells += `<rect x="${x + col * 54}" y="${y + (4 - row) * 54}" width="54" height="54" fill="${fill}" stroke="${c.white}" stroke-width="2"/>`;
      }
    }
    return `${cells}<circle cx="${x + pointCol * 54 + 27}" cy="${y + (4 - pointRow) * 54 + 27}" r="16" fill="${pointColor}" stroke="${c.marine}" stroke-width="4"/>${label(x + 135, y + 310, tag, c.marine, 22)}`;
  }
  return diagram(`
    ${matrixAt(70, 132, 4, 4, c.coral, "R0")}
    ${label(205, 90, "INITIAL RISK", c.cyanDark, 20)}
    <path d="M375 270h90" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
    <g transform="translate(480 132)">
      <rect x="0" y="0" width="250" height="270" fill="${c.white}" stroke="${c.marine20}" stroke-width="2"/>
      <path d="m50 150 48-48 38 38 64-80" stroke="${c.cyanDark}" stroke-width="6"/>
      <path d="M46 202h158" stroke="${c.marine}" stroke-width="4"/>
      ${label(125, 236, "M", c.marine, 26)}
    </g>
    <path d="M730 270h80" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
    <g transform="translate(825 132)">
      <rect x="0" y="0" width="250" height="270" fill="${c.marine}"/>
      <path d="M44 60h162v112H44z" stroke="${c.white}" stroke-width="4"/>
      <path d="M64 144c28-68 62 40 122-50" stroke="${c.cyan}" stroke-width="5"/>
      <circle cx="184" cy="196" r="28" fill="${c.cyan}"/><path d="m171 196 10 10 18-23" stroke="${c.white}" stroke-width="4"/>
      ${label(125, 236, "E", c.white, 26)}
    </g>
    <path d="M1075 270h80" stroke="${c.cyan}" stroke-width="5" marker-end="url(#arrow-cyan)"/>
    ${matrixAt(1170, 132, 1, 1, c.cyanDark, "R1")}
    ${label(1305, 90, "RESIDUAL RISK", c.cyanDark, 20)}
    <path d="M205 500H1305" stroke="${c.marine80}" stroke-width="2" stroke-dasharray="8 8"/>
    ${label(755, 548, "mechanism  ->  measure  ->  verified effectiveness  ->  reassessment", c.marine80, 19)}
  `);
}

const assets = {
  "reliability-engineering-context": reliabilityContext,
  "reliability-dimensions": reliabilityDimensions,
  "reliability-planning-context": planningContext,
  "target-allocation": targetAllocation,
  "weak-point-analysis-context": weakPointContext,
  "fmea-fta": fmeaFta,
  "reliability-testing-context": testingContext,
  "field-to-test-profile": fieldToTestProfile,
  "assurance-context": assuranceContext,
  "assurance-traceability": assuranceTraceability,
  "lifetime-prediction-context": predictionContext,
  "censored-data-prediction": censoredDataPrediction,
  "doe-context": doeContext,
  "doe-design-space": doeDesignSpace,
  "risk-management-context": riskContext,
  "risk-measure-evidence": riskMeasureEvidence,
};

const requested = process.argv.slice(2);
if (requested.length !== 1 || !assets[requested[0]]) {
  console.error(`Usage: node scripts/generate-knowledge-visuals.mjs <asset-id>\nAvailable: ${Object.keys(assets).join(", ")}`);
  process.exit(1);
}

const id = requested[0];
await mkdir(outputDir, { recursive: true });
const output = join(outputDir, `${id}.svg`);
await writeFile(output, assets[id](), "utf8");
console.log(`Created ${output}`);
