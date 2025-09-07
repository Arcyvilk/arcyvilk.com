import { type  FolderIcon } from "$lib/types/folderIcon";
import Home from "$lib/views/Home/Home.svelte";

export const artGalleryIcons: FolderIcon[] = [
  {
    id: 'folder',
    description: "",
    icon: 'Folder',
    label: 'Folder',
    alt: 'Folder Icon',
    hidden: false,
    DynamicContent: Home
  },
  {
    id: 'notepad',
    description: "",
    icon: 'TextFile',
    label: 'Notepad',
    alt: 'Notepad Icon',
    hidden: false,
    DynamicContent: Home
  },
  {
    id: 'image',
    description: "",
    icon: 'PaintFile',
    label: 'Image',
    alt: 'Image Icon',
    hidden: false,
    DynamicContent: Home
  }
];
