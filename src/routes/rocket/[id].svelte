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

<div>
	<div>{rocketDetails.name}</div>
	<img alt={rocketDetails.name} src={rocketDetails.flickr_images[0]} />
	<p>{rocketDetails.description}</p>
	<div>Dimentions</div>
	<ul>
		<li><b>Height: </b>{rocketDetails.height.meters}m</li>
		<li><b>Diameter: </b>{rocketDetails.diameter.meters}m</li>
		<li><b>Mass: </b>{rocketDetails.mass.kg}kg</li>
	</ul>
	<div>Details</div>
	<ul>
		<li><b>Stages: </b>{rocketDetails.stages}</li>
		<li><b>First Flight: </b>{rocketDetails.first_flight}</li>
		<li><b>Launch Cost: </b>${rocketDetails.cost_per_launch}</li>
	</ul>
</div>
