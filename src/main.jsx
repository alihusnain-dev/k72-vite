import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StairAnimation from './components /common/StairAnimation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StairAnimation>
        <App className="font-[Lausanne-300]" />
      </StairAnimation>
    </BrowserRouter>
  </StrictMode>,
)
