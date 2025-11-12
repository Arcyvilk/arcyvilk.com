<script lang="ts">
  let { children } = $props()
</script>

<div class="layout">
  {@render children()}
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px;
  }
</style>
