import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Faz o servidor escutar em todas as interfaces de rede
    port: 5173,      // Opcional: define a porta
  }
})