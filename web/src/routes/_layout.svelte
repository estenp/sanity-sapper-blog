<script>
  import RouteTransition from "../components/RouteTransition";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "../../global.scss";
  main {
    position: relative;
    width: 75%;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />
<main>

  <slot />

</main>
