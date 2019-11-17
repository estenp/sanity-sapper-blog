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

    > div {
      padding-top: 4rem;
    }
  }

  .page-content {
    padding-left: 2rem;
  }
</style>

<Nav {segment} />
<main class="border-left">
  <div class="border-left">
    <slot />
  </div>
</main>
