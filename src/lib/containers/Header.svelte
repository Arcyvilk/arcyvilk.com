<script lang="ts">
  import Button from '$lib/components/Button.svelte'

  const onThemeChange = (e: MouseEvent) => {
    const htmlElement = document.querySelector('html')
    if (!htmlElement) return

    const currentTheme = htmlElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    htmlElement.setAttribute('data-theme', newTheme)
  }
</script>

<header
  class="bg-window-bg text-foreground-text sticky flex flex-row items-center justify-between gap-1 p-3 shadow-lg"
>
  <h1 class="font-c text-xl font-bold uppercase"><a href="/">Arcyvilk.com</a></h1>
  <div><Button label="Theme" onclick={onThemeChange} /></div>
</header>
