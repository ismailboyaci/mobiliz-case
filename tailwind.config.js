/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '10px':'10px'
      },
      colors: {
        'custom':{
          b1:'#1d3557',
          b2:'#457b9d',
          b3:'#a8dadc',
          w1:'#f1faee',
          r1:'#e63946'
        }
      }
    },
  },
  plugins: [],
}
