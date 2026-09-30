/**
 * Generates cute SVG placeholder "photos" for each product until real
 * photography replaces them. Re-run anytime: node scripts/gen-art.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "products");
mkdirSync(outDir, { recursive: true });

const icons = {
  bunny: `M32 14 C28 4 20 4 19 12 M32 14 C36 4 44 4 45 12 M20 26 C10 30 8 44 14 56 L50 56 C56 44 54 30 44 26 C40 20 24 20 20 26 Z M25 36 a1.5 1.5 0 1 0 0.1 0 M39 36 a1.5 1.5 0 1 0 0.1 0 M28 42 q4 4 8 0`,
  cow: `M16 22 C6 24 6 38 14 40 L18 30 M48 22 C58 24 58 38 50 40 L46 30 M24 20 q-4-8 2-10 M40 20 q4-8-2-10 M32 18 C20 18 16 28 16 38 C16 50 24 56 32 56 C40 56 48 50 48 38 C48 28 44 18 32 18 Z M32 30 C26 30 24 38 32 44 C40 38 38 30 32 30 Z M20 30 a2 2 0 1 0 0.1 0 M44 30 a2 2 0 1 0 0.1 0`,
  dragon: `M18 30 C6 26 4 40 14 42 L20 40 M46 30 C58 26 60 40 50 42 L44 40 M32 14 C20 14 14 24 14 34 C14 48 22 56 32 56 C42 56 50 48 50 34 C50 24 44 14 32 14 Z M22 34 a2 2 0 1 0 0.1 0 M42 34 a2 2 0 1 0 0.1 0 M26 44 q6 5 12 0 M28 12 l4-6 4 6`,
  frog: `M18 24 C8 12 24 6 26 18 M46 24 C56 12 40 6 38 18 M16 34 C16 20 48 20 48 34 C48 50 40 54 32 54 C24 54 16 50 16 34 Z M23 34 a2.5 2.5 0 1 0 0.1 0 M41 34 a2.5 2.5 0 1 0 0.1 0 M26 44 q6 4 12 0 M32 8 q6-4 8 2`,
  cat: `M14 22 L12 6 L26 14 M50 22 L52 6 L38 14 M16 20 C24 12 40 12 48 20 C56 28 56 40 50 46 M14 24 C10 30 10 40 16 45 L48 45 C52 42 53 38 52 34 M18 30 a1.5 1.5 0 1 0 0.1 0 M34 30 a1.5 1.5 0 1 0 0.1 0 M23 36 q3 3 6 0 M30 36 q3 3 6 0`,
  axolotl: `M8 20 q-6-8 2-10 q4-1 6 6 M56 20 q6-8-2-10 q-4-1-6 6 M14 30 q-8-4-8-12 M50 30 q8-4 8-12 M16 34 C16 24 48 24 48 34 C48 46 42 52 32 52 C22 52 16 46 16 34 Z M25 36 a2 2 0 1 0 0.1 0 M39 36 a2 2 0 1 0 0.1 0 M26 44 q6 6 12 0`,
  shiba: `M14 24 L10 10 L24 18 M50 24 L54 10 L40 18 M18 22 C18 14 46 14 46 22 C54 26 54 38 48 42 C46 52 38 56 32 56 C26 56 18 52 16 42 C10 38 10 26 18 22 Z M24 32 a2 2 0 1 0 0.1 0 M40 32 a2 2 0 1 0 0.1 0 M28 42 q4 3 8 0 M32 36 q-3 4 0 6 M20 50 q-4 2-8 0`,
  ghost: `M16 54 L16 30 C16 18 24 12 32 12 C40 12 48 18 48 30 L48 54 L42 48 L36 54 L32 50 L28 54 L22 48 Z M25 30 a2 2 0 1 0 0.1 0 M39 30 a2 2 0 1 0 0.1 0 M27 38 q5 5 10 0 M20 16 q-5-6 1-8 M44 16 q5-6-1-8`,
};

const palettes = {
  bunny:  { bg: "#101013", accent: "#1f1f24", body: "#16161a", line: "#dcdce0", extra: "#a3a3ab" },
  cow:    { bg: "#0e0e11", accent: "#1d1d22", body: "#15151a", line: "#d4d4da", extra: "#9a9aa4" },
  dragon: { bg: "#111114", accent: "#202026", body: "#17171b", line: "#e0e0e4", extra: "#a6a6b0" },
  frog:   { bg: "#0f0f12", accent: "#1e1e23", body: "#141419", line: "#d8d8de", extra: "#9e9ea8" },
  cat:    { bg: "#101014", accent: "#1f1f25", body: "#16161b", line: "#dadadf", extra: "#a2a2ac" },
  axolotl:{ bg: "#0e0e10", accent: "#1c1c21", body: "#141418", line: "#d2d2d8", extra: "#96969e" },
  shiba:  { bg: "#111115", accent: "#212127", body: "#18181d", line: "#e2e2e6", extra: "#a8a8b2" },
  ghost:  { bg: "#0f0f11", accent: "#1d1d22", body: "#15151a", line: "#d6d6dc", extra: "#9c9ca4" },
};

function svg(slug, icon) {
  const p = palettes[slug];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="800" height="800" role="img">
  <rect width="64" height="64" rx="10" fill="${p.bg}"/>
  <circle cx="12" cy="12" r="2.5" fill="${p.accent}"/>
  <circle cx="53" cy="16" r="1.8" fill="${p.accent}"/>
  <circle cx="50" cy="52" r="3" fill="${p.accent}"/>
  <circle cx="10" cy="50" r="1.5" fill="${p.accent}"/>
  <path d="M14 40 q3-2 6 0 M44 10 q3-2 6 0" stroke="${p.accent}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <g transform="translate(6 6) scale(0.82)">
    <path d="${icons[icon]}" fill="${p.body}" stroke="${p.line}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
`;
}

// product file name → which icon
const art = {
  "bunny-keychain": "bunny",
  "strawberry-cow": "cow",
  "star-dragon": "dragon",
  "matcha-frog": "frog",
  "cloud-cat": "cat",
  axolotl: "axolotl",
  shiba: "shiba",
  ghost: "ghost",
};

for (const [file, icon] of Object.entries(art)) {
  const path = join(outDir, `${file}.svg`);
  writeFileSync(path, svg(icon, icon));
  console.log("wrote", path);
}
console.log("Done! Replace these with real product photos whenever ready.");
