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
      on:click={() => dispatchClick(cat._id)}
      class="tag {cat.active ? 'active' : ''}">
      {cat.title}
    </button>
  {/each}
</div>
