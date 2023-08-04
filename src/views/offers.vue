<template>
	<div>
		<HeroImage alt-text="offers banner" header-image="offers" />
	</div>
	
	<div class="flex justify-center mt-10">
		<img src="../assets/images/discount.jpg" alt="discount">
	</div>
</template>

<script>

import HeroImage from "@/components/HeroImage.vue";

export default {
	name: "offers",
	components: {HeroImage}
}

</script>

<style scoped>

</style>