<script lang="ts">
  import FileSystemIcon from '$lib/components/FileSystemIcon.svelte'
  import Folder from '$lib/containers/Folder/Folder.svelte'
  import Window from '$lib/containers/Window/Window.svelte'
  import { recycleBinItems } from '$lib/data/recycleBinItems'

  let clickCoords: { x: number; y: number } = $state({ x: 0, y: 0 })
  let activeWindowId = $state<string | undefined>()
  let activeWindow = $derived.by(() => {
    return recycleBinItems.find((item) => item.id === activeWindowId)
  })

  let name = 'Recycle Bin'
  let description = 'Things you deleted for whatever reason'

  const openWindow = (event: MouseEvent, id: string): void => {
    clickCoords = { x: event.clientX, y: event.clientY }
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
    {#each recycleBinItems as item}
      {#if !item.hidden}
        <FileSystemIcon
          {...item}
          labelColor="black"
          ondblclick={(event: MouseEvent) => {
            openWindow(event, item.id)
          }}
        />
      {/if}
    {/each}
  {/snippet}
</Folder>

{#if Boolean(activeWindowId)}
  <Window
    WindowContent={activeWindow?.WindowContent}
    windowArgs={activeWindow?.windowArgs}
    icon={activeWindow?.icon}
    label={activeWindow?.label}
    originCoords={clickCoords}
    {onWindowClick}
    {onWindowClose}
  />
{/if}
