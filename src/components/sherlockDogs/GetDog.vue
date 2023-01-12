<script setup>
import {ref, onMounted} from "vue";
import DogItem from "@/components/sherlockDogs/DogItem.vue";

const myProps = defineProps({
	myFile: {
		type: String,
		required: true,
	},
});
console.log(myProps.myFile);
let myJson = ref([]);
onMounted(() => {
	fetchData();
});

function fetchData() {
	fetch(myProps.myFile).then((stream) => stream.json()).then((data) => (myJson.value = data)).catch((error) => console.error(error));
}


</script>
<template>
	<div class="mt-10 sm:gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 w-full h-1/2">
		<dogItem
				class="container"
				v-for="(dog, Id) in myJson.dogs"
				:key="Id"
				:dogs="dog"
		></dogItem>
	</div>
</template>
<style scoped>

</style>
