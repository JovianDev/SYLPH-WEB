// import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
import netlify from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		adapter: netlify()

		// adapter: static_adapter()

		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// })
	}
};

export default config;
