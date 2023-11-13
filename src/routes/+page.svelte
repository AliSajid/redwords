<script lang="ts">
  import { goto } from '$app/navigation';
  const word_options_num: number[] = [5, 10, 15, 20];
  const levels: string[] = ['kindergarten', 'first_grade'];
  let level_chosen: boolean;
  let question_num_chosen: boolean;
  let level: string;
  let question_num: number;

  // Function to run which sets the lelvel_chosen to true and captures the value of the level on button click
  function handle_levels(event: Event) {
    level_chosen = true;
    level = (event.target as HTMLButtonElement).innerText;
  }

  // Function to run which sets the question_num_chosen to true and captures the value of the number of questions on button click
  function handle_question_num(event: Event) {
    question_num_chosen = true;
    question_num = parseInt((event.target as HTMLButtonElement).innerText);
  }
</script>

<h1>Welcome to Red Word Practice</h1>

{#if !level_chosen}
  <h2>Choose a level</h2>
  {#each levels as level}
    <button on:click={handle_levels}>{level}</button>
  {/each}
{/if}

{#if level_chosen && !question_num_chosen}
  <h2>Choose the number of questions</h2>
  <h3>Level: {level}</h3>
  {#each word_options_num as num}
    <button on:click={handle_question_num}>{num}</button>
  {/each}
{/if}

{#if level_chosen && question_num_chosen}
  <h2>Start the test</h2>
  <h3>Level: {level}</h3>
  <h3>Number of words: {question_num}</h3>
  <button on:click={() => goto(`/${level}/${question_num}`)}>Start</button>
{/if}
