<script lang="ts">
  import FileSystemIcon from '$lib/components/FileSystemIcon.svelte'
  import Folder from '$lib/containers/Folder/Folder.svelte'
  import Window from '$lib/containers/Window/Window.svelte'
  import { artGalleryItems } from '$lib/data/artGalleryItems'

  let clickCoords: { x: number; y: number } = $state({ x: 0, y: 0 })
  let activeWindowId = $state<string | undefined>()
  let activeWindow = $derived.by(() => {
    return artGalleryItems.find((icon) => icon.id === activeWindowId)
  })

  let name = 'Gallery'
  let description = 'Art stuff'

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

<Folder address="C:/ArtGallery" {name} {description}>
  {#snippet documents()}
    {#each artGalleryItems as item}
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
