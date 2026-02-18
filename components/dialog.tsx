'use client';

import { useDocsSearch } from 'fumadocs-core/search/client';
import dynamic from 'next/dynamic';

const SearchDialog = dynamic(() => import('fumadocs-ui/components/dialog/search').then(mod => mod.SearchDialog), { ssr: false });

export default function CustomSearch(props: any) {
  const { search, setSearch, query } = useDocsSearch({
      type: 'static',
      api: '/api/search', // static JSON
  });

  return (
    <SearchDialog 
      {...props}
      search={search}
      onSearchChange={setSearch}
      results={query.data || []}
    />
  );
}
