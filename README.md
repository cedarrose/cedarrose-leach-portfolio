# cedarrose-leach-portfolio

Source for Cedar Rose Leach's personal website: Electrical and Computer Engineering
at USC, with research in neural interfaces, wearable sensors and nanofabrication.

Built with [Astro](https://astro.build) as a fully static site, designed so that both
people and AI agents can read everything on it:

- Every page is plain HTML with no hidden or JavaScript-only content.
- [`/llms.txt`](https://cedarroseleach.com/llms.txt) and `/llms-full.txt` give agents a
  Markdown summary and the full text of every project.
- Each project page has a Markdown copy at `/work/<id>.md`.
- Pages include Open Graph metadata, schema.org structured data, a sitemap and robots.txt.

## Working on it

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs dist/
```

Projects are Markdown files in `src/content/work/`. See [CLAUDE.md](./CLAUDE.md) for
how the site is organized and the rules for adding content.

The previous Next.js version of the site lives in
[cedarrose/cedarrose.github.io](https://github.com/cedarrose/cedarrose.github.io).
