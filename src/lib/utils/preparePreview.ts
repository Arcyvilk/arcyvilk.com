import { fetchTextFile, getBase64FromString, getBitmapFromBlob, getBlobFromBase64 } from "$lib/utils/dataUtilities";

export const preparePreview = async (fileSrc: string) => {
  const text = await fetchTextFile(fileSrc)
  const base64 = await getBase64FromString(text)
  const blob = await getBlobFromBase64(`data:text/plain;base64,${base64}`)
  const bitmap = await getBitmapFromBlob(blob)

  return bitmap
}