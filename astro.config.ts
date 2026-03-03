import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { remarkWikiLink } from "./src/lib/remark-wiki-link";

// https://astro.build/config
export default defineConfig({
  site: "https://efimish.github.io",
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
    remarkPlugins: [remarkWikiLink],
  },
  integrations: [sitemap()],
});
