<script>
  import { transition, fade } from "svelte/transition";
  export let isVisible;

  const handleKeydown = (e) => (e.keyCode === 27) && closeModal();
  const closeModal = () => isVisible = false;


</script>

<style lang="scss">
  @import "../../static/_variables.scss";
  .modal {
    font-size: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2;
    }
    .container {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      z-index: 3;
      height: 100vh;
      :global(img) {
        height: 100%;
      }
      .close-button {
        cursor: pointer;
        position: absolute;
        right: 5px;
        top: 5px;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        z-index: 4;

        border: solid 2px $red;
        text-weight: bold;
        background: inherit;
        color: black;
      }
      .close-button:active,
      .close-button:hover {
        background: $background;
        color: $plain;
      }
    }
  }
</style>

<svelte:window on:keydown={handleKeydown}/>

{#if isVisible}
  <div transition:fade={{duration: 100}} class="modal">

    <div transition:fade={{duration: 100}} class="overlay" />

    <div class="container">
      <button
        autofocus
        on:click={closeModal}
        class="close-button"
        aria-label="Close dialog">
        X
      </button>
      <slot />
    </div>
  </div>
{/if}
