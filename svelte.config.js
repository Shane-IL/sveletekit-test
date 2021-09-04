import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';
//import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: preprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: static_adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
