import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { figuresPlugin } from './src/lib/figures-plugin';
import { SITE_URL } from './src/site';

// Fully static output: every page is plain HTML with all of its text in it.
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Paragraphs of only images become side-by-side captioned figures.
  markdown: {
    processor: satteri({ hastPlugins: [figuresPlugin] }),
  },
  redirects: {
    '/resume': '/files/cedar-rose-leach-resume.pdf',
  },
});
