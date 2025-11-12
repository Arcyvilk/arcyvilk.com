<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown'
  import MenuButton from '$lib/components/MenuButton.svelte'

  let { args } = $props<{ args?: Record<string, unknown> }>()

  let text = $derived(args?.text)
</script>

<div class="notepad">
  <div class="notepad__menu">
    <MenuButton label="File" shortcutLetter="F" />
    <MenuButton label="Edit" shortcutLetter="E" />
    <MenuButton label="Search" shortcutLetter="S" />
    <MenuButton label="Help" shortcutLetter="H" />
  </div>

  <div class="notepad__content">
    <SvelteMarkdown source={text} />
  </div>
</div>

<style>
  .notepad {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    padding: 4px;
  }

  /* TODO: this should be a separate component or maybe a snippet?  */
  .notepad__menu {
    margin-bottom: 4px;
    display: flex;
  }

  .notepad__content {
    height: 100%;
    overflow-y: auto;
    padding: 8px;

    display: flex;
    flex: 1;
    flex-direction: column;

    background-color: white;

    font-family: 'Inconsolata', monospace;
    font-weight: bold;
    text-wrap: wrap;

    border-width: 3px;
    border-style: ridge;

    border-bottom-color: var(--color-highlight-bg);
    border-right-color: var(--color-highlight-bg);
    border-top-color: var(--color-shadow-bg);
    border-left-color: var(--color-shadow-bg);
  }
</style>
