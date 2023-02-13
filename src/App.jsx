// React Components
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
