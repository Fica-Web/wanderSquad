/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#152b5a',
        'secondary': '#ff9c34'
      }
    },
  },
  plugins: [],
}