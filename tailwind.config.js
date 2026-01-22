/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors:{
        'primary':'#13a4ec',
        "background-light": "#f6f7f8",
        "background-dark": "#0b0b0b",
      },
      fontFamily:{
        'display':['Inter','sans-serif'],
        'hand':["Indie Flower", 'cursive'],
        'font1': ["FontOne", "sans-serif"],
      }
    },
  },
  plugins: [],
}

