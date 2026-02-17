export const dynamic = 'force-static';

import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export async function GET() {
  const indexes = source.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
  }));

  return NextResponse.json(indexes);
}
