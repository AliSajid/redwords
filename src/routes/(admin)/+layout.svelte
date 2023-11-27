<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<Header />
<div class="container-fluid">
  <aside>
    <h3>Admin</h3>
    <nav>
      <ul>
        <li><a href="/admin">Home</a></li>
        <li><a href="/admin/current">Current Words</a></li>
        <li><a href="/admin/add_new">Add Words</a></li>
      </ul>
    </nav>
  </aside>
  <main>
    <slot />
  </main>
</div>
<Footer />

<style>
  .container-fluid {
    display: flex;
    height: 100%;
  }
  aside {
    width: 20%;
    background-color: #f0f0f0;
    color: #414141;
    padding: 1rem;
    flex-grow: 1;
  }

  main {
    width: 80%;
    padding: 1rem;
    flex-grow: 1;
  }

  li {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }

  li:first-child {
    border-top: 1px solid #ccc;
  }
</style>
