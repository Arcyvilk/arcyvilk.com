import type { FolderIconProps } from "$lib/types/folderIcon";

export const artGalleryIcons: FolderIconProps[] = [
  {
    id: 'folder',
    type: 'folder',
    icon: 'Folder',
    label: 'Folder',
    alt: 'Folder Icon',
    hidden: false
  },
  {
    id: 'notepad',
    type: 'notepad',
    icon: 'TextFile',
    label: 'Notepad',
    alt: 'Notepad Icon',
    hidden: false
  },
  {
    id: 'image',
    type: "image",
    icon: 'PaintFile',
    label: 'Image',
    alt: 'Image Icon',
    hidden: false
  }
];
