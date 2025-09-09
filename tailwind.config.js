/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A192F', // Navy Blue for backgrounds
          light: '#1E2A45',
          dark: '#050D1A',
        },
        accent: {
          DEFAULT: '#00B5D8', // Cyan/Teal for highlights and charts
          light: '#25D0F3',
          dark: '#0090AD',
        },
        highlight: {
          DEFAULT: '#FFD700', // Yellow/Gold for CTA and key highlights
          light: '#FFDF33',
          dark: '#CCAC00',
        },
        success: {
          DEFAULT: '#4CAF50', // Green for success metrics
          light: '#6EC071',
          dark: '#3B8C3E',
        },
        dark: {
          DEFAULT: '#0A192F', // Navy Blue (same as primary)
          light: '#1E2A45',
          lighter: '#2D3A56',
        },
        light: {
          DEFAULT: '#F5F7FA', // Light Gray for sections/cards
          dark: '#E1E5EB',
        },
        // Light mode colors
        'light-primary': {
          DEFAULT: '#F5F7FA',
          dark: '#E1E5EB',
          light: '#FFFFFF',
        },
        'light-text': {
          DEFAULT: '#0A192F',
          light: '#1E2A45',
          dark: '#050D1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};