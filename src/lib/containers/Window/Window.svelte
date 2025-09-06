<script lang="ts">
  import { type Component, type Snippet } from 'svelte'
  import { gsap } from 'gsap'
  import { draggable } from '@neodrag/svelte'
  import Button from '$lib/components/Button.svelte'
  import Image from '$lib/components/Image.svelte'
  import type { TImage } from '$lib/assets'

  type WindowProps = {
    DynamicContent: Component
    icon?: TImage
    iframe?: string
    label?: string
    open: boolean
    originCoords?: { x: number; y: number }
    onWindowClick: () => void
    onWindowClose: () => void
  } & Partial<HTMLDialogElement>

  let {
    DynamicContent,
    icon,
    label,
    open,
    originCoords = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    onWindowClick,
    onWindowClose
  }: WindowProps = $props()

  let dialog: HTMLDialogElement | undefined = $state()

  const handleWindowClose = () => {
    dialog?.close()
    onWindowClose()
  }

  $effect(() => {
    if (!dialog) return

    if (open && !dialog.open) dialog?.show()
    else if (!open && dialog.open) handleWindowClose()
  })

  $inspect(open)

  $effect(() => {
    if (!open || !dialog) return

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
  })
</script>

<dialog
  class="fixed"
  bind:this={dialog}
  use:draggable={{ bounds: 'parent' }}
  onclose={onWindowClose}
  onclick={onWindowClick}
>
  <div
    class="window-border bg-window-bg box-border flex size-fit h-auto max-h-[90vh] max-w-[90vw] flex-col"
  >
    <header class="bg-window-header-bg flex cursor-move items-center justify-between gap-8 p-1">
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

    <DynamicContent></DynamicContent>
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
