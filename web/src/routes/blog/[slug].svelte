<script context="module">
  import blocksToHtml from "@sanity/block-content-to-html";
  import client from "../../sanityClient";
  import serializers from "../../components/serializers";
  import imageUrlBuilder from "@sanity/image-url";

  const builder = imageUrlBuilder(client);
  const urlFor = source => builder.image(source);

  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "post" && slug.current == $slug][0]';
    const projection = `{
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            author->
          }
        }
      }
    }`;

    const query = filter + projection;
    const post = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));

    return {
      post: {
        ...post,
        body: blocksToHtml({
          blocks: post.body,
          serializers,
          ...client.clientConfig
        })
      }
    };
  }
</script>

<script>
  // import BlogCategories from "../../components/";
  import Prism from "prismjs";
  import { onMount } from "svelte";

  onMount(() => {
    Prism.highlightAll();
  });

  export let post;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
  */
  .content {

  }

  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
    position: relative;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(pre::after) {
    content: attr(data-language);
    top: 0;
    position: absolute;
    right: 0;
    background: #dd3701;
    color: #fff;
    padding: 2px;
    border-radius: 2px;
  }

  .content :global(img) {
    display: block;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .content :global(figure) {
    margin: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
    list-style: square;
  }

  .content :global(li > ul) {
    line-height: 1.5;
    list-style: circle;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .main-image {
    margin: 20px 0;
    border: solid 4px white;
    border-radius: 5px;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<p>
  <a href="/blog/">All Posts</a>
  >
  <span>{post.title}</span>
</p>

<!-- <BlogCategorySelect categories={post.categories}/> -->

<h1>{post.title}</h1>

<div class="content">
  {#if post.mainImage}
    <img
    class="main-image"
    src={urlFor(post.mainImage).url()}
    alt={post.mainImage.alt} />
  {/if}
  {@html post.body}
</div>
