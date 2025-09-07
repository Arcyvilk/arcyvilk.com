<script lang="ts">
  import Home from '$lib/views/Home/Home.svelte'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'

  onMount(() => {
    goto('/desktop')
  })
</script>

<Home />
