/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'tablet': '400px',
      },
      fontFamily: {
        'sans': ['Poppins', 'Roboto Slab'],
        'get': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
