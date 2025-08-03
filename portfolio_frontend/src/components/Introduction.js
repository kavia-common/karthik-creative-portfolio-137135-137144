import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// PUBLIC_INTERFACE
function Introduction({ onContactClick }) {
  return (
    <div className="intro-container">
      <div className="intro-title">Hey, I'm Karthik.</div>
      <div className="intro-role">Software Developer @ Skillrank • Remote</div>
      <div className="intro-desc">
        Expert in Java, Spring, .NET Framework, Apex, Ruby on Rails, Salesforce Apps – versatile in all things web. I craft creative, high-performing, and user-focused solutions, no matter the stack.
      </div>
      <button className="intro-btn" onClick={onContactClick}>
        Let's Work Together
      </button>

      <div className="social-links">
        <a
          className="social-link"
          href="https://github.com/karthik"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          className="social-link"
          href="https://linkedin.com/in/karthik"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Introduction;
