<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'

  import '../style.css'

  dayjs.extend(relativeTime)

  let { children } = $props()
</script>

{@render children()}
