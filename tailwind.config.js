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
        light: {
          bg: '#ffffff',
          text: '#000000',
          primary: '#1f2937', // gray-800
          secondary: '#4b5563', // gray-600
          third: '#9ca3af', // gray-400
          'bg-primary': '#ffffff',
          'bg-secondary': '#e5e7eb', // gray-200
          'bg-third': '#f9fafb', // gray-50
        },
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
