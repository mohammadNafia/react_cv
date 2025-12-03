/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#3B82F6',
        dark: '#0D0D0D'
      }
    }
  },
  plugins: []
};

