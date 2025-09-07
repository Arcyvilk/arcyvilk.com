import ImagePreview from "$lib/containers/ImagePreview/ImagePreview.svelte";
import { type FolderIcon } from "$lib/types/folderIcon";

export const artGalleryIcons: FolderIcon[] = [
  {
    id: 'folder',
    description: "",
    icon: 'Folder',
    label: 'Folder',
    alt: 'Folder Icon',
    hidden: false,
    DynamicContent: ImagePreview
  },
  {
    id: 'notepad',
    description: "",
    icon: 'TextFile',
    label: 'Notepad',
    alt: 'Notepad Icon',
    hidden: false,
    DynamicContent: ImagePreview
  },
  {
    id: 'image',
    description: "",
    icon: 'PaintFile',
    label: 'Image',
    alt: 'Image Icon',
    hidden: false,
    DynamicContent: ImagePreview
  }
];
