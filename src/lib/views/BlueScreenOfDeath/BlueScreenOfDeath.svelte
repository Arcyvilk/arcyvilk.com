<script lang="ts">
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'

  onMount(() => {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        goto('/')
      } else {
        window.close()
      }
    })
  })
</script>

<div class="bsod flex h-screen w-screen flex-col items-center justify-center gap-12 text-white">
  <p class="bsod__header">Windows</p>

  <p>
    A fatal exception 0E has occurred at 0028:C0034B23. The current application will be terminated.
  </p>

  <ul class="bsod__steps">
    <li class="bsod__step">* Press any key to terminate the current application.</li>
    <li class="bsod__step">
      * Press ENTER again to restart your computer. You will lose any unsaved information in all
      applications.
    </li>
  </ul>

  <p>Press any key to continue <span class="cursor">_</span></p>
</div>

<style scoped>
  .bsod {
    background-color: #2323af;
    font-family: 'DOS', 'Win95FA', sans-serif;
    font-size: 1.2rem;
    line-height: 1.2rem;
    padding: 64px;
  }

  .bsod__header {
    color: #2323af;
    background-color: #aaaaaa;
    padding-inline: 16px;
  }

  .bsod__steps {
    margin: 0;
    padding: 0;
  }

  .bsod__step {
    list-style-type: none;
  }

  .cursor {
    display: inline-block;
    animation: blink 1s steps(1, start) infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
