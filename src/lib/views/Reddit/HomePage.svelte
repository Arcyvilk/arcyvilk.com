<script lang="ts">
  import { redditPosts } from '$lib/data/redditPosts'
  import RedditPost from '$lib/views/Reddit/components/RedditPost.svelte'
</script>

<div class="reddit-homepage">
  {#each redditPosts as post}
    <RedditPost {...post}></RedditPost>
  {/each}
</div>

<style>
  .reddit-homepage {
    box-sizing: border-box;
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background-color: white;
    padding: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--color-background-text);
  }
</style>
