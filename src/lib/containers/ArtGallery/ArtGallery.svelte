<script lang="ts">
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Folder from '$lib/containers/Folder/Folder.svelte'
  import Window from '$lib/containers/Window/Window.svelte'
  import { artGalleryIcons } from '$lib/data/artGalleryIcons'

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

<Window
  DynamicContent={activeWindow?.DynamicContent}
  fullscreen
  icon={activeWindow?.icon}
  label={activeWindow?.label}
  open={Boolean(activeWindowId)}
  {onWindowClick}
  {onWindowClose}
/>
