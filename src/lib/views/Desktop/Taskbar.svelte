<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Divider from '$lib/components/Divider.svelte'
  import Image from '$lib/components/Image.svelte'
  import { desktopIcons, type DesktopIconId, type DesktopIconProps } from '$lib/data/desktopIcons'

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
      <Button className="flex-shrink flex-grow max-w-1/5 basis-1/5">
        {#snippet label()}
          <div class="flex items-center gap-2 overflow-hidden px-1">
            {#if openWindow?.icon}
              <Image image={openWindow.icon} alt="" className="h-6 w-6 aspect-square" />
            {/if}
            <span class="truncate text-sm/3 font-medium">{openWindow.label}</span>
          </div>
        {/snippet}
      </Button>
    {/each}
  </div>
</footer>
