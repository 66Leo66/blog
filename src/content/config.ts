import { z, defineCollection } from "astro:content";


export const collections = {
    'posts': defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            tags: z.array(z.string()).optional().default([]),
            draft: z.boolean().optional().default(false),
        })
    })
}