import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Project'
import About from './pages/About'
import './index.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  )
}

