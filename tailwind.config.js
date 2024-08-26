/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '8px',
        xl: '0px'
      }
    },
    extend: {
      fontFamily: {
        poppis: ['Poppins', 'sans-serif'],
        messiri: ['El Messiri', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif']
      },
      dropShadow: {
        orange: '0px 0px 10px rgba(255, 122, 0, 0.5)'
      }
    }
  },
  plugins: []
};
