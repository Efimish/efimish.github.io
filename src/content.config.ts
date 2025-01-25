import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string().optional(),
        date: z.date(),
        tags: z.array(z.string()).nullish().transform(val => val ??= []),
    }),
});

export const collections = { blog };