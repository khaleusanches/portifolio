/** @type {import('tailwindcss').Config} */

// Cada cor aponta para um token de tema definido em src/index.css. O componente
// escreve `bg-base` ou `text-muted` e nunca uma cor literal: quem decide o valor é
// o tema ativo. A forma `rgb(var(--x) / <alpha-value>)` é o que mantém os
// modificadores de opacidade do Tailwind funcionando (border-line/10).
const token = (nome) => `rgb(var(--${nome}) / <alpha-value>)`

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Acento da marca (ver Q9 / spec 0001). Tem valor por tema: o laranja
        // original tem 2,89:1 sobre as seções claras e reprova acessibilidade,
        // então o tema claro usa uma variante fechada. Ver spec 0002.
        brand: token('brand'),
        // Superfície principal da página.
        base: token('base'),
        // A faixa que alterna com a base e dá ritmo à home. Os papéis se invertem
        // entre os temas; a alternância é a mesma.
        'base-alt': token('base-alt'),
        // Texto sobre cada uma das superfícies.
        ink: token('ink'),
        'ink-alt': token('ink-alt'),
        // Texto secundário: legendas, rótulos, metadados.
        muted: token('muted'),
        // Bordas e divisores. Sempre usados com opacidade (border-line/10).
        line: token('line'),
        // Cartão elevado sobre a faixa alternada, e o texto dentro dele.
        card: token('card'),
        'on-card': token('on-card')
      },
      fontFamily: {
        // A voz padrão do site. Cai no `font-sans` do Tailwind, então todo elemento
        // que não pede nada herda Inter — é o que dispensa escrever a fonte no JSX.
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        // A voz dos títulos: headline do herói, título de seção, headline de Project
        // e de Service. Em nenhum outro lugar.
        baskerville: ['"Libre Baskerville"', 'Georgia', 'serif']
      },
      fontSize: {
        // A escala mora aqui, e não repetida a cada componente. `rotulo` é a linha
        // em caixa alta que abre uma seção; `display` é a headline do herói.
        rotulo: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        display: ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        titulo: ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }]
      },
    },
  },
  plugins: [],
}
