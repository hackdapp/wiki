import { getLLMText, source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(_req: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;

  // Handle the root case where we map to index.md
  if (slug && slug.length === 1 && slug[0] === 'index.md') {
    const page = source.getPage([]);
    if (page) {
      return new Response(await getLLMText(page), {
        headers: {
          'Content-Type': 'text/markdown',
        },
      });
    }
  }

  const cleanSlug = [...(slug || [])];
  if (cleanSlug.length > 0) {
    const last = cleanSlug[cleanSlug.length - 1];
    if (last.endsWith('.md')) {
      cleanSlug[cleanSlug.length - 1] = last.slice(0, -3);
    }
  }

  const page = source.getPage(cleanSlug);
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

export function generateStaticParams() {
  const params = source.generateParams();
  return params.map((p) => {
    const slug = p.slug || [];
    if (slug.length === 0) {
      return { slug: ['index.md'] };
    }
    const newSlug = [...slug];
    newSlug[newSlug.length - 1] = `${newSlug[newSlug.length - 1]}.md`;
    return { slug: newSlug };
  });
}
