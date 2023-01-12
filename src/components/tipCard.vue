<template>
	
	<div class="bg-zinc-300 shadow-md rounded-xl  px-8 pt-6 pb-8 mb-4 dark:bg-stone-500 dark:text-dark-bg">
		<h2 class=" text-4xl font-bold text-primary-color dark:text-pale-spring-bud ">
			{{ Title }}
		</h2>
		<p class=" pt-5 text-primary-color dark:text-pale-spring-bud ">
			{{ Text }}
		</p>
	
	</div>


</template>
<script>


export default {
	name: "tipCard",
	components: {},
	props: {
		
		Title: String,
		Text: String,
	}
};
</script>


<style scoped>
</style>