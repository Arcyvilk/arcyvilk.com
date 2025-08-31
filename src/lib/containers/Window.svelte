<script lang="ts">
  import type { Snippet } from 'svelte'

  type WindowProps = {
    children: Snippet
    showWindow: boolean
  }

  let { children, showWindow = $bindable() }: WindowProps = $props()

  let dialog: HTMLDialogElement | undefined = $state()

  $effect(() => {
    if (dialog && showWindow) {
      dialog.showModal()
    }
  })
</script>

<dialog
  class="window-border h-5-6 bg-window-bg w-5/6"
  bind:this={dialog}
  onclose={() => (showWindow = false)}
>
  {@render children()}
</dialog>

<style>
  .window-border {
    border-width: 4px;
    border-style: ridge;

    border-top-color: var(--color-highlight-bg);
    border-left-color: var(--color-highlight-bg);
    border-bottom-color: var(--color-shadow-bg);
    border-right-color: var(--color-shadow-bg);
  }
</style>
