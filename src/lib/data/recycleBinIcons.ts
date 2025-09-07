import Notepad from "$lib/containers/Notepad/Notepad.svelte";
import { type FolderIcon } from "$lib/types/folderIcon";

export const recycleBinIcons: FolderIcon[] = new Array(50)
  .fill(null)
  .map((_, index) => {
    if (index % 2 === 0) 
      return {
        id: 'hopes',
        description: "",
        icon: 'TextFile',
        label: 'Hopes',
        alt: 'Hopes',
        hidden: false,
        DynamicContent: Notepad,
        contentArgs: { text: ";u;" }
      };
    else
      return {
        id: 'dreams',
        description: "",
        icon: 'TextFile',
        label: 'Dreams',
        alt: 'Dreams',
        hidden: false,
        DynamicContent: Notepad,
        contentArgs: { text: "QQ" }
      };
    }
  );
