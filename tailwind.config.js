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
        barlow: ['"Barlow"', 'sans-serif'],
        barlowCondensed: ['"Barlow Condensed"', 'sans-serif'],
        bellefair: ['"Bellefair"', 'serif']
      },
      backgroundImage: {
        'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
        'destination-mobile': "url('./assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('./assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('./assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('./assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('./assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('./assets/crew/background-crew-desktop.jpg')",
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
