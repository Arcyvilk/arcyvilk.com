<script lang="ts">
  import { redditPosts } from '$lib/data/redditPosts'
  import RedditPost from '$lib/views/Reddit/components/RedditPost.svelte'

  let post = redditPosts[0]
</script>

<RedditPost {...post}>
  {#snippet postBody()}
    {post.body}
  {/snippet}
</RedditPost>
