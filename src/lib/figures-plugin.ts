import type { HastPluginDefinition } from 'satteri';

/**
 * Markdown plugin: a paragraph that holds only images becomes a row of
 * captioned figures, shown side by side.
 *
 *   ![SmarTender from the front](../../assets/work/usc-makers/a.jpeg "SmarTender View 1")
 *   ![Gears](../../assets/work/usc-makers/b.jpeg "Gears for lifting mechanism")
 *
 * The alt text describes the image for screen readers and agents; the quoted
 * title becomes the visible caption. Images are still optimized by Astro.
 */
type Node = { type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: Node[] };

export const figuresPlugin: HastPluginDefinition = {
  name: 'figure-rows',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const children = (node.children ?? []) as Node[];
      const meaningful = children.filter((c) => !(c.type === 'text' && !(c.value ?? '').trim()));
      if (!meaningful.length || !meaningful.every((c) => c.type === 'element' && c.tagName === 'img')) return;

      const figures = meaningful.map((img) => {
        const { title, ...props } = img.properties ?? {};
        const figure: Node = {
          type: 'element',
          tagName: 'figure',
          properties: {},
          children: [{ type: 'element', tagName: 'img', properties: props, children: [] }],
        };
        if (typeof title === 'string' && title) {
          figure.children!.push({
            type: 'element',
            tagName: 'figcaption',
            properties: {},
            children: [{ type: 'text', value: title }],
          });
        }
        return figure;
      });

      ctx.replaceNode(node, {
        type: 'element',
        tagName: 'div',
        properties: { className: ['figure-row'], dataCount: String(figures.length) },
        children: figures,
      } as never);
    },
  },
};
