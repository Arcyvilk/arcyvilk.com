<script lang="ts">
  import images, { type TImage } from '$lib/assets'

  type ImageProps = {
    image: TImage
    alt?: string
    className?: string
    w?: string
    h?: string
  }

  const { image, alt, className, w, h }: ImageProps = $props()

  let src = $derived(images[image])
</script>

<img class="image {className}" {src} {alt} width={w} height={h} draggable="false" />

<style>
  .image {
    object-fit: contain;
    user-select: none;
  }
</style>
