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
      backgroundImage: {
        'room-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) -6.78%, #000000 188.98%)',
      }
    },
  },
  plugins: [],
}

