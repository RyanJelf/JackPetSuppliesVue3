import {createApp, onMounted, ref} from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCTIUSW_VxwtOa10Nyz-s_W5W3UGw-eipk",
	authDomain: "jackpetsupplies.firebaseapp.com",
	projectId: "jackpetsupplies",
	storageBucket: "jackpetsupplies.appspot.com",
	messagingSenderId: "520259541021",
	appId: "1:520259541021:web:262bf7043715bfb5b04ef4"
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.mount("#app");

const isLoggedIn = ref(false);

let auth;




