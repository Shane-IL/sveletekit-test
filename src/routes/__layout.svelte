<script>
	import Nav from '../components/nav.svelte';
</script>

<div>
	<Nav />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
