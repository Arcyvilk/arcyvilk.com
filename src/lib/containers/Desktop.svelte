<script lang="ts">
  let { children } = $props()
</script>

<div class="bg-background-bg text-background-text flex h-screen flex-col overflow-hidden">
  {@render children()}
</div>
