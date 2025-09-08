import Documents from '$lib/assets/win98Icons/documents.webp'
import Explorer from '$lib/assets/win98Icons/explorer.webp'
import Folder from '$lib/assets/win98Icons/folder.webp'
import PaintFile from '$lib/assets/win98Icons/paintFile.webp'
import PC from '$lib/assets/win98Icons/pc.webp'
import RecycleBin from '$lib/assets/win98Icons/bin.webp'
import Script from '$lib/assets/win98Icons/script.webp'
import Shortcut from '$lib/assets/win98Icons/shortcut.webp'
import TextFile from '$lib/assets/win98Icons/textFile.webp'
import Tree from '$lib/assets/win98Icons/tree.webp'

const win98Icons = {
  Documents,
  Explorer,
  Folder,
  PaintFile,
  PC,
  RecycleBin,
  Script,
  Shortcut,
  TextFile,
  Tree,
}

export type Win98Icon = keyof typeof win98Icons

export { win98Icons }
