export const canvasProtection = () => {
  const originalToDataURL = HTMLCanvasElement.prototype.toDataURL
  const originalToBlob = HTMLCanvasElement.prototype.toBlob

  HTMLCanvasElement.prototype.toDataURL = function(...args) {
    loadFakeImage(this)
    const newFn = originalToDataURL.call(this, ...args)
    return newFn
  }

  HTMLCanvasElement.prototype.toBlob = function(...args) {
    loadFakeImage(this)
    const newFn = originalToBlob.call(this, ...args)
    return newFn
  }
}

const loadFakeImage = function(currentCanvas: HTMLCanvasElement) {
  try {
    const context = currentCanvas.getContext('2d')
    context?.clearRect(0, 0, currentCanvas.width, currentCanvas.height)

    const fakeImage = new Image()
    fakeImage.src = 'illustrations/image.png'

    fakeImage.onload = () => {
      context?.drawImage(fakeImage, 0, 0)
    }
  } catch (error) {
    throw new Error("No")
  }
}