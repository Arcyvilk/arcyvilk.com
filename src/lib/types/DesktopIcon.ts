import type { ImageType } from '$lib/assets/images'

export type DesktopIconId = 'pc' | 'documents' | 'bin' | 'script'

export type DesktopIconProps = {
  id: DesktopIconId
  icon: ImageType
  label: string
  alt: string
  handleDoubleClick?: () => void
}