import type { APIRoute } from 'astro';
import { person, skills } from '../site';
import { getWorkByCategory, getPublications, formatRange, workUrl, absolute } from '../lib/work';

// Short Markdown summary of the whole site for AI agents (https://llmstxt.org).
export const GET: APIRoute = async () => {
  const sections = await getWorkByCategory();
  const pubs = await getPublications();

  const out: string[] = [
    `# ${person.name}`,
    '',
    `> ${person.description}`,
    '',
    person.bio.join('\n\n'),
    '',
    '## Contact',
    '',
    `- Email: ${person.email}`,
    `- LinkedIn: ${person.linkedin}`,
    `- Resume (PDF): ${absolute(person.resume)}`,
    `- Education: ${person.degree}, ${person.school}, Class of ${person.classOf}`,
    '',
  ];

  for (const s of sections) {
    out.push(`## ${s.title}`, '');
    for (const w of s.items) {
      const d = w.data;
      out.push(
        `- [${d.title}](${absolute(`/work/${w.id}.md`)}): ${d.role}, ${d.org} (${formatRange(d.start, d.end)}). ${d.summary} Web page: ${absolute(workUrl(w))}`,
      );
    }
    out.push('');
  }

  out.push('## Publications', '');
  for (const p of pubs) {
    out.push(`- ${p.kind}: ${p.authors} "${p.title}." ${p.venue}, ${p.date}.${p.url ? ` ${absolute(p.url)}` : ''}`);
  }
  out.push('', '## Skills', '');
  for (const g of skills) out.push(`- ${g.group}: ${g.items.join(', ')}`);

  out.push(
    '',
    '## Optional',
    '',
    `- [Full text of every project write-up](${absolute('/llms-full.txt')})`,
    `- [Sitemap](${absolute('/sitemap-index.xml')})`,
    '',
  );

  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
