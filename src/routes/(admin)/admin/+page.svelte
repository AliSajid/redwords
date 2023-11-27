<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<sveltekit:head>
  <title>Admin Interface</title>
</sveltekit:head>

<h1>Admin Interface</h1>

<p>This is the admin interface allowing the addition and removal of words from the database.</p>
<p>We can also use this interface to generate audio recordings for the words.</p>

<p>You can use the navigation menu on the left to navigate to the different pages of the admin interface.</p>
<ul>
  <li>
    The
    <strong>Home</strong> page is the page you are currently on.
  </li>
  <li>
    The <strong>Current Words</strong> page allows you to view the words that are currently in the database. You can edit
    and remove words from this page.
  </li>
  <li>
    The <strong>Add Words</strong> page allows you to add new words to the database. You can either add words one at a time
    or you can upload a CSV file containing the words and their reading level.
  </li>
</ul>
