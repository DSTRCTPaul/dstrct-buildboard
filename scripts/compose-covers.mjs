// Builds one composed cover image per project: the real screenshot inside a browser frame,
// the phone view beside it where we have one, on a ground tinted with that project's accent.
// Rendered as HTML and photographed, so it stays hand made rather than generated.
import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const SHOTS = process.env.SHOTS;
const OUT = process.env.OUT;

const b64 = (f) => "data:image/jpeg;base64," + readFileSync(`${SHOTS}/${f}`).toString("base64");

const ART = {
  "dstrct-os": "art-prism.jpg", ariel: "art-prism.jpg", midas: "art-prism.jpg",
  "finance-brain": "art-prism.jpg", "brain-spine": "art-prism.jpg",
  sentinel: "art-mesh.jpg", koekkoekk: "art-liquid.jpg", "dstrct-crm": "art-mesh.jpg",
  rates: "art-mesh.jpg", "os-demo": "art-prism.jpg", fionie: "art-beam.jpg",
  "creatief-met-plezier": "art-liquid.jpg", platinum: "art-liquid.jpg", maya: "art-beam.jpg",
};

const JOBS = [
  { slug: "dstrct-os", a: "#34E0A1", b: "#176999", desktop: "engine--deck-cover.jpg", second: "engine--deck-chart.jpg" },
  { slug: "ariel", a: "#C084FC", b: "#EC4899", desktop: "ariel--deck-cover.jpg", second: "ariel--deck-dimensions.jpg" },
  { slug: "midas", a: "#22D3EE", b: "#2563EB", desktop: "midas--deck-cover.jpg", second: "midas--deck-competitors.jpg" },
  { slug: "finance-brain", a: "#34E0A1", b: "#0E7490", desktop: "panel--finance-brain.jpg", fit: true },
  { slug: "brain-spine", a: "#8B5CF6", b: "#2563EB", desktop: "panel--brain-spine.jpg", fit: true },
  { slug: "sentinel", a: "#60A5FA", b: "#1E40AF", desktop: "panel--sentinel.jpg", fit: true },
  { slug: "koekkoekk", a: "#F472B6", b: "#9333EA", desktop: "koekkoekk--home.jpg", phone: "koekkoekk--mobile.jpg" },
  { slug: "dstrct-crm", a: "#34E0A1", b: "#176999", desktop: "dstrct-crm--prices.jpg", phone: "dstrct-crm--mobile.jpg" },
  { slug: "rates", a: "#FDE047", b: "#CA8A04", desktop: "panel--rates.jpg", fit: true },
  { slug: "os-demo", a: "#22D3EE", b: "#8B5CF6", desktop: "os-demo--dashboard.jpg", phone: "os-demo--mobile.jpg" },
  { slug: "fionie", a: "#F5C242", b: "#4338CA", desktop: "panel--fionie.jpg", fit: true },
  { slug: "creatief-met-plezier", a: "#FF8A65", b: "#E85A4F", desktop: "creatief-met-plezier--home.jpg", phone: "creatief-met-plezier--mobile.jpg" },
  { slug: "platinum", a: "#A78BFA", b: "#7C5CFF", desktop: "platinum--home.jpg", phone: "platinum--mobile.jpg" },
  { slug: "maya", a: "#2DD4BF", b: "#0EA5E9", desktop: "panel--maya.jpg", fit: true },
];

function html(j) {
  const desktop = b64(j.desktop);
  const phone = j.phone ? b64(j.phone) : null;
  const second = j.second ? b64(j.second) : null;
  const art = b64(ART[j.slug] ?? "art-prism.jpg");
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:1200px;height:750px;overflow:hidden;background:#070a12;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif}
.stage{position:relative;width:1200px;height:750px;overflow:hidden}
.art{position:absolute;inset:0;background-image:url(${art});background-size:cover;background-position:center;opacity:.95}
.tint{position:absolute;inset:0;mix-blend-mode:screen;opacity:.55;
 background:radial-gradient(70% 70% at 12% 8%, ${j.b}, transparent 62%),radial-gradient(60% 60% at 88% 92%, ${j.a}, transparent 60%)}
.glow{position:absolute;border-radius:50%;filter:blur(120px)}
.g1{width:900px;height:900px;background:${j.b};opacity:.22;top:-380px;left:-220px}
.g2{width:820px;height:820px;background:${j.a};opacity:.16;bottom:-420px;right:-200px}
.grid{position:absolute;inset:0;opacity:.16;
 background-image:linear-gradient(rgba(255,255,255,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.09) 1px,transparent 1px);
 background-size:56px 56px;
 -webkit-mask-image:radial-gradient(ellipse at 50% 45%,#000 25%,transparent 75%)}
.scene{position:absolute;inset:0;perspective:1900px}

/* browser frame */
.win{position:absolute;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.16);
 background:rgba(12,16,28,.9);box-shadow:0 60px 120px -40px rgba(0,0,0,.85), 0 0 0 1px rgba(255,255,255,.04)}
.win .bar{height:30px;display:flex;align-items:center;gap:7px;padding:0 13px;border-bottom:1px solid rgba(255,255,255,.12);
 background:rgba(255,255,255,.05)}
.win .bar i{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.2)}
.win .bar i:first-child{background:${j.a};opacity:.85}
.win img{display:block;width:100%;height:auto}

.main{width:880px;left:70px;top:96px;transform:rotateY(9deg) rotateX(3deg) rotateZ(-1.4deg)}
.main img{height:452px;object-fit:cover;object-position:top center}
.main.fit{top:50%;transform:translateY(-50%) rotateY(9deg) rotateX(3deg) rotateZ(-1.4deg)}
.main.fit img{height:auto;object-fit:contain;background:#0b0f1a;padding:22px}

.back{width:660px;left:520px;top:44px;transform:rotateY(9deg) rotateX(3deg) rotateZ(-1.4deg);opacity:.5}
.back img{height:330px;object-fit:cover;object-position:top center}

/* phone */
.phone{position:absolute;right:78px;bottom:38px;width:236px;border-radius:32px;padding:9px;
 background:linear-gradient(160deg,rgba(255,255,255,.22),rgba(255,255,255,.05));
 box-shadow:0 50px 90px -30px rgba(0,0,0,.9);transform:rotateY(-10deg) rotateZ(2.5deg)}
.phone .screen{border-radius:24px;overflow:hidden;background:#000;position:relative}
.phone img{display:block;width:100%;height:436px;object-fit:cover;object-position:top center}
.phone .notch{position:absolute;top:7px;left:50%;transform:translateX(-50%);width:74px;height:15px;border-radius:9px;background:#000;z-index:2}

.vig{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,transparent 45%,rgba(4,6,12,.72) 100%)}
</style></head><body><div class="stage">
<div class="art"></div><div class="tint"></div><div class="glow g1"></div><div class="glow g2"></div><div class="grid"></div>
<div class="scene">
  ${second ? `<div class="win back"><div class="bar"><i></i><i></i><i></i></div><img src="${second}"></div>` : ""}
  <div class="win main${j.fit ? " fit" : ""}"><div class="bar"><i></i><i></i><i></i></div><img src="${desktop}"></div>
  ${phone ? `<div class="phone"><div class="screen"><div class="notch"></div><img src="${phone}"></div></div>` : ""}
</div>
<div class="vig"></div>
</div></body></html>`;
}

const browser = await chromium.launch({ executablePath: process.env.EXE });
const ctx = await browser.newContext({ viewport: { width: 1200, height: 750 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
for (const j of JOBS) {
  await page.setContent(html(j), { waitUntil: "load" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/cover--${j.slug}.jpg`, type: "jpeg", quality: 80 });
  console.log("ok", j.slug);
}
await browser.close();
