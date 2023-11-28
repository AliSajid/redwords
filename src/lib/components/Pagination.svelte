<script lang="ts">
  export let itemCount: number;
  export let itemsPerPage: number = 10;
  export let level: string | null;
  let levelEmpty = level === null || level === '';

  const pageCount = Math.ceil(itemCount / itemsPerPage);
</script>

<ul>
  {#each Array(pageCount) as _, index (index)}
    <li>
      {#if levelEmpty}
        <a href="?level=&offset={index * itemsPerPage}">
          {index + 1}
        </a>
      {:else}
        <a href="?level={level}&offset={index * itemsPerPage}">
          {index + 1}
        </a>
      {/if}
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  li {
    margin: 0.5rem;
    padding: 1rem;
    border: 0.5pt solid grey;
    border-radius: 0.5rem;
    list-style-type: none;
  }
</style>
