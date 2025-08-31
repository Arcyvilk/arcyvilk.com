import Documents from '$lib/assets/images/documents.webp'
import MissingNo from '$lib/assets/images/missingno.webp'
import PC from '$lib/assets/images/pc.webp'
import RecycleBin from '$lib/assets/images/bin.webp'
import Script from '$lib/assets/images/script.webp'

const images = { Documents, MissingNo, PC, RecycleBin, Script }

export type ImageType = keyof typeof images

export default images
