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

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  let cats = categories.reduce((acc, c) => {
    c.active = true;
    return [...acc, c];
  }, []);

  const getCatObj = id => cats.find(c => c._id === id);

  const handleTagClick = event => {
    const id = event.detail.id;
    const cat = getCatObj(id);
    cat.active = !cat.active;
    cats = cats;
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
<BlogCategorySelect on:tagClick={handleTagClick} categories={cats} />

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug.current}">{post.title}</a>
      ({formatDate(post.publishedAt)})
    </li>
  {/each}
</ul>
