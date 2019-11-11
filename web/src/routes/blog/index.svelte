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
  import BlogCategorySelect from "../../components/BlogCategorySelect";
  export let posts;
  export let categories;

  const formatDate = date => {
    return new Date(date).toLocaleDateString();
  };

  let filteredPosts = posts;

  const filterPosts = event => {
    const activeCats = event.detail.activeCats;
    // return posts where at least one of the post's categories is included in currently active tags
    filteredPosts = posts.filter(post => {
      // take array of category objects and make array of only id references
      const postCatIds = post.categories.map(catObj => catObj._ref);
      return postCatIds.some(id => activeCats.includes(id));
    });
  };
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>
<BlogCategorySelect on:tagClick={filterPosts} {categories} />

<ul>
  {#each filteredPosts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug.current}">{post.title}</a>
      ({formatDate(post.publishedAt)}) {JSON.stringify(post.categories)}
    </li>
  {/each}
</ul>
