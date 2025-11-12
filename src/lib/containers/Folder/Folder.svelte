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

<div class="folder__menu border">
  <MenuButton label="File" shortcutLetter="F" />
  <MenuButton label="Edit" shortcutLetter="E" />
  <MenuButton label="View" shortcutLetter="V" />
  <MenuButton label="Go" shortcutLetter="G" />
  <MenuButton label="Favourites" shortcutLetter="v" />
  <MenuButton label="Help" shortcutLetter="H" />
</div>

<div class="folder__address-bar border">
  <button onclick={handleBack}>⬅️</button>
  <span>Address</span>
  <input class="folder__address-bar__input" readonly value={address} />
</div>

<div class="folder__container">
  <div class="folder__sidebar">
    <div class="folder__header">
      <Image w="32px" image="Documents" />
      <h1 class="folder__name">{name}</h1>
    </div>

    <hr />

    <p class="folder__description">{description}</p>
  </div>

  <div class="folder__content">
    {@render documents()}
  </div>
</div>

<style>
  /* TODO: menu and address bar should be a separate component? Or a snippet? */
  .folder__menu {
    display: flex;
    padding-inline: 8px;
    padding-block: 4px;
  }

  .folder__address-bar {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-left: 8px;
  }

  .folder__address-bar__input {
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

  .folder__container {
    position: relative;
    display: flex;
    height: 100%;
    flex: 1;
    overflow: auto;
    background-color: white;
  }

  .folder__sidebar {
    position: sticky;
    top: 0;
    display: flex;
    width: 175px;
    flex-direction: column;
    /* TODO: Move this color to CSS theming file */
    background-color: rgb(219, 234, 255);
  }

  .folder__header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    padding-bottom: 4px;
  }

  .folder__name {
    font-weight: bold;
    font-size: 24px;
  }

  .folder__description {
    padding: 24px;
    line-height: 1rem;
  }

  .folder__content {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-content: start;
    padding: 8px;
  }

  .border {
    border-top: 1px solid var(--color-highlight-bg);
    border-bottom: 1px solid var(--color-shadow-bg);
  }
</style>
