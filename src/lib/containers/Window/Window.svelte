<script lang="ts">
  import { onMount, type Component } from 'svelte'
  import { portal } from 'svelte-portal'
  import { gsap } from 'gsap'
  import { v4 as uuid } from 'uuid'
  import Button from '$lib/components/Button.svelte'
  import Image from '$lib/components/Image.svelte'
  import type { TImage } from '$lib/assets'
  import { enableDragging } from '$lib/utils'

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

  onMount(() => {
    enableDragging({
      elementId,
      bounds: '.dialog-container',
      trigger: `#${elementHandleId}`
    })
  })

  const resizeWindow = () => {
    if (!dialog) return

    if (isFullscreen) {
      isFullscreen = false

      const centerX = window.innerWidth / 2 - dialog.offsetWidth / 2
      const centerY = window.innerHeight / 2 - dialog.offsetHeight / 2

      gsap.to(dialog, {
        x: centerX,
        y: centerY,
        duration: 0.4,
        ease: 'power2-out'
      })
    } else {
      isFullscreen = true

      gsap.to(dialog, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'power2-out'
      })
    }
  }

  const initialWindowOpen = () => {
    if (!dialog) return

    const centerX = window.innerWidth / 2 - dialog.offsetWidth / 2
    const centerY = window.innerHeight / 2 - dialog.offsetHeight / 2

    gsap.fromTo(
      dialog,
      {
        opacity: 0.5,
        scale: 0.01,
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

  onMount(() => {
    initialWindowOpen()
  })
</script>

{#if open}
  <dialog
    open={true}
    class="absolute"
    id={elementId}
    bind:this={dialog}
    use:portal={'.dialog-container'}
    onclose={onWindowClose}
    onclick={onWindowClick}
  >
    <div
      class="window-border window-size-transition {isFullscreen
        ? 'fullscreen'
        : 'nonfullscreen'} bg-window-bg box-border flex size-fit flex-col"
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
    </div>
  </dialog>
{/if}

<style scoped>
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
      max-width 0.4s ease,
      height 0.4s ease,
      max-height 0.4s ease;
  }

  .window-size-transition.fullscreen {
    height: 95vh;
    width: 100vw;
  }
  .window-size-transition.nonfullscreen {
    /* height: auto; */
    max-height: 90vh;
    max-width: 90vw;
  }
</style>
