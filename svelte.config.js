/** @type {import('@sveltejs/kit').Config} */
//import static_adapter from '@sveltejs/adapter-static';

import node from '@sveltejs/adapter-node';


const config = {

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				host: 'HOST',
				port: 'PORT'
			}
		})
	}
};

export default config;
