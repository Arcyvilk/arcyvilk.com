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

<div class="separator-border flex px-2">
  <MenuButton label="File" shortcutLetter="F" />
  <MenuButton label="Edit" shortcutLetter="E" />
  <MenuButton label="View" shortcutLetter="V" />
  <MenuButton label="Go" shortcutLetter="G" />
  <MenuButton label="Favourites" shortcutLetter="v" />
  <MenuButton label="Help" shortcutLetter="H" />
</div>

<div class="separator-border flex items-center gap-4 pl-2">
  <button onclick={handleBack}>⬅️</button>
  <span>Address</span>
  <input class="address-bar-border h-8 w-full bg-white px-2" value={fakeAddress} readonly />
</div>

<div class="flex flex-1 overflow-auto">
  <iframe
    id="browser-preview"
    class="min-h-[75vh] w-full min-w-[80vw]"
    src={realIframePath}
    title="Embedded content"
    frameborder="0"
    allow="autoplay; clipboard-write; encrypted-media; web-share"
    allowfullscreen
  ></iframe>
</div>

<style scoped>
  .separator-border {
    border-top: 1px solid var(--color-highlight-bg);
    border-bottom: 1px solid var(--color-shadow-bg);
  }

  .address-bar-border {
    border-width: 3px;
    border-style: solid;

    border-bottom-color: var(--color-highlight-bg);
    border-right-color: var(--color-highlight-bg);
    border-top-color: var(--color-shadow-bg);
    border-left-color: var(--color-shadow-bg);
  }
</style>
