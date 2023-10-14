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
          primary2: '#7f8da6',
          blackprimary: '#09090a',
          blackprimary2:'#1f2024',
          secondary: '#3d4c5c',
          heading: '#212a33',
          dunegreen: '#348a4a',
        },
     
    },
  },
  plugins: [],
}