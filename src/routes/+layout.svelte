<script lang="ts">
  import { desktopIcons, type DesktopIconId } from '$lib/data/desktopIcons'
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Desktop from '$lib/containers/Desktop.svelte'
  import Taskbar from '$lib/containers/Taskbar.svelte'
  import Window from '$lib/containers/Window.svelte'

  let { children } = $props()
  let openWindowIds: DesktopIconId[] = $state([])
  let clickCoords: { x: number; y: number } = $state({ x: 0, y: 0 })

  const openWindow = (id: DesktopIconId, event: MouseEvent): void => {
    clickCoords = { x: event.clientX, y: event.clientY }
    // TODO: whenuser tries to open window which is already opened,
    // bring it to the top of the page
    if (openWindowIds.includes(id)) return
    openWindowIds.push(id)
  }

  const onWindowClose = (id: DesktopIconId): void => {
    openWindowIds = openWindowIds.filter((windowId) => windowId !== id)
  }

  const onWindowClick = (id: DesktopIconId): void => {
    // TODO: Bring to front on click!
  }
</script>

<Desktop>
  <div class="flex flex-grow flex-col flex-wrap content-start gap-4 overflow-hidden p-4">
    {#each desktopIcons as desktopIcon}
      {#if !desktopIcon.hidden}
        <DesktopIcon
          {...desktopIcon}
          ondblclick={(event: MouseEvent) => openWindow(desktopIcon.id, event)}
        />
      {/if}
    {/each}
  </div>

  {#each openWindowIds as windowId}
    <Window
      {clickCoords}
      {windowId}
      onclick={() => onWindowClick(windowId)}
      onclose={() => onWindowClose(windowId)}
    >
      {#snippet content()}
        <span>{windowId}</span>
      {/snippet}
    </Window>
  {/each}

  {@render children()}

  <Taskbar {openWindowIds} />
</Desktop>
