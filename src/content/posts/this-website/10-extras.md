---
title: Building My Website - Extras (Part 10)
description: How I built my personal website - Part 10 - extras and miscellaneous files
date: 2025-08-22
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
7. [Astro plugins: RSS, Sitemap, Word count](/posts/this-website/07-astro-plugins)
8. [SVG icons and Favicon](/posts/this-website/08-icons-favicon)
9. [Building resume with XeLaTeX](/posts/this-website/09-resume)
10. __Extras__

---

## robots.txt

[robots.txt](https://www.robotstxt.org/)
is a file in the project root that gives rules to web crawlers.

Here is mine:

```txt
User-agent: *
Disallow: /tags/

Sitemap: https://efimish.github.io/sitemap-index.xml
```

I excluded tag index pages from crawling
because I don’t think they provide much value in search engine results.

## humans.txt

[humans.txt](https://humanstxt.org/)
is a fun, optional file where you can credit yourself,
the tools you used, or technologies involved.

For now, mine is short and simple:

```txt
Made by Efim Ishenin
```

## QR codes

I got interested in how QR codes work and wanted to create one for my website.
I wanted it to be perfect: correct error correction and one pixel per visible pixel.

I used a simple JavaScript tool to generate them:

```bash
bun x qrcode -q 1 -s 1 -o qr.png "https://efimish.github.io"
bun x qrcode -q 1 -s 1 -o qr.svg "https://efimish.github.io"
```

I haven’t used them anywhere yet, so I just put them in the `public` folder.

## tsconfig.json

I added import aliases to avoid typing long relative paths:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@assets/*": ["src/assets/*"],
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@scripts/*": ["src/scripts/*"],
      "@styles/*": ["src/styles/*"]
    }
  }
}
```

## GitHub Actions for deployment

To automatically deploy my website to GitHub Pages
on every push to the main branch, I created this GitHub Actions workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site
        uses: withastro/action@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

This workflow installs dependencies, builds the site,
and publishes it to GitHub Pages automatically.

## Inspiration and References

While building my website, I drew inspiration from several blogs:

- [Adam McKerlie](https://mckerlie.com/)
- [Mark Horn](https://markhorn.dev/)
- [CSS Tricks](https://css-tricks.com/)
- [Hynek Svacha](https://hyneks.cz/)
- [Charles Wang](https://charleszw.com/)

## Missed something?

If you have any questions left, feel free to check out the
[source code of my website on GitHub](https://github.com/Efimish/efimish.github.io)
