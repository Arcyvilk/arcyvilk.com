<script lang="ts">
  import FileSystemIcon from '$lib/components/FileSystemIcon.svelte'
  import Folder from '$lib/containers/Folder/Folder.svelte'
  import Window from '$lib/containers/Window/Window.svelte'
  import { artGalleryItems } from '$lib/data/artGalleryItems'
  import { onMount } from 'svelte'

  let mounted = $state(false)
  let activeWindowId = $state<string | undefined>()
  let activeWindow = $derived.by(() => {
    return artGalleryItems.find((icon) => icon.id === activeWindowId)
  })

  let name = 'Gallery'
  let description = 'Art stuff'

  const openWindow = (event: MouseEvent, id: string): void => {
    activeWindowId = id
  }

  const onWindowClose = (): void => {
    activeWindowId = undefined
  }

  const onWindowClick = (): void => {
    // TODO: Bring to front on click!
  }

  // This forces Windows rendered inside other Windows
  // to be portaled to the very end of a DOM stack
  // so they are always above their original parents.
  // [TODO] Probably can be done in a prettier way ^^;
  onMount(() => {
    mounted = true
  })
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

{#if mounted}
  <Window
    WindowContent={activeWindow?.WindowContent}
    windowArgs={activeWindow?.windowArgs}
    fullscreen
    icon={activeWindow?.icon}
    label={activeWindow?.label}
    open={Boolean(activeWindowId)}
    {onWindowClick}
    {onWindowClose}
  />
{/if}
