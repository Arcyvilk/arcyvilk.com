<script lang="ts">
  import type { TImage } from '$lib/assets'
  import Button from '$lib/components/Button.svelte'
  import Image from '$lib/components/Image.svelte'

  type TaskbarButtonProps = {
    buttonIcon?: TImage
    buttonLabel: string
  }
  let { buttonIcon, buttonLabel }: TaskbarButtonProps = $props()
</script>

<Button className="flex-shrink flex-grow max-w-1/5 basis-1/5">
  {#snippet label()}
    <div class="flex items-center gap-2 overflow-hidden px-1">
      {#if buttonIcon}
        <Image image={buttonIcon} alt="" className="h-6 w-6 aspect-square" />
      {/if}
      <span class="truncate text-sm/3 font-medium">{buttonLabel}</span>
    </div>
  {/snippet}
</Button>
