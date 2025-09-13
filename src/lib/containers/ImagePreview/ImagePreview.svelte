<script lang="ts">
  let { args } = $props<{ args?: { imgSrc: string } }>()

  let imgSrc = $derived(args?.imgSrc)
</script>

<div
  class="box-border flex min-h-[80vh] min-w-[80vw] flex-1 flex-col items-center justify-start overflow-scroll bg-black"
>
  <img class="max-w-full" src={imgSrc} alt="Preview" />
</div>
