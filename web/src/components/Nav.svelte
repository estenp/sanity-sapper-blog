<script>
  import { fade, transition } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let segment;
  /* let segmentTween = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  segmentTween.set(segment); */
</script>

<style lang="scss">
  @import "../../static/variables.scss";
  header {
    font-weight: 300;
    padding: 0 5em;
    align-items: center;
    font-family: "Fira Code";
    padding-top: 1rem;
  }
  nav {
    padding-left: 4rem;
    border-left: solid 1px rgb(107, 107, 107);
    font-size: 1.5rem;
    justify-self: start;
    display: flex;
    flex-wrap: wrap;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }


  a {
    text-decoration: none;
    // padding: 0 0.5em;
    display: block;
  }

  .operator {
    display: inline;
  }

  @media (max-width: 500px) {
    header {padding: 1rem;}
    nav {
      padding: 0;
      padding-left: 2rem;
      padding-top: 1rem;
      border-left: 0;
      .arrow {
        padding-left: 2rem;
      }
    }
  }
</style>

<header>

  <a href=".">
    <h1 class="lime">
      <span class="cyan">const</span>
      EstenPatrick
      <span class="red operator">=</span>
    </h1>

  </a>
  <nav>
    <span class="plain">(</span>
    <ul>
      <li class="brown">
        <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
      </li>
      <span class="plain">,&nbsp;</span>
      <li class="brown">
        <a class={segment === 'about' ? 'selected' : ''} href="/about/">about</a>
      </li>
      <span class="plain">,&nbsp;</span>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li class="brown">
        <a
          rel="prefetch"
          class={segment === 'blog' ? 'selected' : ''}
          href="/blog/">
          blog
        </a>
      </li>
    </ul>
    <span class="plain">)</span>
    <span class="cyan operator arrow">&nbsp;=>&nbsp;</span>
    <span class="plain" in:fade={{ duration: 300 }}>
      {segment ? segment : 'home'}
    </span>
  </nav>
</header>
