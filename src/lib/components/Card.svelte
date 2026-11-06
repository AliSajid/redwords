<script lang="ts">
  import type RedWord from '$lib/types/RedWord';
  import SpeakerOn from '~icons/game-icons/speaker';

  interface Props {
    redword: RedWord;
  }

  let { redword }: Props = $props();

  let audioUrl = $derived(redword.audioUrl);

  const playAudio = () => {
    const audio: HTMLAudioElement = new Audio(audioUrl);
    console.log(audio);
    audio.play();
  };
</script>

<article>
  <header>Word to read</header>
  <div class="redword">
    {redword.word}
  </div>
  <div id="speaker" role="button" onclick={playAudio} tabindex="0" onkeypress={playAudio}><SpeakerOn /></div>
  <footer>Level: {redword.level}</footer>
</article>

<style>
  article {
    width: 60%;
    height: auto;
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

  #speaker {
    display: flex;
    font-size: 3rem;
    justify-content: center;
    width: 20%;
  }
</style>
