<script lang="ts">
  import { page } from '$app/state'
  import { redditPosts } from '$lib/data/redditPosts'
  import RedditPost from '$lib/views/Reddit/components/RedditPost.svelte'

  const postId = page.params.entry

  let post = redditPosts.find((p) => p.id === postId)
</script>

{#if post}
  <RedditPost {...post}>
    {#snippet postBody()}
      {post.body}
    {/snippet}
  </RedditPost>
{:else}
  <p>Post not found.</p>
{/if}
