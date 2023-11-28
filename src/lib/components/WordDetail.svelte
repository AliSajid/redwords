<script lang="ts">
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';
  import AdminButtonPanel from './AdminButtonPanel.svelte';
  export let row: PrismaRedWordResult;
</script>

<h1>{row.word}</h1>

<AdminButtonPanel {row} />
