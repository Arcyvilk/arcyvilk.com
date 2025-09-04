<script lang="ts">
  import { redditPosts } from '$lib/data/redditPosts'

  let test: string = 'Reddit layout'
</script>

<div
  class="flex w-[75vw] flex-col items-center justify-center bg-white font-[verdana] font-sans text-black"
>
  {#each redditPosts as post}
    <div class="m-4 w-80 rounded border border-gray-300 p-4">
      <h2 class="mb-2 text-lg font-bold">{post.title}</h2>
      <p class="mb-2 text-sm text-gray-600">Posted by u/{post.author} in r/{post.subreddit}</p>
      <p class="text-gray-800">{post.body}</p>
      <!-- {#if post.image}
        <img src={post.image} alt="Post image" class="mt-2 w-full rounded" />
      {/if} -->
      <div class="mt-2 flex items-center text-sm text-gray-600">
        <span class="mr-4">👍 {post.upvotes}</span>
        <span>💬 {12} comments</span>
      </div>
    </div>
  {/each}
</div>
