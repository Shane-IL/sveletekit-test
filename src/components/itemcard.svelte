<script>
	export let name;
	export let imageUrl;
</script>

<div
	class="w-full h-full box-border py-6 px-4 bg-white text-gray-600 text-center font-semibold rounded-2xl cursor-pointer relative"
>
	<h3 class="mb-4 text-xs m:text-sm lg:text-base 2xl:text-2xl">{name}</h3>
	<div class="w-11/12 h-5/6 flex m-auto relative">
		<img class="w-full h-full m-auto" alt={name} src={imageUrl} />
	</div>
</div>
