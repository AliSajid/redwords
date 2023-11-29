<script lang="ts">
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';
  export let row: PrismaRedWordResult;
</script>

{#if row.audioAvailable}
  <iconify-icon icon="ri:checkbox-circle-fill" style="color: green;" width="64"></iconify-icon>
{:else}
  <span><iconify-icon icon="ri:add-circle-fill" style="color: red;" width="64" rotate="45deg"></iconify-icon></span>
{/if}

<style>
  span {
    display: inline-block;
    rotate: 45deg;
  }
</style>
