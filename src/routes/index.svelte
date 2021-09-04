<script>
	import ItemCard from '../components/itemcard.svelte';
	import { spacexRockets, fetchAllRockets } from '../stores/spacex-store';
	fetchAllRockets();

	let filterParam = '';
	let filteredData = [];

	$: {
		if (filterParam.length > 0) {
			filteredData = $spacexRockets.filter((rocketDetails) =>
				rocketDetails.name.toLowerCase().includes(filterParam.toLowerCase())
			);
		} else {
			filteredData = $spacexRockets;
		}
	}
</script>

<svelte:head>
	<title>Rocket-Mania!</title>
</svelte:head>
<h1 class="text-center text-4xl font-bold">Welcome to Rocket-Mania</h1>
<div class="m-auto w-6/12 relative">
	<input
		bind:value={filterParam}
		placeholder="Type here to find a rocket"
		type="search"
		class="w-full box-border font-medium pl-4 pr-12 m-auto my-8 leading-10 text-gray-800 "
	/>
	<div class="absolute right-4 bottom-10 cursor-pointer">🔍</div>
</div>
<div class="my-8 grid grid-cols-3 gap-6 m-auto">
	{#each filteredData as spacexRocket}
		<a href={`/rocket/${spacexRocket.id}`}>
			<ItemCard name={spacexRocket.name} imageUrl={spacexRocket.flickr_images[0]} />
		</a>
	{/each}
</div>
