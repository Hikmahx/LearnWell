// /** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blue': '#1522F1',
        'soft-red': '#EA5353',
        'yellow': '#FECF63',
        'purple': '#9B51E0',
        'green': '#42DA80',
        'white': '#fff'
      }
    },
  },
  plugins: [],
}