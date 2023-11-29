<script lang="ts">
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';
  import DeleteWordButton from './DeleteWordButton.svelte';
  import SpeakerOn from '~icons/game-icons/speaker';
  import SpeakerOff from '~icons/game-icons/speaker-off';
  export let row: PrismaRedWordResult;
</script>

<article>
  <header>Word Details</header>
  <div id="wordDetail">
    <div class="redword">
      {row.word}
    </div>
    <div class="audio">
      {#if row.audioAvailable}
        <SpeakerOn />
        <p>{row.audioCount} / 10</p>
      {:else}
        <SpeakerOff />
        <p>{row.audioCount} / 10</p>
      {/if}
    </div>
  </div>
  <footer>
    <span id="levelIndicator">Level: {row.levelDisplayName}</span>
    <div><DeleteWordButton {row} /></div>
  </footer>
</article>

<style>
  header {
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: italic;
    text-align: left;
  }

  #wordDetail {
    display: flex;
  }

  .redword {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    width: 50%;
  }

  .audio {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    width: 50%;
  }
</style>
