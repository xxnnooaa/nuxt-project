/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  css: ['@/assets/css/main.css'],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Custom primary color
        secondary: '#2d3748', // Custom secondary color
        accent: '#38b2ac', // Custom accent color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom sans-serif font
        serif: ['Merriweather', 'serif'], // Custom serif font
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}