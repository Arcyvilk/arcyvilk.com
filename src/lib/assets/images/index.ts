import Documents from '$lib/assets/images/documents.webp'
import PC from '$lib/assets/images/pc.webp'
import RecycleBin from '$lib/assets/images/bin.webp'

const images = { Documents, PC, RecycleBin }

export type ImageType = keyof typeof images

export default images
