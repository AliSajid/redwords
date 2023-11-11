<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import type RedWord from '$lib/types/RedWord';

  export let redword: RedWord;
</script>

<div id="cardwindow">
  <span></span>
  <Card {redword}></Card>
</div>
