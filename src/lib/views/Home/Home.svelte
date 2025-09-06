<script lang="ts">
  import { goto } from '$app/navigation'

  const handleRedirectToDesktop = () => {
    goto('/desktop')
  }
</script>

<div class="home-bg border-box h-screen w-screen p-[64px]">
  <div class="desktop-bg border-box flex h-full w-full bg-cover bg-center">
    <button onclick={handleRedirectToDesktop}>Go to Desktop</button>
  </div>
</div>

<style>
  .home-bg {
    border: 128px ridge #d5c9a4;
    background-color: #000000;
  }

  .desktop-bg {
    background-image: url('/illustrations/win98.jpg');
  }
</style>
