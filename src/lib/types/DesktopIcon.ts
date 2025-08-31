import type { ImageType } from '$lib/assets/images'

export type TDesktopIcon = {
  icon: ImageType
  label: string
  alt: string
  handleDoubleClick?: () => void
}