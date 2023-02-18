import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(null);

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
