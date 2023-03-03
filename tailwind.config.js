/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#42b4e5",
				bg: "#DEF5FA",
				white: "#ffffff",
				menu: "#143f57",
				border: "#ccc5fa",
				boxShadow: "rgb(0 11 40 / 10%)",
			},
		},
	},
	plugins: [],
};
