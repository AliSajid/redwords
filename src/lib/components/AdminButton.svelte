<script lang="ts">
  import type PrismaRedWordResult from '$lib/types/PrismaRedWordResult';

  export let row: PrismaRedWordResult;
  export let type: 'edit' | 'delete';

  function generateHref() {
    if (type === 'edit') {
      return `/admin/words/${row.id}/edit`;
    } else if (type === 'delete') {
      return `/admin/words/${row.id}/delete`;
    }
  }

  const href = generateHref();
  const label = type === 'edit' ? 'Edit' : 'Delete';
</script>

<a {href} role="button">{label}</a>
