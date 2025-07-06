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

  const desktopIcons: DesktopIcon[] = [
    {
      icon: 'PC',
      label: 'My Computer',
      alt: 'My PC'
    },
    {
      icon: 'Documents',
      label: 'My Documents',
      alt: 'My Documents'
    },
    {
      icon: 'RecycleBin',
      label: 'Recycle Bin',
      alt: 'Recycle Bin'
    },
    {
      icon: 'Script',
      label: 'Completely harmless file, there is nothing to worry about',
      alt: 'Completely harmless file'
    }
  ]

  let { children } = $props()
</script>

<Desktop>
  <div class="flex flex-grow flex-col flex-wrap content-start gap-4 overflow-hidden p-4">
    {#each desktopIcons as desktopIcon}
      <DesktopIcon icon={desktopIcon.icon} label={desktopIcon.label} alt={desktopIcon.alt} />
    {/each}
  </div>

  {@render children()}

  <Taskbar />
</Desktop>
