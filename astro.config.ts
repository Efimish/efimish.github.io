import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkWikiLink from "@flowershow/remark-wiki-link";
import { glob } from "tinyglobby";
import { slug } from "github-slugger";

const permalinks = Object.fromEntries([
  ...(await glob("**/*.md", { cwd: "src/content/posts" }))
    .map((post) => [post, `/posts/${post.replace(/\.md$/, "").split("/").map(i => slug(i)).join("/")}/`] as const),
  ...(await glob("**/*", { cwd: "public" }))
    .map((file) => [file, `/${file}`] as const),
]);

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
    remarkPlugins: [
      [remarkWikiLink, {
        files: Object.keys(permalinks),
        permalinks,
      }],
    ],
  },
  integrations: [sitemap()],
});
