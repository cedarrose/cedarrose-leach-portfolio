# Cedar Rose Leach's website

Personal portfolio built with Astro. Fully static: every page is plain HTML with
all of its text in it. Deployed on Vercel (framework preset: Astro, no settings needed).

## Priorities, in order

1. **Agents must be able to read everything.** Never put content where an agent
   can't see it: no collapsed accordions or tabs that remove content from the
   HTML, no text that only appears after JavaScript runs, no content that starts
   hidden (opacity 0, display none) and fades in on scroll. If something needs to
   be collapsible, use native `<details>`/`<summary>`, which keeps the text in the HTML.
2. **Keep it simple to edit.** Content lives in Markdown, layout in a few `.astro` files.

## Where things live

- `src/content/work/*.md`: one file per project. The frontmatter schema is in
  `src/content.config.ts`. The body is the full write-up.
- `src/site.ts`: name, bio, contact links, skills, section order, and `SITE_URL`.
- `src/pages/index.astro`: home page (hero, sections, publications, skills).
- `src/pages/work/[id].astro`: the page for each project.
- `src/pages/llms.txt.ts`, `llms-full.txt.ts`, `work/[id].md.ts`, `robots.txt.ts`:
  agent-facing files, all generated from the same content. Never edit their
  output by hand, and never duplicate content into them.
- `src/components/Doodles.astro`: the layer for Cedar's drawn characters.
- `src/styles/global.css`: colors, type, and shared styles.
- `src/assets/`: images. Put new ones in `src/assets/work/<project-id>/`.
- `public/files/`: PDFs (resume, posters). `public/og.png`: social preview image.

## Adding a project

1. Create `src/content/work/<id>.md` (the file name becomes the URL `/work/<id>/`).
2. Fill in the frontmatter; copy an existing file as a template. `category` is one of
   `experience`, `research`, `building`, `mentoring`. Dates are `YYYY-MM`; `end` can be `present`.
3. Write `summary` as one sentence: it appears on the home page and in llms.txt.
4. Every gallery image needs real `alt` text describing what's in it. Add a `caption` when
   there's more to say.
5. Papers, abstracts and posters go in `publications`; they appear in the home page list too.

The home page, project page, llms.txt, llms-full.txt, the Markdown copy, the sitemap
and the structured data all update automatically.

## Design rules

- Palette and type are defined in `global.css`. Barlow Condensed for headings,
  dates and labels; Source Serif 4 for reading text. Maroon for links and project
  titles, amber only for underlines, focus rings and highlights.
- The peach dot grid is the site's signature: the hero background and the
  dotted rules between sections. Don't add other decorative patterns.
- No per-item colors, gradient text, cards with shadows, or scroll-triggered fade-ins.

## Decorative characters (doodles)

Add them in `Doodles.astro` (or components it renders). Rules:

- The layer is `aria-hidden` and `pointer-events: none`; characters must never
  cover or replace text.
- Prefer CSS animation; keep any JavaScript small and local to the character.
- Wrap motion in `@media (prefers-reduced-motion: no-preference)`.
- Images go in `src/assets/doodles/` and are rendered with `<Image />`.

## Commands

- `npm run dev`: local dev server
- `npm run build`: build to `dist/` (requires Node 22.23+)
- `npm run check`: type-check

After changing content, run the build and spot-check `dist/llms.txt` and the page's HTML.
