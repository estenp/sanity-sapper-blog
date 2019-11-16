import * as sapper from "@sapper/app";
import sveltePreprocess from "svelte-preprocess";

const preprocess = sveltePreprocess({
  scss: true
  // ...
});

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
