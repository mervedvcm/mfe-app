/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'montserrat': [ "Montserrat",'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors:{
        "background": "#D9D9D9"
      }
      
    },
  },
  plugins: [],
};
