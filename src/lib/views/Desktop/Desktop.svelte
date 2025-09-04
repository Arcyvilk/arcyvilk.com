<script lang="ts">
  import { fade } from 'svelte/transition'

  let { children } = $props()
</script>

<div
  transition:fade={{ duration: 300 }}
  class="bg-desktop-bg text-background-text flex h-screen flex-col overflow-hidden"
>
  {@render children()}
</div>
