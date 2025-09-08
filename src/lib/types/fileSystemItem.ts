import type { Win98Icon } from "$lib/assets"
import type { Component } from "svelte"

export type FileSystemItem = {
  id: string
  description: string
  icon: Win98Icon
  label: string
  alt: string
  hidden: boolean
  WindowContent: Component
  windowArgs?: Record<string, unknown>
}
