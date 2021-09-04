<script>
	import Nav from '../components/nav.svelte';
	import { fade } from 'svelte/transition';
</script>

<div transition:fade class="p-8 w-3/6 m-auto">
	<Nav />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
