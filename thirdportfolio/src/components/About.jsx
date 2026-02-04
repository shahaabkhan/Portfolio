// About.jsx
import React, { useEffect } from 'react';
import { FaCode, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  // Initialize scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="d-flex align-items-center text-white"
      style={{
        background: 'linear-gradient(135deg, #1a1f71, #6f42c1)', 
        minHeight: '100vh',
      }}
    >
      <div className="container py-5">
        {/* === Section Heading === */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-3 text-warning">About Me</h2>
          <p className="mx-auto" style={{ maxWidth: '700px', color: 'rgba(255,255,255,0.85)' }}>
            I'm a dedicated <strong>React Developer</strong> from Peshawar who builds fast,
            responsive, and user-focused web applications using React, Bootstrap, and JavaScript.
          </p>
        </div>

        {/* === Cards Row === */}
        <div className="row text-center g-4">
          {/* === Skills Card === */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div
              className="card h-100 border-0 shadow-lg transition"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                borderRadius: '18px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
              }}
            >
              <div className="card-body">
                <FaCode className="text-warning mb-3" size={45} />
                <h5 className="card-title fw-bold mb-3">Skills</h5>
                <p className="card-text" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  React.js, JavaScript, HTML, CSS, and Bootstrap.  
                  Passionate about writing clean code and creating visually stunning designs.
                </p>
              </div>
            </div>
          </div>

          {/* === Experience Card === */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div
              className="card h-100 border-0 shadow-lg"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                borderRadius: '18px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
              }}
            >
              <div className="card-body">
                <FaBriefcase className="text-warning mb-3" size={45} />
                <h5 className="card-title fw-bold mb-3">Experience</h5>
                <p className="card-text" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Over a year of hands-on front-end experience.  
                  I specialize in crafting responsive, high-quality web interfaces and layouts.
                </p>
              </div>
            </div>
          </div>

          {/* === Projects Card === */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div
              className="card h-100 border-0 shadow-lg"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                borderRadius: '18px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
              }}
            >
              <div className="card-body">
                <FaProjectDiagram className="text-warning mb-3" size={45} />
                <h5 className="card-title fw-bold mb-3">Projects</h5>
                <p className="card-text" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Created interactive portfolios and business websites  
                  with a focus on performance, design, and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
