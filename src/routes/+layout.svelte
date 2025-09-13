<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import '../style.css'

  dayjs.extend(relativeTime)

  let { children } = $props()
</script>

<svelte:head>
  <title>ARCYVILK.com</title>
  <meta name="description" content="I'm a random internet person and here's is my stash of random stuff.">

  <!-- 
    OG - Open Graph - are properties which allow the website to set its preview
    in various types of embeds, for example in Discord, Facebook etc.
    https://ogp.me/
  -->
  <meta property="og:title" content="ARCYVILK.com" />
  <meta property="og:description" content="I'm a random internet person and here's is my stash of random stuff." />
  <meta property="og:image" content="/favicon.icon" />
  <meta property="og:image:type" content="image/x-icon" />
  <meta property="og:image:width" content="400" />
  <meta property="og:image:height" content="400" />
  <meta property="og:image:alt" content="My stupid face" />
</svelte:head>

<div class="relative h-screen w-screen">
  {@render children()}
</div>
