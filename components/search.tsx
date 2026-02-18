'use client';

import { useDocsSearch } from 'fumadocs-core/search/client';
import { SearchDialog } from 'fumadocs-ui/components/dialog/search';

export default function CustomSearchDialog(props: any) {
  const { search, setSearch, query } = useDocsSearch({
    type: 'static', 
    api: '/api/search', // Assuming /api/search returns the array of search indexes
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
