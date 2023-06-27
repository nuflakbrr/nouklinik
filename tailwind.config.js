/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#943e97',
        primarydark: '#682b6a',
        secondary: '#6e6e6c',
        secondarydark: '#4d4d4c',
      },
      fontFamily: {
        primary: ['DM Sans', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
