/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
	theme: {"colors": {"dark": {"100": "#111113"}}, "extend": {}},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
};