<script lang="ts">
  let { href, label } = $props()
</script>

<a class="reddit__header-link" {href}>{label}</a>

<style>
  .reddit__header-link {
    font-size: 10px;
    text-transform: uppercase;
  }
</style>
