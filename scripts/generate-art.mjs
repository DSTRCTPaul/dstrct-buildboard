// Prism variants for the backdrops, plus one illustration per project for its "why" slide.
// All abstract: no text, no interface, no people. The prism refracting one beam into the brand
// spectrum is the locked DSTRCT image language, so every image stays inside it.
import { writeFileSync, mkdirSync, existsSync } from "node:fs";

const KEY = process.env.OPENAI_API_KEY;
const OUT = process.env.OUT;
mkdirSync(OUT, { recursive: true });

const BASE =
  "Abstract 3D render. Absolutely no text, no letters, no numbers, no logos, no user interface, " +
  "no screens, no people, no hands. Extremely dark near-black background. Cinematic studio lighting, " +
  "volumetric light, fine film grain, high detail, premium tech brand art direction.";

const PRISM = "A faceted glass prism refracting a single beam of light into a spectrum. ";

const JOBS = [
  // backdrop variants, wide
  { n: "art-prism", size: "1536x1024", p: BASE + PRISM + "The prism floats upper right, the beam enters from the left and fans out downward into deep blue, teal and emerald. Sharp caustics, generous empty space." },
  { n: "art-prism-2", size: "1536x1024", p: BASE + PRISM + "Seen from below, several prisms suspended at different depths, thin beams crossing, deep blue into emerald, wide and airy." },
  { n: "art-prism-3", size: "1536x1024", p: BASE + PRISM + "Extreme close up on one edge of the prism, the spectrum smearing across the frame in soft focus, emerald and blue, almost abstract." },
  { n: "art-prism-4", size: "1536x1024", p: BASE + PRISM + "The prism sits low in frame on a dark reflective floor, one hard beam shooting up and splitting, mist in the air, blue to green." },

  // per project, square, themed but still abstract
  { n: "why-dstrct-os", size: "1024x1024", p: BASE + PRISM + "One beam entering, many separate coloured beams leaving toward different directions, suggesting one instruction becoming many specialists. Teal and deep blue." },
  { n: "why-ariel", size: "1024x1024", p: BASE + "A prism of violet and rose glass, refracting light into ribbons that curl like film strips and brush strokes, without depicting either literally. Violet and pink on near-black." },
  { n: "why-midas", size: "1024x1024", p: BASE + "A dark landscape of glass shards where one rising path of cyan light climbs through them toward the top of the frame, the other paths dim. Cyan and blue." },
  { n: "why-finance-brain", size: "1024x1024", p: BASE + "Two streams of light from opposite sides meeting and locking into a single bright node, the rest of the frame dark and quiet. Emerald and deep teal." },
  { n: "why-brain-spine", size: "1024x1024", p: BASE + "A luminous vertical spine of light with fine filaments branching off to floating nodes at different depths, violet into blue on near-black." },
  { n: "why-sentinel", size: "1024x1024", p: BASE + "A dark space cut by a sweeping radar-like arc of cold blue light, one small warm red point of light far inside it. Tension, stillness, blue and steel." },
  { n: "why-koekkoekk", size: "1024x1024", p: BASE + "Folded dark silk and glass with a soft rose and violet sheen, one thin bright edge catching the light, discreet and elegant, nothing explicit." },
  { n: "why-dstrct-crm", size: "1024x1024", p: BASE + "A beam of light passing through a dark glass filter that lets a bright emerald part through while a second part stays hidden behind frosted glass. Emerald and deep blue." },
  { n: "why-rates", size: "1024x1024", p: BASE + "Golden and amber light refracted through a heavy glass block, weight and value implied, warm gold against near-black, restrained." },
  { n: "why-os-demo", size: "1024x1024", p: BASE + PRISM + "A wall of light panels at different depths catching the spectrum, cyan into violet, like a showroom of light. Airy and open." },
  { n: "why-fionie", size: "1024x1024", p: BASE + "A small warm golden point of light growing along a gentle upward curve into a wide indigo field, patient and human, gold into deep indigo." },
  { n: "why-creatief-met-plezier", size: "1024x1024", p: BASE + "Coral and warm rose light refracted through dark glass into soft playful arcs, warm and inviting against near-black." },
  { n: "why-platinum", size: "1024x1024", p: BASE + "Electric violet light slicing through polished dark metal in hard diagonals, bold and loud, violet on black." },
  { n: "why-maya", size: "1024x1024", p: BASE + "Concentric rings of teal light expanding outward from a single point, like a voice travelling through dark air, soft and rhythmic." },
];

for (const j of JOBS) {
  const file = `${OUT}/${j.n}.png`;
  if (existsSync(file)) { console.log("skip", j.n); continue; }
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${KEY}` },
    body: JSON.stringify({ model: "gpt-image-1", prompt: j.p, size: j.size, quality: "high", n: 1 }),
  });
  const data = await res.json();
  if (!res.ok || !data.data?.[0]?.b64_json) { console.log("FAIL", j.n, JSON.stringify(data).slice(0, 200)); continue; }
  writeFileSync(file, Buffer.from(data.data[0].b64_json, "base64"));
  console.log("ok", j.n);
}
