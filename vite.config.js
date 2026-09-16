import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Faz o servidor escutar em todas as interfaces de rede
    port: 5173,      // Opcional: define a porta
  },
  build: {
    // O build de SSR é acionado por `vite build --ssr`; a entrada é declarada aqui para
    // que o comando não precise repetir o caminho. Ver scripts/prerender.js.
    rollupOptions: {},
  },
  ssr: {
    // styled-components precisa ser processado pelo Vite no bundle de SSR: importado
    // como dependência externa, ele carrega a build de navegador e quebra em Node.
    noExternal: ['styled-components'],
  },
})
