import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer
      className="text-light py-4 text-center"
      style={{
        background: "linear-gradient(135deg, #1e1e2f, #2a2a40, #0d6efd)",
      }}
    >
      <div className="container">
        {/* ==== Social Icons ==== */}
        <div className="mb-3">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3 fs-4"
          >
            <FaFacebookF className="footer-icon" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3 fs-4"
          >
            <FaInstagram className="footer-icon" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3 fs-4"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3 fs-4"
          >
            <FaLinkedinIn className="footer-icon" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3 fs-4"
          >
            <FaWhatsapp className="footer-icon" />
          </a>
        </div>

        {/* ==== Copyright ==== */}
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} <strong>Shahab Khan</strong>. All Rights Reserved.
        </p>
      </div>

      {/* ==== Hover Animation ==== */}
      <style>
        {`
          .footer-icon {
            transition: all 0.3s ease;
          }
          .footer-icon:hover {
            color: #ffc107;
            transform: scale(1.2);
          }
        `}
      </style>
    </footer>
  );
}
