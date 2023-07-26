/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				raleway: ["Raleway", "sans-serif"],
				fira: ["Fira Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				jakarta: ["Plus Jakarta Sans", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
			backgroundImage: {
				"footer-texture":
					"linear-gradient(to  right , rgba(7, 13, 63, 1),rgba(0, 123, 128, 1))",
			},
		},
	},
	plugins: [],
};
