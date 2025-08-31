<script lang="ts">
  import type { DesktopIconId } from '$lib/types/DesktopIcon'
  import type { Snippet } from 'svelte'

  type WindowProps = {
    content: Snippet
    currentWindowId: DesktopIconId | null
    onclose: () => void
  } & Partial<HTMLDialogElement>

  let { content, currentWindowId = $bindable(), onclose }: WindowProps = $props()

  let dialog: HTMLDialogElement | undefined = $state()

  $effect(() => {
    if (currentWindowId) {
      dialog?.show()
    }
  })
</script>

<dialog
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  bind:this={dialog}
  {onclose}
>
  <div class="window-border bg-window-bg">
    {@render content()}
  </div>
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
