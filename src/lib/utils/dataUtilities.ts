export const fetchTextFile = async (fileSrc: string) => {
  const response = await fetch(fileSrc)

  if (!response.ok) {
    throw new Error("Not OK :C")
  }

  const text = await response.text()

  return text
}

export const getBase64FromString = async (text: string) => {
  const uint8Array = new TextEncoder().encode(text)

  let binary = '';

  for (let i = 0; i < uint8Array.length; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }

  const base64 = btoa(binary);
  
  return base64
}

export const getBlobFromBase64 = async (base64: string) => {
  const binary = atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  
  const blob = new Blob([bytes], { type: 'image/png' });

  return blob
}

export const getBitmapFromBlob = async (blob: Blob) => {
  const bitmap = await createImageBitmap(blob)

  return bitmap
}