<script lang="ts">
  import { preparePreview } from '$lib/utils'
  import { loadFakeImage } from '$lib/utils/canvasProtection'
  import { onMount } from 'svelte'

  let { args } = $props<{ args?: { fileId: string } }>()

  let fileId = $derived(args?.fileId)
  let width = $state(400)
  let height = $state(600)

  onMount(() => {
    const loadRealImageIntoCanvas = async () => {
      const canvas = document.getElementById('preview-canvas') as HTMLCanvasElement
      const context = canvas?.getContext('2d')

      if (!context) {
        console.error('Failed to get canvas context')
        return
      }

      canvas.addEventListener('contextmenu', (e) => {
        loadFakeImage(canvas)
      })

      const bitmap = await preparePreview(fileId)

      width = bitmap.width
      height = bitmap.height

      canvas.width = width
      canvas.height = height

      context.drawImage(bitmap, 0, 0)

      bitmap.close()
    }

    loadRealImageIntoCanvas()
  })
</script>

<div
  class="box-border flex min-h-[80vh] min-w-[80vw] flex-1 flex-col items-center justify-start overflow-scroll bg-black"
>
  <canvas id="preview-canvas" class="max-w-full"></canvas>
</div>
