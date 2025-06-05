import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import config from "@scripts/config";

const { author } = config;

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("posts");
  return rss({
    title: author,
    description: `${author}'s blog`,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      author: author,
      pubDate: post.data.date,
      link: `/posts/${post.id}`,
    })),
  });
};
