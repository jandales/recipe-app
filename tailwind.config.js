/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js,css}",
    "./views/**/*.ejs",  
    './node_modules/tw-elements/dist/js/**/*.js'  
  ],
  theme: {
    extend: {},
    theme: {
      container: {
        lg : '1024px',
        center: true,
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
