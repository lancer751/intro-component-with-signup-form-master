/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    colors:{
      "Red": "hsl(0, 100%, 74%)", 
      "Green": "hsl(154, 59%, 51%)",
      "Blue": "hsl(248, 32%, 49%)",
      "Dark-Blue": "hsl(249, 10%, 26%)", 
      "Grayish-Blue": "hsl(246, 25%, 77%)",
      "white": "#ffffff",
    },
    fontFamily:{
      "poppins": ["Poppins", "sans-serif"],
    },
    backgroundImage:{
      "intro-mobile": "url('../images/bg-intro-mobile.png')",
      "intro-desktop": "url('../images/bg-intro-desktop.png')",
    },
    extend: {},
  },
  plugins: [],
}

