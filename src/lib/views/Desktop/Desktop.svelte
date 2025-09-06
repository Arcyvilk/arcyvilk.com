<script lang="ts">
  import { fade } from 'svelte/transition'
  import { desktopIcons, type DesktopIconId } from '$lib/data/desktopIcons'
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Taskbar from '$lib/views/Desktop/Taskbar.svelte'
  import Window from '$lib/containers/Window/Window.svelte'

  let { children } = $props()
  let openWindowIds: DesktopIconId[] = $state([])
  let clickCoords: { x: number; y: number } = $state({ x: 0, y: 0 })

  $inspect(openWindowIds)

  const openWindow = (event: MouseEvent, id: DesktopIconId): void => {
    // TODO: when user tries to open window which is already opened,
    // bring it to the top of the page
    if (openWindowIds.includes(id)) return
    clickCoords = { x: event.clientX, y: event.clientY }
    openWindowIds.push(id)
  }

  const onWindowClose = (id: DesktopIconId): void => {
    openWindowIds = openWindowIds.filter((windowId) => windowId !== id)
  }

  const onWindowClick = (id: DesktopIconId): void => {
    // TODO: Bring to front on click!
  }
</script>

<div
  transition:fade={{ duration: 300 }}
  class="bg-desktop-bg text-background-text flex h-screen flex-col overflow-hidden"
>
  <div class="flex flex-grow flex-col flex-wrap content-start gap-4 overflow-hidden p-4">
    {#each desktopIcons as desktopIcon}
      {#if !desktopIcon.hidden}
        <DesktopIcon
          {...desktopIcon}
          ondblclick={(event: MouseEvent) => {
            openWindow(event, desktopIcon.id)
          }}
        />
      {/if}
    {/each}
  </div>

  {#each desktopIcons as { DynamicContent, id, icon, label } (id)}
    <Window
      {DynamicContent}
      {icon}
      {label}
      open={openWindowIds.includes(id)}
      originCoords={clickCoords}
      onWindowClick={() => onWindowClick(id)}
      onWindowClose={() => onWindowClose(id)}
    />
  {/each}

  {@render children()}

  <Taskbar {openWindowIds} />
</div>
