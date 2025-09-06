import type { Win95DesktopIcon } from '$lib/assets/desktopIcons'
import Home from '$lib/views/Home/Home.svelte';
import type { Component } from 'svelte';

export type DesktopIconId = 'pc' | 'documents' | 'bin' | 'script' | 'missingno' | 'internet'

export type DesktopIconProps = {
  id: DesktopIconId
  icon: Win95DesktopIcon
  label: string
  alt: string
  hidden: boolean
  DynamicContent: Component
}

export const defaultDesktopIcon: DesktopIconProps = {
  id: 'missingno',
  icon: 'Tree',
  label: 'MISSINGNO',
  alt: 'MISSINGNO',
  hidden: true,
  DynamicContent: Home
}


export const desktopIcons: DesktopIconProps[] = [
  defaultDesktopIcon,
  {
    id: 'pc',
    icon: 'PC',
    label: 'My Computer',
    alt: 'My PC',
    hidden: false,
    DynamicContent: Home
  },
  {
    id: 'documents',
    icon: 'Documents',
    label: 'My Documents',
    alt: 'My Documents',
    hidden: true,
    DynamicContent: Home
  },
  {
    id: 'bin',
    icon: 'RecycleBin',
    label: 'Recycle Bin',
    alt: 'Recycle Bin',
    hidden: false,
    DynamicContent: Home
  },
  {
    id: 'internet',
    icon: 'Explorer',
    label: 'Internet',
    alt: 'Internet',
    hidden: false,
    DynamicContent: Home
  },
  {
    id: 'script',
    icon: 'Script',
    label: 'Completely harmless file, there is nothing to worry about',
    alt: 'Completely harmless file',
    hidden: true,
    DynamicContent: Home
  }
]