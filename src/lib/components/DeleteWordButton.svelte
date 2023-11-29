<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';

  export let row: PrismaRedWordResult;

  /**
   * Asynchronously handles the deletion of a word.
   *
   * This function sends a DELETE request to the server to delete a specific word.
   * The word to delete is identified by its level and word properties, which are properties of the `row` object.
   * After the word is deleted, it invalidates all data to ensure the UI is updated with the latest data.
   * @async
   */
  async function handleDelete() {
    await fetch(`/admin/words/${row.level}/${row.word}`, {
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
