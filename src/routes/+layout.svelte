<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'

  import '../style.css'

  dayjs.extend(relativeTime)

  let { children } = $props()
</script>

<div class="h-screen w-screen bg-white">
  {@render children()}
</div>
