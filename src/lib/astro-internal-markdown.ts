import type { AstroIntegration } from "astro";
import type { MarkdownProcessor } from "@astrojs/markdown-remark";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";

const symbol = Symbol.for("internal-markdown");

const globalStore = globalThis as typeof globalThis & {
  [key: symbol]: MarkdownProcessor | undefined;
};

export const render = async (content: string) => {
  const processor = globalStore[symbol];
  if (!processor) throw new Error("[internal-markdown] Processor not initialized");

  const result = await processor.render(content);
  return result.code;
};

export default function internalMarkdown(): AstroIntegration {
  return {
    name: "internal-markdown",
    hooks: {
      "astro:config:done": async ({ config }) => {
        const processor = await createMarkdownProcessor(config.markdown);
        globalStore[symbol] = processor;
      },
    },
  };
}
