<script lang="ts">
  import type { RedditPost } from '$lib/data/redditPosts'

  let { id, title, subreddit, author, date, body, upvotes }: RedditPost = $props()
</script>

<div class="m-4 box-border w-full p-4">
  <div>
    <a href="/reddit/{id}" class="mb-2 text-lg text-blue-800">{title}</a>
    <span class="text-xs text-gray-400">(self.{subreddit})</span>
  </div>
  <div class="mb-2 text-xs text-gray-600">
    submitted {date} by <a href="/reddit/u/{author}">{author}</a> in r/{subreddit}
  </div>
  <p class="text-gray-800">{body}</p>
  <!-- {#if post.image}
        <img src={post.image} alt="Post image" class="mt-2 w-full rounded" />
      {/if} -->
  <div class="mt-2 flex items-center text-sm text-gray-600">
    <span class="mr-4">👍 {upvotes}</span>
    <span>💬 {12} comments</span>
  </div>
</div>
