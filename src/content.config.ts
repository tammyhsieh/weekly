import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    dek: z.string().optional(),
    category: z.enum(['設計', '產品策略', '產品', '工具更新', '工具', '研究']),
    publishedAt: z.coerce.date(),
    readingMinutes: z.number(),
    featured: z.boolean().default(false),
    sourceName: z.string(),
    sourceUrl: z.string().url().optional(),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      publisher: z.string(),
      date: z.string().optional(),
    })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
