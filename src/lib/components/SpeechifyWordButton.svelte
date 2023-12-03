<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';

  export let row: PrismaRedWordResult;

  /**
   * Asynchronously handles the audio generation of a word.
   *
   * This function sends a GET request to the server to generate audio for a specific word.
   * The word to delete is identified by its level and word properties, which are properties of the `row` object.
   * @async
   */
  async function handleSpeechify() {
    if (row.audioCount != 10) {
      await fetch(`/api/speechify/${row.level}/${row.word}`);
    }
  }
</script>

<button on:click|preventDefault={handleSpeechify}>Speechify</button>

<style>
  button {
    display: inline-block;
  }
</style>
