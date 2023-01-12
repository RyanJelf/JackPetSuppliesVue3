<template>
	<div>
		<HeroImage alt-text="product banner" header-image="products" />
		<h1 class=" text-primary-color text-4xl font-bold  dark:text-pale-spring-bud text-center">Products</h1>
		<p class=" text-primary-color dark:text-pale-spring-bud text-center">We stock all kinds of products for almost any pet, please see our product list below and call us to confirm if we have the item you would like in so that we can put it aside for you. </p>
		<GetProduct myFile="https://ryanjelf.github.io/jsonFiles/products.json" />
	</div>
</template>

<script setup>
import GetProduct from "../components/products/GetProduct.vue";
import HeroImage from "@/components/HeroImage.vue";
</script>

<style scoped></style>
