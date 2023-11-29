<script lang="ts">
  export let itemCount: number;

  const itemsPerPage: number = 10;
  const pageCount = Math.ceil(itemCount / itemsPerPage);
</script>

<ul>
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars */ -->
  {#each Array(pageCount) as _, index (index)}
    <li>
      <a href="?&offset={index * itemsPerPage}">
        {index + 1}
      </a>
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
