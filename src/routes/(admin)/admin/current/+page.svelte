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

<!-- <nav>
  <ul></ul>
  <ul>
    <li>
      <a href="?level=KG" role="button">Kindergarten</a>
    </li>
    <li><a href="?level=GR1" role="button">First Grade</a></li>
    <li><a href="?" role="button">Clear Grade Filter</a></li>
  </ul>
  <ul></ul>
</nav>
 -->
<!-- <table role="grid">
  <thead>
    <tr>
      <th scope="col">Word</th>
      <th scope="col">Level</th>
      <th scope="col">Audio Available</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each data.words as word}
      <tr>
        <td>{word.word}</td>
        <td>{word.levelDisplayName}</td>
        <td
          >{#if word.audioAvailable}
            <IconCheckOutline style="font-size: 3em; color: green" />
          {:else}
            <IconCrossMark style="font-size: 4em" />
          {/if}
        </td>
        <td>
          <div class="container-fluid" id="buttons">
            <button type="button" on:click={() => {}} id="edit" class="secondary">Edit</button>
            <button type="button" on:click={() => {}} id="delete">Delete</button>
          </div>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
<Pagination {itemsPerPage} itemCount={data.wordCount} level={$page.url.searchParams.get('level')} /> -->
