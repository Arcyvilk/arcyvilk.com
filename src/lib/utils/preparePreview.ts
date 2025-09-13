import { CDN_URL, PREVIEW_PATH } from "$lib/env"

export const preparePreview = async (id: string) => {
  const cdnUrl = `${CDN_URL}/${PREVIEW_PATH}/${id}.txt`
  const response = await fetch(cdnUrl)
  
  if (!response.ok) {
    throw new Error("Not OK :C")
  }

  const arrayBuffer = await response.arrayBuffer()

  const blob = new Blob([arrayBuffer], { type: "image/png" })

  const bitmap = await createImageBitmap(blob)

  return bitmap
}