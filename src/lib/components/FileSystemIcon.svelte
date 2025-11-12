<script lang="ts">
  import Image from '$lib/components/Image.svelte'
  import { v4 as uuid } from 'uuid'
  import { type FileSystemItem } from '$lib/types/fileSystemItem'
  import { enableDragging } from '$lib/utils'
  import { onMount } from 'svelte'

  type FileSystemIconProps = {
    labelColor?: string
    inverted?: boolean
    isDraggable?: boolean
    bounds?: string
  } & FileSystemItem &
    Partial<HTMLButtonElement>
  const {
    alt,
    bounds,
    isDraggable = false,
    icon,
    inverted = false,
    label,
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

<button id={elementId} class="fsicon" title={label} {ondblclick}>
  <Image image={icon} {alt} h="64px" w="64px" />

  <p class="fsicon__label {inverted ? 'fsicon__label--inverted' : ''}">
    {label}
  </p>
</button>

<style>
  .fsicon {
    display: flex;
    max-height: 112px;
    min-height: 112px;
    max-width: 120px;
    min-width: 120px;
    flex: 1;
    flex-direction: column;
    overflow-wrap: anywhere;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    overflow: hidden;
    padding: 4px;

    &:active,
    &:focus,
    &:focus-visible {
      outline-color: var(--color-window-bg);
      outline-width: 2px;
      outline-style: dotted;
    }
  }

  .fsicon__label {
    font-family: Win95FA;
    font-size: 20px;
    line-height: 20px;
    color: var(--color-foreground-text);

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2px;
  }

  .fsicon__label--inverted {
    color: var(--color-background-text);
  }
</style>
