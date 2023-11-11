<script lang="ts">
  import wordlist from '$lib/data/words';
  import type RedWord from '$lib/types/RedWord';
  import CardWindow from '$lib/components/CardWindow.svelte';

  let redword: RedWord = wordlist[0];
</script>

<CardWindow {redword} />
