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
          '100': '#3daa36',
          '50': '#a9d4aa',
        },// Green
        'error': '#F54B23', // Red
        'header-background': '#eaf0f6',
        'background': '#e8ecee',
        'title': '#00234b',
        'body': '#647a9a'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

