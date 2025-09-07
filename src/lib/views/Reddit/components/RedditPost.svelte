<script lang="ts">
  import type { TImage } from '$lib/assets'
  import Date from '$lib/components/Date.svelte'
  import Image from '$lib/components/Image.svelte'
  import type { RedditPost } from '$lib/data/redditPosts'
  import type { Snippet } from 'svelte'

  let {
    id,
    title,
    subreddit,
    author,
    date,
    upvotes,
    downvotes,
    postBody
  }: RedditPost & { postBody?: Snippet } = $props()

  let vote = $state(0)
  let upvoteIcon = $derived(vote === 1 ? 'UpvoteFull' : 'UpvoteEmpty') as TImage
  let downvoteIcon = $derived(vote === -1 ? 'DownvoteFull' : 'DownvoteEmpty') as TImage

  const linkSubreddit = `/reddit/r/${subreddit}`
  const linkUser = `/reddit/u/${author}`
  const linkPost = `/reddit/post/${id}`

  const handleUpvote = () => {
    vote !== 1 ? (vote = 1) : (vote = 0)
    console.log(vote)
  }

  const handleDownvote = () => {
    vote !== -1 ? (vote = -1) : (vote = 0)
    console.log(vote)
  }
</script>

<div class="box-border grid w-full grid-cols-[64px_72px_1fr] flex-row gap-2">
  <div class="flex flex-col items-center text-sm font-bold text-gray-400">
    <button onclick={handleUpvote}><Image image={upvoteIcon} alt="Upvote" /></button>
    <span>{upvotes - downvotes}</span>
    <button onclick={handleDownvote}><Image image={downvoteIcon} alt="Downvote" /></button>
  </div>

  <img
    class="w-full max-w-16 rounded-full bg-gray-200 p-4"
    src={'https://cdn-icons-png.flaticon.com/512/7046/7046086.png'}
    alt="Post thumbnail"
  />

  <div class="flex flex-col">
    <div>
      <a href={linkPost} class="text-lg">{title}</a>
      <span class="text-xs text-gray-400">(self.{subreddit})</span>
    </div>
    <div class="text-xs text-gray-600">
      submitted <Date {date} /> by <a href={linkUser}>{author}</a> to
      <a href={linkSubreddit}>r/{subreddit}</a>
    </div>

    <div class="mt-2 rounded-md border border-gray-600 bg-gray-100 p-2 text-sm">
      {@render postBody?.()}
    </div>

    <div class="reddit-font mt-2 flex flex-wrap items-center gap-2 text-xs font-bold text-gray-600">
      <a href={linkPost}>{Math.round(Math.random() * 100)} comments</a>
      <a href={'#'}>share</a>
      <a href={'#'}>save</a>
      <a href={'#'}>hide</a>
      <a href={'#'}>report</a>
      <a href={'#'}>crosspost</a>
    </div>
  </div>
</div>

<style>
  .reddit-font {
    font-family:
      normal x-small verdana,
      arial,
      helvetica,
      sans-serif;
  }
</style>
