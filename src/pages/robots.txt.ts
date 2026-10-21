import type { APIRoute } from 'astro';
import { SITE_URL } from '../site';

// Everything is public and meant to be read, by people and by agents.
export const GET: APIRoute = () =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${new URL('/sitemap-index.xml', SITE_URL)}`,
      '',
      `# Summary for AI agents: ${new URL('/llms.txt', SITE_URL)}`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
