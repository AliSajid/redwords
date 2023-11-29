<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';

  export let row: PrismaRedWordResult;

  async function handleDelete() {
    const res = await fetch(`/admin/words/${row.level}/${row.word}`, {
      method: 'DELETE',
    });
    invalidateAll();
  }
</script>

<button on:click|preventDefault={handleDelete}>Delete</button>

<style>
  button {
    display: inline-block;
  }
</style>
