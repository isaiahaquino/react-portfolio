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
      'black': '#293241',
      'orange': '#ee6c4d',
      'white': '#e0fbfc',
      'blue': '#3d5a80',
      'blue-light': '#98c1d9',
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