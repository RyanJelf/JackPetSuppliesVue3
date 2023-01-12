<script>
import HeroImage from "@/components/HeroImage.vue";

import GetProduct from "../components/products/GetProduct.vue";
import tipCard from "@/components/tipCard.vue";
import productJson from "../assets/products.json";
import tipsJson from "../assets/tips.json";

export default {
	methods: {},
	data() {
		return {
			products: productJson,
			tips: tipsJson,
		};
	},
	name: "Home-page",
	components: {HeroImage, tipCard, GetProduct},
};
</script>


<template>
	<div id="container" class="text-primary-colour ">
		<HeroImage alt-text="home banner" header-image="home" />
		<h1 class=" text-primary-color text-4xl font-bold  dark:text-pale-spring-bud text-center">Welcome to Jack Pet Supplies! </h1>
		<p class="text-primary-color dark:text-pale-spring-bud mt-10"> Heaven for all dogs and dog proprietors – Jack Pet Supplies is a place that is devoted to giving you and your four-legged companions the best items, care, and life that we can. Like you, we realize that your dog is an immense part of the family. They offer such a great amount to our lives – interminable fun, grins, and unrestricted love.
			<br>
			<br> We stock many products for all pets and fish and regularly work to raise funds for Sherlock Dog Rescue. Sherlock Dog Rescue is a local dog rescue who has helped rehome over 100 dogs.
			<br><br> If you would like to know what dogs they have available for adoption, please go to the link above. We regularly raise funds and on certain products even contribute a percentage of the price to the cause, if you would like to make a donation please give us a call.
		</p>
		<h1 class="text-primary-color text-4xl font-bold  dark:text-pale-spring-bud mt-10 text-center">Subscribe today and get 15% off your first order!</h1>
		<div class="pt-10 ">
			<h1 class=" text-primary-color text-4xl font-bold  dark:text-pale-spring-bud text-center">Products</h1>
			<p class=" text-primary-color dark:text-pale-spring-bud text-center">We stock all kinds of products for almost any pet, please see our product list below and call us to confirm if we have the item you would like in so that we can put it aside for you. </p>
			<GetProduct myFile="https://ryanjelf.github.io/jsonFiles/products.json" />
		</div>
		<div class="pt-10">
			<h1 class=" text-primary-color text-4xl font-bold  dark:text-pale-spring-bud text-center">Pet Tips</h1>
			<p class=" text-primary-color dark:text-pale-spring-bud text-center"> Your pets health is important for a long and happy life. here are some tips below to read.</p>
			<tipCard v-for="tips in tips" :Title="tips.Title" :Text="tips.Text" />
		</div>
	</div>
</template>


<style scoped>

</style>
