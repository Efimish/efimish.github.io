import fs from "fs";
import sharp from "sharp";

const name = "unused/moon.png";

// favicon.ico
sharp(name)
  .resize({
    width: 32,
    height: 32,
    kernel: sharp.kernel.nearest,
  })
  .toFile("public/favicon.ico");

// apple-touch-icon.png
// 144 / 180 = 0.8
sharp(name)
  .flatten({ background: "#FFF" })
  .resize({
    width: 144,
    height: 144,
    kernel: sharp.kernel.nearest,
  })
  .extend({
    top: 18,
    bottom: 18,
    left: 18,
    right: 18,
    background: "#FFF"
  })
  .toFile("public/apple-touch-icon.png");

// favicon-192.png
// 144 / 192 = 0.75
sharp(name)
  .flatten({ background: "#FFF" })
  .resize({
    width: 144,
    height: 144,
    kernel: sharp.kernel.nearest,
  })
  .extend({
    top: 24,
    bottom: 24,
    left: 24,
    right: 24,
    background: "#FFF"
  })
  .toFile("public/favicon-192.png");

// favicon-512.png
// 384 / 512 = 0,75
sharp(name)
  .flatten({ background: "#FFF" })
  .resize({
    width: 384,
    height: 384,
    kernel: sharp.kernel.nearest,
  })
  .extend({
    top: 64,
    bottom: 64,
    left: 64,
    right: 64,
    background: "#FFF"
  })
  .toFile("public/favicon-512.png");

// favicon.svg
const { data, info } = await sharp(name)
  .raw()
  .ensureAlpha()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;

const svg = [
  `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 ${width} ${height}" shape-rendering="crispEdges">`,
  `  <title>Crescent moon with a star</title>`
];

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3] / 255;

    if (a === 0) continue; // skip transparent pixels

    svg.push(`  <rect x="${x}" y="${y}" width="1" height="1" fill="rgba(${r},${g},${b},${a})"/>`);
  }
}

svg.push(`</svg>`);

fs.writeFileSync("public/favicon.svg", svg.join("\n"));
