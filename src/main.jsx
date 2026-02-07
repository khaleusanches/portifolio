import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage.jsx'
import PortifolioPage from './pages/PortifolioPage/PortifolioPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "/portifolio",
    element: <PortifolioPage/>
  }
])
const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
