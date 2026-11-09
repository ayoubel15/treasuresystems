/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#010504',
        forest: '#0C3C26',
        cream: '#F7F1E5',
        emerald: {
          DEFAULT: '#0AC57A',
          light: '#19DB92',
          deep: '#003A19',
        },
      },
      fontFamily: {
        sans: ['"Space Mono"', '"IBM Plex Sans Arabic"', 'monospace'],
        display: ['"Anton SC"', '"IBM Plex Sans Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
