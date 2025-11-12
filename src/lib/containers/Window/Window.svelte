<script lang="ts">
  import { onMount, type Component } from 'svelte'
  import { portal } from 'svelte-portal'
  import { gsap } from 'gsap'
  import { v4 as uuid } from 'uuid'
  import Button from '$lib/components/Button.svelte'
  import Image from '$lib/components/Image.svelte'
  import type { TImage } from '$lib/assets'
  import { enableDragging } from '$lib/utils'

  const RESIZE_DURATION = 0.2
  const GSAP_EASE = undefined

  type WindowProps<T extends Record<string, unknown>> = {
    WindowContent?: Component<{ args?: T }>
    windowArgs?: T
    icon?: TImage
    label?: string
    originCoords?: { x: number; y: number }
    onWindowClick: () => void
    onWindowClose: () => void
  } & Partial<HTMLDialogElement>

  let {
    WindowContent,
    windowArgs,
    icon,
    label,
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
      bounds: '.__dialog_container_gsap_helper',
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

    dialog.style.height = 'auto'

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

<dialog
  class="window"
  id={elementId}
  bind:this={dialog}
  use:portal={'.__dialog_container_gsap_helper'}
  onclose={onWindowClose}
  onclick={onWindowClick}
>
  <header id={elementHandleId} class="window__titlebar">
    <div class="window__titlebar--start">
      {#if icon}
        <Image image={icon} h="24px" w="24px" alt="" />
      {/if}

      {#if label}
        <h2 class="window__title">
          {label}
        </h2>
      {/if}
    </div>

    <div class="window__titlebar--end">
      <Button square onclick={resizeWindow} aria-label="Toggle fullscreen">
        {#snippet label()}
          <span class="window__button">▢</span>
        {/snippet}
      </Button>

      <Button square onclick={onWindowClose} aria-label="Close window">
        {#snippet label()}
          <span class="window__button">✕</span>
        {/snippet}
      </Button>
    </div>
  </header>

  {#if WindowContent}
    <div class="window__content">
      <WindowContent args={windowArgs}></WindowContent>
    </div>
  {/if}
</dialog>

<style>
  .window {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--color-window-bg);

    border-width: 4px;
    border-style: ridge;

    border-top-color: var(--color-highlight-bg);
    border-left-color: var(--color-highlight-bg);
    border-bottom-color: var(--color-shadow-bg);
    border-right-color: var(--color-shadow-bg);

    width: fit-content;
    height: auto;

    transition:
      width 0.2s ease,
      height 0.2s ease;
  }

  .window__titlebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    padding: 4px;

    background-color: var(--theme-window-header-bg);
    cursor: move;
  }

  .window__titlebar--start {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .window__titlebar--end {
    display: flex;
    gap: 4px;
  }

  .window__title {
    color: var(--color-foreground-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-size: 16px;
  }

  .window__button {
    display: flex;
    height: 16px;
    width: 20px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .window__content {
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: 100%;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  }
</style>
