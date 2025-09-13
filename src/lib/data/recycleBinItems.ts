import type { Win98Icon } from "$lib/assets";
import Notepad from "$lib/containers/Notepad/Notepad.svelte";
import { type FileSystemItem } from "$lib/types/fileSystemItem";

export const recycleBinItems: FileSystemItem[] = [
  {
        id: 'test',
        description: "",
        icon: 'TextFile',
        label: 'TEST FILE',
        alt: 'TEST FILE',
        hidden: false,
        WindowContent: Notepad,
        windowArgs: { text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus imperdiet ligula, sed cursus arcu posuere vel. Donec sit amet ante et orci egestas tincidunt. Aliquam dictum dignissim nisl dictum condimentum. Mauris ac magna viverra, tincidunt nulla nec, semper metus. Mauris ultricies nisi et vulputate euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nisi orci, egestas sed euismod a, mollis euismod sapien.\n\nMaecenas id ante aliquam, eleifend lectus ut, iaculis metus. Pellentesque id viverra ligula. Integer lacus nisi, lacinia vel scelerisque nec, finibus vitae libero. In pulvinar tempor risus at vehicula. Integer nisl metus, iaculis ac vulputate a, malesuada quis elit. Duis a purus viverra, varius dolor id, scelerisque lorem. Praesent volutpat non metus ut vehicula. Integer tempus mi non felis dapibus bibendum. Nullam aliquam rhoncus dui, ac suscipit dolor vulputate at. Curabitur vulputate malesuada porta. Vestibulum libero tellus, vehicula vitae ex a, finibus feugiat eros. Nullam lobortis lectus orci, ac gravida sem efficitur vel. Curabitur pharetra ultricies massa id pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non lacinia augue.\n\nMorbi id nibh vitae turpis ullamcorper ultricies ut quis enim. Nullam ut convallis tortor, vel egestas neque. Cras id leo fermentum, ultrices quam ac, efficitur ligula. Nunc eu suscipit ipsum. Nam sem odio, blandit a eros sit amet, posuere ultrices erat. Donec massa lacus, vehicula et lacinia sit amet, sagittis a ante. Vivamus euismod odio ultrices commodo faucibus. Ut elementum condimentum commodo. Sed id convallis quam. Integer viverra neque tincidunt vulputate porta. Curabitur auctor porta malesuada. Ut suscipit ante mi, sit amet dapibus justo dapibus eu. Ut sed neque sed arcu tincidunt tempus. Nulla justo eros, aliquam eu convallis vel, ullamcorper in ex. " },
      }, 
      ...new Array(49)
        .fill(null) 
        .map((_, index) => {
          if (index % 2 === 0) 
            return {
              id: 'hopes',
              description: "",
              icon: 'TextFile' as Win98Icon,
              label: 'Hopes',
              alt: 'Hopes',
              hidden: false,
              WindowContent: Notepad,
              windowArgs: { text: ";u;" }
            };
          else
            return {
              id: 'dreams',
              description: "",
              icon: 'TextFile' as Win98Icon,
              label: 'Dreams',
              alt: 'Dreams',
              hidden: false,
              WindowContent: Notepad,
              windowArgs: { text: "QQ" }
            };
          }
    )
  ];
