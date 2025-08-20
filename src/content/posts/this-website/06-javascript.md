---
title: Building My Website - Adding color themes with JavaScript (Part 6)
description: How I built my personal website - Part 6 - Implementing theme switching with JavaScript, localStorage, and a clean data-theme approach.
date: 2025-08-01
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
6. __Adding color themes with JavaScript__
7. [Astro plugins: RSS, Sitemap, Word count](/posts/this-website/07-astro-plugins)
8. [SVG icons and Favicon](/posts/this-website/08-icons-favicon)
9. Building resume with XeLaTeX

---

Astro framework ships 0 JavaScript by default, which I love.
For a simple website like mine, most things don’t require JavaScript at all.

But some interactions are only possible with it - like switching color themes dynamically.

## Theme switching logic

I added a `<select>` element where users can choose a theme.
Whenever they select a different option, the website should:

1. Update the colors instantly.
2. Save the choice so it persists across page reloads
(my site is a multi-page app, so state isn’t preserved automatically).

Here’s the script I use:

```ts
const theme = localStorage.getItem("theme") ?? "system";
document.documentElement.dataset.theme = theme;

const selector = document.querySelector(
  "select#theme-selector"
) as HTMLSelectElement | null;

if (selector !== null) {
  selector.value = theme;

  selector.addEventListener("change", () => {
    const value = selector.value;
    localStorage.setItem("theme", value);
    document.documentElement.dataset.theme = value;
  });
}
```

- On load, it checks localStorage for a saved theme.
- The `<html>` element gets a data-theme attribute
(instead of a class, since it feels cleaner and supports multiple values).
- When the user changes the selector,
the new value is saved back to localStorage and applied immediately.

This way, the site remembers the theme until the user clears browser storage.

## Bonus: a little easter egg 🌿

Just for fun, I added this line:

```ts
console.log("%c🌿", "font-size: 8em");
```

Open the browser console and you’ll see a giant leaf emoji printed out.
