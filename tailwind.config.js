/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080A09',
        forest: '#123D2A',
        paper: '#F5F7F6',
        cream: '#F5F7F6',
        primary: '#1FA463',
        accent: '#39FF88',
        emerald: {
          DEFAULT: '#1FA463',
          light: '#39FF88',
          deep: '#123D2A',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        display: ['"Anton SC"', '"IBM Plex Sans Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
