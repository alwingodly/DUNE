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
          secondary: '#3d4c5c',
          heading: '#242736',
          darkend: '#7f8da6',
          dunegreen: '#348a4a'
        },
     
    },
  },
  plugins: [],
}