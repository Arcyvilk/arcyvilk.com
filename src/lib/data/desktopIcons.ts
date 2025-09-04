import type { Win95DesktopIcon } from '$lib/assets/desktopIcons'

export type DesktopIconId = 'pc' | 'documents' | 'bin' | 'script' | 'missingno'

export type DesktopIconProps = {
  id: DesktopIconId
  icon: Win95DesktopIcon
  label: string
  alt: string
  hidden?: boolean
}

export const defaultDesktopIcon: DesktopIconProps = {
  id: 'missingno',
  icon: 'MissingNo',
  label: 'MISSINGNO',
  alt: 'MISSINGNO',
  hidden: true
}

export const desktopIcons: DesktopIconProps[] = [
  defaultDesktopIcon,
  {
    id: 'pc',
    icon: 'PC',
    label: 'My Computer',
    alt: 'My PC',
    hidden: false
  },
  {
    id: 'documents',
    icon: 'Documents',
    label: 'My Documents',
    alt: 'My Documents',
    hidden: false
  },
  {
    id: 'bin',
    icon: 'RecycleBin',
    label: 'Recycle Bin',
    alt: 'Recycle Bin',
    hidden: false
  },
  {
    id: 'script',
    icon: 'Script',
    label: 'Completely harmless file, there is nothing to worry about',
    alt: 'Completely harmless file',
    hidden: false
  }
]