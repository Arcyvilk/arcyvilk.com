<script lang="ts">
</script>

<div class="loading-screen">
  <div class="loading-screen__windows"></div>
</div>

<style>
  .loading-screen {
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    background-color: black;
    padding: 32px;
  }

  .loading-screen__windows {
    display: flex;
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/illustrations/win98.jpg');
  }
</style>
