<script>
  import { goto } from '$app/navigation'
  import Window from '$lib/containers/Window.svelte'
  import Reddit from '$lib/views/Reddit/Reddit.svelte'

  const onWindowClick = () => {
    // TODO: Bring to front on click!
  }

  const onWindowClose = () => {
    goto('/')
  }
</script>

<Window icon="Explorer" label="Internet" open={true} {onWindowClick} {onWindowClose}>
  {#snippet content()}
    <Reddit />
  {/snippet}</Window
>
