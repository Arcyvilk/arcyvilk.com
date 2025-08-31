<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Divider from '$lib/components/Divider.svelte'
</script>

<footer class="sticky bottom-0 left-0 w-full">
  <div
    class="bg-window-bg text-foreground-text border-t-highlight-bg flex gap-1 border-t-4 [border-style:groove] p-1"
  >
    <Button>{#snippet label()}<span class="px-2">Start</span>{/snippet}</Button>
    <Divider />
  </div>
</footer>
