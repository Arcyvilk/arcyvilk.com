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

<div class="preview">
  <canvas id="preview-canvas" class="max-w-full"></canvas>
</div>

<style>
  .preview {
    box-sizing: border-box;
    display: flex;
    min-height: 80vh;
    min-width: 80vw;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow: scroll;
    background-color: black;
  }
</style>
