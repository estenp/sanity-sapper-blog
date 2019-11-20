<script>
  import RouteTransition from "../components/RouteTransition";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "../../static/global.scss";
  main {
    position: relative;
    width: 75%;
    // padding: 2em;
    margin: 0 auto;
    margin-left: 5rem;
    box-sizing: border-box;
    min-height: 85vh;
    > div {
      padding-top: 4rem;
    }
  }
  .border-left {
    padding-left: 4rem;
    border-left: solid 1px rgb(107, 107, 107);
  }
  .slot-container {
    padding-bottom: 4rem;
  }
  @media (max-width: 649px) {
    main {
      margin: auto;
      width: 90vw;
    }
    .border-left {padding: 0; border: none;}
  }
</style>

<Nav {segment} />
<main class="border-left">
  <div class="slot-container border-left">
    <slot />
  </div>
</main>
