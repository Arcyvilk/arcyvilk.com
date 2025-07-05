<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import Navigation from '$lib/components/Navigation.svelte'
  import '../app.css'

  let { children } = $props()
</script>

<Header />
<Navigation />
{@render children()}
