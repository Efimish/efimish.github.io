import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import wikiLink from "./src/lib/astro-wiki-link";

// https://astro.build/config
export default defineConfig({
  site: "https://efimish.dev",
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      wrap: true,
    },
    smartypants: false,
  },
  integrations: [sitemap(), wikiLink()],
});
