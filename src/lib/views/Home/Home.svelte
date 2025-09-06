<script lang="ts">
  import { goto } from '$app/navigation'

  const handleRedirectToDesktop = () => {
    goto('/home')
  }
</script>

<div>
  <button onclick={handleRedirectToDesktop}>Go to Desktop</button>
</div>
