import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Metadados from './components/gerais/Metadados.jsx'
import PageTransition from './components/PageTransition.jsx'
import MainPage from './pages/MainPage/MainPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import ProjectPage from './pages/ProjectPage/ProjectPage.jsx'

/**
 * As rotas do site, num lugar só.
 *
 * Declarativas e não `createBrowserRouter`, porque este mesmo componente é montado
 * duas vezes: pelo navegador, dentro de um BrowserRouter, e pela pré-renderização do
 * build, dentro de um MemoryRouter. Com o roteador criado por função, a lista de rotas
 * teria de existir duas vezes — e é ela que diz quais páginas viram HTML.
 */
function App() {
  const location = useLocation()

  return (
    <>
      {/* Fora do AnimatePresence: dentro, seria desmontado e remontado a cada
          navegação, e o head ficaria sem metadados durante a transição. */}
      <Metadados />
      {/* A key vai no filho direto de AnimatePresence: é só a identidade dos filhos
          diretos que ela rastreia. Com a key na motion.div interna, a troca de rota
          era um remount comum e o exit nunca rodava. */}
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<AboutPage />} />
            <Route path="/contact" element={<AboutPage />} />
            <Route path="/project/:slug" element={<ProjectPage />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </>
  )
}

export default App
