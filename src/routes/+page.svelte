<script lang="ts">
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'

  import '../style.css'

  onMount(() => {
    goto('/desktop')
  })
</script>

<div class="h-screen w-screen bg-black">...</div>
