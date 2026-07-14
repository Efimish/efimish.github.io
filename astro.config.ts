import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";
import sitemap from "@astrojs/sitemap";
import wikiLink from "./src/lib/astro-wiki-link";
import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";

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
    processor: unified({
      smartypants: false,
      // prettier-ignore
      rehypePlugins: [
        [rehypeExternalLinks, {
          rel: "noreferrer",
          target: "_blank",
        }],
      ],
    }),
  },
  integrations: [sitemap(), wikiLink()],
  vite: {
    plugins: [tailwindcss(), icons({ compiler: "astro" })],
  },
});
