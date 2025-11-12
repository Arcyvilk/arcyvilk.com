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

<Button className="taskbar-button">
  {#snippet label()}
    <div class="taskbar-button__label">
      {#if buttonIcon}
        <Image className="taskbar-button__icon" h="24px" w="24px" image={buttonIcon} alt="" />
      {/if}

      <span class="taskbar-button__label-text">{buttonLabel}</span>
    </div>
  {/snippet}
</Button>

<style>
  .taskbar-button {
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 20%;
    max-width: 20%;
  }

  .taskbar-button__label {
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
  }
  .taskbar-button__label-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
  }
</style>
