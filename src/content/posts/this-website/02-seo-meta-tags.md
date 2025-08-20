---
title: "Building My Website - SEO essentials: meta tags and base head element (Part 2)"
description: How I built my personal website - Part 2 - Implementing SEO through meta tags
date: 2025-07-10
tags:
  - development
  - web
---

This article is part of a series about building my personal website:

1. [The idea and choosing the right tool](/posts/this-website/01-idea-and-choosing-tool)
2. __SEO essentials: meta tags and base head element__
3. [Content management with Markdown and Frontmatter](/posts/this-website/03-markdown-and-frontmatter)
4. [Semantic HTML for accessibility and external readers](/posts/this-website/04-semantic-html)
5. [Minimalist CSS: styling and native-like design](/posts/this-website/05-minimal-css)
6. [Adding color themes with JavaScript](/posts/this-website/06-javascript)
7. [Astro plugins: RSS, Sitemap, Word count](/posts/this-website/07-astro-plugins)
8. [SVG icons and Favicon](/posts/this-website/08-icons-favicon)
9. Building resume with XeLaTeX

---

## What is SEO?

SEO (Search Engine Optimization) is the process of improving a
website's visibility and ranking in search engine results.
While primarily used to attract users,
SEO offers additional benefits for personal websites.
Even though traffic isn't my main concern, proper SEO implementation
makes websites more presentable in social media embeds and improves overall usability.

## Meta tags

HTML powers the web by structuring page content,
but each page also contains important meta-information in its head section.
This information helps browsers properly render pages and provides:

- Page titles, descriptions and authors
- Links to resources (styles, scripts, icons)
- Social media preview data (like those nice link embeds on Discord)

While the head element might seem technical and unexciting,
it plays crucial roles in how your website interacts with browsers and other platforms.

## My implementation

I've implemented several meta features to enhance my website's functionality:

- Open Graph for rich link previews
- Icons for all devices (favicons, iOS/Android home screen icons)
- PWA support for adding to home screens as bookmark
- Sitemap for better search engine indexing
- RSS feed for external readers

Some of these features will be explored in detail in future articles.

## Base head element

```astro
---
import { author } from "@scripts/consts";
import "@styles/global.css";

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

{/* Always include */}
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>{title}</title>
<meta name="description" content={description} />
<meta name="author" content={author} />

{/* Open Graph */}
<meta property="og:site_name" content={author} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={Astro.url} />
<meta property="og:image" content={new URL("favicon-512.png", Astro.site)} />
<meta property="og:image:alt" content="Green leaf on a white background" />

<slot name="open-graph" />

{/* Icons */}
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

{/* Manifest */}
<link rel="manifest" href="/manifest.webmanifest" />

{/* Sitemap */}
<link rel="sitemap" href="/sitemap-index.xml" />

{/* RSS Feed */}
<link
  rel="alternate"
  type="application/rss+xml"
  title="RSS Feed"
  href={new URL("feed.xml", Astro.site)}
/>

{/* Astro */}
<meta name="generator" content={Astro.generator} />
```
