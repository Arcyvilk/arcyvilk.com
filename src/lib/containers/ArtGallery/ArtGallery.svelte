<script lang="ts">
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Folder from '$lib/containers/Folder/Folder.svelte'
  import Window from '$lib/containers/Window/Window.svelte'
  import { artGalleryIcons } from '$lib/data/artGalleryIcons'
  import { onMount } from 'svelte'

  let mounted = $state(false)
  let activeWindowId = $state<string | undefined>()
  let activeWindow = $derived.by(() => {
    return artGalleryIcons.find((icon) => icon.id === activeWindowId)
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
    {#each artGalleryIcons as artGalleryIcon}
      {#if !artGalleryIcon.hidden}
        <DesktopIcon
          {...artGalleryIcon}
          labelColor="black"
          ondblclick={(event: MouseEvent) => {
            openWindow(event, artGalleryIcon.id)
          }}
        />
      {/if}
    {/each}
  {/snippet}
</Folder>

{#if mounted}
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
{/if}
