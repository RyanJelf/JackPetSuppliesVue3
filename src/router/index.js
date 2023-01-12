import {createRouter, createWebHistory} from "vue-router";
import products from "@/views/products.vue";
import home from "@/views/home.vue";
import offers from "@/views/offers.vue";
import sherlock from "@/views/sherlock.vue";
import register from "@/views/register.vue";


const router = createRouter({

	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: home,
		},
		{
			path: "/offers",
			name: "offers",
			component: offers,
			meta: {
				isLoggedIn: true,
			}
		},
		{
			path: "/products",
			name: "products",
			component: products,
		},
		{
			path: "/sherlock",
			name: "sherlock",
			component: sherlock,
		},
		{
			path: '/register',
			name: 'register',
			component: register,
		}


	],
});
export default router;

