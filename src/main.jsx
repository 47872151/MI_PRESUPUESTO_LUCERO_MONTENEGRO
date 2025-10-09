
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MovimientosProvider } from './contexts/MovimientosContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MovimientosProvider>
        <App />
      </MovimientosProvider>
    </ThemeProvider>
  </StrictMode>,
)
