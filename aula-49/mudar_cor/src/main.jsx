import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { themeModifier } from './modificarTema'
import { ThemeDisplay } from './modificarTema'
import { ThemeToggleButton } from './modificarTema'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <themeModifier>
      <div style={{ padding: "20px" }}>
        <ThemeDisplay />
        <ThemeToggleButton />
      </div>
    </themeModifier>
  </StrictMode>,
)
