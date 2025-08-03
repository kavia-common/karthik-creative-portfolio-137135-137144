import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Use placeholder images or use generic ones - these can be replaced with real images
const PROJECTS = [
  {
    title: "Skillrank SaaS Platform",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=720&q=80",
    desc: "Enterprise platform for skill assessment – built REST APIs (Spring Boot), React frontend, Salesforce integrations, robust event processing.",
    links: [
      { label: "GitHub", url: "https://github.com/karthik/skillrank", icon: <FaGithub /> },
    ],
  },
  {
    title: "Salesforce App Suite",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=720&q=80",
    desc: "Custom Salesforce apps (Apex, LWC, .NET microservices). Process automation, analytics dashboard, deployment tool.",
    links: [
      { label: "Demo", url: "https://www.salesforce.com/", icon: <FaExternalLinkAlt /> },
    ],
  },
  {
    title: "E-Commerce Analytics",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=720&q=80",
    desc: "Java/Spring + Rails microservices with real-time dashboard, payment gateway integrations, inventory reporting.",
    links: [
      { label: "GitHub", url: "https://github.com/karthik/ecommerce-analytics", icon: <FaGithub /> },
    ],
  },
  {
    title: "Freelance Web Solutions",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=720&q=80",
    desc: "Over 25 freelance projects: consumer portals, API backends, mobile-ready dashboards. Tech stack: React, Spring Boot, Node.js, .NET.",
    links: [
      { label: "Portfolio", url: "https://www.karthiksportfolio.com", icon: <FaExternalLinkAlt /> },
    ],
  },
  {
    title: "Data-Driven FinTech",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=720&q=80",
    desc: "Created secure, scalable financial APIs in Java; Rails analytics, regulatory compliance, cloud optimized.",
    links: [
      { label: "GitHub", url: "https://github.com/karthik/fintech", icon: <FaGithub /> },
    ],
  },
];

// PUBLIC_INTERFACE
function ProjectsShowcase() {
  return (
    <div className="projects-container">
      <div className="projects-title">Project Showcase</div>
      <div className="projects-list">
        {PROJECTS.map((prj, idx) => (
          <div className="project-card" style={{ animationDelay: `${0.10 * idx + 0.21}s` }} key={prj.title}>
            <img className="project-image" src={prj.img} alt={prj.title} />
            <div className="project-content">
              <div className="project-title">{prj.title}</div>
              <div className="project-desc">{prj.desc}</div>
              <div className="project-links">
                {prj.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={l.label}
                    style={{ fontSize: "1.23rem" }}
                  >
                    {l.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsShowcase;
