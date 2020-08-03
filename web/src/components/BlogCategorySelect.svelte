<script>
  import { fade } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  // import { interpolateLab } from "d3-interpolate";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let categories;

  // let tween = tweened(categories.active, {
  //   duration: 400
  //   // interpolate: interpolateLab
  // });

  // FN: creates an array of category id's for currently active tags
  const getActiveTags = categories =>
    categories.filter(c => c.active === true).map(c => c._id);

  // FN: sends an event to the component's parent component
  const dispatchActiveTags = categories => {
    dispatch("tagClick", { activeTags: getActiveTags(categories) });
  };

  let cats = categories.reduce((acc, c) => {
    c.active = true;
    return [...acc, c];
  }, []);

  // FN: get the data for a category by it's Id
  const getCategoryObj = id => cats.find(c => c._id === id);

  const handleTagClick = id => {
    const cat = getCategoryObj(id);
    cat.active = !cat.active;
    categories = categories;
    dispatchActiveTags(categories);
  };

  const selectAll = () => {
    cats.forEach(cat => (cat.active = true));
    categories = categories;
    dispatchActiveTags(categories);
  };

  const deSelectAll = () => {
    cats.forEach(cat => (cat.active = false));
    categories = categories;
    dispatchActiveTags(categories);
  };
</script>

<style lang="scss">
  @import "../../static/variables.scss";
  #selectDeselectContainer {
    margin-bottom: 0.3em;
    .tag {
      background-color: transparent;
    }
  }
  #catsContainer {
    display: inline-flex;
    max-width: 100vw;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 2rem;
    font-size: 0.8rem;
  }
  .tag,
  .tag:hover {
    cursor: pointer;
    background: none;
    border: solid 2px $red;
    border-radius: 5px;
    padding: 8px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: $plain;
  }
  .tag.active {
    border: solid 2px white;
    color: white;
    background: $red;
  }
</style>

<section id="selectDeselectContainer">
  <button class="tag" on:click={() => selectAll()}>Select All</button>
  <button class="tag" on:click={() => deSelectAll()}>Deselect All</button>
</section>
<div id="catsContainer">
  <section id="tagsContainer">
    {#each categories as cat}
      <button
        on:click={() => handleTagClick(cat._id)}
        class="tag"
        class:active={cat.active}>
        {cat.title}
      </button>
    {/each}
  </section>
</div>
