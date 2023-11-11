<script lang="ts">
  import type RedWord from '$lib/types/RedWord';
  export let redword: RedWord;
</script>

<article>
  <header>Word to read</header>
  <div class="redword">
    {redword.word}
  </div>
  <footer>Level: {redword.level.replaceAll('_', ' ').toUpperCase()}</footer>
</article>

<style>
  article {
    width: 60%;
    height: 100%;
  }
  header {
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
  }
  footer {
    display: flex;
    justify-content: flex-end;
    font-style: italic;
    text-align: left;
  }

  .redword {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
</style>
