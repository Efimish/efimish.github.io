---
title: Building My Website - Resume with XeLaTeX (Part 9)
description: How I built my personal website - Part 9 - creating a resume in XeLaTeX
date: 2025-08-20
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
9. __Building resume with XeLaTeX__

---

I wanted my resume in __PDF format__ so it would be easy to share and print.
Of course, I could have used Word or Google Docs,
but I don’t like relying on GUI and proprietary tools.
It also makes automation and templating much harder.

## Why XeLaTeX?

There are multiple “engines” for LaTeX.
The most common one is __pdfLaTeX__,
but I went with __XeLaTeX__ because:

- It supports __system fonts__ through the `fontspec` package (I use Roboto).
- It handles __UTF-8 characters and Cyrillic__ out of the box — no extra encoding setup needed.

With pdfLaTeX, this would have been messy,
requiring `inputenc`, `fontenc`, and font packages.
With XeLaTeX, I just type Russian or English text directly and it works.

## My setup

Here’s the LaTeX preamble I used to configure my resume:

```tex
% Main parameters
\documentclass[a4paper, 12pt]{article}
\usepackage[left=1.5cm, right=1.5cm, top=1.5cm]{geometry}
% Links
\usepackage[
  colorlinks=true,
  urlcolor=blue,
  pdftitle={Resume},
  pdfauthor={Efim Ishenin}
]{hyperref}
% Customizable lists
\usepackage{enumitem}
% Roboto font
\usepackage{fontspec}
\setmainfont{Roboto}
% Remove page numbering
\pagenumbering{gobble}
% Remove paragraph indentation
\setlength{\parindent}{0pt}
% Customize titles
\usepackage{titlesec}
\titleformat{\section}
  {\normalfont\large\bfseries}
  {}
  {0pt}
  {}
  [\vspace{1pt}\titlerule\vspace{-6.5pt}]
% Russian language support
\usepackage[russian]{babel}
```

I ended up with both
[English](/resume.pdf) and
[Russian](/резюме.pdf) versions!

Now I can keep my resume fully version-controlled,
easily tweakable, and always looking consistent in print and digital form.
