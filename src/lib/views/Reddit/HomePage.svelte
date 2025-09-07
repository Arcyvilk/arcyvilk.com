<script lang="ts">
  import { redditPosts } from '$lib/data/redditPosts'
  import RedditPost from '$lib/views/Reddit/components/RedditPost.svelte'
</script>

<div
  class="box-border flex w-screen flex-col items-center justify-center gap-4 bg-white p-4 font-sans text-black"
>
  {#each redditPosts as post}
    <RedditPost {...post}></RedditPost>
  {/each}
</div>
