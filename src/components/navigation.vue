<script>

export default {
	
	data() {
		return {
			isOpen: false,
		};
	},
	
};
</script>

<template class="bg-primary-bg dark:bg-dark-bg">
	<header class="sm:flex sm:justify-between sm:text-xs sm:px-4 sm:py-3 md:text-3xl">
		<div class="flex items-center justify-between px-4 py-3 sm:p-0">
			<div>
				<RouterLink to="/">
					<img
							class="xs:h-8 w-8 sm:h-12 sm:w-14 dark:invert"
							src="./icons/logo.svg"
							alt="Jacks Pet Supply Logo"
					/>
				</RouterLink>
			</div>
			
			<div class="sm:hidden">
				<button @click="isOpen = !isOpen" type="button">
					<svg class="h-10 w-10 fill-primary-colour" viewBox="0 0 24 24">
						<!--	hamburger to open -->
						<path
								class="dark:invert"
								v-if="!isOpen"
								d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
						<!--	cross to close -->
						<path class="dark:invert"
						      v-if="isOpen"
						      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</button>
			</div>
		</div>
		
		<div
				:class="isOpen ? 'block' : 'hidden'"
				class="py-3 pb-4 xs:text-sm sm:flex sm:p-0 sm:text-[15px] md:text-xl text-stone-400 hover:text-primary-color dark:hover:text-pale-spring-bud">
			<RouterLink to="/" class="block mt-2 my-2 py-1 px-2 text-stone-400 hover:text-primary-color dark:hover:text-pale-spring-bud ">Home</RouterLink>
			<RouterLink to="/products" class="block mt-2 my-2 py-1 px-2 text-stone-400 hover:text-primary-color dark:hover:text-pale-spring-bud ">| Products</RouterLink>
			<RouterLink to="/offers" class="block mt-2 my-2 py-1 px-2 text-stone-400 hover:text-primary-color dark:hover:text-pale-spring-bud ">| Offers</RouterLink>
			<RouterLink to="/sherlock" class="block mt-2 my-2 py-1 px-2 text-stone-400 hover:text-primary-color dark:hover:text-pale-spring-bud  sm:text-center">| Sherlock Dog Rescue</RouterLink>
			<RouterLink to="/register" class="block mt-2 my-2 py-1 px-2 text-stone-400 hover:text-primary-color xs:font-bold sm:font-normal bg-pale-spring-bud dark:bg-dark-button-bg dark:hover:text-pale-spring-bud sm:rounded-md">Register</RouterLink>
		
		</div>
		<div>
		
		</div>
	</header>
</template>


<style scoped></style>
