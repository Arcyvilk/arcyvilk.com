<script lang="ts">
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import Home from '$lib/views/Home/Home.svelte'

  onMount(() => {
    goto('/desktop')
  })
</script>

<Home />
