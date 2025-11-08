<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLButtonAttributes } from 'svelte/elements'

  interface ButtonProps extends HTMLButtonAttributes {
    label: Snippet
    square?: boolean
    className?: string
  }
  let allProps: ButtonProps = $props()

  const { label, square, className, ...rest } = allProps
</script>

<button class="button {square ? 'button--square' : ''} {className ? className : ''}" {...rest}>
  {@render label()}
</button>

<style>
  .button {
    background-color: var(--color-accent-bg);
    color: var(--color-accent-text);
    cursor: pointer;
    font-weight: bold;
    padding-inline: 8px;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);

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

  .button--square {
    aspect-ratio: 1/1;
    padding-inline: 0px;
  }
</style>
