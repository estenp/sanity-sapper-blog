<script>
  export let segment;
</script>

<style lang="scss">
  header {
    border-bottom: 2px solid coral;
    font-weight: 300;
    padding: 0 5em;
    /* display: grid; */
    align-items: center;
    /* grid-template-columns: auto auto; */
    /* color: #ee6262; */
    font-family: "Pirata One", cursive;
    font-family: Bungee Shade;
    font-family: "Nova Square";
    font-family: Averia Serif Libre;
    font-family: "Fira Code";
  }
  nav {
    margin-left: 4rem;
    font-size: 1.5rem;
    justify-self: start;
    display: flex;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 5rem;
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

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #ee6262;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0 0.5em;
    display: block;
  }

  .operator {
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>

<header>

  <a href=".">
    <h1 class="lime">
      Esten Patrick
      <span class="red operator">=</span>
    </h1>

  </a>
  <nav>
    <span class="plain">(</span>
    <ul>
      <li class="brown">
        <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
      </li>
      <span class="plain">,</span>
      <li class="brown">
        <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
      </li>
      <span class="plain">,</span>
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
    <span class="cyan operator">=></span>
    <span class="plain">{segment ? segment : 'home'}</span>
  </nav>
</header>
