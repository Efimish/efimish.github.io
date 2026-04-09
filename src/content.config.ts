import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ base: "src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created: z.date(),
    updated: z.date().nullish(),
    tags: z
      .string()
      .regex(
        /^[a-z-]+$/,
        "Tags must contain lowercase letters and hyphens only",
      )
      .array(),
  }),
});

export const collections = { posts };
