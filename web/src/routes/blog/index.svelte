<script context="module">
  import client from "../../sanityClient";
  export async function preload({ params, query }) {
    return {
      posts: await client
        .fetch(
          '*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)'
        )
        .then(posts => posts)
        .catch(err => this.error(500, err)),

      categories: await client
        .fetch('*[_type == "category"]')
        .then(categories => categories)
    };
  }
</script>

<script>
  import { transition, fly, fade } from "svelte/transition";
  import RouteTransition from "../../components/RouteTransition";
  import BlogCategorySelect from "../../components/BlogCategorySelect";
  export let posts;
  export let categories;

  const formatDate = date => {
    return new Date(date).toLocaleDateString();
  };

  const filterPostsByTags = activeTags => post => {
    // take array of a post's category objects and make array of only id references
    const postCatIds = post.categories.map(catObj => catObj._ref);
    // return true if at least one of the post's categories matches an active tag
    return postCatIds.some(id => activeTags.includes(id));
  };

  let filteredPosts = posts;

  const filterPosts = event => {
    const activeTags = event.detail.activeTags;
    // return posts where at least one of the post's categories is included in currently active tags
    filteredPosts = posts.filter(filterPostsByTags(activeTags));
  };
</script>

<style>
  li {
    display: flex;
  }
  li a {
    margin-left: 0.3rem;
    flex: 2;
  }
  .post-date {
    text-align: right;
    flex: 1;
    max-width: 100px;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<RouteTransition>
  <h1 class="tag-header">
    &lt;
    <span class="red">Recent Posts</span>
    &gt;
  </h1>
  <!-- should the tag select contain the output post links? -->
  <BlogCategorySelect on:tagClick={filterPosts} {categories} />

  <ul class="border-left">
    {#each filteredPosts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <!-- in:fade  -->
      <li
      in:fly|local={{ y: 100, duration: 300 }}
      out:fly|local={{ y: 100, duration: 300 }}>
        <span class="post-date">{formatDate(post.publishedAt)} |</span>
        <a rel="prefetch" href="blog/{post.slug.current}">{post.title}</a>

      </li>
    {/each}
  </ul>
</RouteTransition>
