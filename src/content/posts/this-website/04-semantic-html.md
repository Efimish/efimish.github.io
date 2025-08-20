---
title: Building My Website - Semantic HTML for accessibility and external readers (Part 4)
description: How I built my personal website - Part 4 - Using semantic HTML to improve accessibility, structure, and compatibility with external readers.
date: 2025-07-30
tags:
  - development
  - web
---

This article is part of a series about building my personal website:

1. [The idea and choosing the right tool](/posts/this-website/01-idea-and-choosing-tool)
2. [SEO essentials: meta tags and base head element](/posts/this-website/02-seo-meta-tags)
3. [Content management with Markdown and Frontmatter](/posts/this-website/03-markdown-and-frontmatter)
4. __Semantic HTML for accessibility and external readers__
5. [Minimalist CSS: styling and native-like design](/posts/this-website/05-minimal-css)
6. [Adding color themes with JavaScript](/posts/this-website/06-javascript)
7. [Astro plugins: RSS, Sitemap, Word count](/posts/this-website/07-astro-plugins)
8. [SVG icons and Favicon](/posts/this-website/08-icons-favicon)
9. Building resume with XeLaTeX

---

When building a website, semantic HTML should be the backbone of your markup.
It’s not just about making things look good — it’s about ensuring
the content is understandable, accessible, and well-structured
for both humans and machines.

Let’s focus on the `<body>` structure and see how proper semantics
improve accessibility, SEO, and maintainability.

## Why semantic HTML matters

Semantic HTML benefits:

- Screen reader users
- RSS feed readers
- Browser tools and search engines
- Future maintainers (including yourself!)

HTML has a rich set of elements, each with its own meaning.
While `<div>` and `<span>` have their place,
they carry no semantic value on their own.
Before writing markup, ask yourself:
“What’s the most appropriate HTML tag for this content?”

For example, my general page structure looks like this:

```html
<body>
  <header>
    <nav></nav>
  </header>
  <main></main>
  <footer></footer>
</body>
```

This clear layout helps screen readers navigate quickly
and preserves the document’s outline even without CSS.
For more element examples, see
[W3Schools' semantic elements guide](https://www.w3schools.com/html/html5_semantic_elements.asp).

## Structuring blog posts

Each blog post (and even its preview on listing pages)
is wrapped in an `<article>` tag.
Inside, I include:

- A heading (`<h1>` or `<h2>`) for the article title
- Metadata in a `<dl>` (definition list) using `<dt>` (term) and `<dd>` (definition) pairs
- A `<time>` tag for the publication date

Example structure:

```html
<article>
  <header>
    <h1>Article Title</h1>
    <dl>
      <div>
        <dt>Published on</dt>
        <dd><time datetime="2025-07-30">July 30, 2025</time></dd>
      </div>
      <div>
        <dt>Reading time</dt>
        <dd>2 min read</dd>
      </div>
    </dl>
  </header>
  <!-- Content -->
</article>
```

This not only helps accessibility tools but also makes your
HTML self-explanatory for future you (or other developers).

---

## Accessibility enhancements I made

Accessibility is not a “one-and-done” step — it’s an ongoing process.
Here’s what I added:

- Theme selector label - An `aria-label` for the theme switcher,
since it has no visible text.
- Descriptive SVGs - Each SVG includes a `<title>` as the first child,
describing its appearance.
- Context-specific labels - If an icon could mean different things in different places,
I set an additional `aria-label` on it for carity.
- Color contrast checks - Tested all theme combinations to ensure sufficient contrast
for text and interactive elements.

You can run tools like [Unlighthouse](https://unlighthouse.dev/)
to scan all your pages for accessibility issues at once.
