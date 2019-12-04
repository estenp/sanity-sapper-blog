<script>
  import Modal from "../components/Modal";
  import { onMount } from "svelte";

  export let url;
  export let modal;
  let modalVisible = false;

// console.log($$props.$$slots.modalContent)
  /* onMount(() => {
    let modal = !!($$props.$$slots.modalContent);
    console.log(modal)
  }) */
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

  .portfolio-slot {
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

  .portfolio-slot:hover {
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
  }
</style>

<div class="portfolio-slot">
  <a
    href={url ? url : "javascript:void(0)"}
    on:click={() => {modalVisible = !modalVisible}}
    target={url ? "_blank" : "_self"}>
    <slot />
  </a>
</div>

{#if modal === true}
<Modal bind:isVisible={modalVisible}>
  <slot name="modalContent" />
</Modal>
{/if}
