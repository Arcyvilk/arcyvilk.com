<script lang="ts">
  import { goto } from '$app/navigation'
  import Window from '$lib/containers/Window.svelte'
  import Reddit from '$lib/views/Reddit/Reddit.svelte'
  import { onMount } from 'svelte'

  let open: boolean = $state(true)

  const onWindowClick = () => {
    // TODO: Bring to front on click!
  }

  const onWindowClose = () => {
    goto('/')
  }

  onMount(() => {
    open = true
  })
</script>

<Window icon="Explorer" label="Internet" {open} {onWindowClick} {onWindowClose}>
  {#snippet content()}
    <Reddit />
  {/snippet}
</Window>
