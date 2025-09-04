<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import type { HTMLAttributes } from 'svelte/elements'

  dayjs.extend(relativeTime)

  interface DateProps extends HTMLAttributes<HTMLSpanElement> {
    date: Date
  }

  let allProps: DateProps = $props()

  const { date, ...rest } = allProps

  const dateFromNow = dayjs(date).fromNow()
</script>

<span {...rest} title={date}>{dateFromNow}</span>
