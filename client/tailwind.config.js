/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   
        colors: {
          primary: '#b4bed6', 
          secondary: '#ebecf0',
          heading: '#242736'
        },
     
    },
  },
  plugins: [],
}