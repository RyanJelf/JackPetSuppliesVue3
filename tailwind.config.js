/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
	theme: {

		container: {
			center: true,

			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
			},
		},

		screens: {
			xs: "325px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			colors: {
				//light mode colours
				"primary-color": "#606c38",
				"secondary-color": "#E6D3A3",
				"pale-spring-bud": "#dde5b6ff",

				// dark mode colours
				"dark-bg": "#5b5b5b",
				"dark-button-bg": "#383D16",


			},
		},
	},
	plugins: [],
};
