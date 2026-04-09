import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import sanitize from "sanitize-html";
import { blog } from "@/consts";

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.created.getTime() - a.data.created.getTime(),
  );

  return rss({
    title: blog.name,
    description: blog.description,
    site: context.url.origin,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.created,
      categories: post.data.tags,
      link: `/posts/${post.id}/`,
      content: sanitize(post.rendered?.html ?? "", {
        allowedTags: sanitize.defaults.allowedTags
          .concat(["del", "input"])
          .filter((tag) => tag !== "span"),
        allowedAttributes: {
          ...sanitize.defaults.allowedAttributes,
          input: ["type", "checked", "disabled"],
        },
      }),
    })),
  });
};
