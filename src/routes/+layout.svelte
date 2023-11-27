<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<div id="main">
  <slot />
</div>
<Footer />

<style>
  #main {
    flex-grow: 1;
  }
</style>
