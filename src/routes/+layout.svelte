<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'

  import '../style.css'

  dayjs.extend(relativeTime)

  let { children } = $props()
</script>

<div class="h-screen w-screen bg-white">
  <div class="crt absolute h-screen w-screen"></div>
  {@render children()}
</div>

<style>
  .crt {
    pointer-events: none;
    background: linear-gradient(to top, #000000, #000000, #333333, #333333);
    background-size: cover;
    background-size: 100% 1px;
    opacity: 15%;
    z-index: 99999999999999;
  }

  @media screen {
    .crt {
      animation: scanlines infinite 55s linear;
    }
  }
  @keyframes scanlines {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -10px;
    }
  }
</style>
