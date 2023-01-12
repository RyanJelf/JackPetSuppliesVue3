<script setup>

const props = defineProps({
	dogs: {
		type: Object,
		required: true,
	},
});


</script>
<template>
	
	<div class="bg-zinc-100 shadow-md rounded-xl pt-8 pb-8 dark:bg-stone-400 dark:text-dark-bg  ">
		<img class="w-50 h-50" :src="dogs.pic" :alt="dogs.name" />
		<h2 class=" text-3xl text-primary-color dark:text-dark-bg ">
			Name: {{ dogs.name }}
		</h2>
		<p class=" text-xl text-primary-color dark:text-dark-bg ">
			Age: {{ dogs.age }}
		</p>
		<p class="  text-2xl text-primary-color dark:text-dark-bg  ">
			About Me: {{ dogs.bio }}
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
