<script>
  export let segment;
</script>

<style>
  header {
    border-bottom: 2px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 5em;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    color: #ee6262;
    /* font-family: "Nova Square"; */
    font-family: "Pirata One", cursive;
  }
  nav {
    font-size: 1.5rem;
  }
  h1 {
    font-size: 5rem;
    margin-bottom: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: end;
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
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<header>
  <a href=".">
    <h1>Esten Patrick</h1>
  </a>
  <nav>
    <ul>
      <li>
        <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
      </li>
      <li>
        <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          rel="prefetch"
          class={segment === 'blog' ? 'selected' : ''}
          href="blog">
          blog
        </a>
      </li>
    </ul>
  </nav>
</header>
