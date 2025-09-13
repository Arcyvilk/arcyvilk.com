<script lang="ts">
  import Image from '$lib/components/Image.svelte'
  import { v4 as uuid } from 'uuid'
  import { type FileSystemItem } from '$lib/types/fileSystemItem'
  import { enableDragging } from '$lib/utils'
  import { onMount } from 'svelte'

  type FileSystemIconProps = {
    labelColor?: string
    isDraggable?: boolean
    bounds?: string
  } & FileSystemItem &
    Partial<HTMLButtonElement>
  const {
    alt,
    bounds,
    isDraggable = false,
    icon,
    label,
    labelColor = 'foreground-text',
    ondblclick
  }: FileSystemIconProps = $props()

  let elementId = `filesystem-icon-${uuid()}`

  onMount(() => {
    if (isDraggable) {
      enableDragging({
        elementId,
        zIndexBoost: false,
        bounds
      })
    }
  })
</script>

<button
  data-testid="filesystem-icon"
  id={elementId}
  class="filesystem-icon button-outline flex h-30 max-h-30 w-32 max-w-32 flex-1 flex-col items-center justify-center gap-2 overflow-hidden p-1"
  title={label}
  {ondblclick}
>
  <Image image={icon} {alt} className="h-16 w-16 aspect-square" />
  <p class="wrap text-{labelColor} line-clamp-2 [font-family:Win95FA] text-xl leading-5">
    {label}
  </p>
</button>

<style>
  .button-outline {
    &:active,
    &:focus,
    &:focus-visible {
      outline-color: var(--color-window-bg);
      outline-width: 2px;
      outline-style: dotted;
    }
  }
</style>
