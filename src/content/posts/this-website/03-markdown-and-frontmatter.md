---
title: Building My Website - Content management with Markdown and Frontmatter (Part 3)
description: How I built my personal website - Part 3 - Implementing content collections in Astro using Markdown and schema validation
date: 2025-07-13
tags:
  - development
  - web
  - content_management
---

This article is part of a series about building my personal website:

1. [The idea and choosing the right tool](/posts/this-website/01-idea-and-choosing-tool)
2. [SEO essentials: meta tags and base head element](/posts/this-website/02-seo-meta-tags)
3. __Content management with Markdown and Frontmatter__
4. Semantic HTML for accessibility and external readers
5. Minimalist CSS: styling and native-like design
6. Adding color themes with JavaScript
7. Astro plugins: RSS, Sitemap, Word count
8. SVG icons and Favicon
9. Building resume with XeLaTeX

---

## Astro content collections

[Astro](/posts/why-astro-stands-out)'s content collections provide a powerful way
to manage Markdown files with type-safe frontmatter validation.
This system helps maintain consistency across all posts
and enables advanced content organization.

## Frontmatter schema validation

Each Markdown file in my collection includes the following frontmatter properties:

- title: The post's title
- description: A brief summary for SEO and previews
- date: Publication date
- tags: Categorization labels

Here's my schema definition in `src/content.config.ts`:

```ts
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
```

Astro will automatically validate all Markdown files against this schema,
providing error messages if any frontmatter is missing or invalid.

## Markdown file example

A typical post includes the validated frontmatter followed by Markdown content:

```markdown
---
title: Markdown and its features
description: About Markdown language and its capabilities
date: 2025-06-28
tags:
  - review
---

# content
```

## Retrieving and sorting posts

To fetch and display posts chronologically:

```ts
import { getCollection } from "astro:content";

const posts = (await getCollection("posts")).sort(
  (a, b) => b.data.date.getTime() - a.data.date.getTime()
);
```

This sorted collection powers my blog index and tag pages.
