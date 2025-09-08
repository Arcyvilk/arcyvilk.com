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
    windowArgs: { imgSrc: 'https://cdn.arcyvilk.com/art_gallery/the_blight.jpg' }
  },
  {
    id: 'the_lich',
    description: "",
    icon: 'PaintFile',
    label: 'The Lich',
    alt: 'The Lich',
    hidden: false,
    WindowContent: ImagePreview,
    windowArgs: { imgSrc: 'https://cdn.arcyvilk.com/art_gallery/the_lich.jpg' }
  },
  {
    id: 'the_mother',
    description: "",
    icon: 'PaintFile',
    label: 'The Mother',
    alt: 'The Mother',
    hidden: false,
    WindowContent: ImagePreview,
    windowArgs: { imgSrc: 'https://cdn.arcyvilk.com/art_gallery/the_mother.jpg' }
  }
];
