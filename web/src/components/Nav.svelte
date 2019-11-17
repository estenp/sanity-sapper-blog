<script>
  export let segment;
</script>

<style lang="scss">
  @import "../../static/variables.scss";
  header {
    border-bottom: 2px solid $brown;
    font-weight: 300;
    padding: 0 5em;
    /* display: grid; */
    align-items: center;
    /* grid-template-columns: auto auto; */
    /* color: #ee6262; */
    /*font-family: "Pirata One", cursive;
    font-family: Bungee Shade;
    font-family: "Nova Square";
    font-family: Averia Serif Libre; */
    font-family: "Fira Code";
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  nav {
    margin-left: 4rem;
    font-size: 1.5rem;
    justify-self: start;
    display: flex;
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

  /* .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: $red;
    display: block;
    bottom: -1px;
  } */

  a {
    text-decoration: none;
    // padding: 0 0.5em;
    display: block;
  }

  .operator {
    display: inline;
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
        <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
      </li>
      <span class="plain">,&nbsp;</span>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li class="brown">
        <a
          rel="prefetch"
          class={segment === 'blog' ? 'selected' : ''}
          href="blog">
          blog
        </a>
      </li>
    </ul>
    <span class="plain">)</span>
    <span class="cyan operator">&nbsp;=>&nbsp;</span>
    <span class="plain">{segment ? segment : 'home'}</span>
  </nav>
</header>
