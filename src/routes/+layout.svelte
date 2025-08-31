<script lang="ts">
  import { desktopIcons, type DesktopIconId } from '$lib/data/desktopIcons'
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Desktop from '$lib/containers/Desktop.svelte'
  import Taskbar from '$lib/containers/Taskbar.svelte'
  import Window from '$lib/containers/Window.svelte'

  let { children } = $props()
  let currentWindowId: DesktopIconId | null = $state(null)

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
      {#if desktopIcon.hidden === false}
        <DesktopIcon {...desktopIcon} ondblclick={() => openWindow(desktopIcon.id)} />
      {/if}
    {/each}
  </div>

  <Window
    window={desktopIcons.find((icon) => icon.id === currentWindowId) ?? null}
    onclose={onWindowClose}
  >
    {#snippet content()}
      <span>{currentWindowId}</span>
    {/snippet}
  </Window>

  {@render children()}

  <Taskbar />
</Desktop>
