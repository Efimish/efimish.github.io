import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import sanitize from "sanitize-html";
import MarkdownIt from "markdown-it";

import { author } from "@scripts/consts";

const parser = new MarkdownIt();

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: author,
    description: `${author}'s blog`,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.id}`,
      categories: post.data.tags,
      content: sanitize(parser.render(post.body ?? "")),
    })),
  });
};
