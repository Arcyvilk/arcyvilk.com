<script lang="ts">
  import { redditPosts } from '$lib/data/redditPosts'
  import RedditPost from '$lib/views/Reddit/RedditPost.svelte'

  let test: string = 'Reddit layout'
</script>

<div
  class="box-border flex w-[75vw] flex-col items-center justify-center bg-white p-4 pl-32 font-[arial] font-sans text-black"
>
  {#each redditPosts as post}
    <RedditPost {...post} />
  {/each}
</div>
