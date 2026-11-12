<script lang="ts">
  import type { Snippet } from 'svelte';

  type Column = {
    key: string;
    title: string;
    value?: (row: any) => unknown;
  };

  let {
    rows,
    columns,
    rowKey,
    showExpandIcon = false,
    expandSingle = false,
    expanded,
  }: {
    rows: any[];
    columns: Column[];
    rowKey: string;
    showExpandIcon?: boolean;
    expandSingle?: boolean;
    expanded?: Snippet<[{ row: any }]>;
  } = $props();

  let open = $state<unknown[]>([]);

  const hasIcon = $derived(showExpandIcon && !!expanded);
  const colspan = $derived(columns.length + (hasIcon ? 1 : 0));

  function toggle(key: unknown) {
    if (!expanded) return;
    if (open.includes(key)) {
      open = open.filter((k) => k !== key);
    } else {
      open = expandSingle ? [key] : [...open, key];
    }
  }
</script>

<table>
  <thead>
    <tr>
      {#if hasIcon}
        <th scope="col" aria-label="Expand"></th>
      {/if}
      {#each columns as column (column.key)}
        <th scope="col">{column.title}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row (row[rowKey])}
      {@const isOpen = open.includes(row[rowKey])}
      <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
      <tr class:open={isOpen} class:expandable={!!expanded} onclick={() => toggle(row[rowKey])}>
        {#if hasIcon}
          <td class="icon">
            <button type="button" aria-expanded={isOpen} aria-label={isOpen ? 'Collapse row' : 'Expand row'}>
              <span class="chevron" aria-hidden="true">▸</span>
            </button>
          </td>
        {/if}
        {#each columns as column (column.key)}
          <td>{column.value ? column.value(row) : row[column.key]}</td>
        {/each}
      </tr>
      {#if isOpen && expanded}
        <tr class="detail">
          <td {colspan}>
            {@render expanded({ row })}
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>
