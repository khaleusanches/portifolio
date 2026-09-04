/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Acento único da marca (ver Q9 / spec 0001). Antes era literal repetido.
        brand: '#fe5800',
        // Fundo das telas escuras. Não é preto puro de propósito: as Screenshots são
        // claras, e contra #000 elas recortam da página em vez de assentar nela.
        surface: '#0f1319'
      },
      fontFamily: {
        baskerville: ['"Libre Baskerville"', 'serif']
      },
    },
  },
  plugins: [],
}

