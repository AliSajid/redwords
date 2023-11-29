<script lang="ts">
  import type { PageData } from './$types';
  import SvelteTable from 'svelte-table';
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';
  import Pagination from '$lib/components/Pagination.svelte';
  import WordDetail from '$lib/components/WordDetail.svelte';

  export let data: PageData;

  $: rows = data.words;

  const columns = [
    { key: 'id', title: 'ID', value: (row: PrismaRedWordResult) => row.id },
    { key: 'word', title: 'Word', value: (row: PrismaRedWordResult) => row.word },
    { key: 'levelDisplayName', title: 'Level', value: (row: PrismaRedWordResult) => row.levelDisplayName },
  ];
</script>

<sveltekit:head>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
</sveltekit:head>

<SvelteTable {rows} {columns} showExpandIcon={true} expandSingle={true} rowKey="id">
  <svelte:fragment slot="expanded" let:row><WordDetail {row} /></svelte:fragment>
</SvelteTable>
<Pagination itemCount={data.wordCount} />
