import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.string().array(),
    time: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date string",
      })
      .transform((val) => new Date(val))
      .or(z.date()),
    hidden: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
