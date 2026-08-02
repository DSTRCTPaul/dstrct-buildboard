// One hero image for the board: several real product screens fanned out in browser frames,
// on the DSTRCT brand ground. Built as HTML and photographed, like the per-project covers.
import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const SHOTS = process.env.SHOTS;
const OUT = process.env.OUT;
const b64 = (f) => "data:image/jpeg;base64," + readFileSync(`${SHOTS}/${f}`).toString("base64");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:1400px;height:880px;overflow:hidden;background:#070a12}
.stage{position:relative;width:1400px;height:880px;overflow:hidden}
.art{position:absolute;inset:0;background-image:url(${b64("art-prism-2.jpg")});background-size:cover;background-position:center;opacity:1}
.tint{position:absolute;inset:0;mix-blend-mode:screen;opacity:.5;
 background:radial-gradient(70% 70% at 10% 6%, #176999, transparent 62%),radial-gradient(65% 65% at 92% 94%, #34e0a1, transparent 60%)}
.glow{position:absolute;border-radius:50%;filter:blur(130px)}
.g1{width:1000px;height:1000px;background:#176999;opacity:.2;top:-360px;left:-180px}
.g2{width:900px;height:900px;background:#34e0a1;opacity:.14;bottom:-420px;right:-160px}
.g3{width:620px;height:620px;background:#8b5cf6;opacity:.12;top:120px;right:-120px}
.grid{position:absolute;inset:0;opacity:.14;
 background-image:linear-gradient(rgba(255,255,255,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.09) 1px,transparent 1px);
 background-size:60px 60px;-webkit-mask-image:radial-gradient(ellipse at 45% 45%,#000 25%,transparent 78%)}
.scene{position:absolute;inset:0;perspective:2200px}
.win{position:absolute;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.16);
 background:rgba(12,16,28,.92);box-shadow:0 70px 130px -45px rgba(0,0,0,.9),0 0 0 1px rgba(255,255,255,.04)}
.win .bar{height:28px;display:flex;align-items:center;gap:7px;padding:0 13px;border-bottom:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05)}
.win .bar i{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.2)}
.win .bar i:first-child{background:#34e0a1;opacity:.85}
.win img{display:block;width:100%;object-fit:cover;object-position:top center}

.a{width:760px;left:-50px;top:210px;transform:rotateY(13deg) rotateX(4deg) rotateZ(-2deg);opacity:.42;z-index:1}
.a img{height:400px}
.b{width:880px;left:210px;top:96px;transform:rotateY(11deg) rotateX(3deg) rotateZ(-1.6deg);z-index:3}
.b img{height:460px}
.c{width:720px;left:600px;top:470px;transform:rotateY(11deg) rotateX(3deg) rotateZ(-1.6deg);opacity:.62;z-index:2}
.c img{height:380px}
.phone{position:absolute;right:62px;top:172px;width:228px;border-radius:32px;padding:9px;z-index:4;
 background:linear-gradient(160deg,rgba(255,255,255,.24),rgba(255,255,255,.05));
 box-shadow:0 60px 100px -35px rgba(0,0,0,.92);transform:rotateY(-12deg) rotateZ(3deg)}
.phone .screen{border-radius:24px;overflow:hidden;background:#000;position:relative}
.phone img{display:block;width:100%;height:428px;object-fit:cover;object-position:top center}
.phone .notch{position:absolute;top:7px;left:50%;transform:translateX(-50%);width:72px;height:15px;border-radius:9px;background:#000;z-index:2}
.vig{position:absolute;inset:0;background:radial-gradient(ellipse at 45% 40%,transparent 40%,rgba(4,6,12,.7) 100%)}
</style></head><body><div class="stage">
<div class="art"></div><div class="tint"></div><div class="glow g1"></div><div class="glow g2"></div><div class="glow g3"></div><div class="grid"></div>
<div class="scene">
  <div class="win a"><div class="bar"><i></i><i></i><i></i></div><img src="${b64("creatief-met-plezier--shop.jpg")}"></div>
  <div class="win c"><div class="bar"><i></i><i></i><i></i></div><img src="${b64("midas--deck-cover.jpg")}"></div>
  <div class="win b"><div class="bar"><i></i><i></i><i></i></div><img src="${b64("os-demo--dashboard.jpg")}"></div>
  <div class="phone"><div class="screen"><div class="notch"></div><img src="${b64("platinum--mobile.jpg")}"></div></div>
</div>
<div class="vig"></div>
</div></body></html>`;

const browser = await chromium.launch({ executablePath: process.env.EXE });
const page = await (await browser.newContext({ viewport: { width: 1400, height: 880 }, deviceScaleFactor: 2 })).newPage();
await page.setContent(html, { waitUntil: "load" });
await page.waitForTimeout(500);
await page.screenshot({ path: `${OUT}/hero.jpg`, type: "jpeg", quality: 82 });
console.log("hero ok");
await browser.close();
