import type { Root, Text, Link } from "mdast";
import path from "path";
import { visit } from "unist-util-visit";
import { globSync } from "tinyglobby";
import { slug as githubSlug } from "github-slugger";

const WIKI_LINK_REGEX = /\[\[([^\]]+)\]\]/g;

export const remarkWikiLink = () => {
  const permalinks = new Map<string, string>();

  const posts = globSync("**/*.md", { cwd: "src/content/posts" })
    .map((post) => post.replace(new RegExp(path.extname(post) + "$"), "").split(path.sep))
    .sort((a, b) => a.length - b.length || a.join("").localeCompare(b.join("")))
    .map((post) => [
      post,
      `/posts/${post.map((segment) => githubSlug(segment)).join("/").replace(/\/index$/, "")}/`,
    ] as const);

  posts.forEach(([path, slug]) => {
    const pathSegments = [...path];
    const pathTry: string[] = [];
    while (pathSegments.length > 0) {
      pathTry.unshift(pathSegments.pop()!);
      const pathTryString = pathTry.join("/").toLowerCase();
      if (permalinks.get(pathTryString)) continue;
      permalinks.set(pathTryString, slug);
      return;
    }
  });

  //   ...(await glob("**/*", { cwd: "public" }))
  //     .map((file) => [file, `/${file}`] as const),

  console.log("Final permalinks:", permalinks);

  return (tree: Root) => visit(tree, "text", (node, index, parent) => {
    if (!parent || typeof index !== "number") return;
    const { value } = node;

    const regex = WIKI_LINK_REGEX;
    if (!regex.test(value)) return;

    const nodes: (Text | Link)[] = [];
    let lastIndex = 0;
    regex.lastIndex = 0;

    for (const match of value.matchAll(regex)) {
      const [fullMatch, inner] = match;
      const start = match.index;
      const end = start + fullMatch.length;

      // Push text before match
      // "Hello [[note]] world"
      //  ^^^^^^
      if (start > lastIndex) nodes.push({
        type: "text",
        value: value.slice(lastIndex, start),
      });

      // Parse [[link#heading|alias]]
      const [linkWithHeadingPath, aliasPart] = inner.split("|").map((s) => s.trim());
      const [linkPart, headingPart] = linkWithHeadingPath.split("#").map((s) => s.trim());

      const baseUrl = permalinks.get(linkPart.toLowerCase());
      const headingSlug = headingPart ? "#" + githubSlug(headingPart) : "";
      const displayText = aliasPart ?? headingPart ?? linkPart;

      console.log("Intermediate results:", {
        linkPart, headingPart, aliasPart, baseUrl, headingSlug, displayText
      });

      if (!baseUrl) nodes.push({
        type: "text",
        value: displayText,
      });

      else nodes.push({
        type: "link",
        url: baseUrl + headingSlug,
        children: [
          {
            type: "text",
            value: displayText,
          },
        ],
      });

      lastIndex = end;
    }

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
