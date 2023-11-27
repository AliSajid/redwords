<script lang="ts">
  import type { PageData } from './$types';
  import Card from '$lib/components/Card.svelte';

  export let data: PageData;

  let index = 0;

  $: redword = data.props.words[index];

  /**
   * Increments the index to the next word.
   */
  function next() {
    index = (index + 1) % data.props.words.length;
  }

  /**
   * Decrements the index to the previous word.
   */
  function prev() {
    index = (index - 1 + data.props.words.length) % data.props.words.length;
  }
</script>

<div id="CardWindow">
  <button on:click={prev}>Previous</button>
  <Card {redword} />
  <button on:click={next}>Next</button>
</div>

<style>
  #CardWindow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  #CardWindow > button {
    margin: 1rem;
    width: 10%;
    height: 100%;
  }
</style>
