import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout.tsx'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
