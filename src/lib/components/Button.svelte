<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'

  interface ButtonProps extends HTMLButtonAttributes {
    label: string
  }
  let allProps: ButtonProps = $props()

  const { label, ...rest } = allProps
</script>

<button
  class="button-border bg-accent-bg text-accent-text cursor-pointer px-3 py-1 font-bold shadow-lg"
  {...rest}>{label}</button
>

<style>
  .button-border {
    border-width: 4px;
    border-style: ridge;

    border-top-color: var(--color-highlight-bg);
    border-left-color: var(--color-highlight-bg);
    border-bottom-color: var(--color-shadow-bg);
    border-right-color: var(--color-shadow-bg);

    &:active {
      border-top-color: var(--color-shadow-bg);
      border-left-color: var(--color-shadow-bg);
      border-bottom-color: var(--color-highlight-bg);
      border-right-color: var(--color-highlight-bg);
    }
  }
</style>
