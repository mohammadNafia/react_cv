/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#ffa69e', // Powder Blush
        dark: '#5e6472', // Blue Slate
        secondary: '#aed9e0', // Light Blue
        light: '#faf3dd', // Vanilla Cream
        icyAqua: '#b8f2e6' // Icy Aqua
      }
    }
  },
  plugins: []
};

