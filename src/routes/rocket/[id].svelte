<script context="module">
	//
	export async function load({ page }) {
		const rocketId = page.params.id;
		return { props: { rocketId } };
	}
</script>

<script>
	import { spacexRockets } from '../../stores/spacex-store';
	export let rocketId;
	const rocketDetails = $spacexRockets.find((rocket) => rocket.id === rocketId);
</script>

<div class="w-8/12 text-left m-auto">
	<div class="text-6xl font-semibold text-center">{rocketDetails.name}</div>
	<img class="my-6 h-96 m-auto" alt={rocketDetails.name} src={rocketDetails.flickr_images[0]} />
	<p class="text-lg">{rocketDetails.description}</p>
	<div class="my-4 text-2xl">Dimentions</div>
	<ul class="leading-8">
		<li><b>Height: </b>{rocketDetails.height.meters}m</li>
		<li><b>Diameter: </b>{rocketDetails.diameter.meters}m</li>
		<li><b>Mass: </b>{rocketDetails.mass.kg}kg</li>
	</ul>
	<div class="my-4 text-2xl">Details</div>
	<ul class="leading-8">
		<li><b>Stages: </b>{rocketDetails.stages}</li>
		<li><b>First Flight: </b>{rocketDetails.first_flight}</li>
		<li><b>Launch Cost: </b>${rocketDetails.cost_per_launch}</li>
	</ul>
</div>
