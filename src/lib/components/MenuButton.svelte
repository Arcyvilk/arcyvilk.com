<script lang="ts">
  type MenuButtonProps = {
    label: string
    shortcutLetter?: string
    onclick?: () => void
  }

  let { label, shortcutLetter, onclick }: MenuButtonProps = $props()

  const handleClick = () => {
    alert('Not implemented yet T_T')
    if (onclick) onclick()
  }

  const highlighted = $derived.by(() => {
    if (!shortcutLetter) return label

    const regex = new RegExp(shortcutLetter, 'gi')
    return label.replace(regex, (match: string) => `<span class="underline">${match}</span>`)
  })
</script>

<button class="menu-button" onclick={handleClick}>{@html highlighted}</button>

<style>
  .menu-button {
    padding-inline: 12px;
    margin: 1px;
    border: 1px solid transparent;
    box-sizing: border-box;

    &:hover {
      background-color: #b0b0b0;
      cursor: pointer;
      border: 1px solid var(--color-highlight-bg);

      border-bottom-color: var(--color-shadow-bg);
      border-right-color: var(--color-shadow-bg);
    }

    &:active {
      background-color: #b0b0b0;
      cursor: pointer;
      border: 1px solid var(--color-highlight-bg);

      border-top-color: var(--color-shadow-bg);
      border-left-color: var(--color-shadow-bg);
    }
  }
</style>
