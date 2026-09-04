import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import PageTransition from './components/PageTransition.jsx'
import { AnimatePresence } from 'framer-motion'
import ProjectPage from './pages/ProjectPage/ProjectPage.jsx'

function Layout() {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <Outlet />
      </PageTransition>
    </AnimatePresence>
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
