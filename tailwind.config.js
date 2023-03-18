/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'green': "#89c161",
        'black_custom': '#475567',
        'green-custom': 'rgb(75,104,110)',
        'custom-black': 'rgb(36 35 35)',
        'blue_marine': '#002E5D',
        'sky_blue': '#38BDDA'

      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '37px',
        '5xl': '45px',
        '6xl': '56px'
      },
      fontFamily: {
        "Montserrat": "Montserrat"
      },
      height: {
        '456px': '456px',
      },
      width: {
        '330px': '330px',
        '645px': '645px',
        '50%': '50%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%'
      }
    },
  },
  plugins: [],
}
