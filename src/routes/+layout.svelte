<script lang="ts">
  import type { ImageType } from '$lib/assets/images'
  import type { TDesktopIcon } from '$lib/types/DesktopIcon'
  import DesktopIcon from '$lib/components/DesktopIcon.svelte'
  import Desktop from '$lib/containers/Desktop.svelte'
  import Taskbar from '$lib/containers/Taskbar.svelte'

  const desktopIcons: TDesktopIcon[] = [
    {
      icon: 'PC',
      label: 'My Computer',
      alt: 'My PC'
    },
    {
      icon: 'Documents',
      label: 'My Documents',
      alt: 'My Documents',
      handleDoubleClick: () => { 
        alert("yay");
      },
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
      <DesktopIcon {...desktopIcon} />
    {/each}
  </div>

  {@render children()}

  <Taskbar />
</Desktop>
