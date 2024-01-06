import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import path from "node:path";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("posts")).filter(
    (entry) => import.meta.env.DEV || !entry.data.draft
  );
  const rssItems = await Promise.all(
    posts.map(async (post) => ({
      title: post.data.title,
      pubDate: post.data.time,
      link: `/posts/${post.slug}`,
      // description: renderMarkdoc(post.body),
    }))
  );
  return rss({
    // `<title>` field in output xml
    title: "Leo's Blog",
    // `<description>` field in output xml
    description: "Recent content in Blogs on Leo's Blog",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site!,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: rssItems,
    // (optional) inject custom xml
    customData: "<language>zh-cn</language>",
    stylesheet: "/pretty-feed-v3.xsl"
  });
};
