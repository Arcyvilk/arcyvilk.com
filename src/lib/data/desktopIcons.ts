import ArtGallery from '$lib/containers/ArtGallery/ArtGallery.svelte';
import BrowserIframe from '$lib/containers/BrowserIframe/BrowserIframe.svelte';
import MyComputer from '$lib/containers/MyComputer/MyComputer.svelte';
import MyDocuments from '$lib/containers/MyDocuments/MyDocuments.svelte';
import RecycleBin from '$lib/containers/RecycleBin/RecycleBin.svelte';
import SuspiciousScript from '$lib/containers/SuspiciousScript/SuspiciousScript.svelte';
import Home from '$lib/views/Home/Home.svelte';
import type { FileSystemItem } from '$lib/types/fileSystemItem';

export const defaultDesktopIcon: FileSystemItem = {
  id: 'missingno',
  description: '',
  icon: 'Tree',
  label: 'MISSINGNO',
  alt: 'MISSINGNO',
  hidden: true,
  WindowContent: Home
}


export const desktopIcons: FileSystemItem[] = [
  defaultDesktopIcon,
  {
    id: 'pc',
    description: '',
    icon: 'PC',
    label: 'My Computer',
    alt: 'My PC',
    hidden: false,
    WindowContent: MyComputer
  },
  {
    id: 'documents',
    description: '',
    icon: 'Documents',
    label: 'My Documents',
    alt: 'My Documents',
    hidden: true,
    WindowContent: MyDocuments
  },
  {
    id: 'bin',
    description: '',
    icon: 'RecycleBin',
    label: 'Recycle Bin',
    alt: 'Recycle Bin',
    hidden: false,
    WindowContent: RecycleBin
  },
  {
    id: 'internet',
    description: '',
    icon: 'Explorer',
    label: 'Internet',
    alt: 'Internet',
    hidden: false,
    WindowContent: BrowserIframe,
    windowArgs: { realIframePath: "/reddit" }
  },
  {
    id: 'gallery',
    description: '',
    icon: 'Tree',
    label: 'My Gallery',
    alt: 'My Gallery',
    hidden: false,
    WindowContent: ArtGallery
  },
  {
    id: 'script',
    description: '',
    icon: 'Script',
    label: 'Completely harmless file, there is nothing to worry about',
    alt: 'Completely harmless file',
    hidden: true,
    WindowContent: SuspiciousScript
  }
]