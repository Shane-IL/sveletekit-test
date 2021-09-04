<script>
	import ItemCard from '../components/itemcard.svelte';
	import { spacexRockets, fetchAllRockets } from '../stores/spacex-store';
	fetchAllRockets();
</script>

<svelte:head>
	<title>Rocket-Mania!</title>
</svelte:head>
<h1>Welcome to Rocket-Mania</h1>
{#each $spacexRockets as spacexRocket}
	<ItemCard name={spacexRocket.name} imageUrl={spacexRocket.flickr_images[0]} />
{/each}
