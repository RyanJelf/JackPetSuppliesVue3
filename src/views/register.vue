<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useRouter} from "vue-router";

const password = ref("");
const email = ref("");
const router = useRouter();

const register = () => {
	createUserWithEmailAndPassword(getAuth(), email.value, password.value).then((data) => {
		console.log("Successfully Registered!");
	}).catch((error) => {
		console.log(error.code);
		alert(error.message);
	})
};


</script>

<template>
	<div class="m-auto p-auto w-full max-w-xs ">
		<div class="bg-gray-100 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 dark:bg-stone-400 dark:text-dark-bg ">
			<p class=" text-2xl text-primary-color dark:text-dark-bg text-center wrap-none">Create an account</p>
			<div>
				<label for="myEmail" class="block text-primary-color dark:text-dark-bg text-sm font-bold mb-2">Email</label>
				<input type="email" v-model="email" id="myEmail" name="myEmail" required class="bg-gray-200 appearance-none border-2 border-stone-200 rounded w-full py-2 px-4 text-stone-400 focus:outline-none focus:bg-white focus:border-stone-500" />
			</div>
			<div>
				<label for="myPassword" class="block text-primary-color dark:text-dark-bg text-sm font-bold mb-2">Password</label>
				<input type="password" v-model="password" id="myPassword" name="myPassword" required class="bg-gray-200 appearance-none border-2 border-stone-200 rounded w-full py-2 px-4 text-stone-400 focus:outline-none focus:bg-white focus:border-stone-500" />
			</div>
			<button @click="register" class=" w-full   mt-3 px-6 h-12 font-semibold border-2 rounded-lg border-black bg-pale-spring-bud text-primary-color dark:text-pale-spring-bud dark:bg-dark-button-bg text-stone-400">Register</button>
		</div>
	</div>
</template>

<style scoped>
.box {
	width: 100%;
	height: auto;
}
</style>