<script lang="ts">
  import Folder from '$lib/containers/Folder/Folder.svelte'

  let name = 'Gallery'
  let description = 'Dupa hehe'
</script>

<Folder address="C:/ArtGallery" {name} {description}>
  {#snippet documents()}
    TODO
  {/snippet}
</Folder>
