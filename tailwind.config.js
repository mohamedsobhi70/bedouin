/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: '1170px'
        },
      },
      fontFamily: {
        'Recoleta': ['Recoleta', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

