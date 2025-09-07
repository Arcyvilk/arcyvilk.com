<script lang="ts">
  let { args } = $props<{ args?: Record<string, unknown> }>()

  let imgSrc = $derived(args?.imgSrc)
</script>

<div class="box-border flex flex-1 flex-col items-center justify-start overflow-scroll bg-black">
  <img src={imgSrc} alt="Preview" />
</div>
