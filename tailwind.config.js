/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B71CA',
        'secondary': '#9FA6B2',
        'third': '#54B4D3',
        'light': '#FBFBFB',
        'text': '#151e26',
        'dark': '#332D2D',
    },
  },
  plugins: [],
}
}
