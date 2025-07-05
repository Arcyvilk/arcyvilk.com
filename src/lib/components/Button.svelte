<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'

  interface ButtonProps extends HTMLButtonAttributes {
    label: string
  }
  let allProps: ButtonProps = $props()

  const { label, ...rest } = allProps
</script>

<button
  class="bg-accent-bg text-accent-text cursor-pointer rounded-lg px-3 py-2 font-bold shadow-lg"
  {...rest}>{label}</button
>
