/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'verde-escuro': '#80dc10',
        'preto-fundo': '#1a1818',
        'cinza-box': '#4D4D4D',
      }
    },
  },
  plugins: [],
}