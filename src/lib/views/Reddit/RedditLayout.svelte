<script lang="ts">
  import Image from '$lib/components/Image.svelte'
  import RedditHeaderLink from '$lib/views/Reddit/components/RedditHeaderLink.svelte'

  let { children } = $props()
</script>

<div class="reddit">
  <div class="reddit__topbar">
    <RedditHeaderLink label="My subreddits" href="/reddit/subreddits" />
    <RedditHeaderLink label="Home" href="/reddit" />
    <RedditHeaderLink label="Popular" href="/reddit/popular" />
    <RedditHeaderLink label="All" href="/reddit/all" />
    <RedditHeaderLink label="Random" href="/reddit/random" />
  </div>

  <div class="reddit__header">
    <Image image="RedditLogo" alt="Reddit Logo" h="100%" />
    <span class="reddit__title">Hot</span>
  </div>

  {@render children()}
</div>

<style>
  .reddit {
    min-height: 100vh;
    min-width: 100vw;
    background-color: white;
  }

  .reddit__topbar {
    display: flex;
    gap: 16px;
    border-bottom: 4px;
    border-color: gray-400;
    background-color: gray-100;
    padding: 4px;
  }

  .reddit__header {
    display: flex;
    align-items: center;
    gap: 32px;
    border-bottom: 4px;
    border-color: blue-600;
    background-color: blue-100;
    padding-inline: 12px;
    padding-block: 4px;
  }

  .reddit__title {
    font-weight: bold;
    font-size: 24px;
    color: var(--color-background-text);
  }
</style>
