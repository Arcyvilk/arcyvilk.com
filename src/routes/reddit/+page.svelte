<script>
  import { goto } from '$app/navigation'
  import Window from '$lib/containers/Window.svelte'

  let { originCoords } = $props()

  const onWindowClick = () => {
    // TODO: Bring to front on click!
  }

  const onWindowClose = () => {
    goto('/')
  }
</script>

<Window
  icon="Explorer"
  label="Internet"
  open={true}
  originCoords={{ x: 0, y: 0 }}
  {onWindowClick}
  {onWindowClose}
>
  {#snippet content()}
    <span>dupa</span>
  {/snippet}</Window
>
