import type { AstroIntegration } from "astro";
import path from "path";
import { glob } from "tinyglobby";
import { slug } from "github-slugger";
import { remarkWikiLink } from "./remark-wiki-link";

const getPermalinks = async () => {
  const permalinks = new Map<string, string>();

  // prettier-ignore
  const posts = (await glob("**/*.md", { cwd: "src/content/posts" }))
    .map((post) => post.replace(new RegExp(path.extname(post) + "$"), ""))
    .sort((a, b) => a.split(path.sep).length - b.split(path.sep).length || a.localeCompare(b))
    .map((post) => [
      post,
      `/posts/${post.split(path.sep).map((s) => slug(s)).join("/").replace(/\/index$/, "")}/`,
    ] as const);

  // prettier-ignore
  const files = (await glob("**/*", { cwd: "public", onlyFiles: true }))
    .map((file) => [file, `/${file}`] as const);

  // prettier-ignore
  const assets = (await glob("**/*", { cwd: "src/assets", onlyFiles: true }))
    .map((asset) => [asset, `src/assets/${asset}`]);

  [...posts, ...files, ...assets].forEach(([link, permalink]) => {
    const pathSegments = link.split(path.sep);
    const pathTry: string[] = [];
    while (pathSegments.length > 0) {
      pathTry.unshift(pathSegments.pop()!);
      const pathTryString = pathTry.join("/").toLowerCase();
      if (permalinks.has(pathTryString)) continue;
      permalinks.set(pathTryString, permalink);
      return;
    }
  });

  return permalinks;
};

export default function wikiLink(): AstroIntegration {
  return {
    name: "wiki-link",
    hooks: {
      "astro:config:setup": async ({ updateConfig, logger }) => {
        const permalinks = await getPermalinks();
        logger.info(`Loaded ${permalinks.size} permalinks`);
        updateConfig({
          markdown: {
            remarkPlugins: [[remarkWikiLink, { permalinks }]],
          },
        });
      },
    },
  };
}
