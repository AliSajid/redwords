<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<div class="container-fluid" id="content">
  <slot />
</div>
<Footer />

<style>
  #content {
    flex-grow: 1;
    width: 100%;
  }
</style>
