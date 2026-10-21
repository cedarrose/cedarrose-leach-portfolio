import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, person, SITE_URL } from '../site';

export type Work = CollectionEntry<'work'>;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2024-07" -> "Jul 2024" */
export function formatMonth(ym: string): string {
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** Human date range, e.g. "Jul 2024 – May 2025", "Sep 2024 – present", "Dec 2024". */
export function formatRange(start: string, end: string): string {
  if (start === end) return formatMonth(start);
  return `${formatMonth(start)} – ${end === 'present' ? 'present' : formatMonth(end)}`;
}

/** Sort key: ongoing work first, then by most recent end date, then start date. */
function sortKey(w: Work): string {
  const end = w.data.end === 'present' ? '9999-99' : w.data.end;
  return `${end}|${w.data.start}`;
}

export async function getWork(): Promise<Work[]> {
  const all = await getCollection('work');
  return all.sort((a, b) => sortKey(b).localeCompare(sortKey(a)));
}

export async function getWorkByCategory() {
  const all = await getWork();
  return categories
    .map((c) => ({ ...c, items: all.filter((w) => w.data.category === c.id) }))
    .filter((c) => c.items.length > 0);
}

export async function getPublications() {
  const all = await getWork();
  const order = { 'Journal article': 0, 'Conference abstract': 1, Poster: 2 } as const;
  return all
    .flatMap((w) => w.data.publications.map((p) => ({ ...p, work: w })))
    .sort((a, b) => order[a.kind] - order[b.kind]);
}

export const workUrl = (w: Work) => `/work/${w.id}/`;
export const absolute = (path: string) => new URL(path, SITE_URL).toString();

/** A complete Markdown version of one project, used for /work/<id>.md and llms-full.txt. */
export function workToMarkdown(w: Work, headingLevel = 1): string {
  const d = w.data;
  const h = '#'.repeat(headingLevel);
  const lines: string[] = [`${h} ${d.title}`, ''];
  lines.push(`- Organization: ${d.orgUrl ? `[${d.org}](${d.orgUrl})` : d.org}`);
  lines.push(`- Role: ${d.role}`);
  lines.push(`- Dates: ${formatRange(d.start, d.end)}`);
  if (d.supervisor) lines.push(`- Supervisor: ${d.supervisor}`);
  if (d.funding.length)
    lines.push(`- Funding: ${d.funding.map((f) => (f.url ? `[${f.name}](${f.url})` : f.name)).join('; ')}`);
  if (d.tags.length) lines.push(`- Topics: ${d.tags.join(', ')}`);
  lines.push(`- Page: ${absolute(workUrl(w))}`);
  lines.push('', `> ${d.summary}`, '');
  if (d.awards.length) {
    lines.push('Awards:', ...d.awards.map((a) => `- ${a}`), '');
  }
  if (d.links.length) {
    lines.push('Links:', ...d.links.map((l) => `- [${l.label}](${absolute(l.url)})`), '');
  }
  if (d.publications.length) {
    lines.push('Publications:');
    for (const p of d.publications) {
      lines.push(`- ${p.kind}: ${p.authors} "${p.title}." ${p.venue}, ${p.date}.${p.url ? ` ${absolute(p.url)}` : ''}`);
    }
    lines.push('');
  }
  // Shift the body's headings down so they nest under this project's heading.
  const body = (w.body ?? '')
    .trim()
    .replace(/^(#{1,5}) /gm, (_m, hashes: string) => `${'#'.repeat(Math.min(hashes.length + headingLevel - 1, 6))} `)
    .replace(/\]\((\/[^)]*)\)/g, (_m, path: string) => `](${absolute(path)})`);
  lines.push(body, '');
  const captions = d.gallery.filter((g) => g.caption);
  if (captions.length) {
    lines.push('Figures:', ...d.gallery.map((g) => `- ${g.caption ?? g.alt}`), '');
  }
  return lines.join('\n');
}

export function personJsonLd() {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: person.name,
    url: SITE_URL,
    email: `mailto:${person.email}`,
    image: absolute('/og.png'),
    jobTitle: 'Electrical and Computer Engineering student',
    description: person.description,
    affiliation: { '@type': 'CollegeOrUniversity', name: person.school, url: 'https://www.usc.edu/' },
    sameAs: [person.linkedin],
    knowsAbout: person.knowsAbout,
  };
}
