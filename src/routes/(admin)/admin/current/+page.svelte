<script lang="ts">
  import type { PageData } from './$types';
  import IconCheckOutline from '~icons/mdi/check-outline';
  import IconCrossMark from '~icons/openmoji/cross-mark';

  export let data: PageData;
</script>

<table role="grid">
  <thead>
    <tr>
      <th scope="col">Word</th>
      <th scope="col">Level</th>
      <th scope="col">Audio Available</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each data.words as word}
      <tr>
        <td>{word.word}</td>
        <td>{word.level_display_name}</td>
        <td
          >{#if word.audio_available}
            <IconCheckOutline style="font-size: 3em; color: green" />
          {:else}
            <IconCrossMark style="font-size: 4em" />
          {/if}
        </td>
        <td>
          <div class="container-fluid" id="buttons">
            <button type="button" on:click={() => {}} id="edit" class="secondary">Edit</button>
            <button type="button" on:click={() => {}} id="delete">Delete</button>
          </div>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  button {
    margin: 0.5rem;
    width: 40%;
  }

  #buttons {
    display: flex;
  }

  #delete {
    background-color: maroon;
    border-color: maroon;
  }
</style>
