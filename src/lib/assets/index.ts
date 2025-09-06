import { type Win95DesktopIcon, win95DesktopIcons } from "$lib/assets/desktopIcons";
import { type RedditSprite, redditSprites } from "$lib/assets/redditSprites";

const images = {
  ...win95DesktopIcons,
  ...redditSprites
}

export type TImage = keyof typeof images

export { type Win95DesktopIcon, type RedditSprite }

export default images