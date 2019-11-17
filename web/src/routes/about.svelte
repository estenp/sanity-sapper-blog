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
  export let data;
</script>

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
    <h3>{data.name}</h3>

    {@html data.bio}
  </div>
</RouteTransition>
