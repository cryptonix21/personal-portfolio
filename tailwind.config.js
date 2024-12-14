/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF5',
          100: '#FFF8E7',
          200: '#FFF1D0',
          300: '#FFE4B0',
          400: '#FFD580',
          500: '#FFC94D',
        },
        'uni': {
          pink: '#FF007A',
          'pink-light': '#FF4D9E',
          'pink-dark': '#D10066',
          purple: '#7A0099',
          'purple-light': '#9B00C6',
          'purple-dark': '#5C0073',
        },
        'uni-pink': '#FF69B4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};