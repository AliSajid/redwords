<script lang="ts">
  import wordlist from '$lib/data/words';
  import type RedWord from '$lib/data/words';
  import Card from '$lib/components/Card.svelte';

  let word = wordlist[0];
</script>

<Card word={word.word} level={word.level} />
