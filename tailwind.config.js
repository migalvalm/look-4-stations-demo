/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'border-black',
    'border-grey',
  ],
  theme: {
    extend: {
      colors: {
        'normal': {
          '100': '#B6BBC4',
          '50': '#92969d',
        },// Red
        'header-background': '#eaf0f6',
        'background': '#31304D',
        'nav-background': '#161A30',
        'title': '#F0ECE5',
        'sub-title': '#d8d4ce',
        'body': '#161A30'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

