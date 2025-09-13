<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import { canvasProtection } from '$lib/utils'
  import '../style.css'

  dayjs.extend(relativeTime)

  let { children } = $props()

  export const load = () => {
    canvasProtection()
  }
</script>

<div class="relative h-screen w-screen">
  {@render children()}
</div>
