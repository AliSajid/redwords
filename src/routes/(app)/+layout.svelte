<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Header />
<div id="main">
  <h1>Welcome to Red Word Practice</h1>
  {@render children?.()}
</div>
<Footer />

<style>
  #main {
    flex-grow: 1;
  }

  h1 {
    margin-top: 1rem;
    text-align: center;
  }
</style>
