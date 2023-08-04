<script setup>
import Nav_menu from "./components/navigation.vue";
import Nav_footer from "./components/footer.vue";
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import router from "@/router";


const isLoggedIn = ref(false);

let auth;
onMounted(() => {
	auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			isLoggedIn.value = true;
		} else {
			isLoggedIn.value = false;
		}
	});
});

const handleSignOut = () => {
	signOut(auth).then(() => {
		router.push("/");
	});
};


import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);


console.log(isDark.value);
</script>

<template>



	<div class="bg-primary-bg dark:bg-dark-bg">

		<div>


			
			<button @click="handleSignOut" v-if="isLoggedIn" class=" float-right mt-6 mr-5 my-2 py-1 px-10 text-stone-400 hover:text-primary-color xs:font-bold sm:font-normal bg-pale-spring-bud dark:bg-dark-button-bg dark:hover:text-pale-spring-bud sm:rounded-md">Sign Out</button>
			<button class="ml-3 mt-1 my-1 py-1 px-1 text-stone-500 hover:text-primary-color xs:font-bold sm:font-normal bg-pale-spring-bud dark:bg-dark-button-bg dark:hover:text-pale-spring-bud sm:rounded-md" @click="toggleDark()"> {{ isDark ? "Light" : "Dark" }} Mode</button>

			<Nav_menu />

		</div>
		<RouterView />
		<Nav_footer />
	</div>
</template>

<style>

</style>
