---
title: RSS, Atom and JSON feed - what's the difference?
date: 2025-02-05
tags:
- development
- comparison
---

As I was creating my website for blogging, I stumbled upon this technology called RSS. It allows to view your blogs, using a separate app called an RSS reader. And so I decided to implement it on my website. I started digging.

Turns out there a couple different ways to implement a feed on your website:

- RSS 2.0 feed
- Atom feed
- JSON feed

Let's explore the main differences between them 🔍

## RSS 2.0 feed

```xml
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
  <channel>
    <title>Efim.ish</title>
    <description>Efims blog</description>
    <link>https://efimish.github.io/</link>
    <item>
      <title>Hello</title>
      <link>https://efimish.github.io/posts/hello/</link>
      <guid isPermaLink="true">https://efimish.github.io/posts/hello/</guid>
      <pubDate>Fri, 24 Jan 2025 00:00:00 GMT</pubDate>
    </item>
    <item>
      <title>Lorem Ipsum</title>
      <link>https://efimish.github.io/posts/lorem-ipsum/</link>
      <guid isPermaLink="true">https://efimish.github.io/posts/lorem-ipsum/</guid>
      <pubDate>Sat, 25 Jan 2025 00:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>
```

## Atom 1.0 feed

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Efim.ish</title>
  <link href="https://efimish.github.io/"/>
  <updated>2025-01-05T00:00:00Z</updated>
  <author>
    <name>Efim Ishenin</name>
  </author>
  <id>urn:uuid:60a76c80-d399-11d9-b93C-0003939e0af6</id>
  <entry>
    <title>Hello</title>
    <link href="https://efimish.github.io/posts/hello/"/>
    <id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>
    <updated>2025-01-24T00:00:00Z</updated>
    <summary>Some text.</summary>
  </entry>
</feed>
```

## JSON feed 1.1

```json
{
  "version": "https://jsonfeed.org/version/1",
  "title": "Efim.ish",
  "icon": "https://efimish.github.io/favicon-512.png",
  "home_page_url": "https://efimish.github.io/",
  "feed_url": "https://efimish.github.io/feed.json",
  "items": [
    {
      "id": "https://efimish.github.io/posts/hello/",
      "title": "Hello",
      "content_html": "<p>html content here</p>",
      "date_published": "2025-01-24T00:00:00Z",
      "url": "https://efimish.github.io/posts/hello/"
    }
  ]
}
```

## Linking to feeds from html

1 - RSS 2.0 feed

```html
<link
  rel="alternate"
  type="application/rss+xml"
  title="RSS feed"
  href="https://efimish.github.io/feed.xml"
>
```

2 - Atom feed

```html
<link
  rel="alternate"
  type="application/atom+xml"
  title="Atom feed"
  href="https://efimish.github.io/feed.xml"
>
```

3 - JSON feed

```html
<link
    rel="alternate"
    type="application/feed+json"
    title="JSON feed"
    href="https://efimish.github.io/feed.json"
>
```

## Versions

Some of the feed received updated that added more features and removed limits.
Here are versions and their release dates:

- RSS 0.90 (initial release) - March 15, 1999 (25 years ago)
- RSS 2.0.11 (latest release) - March 30, 2009 (15 years ago)
- Atom 0.3 (initial release) - December 2003 (21 years ago)
- Atom 1.0 (latest release) - December 2005 (19 years ago)
- JSON feed 1.0 (initial release) - May 17, 2017 (7 years ago)
- JSON feed 1.1 (latest release) - Aug 7, 2020 (4 years ago)

## What to choose?

All these feeds provide the same data, so I think - it comes down to personal preference.
As I mostly code using TypeScript, I almost never had to work with XML, while JSON is really familiar to me.
This means JSON feed would be easier for me to implement.

## Links

Other articles about this topic:

- [Kevin Cox - RSS Feed Best Practises](https://kevincox.ca/2022/05/06/rss-feed-best-practices/#formats)
- [Mark Nottingham - RSS and Atom Feed Tutorial](https://www.mnot.net/rss/tutorial/)
- [RSS / Atom Feed Reader - What Is The Difference Between RSS And Atom Format](https://rssatom.com/what_is_the_difference_between_RSS_and_atom_format.php)
