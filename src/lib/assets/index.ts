import { type Win98DesktopIcon, win98DesktopIcons } from "$lib/assets/win98Icons";
import { type RedditSprite, redditSprites } from "$lib/assets/redditSprites";

const images = {
  ...win98DesktopIcons,
  ...redditSprites
}

export type TImage = keyof typeof images

export { type Win98DesktopIcon, type RedditSprite }

export default images