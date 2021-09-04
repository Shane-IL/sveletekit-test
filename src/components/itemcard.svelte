<script>
	export let name;
	export let imageUrl;
</script>

<div
	class="box-border py-6 px-4 bg-white text-gray-600 text-center text-2xl font-semibold rounded-2xl cursor-pointer relative"
>
	<h3 class="mb-4">{name}</h3>
	<img class="h-80 w-full m-auto" alt={name} src={imageUrl} />
</div>
