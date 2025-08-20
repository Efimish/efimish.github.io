---
title: "Building My Website - SVG Icons and Favicon (Part 8)"
description: How I built my personal website - Part 8 - adding scalable SVG icons and a cross-platform favicon.
date: 2025-08-19
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
8. __SVG icons and Favicon__
9. [Building resume with XeLaTeX](/posts/this-website/09-resume)
10. [Extras](/posts/this-website/10-extras)

---

## SVG basics

SVG is a vector image format that scales infinitely without losing quality. It’s written in XML.

Here’s a minimal template:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  role="img"
  viewBox="0 0 256 256"
  width="256" height="256"
>
  <title>Your title</title>
  <path d="" />
</svg>
```

Notes:

- XML has two versions (1.0 and 1.1). Stick with 1.0 - it’s the default,
works everywhere, and has no real drawbacks.
- SVG also has several versions (1.0, 1.1, 2.0 draft).
Modern browsers support the latest features automatically,
so you can just omit the version attribute.
- Always declare:
  - the namespace (XML requirement),
  - width + height or a viewBox (defines the canvas),
  - and a title (acts as accessible text).
    Place the `<title>` as the first child of the `<svg>` element.

## Icons

For icons, I used free SVGs from
[SVG Repo](https://www.svgrepo.com)

To make them behave like inline emojis
(so they can sit inside text), I set:

```xml
<svg role="img" height="1em" width="1em" fill="currentColor">
  <title>Save</title>
  <path d="..." />
</svg>
```

- `role="img"` improves accessibility.
- `height="1em" width="1em"` makes the icon scale like a character of text.
- `fill="currentColor"` ensures the icon inherits the text color.

And a little CSS makes them align better:

```css
svg {
  vertical-align: text-bottom;
  font-size: 1.2em;
}
```

## Favicon

Favicons are the small icons shown in browser tabs,
bookmarks, and also used for home screen shortcuts.

I started with an SVG, then generated the required
raster versions using rsvg-convert:

```bash
# Browser favicon: 32px, no margin, no background
rsvg-convert favicon.svg -w 32 -h 32 -o favicon.ico

# Apple touch icon: 180px canvas, 15% margin, white background
rsvg-convert favicon.svg --page-width 180 --page-height 180 --left 27 --top 27 -w 126 -h 126 -b white -o apple-touch-icon.png

# Android icon: 192px canvas, 20% margin, white background
rsvg-convert favicon.svg --page-width 192 --page-height 192 --left 38 --top 38 -w 116 -h 116 -b white -o favicon-192.png

# Open Graph (link previews): 512px canvas, 20% margin, white background
rsvg-convert favicon.svg --page-width 512 --page-height 512 --left 102 --top 102 -w 308 -h 308 -b white -o favicon-512.png
```

This covers browsers, iOS, Android, and link previews.

## Linking icons in `<head>`

To make sure browsers actually use these icons,
I added the following to my `BaseHead.astro` component:

```astro
{/* Icons */}
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

{/* Manifest */}
<link rel="manifest" href="/manifest.webmanifest" />
```

This covers:

- the standard browser favicon (favicon.ico),
- the scalable SVG fallback,
- the iOS Apple touch icon,
- and a PWA manifest that defines Android and Open Graph icons.

## Manifest

The `manifest.webmanifest` contains metadata for Progressive Web Apps (PWAs).
Even though I don’t fully use PWA features yet, it’s nice to have the icons defined in one place:

```json
{
  "name": "Efim Ishenin",
  "short_name": "Efim.ish",
  "description": "Efim Ishenin's personal website",
  "icons": [
    {
      "src": "/favicon-192.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "maskable"
    },
    {
      "src": "/favicon-512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "maskable"
    }
  ]
}
```
