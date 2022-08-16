/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: '468px',
      },
      fontFamily: {
        barlow: ['Barlow Condensed'],
        bellefair: ['Bellefair']
      },
      backgroundImage: {
        'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'width: 0' },
          '50%': { transform: 'width: 50%' },
          '100%': { transform: 'width: 100%' },
        }
      },
      animation: {
        wiggle: '10s',
      }
    },
  },
  plugins: [],
}
