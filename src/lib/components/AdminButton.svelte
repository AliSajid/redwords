<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';

  export let row: PrismaRedWordResult;
  export let type: 'edit' | 'delete';

  async function handleDelete() {
    const res = await fetch(`/admin/words/${row.level}/${row.word}`, {
      method: 'DELETE',
    });
    invalidateAll();
  }

  async function handleEdit() {
    const res = await fetch(`/admin/words/${row.level}/${row.word}`, {
      method: 'PATCH',
      body: JSON.stringify({ word: row.word.toUpperCase() }),
    });
    invalidateAll();
  }

  const label = type === 'edit' ? 'Edit' : 'Delete';
  const clickHandler = type === 'edit' ? handleEdit : handleDelete;
</script>

<button on:click={clickHandler}>{label}</button>
