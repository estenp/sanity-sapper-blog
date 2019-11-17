<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let categories;

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
</script>

<style lang="scss">
  @import "../../static/variables.scss";
  #catsContainer {
    display: inline-flex;
    width: 50%;
    justify-content: space-between;
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
    color: $plain;
  }
  .tag.active {
    border: solid 2px white;
    color: white;
    background: $red;
  }
</style>

<div id="catsContainer">
  {#each categories as cat}
    <button
      on:click={() => handleTagClick(cat._id)}
      class="tag"
      class:active={cat.active}>
      {cat.title}
    </button>
  {/each}
</div>
