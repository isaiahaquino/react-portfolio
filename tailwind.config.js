/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#252422',
      'orange': '#eb5e28',
      'white': '#fffcf2',
      'blue': '#403d39',
      'blue-light': '#ccc5b9',
      'red': '#c1121f',
      'red-dark': '#780000'
    },
    extend: {
      fontFamily: {
        'gloock': ['Gloock', 'regular']
      }
    },
  },
  plugins: [],
}