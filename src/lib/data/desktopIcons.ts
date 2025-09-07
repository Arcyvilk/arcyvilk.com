import type { Win98DesktopIcon } from '$lib/assets/win98Icons'
import ArtGallery from '$lib/containers/ArtGallery/ArtGallery.svelte';
import BrowserIframe from '$lib/containers/BrowserIframe/BrowserIframe.svelte';
import MyComputer from '$lib/containers/MyComputer/MyComputer.svelte';
import MyDocuments from '$lib/containers/MyDocuments/MyDocuments.svelte';
import RecycleBin from '$lib/containers/RecycleBin/RecycleBin.svelte';
import SuspiciousScript from '$lib/containers/SuspiciousScript/SuspiciousScript.svelte';
import Home from '$lib/views/Home/Home.svelte';
import type { Component } from 'svelte';

export type DesktopIconId = 'pc' | 'documents' | 'bin' | 'script' | 'missingno' | 'internet' | 'gallery'

export type DesktopIconProps = {
  id: DesktopIconId
  description: string
  icon: Win98DesktopIcon
  label: string
  alt: string
  hidden: boolean
  DynamicContent: Component
}

export const defaultDesktopIcon: DesktopIconProps = {
  id: 'missingno',
  description: '',
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
    description: '',
    icon: 'PC',
    label: 'My Computer',
    alt: 'My PC',
    hidden: false,
    DynamicContent: MyComputer
  },
  {
    id: 'documents',
    description: '',
    icon: 'Documents',
    label: 'My Documents',
    alt: 'My Documents',
    hidden: true,
    DynamicContent: MyDocuments
  },
  {
    id: 'bin',
    description: '',
    icon: 'RecycleBin',
    label: 'Recycle Bin',
    alt: 'Recycle Bin',
    hidden: false,
    DynamicContent: RecycleBin
  },
  {
    id: 'internet',
    description: '',
    icon: 'Explorer',
    label: 'Internet',
    alt: 'Internet',
    hidden: false,
    DynamicContent: BrowserIframe
  },
  {
    id: 'gallery',
    description: '',
    icon: 'Tree',
    label: 'My Gallery',
    alt: 'My Gallery',
    hidden: false,
    DynamicContent: ArtGallery
  },
  {
    id: 'script',
    description: '',
    icon: 'Script',
    label: 'Completely harmless file, there is nothing to worry about',
    alt: 'Completely harmless file',
    hidden: true,
    DynamicContent: SuspiciousScript
  }
]