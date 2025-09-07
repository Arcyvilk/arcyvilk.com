<script lang="ts">
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Folder from '$lib/containers/Folder/Folder.svelte'
  import { artGalleryIcons } from '$lib/data/artGalleryIcons'
  import type { FolderIconProps } from '$lib/types/folderIcon'

  let name = 'Gallery'
  let description = 'Dupa hehe'

  const openWindow = (event: MouseEvent, id: string): void => {
    console.log(id)
  }
</script>

<Folder address="C:/ArtGallery" {name} {description}>
  {#snippet documents()}
    {#each artGalleryIcons as artGalleryIcon}
      {#if !artGalleryIcon.hidden}
        {artGalleryIcon.id}
        <!-- <DesktopIcon
            {...artGalleryIcon}
            ondblclick={(event: MouseEvent) => {
              openWindow(event, artGalleryIcon.id)
            }}
          /> -->
      {/if}
    {/each}
  {/snippet}
</Folder>
