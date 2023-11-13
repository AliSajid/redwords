<script lang="ts">
  import type { PageData, PageServerData } from './$types';

  export let data: PageData;
</script>

<h1>Welcome to Red Word Practice</h1>

<p>Your selected level is: {data.level}</p>
<p>Your selected number of words is: {data.number}</p>
