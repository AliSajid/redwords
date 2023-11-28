<script lang="ts">
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';
  import IconCheckOutline from '~icons/mdi/check-outline';
  import IconCrossMark from '~icons/openmoji/cross-mark';

  export let row: PrismaRedWordResult;
</script>

{#if row.audioAvailable}
  <IconCheckOutline style="font-size: 3em; color: green" />
{:else}
  <IconCrossMark style="font-size: 4em" />
{/if}
