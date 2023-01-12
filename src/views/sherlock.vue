<script>
import HeroImage from "@/components/HeroImage.vue";
import GetDog from "@/components/sherlockDogs/GetDog.vue";

export default {
	name: "Sherlock-page",
	components: {GetDog, HeroImage},
};

</script>

<template>
	<HeroImage alt-text="sherlock banner" header-image="sherlock" />
	<h1 class=" text-primary-color text-4xl font-bold  dark:text-pale-spring-bud text-center"> Sherlock Dog Rescue was founded in August 1997 by a handful of like-minded people who simply wanted to rescue and re-home abandoned dogs. Founder members agreed that they would not get into any politics, rules or regulations and therefore it was decided there would be no long list of committee members drawing up endless policies.
		<br> <br> If you would like to know more please call us or Jack Pet Supplies to arrange an appointment to meet the dogs. </h1>
	<GetDog myFile="https://ryanjelf.github.io/jsonFiles/sherlockDogs.json" />
</template>
<style scoped>


</style>
