import * as sapper from "@sapper/app";

sapper.start({
  target: document.querySelector("#sapper")
});

/* export default {
  client: {
    plugins: [
      svelte({
        sveltePreprocess()
      })
    ]
  },
  server: {
    plugins: [
      svelte({
        sveltePreprocess()
      })
    ]
  }
}; */
