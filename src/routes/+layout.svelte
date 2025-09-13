<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import '../style.css'

  dayjs.extend(relativeTime)

  let { children } = $props()
</script>

<div class="relative h-screen w-screen">
  {@render children()}
</div>
