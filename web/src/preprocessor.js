import {scss} from "svelte-preprocess";

export default {
  client: {
    plugins: [
      svelte({
        scss
      })
    ]
  },
  server: {
    plugins: [
      svelte({
        scss
      })
    ]
  }
};
