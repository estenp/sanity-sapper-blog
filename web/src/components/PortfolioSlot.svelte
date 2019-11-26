<script>
  import Modal from "../components/Modal";
  export let url;
  let modalVisible = false;

  $: console.log(modalVisible);
</script>

<style lang="scss">
  @import "../../static/_variables.scss";
  .portfolio-slot {
    cursor: pointer;
    margin-bottom: 10px;
    padding: 10px;
    border: solid 4px $red;
    border-radius: 5px;
  }

  .portfolio-slot :global(img) {
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .portfolio-slot :global(a img) {
    // -webkit-transform: perspective(1px) translateZ(0);
    // transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: all;
    transition-property: all;
  }
  .portfolio-slot > :global(div) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .portfolio-slot:hover :global(a img) {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
  }
</style>

<div class="portfolio-slot">
  <a href={url ? url : "javascript:void()"} on:click={() => (modalVisible = !modalVisible)}>
    <slot />
  </a>
</div>

{#if modal}
<Modal bind:isVisible={modalVisible}>
  <slot name="modalContent" />
</Modal>
{/if}
