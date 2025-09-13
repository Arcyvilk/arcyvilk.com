<script lang="ts">
  import { onMount, type Component } from 'svelte'
  import { portal } from 'svelte-portal'
  import { gsap } from 'gsap'
  import { v4 as uuid } from 'uuid'
  import Button from '$lib/components/Button.svelte'
  import Image from '$lib/components/Image.svelte'
  import type { TImage } from '$lib/assets'
  import { enableDragging } from '$lib/utils'

  const RESIZE_DURATION = 0.4
  const GSAP_EASE = undefined

  type WindowProps<T extends Record<string, unknown>> = {
    WindowContent?: Component<{ args?: T }>
    windowArgs?: T
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
    icon,
    label,
    open,
    originCoords = { x: 0, y: 0 },
    onWindowClick,
    onWindowClose
  }: WindowProps<any> = $props()

  let dialog: HTMLDialogElement | undefined = $state()
  let elementId = `window-dialog-${uuid()}`
  let elementHandleId = `window-drag-${uuid()}`
  let isFullscreen = $state(false)
  let originalSize = $state({ w: 0, h: 0 })

  onMount(() => {
    initialWindowOpen()

    enableDragging({
      elementId,
      bounds: '.dialog-container',
      trigger: `#${elementHandleId}`
    })
  })

  const initialWindowOpen = () => {
    if (!dialog) return

    const parent = dialog.parentElement
    const parentWidth = parent?.offsetWidth ?? window.innerWidth
    const parentHeight = parent?.offsetHeight ?? window.innerHeight

    setDialogMaxSize()

    originalSize = { w: dialog.offsetWidth, h: dialog.offsetHeight }

    const finalX = (parentWidth - dialog.offsetWidth) / 2
    const finalY = (parentHeight - dialog.offsetHeight) / 2

    gsap
      .fromTo(
        dialog,
        {
          opacity: 0.1,
          scale: 0.1,
          transformOrigin: '0 0',
          x: originCoords.x,
          y: originCoords.y
        },
        {
          opacity: 1,
          scale: 1,
          x: finalX,
          y: finalY,
          duration: RESIZE_DURATION,
          ease: GSAP_EASE
        }
      )
      .then(() => setDialogOriginalSize())
  }

  const resizeWindow = () => {
    if (isFullscreen) {
      resizeToNormalSize()
    } else {
      resizeToFullscreen()
    }
  }

  const resizeToNormalSize = () => {
    if (!dialog) return

    const parent = dialog.parentElement
    const parentWidth = parent?.offsetWidth ?? window.innerWidth
    const parentHeight = parent?.offsetHeight ?? window.innerHeight

    const finalX = (parentWidth - originalSize.w) / 2
    const finalY = (parentHeight - originalSize.h) / 2

    isFullscreen = false

    setDialogOriginalSize()

    gsap
      .to(dialog, {
        transformOrigin: '0 0',
        x: finalX,
        y: finalY,
        duration: RESIZE_DURATION,
        ease: GSAP_EASE
      })
      .then(() => setDialogMaxSize())
  }

  const resizeToFullscreen = () => {
    if (!dialog) return

    isFullscreen = true

    setDialogFullScreen()

    gsap.to(dialog, {
      transformOrigin: '0 0',
      x: 0,
      y: 0,
      duration: RESIZE_DURATION,
      ease: GSAP_EASE
    })
  }

  const setDialogOriginalSize = () => {
    if (dialog) {
      dialog.style.width = `${originalSize.w}px`
      dialog.style.height = `${originalSize.h}px`
    }
  }

  const setDialogMaxSize = () => {
    if (dialog) {
      dialog.style.maxWidth = '90%'
      dialog.style.maxHeight = '90%'
    }
  }

  const setDialogFullScreen = () => {
    if (dialog) {
      dialog.style.width = '100%'
      dialog.style.height = '100%'
      dialog.style.maxWidth = 'unset'
      dialog.style.maxHeight = 'unset'
    }
  }
</script>

{#if open}
  <dialog
    open={true}
    class="window-border window-size-transition bg-window-bg absolute top-0 left-0 box-border flex size-fit flex-col"
    id={elementId}
    bind:this={dialog}
    use:portal={'.dialog-container'}
    onclose={onWindowClose}
    onclick={onWindowClick}
  >
    <header
      id={elementHandleId}
      class="bg-window-header-bg flex cursor-move items-center justify-between gap-8 p-1"
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

      <div class="flex gap-1">
        <Button square onclick={resizeWindow}>
          {#snippet label()}
            <span class="flex h-[16px] w-[20px] items-center justify-center text-sm/3">▢</span>
          {/snippet}
        </Button>

        <Button square onclick={onWindowClose}>
          {#snippet label()}
            <span class="flex h-[16px] w-[20px] items-center justify-center text-sm/3">✕</span>
          {/snippet}
        </Button>
      </div>
    </header>

    {#if WindowContent}
      <div class="box-border flex h-full w-full flex-1 flex-col overflow-hidden">
        <WindowContent args={windowArgs}></WindowContent>
      </div>
    {/if}
  </dialog>
{/if}

<style>
  .window-border {
    border-width: 4px;
    border-style: ridge;

    border-top-color: var(--color-highlight-bg);
    border-left-color: var(--color-highlight-bg);
    border-bottom-color: var(--color-shadow-bg);
    border-right-color: var(--color-shadow-bg);
  }

  .window-size-transition {
    transition:
      width 0.4s ease,
      height 0.4s ease;
  }
</style>
