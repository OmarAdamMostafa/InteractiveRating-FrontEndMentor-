/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boxColorUp: '#2f2f30',
        boxColorDown: '#202021',
      }
    },
  },
  plugins: [],
}
