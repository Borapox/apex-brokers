/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'custom-pattern': "url('/src/assets/Error_404.jpg')",        
      },
      boxShadow: {
        'custom-blue': '0 5px 10px -1px rgba(19, 207, 214, 0.6), 0 2px 4px -1px rgba(179, 218, 225, 0.4)',
      },
      fontFamily: {
        'mulish' : 'Mulish Variable'
      },
    },
  },
  plugins: [],
}