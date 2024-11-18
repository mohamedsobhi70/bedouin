/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '32px',
          lg: '16px',
        },
        screens: {
          xl: '1170px'
        },
      },
      fontFamily: {
        'Recoleta': ['Recoleta', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'room-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) -6.78%, #000000 188.98%)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
    styled: false,
  },
}

