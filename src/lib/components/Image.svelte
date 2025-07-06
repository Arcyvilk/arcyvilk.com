<script lang="ts">
  import images, { type ImageType } from '$lib/assets/images'

  type ImageProps = {
    image: ImageType
    alt?: string
    className?: string
  }

  const { image, alt, className }: ImageProps = $props()
  const src = images[image]
</script>

<img {src} {alt} class={className} />
