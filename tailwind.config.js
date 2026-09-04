/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Acento único da marca (ver Q9 / spec 0001). Antes era literal repetido.
        brand: '#fe5800'
      },
      fontFamily: {
        baskerville: ['"Libre Baskerville"', 'serif']
      },
    },
  },
  plugins: [],
}

