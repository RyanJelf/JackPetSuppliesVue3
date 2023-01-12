<script setup>
import {ref, onMounted} from "vue";
import ProductItem from "./ProductItem.vue";

const myProps = defineProps({
	myFile: {
		type: String,
		required: true,
	},
});

let myJson = ref([]);
onMounted(() => {
	fetchData();
	
});

function fetchData() {
	fetch(myProps.myFile).then((stream) => stream.json()).then((data) => (myJson.value = data)).catch((error) => console.error(error));
}
</script>
<template>
	<div class="mt-10 sm:gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:gap-3 lg:grid lg:grid-cols-4">
		<ProductItem
				class="container"
				v-for="(product, Id) in myJson.products"
				:key="Id"
				:products="product"
		></ProductItem>
	</div>
</template>
<style scoped>

</style>
