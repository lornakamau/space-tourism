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
        'technology-mobile': "url('./assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('./assets/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('./assets/technology/background-technology-desktop.jpg')",
      },
      keyframes: {
        fadeIn : {
          '0%' : { opacity: 0.1},
          '100%': { opacity: 1 }
        },
        scaleInLg : {
          '0%' : {transform: 'scale(0.8)', transform: 'translateX(250px)'},
          '100%': { transform: 'scale(1)'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in',
        scaleInLg : 'scaleInLg 2s ease-in'
      }
    }
  },
  plugins: [],
}
