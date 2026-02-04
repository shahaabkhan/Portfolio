import React, { useState } from "react";
import "aos/dist/aos.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d6efd, #6f42c1, #2a2a40)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold display-5">Get In Touch</h2>
          <p className="text-light opacity-75 mt-2">
            Have a project or idea in mind? Let’s connect and make it happen!
          </p>
        </div>

        <div
          className="mx-auto p-4 p-md-5 shadow-lg"
          style={{
            maxWidth: "600px",
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
          data-aos="zoom-in"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="form-control form-control-lg bg-transparent text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "white",
                }}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="form-control form-control-lg bg-transparent text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "white",
                }}
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="form-control bg-transparent text-white"
                rows="4"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "white",
                }}
                required
              ></textarea>
            </div>

            <button
              className="btn btn-light w-100 py-2 fw-bold"
              type="submit"
              style={{
                borderRadius: "30px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Inline CSS for placeholder color */}
      <style>
        {`
          ::placeholder {
            color: rgba(255, 255, 255, 0.7) !important;
          }
          input:focus, textarea:focus {
            border-color: #ffc107 !important;
            box-shadow: 0 0 10px rgba(255, 193, 7, 0.3);
          }
        `}
      </style>
    </section>
  );
}
