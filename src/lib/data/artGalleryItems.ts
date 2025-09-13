import ImagePreview from "$lib/containers/ImagePreview/ImagePreview.svelte";
import { type FileSystemItem } from "$lib/types/fileSystemItem";

export const artGalleryItems: FileSystemItem[] = [
  {
    id: 'the_blight',
    description: "",
    icon: 'PaintFile',
    label: 'The Blight',
    alt: 'The Blight',
    hidden: false,
    WindowContent: ImagePreview,
    windowArgs: { fileId: 'fcc7949d-d0ca-4bb2-8eeb-d4f3e8a1a66a' }
  },
  {
    id: 'the_lich',
    description: "",
    icon: 'PaintFile',
    label: 'The Lich',
    alt: 'The Lich',
    hidden: false,
    WindowContent: ImagePreview,
    windowArgs: { fileId: '015ed966-f6fe-46a7-9cd6-4199b8ea86d6' }
  },
  {
    id: 'the_mother',
    description: "",
    icon: 'PaintFile',
    label: 'The Mother',
    alt: 'The Mother',
    hidden: false,
    WindowContent: ImagePreview,
    windowArgs: { fileId: 'e45e022f-05c8-4b97-862c-a29088a4f02e' }
  }
];
