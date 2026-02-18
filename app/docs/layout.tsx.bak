import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import dynamic from 'next/dynamic';

const SearchDialog = dynamic(() => import('@/components/search'), { ssr: false });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout 
      tree={source.getPageTree()} 
      {...baseOptions()}
      sidebar={{
        enabled: true,
        collapsible: true,
      }}
    >
        <SearchDialog trigger={undefined} open={undefined} onOpenChange={undefined} />
      {children}
    </DocsLayout>
  );
}
