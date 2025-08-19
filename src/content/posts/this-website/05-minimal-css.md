---
title: Building My Website - Minimalist CSS and native-like design (Part 5)
description: How I built my personal website - Part 5 - Creating a native-like feel with minimal CSS, semantic HTML, and simple theme support.
date: 2025-07-31
tags:
  - development
  - web
---

This article is part of a series about building my personal website:

1. [The idea and choosing the right tool](/posts/this-website/01-idea-and-choosing-tool)
2. [SEO essentials: meta tags and base head element](/posts/this-website/02-seo-meta-tags)
3. [Content management with Markdown and Frontmatter](/posts/this-website/03-markdown-and-frontmatter)
4. [Semantic HTML for accessibility and external readers](/posts/this-website/04-semantic-html)
5. __Minimalist CSS: styling and native-like design__
6. [Adding color themes with JavaScript](/posts/this-website/06-javascript)
7. Astro plugins: RSS, Sitemap, Word count
8. SVG icons and Favicon
9. Building resume with XeLaTeX

---

When building apps for desktop or mobile, “native look” usually means
using the platform’s built-in components
(SwiftUI on iOS, Jetpack Compose on Android, etc.), so the UI feels familiar.

The web doesn’t have a true native toolkit - just bare HTML,
which looks very plain by default.
My goal was to make HTML feel native using as little CSS
as possible - no recreating Apple or Material components,
just small touches for comfort.

## Minimal “native-like” CSS choices

Here’s what I focused on:

1. System font stack - `
font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
  Helvetica, Arial, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji";
`\
This ensures the site uses the same font your OS uses.
2. Simple color scheme -
Default to black, gray, and white with blue links.
Extra color themes can be added later.
3. Respect system preferences -
Use `prefers-color-scheme: dark` to match the OS theme.
4. Consistent spacing -
Stable 1em margins and a slightly increased line-height for readability.
5. No overcomplicated styling -
Keep it simple and let the browser’s defaults work for you.

## Styling without classes

Instead of adding dozens of class attributes everywhere,
I prefer semantic HTML with smart CSS selectors.
This keeps markup clean, uncluttered, and improves
accessibility by ensuring structure is meaningful.

If you’ve seen a
“[classless CSS framework](https://css-tricks.com/no-class-css-frameworks/)” -
that’s the same idea: make the base HTML look good without custom classes.

## Theme variables

To make theming easier, I define each theme using just four CSS variables:

- `--primary-color`
- `--secondary-color`
- `--background-color`
- `--link-color`

Example:

```css
/* themes */

:root {
  --primary-color: #454545;
  --secondary-color: #EAEAEA;
  --background-color: #FFF;
  --link-color: #007AFF;
  color-scheme: light;
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #DCDCDC;
    --secondary-color: #414141;
    --background-color: #1E1E1E;
    --link-color: #2DA1FD;
    color-scheme: dark;
  }
}

[data-theme="light"] {
  --primary-color: #454545;
  --secondary-color: #EAEAEA;
  --background-color: #FFF;
  --link-color: #007AFF;
  color-scheme: light;
}

[data-theme="dark"] {
  --primary-color: #DCDCDC;
  --secondary-color: #414141;
  --background-color: #1E1E1E;
  --link-color: #2DA1FD;
  color-scheme: dark;
}

[data-theme="sepia"] {
  --primary-color: #5B4636;
  --secondary-color: #E0D7C3;
  --background-color: #F5ECD8;
  --link-color: #D19600;
}
```

## How it works

- Default light theme is applied.
- If the user’s system is set to dark mode,
the dark theme is applied automatically - no JavaScript needed.
- If an element (usually `<html>`) has data-theme="...",
it overrides the current theme.

This method means light/dark switching still works
even if JavaScript is disabled or fails to load.
