<script lang="ts">
  import type { Snippet } from 'svelte'
  import { browser } from '$app/environment'
  import MenuButton from '$lib/components/MenuButton.svelte'
  import Image from '$lib/components/Image.svelte'

  type FolderProps = {
    address: string
    description: string
    name: string
    documents: Snippet
  }

  let { address, description, name, documents }: FolderProps = $props()
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

<div class="box-border flex max-h-[80vh] max-w-[80vw] flex-1 flex-col overflow-hidden">
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

  <div class="relative flex h-full flex-1 overflow-auto bg-white">
    <div class="sticky top-0 flex w-[175px] flex-col bg-blue-100">
      <div class="flex flex-col gap-4 p-6 pb-1">
        <Image className="w-[32px]" image="Documents" />
        <h1 class="bold text-2xl/6">{name}</h1>
      </div>
      <hr />
      <div class="p-6">
        <p class="text-base/4">{description}</p>
      </div>
    </div>

    <div class="flex flex-1 flex-wrap content-start gap-4 p-4">
      {@render documents()}
    </div>
  </div>
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
