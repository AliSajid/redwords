<script lang="ts">
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';
  import AdminButton from './AdminButton.svelte';
  export let row: PrismaRedWordResult;

  let type;
</script>

<AdminButton type="edit" {row} />
<AdminButton type="delete" {row} />
