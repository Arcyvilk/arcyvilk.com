import Documents from '$lib/assets/desktopIcons/documents.webp'
import Explorer from '$lib/assets/desktopIcons/explorer.webp'
import Tree from '$lib/assets/desktopIcons/tree.webp'
import PC from '$lib/assets/desktopIcons/pc.webp'
import RecycleBin from '$lib/assets/desktopIcons/bin.webp'
import Script from '$lib/assets/desktopIcons/script.webp'

const win98DesktopIcons = { Documents, Explorer, PC, RecycleBin, Script, Tree }

export type Win98DesktopIcon = keyof typeof win98DesktopIcons

export { win98DesktopIcons }
