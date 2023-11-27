<script lang="ts">
  import { goto } from '$app/navigation';
  import wordLevelMapping from '$lib/utils/WordLevelMapping';

  const wordNumOptions: number[] = [5, 10];
  const levels: string[] = ['kindergarten', 'first_grade'];
  let levelChosen: boolean;
  let questionNumChosen: boolean;
  let level: string;
  let questionNum: number;

  /**
   * Handles the level selection event.
   * @param event - The event triggered by clicking a level button.
   */
  function handleLevel(event: Event) {
    levelChosen = true;
    const levelText = (event.target as HTMLButtonElement).innerText;
    level = wordLevelMapping[levelText as keyof typeof wordLevelMapping];
  }

  /**
   * Handles the question number selection event.
   * @param event - The event triggered by clicking a question button.
   */
  function handleQuestionNum(event: Event): void {
    questionNumChosen = true;
    questionNum = parseInt((event.target as HTMLButtonElement).innerText);
  }
</script>

<h1>Welcome to Red Word Practice</h1>

{#if !levelChosen}
  <h2>Choose a level</h2>
  {#each levels as level}
    <button on:click={handleLevel}>{level}</button>
  {/each}
{/if}

{#if levelChosen && !questionNumChosen}
  <h2>Choose the number of questions</h2>
  <h3>Level: {level}</h3>
  {#each wordNumOptions as num}
    <button on:click={handleQuestionNum}>{num}</button>
  {/each}
{/if}

{#if levelChosen && questionNumChosen}
  <h2>Start the test</h2>
  <h3>Level: {level}</h3>
  <h3>Number of words: {questionNum}</h3>
  <button on:click={() => goto(`/${level}/${questionNum}`)}>Start</button>
{/if}
