import type { APIRoute, GetStaticPaths } from 'astro';
import { getWork, workToMarkdown, type Work } from '../../lib/work';
import { person } from '../../site';

// A Markdown copy of each project page at /work/<id>.md, for agents.
export const getStaticPaths = (async () => {
  const all = await getWork();
  return all.map((work) => ({ params: { id: work.id }, props: { work } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const work = props.work as Work;
  const text = `${workToMarkdown(work, 1)}\n---\nBy ${person.name} (${person.email}). Site summary: /llms.txt\n`;
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
