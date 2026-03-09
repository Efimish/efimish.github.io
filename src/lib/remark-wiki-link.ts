import type { Root, Text, Link, Image } from "mdast";
import { visit } from "unist-util-visit";
import { slug } from "github-slugger";

const WIKI_LINK_REGEX = /!?\[\[([^\]]+)\]\]/;

export interface Options {
  permalinks: Map<string, string>;
}

export const remarkWikiLink = ({ permalinks }: Options) =>
  (tree: Root) => visit(tree, "text", (node, index, parent) => {
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

      const displayText = aliasPart ?? headingPart ?? linkPart;
      const headingSlug = headingPart ? "#" + slug(headingPart) : "";

      // [[#Heading]]
      if (!linkPart && headingPart) {
        nodes.push({
          type: "link",
          url: headingSlug,
          children: [{
            type: "text",
            value: displayText,
          }],
        });
        return;
      }

      const permalink = permalinks.get(linkPart.toLowerCase());

      // [[Unknown link]]
      if (!permalink) {
        nodes.push({
          type: "text",
          value: displayText,
        });
        return;
      }

      // ![[image.png]]
      if (isEmbed) {
        nodes.push({
          type: "image",
          url: permalink,
          alt: aliasPart ?? "",
        });
        return;
      }

      // [[Known link]]
      nodes.push({
        type: "link",
        url: permalink + headingSlug,
        children: [{
          type: "text",
          value: displayText,
        }],
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
