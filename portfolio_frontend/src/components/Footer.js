import React from "react";

// PUBLIC_INTERFACE
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      Built & designed by Karthik. &copy; {year} &middot;{" "}
      <a href="https://github.com/karthik" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>{" | "}
      <a href="https://linkedin.com/in/karthik" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </footer>
  );
}

export default Footer;
