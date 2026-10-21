import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/work/.
// The same entry feeds the home page row, the project page, llms.txt,
// llms-full.txt, the per-page .md version and the JSON-LD.
const yearMonth = z.string().regex(/^\d{4}-\d{2}$/, 'Use YYYY-MM');

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Where the work happened: company, lab, club or startup.
      org: z.string(),
      orgUrl: z.url().optional(),
      role: z.string(),
      category: z.enum(['experience', 'research', 'building', 'mentoring']),
      start: yearMonth,
      end: z.union([yearMonth, z.literal('present')]),
      // One sentence shown on the home page and in llms.txt.
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      supervisor: z.string().optional(),
      funding: z.array(z.object({ name: z.string(), url: z.url().optional() })).default([]),
      awards: z.array(z.string()).default([]),
      links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
      // Papers, abstracts and posters. These are also collected into the
      // Publications list on the home page.
      publications: z
        .array(
          z.object({
            title: z.string(),
            authors: z.string(),
            venue: z.string(),
            date: z.string(),
            url: z.string().optional(),
            kind: z.enum(['Journal article', 'Conference abstract', 'Poster']),
          }),
        )
        .default([]),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
    }),
});

export const collections = { work };
