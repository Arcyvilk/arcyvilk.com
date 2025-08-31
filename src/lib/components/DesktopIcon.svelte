<script lang="ts">
  import Image from '$lib/components/Image.svelte'
  import { type TDesktopIcon } from '$lib/types/DesktopIcon'

  const { alt, icon, label, handleDoubleClick }: TDesktopIcon = $props()

  console.log(handleDoubleClick)
</script>

<div class="flex h-34 max-h-34 w-32 max-w-32 items-center justify-center">
  <button
    data-testid="desktop-icon"
    class="button-outline flex flex-col items-center justify-center gap-2 overflow-hidden p-1"
    title={label}
    ondblclick={handleDoubleClick}
  >
    <Image image={icon} {alt} className="h-16 w-16 aspect-square" />
    <p class="wrap text-foreground-text line-clamp-2 [font-family:Win95FA] text-xl leading-5">
      {label}
    </p>
  </button>
</div>

<style>
  .button-outline {
    &:active,
    &:focus,
    &:focus-visible {
      outline-color: var(--color-foreground-bg);
      outline-width: 2px;
      outline-style: dotted;
    }
  }
</style>
