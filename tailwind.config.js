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
        primary: '#01a3a4',
        primary2: '#017d7e',
      },
      fontFamily: {
        primary: ['DM Sans', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
