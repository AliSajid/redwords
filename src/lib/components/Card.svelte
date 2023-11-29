<script lang="ts">
  import type RedWord from '$lib/types/RedWord';
  import SpeakerOn from '~icons/game-icons/speaker';

  export let redword: RedWord;

  $: audioUrl = redword.audioUrl;

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
<<<<<<< HEAD
  <div id="speaker" role="button" on:click={playAudio} tabindex="0" on:keypress={playAudio}><SpeakerOn /></div>
=======
  <div id="speaker"><SpeakerOn /></div>
>>>>>>> e3aba23 (feat: add speaker Icon to the card)
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
<<<<<<< HEAD
    justify-content: center;
    width: 20%;
=======
    justify-content: end;
>>>>>>> e3aba23 (feat: add speaker Icon to the card)
  }
</style>
