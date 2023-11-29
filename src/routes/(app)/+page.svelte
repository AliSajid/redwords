<script lang="ts">
  import { goto } from '$app/navigation';

  let level: string;
  let questionNum: number;
  let loading = false;

  /**
   * Navigates to the next page.
   */
  function navigate() {
    loading = true;
    goto(`/${level}/${questionNum}`);
  }
</script>

<div id="questionsMain">
  <p>
    Welcome to this small app that helps you learn to read words by sight. You can use the form below to select the
    level and the number of words you need to practice. Once you are ready, click the start button to begin the practice
    session.
  </p>

  <form>
    <label for="level">Level</label>
    <select id="level" name="level" bind:value={level}>
      <option value="KG">Kindergarten</option>
      <option value="GR1">First Grade</option>
    </select>
    <label for="number">Number of words</label>
    <select id="numberQuestions" name="numberQuestions" bind:value={questionNum}>
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
    <button type="submit" on:click|preventDefault={navigate} disabled={loading} aria-busy={loading}>Start</button>
  </form>
</div>

<style>
  form {
    align-items: center;
    width: 50%;
  }

  form > * {
    margin: 1rem;
  }

  p {
    margin: 1rem;
    width: 50%;
  }

  #questionsMain {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
