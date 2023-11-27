<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<div id="main">
  <h1>Welcome to Red Word Practice</h1>
  <slot />
</div>
<Footer />

<style>
  #main {
    flex-grow: 1;
  }

  h1 {
    text-align: center;
  }
</style>
