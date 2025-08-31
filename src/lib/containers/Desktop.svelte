<script lang="ts">
  let { children } = $props()
</script>

<div class="bg-desktop-bg text-background-text flex h-screen flex-col overflow-hidden">
  {@render children()}
</div>
