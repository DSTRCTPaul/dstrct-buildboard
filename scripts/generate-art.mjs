// Generates abstract backdrops with gpt-image-1. These are atmosphere only: the real product
// screens get composited on top. Never generate anything that pretends to be an interface.
import { writeFileSync, mkdirSync } from "node:fs";

const KEY = process.env.OPENAI_API_KEY;
const OUT = process.env.OUT;
mkdirSync(OUT, { recursive: true });

const BASE =
  "Abstract 3D render, no text, no letters, no logos, no user interface, no screens, no people. " +
  "Extremely dark near-black background. Cinematic studio lighting, volumetric light, subtle film grain, " +
  "high detail, premium tech brand art direction, wide landscape composition, plenty of negative space.";

const JOBS = [
  {
    name: "art-prism",
    prompt:
      BASE +
      " A single faceted glass prism floating in dark space, refracting one beam of light into a spectrum of " +
      "deep blue, teal and emerald green. Sharp caustics on the floor, thin light rays, elegant and restrained.",
  },
  {
    name: "art-mesh",
    prompt:
      BASE +
      " A vast flowing mesh of thin luminous lines and small nodes, like a network seen from an angle, " +
      "glowing deep blue fading into emerald green, receding into darkness with soft depth of field.",
  },
  {
    name: "art-liquid",
    prompt:
      BASE +
      " Smooth liquid metal and dark glass forms folding over each other, iridescent teal and emerald reflections " +
      "against near-black, soft gradients, minimal and sculptural.",
  },
  {
    name: "art-beam",
    prompt:
      BASE +
      " A dark architectural void with a single wide beam of emerald and blue light cutting diagonally through fog, " +
      "faint geometric grid on the floor, immense scale, quiet and confident.",
  },
];

for (const j of JOBS) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${KEY}` },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt: j.prompt,
      size: "1536x1024",
      quality: "high",
      n: 1,
    }),
  });
  const data = await res.json();
  if (!res.ok || !data.data?.[0]?.b64_json) {
    console.log("FAIL", j.name, JSON.stringify(data).slice(0, 300));
    continue;
  }
  writeFileSync(`${OUT}/${j.name}.png`, Buffer.from(data.data[0].b64_json, "base64"));
  console.log("ok", j.name);
}
