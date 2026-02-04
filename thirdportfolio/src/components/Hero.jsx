import React from 'react'
import 'animate.css';


export default function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-white"
      style={{
        background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* ==== Left Side: Text ==== */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1
              className="fw-bold display-4 mb-3 animate__animated animate__fadeInLeft"
              style={{ lineHeight: '1.2' }}
            >
              Hi, I'm <span className="text-warning">Shahab</span>
            </h1>
            <h3 className="fw-semibold mb-3 animate__animated animate__fadeInLeft animate__delay-1s">
              Web Developer (React)
            </h3>
            <p className="lead mb-4 animate__animated animate__fadeInLeft animate__delay-2s">
              I specialize in building fast, interactive, and visually appealing web applications
              using React, Bootstrap, and modern JavaScript.
            </p>
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
              <a href="#projects" className="btn btn-light btn-lg me-3">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Me
              </a>
            </div>
          </div>

          {/* ==== Right Side: Image ==== */}
          <div className="col-md-6 text-center">
            <img
              src={"./images/shahab (2).jpeg"}
              alt="Shahab Khan"
              className="img-fluid rounded-circle shadow-lg hero-img animate__animated animate__zoomIn"
              style={{
                maxWidth: '250px',
                border: '5px solid rgba(233, 228, 228, 0.97)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

