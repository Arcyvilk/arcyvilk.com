<script lang="ts">
  import { browser } from '$app/environment'
  import MenuButton from '$lib/components/MenuButton.svelte'

  let currentRoute = $state('/')

  if (browser) {
    currentRoute = window.location.pathname
  }

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
  <input
    class="address-bar-border h-8 w-full bg-white px-2"
    readonly
    value={`https://www.reddit.com`}
  />
</div>

<div class="flex flex-1 overflow-auto">
  <iframe
    class="min-h-[75vh] w-full min-w-[80vw]"
    src="/reddit"
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
