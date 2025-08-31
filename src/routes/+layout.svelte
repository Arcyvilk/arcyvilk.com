<script lang="ts">
  import type { DesktopIconId, DesktopIconProps } from '$lib/types/DesktopIcon'
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Desktop from '$lib/containers/Desktop.svelte'
  import Taskbar from '$lib/containers/Taskbar.svelte'
  import Window from '$lib/containers/Window.svelte'

  let { children } = $props()
  let currentWindowId: DesktopIconId | null = $state(null)

  const desktopIcons: DesktopIconProps[] = [
    {
      id: 'pc',
      icon: 'PC',
      label: 'My Computer',
      alt: 'My PC'
    },
    {
      id: 'documents',
      icon: 'Documents',
      label: 'My Documents',
      alt: 'My Documents'
    },
    {
      id: 'bin',
      icon: 'RecycleBin',
      label: 'Recycle Bin',
      alt: 'Recycle Bin'
    },
    {
      id: 'script',
      icon: 'Script',
      label: 'Completely harmless file, there is nothing to worry about',
      alt: 'Completely harmless file'
    }
  ]

  const openWindow = (id: DesktopIconId): void => {
    currentWindowId = id
  }

  const onWindowClose = (): void => {
    currentWindowId = null
  }
</script>

<Desktop>
  <div class="flex flex-grow flex-col flex-wrap content-start gap-4 overflow-hidden p-4">
    {#each desktopIcons as desktopIcon}
      <DesktopIcon {...desktopIcon} ondblclick={() => openWindow(desktopIcon.id)} />
    {/each}
  </div>

  <Window {currentWindowId} onclose={onWindowClose}>
    {#snippet content()}
      <span>{currentWindowId}</span>
    {/snippet}
  </Window>

  {@render children()}

  <Taskbar />
</Desktop>
