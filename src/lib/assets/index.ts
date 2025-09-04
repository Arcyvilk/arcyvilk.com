import { type Win95DesktopIcon, win95DesktopIcons } from "$lib/assets/desktopIcons";

const images = {
  ...win95DesktopIcons
}

export type TImage = keyof typeof images

export { type Win95DesktopIcon }

export default images