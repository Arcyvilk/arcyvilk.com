<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import type { DesktopIconId } from '$lib/types/DesktopIcon'
  import type { Snippet } from 'svelte'

  type WindowProps = {
    content: Snippet
    currentWindowId: DesktopIconId | null
    windowTitle: string
    onclose: () => void
  } & Partial<HTMLDialogElement>

  let { content, currentWindowId = $bindable(), windowTitle, onclose }: WindowProps = $props()

  let dialog: HTMLDialogElement | undefined = $state()

  const handleWindowClose = () => {
    onclose()
    dialog?.close()
  }

  $effect(() => {
    if (currentWindowId) {
      dialog?.show()
    }
  })
</script>

<dialog
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  bind:this={dialog}
  onclose={handleWindowClose}
>
  <div class="window-border bg-window-bg min-w-[80vw]">
    <header class="bg-window-header-bg flex items-center justify-between p-1">
      <h2 class="text-foreground-text text-base/4 font-semibold">{windowTitle}</h2>
      <Button square onclick={handleWindowClose}
        >{#snippet label()}<span
            class="flex h-[16px] w-[20px] items-center justify-center text-sm/3">✕</span
          >{/snippet}</Button
      >
    </header>

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
