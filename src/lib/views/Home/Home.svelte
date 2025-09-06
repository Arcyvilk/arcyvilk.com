<script lang="ts">
  import { goto } from '$app/navigation'

  const handleRedirectToDesktop = () => {
    goto('/desktop')
  }
</script>

<div>
  <button onclick={handleRedirectToDesktop}>Go to Desktop</button>
</div>
