<script lang="ts">
  import { preventDefault } from 'svelte/legacy';

  import { invalidateAll } from '$app/navigation';
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';

  interface Props {
    row: PrismaRedWordResult;
  }

  let { row }: Props = $props();

  /**
   * Asynchronously handles the deletion of a word.
   *
   * This function sends a DELETE request to the server to delete a specific word.
   * The word to delete is identified by its level and word properties, which are properties of the `row` object.
   * After the word is deleted, it invalidates all data to ensure the UI is updated with the latest data.
   * @async
   */
  async function handleDelete() {
    console.info(`Calling DELETE /admin/words/${row.level}/${row.word}`);
    await fetch(`/admin/words/${row.level}/${row.word}`, {
      method: 'DELETE',
    });
    invalidateAll();
  }
</script>

<button onclick={preventDefault(handleDelete)}>Delete</button>

<style>
  button {
    display: inline-block;
  }
</style>
