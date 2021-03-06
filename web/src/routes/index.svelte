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
        })
      }
    };
  }
</script>

<script>
  import RouteTransition from "../components/RouteTransition";
  import PortfolioSlot from "../components/PortfolioSlot";
  import urlFor from "../lib/urlFor";
  export let post;
  // console.log(post);
</script>

<style lang="scss">
  @import "../../static/variables.scss";
  .container {
    margin: 0 auto;
    min-height: 300px;
    column-count: 2;
    column-gap: 1rem;
  }

  .container > * {
    margin-bottom: 10px;
    padding: 10px;
    border: solid 4px $red;
    border-radius: 5px;
  }

  #recent-blog-post {
    min-height: 200px;
    img {
      width: 100%;
    }
  }

  #recent-blog-post h2 {
    text-align: center;
    border-bottom: solid 2px $red;
    padding-bottom: 0.3rem;
    font-family: "Fira Code";
  }
  #recent-blog-post a {
    text-align: right;
    font-size: 1.1rem;
    display: block;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
  @media (max-width: 500px) {
    .container {
      column-count: 1;
    }
  }
</style>

<svelte:head>
  <title>Esten Patrick</title>
</svelte:head>
<RouteTransition>

  <section class="container">
    <div id="recent-blog-post">
      <article>
        <h2>{post.title}</h2>
        <img src={urlFor(post.mainImage).width(500)} alt={post.mainImage.alt} />
        <section>
          {@html post.excerpt}
          <a rel="prefetch" href="blog/{post.slug.current}">
            Read: {post.title}
          </a>
        </section>
      </article>
    </div>
    <PortfolioSlot>
      <img src="dispensio.png" alt="dispensio" />
      <div slot="modalContent">
        <img src="dispensio-screen.png" alt="dispensio" />
        <p>
          Dispensio is a JAMStack blog with an online ordering system. It is
          built with GatsbyJS and uses Sanity for content management and
          order/product data storage.
        </p>
        <ul>
          <li>
            <a href="https://dispensio.netlify.com/">
              https://dispensio.netlify.com/
            </a>
          </li>
          <li>
            <a href="https://github.com/estenp/dispensio">Github</a>
          </li>
        </ul>
      </div>
    </PortfolioSlot>

    <PortfolioSlot>
      <img src="bass.jpg" alt="Largemouth Bass" style="width: 75%" />
      <img slot="modalContent" src="bass.jpg" alt="Largemouth Bass" />
    </PortfolioSlot>

    <PortfolioSlot>
      <img src="dicetronlogo.png" alt="DiceTron logo" style="width: 25%" />
      <div slot="modalContent">
        <img src="dicescreen.png" alt="DiceTron logo" />
        <p>
          DiceTron was a mobile first online game based upon the classic
          bluffing game: Liar's Dice. It was built on JQuery Mobile and
          PHP/MySQL.
        </p>
      </div>
    </PortfolioSlot>

    <PortfolioSlot>
      <img src="barnowl.jpg" alt="Barn Owl" style="width: 75%" />
      <img slot="modalContent" src="barnowl.jpg" alt="Barn Owl" />
    </PortfolioSlot>

    <PortfolioSlot>
      <img src="fog2.jpg" alt="Fog at Mt. Ranier" />
      <img slot="modalContent" src="fog2.jpg" alt="Fog at Mt. Ranier" />
    </PortfolioSlot>

    <PortfolioSlot>
      <img src="beach.jpg" alt="Beach in Oregon" />
      <img slot="modalContent" src="beach.jpg" alt="Beach in Oregon" />
    </PortfolioSlot>

    <PortfolioSlot>
      <img src="head.png" alt="estenpatrick.com logo" style="width: 75%" />
      <div slot="modalContent">
        <img src="epscreen.png" alt="estenpatrick.com screenshot" />
        <p>This was the very first portfolio site I ever made.</p>
      </div>
    </PortfolioSlot>

    <PortfolioSlot>
      <img src="cfilogo.png" alt="Custom Fabricating Industries logo" />
      <div slot="modalContent">
        <img src="cfi-screen.png" alt="cfishades.com screenshot" />
        <p>Local window treatment company, CFI, was looking for an updated website. I built this using GatsbyJS with content management via Netlify CMS.</p>
        <ul>
          <li>
            <a href="https://www.cfishades.com/">
              cfishades.com
            </a>
          </li>
          <li>
            <a href="https://github.com/dhemmercfi/cfishades">Github</a>
          </li>
        </ul>
      </div>
    </PortfolioSlot>

    <PortfolioSlot>
      <img src="ironworks.jpg" alt="Iron Works" />
      <img slot="modalContent" src="ironworks.jpg" alt="Iron Works" />
    </PortfolioSlot>

  </section>
</RouteTransition>
