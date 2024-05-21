/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/*.{html,js}',
  './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ["Caveat", ...defaultTheme.fontFamily.serif]    
      }
    },
  },
  plugins: [],
}

