<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Divider from '$lib/components/Divider.svelte'
  import { desktopIcons } from '$lib/data/desktopIcons'
  import type { FileSystemItem } from '$lib/types/fileSystemItem'
  import TaskbarButton from '$lib/views/Desktop/TaskbarButton.svelte'

  type TaskbarProps = {
    openWindowIds: string[]
  }
  let { openWindowIds }: TaskbarProps = $props()

  let openWindows: FileSystemItem[] = $derived(
    openWindowIds
      .map((id) => desktopIcons.find((icon) => icon.id === id))
      .filter(Boolean) as FileSystemItem[]
  )
</script>

<footer class="taskbar">
  <Button>
    {#snippet label()}
      Start
    {/snippet}
  </Button>
  <Divider />

  {#each openWindows as openWindow}
    <TaskbarButton buttonIcon={openWindow.icon} buttonLabel={openWindow.label} />
  {/each}
</footer>

<style>
  .taskbar {
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;

    display: flex;
    gap: 4px;
    padding: 4px;
    padding-inline-start: 8px;
    background-color: var(--color-window-bg);
    color: var(--color-foreground-text);
    border-top: 4px groove var(--color-highlight-bg);
  }
</style>
