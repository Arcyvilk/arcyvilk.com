<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown'
  import MenuButton from '$lib/components/MenuButton.svelte'

  let { args } = $props<{ args?: Record<string, unknown> }>()

  let text = $derived(args?.text)
</script>

<div class="box-border flex flex-1 flex-col overflow-hidden p-1">
  <div class="separator-border mb-1 flex">
    <MenuButton label="File" shortcutLetter="F" />
    <MenuButton label="Edit" shortcutLetter="E" />
    <MenuButton label="Search" shortcutLetter="S" />
    <MenuButton label="Help" shortcutLetter="H" />
  </div>

  <div
    class="notepad-border flex h-full flex-1 flex-col overflow-y-auto bg-white p-2 font-['Inconsolata'] font-bold text-wrap"
  >
    <SvelteMarkdown source={text} />
  </div>
</div>

<style scoped>
  .notepad-border {
    border-width: 3px;
    border-style: ridge;

    border-bottom-color: var(--color-highlight-bg);
    border-right-color: var(--color-highlight-bg);
    border-top-color: var(--color-shadow-bg);
    border-left-color: var(--color-shadow-bg);
  }
</style>
