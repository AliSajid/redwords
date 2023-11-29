<script lang="ts">
  import { enhance } from '$app/forms';

  let creating = false;
  let value = '';
</script>

<h1>Add New Word</h1>

<form
  method="POST"
  use:enhance={() => {
    creating = true;

    return async ({ update }) => {
      creating = false;
      await update();
    };
  }}
>
  <label for="word">Word</label>
  <input type="text" name="word" id="word" required />

  <label for="level">Word Level</label>
  <select name="wordLevel" id="wordLevel" bind:value>
    <option value="KG">Kindergarten</option>
    <option value="GR1">First Grade</option>
    <option value="GR2">Second Grade</option>
    <option value="GR3">Third Grade</option>
    <option value="HIGH">Higher Grades</option>
  </select>

  <button type="submit" disabled={creating} aria-busy={creating} class:secondary={creating}>Add Word</button>
</form>
