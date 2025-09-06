import DownvoteEmpty from '$lib/assets/redditSprites/downvote_empty.png'
import DownvoteFull from '$lib/assets/redditSprites/downvote_full.png'
import UpvoteEmpty from '$lib/assets/redditSprites/upvote_empty.png'
import UpvoteFull from '$lib/assets/redditSprites/upvote_full.png'
import RedditLogo from '$lib/assets/redditSprites/logo.png'

const redditSprites = { DownvoteEmpty, DownvoteFull, UpvoteEmpty, UpvoteFull, RedditLogo }

export type RedditSprite = keyof typeof redditSprites

export { redditSprites }
