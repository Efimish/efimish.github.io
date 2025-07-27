---
title: Building My Website - The idea and choosing the right tool (Part 1)
description: How I built my personal website - Part 1 - Why I chose Astro as my static site generator after evaluating Jekyll, Hugo, and 11ty.
date: 2025-07-09
tags:
  - development
  - web
---

I’m starting a series of articles about building
my personal website - the very one you’re reading now.
Since this is a broad topic, I’ll break it down into multiple parts:

1. __The idea and choosing the right tool__
2. [SEO essentials: meta tags and base head element](/posts/this-website/02-seo-meta-tags)
3. [Content management with Markdown and Frontmatter](/posts/this-website/03-markdown-and-frontmatter)
4. Semantic HTML for accessibility and external readers
5. Minimalist CSS: styling and native-like design
6. Adding color themes with JavaScript
7. Astro plugins: RSS, Sitemap, Word count
8. SVG icons and Favicon
9. Building resume with XeLaTeX

---

## The Idea

I’ve had the idea of creating a personal website before,
but my earlier attempts fell short.
This time, I wanted to approach it more deliberately.
Here’s what I aimed to achieve:

- Self-introduction: A place to share basic information about myself for visitors.
- Blogging: A platform to publish my thoughts, with full control over content.
  I prefer writing in [Markdown](/posts/markdown-and-its-feautres)
  (using [Obsidian](/posts/how-to-start-with-obsidian))
  and simply copying files to GitHub when ready.
- Flexibility: Room for non-blog pages if needed.
- Best practices: Fast loading, simplicity, and adherence to modern web standards.

## Choosing the right tool

For a lightweight, fast-loading site, a static website
was the obvious choice - it's also easier to host and deploy.
Static Site Generators (SSGs) are made for this, so I explored a few:

- Jekyll
- Hugo
- 11ty

But each had hurdles: unfamiliar languages (Ruby, Go),
cumbersome setups, or excessive configuration.
Frustrated, I finally discovered Astro - and it was a game-changer.

[Astro](/posts/why-astro-stands-out)
is a static site generator with optional
server-side or client-side reactivity (using modern frameworks).
It offers:

- Simple defaults for quick setup.
- Powerful integrations (like RSS feeds) without complexity.
- Flexibility without bloat.

I read through Astro’s documentation and loved it.
It was the perfect fit - and I was sold.
