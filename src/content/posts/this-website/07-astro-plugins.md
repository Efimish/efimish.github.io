---
title: "Building My Website - Astro plugins: RSS, Sitemap, and Reading Time (Part 7)"
description: How I built my personal website - Part 7 - Using Astro plugins and utilities to generate an RSS feed, a sitemap for SEO, and reading time estimates.
date: 2025-08-02
tags:
  - development
  - web
---

This article is part of a series about building my personal website:

1. [The idea and choosing the right tool](/posts/this-website/01-idea-and-choosing-tool)
2. [SEO essentials: meta tags and base head element](/posts/this-website/02-seo-meta-tags)
3. [Content management with Markdown and Frontmatter](/posts/this-website/03-markdown-and-frontmatter)
4. [Semantic HTML for accessibility and external readers](/posts/this-website/04-semantic-html)
5. [Minimalist CSS: styling and native-like design](/posts/this-website/05-minimal-css)
6. [Adding color themes with JavaScript](/posts/this-website/06-javascript)
7. __Astro plugins: RSS, Sitemap, Word count__
8. SVG icons and Favicon
9. Building resume with XeLaTeX

---

Astro is already a “batteries-included” framework,
but sometimes you need extra features.
That’s where its official plugins and integrations come in.

Here are the dependencies I use on my site:

```json
"dependencies": {
  "@astrojs/rss": "^4.0.12",
  "@astrojs/sitemap": "^3.5.0",
  "astro": "^5.13.2",
  "markdown-it": "^14.1.0",
  "mdast-util-from-markdown": "^2.0.2",
  "mdast-util-to-string": "^4.0.0",
  "reading-time": "^1.5.0",
  "sanitize-html": "^2.17.0"
}
```

## RSS feed

RSS provides an XML feed of all blog posts,
which some users (and apps) rely on to follow updates.

Install the plugin:

```bash
bun add @astrojs/rss
```

Then create a dynamic file at `src/pages/feed.xml.ts`:

```ts
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import sanitize from "sanitize-html";
import MarkdownIt from "markdown-it";

import { author } from "@scripts/consts";

const parser = new MarkdownIt();

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: author,
    description: `${author}'s blog`,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: `/posts/${post.id}`,
      content: sanitize(parser.render(post.body ?? "")),
    })),
  });
};
```

Now every time you publish a new article, the feed updates automatically.

To make the feed discoverable, I also include a
`<link rel="alternate" type="application/rss+xml" title="RSS Feed" href={new URL("feed.xml", Astro.site)} />`
in the `<head>` (see [Part 2](/posts/this-website/02-seo-meta-tags)).

## Sitemap

A sitemap helps search engines like Google crawl
and index your website more effectively.

Adding it in Astro is extremely simple:

```bash
bunx astro add sitemap
```

That’s it - plugin installed, sitemap generated automatically.

Search engines also discover the sitemap via
`<link rel="sitemap" href="/sitemap-index.xml" />` in the `<head>`
(see [Part 2](/posts/this-website/02-seo-meta-tags)).

## Reading time

A small but nice touch: showing estimated reading time for each article.

I built a small script that parses Markdown,
extracts plain text, and runs it through the reading-time

```ts
// src/scripts/reading-time.ts
import getReadingTime from "reading-time";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";

export default (text: string) => {
  const root = fromMarkdown(text);
  const str = toString(root);
  const time = getReadingTime(str);
  return time.text;
};
```

Each article now shows something like “3 min read” next to the date.
