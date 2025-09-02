<script lang="ts">
  import { type Snippet, onMount } from 'svelte'
  import { gsap } from 'gsap'
  import { draggable } from '@neodrag/svelte'
  import Button from '$lib/components/Button.svelte'
  import Image from '$lib/components/Image.svelte'
  import { desktopIcons, type DesktopIconId, type DesktopIconProps } from '$lib/data/desktopIcons'

  type WindowProps = {
    windowId: DesktopIconId
    originCoords?: { x: number; y: number }
    content: Snippet
    onclick: () => void
    onclose: () => void
  } & Partial<HTMLDialogElement>

  let {
    windowId,
    originCoords = { x: 0, y: 0 },
    open,
    content,
    onclick,
    onclose
  }: WindowProps = $props()

  let dialog: HTMLDialogElement | undefined = $state()
  let windowData: DesktopIconProps | undefined = $state(
    desktopIcons.find((icon) => icon.id === windowId)
  )

  const handleWindowClose = () => {
    dialog?.close()
  }

  onMount(() => {
    if (dialog) {
      const centerX = window.innerWidth / 2 - dialog.offsetWidth / 2
      const centerY = window.innerHeight / 2 - dialog.offsetHeight / 2

      gsap.fromTo(
        dialog,
        {
          opacity: 0.5,
          scale: 0.1,
          x: originCoords.x,
          y: originCoords.y
        },
        {
          opacity: 1,
          scale: 1,
          x: centerX,
          y: centerY,
          duration: 0.4,
          ease: 'power2-out'
        }
      )
    }
  })
</script>

<dialog
  class="fixed"
  {open}
  use:draggable={{ bounds: 'parent' }}
  bind:this={dialog}
  {onclose}
  {onclick}
>
  <div class="window-border bg-window-bg max-w-[80vw]">
    <header class="bg-window-header-bg flex cursor-move items-center justify-between gap-8 p-1">
      <div class="flex items-center gap-2 overflow-hidden">
        {#if windowData?.icon}
          <Image image={windowData.icon} alt="" className="h-6 w-6 aspect-square" />
        {/if}

        {#if windowData?.label}
          <h2 class="text-foreground-text truncate text-base/4 font-semibold">
            {windowData.label}
          </h2>
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
