/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define 'baskerville' como o nome da classe utilitária
        baskerville: ['"Libre Baskerville"', 'serif'],
        alice: ['"Alice BC"', 'serif']
      },
    },
  },
  plugins: [],
}

