import type { Config } from "prettier";
import type { PluginOptions } from "prettier-plugin-tailwindcss";

export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "src/styles/tailwind.css",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
} satisfies Config & PluginOptions;
