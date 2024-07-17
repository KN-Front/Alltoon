/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spoqa Han Sans Neo', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#000000',
          white: '#ffffff',
          primary: '#f3f4f6', // gray-100
          secondary: '#9ca3af', // gray-400
          third: '#94a3b8',
          'bg-primary': '#000000',
          'bg-secondary': '#3f3f4680',
          'bg-third': '#18181BE6',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
