/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "monochrome-light": "#FBF9F6",
      "monochrome-999": "#999999",
      "primary-blue": "#002F47",
      "monochrome-test": "#585653"
    },
    fontFamily:{
      recoleta: ["Recoleta"],
      avenir: ["Avenir"],
    },
    extend: {},
  },
  plugins: [],
};
