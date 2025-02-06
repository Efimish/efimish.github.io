import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export const GET: APIRoute = async (context) => {
    const posts = await getCollection("posts");
    return rss({
        title: "Efim.ish",
        description: "Efim's blog",
        site: context.site!,
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: post.data.date,
            link: `/posts/${post.id}`
        })),
    });
}