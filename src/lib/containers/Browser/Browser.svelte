<script lang="ts">
  import { browser } from '$app/environment'
  import MenuButton from '$lib/components/MenuButton.svelte'

  let { args } = $props<{ args?: { realIframePath: string; fakeIframePath: string } }>()
  let { realIframePath, fakeIframePath } = $derived(args)

  let fakePath = $state('')
  let fakeAddress = $derived(fakeIframePath + fakePath)

  $effect(() => {
    const updateIframePath = ({ data }: MessageEvent<{ type: string; path: string }>) => {
      const { type, path } = data

      if (type === 'IFRAME_PATH_UPDATE') {
        fakePath = path.replace(realIframePath, '')
      }
    }

    window.addEventListener('message', updateIframePath)

    return () => window.removeEventListener('message', updateIframePath)
  })

  const handleBack = () => {
    if (browser) {
      window.history.back()
    }
  }
</script>

<div class="browser__menu border">
  <MenuButton label="File" shortcutLetter="F" />
  <MenuButton label="Edit" shortcutLetter="E" />
  <MenuButton label="View" shortcutLetter="V" />
  <MenuButton label="Go" shortcutLetter="G" />
  <MenuButton label="Favourites" shortcutLetter="v" />
  <MenuButton label="Help" shortcutLetter="H" />
</div>

<div class="browser__address-bar border">
  <button onclick={handleBack}>⬅️</button>
  <span>Address</span>
  <input class="browser__address-bar__input" value={fakeAddress} readonly />
</div>

<div class="browser__content">
  <iframe
    id="browser-preview"
    class="browser__content__iframe"
    src={realIframePath}
    title="Embedded content"
    frameborder="0"
    allow="autoplay; clipboard-write; encrypted-media; web-share"
    allowfullscreen
  ></iframe>
</div>

<style>
  .browser__menu {
    display: flex;
    padding-inline: 8px;
    padding-block: 4px;
  }

  .browser__address-bar {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-left: 8px;
  }

  .browser__address-bar__input {
    background-color: white;
    padding-inline: 8px;
    width: 100%;
    height: 32px;

    border-width: 3px;
    border-style: solid;

    border-bottom-color: var(--color-highlight-bg);
    border-right-color: var(--color-highlight-bg);
    border-top-color: var(--color-shadow-bg);
    border-left-color: var(--color-shadow-bg);
  }

  .browser__content {
    display: flex;
    flex: 1;
    overflow: auto;
  }

  .browser__content__iframe {
    min-height: 75vh;
    width: 100%;
    min-width: 80vw;
  }

  .border {
    border-top: 1px solid var(--color-highlight-bg);
    border-bottom: 1px solid var(--color-shadow-bg);
  }
</style>
