// Navbar.jsx
// Transparent navbar that turns dark when scrolling

import React, { useEffect, useState } from 'react'

export default function SiteNav() {
  const [navBg, setNavBg] = useState(false)

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true) // make navbar dark
      } else {
        setNavBg(false) // keep transparent
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm ${
        navBg ? 'navbar-dark bg-dark' : 'navbar-dark'
      }`}
      style={{
        backgroundColor: navBg ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        transition: 'background-color 0.5s ease',
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Shahab Khan
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
