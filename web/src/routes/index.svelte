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
  import RouteTransition from "../components/RouteTransition";
  import urlFor from "../lib/urlFor";
  export let post;
  // console.log(post);
</script>

<style lang="scss">
  @import "../../static/variables.scss";
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
    border: solid 4px $red;
    border-radius: 5px;
    background: #fff;
  }

  #recent-blog-post {
    min-height: 200px;
    /* background: white; */
  }

  .col img {
    width: 100%;
  }

  #recent-blog-post h2 {
    text-align: center;
    border-bottom: solid 2px $red;
    padding-bottom: 0.3rem;
    font-family: Pirata One;
  }
  #recent-blog-post a {
    text-align: right;
    font-size: 1.1rem;
    display: block;
  }

  .portfolio-slot {
    /* background: #bbb; */
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
<RouteTransition>
  <section class="container">
    <div class="col">
      <div id="recent-blog-post">
        <article>
          <h2>{post.title}</h2>

          <img
            src={urlFor(post.mainImage).width(500)}
            alt={post.mainImage.alt} />
          <section>
            {@html post.excerpt}
            <a rel="prefetch" href="blog/{post.slug.current}">
              Read: {post.title}
            </a>
          </section>
        </article>
      </div>
      <div class="portfolio-slot">
        <div>
          <img
            src="cfilogo.png"
            alt="Custom Fabricating Industries logo"
            style="width: 25%" />
        </div>
      </div>
      <div class="portfolio-slot">
        <div>
          <img src="bass.jpg" alt="Largemouth Bass" style="width: 75%" />
        </div>
      </div>
      <div class="portfolio-slot">
        <div>
          <img src="dicetronlogo.png" alt="DiceTron logo" style="width: 25%" />
        </div>
      </div>
      <div class="portfolio-slot">
        <div>
          <img src="barnowl.jpg" alt="Barn Owl" style="width: 75%" />
        </div>
      </div>

    </div>

    <div class="col">
      <div class="portfolio-slot">
        <div>
          <img src="fog2.jpg" alt="Fog at Mt. Ranier" />
        </div>
      </div>
      <div class="portfolio-slot">
        <div>
          <img src="beach.jpg" alt="Beach in Oregon" />
        </div>
      </div>

      <div class="portfolio-slot">
        <div>
          <img src="head.png" alt="estenpatrick.com logo" style="width: 75%" />
        </div>
      </div>
      <div class="portfolio-slot">
        <div>
          <img src="dispensio.png" alt="dispensio" />
        </div>
      </div>
      <div class="portfolio-slot">
        <div>
          <img src="ironworks.jpg" alt="Iron Works" />
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
</RouteTransition>
