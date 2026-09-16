import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')

const arvore = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

/* O build pré-renderiza cada rota, então em produção a marcação já está no documento.
   Hidratar, em vez de recriar, é o que evita a página piscar em branco entre o HTML
   servido e a primeira pintura do React. Em desenvolvimento não há nada para hidratar. */
if (root.hasChildNodes()) {
  hydrateRoot(root, arvore)
} else {
  createRoot(root).render(arvore)
}
