<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Image from '$lib/components/Image.svelte'
  import { desktopIcons } from '$lib/data/desktopIcons'
  import type { DesktopIconId, DesktopIconProps } from '$lib/types/DesktopIcon'
  import type { Snippet } from 'svelte'

  type WindowProps = {
    content: Snippet
    windowId: DesktopIconId
    onclose: () => void
  } & Partial<HTMLDialogElement>

  let { content, windowId, onclose }: WindowProps = $props()

  let dialog: HTMLDialogElement | undefined = $state()
  let window: DesktopIconProps | undefined = $state(
    desktopIcons.find((icon) => icon.id === windowId)
  )

  const handleWindowClose = () => {
    onclose()
    dialog?.close()
  }

  $effect(() => {
    if (window) dialog?.show()
  })
</script>

<dialog
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  bind:this={dialog}
  onclose={handleWindowClose}
>
  <div class="window-border bg-window-bg min-w-[80vw]">
    <header class="bg-window-header-bg flex items-center justify-between p-1">
      <div class="flex items-center gap-2">
        {#if window?.icon}
          <Image image={window.icon} alt="" className="h-6 w-6 aspect-square" />
        {/if}

        {#if window?.label}
          <h2 class="text-foreground-text text-base/4 font-semibold">{window.label}</h2>
        {/if}
      </div>

      <Button square onclick={handleWindowClose}>
        {#snippet label()}
          <span class="flex h-[16px] w-[20px] items-center justify-center text-sm/3">✕</span>
        {/snippet}
      </Button>
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
