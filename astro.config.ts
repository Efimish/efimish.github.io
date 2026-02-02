import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkWikiLink from "@flowershow/remark-wiki-link";
import { glob } from "tinyglobby";
import { slug } from "github-slugger";

const posts = await glob("**/*.md", {
  cwd: "src/content/posts",
});
const files = await glob("**/*", {
  cwd: "public",
});
const permalinks = Object.fromEntries([
  ...posts.map((post) => [post, `/posts/${post.slice(0, -3).split("/").map(i => slug(i)).join("/")}/`]),
  ...files.map((file) => [file, `/${file}`]),
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
        files: [...posts, ...files],
        permalinks,
      }],
    ],
  },
  integrations: [sitemap()],
});
