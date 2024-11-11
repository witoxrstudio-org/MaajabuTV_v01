/** @type {import('tailwindcss').Config} */
export default {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["General Sans", "sans-serif"],
				serif: ["General Sans", "serif"]
			}
		}
	},
	plugins: []
};
