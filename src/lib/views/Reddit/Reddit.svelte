<script lang="ts">
  import { redditPosts } from '$lib/data/redditPosts'
  import RedditPost from '$lib/views/Reddit/RedditPost.svelte'
</script>

<div
  class="box-border flex w-[75vw] flex-col items-center justify-center gap-4 bg-white p-2 font-[verdana] font-sans text-black"
>
  {#each redditPosts as post}
    <RedditPost {...post} />
  {/each}
</div>
