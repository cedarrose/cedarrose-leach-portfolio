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
      // Position in the home page list (1 = top).
      order: z.number(),
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
      // Shown as a row of starred awards under the title.
      awards: z.array(z.object({ title: z.string(), detail: z.string().optional() })).default([]),
      links: z
        .array(z.object({ label: z.string(), url: z.string(), icon: z.enum(['instagram', 'mail']).optional() }))
        .default([]),
      // A company logo shown above the title.
      logo: z.object({ src: image(), alt: z.string() }).optional(),
      // An image (like a logo) shown in place of the title text.
      titleImage: z.object({ src: image(), alt: z.string() }).optional(),
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
      // Skills shown as a table at the end of the write-up.
      skills: z.array(z.object({ name: z.string(), detail: z.string() })).default([]),
      // Hide the subtitle and organization under the title (e.g. when a logo already says it).
      hideByline: z.boolean().default(false),
      // Bold orange sub-headings (### headings) in the write-up.
      accentHeadings: z.boolean().default(false),
      // The photo carousel steps through its photos as the page scrolls.
      autoScrollPhotos: z.boolean().default(false),
      // Show the photos before the write-up instead of after it.
      photosFirst: z.boolean().default(false),
      // Articles about the work, shown as preview cards above the photos.
      media: z
        .array(z.object({ title: z.string(), source: z.string(), date: z.string(), url: z.url(), image: image() }))
        .default([]),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
    }),
});

export const collections = { work };
