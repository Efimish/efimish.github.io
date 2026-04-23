import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import sitemap from "@astrojs/sitemap";
import wikiLink from "./src/lib/astro-wiki-link";
import internalMarkdown from "./src/lib/astro-internal-markdown";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://efimish.dev/",
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
    },
    smartypants: false,
    // prettier-ignore
    rehypePlugins: [
      [rehypeExternalLinks, {
        rel: "noreferrer",
        target: "_blank",
      }],
    ],
  },
  integrations: [sitemap(), wikiLink(), internalMarkdown()],
  vite: {
    plugins: [tailwindcss()],
  },
});
