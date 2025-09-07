<script lang="ts">
  import { browser } from '$app/environment'
  import MenuButton from '$lib/components/MenuButton.svelte'

  type FolderProps = {
    address: string
  }
  let { address }: FolderProps = $props()
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

<div class="box-border flex h-[80vh] w-[80vw] flex-1 flex-col overflow-hidden">
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
    <input class="address-bar-border h-8 w-full bg-white px-2" readonly value={address} />
  </div>

  <div class="flex flex-1">Dupa</div>
</div>

<style>
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
