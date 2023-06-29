/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				primary: "#EDF1F7",
				secondary: "#4154F1",
				title: "#012970",
        txtpurple: "#4154F1",
			},
			container: {
				center: true,
				padding: "5rem",
			},
      minHeight: {
        screen90 : "90vh"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

