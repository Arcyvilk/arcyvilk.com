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

<div class="reddit-post">
  <div class="reddit-post__votes">
    <button onclick={handleUpvote}><Image image={upvoteIcon} alt="Upvote" /></button>
    <span>{upvotes - downvotes}</span>
    <button onclick={handleDownvote}><Image image={downvoteIcon} alt="Downvote" /></button>
  </div>

  <img
    class="reddit-post__thumbnail"
    src={'https://cdn-icons-png.flaticon.com/512/7046/7046086.png'}
    alt="Post thumbnail"
  />

  <div class="reddit-post__content">
    <div>
      <a href={linkPost} class="reddit-post__title">{title}</a>
      <span class="reddit-post__subreddit">(self.{subreddit})</span>
    </div>

    <div class="reddit-post__date">
      submitted <Date {date} /> by <a href={linkUser}>{author}</a> to
      <a href={linkSubreddit}>r/{subreddit}</a>
    </div>

    {#if postBody}
      <div class="reddit-post__body">
        {@render postBody?.()}
      </div>
    {/if}

    <div class="reddit-post__actions">
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
  .reddit-post {
    display: grid;
    width: 100%;
    grid-template-columns: 64px 72px 1fr;
    flex-direction: row;
    gap: 8px;
  }

  .reddit-post__votes {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    color: gray-400;
    font-size: 14px;
  }

  .reddit-post__thumbnail {
    width: 100%;
    max-width: 64px;
    border-radius: 100%;
    background-color: gray 200;
    padding: 16px;
  }

  .reddit-post__content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .reddit-post__body {
    margin-top: 8px;
    border-radius: 8px;
    border-color: gray-600;
    background-color: gray-100;
    padding: 8px;
    font-size: 14px;
  }

  .reddit-post__title {
    font-size: 18px;
  }

  .reddit-post__subreddit {
    font-size: 12px;
    color: gray-400;
  }

  .reddit-post__date {
    font-size: 12px;
    color: gray-600;
  }

  .reddit-post__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    color: gray-600;
    font-size: 12px;
    font-weight: bold;
    font-family:
      normal x-small verdana,
      arial,
      helvetica,
      sans-serif;
  }
</style>
