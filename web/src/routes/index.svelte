<script context="module">
  import blocksToHtml from "@sanity/block-content-to-html";
  import serializers from "../components/serializers";
  import client from "../sanityClient";

  export async function preload({ params, query }) {
    let post = await client
      .fetch(
        '*[_type == "post" && publishedAt < now()]|order(publishedAt desc)[0]'
      )
      .then(posts => posts)
      .catch(err => this.error(500, err));

    return {
      post: {
        ...post,
        excerpt: blocksToHtml({
          blocks: post.excerpt,
          serializers,
          ...client.clientConfig
        }) /* ,
        body: blocksToHtml({
          blocks: post.body,
          serializers,
          ...client.clientConfig
        }) */
      }
    };
  }
</script>

<script>
  import urlFor from "../lib/urlFor";
  export let post;
  console.log(post);
</script>

<style>
  section.container {
    /* width: 75%; */
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr [first] 1fr [second];
    grid-column-gap: 10px;
    min-height: 300px;
  }

  .col > div {
    margin-bottom: 10px;
    padding: 10px;
    border: solid 4px #ee6262;
    border-radius: 5px;
    background: #fff;
  }

  #recent-blog-post {
    min-height: 200px;
    /* background: white; */
  }

  #recent-blog-post img {
    width: 100%;
  }

  #recent-blog-post h2 {
    text-align: center;
  }
  #recent-blog-post a {
    text-align: right;
    font-size: 0.9rem;
  }

  .portfolio-slot {
    background: white;
    /* min-height: 200px; */
  }

  .portfolio-slot > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  } */
</style>

<svelte:head>
  <title>Esten Patrick</title>
</svelte:head>

<section class="container">
  <div class="col">
    <div id="recent-blog-post">
      <article>
        <h2>{post.title}</h2>

        <img src={urlFor(post.mainImage).width(500)} alt={post.mainImage.alt} />
        <section>
          {@html post.excerpt}
          <a rel="prefetch" href="blog/{post.slug.current}">
            Continue reading: {post.title}
          </a>
        </section>
      </article>
    </div>
    <div class="portfolio-slot">
      <div>
        <img src="cfilogo.png" alt="Custom Fabricating Industries logo" />
      </div>
    </div>
  </div>
  <div class="col">
    <div class="portfolio-slot">
      <div>
        <img src="head.png" alt="estenpatrick.com logo" />
      </div>
    </div>
    <div class="portfolio-slot">
      <div>
        <img src="dispensio.png" alt="dispensio" />
      </div>
    </div>
    <div class="portfolio-slot">
      <div>
        <img src="dicetronlogo.png" alt="DiceTron logo" />
      </div>
    </div>

  </div>
  <!-- <strong>
    Go to
    <a href="/blog">/blog</a>
    to see content loaded from
    <a href="https://www.sanity.io">Sanity</a>
  </strong> -->
</section>
