import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Builder from './components/Builder.jsx'
import Header from './components/Header.jsx'
import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Builder />
  </StrictMode>,
)
