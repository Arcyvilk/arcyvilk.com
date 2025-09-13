export const canvasProtection = () => {
  console.debug("Enable preventive measurements...")

  enableDataUrlProtection()
  enableBlobProtection()
  enableSaveProtection()
}

const enableDataUrlProtection = () => {
  const originalToDataURL = HTMLCanvasElement.prototype.toDataURL

  HTMLCanvasElement.prototype.toDataURL = function(...args) {
    console.warn("⚠️ Unauthorized canvas method use detected...")
    loadFakeImage(this)
    const newFn = originalToDataURL.call(this, ...args)
    return newFn
  }
}

const enableBlobProtection = () => {
  const originalToBlob = HTMLCanvasElement.prototype.toBlob
  
  HTMLCanvasElement.prototype.toBlob = function(...args) {
    console.warn("⚠️ Unauthorized canvas method use detected...")
    loadFakeImage(this)
    const newFn = originalToBlob.call(this, ...args)
    return newFn
  }
}

// [TODO] Make it MUCH more robust
const enableSaveProtection = () => {
  const originalAddEventListener = HTMLCanvasElement.prototype.addEventListener;

  // @ts-ignore
  HTMLCanvasElement.prototype.addEventListener = function(...args) {
    // @ts-ignore
    if (args.type === 'contextmenu') {
      loadFakeImage(this)
    }
  
    // @ts-ignore
    return originalAddEventListener.call(this, ...args);
  }

}

export const loadFakeImage = function(currentCanvas: HTMLCanvasElement) {
  try {
    const context = currentCanvas.getContext('2d')
    context?.clearRect(0, 0, currentCanvas.width, currentCanvas.height)

    const fakeImage = new Image()
    fakeImage.src = 'illustrations/image.png'

    fakeImage.onload = () => {
      context?.drawImage(fakeImage, 0, 0)
    }
  } catch (error) {
    throw new Error("No.")
  }
}