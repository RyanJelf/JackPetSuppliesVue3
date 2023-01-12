<script setup>
const props = defineProps({
	products: {
		type: Object,
		required: true,
	},
});
</script>
<template>
	
	<div class="bg-zinc-100 shadow-md rounded-xl  px-8 pt-6 pb-8 mb-4 dark:bg-stone-400 dark:text-dark-bg">
		<img class="m-2 text-2xl text-primary-color dark:text-lime-500" :src="products.Pic" :alt="products.Title" />
		<h2 class=" text-xl font-bold text-primary-color dark:text-dark-bg text-center">
			{{ products.Title }}
		</h2>
		<p class=" text-primary-color dark:text-dark-bg text-center ">
			{{ products.Desc }}
		</p>
		<p class="  text-2xl text-primary-color dark:text-dark-bg text-center ">
			{{ products.Price }}
		</p>
	</div>

</template>

<style scoped>
img {
	width: 90%;
	height: auto;
}

h2,
p {
	width: 90%;
	padding: 0;
	margin: 5px auto;
}

@media only screen and (min-width: 500px) {
	.post {
		width: calc(50% - 2rem);
		box-sizing: border-box;
	}
}

@media only screen and (min-width: 900px) {
	.post {
		width: calc(33% - 2rem);
		box-sizing: border-box;
	}
}
</style>
