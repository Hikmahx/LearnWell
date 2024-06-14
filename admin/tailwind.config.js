/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      screens: {
        '2xl': '1336px'
      },
      colors: {
        "blue": "#146BFB",
        "soft-red": "#EA5353",
        "yellow": "#FECF63",
        "purple": "#9B51E0",
        "green": "#42DA80",
        "white": "#fff",
        "gray": "#b5b5b5",
        "dark-gray": "#494C5F",
      },
    },
  },
  plugins: [],
}

