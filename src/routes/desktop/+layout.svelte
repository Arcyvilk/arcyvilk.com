<script lang="ts">
  import Desktop from '$lib/views/Desktop/Desktop.svelte'

  let { children } = $props()
</script>

<Desktop>
  {@render children()}
</Desktop>
