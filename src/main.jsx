import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StairAnimation from './components /common/StairAnimation'
import Navbar from './components /common/Navbar.jsx'
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StairAnimation >
        <Navbar />
        <App className="font-[Lausanne-300]" />
      </StairAnimation>
    </BrowserRouter>
  </StrictMode>,
)
