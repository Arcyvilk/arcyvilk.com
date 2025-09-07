<script lang="ts">
  import { browser } from '$app/environment'

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
    <button class="menu-button"><span class="underline">F</span>ile</button>
    <button class="menu-button"><span class="underline">E</span>dit</button>
    <button class="menu-button"><span class="underline">V</span>iew</button>
    <button class="menu-button"><span class="underline">G</span>o</button>
    <button class="menu-button"><span class="underline">F</span>avourites</button>
    <button class="menu-button"><span class="underline">H</span>elp</button>
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

  <div class="flex flex-1">
    <iframe
      class="min-h-[75vh] w-full"
      src="/reddit"
      title="Embedded content"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; web-share"
      allowfullscreen
    ></iframe>
  </div>
</div>

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
