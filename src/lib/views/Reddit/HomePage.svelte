<script lang="ts">
  import { redditPosts } from '$lib/data/redditPosts'
  import RedditPost from '$lib/views/Reddit/components/RedditPostLink.svelte'
</script>

<div
  class="box-border flex w-screen flex-col items-center justify-center gap-4 bg-white p-2 font-sans text-black"
>
  {#each redditPosts as post}
    <RedditPost {...post} />
  {/each}
</div>
