<script lang="ts">
  import images, { type TImage } from '$lib/assets'

  type ImageProps = {
    image: TImage
    alt?: string
    className?: string
  }

  const { image, alt, className }: ImageProps = $props()
  let src = $derived(images[image])
</script>

<img
  {src}
  {alt}
  draggable="false"
  class="object-contain select-none {className ? className : ''}"
/>
