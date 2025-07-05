<script lang="ts">
  import Header from '$lib/containers/Header.svelte'
  import Navigation from '$lib/containers/Navigation.svelte'

  let { children } = $props()
</script>

<Header />
<Navigation />
{@render children()}
