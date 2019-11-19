<script context="module">
  import blocksToHtml from "@sanity/block-content-to-html";
  import client from "../sanityClient";
  import serializers from "../components/serializers";
  import imageUrlBuilder from "@sanity/image-url";
  import urlFor from "../lib/urlFor";

  export async function preload(page) {
    // console.log(page);
    const filter = '*[_id == "1b1c7451-c976-48fd-b416-73bf5a356f10"][0]';
    const projection = `{
      ...
    }`;

    const query = filter + projection;
    const authorData = await client
      .fetch(query)
      .catch(err => this.error(500, err));
    // console.log(authorData);

    return {
      data: {
        ...authorData,
        bio: blocksToHtml({
          blocks: authorData.bio,
          serializers,
          ...client.clientConfig
        })
      }
    };
  }
</script>

<script>
  import RouteTransition from "../components/RouteTransition";
  import Prism from "prismjs";
  export let data;

</script>

<style>
  pre {
    font-size: 1.3rem;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<RouteTransition>

  <h1 class="tag-header">
    &lt;
    <span class="red">About Me</span>
    &gt;
  </h1>
  <div class="border-left">
    <!-- <h3>{data.name}</h3> -->

    <!-- {@html data.bio} -->
    <div class="content">
    <!-- class="language-javascript" -->
    <pre >
    <code class="plain">
    <span class="cyan">const</span> <span class="blue">me</span> <span class="red"> = </span> &#123;
  🏙️ location: <span class="gold">'Chicago'</span>,
  🙃 web developer: [
    <span class="gold">'Javascript'</span>, <span class="gold">'HTML'</span>, <span class="gold">'CSS'</span>, <span class="gold">'Angular'</span>, <span class="gold">'React'</span>, <span class="gold">'Svelte'</span>, <span class="gold">'JAMStack'</span>
  ],
  🎶 music: [
    <span class="gold">'hip hop'</span>, <span class="gold">'black metal'</span>, <span class="gold">'midwest emo'</span>, <span class="gold">'acoustic'</span>, <span class="gold">'indie'</span>
  ],
  🥣 cereal: [
    <span class="gold">'Golden Grahams'</span>, <span class="gold">'Life'</span>, <span class="gold">'Frosted Flakes'</span>, <span class="gold">"Oh's"</span>
  ]
  🎲 hobbies: [
    <span class="gold">'code'</span>, <span class="gold">'sports'</span>, <span class="gold">'games'</span>, <span class="gold">'art'</span>, <span class="gold">'music'</span>, <span class="gold">'kendama'</span>
  ]
&#125;
    </code>
    </pre>
    </div>
  </div>
</RouteTransition>
