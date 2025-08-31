<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLButtonAttributes } from 'svelte/elements'

  interface ButtonProps extends HTMLButtonAttributes {
    label: Snippet
    square?: boolean
    className?:string
  }
  let allProps: ButtonProps = $props()

  const { label, square, className, ...rest } = allProps
</script>

<button
  class="button-border bg-accent-bg text-accent-text cursor-pointer font-bold shadow-lg {square
    ? 'aspect-square'
    : ''} {className ? className : ''}"
  {...rest}
>
  {@render label()}
</button>

<style>
  .button-border {
    border-width: 3px;
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
