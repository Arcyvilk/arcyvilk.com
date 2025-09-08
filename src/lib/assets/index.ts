import { type Win98Icon, win98Icons } from "$lib/assets/win98Icons";
import { type RedditSprite, redditSprites } from "$lib/assets/redditSprites";

const images = {
  ...win98Icons,
  ...redditSprites
}

export type TImage = keyof typeof images

export { type Win98Icon, type RedditSprite }

export default images