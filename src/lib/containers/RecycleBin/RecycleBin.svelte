<script lang="ts">
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Folder from '$lib/containers/Folder/Folder.svelte'
  import Window from '$lib/containers/Window/Window.svelte'
  import { recycleBinIcons } from '$lib/data/recycleBinIcons'

  let activeWindowId = $state<string | undefined>()
  let activeWindow = $derived.by(() => {
    return recycleBinIcons.find((icon) => icon.id === activeWindowId)
  })

  let name = 'Recycle Bin'
  let description = 'Things you deleted for whatever reason'

  const openWindow = (event: MouseEvent, id: string): void => {
    activeWindowId = id
  }

  const onWindowClose = (): void => {
    activeWindowId = undefined
  }

  const onWindowClick = (): void => {
    // TODO: Bring to front on click!
  }
</script>

<Folder address="C:/Bin" {name} {description}>
  {#snippet documents()}
    {#each recycleBinIcons as recycleBinIcon}
      {#if !recycleBinIcon.hidden}
        <DesktopIcon
          {...recycleBinIcon}
          labelColor="black"
          ondblclick={(event: MouseEvent) => {
            openWindow(event, recycleBinIcon.id)
          }}
        />
      {/if}
    {/each}
  {/snippet}
</Folder>

<Window
  DynamicContent={activeWindow?.DynamicContent}
  contentArgs={activeWindow?.contentArgs}
  fullscreen
  icon={activeWindow?.icon}
  label={activeWindow?.label}
  open={Boolean(activeWindowId)}
  {onWindowClick}
  {onWindowClose}
/>
