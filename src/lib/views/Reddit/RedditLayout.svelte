<script lang="ts">
  import Image from '$lib/components/Image.svelte'
  import RedditHeaderLink from '$lib/views/Reddit/components/RedditHeaderLink.svelte'

  let { children } = $props()
</script>

<div class="h-screen w-screen bg-white">
  <div class="flex gap-4 border-b-1 border-gray-400 bg-gray-100 p-1">
    <RedditHeaderLink label="My subreddits" href="/reddit/subreddits" />
    <RedditHeaderLink label="Home" href="/reddit" />
    <RedditHeaderLink label="Popular" href="/reddit/popular" />
    <RedditHeaderLink label="All" href="/reddit/all" />
    <RedditHeaderLink label="Random" href="/reddit/random" />
    <RedditHeaderLink label="Mod" href="/reddit/mod" />
    <RedditHeaderLink label="Users" href="/reddit/users" />
  </div>

  <div class="flex items-center gap-8 border-b-1 border-blue-600 bg-blue-100 px-3 py-1">
    <Image image="RedditLogo" alt="Reddit Logo" className="h-full" />
    <span class="text-2xl font-bold text-black">Hot</span>
  </div>

  <!-- <div class="crt absolute h-screen w-screen"></div> -->
  {@render children()}
</div>
