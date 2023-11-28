<script lang="ts">
  import type { PageData } from './$types';
  import SvelteTable from 'svelte-table';
  import AvailabilityIcon from '$lib/components/AvailabilityIcon.svelte';
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';
  import Pagination from '$lib/components/Pagination.svelte';
  import { page } from '$app/stores';
  import WordDetail from '$lib/components/WordDetail.svelte';

  let itemsPerPage = 10;

  export let data: PageData;

  $: rows = data.words;

  const columns = [
    { key: 'id', title: 'ID', value: (row: PrismaRedWordResult) => row.id },
    { key: 'word', title: 'Word', value: (row: PrismaRedWordResult) => row.word },
    { key: 'levelDisplayName', title: 'Level', value: (row: PrismaRedWordResult) => row.levelDisplayName },
    {
      key: 'audioAvailable',
      title: 'Audio Available',
      renderComponent: AvailabilityIcon,
    },
  ];
</script>

<SvelteTable {rows} {columns} showExpandIcon={true} expandSingle={true} rowKey="id">
  <svelte:fragment slot="expanded" let:row><WordDetail {row} /></svelte:fragment>
</SvelteTable>
<Pagination {itemsPerPage} itemCount={data.wordCount} level={$page.url.searchParams.get('level')} />
