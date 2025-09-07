import ImagePreview from "$lib/containers/ImagePreview/ImagePreview.svelte";
import { type FolderIcon } from "$lib/types/folderIcon";

export const recycleBinIcons: FolderIcon[] = [
  {
    id: 'hopes',
    description: "",
    icon: 'TextFile',
    label: 'Hopes',
    alt: 'Hopes',
    hidden: false,
    DynamicContent: ImagePreview,
  },
  {
    id: 'dreams',
    description: "",
    icon: 'TextFile',
    label: 'Dreams',
    alt: 'Dreams',
    hidden: false,
    DynamicContent: ImagePreview,
  }
];
