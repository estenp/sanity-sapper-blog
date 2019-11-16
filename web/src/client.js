import * as sapper from '@sapper/app';
import sveltePreprocess from 'svelte-preprocess';

const preprocess = sveltePreprocess({
  scss: true,
  // ...
});

export default {
  client: {
    plugins: [
      svelte({
        preprocess,
        // ...
      }),
  },
  server: {
    plugins: [
      svelte({
        preprocess,
        // ...
      }),
    ],
  },
};
sapper.start({
	target: document.querySelector('#sapper')
});