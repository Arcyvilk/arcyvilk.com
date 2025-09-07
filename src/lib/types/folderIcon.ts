import type { Win98DesktopIcon } from "$lib/assets"
import type { Component } from "svelte"

export type FolderIconProps = {
  id: string
  description: string
  icon: Win98DesktopIcon
  label: string
  alt: string
  hidden: boolean
  DynamicContent: Component
}
