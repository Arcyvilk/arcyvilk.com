<script lang="ts">
  import { type Component } from 'svelte'
  import { portal } from 'svelte-portal'
  import { gsap } from 'gsap'
  import { draggable } from '@neodrag/svelte'
  import Button from '$lib/components/Button.svelte'
  import Image from '$lib/components/Image.svelte'
  import type { TImage } from '$lib/assets'

  type WindowProps<T extends Record<string, unknown>> = {
    WindowContent?: Component<{ args?: T }>
    windowArgs?: T
    fullscreen?: boolean
    icon?: TImage
    label?: string
    open: boolean
    originCoords?: { x: number; y: number }
    onWindowClick: () => void
    onWindowClose: () => void
  } & Partial<HTMLDialogElement>

  let {
    WindowContent,
    windowArgs,
    fullscreen = false,
    icon,
    label,
    open,
    originCoords = { x: 0, y: 0 },
    onWindowClick,
    onWindowClose
  }: WindowProps<any> = $props()

  let dialog: HTMLDialogElement | undefined = $state()

  const handleWindowClose = () => {
    dialog?.close()
    onWindowClose()
  }

  $effect(() => {
    if (open && !dialog?.open) dialog?.show()
    else if (!open && dialog?.open) handleWindowClose()
  })

  $effect(() => {
    if (!open || !dialog) return

    const centerX = fullscreen ? 0 : window.innerWidth / 2 - dialog.offsetWidth / 2
    const centerY = fullscreen ? 0 : window.innerHeight / 2 - dialog.offsetHeight / 2

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
  })
</script>

<dialog
  class="absolute top-0 left-0"
  bind:this={dialog}
  use:portal={'.dialog-container'}
  use:draggable={{ bounds: 'parent', handle: '.window-drag-handle' }}
  onclose={onWindowClose}
  onclick={onWindowClick}
>
  <div
    class="window-border bg-window-bg box-border flex size-fit h-auto {fullscreen
      ? 'max-h-[95vh] max-w-[100vw]'
      : 'max-h-[90vh] max-w-[90vw]'} flex-col"
  >
    <header
      class="window-drag-handle bg-window-header-bg flex cursor-move items-center justify-between gap-8 p-1"
    >
      <div class="flex items-center gap-2">
        {#if icon}
          <Image image={icon} alt="" className="h-6 w-6 aspect-square" />
        {/if}

        {#if label}
          <h2 class="text-foreground-text truncate text-base/4 font-semibold">
            {label}
          </h2>
        {/if}
      </div>

      <Button square onclick={handleWindowClose}>
        {#snippet label()}
          <span class="flex h-[16px] w-[20px] items-center justify-center text-sm/3">✕</span>
        {/snippet}
      </Button>
    </header>

    {#if WindowContent}
      <WindowContent args={windowArgs}></WindowContent>
    {/if}
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
