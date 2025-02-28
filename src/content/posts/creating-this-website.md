---
title: Creating this website in Astro
description: The story of creating my personal website using Astro.js
date: 2025-01-25
tags:
  - development
---

One day, I wanted to create a personal website.
It was not my first attempt at creating one.
But previous ones were pretty bad:

- I have used svelte, but realized it is too much for what I needed
- I have then used vanilla HTML + CSS and it was OK but website was pretty boring and adding any new features would require a lot of work

So this third time I wanted to make something really good.
I have heard about making a blog on your website and this idea got into my head.
here's **the full idea**:

A personal website that would act as **a portfolio**, contain my **resume** and **projects**.
I should be able to **create blog posts** easily, using **markdown** to write them.
Also, I might later add some other pages with **tools** built in TypeScript, this should not be hard to do.

## Choosing a tool

As I have already said, vanilla HTML will not do the job.
I need a tool, that would be easy to use, but still powerful enough to fit my needs.

I have heard about static side generators (SSG) and although I've never used them, I decided to give them a go.
I was planning to host my website on GitHub pages, using actions to build it first.

GitHub pages supports [Jekyll](https://jekyllrb.com/) out of the box, so I tried it, but it was problematic because of Ruby. I have not used Ruby before and do not want to learn it because of one tool.

I have then searched for Jekyll alternatives and found [Hugo](https://gohugo.io/). It seemed better, but still for some reason I could not get it running fast and decided not to use it.
Instead, I decided to use a tool written in TypeScript, as then it would be easier for me to learn.

I even tried creating my own markdown-to-html converter, and it was quite easy to set up using a couple of libraries, but it would require a lot of reinventing the wheel and I felt like I just wouldn't finish this project.

Then came [11ty](https://www.11ty.dev/). Finally, JavaScript. I got it running really fast, as it works without any config by default. But that also means it is not opinionated and I would have to configure things in the way I like. To find out, what way I like, I would first need to try a lot of ways. This made me feel that, once again, I would spend too much time configuring and not actually creating something new, and project would stay unfinished.

Finally, I decided to try [Astro](https://astro.build/). I have read that it is quite new, but offers unique features and is worth learning. I created a new project, it offered a blog template by default, and boom! I got up and running in a few seconds! And the project already had a well defined structure. They also provide [a fantastic documentation](https://docs.astro.build/en/getting-started/) to get you started. This was my final choice.

## HTML

HTML powers the web, it is the first thing your browser loads when you open the page and what connects other technologies.

I wanted to write my HTML in the most correct way.

### Head and meta tags

In HTML, head comes first and includes a lot of invisible to eye tags. What do they include?

```html
<!-- Always include these: -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Title, description and author of the page -->
<title>{title}</title>
<meta name="description" content={description} />
<meta name="author" content={author} />

<!-- Open Graph - used by FaceBook, Discord, Telegram, etc... -->
<meta property="og:site_name" content="Efim.ish" />
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={Astro.url} />
<meta property="og:image" content={new URL(image, Astro.url.origin)} />
<meta property="og:image:alt" content="Green leaf on a white background" />

<!-- Favicons - see next section -->
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- Webmanifest with more data and icons -->
<link rel="manifest" href="/manifest.webmanifest" />

<!-- Iclude this to support dark mode -->
<meta name="color-scheme" content="light dark" />

<!-- Sitemap - for SEO -->
<link rel="sitemap" href="/sitemap-index.xml" />

<!-- RSS Feed -->
<link
  rel="alternate"
  type="application/rss+xml"
  title="RSS Feed"
  href={new URL("feed.xml", Astro.site)}
/>

<!-- Astro -->
<meta name="generator" content={Astro.generator} />
```

I have used [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate/blob/main/src/index.html)

#### Favicons

Favicons (icons in tabs bar) should be simple, but in reality they are not.

To make things simple, we want to support as many devices as possible, providing as little as possible icons.

How to create a set of favicons?

1. Find / create a square svg icon with no background, name it `favicon.svg`
2. Use the following script, it adds margins and backgrounds, so masking will not break your icon

```bash
# Browser: 32px, no margin, no background
# Apple: 180px, margin = 27px (15%), size = 126px
# Android: 192px, margin = 38px (20%), size = 116px
# Open Graph: 512px, margin = 102px (20%), size = 308px

rsvg-convert favicon.svg -w 32 -h 32 -o favicon.ico

rsvg-convert favicon.svg --page-width 180 --page-height 180 --left 27 --top 27 -w 126 -h 126 -b white -o apple-touch-icon.png

rsvg-convert favicon.svg --page-width 192 --page-height 192 --left 38 --top 38 -w 116 -h 116 -b white -o favicon-192.png

rsvg-convert favicon.svg --page-width 512 --page-height 512 --left 102 --top 102 -w 308 -h 308 -b white -o favicon-512.png
```

### Semantics and accessibility

Now, lets talk about what should go into `<body>` tag.

Ideally we want to write [semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html). That means:

- using appropriate tags instead of divs.
- wrap tied content in tags.

In my case:

- wrap repeating content on top and bottom of your pages in `<header>` and `<footer>` respectively
- wrap unique to pages content in `<main>`
- wrap blog posts in `<article>`
- main and article can have their own headers and footers

Accessibility #todo

- aria-label and etc...
- how to check accessibility

### RSS and feeds

- rss / atom / json feed (link to comparison)
- how to implement
- include html in rss feed or not?

### RSS reader and troubles

- NetNewsWire
- date duplication

### Safari / Firefox readers and their issues

- date duplication
- styling does not work

### SVGs embedding

- astro's experimental feature
- what is inside svgs
- how to set proper size and colors

## Resumes and LaTeX

- why latex
- make it a different article

## Trailing slash

## CSS

- the minimal use of styling
- dark and light themes
- how to not bleed eyes

## JS

- theme switcher
