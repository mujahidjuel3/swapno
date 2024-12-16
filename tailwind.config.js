/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{js,ts,jsx,tsx}",
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./component/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  border: "hsl(var(--border))",
		},
	  },
	},
	plugins: [],
  };
  