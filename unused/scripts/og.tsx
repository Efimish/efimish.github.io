import { readFileSync } from "fs";
import inter400 from "@fontsource/inter/files/inter-latin-400-normal.woff";
import inter700 from "@fontsource/inter/files/inter-latin-700-normal.woff";
import satori from "satori";
import sharp from "sharp";

const svg = await satori(
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      fontFamily: "Inter, sans-serif",
      fontSize: "128px",
      background: "linear-gradient(#e66465, #9198e5)",
    }}
  >
    <p>400</p>
    <strong>700</strong>
  </div>,
  {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: readFileSync(inter400),
        weight: 400,
        style: "normal",
      },
      {
        name: "Inter",
        data: readFileSync(inter700),
        weight: 700,
        style: "normal",
      },
    ],
  },
);

await sharp(new TextEncoder().encode(svg)).png().toFile("unused/png/og.png");
