/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      color5: '#374151',
      color4: '#bfdbfe',
      color3: '#d9f99d',
      color2: '#03346e',
      color1: '#021526'
    },
    extend: {
      fontFamily: {
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

