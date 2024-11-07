/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        customblue: {
          light: '#85d7ff',
          DEFAULT: '#8fd6ce',
          dark: '#009eeb',
        },
        customgreen: '#00ff00', 
        customdarkblue: '#284d5a'
      },
      keyframes: {

        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },

      },

      animation: {
       
        fadeIn: 'fadeIn 2s ease-in',
        fadeOut: 'fadeOut 2s ease-in',

      },
      
    },
  },
  plugins: [],
}
