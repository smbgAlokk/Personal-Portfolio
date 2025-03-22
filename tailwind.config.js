/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#800020',
          light: '#a6163c',
          dark: '#590016',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#3d3d3d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};