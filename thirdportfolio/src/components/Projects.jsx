import React from "react";
import "aos/dist/aos.css";

export default function Projects() {
  const projectList = [
    {
      title: "MyShop (E-Commerce UI)",
      desc: "A responsive shopping interface with product filtering, cart, and checkout features.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      href: "https://myshop-ecommerc.netlify.app/", 
    },
    {
      title: "Task Manager App",
      desc: "A productivity app built with React for managing and organizing daily tasks.",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
      href: "https://reminder-todo-apps.netlify.app/", 
    },
    {
      title: "Portfolio Website",
      desc: "A sleek React-based personal portfolio showcasing my projects and skills.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      href: "https://resumeshahab.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1e2f, #2a2a40, #0d6efd)",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-5" data-aos="fade-up">
          My Projects
        </h2>

        <div className="row justify-content-center">
          {projectList.map((p, i) => (
            <div
              className="col-md-4 mb-4"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  backgroundColor: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.2)";
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body text-dark">
                  <h5 className="card-title fw-bold">{p.title}</h5>
                  <p className="card-text text-muted mb-4">{p.desc}</p>

                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
