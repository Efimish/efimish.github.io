import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";

export default (markdown: string) => toString(fromMarkdown(markdown)).split(" ").length;
