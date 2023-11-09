<script lang="ts">
  export let word: string;
  export let level: string;
</script>

<article>
  <header>Word to read</header>
  {word}
  <footer>Level: {level}</footer>
</article>

<style>
  article {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem 0;
  }

  header {
    font-weight: bold;
  }

  footer {
    font-style: italic;
  }
</style>
