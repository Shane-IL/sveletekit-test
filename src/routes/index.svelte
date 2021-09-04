<script>
	import ItemCard from '../components/itemcard.svelte';
	import { spacexRockets, fetchAllRockets } from '../stores/spacex-store';
	fetchAllRockets();
</script>

<svelte:head>
	<title>Rocket-Mania!</title>
</svelte:head>
<h1 class="text-center text-4xl font-bold">Welcome to Rocket-Mania</h1>
<div class="my-8 grid grid-cols-3 gap-6 m-auto">
	{#each $spacexRockets as spacexRocket}
		<a href={`/rocket/${spacexRocket.id}`}>
			<ItemCard name={spacexRocket.name} imageUrl={spacexRocket.flickr_images[0]} />
		</a>
	{/each}
</div>
