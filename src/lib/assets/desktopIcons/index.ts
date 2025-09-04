import Documents from '$lib/assets/desktopIcons/documents.webp'
import MissingNo from '$lib/assets/desktopIcons/missingno.webp'
import PC from '$lib/assets/desktopIcons/pc.webp'
import RecycleBin from '$lib/assets/desktopIcons/bin.webp'
import Script from '$lib/assets/desktopIcons/script.webp'

const win95DesktopIcons = { Documents, MissingNo, PC, RecycleBin, Script }

export type Win95DesktopIcon = keyof typeof win95DesktopIcons

export { win95DesktopIcons }
