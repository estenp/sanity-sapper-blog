<script>
  import { createEventDispatcher } from "svelte";
  export let categories;
  const dispatch = createEventDispatcher();
  const dispatchClick = id => dispatch("tagClick", { id: id });

  console.log(categories);
</script>

<style>
  #catsContainer {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 2rem;
    font-size: 0.8rem;
    cursor: pointer;
  }
  .tag {
    background: none;
    border: solid 2px palevioletred;
    border-radius: 5px;
    padding: 8px;
  }
  .tag.active {
    border: solid 2px white;
    background: palevioletred;
  }
</style>

<div id="catsContainer">
  {#each categories as cat}
    <button on:click={() => dispatchClick(cat._id)} class="tag">
      {cat.title}
    </button>
  {/each}
</div>
