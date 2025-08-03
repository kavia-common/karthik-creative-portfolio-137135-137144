import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// PUBLIC_INTERFACE
function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={() => onNavigate("introduction")}>
        Karthik
      </div>
      <div className="navbar-links">
        <span className="navbar-link" onClick={() => onNavigate("introduction")}>Home</span>
        <span className="navbar-link" onClick={() => onNavigate("expertise")}>Expertise</span>
        <span className="navbar-link" onClick={() => onNavigate("skills")}>Skills</span>
        <span className="navbar-link" onClick={() => onNavigate("projects")}>Projects</span>
        <span className="navbar-link" onClick={() => onNavigate("rate")}>Rate</span>
        <span className="navbar-link" onClick={() => onNavigate("contact")}>Contact</span>
        <a
          className="navbar-link"
          href="https://github.com/karthik"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          className="navbar-link"
          href="https://linkedin.com/in/karthik"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
