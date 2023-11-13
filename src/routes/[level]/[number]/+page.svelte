<script lang="ts">
  import type { PageData } from './$types';
  import Card from '$lib/components/Card.svelte';
  import type RedWord from '$lib/types/RedWord';

  export let data: PageData;

  let index = 0;

  $: redword = data.props.words[index];

  function next() {
    index = (index + 1) % data.props.words.length;
  }

  function prev() {
    index = (index - 1 + data.props.words.length) % data.props.words.length;
  }
</script>

<h1>Welcome to Red Word Practice</h1>

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
