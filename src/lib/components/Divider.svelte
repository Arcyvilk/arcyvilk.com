<div class="divider">
  <div class="divider--left"></div>
  <div class="divider--right"></div>
</div>

<style>
  .divider {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1px;
  }

  .divider--left {
    border-style: inset;
    border-width: 2px;
    border-inline-start-color: var(--color-shadow-bg);
    border-inline-end-color: var(--color-highlight-bg);
    height: 100%;
  }

  .divider--right {
    border-style: outset;
    border-width: 2px;
    border-inline-start-color: var(--color-highlight-bg);
    border-inline-end-color: var(--color-shadow-bg);
    height: 66.67%;
  }
</style>
