/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 مهم جدًا
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
