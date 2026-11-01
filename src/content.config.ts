import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Entry ids look like "en/hadestown" — the folder is the language, the file name is the shared slug.
const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['musical', 'play']),
    seen: z.coerce.date(),
    venue: z.string(),
    city: z.string(),
    seat: z.string().optional(),
    cast: z.array(z.string()).default([]),
    rating: z.number().min(0).max(5).multipleOf(0.5),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    sample: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    org: z.string(),
    place: z.string(),
    period: z.string(),
    order: z.number(),
    summary: z.string(),
    highlight: z.string().optional(),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
  }),
});

export const collections = { reviews, projects };
