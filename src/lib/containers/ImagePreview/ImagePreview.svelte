<script lang="ts">
  import { onMount } from 'svelte'

  let { args } = $props<{ args?: { imgSrc: string } }>()

  let imgSrc = $derived(args?.imgSrc)
  let width = $state(400)
  let height = $state(600)

  onMount(() => {
    const loadRealImageIntoCanvas = () => {
      const canvas = document.getElementById('preview-canvas') as HTMLCanvasElement
      const context = canvas?.getContext('2d')

      if (!context) {
        console.error('Failed to get canvas context')
        return
      }

      const image = new Image()
      image.src = imgSrc

      image.onload = () => {
        width = image.width
        height = image.height

        canvas.width = width
        canvas.height = height

        context.drawImage(image, 0, 0)
      }
    }

    loadRealImageIntoCanvas()
  })
</script>

<div
  class="box-border flex min-h-[80vh] min-w-[80vw] flex-1 flex-col items-center justify-start overflow-scroll bg-black"
>
  <canvas id="preview-canvas" class="max-w-full"></canvas>
</div>
