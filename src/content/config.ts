import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
