import type { Root, Text, Link, Image } from "mdast";
import path from "path";
import { visit } from "unist-util-visit";
import { globSync } from "tinyglobby";
import { slug as githubSlug } from "github-slugger";

const WIKI_LINK_REGEX = /!?\[\[([^\]]+)\]\]/;

const buildPermalinks = () => {
  const permalinks = new Map<string, string>();

  const posts = globSync("**/*.md", { cwd: "src/content/posts" })
    .map((post) => post.replace(new RegExp(path.extname(post) + "$"), ""))
    .sort((a, b) => a.split(path.sep).length - b.split(path.sep).length || a.localeCompare(b))
    .map((post) => [
      post,
      `/posts/${post.split(path.sep).map((s) => githubSlug(s)).join("/").replace(/\/index$/, "")}/`,
    ] as const);

  const files = globSync("**/*", { cwd: "public", onlyFiles: true })
    .map((file) => [file, `/${file}`] as const);

  const assets = globSync("**/*", { cwd: "src/assets", onlyFiles: true })
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

export const remarkWikiLink = () => {
  const permalinks = buildPermalinks();

  return (tree: Root) => visit(tree, "text", (node, index, parent) => {
    if (!parent || typeof index !== "number") return;
    const { value } = node;

    if (!WIKI_LINK_REGEX.test(value)) return;

    const regex = new RegExp(WIKI_LINK_REGEX, "g");
    let lastIndex = 0;
    const nodes: (Text | Link | Image)[] = [];

    value.matchAll(regex).forEach((match) => {
      const [fullMatch, inner] = match;
      const start = match.index;
      const end = start + fullMatch.length;
      const isEmbed = fullMatch.startsWith("!");

      // Push text before match
      // "Hello [[note]] world"
      //  ^^^^^^
      if (start > lastIndex) nodes.push({
        type: "text",
        value: value.slice(lastIndex, start),
      });
      lastIndex = end;

      // Parse [[link#heading|alias]]
      const [linkWithHeadingPath, aliasPart] = inner.split("|").map((s) => s.trim());
      const [linkPart, headingPart] = linkWithHeadingPath.split("#").map((s) => s.trim());

      const permalink = permalinks.get(linkPart.toLowerCase());
      const displayText = aliasPart ?? headingPart ?? linkPart;

      if (!permalink) {
        nodes.push({
          type: "text",
          value: displayText,
        });
        return;
      }

      if (isEmbed) {
        nodes.push({
          type: "image",
          url: permalink,
          alt: aliasPart ?? "",
        });
        return;
      }

      const headingSlug = headingPart ? "#" + githubSlug(headingPart) : "";

      nodes.push({
        type: "link",
        url: permalink + headingSlug,
        children: [
          {
            type: "text",
            value: displayText,
          },
        ],
      });
    });

    // Push text after match
    // "Hello [[note]] world"
    //                ^^^^^^
    if (lastIndex < value.length) nodes.push({
      type: "text",
      value: value.slice(lastIndex),
    });

    parent.children.splice(index, 1, ...nodes);
  });
}
