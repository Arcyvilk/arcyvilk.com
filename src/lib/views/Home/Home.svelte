<script lang="ts">
  import { goto } from '$app/navigation'

  const handleRedirectToDesktop = () => {
    goto('/desktop')
  }
</script>

<div class="home-bg border-box h-screen w-screen p-[32px]">
  <div class="desktop-bg border-box flex h-full w-full bg-contain bg-center bg-no-repeat">
    <button class="desktop-button" onclick={handleRedirectToDesktop}>Go to Desktop</button>
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

  .desktop-button {
    position: absolute;
    right: 64px;
    bottom: 64px;
    background-color: #a19a83;
    box-shadow: 0 8px 8px #3d3c37;
    padding: 16px;
    color: black;
    text-transform: uppercase;
    font-size: 32px;
  }
</style>
