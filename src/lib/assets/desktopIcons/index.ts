import Documents from '$lib/assets/desktopIcons/documents.webp'
import Explorer from '$lib/assets/desktopIcons/explorer.webp'
import Tree from '$lib/assets/desktopIcons/tree.webp'
import PC from '$lib/assets/desktopIcons/pc.webp'
import RecycleBin from '$lib/assets/desktopIcons/bin.webp'
import Script from '$lib/assets/desktopIcons/script.webp'

const win95DesktopIcons = { Documents, Explorer, PC, RecycleBin, Script, Tree }

export type Win95DesktopIcon = keyof typeof win95DesktopIcons

export { win95DesktopIcons }
