/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ['"Tangerine"', 'cursive'],
        gurajada: ['"Gurajada"', 'serif'],
        maitree: ['"Maitree"', 'serif'],
        bungee: ['"Bungee Spice"', 'cursive'],
        underdog: ['"Underdog"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

