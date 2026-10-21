import type { APIRoute } from 'astro';
import { person, skills } from '../site';
import { getWorkByCategory, workToMarkdown, absolute } from '../lib/work';

// Every project write-up in one Markdown file, for agents that want full detail.
export const GET: APIRoute = async () => {
  const sections = await getWorkByCategory();
  const out: string[] = [
    `# ${person.name}`,
    '',
    `> ${person.description}`,
    '',
    person.bio.join('\n\n'),
    '',
    `Contact: ${person.email} | LinkedIn: ${person.linkedin} | Resume (PDF): ${absolute(person.resume)}`,
    '',
  ];
  for (const s of sections) {
    out.push(`# ${s.title}`, '');
    for (const w of s.items) out.push(workToMarkdown(w, 2));
  }
  out.push('# Skills', '');
  for (const g of skills) out.push(`- ${g.group}: ${g.items.join(', ')}`);
  out.push('');
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
