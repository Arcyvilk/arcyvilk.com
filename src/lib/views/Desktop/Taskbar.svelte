<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Divider from '$lib/components/Divider.svelte'
  import { desktopIcons, type DesktopIconId, type DesktopIconProps } from '$lib/data/desktopIcons'
  import TaskbarButton from '$lib/views/Desktop/TaskbarButton.svelte'

  type TaskbarProps = {
    openWindowIds: DesktopIconId[]
  }
  let { openWindowIds }: TaskbarProps = $props()

  let openWindows: DesktopIconProps[] = $derived(
    openWindowIds
      .map((id) => desktopIcons.find((icon) => icon.id === id))
      .filter(Boolean) as DesktopIconProps[]
  )
</script>

<footer class="sticky bottom-0 left-0 w-full">
  <div
    class="bg-window-bg text-foreground-text border-t-highlight-bg flex gap-1 border-t-4 [border-style:groove] p-1"
  >
    <Button>{#snippet label()}<span class="px-2">Start</span>{/snippet}</Button>
    <Divider />

    {#each openWindows as openWindow}
      <TaskbarButton buttonIcon={openWindow.icon} buttonLabel={openWindow.label} />
    {/each}
  </div>
</footer>
