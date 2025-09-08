<script lang="ts">
  import FileSystemIcon from '$lib/components/FileSystemIcon.svelte'
  import Folder from '$lib/containers/Folder/Folder.svelte'
  import Window from '$lib/containers/Window/Window.svelte'
  import { recycleBinItems } from '$lib/data/recycleBinItems'
  import { onMount } from 'svelte'

  let mounted = $state(false)
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

  // This forces Windows rendered inside other Windows
  // to be portaled to the very end of a DOM stack
  // so they are always above their original parents.
  // [TODO] Probably can be done in a prettier way ^^;
  onMount(() => {
    mounted = true
  })
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

{#if mounted}
  <Window
    WindowContent={activeWindow?.WindowContent}
    windowArgs={activeWindow?.windowArgs}
    originCoords={clickCoords}
    icon={activeWindow?.icon}
    label={activeWindow?.label}
    open={Boolean(activeWindowId)}
    {onWindowClick}
    {onWindowClose}
  />
{/if}
