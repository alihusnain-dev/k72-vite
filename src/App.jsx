import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App