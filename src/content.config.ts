import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const posts = defineCollection({
    loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.string().array(),
    }),
});

export const collections = { posts };