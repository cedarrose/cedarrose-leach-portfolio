import type { APIRoute } from 'astro';
import { person } from '../site';
import { getWorkByCategory, workToMarkdown, absolute } from '../lib/work';

// Every project write-up in one Markdown file, for agents that want full detail.
export const GET: APIRoute = async () => {
  const sections = await getWorkByCategory();
  const out: string[] = [
    `# ${person.name}`,
    '',
    `> ${person.description}`,
    '',
    person.bio,
    '',
    `Contact: ${person.email} | LinkedIn: ${person.linkedin} | Resume (PDF): ${absolute(person.resume)}`,
    '',
  ];
  for (const s of sections) {
    out.push(`# ${s.title}`, '');
    for (const w of s.items) out.push(workToMarkdown(w, 2));
  }
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
