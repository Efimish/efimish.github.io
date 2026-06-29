import type { AstroIntegration } from "astro";
import type { MarkdownRenderer } from "@astrojs/markdown-remark";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";

const symbol = Symbol.for("internal-markdown");

const globalStore = globalThis as typeof globalThis & {
  [key: symbol]: MarkdownRenderer | undefined;
};

export const render = async (content: string) => {
  const renderer = globalStore[symbol];
  if (!renderer)
    throw new Error("[internal-markdown] Renderer not initialized");

  const result = await renderer.render(content);
  return result.code;
};

export default function internalMarkdown(): AstroIntegration {
  return {
    name: "internal-markdown",
    hooks: {
      "astro:config:done": async ({ config }) => {
        const renderer = await createMarkdownProcessor(config.markdown);
        globalStore[symbol] = renderer;
      },
    },
  };
}
