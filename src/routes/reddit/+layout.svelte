<script lang="ts">
  import RedditLayout from '$lib/views/Reddit/RedditLayout.svelte'

  let { children } = $props()
</script>

<RedditLayout>
  {@render children()}
</RedditLayout>

<style scoped>
  :root {
    font-family: Verdana, sans-serif;
  }
</style>
