<script lang="ts">
</script>

<div class="h-[80vh] w-[80vw]">
  <div class="separator-border flex gap-2 px-2 pl-4">
    <button class="px-2 hover:bg-gray-400"><span class="underline">F</span>ile</button>
    <button class="px-2 hover:bg-gray-400"><span class="underline">E</span>dit</button>
    <button class="px-2 hover:bg-gray-400"><span class="underline">V</span>iew</button>
    <button class="px-2 hover:bg-gray-400"><span class="underline">G</span>o</button>
    <button class="px-2 hover:bg-gray-400">F<span class="underline">a</span>vourites</button>
    <button class="px-2 hover:bg-gray-400"><span class="underline">H</span>elp</button>
  </div>

  <div class="separator-border flex items-center gap-2 pl-2">
    <span>Address</span>
    <input class="address-bar-border h-8 w-full bg-white px-2" value="https://www.reddit.com" />
  </div>

  <iframe
    class="h-full w-full"
    src={'/reddit'}
    title="Embedded content"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
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
