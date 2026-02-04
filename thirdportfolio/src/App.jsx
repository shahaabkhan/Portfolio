// App.jsx
// Main file that connects all components together

import React from 'react'
import SiteNav from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SiteFooter from './components/Footer'

export default function App() {
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {/* Navbar at the top */}
      <SiteNav />

      {/* Main sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer at the bottom */}
      <SiteFooter />
    </div>
  )
}
