<script lang="ts">
  import wordlist from '$lib/data/words';
  import Card from '$lib/components/Card.svelte';

  let index = 0;

  $: redword = wordlist[index % wordlist.length];

  function next() {
    index = ++index;
  }

  function previous() {
    if (index > 0) {
      index = --index;
    }
  }
</script>

<div id="cardwindow">
  <button type="button" on:click|preventDefault={previous}>Previous</button>
  <Card {redword}></Card>
  <button type="button" on:click|preventDefault={next}>Next</button>
</div>

<style>
  #cardwindow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
  button {
    width: 30%;
    height: 100%;
  }
</style>
