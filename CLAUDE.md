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
- `src/site.ts`: name, one-line bio, contact links, and `SITE_URL`
  (taken from Vercel's production domain automatically; override with a `SITE_URL` env var).
- `src/pages/index.astro`: home page (hero, then one list linking to every project).
- `src/pages/work/[id].astro`: the page for each project.
- `src/pages/llms.txt.ts`, `llms-full.txt.ts`, `work/[id].md.ts`, `robots.txt.ts`:
  agent-facing files, all generated from the same content. Never edit their
  output by hand, and never duplicate content into them.
- `src/components/Doodles.astro`: the layer for Cedar's characters.
- `src/components/WaferBackdrop.astro`: the line-drawn wafers in the margins.
- `src/components/PixelBlob.astro`: the orange pixel blob who lives on the wafer,
  plus his props (`PROPS_BY_PAGE` picks which parts appear on which page).
- `src/components/Carousel.astro`: the photo carousel on project pages.
- `src/styles/global.css`: colors, type, and shared styles.
- `src/assets/`: images. Put new ones in `src/assets/work/<project-id>/`.
- `public/files/`: PDFs (resume, posters). `public/og.png`: social preview image.

## Adding a project

1. Create `src/content/work/<id>.md` (the file name becomes the URL `/work/<id>/`).
2. Fill in the frontmatter; copy an existing file as a template. `order` sets the
   position in the home page list (1 = top; renumber the others to fit). `category` is one of
   `experience`, `research`, `building`, `mentoring`. Dates are `YYYY-MM`; `end` can be `present`.
3. Write `summary` as one sentence. It isn't shown on the page; it's the page's meta
   description and appears in llms.txt. `role` is the subtitle shown under the title.
   The home page shows only the years, title and organization (the organization is
   hidden when the title already names it).
4. Every gallery image needs real `alt` text describing what's in it. Add a `caption` when
   there's more to say.
5. Papers, abstracts and posters go in `publications`; they appear on the project page.
6. Gallery images appear in the photo carousel, in the order listed.

The home page, project page, llms.txt, llms-full.txt, the Markdown copy, the sitemap
and the structured data all update automatically.

## Cedar's writing

Project write-ups are in Cedar's own words. Don't rewrite, restructure or add
headings to them; fix only clear misspellings, and only when asked to edit.

## Design rules

- Clean and quiet, with little text. The home page is not a resume: no skills,
  publications or keyword lists there, just a link to each project.
- One typeface: Source Serif 4, at regular weights. No condensed or bold display type.
- Colors are in `global.css`: warm brown ink, muted brown for secondary text,
  maroon only on hover, amber only for focus rings.
- The margins hold two subtle, line-drawn silicon wafers (die grid, sketchy rim,
  notch, a few inked dies), pinned to the window and kept out of the text column.
  They're hidden on narrow screens. Keep them drawing-like, never photorealistic,
  and don't add other decorative patterns.
- No per-item colors, gradient text, tags or keyword chips, cards with shadows, or
  scroll-triggered fade-ins.

## Decorative characters (doodles)

Add them in `Doodles.astro` (or components it renders). The pixel blob is the
first one. He walks the die rows of the wafer in one margin, hops between rows,
climbs onto small pixel parts (chip, resistor, capacitor, mini wafer) and sometimes
sits on them. He smiles when hovered, looks at hovered links, waves at the bottom
of the page, and falls asleep after 45 seconds of inactivity. He's hidden when the
margins are too narrow. Rules:

- The layer is `aria-hidden` and `pointer-events: none`; characters must never
  cover or replace text, so keep them in the margins. A character may set
  `pointer-events: auto` on itself for hover effects.
- Prefer CSS animation; keep any JavaScript small and local to the character.
- Wrap motion in `@media (prefers-reduced-motion: no-preference)`.
- Images go in `src/assets/doodles/` and are rendered with `<Image />`.

## Commands

- `npm run dev`: local dev server
- `npm run build`: build to `dist/` (requires Node 22.23+)
- `npm run check`: type-check

After changing content, run the build and spot-check `dist/llms.txt` and the page's HTML.
