/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mypurple': '#6200EA',
        'error': '#ef4444',
        'bgerror': '#fecaca',
      },
    },
  },
  plugins: [],
}