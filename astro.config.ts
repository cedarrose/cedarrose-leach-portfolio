import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/site';

// Fully static output: every page is plain HTML with all of its text in it.
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  redirects: {
    '/resume': '/files/cedar-rose-leach-resume.pdf',
  },
});
