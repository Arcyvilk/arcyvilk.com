<script lang="ts">
  import type { ImageType } from '$lib/assets/images'
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Desktop from '$lib/containers/Desktop.svelte'
  import Taskbar from '$lib/containers/Taskbar.svelte'

  type DesktopIcon = {
    icon: ImageType
    label: string
    alt: string
  }
  const pc = {
    icon: 'PC',
    label: 'My PC haha hehe lolmao heheszki',
    alt: 'My PC'
  }
  const desktopIcons: DesktopIcon[] = new Array(24).fill(pc)
</script>

<Desktop>
  <div class="flex flex-grow flex-col flex-wrap content-start gap-4 overflow-hidden p-4">
    {#each desktopIcons as desktopIcon}
      <DesktopIcon icon={desktopIcon.icon} label={desktopIcon.label} alt={desktopIcon.alt} />
    {/each}
  </div>

  <Taskbar />
</Desktop>
