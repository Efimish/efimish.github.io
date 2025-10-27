---
title: How I made this website
description: Story of creating my personal website
date: 2025-10-23
tags:
  - development
  - blogging
  - seo
  - content-management
---

## The idea

I've tried creating a personal website before,
but I didn't like the outcome.
This time I set some goals beforehand:

- Self-introduction: A place to share some information about myself.
- Blogging: A platform to publish my thoughts freely.
- Flexibility: Room for custom pages if needed.
- Best practices: Fast loading, simplicity, following web standards.

My website is completely Open Source. Code is available on
[GitHub](https://github.com/Efimish/efimish.github.io).

I decided not to include code snippets in this article
since they might change in the future.

## Tools

As my frontend framework I chose
[Astro](/posts/why-astro-stands-out).
It allows me to easily build static pages
with 0 JavaScript by default.

Along with Astro itself, I have also installed
their Sitemap and RSS plugins.

## Content

I like writing in [Markdown](/posts/markdown-and-its-feautres)
and I think it's perfect for articles.

Astro's content collections provide a nice way to
manage markdown files and validate their frontmatter.
Each post in my collection has the following properties:
`title`, `description`, `date`, `tags`.

## Meta tags

To make my website more presentable in social media embeds
and improve visibility in search engines,
I included a lot of meta tags:

- Description, author, canonical url
- Open Graph tags (for rich link previews)
- Icons (favicons, iOS/Android home screen icons)
- Webmanifest (support for adding to home screens)
- Sitemap (for better search engine indexing)
- RSS feed (for external readers)

## Semantic markup

I made sure to use the appropriate
html tags as much as possible.
This benefits external readers,
search engines and future maintainers.

## Styling

I tried to make HTML look comfortable
without overcomplicating styles.

Instead of using dozens of classes,
I styled elements based on tags.
Semantic HTML helped with this.

My website is using default system font.
On each operating system it will look different,
but feel native for it.

I made 2 color themes: light and dark.
They switch automatically depending on your system defaults.
But there is also a theme selector to override it.

## JavaScript

My website runs fine without JavaScript,
however is it necessary to power theme selector.
I have also added a little easter egg,
you can find it in the browser console.

## SVG

I made SVG icons work like emojis
by setting `height="1em" width="1em" fill="currentColor"`.

## Favicons

As for favicons, I needed them in different sizes,
but didn't want to create each one individually,
so I derived them all from one SVG file.

## Resumes

I wanted to create a resume in PDF format so
it could could be easily shared and printed.

I decided to use [Typst](https://typst.app/) for that.
It's a modern alternative to LaTeX, but without the hassle.
This way I can track the PDF sources in the same git repository
and edit them with a plaintext editor.

I ended up with both
[English](/resume.pdf) and
[Russian](/резюме.pdf) versions!

## Inspiration and References

While building my website, I drew inspiration from several blogs:

- [Adam McKerlie](https://mckerlie.com/)
- [Mark Horn](https://markhorn.dev/)
- [CSS Tricks](https://css-tricks.com/)
- [Hynek Svacha](https://hyneks.cz/)
- [Charles Wang](https://charleszw.com/)
