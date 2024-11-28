/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lobster': ['lobster', 'sans-serif']
      },
      colors : {
        'primary': '#E7FAFE',
        'secondary': '#FF7426',
      }
    },
  },
  plugins: [],
}

