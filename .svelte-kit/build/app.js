import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body class='w-full h-full m-0 p-0 bg-blue-500 text-gray-100'>\r\n\t\t<div id=\"svelte\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-34baca88.js",
			css: [assets + "/_app/assets/start-d5b4de3e.css"],
			js: [assets + "/_app/start-34baca88.js",assets + "/_app/chunks/vendor-dcaca26e.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":".nojekyll","size":0,"type":null},{"file":"favicon.ico","size":188813,"type":"image/vnd.microsoft.icon"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/rocket\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/rocket/[id].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\index.js")
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/rocket/[id].svelte": () => import("..\\..\\src\\routes\\rocket\\[id].svelte"),"src/routes/about.svelte": () => import("..\\..\\src\\routes\\about.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-69efd5c8.js","css":["assets/pages/__layout.svelte-89163391.css"],"js":["pages/__layout.svelte-69efd5c8.js","chunks/vendor-dcaca26e.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-8ceaea5e.js","css":[],"js":["error.svelte-8ceaea5e.js","chunks/vendor-dcaca26e.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-4dab902c.js","css":[],"js":["pages/index.svelte-4dab902c.js","chunks/vendor-dcaca26e.js","chunks/spacex-store-fd1d85c1.js"],"styles":[]},"src/routes/rocket/[id].svelte":{"entry":"pages/rocket/[id].svelte-a0db062d.js","css":[],"js":["pages/rocket/[id].svelte-a0db062d.js","chunks/vendor-dcaca26e.js","chunks/spacex-store-fd1d85c1.js"],"styles":[]},"src/routes/about.svelte":{"entry":"pages/about.svelte-150e0eba.js","css":[],"js":["pages/about.svelte-150e0eba.js","chunks/vendor-dcaca26e.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}