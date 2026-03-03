/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotdog: {
          mustard: '#FFD93D',
          ketchup: '#FF6B6B',
          bun: '#F4A261',
          relish: '#06D6A0',
        },
      },
    },
  },
  plugins: [],
}
