// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef6ec',
          100: '#fdeac9',
          200: '#fbd28d',
          300: '#f9b558',
          400: '#f7941d',
          500: '#f77a0e',
          600: '#db5a09',
          700: '#b63d0b',
          800: '#933010',
          900: '#782810',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
