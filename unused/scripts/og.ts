import sharp from "sharp";
import { createNoise2D } from "simplex-noise";

const WIDTH = 1200;
const HEIGHT = 630;

const noise2D = createNoise2D(); // seeded

function fbm(x: number, y: number) {
  let v = 0;
  let amp = 1;
  let freq = 1;

  for (let i = 0; i < 5; i++) {
    v += amp * noise2D(x * freq, y * freq);
    amp *= 0.5;
    freq *= 2;
  }

  return v;
}

const pixels = new Uint8ClampedArray(WIDTH * HEIGHT * 3);

const scale = 0.004;

for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {

    const i = (y * WIDTH + x) * 3;

    // const n = noise2D(x * scale, y * scale);   // -1..1
    const n = fbm(x * scale, y * scale);
    // const v = Math.round((n * 0.5 + 0.5) * 255);s
    const v = Math.pow((n * 0.5 + 0.5), 1.4) * 255;

    pixels[i]     = 0;
    pixels[i + 1] = v;
    pixels[i + 2] = 0;
  }
}

await sharp(pixels, {
  raw: {
    width: WIDTH,
    height: HEIGHT,
    channels: 3
  }
})
  .blur(100)
  .png()
  .toFile("unused/png/og.png");
