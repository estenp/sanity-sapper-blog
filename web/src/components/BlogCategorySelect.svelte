<script>
  import { createEventDispatcher } from "svelte";
  export let categories;

  // activeTags is now reactive, meaning anytime categories changes, activeTags will be updated
  const getActiveTags = categories =>
    categories.filter(c => c.active === true).map(c => c._id);

  const dispatch = createEventDispatcher();
  const dispatchActiveTags = categories => {
    dispatch("tagClick", { activeTags: getActiveTags(categories) });
  };

  let cats = categories.reduce((acc, c) => {
    c.active = true;
    return [...acc, c];
  }, []);

  const getCatObj = id => cats.find(c => c._id === id);

  const handleTagClick = id => {
    const cat = getCatObj(id);
    cat.active = !cat.active;
    categories = categories;
    dispatchActiveTags(categories);
  };

  // console.log(categories);
</script>

<style>
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
    border: solid 2px tomato;
    border-radius: 5px;
    padding: 8px;
  }
  .tag.active {
    border: solid 2px white;
    color: white;
    background: palevioletred;
  }
</style>

<div id="catsContainer">
  {#each categories as cat}
    <button
      on:click={() => handleTagClick(cat._id)}
      class="tag {cat.active ? 'active' : ''}">
      {cat.title}
    </button>
  {/each}
</div>
