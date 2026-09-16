import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import PageTransition from './components/PageTransition.jsx'
import { AnimatePresence } from 'framer-motion'
import ProjectPage from './pages/ProjectPage/ProjectPage.jsx'
import Metadados from './components/gerais/Metadados.jsx'

function Layout() {
  const location = useLocation()

  /* A key vai no filho direto de AnimatePresence: é só a identidade dos filhos
     diretos que ela rastreia. Com a key na motion.div interna, a troca de rota
     era um remount comum e o exit nunca rodava. */
  return (
    <>
      {/* Fora do AnimatePresence: dentro, ele seria desmontado e remontado a cada
          navegação, e o head ficaria sem metadados durante a transição. */}
      <Metadados />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/services",
        element: <AboutPage/>
      },
      {
        path: "/contact",
        element: <AboutPage/>
      },
      {
        path: "/project/:slug",
        element: <ProjectPage/>
      }
    ]
  }
])
const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
