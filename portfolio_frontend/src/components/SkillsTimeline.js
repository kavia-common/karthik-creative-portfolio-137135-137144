import React from "react";

const TIMELINE = [
  {
    period: "Present",
    desc: "Remote Software Developer at Skillrank (Java Backends, Salesforce, Rails, APIs, End-to-End Solutions)",
  },
  {
    period: "2022",
    desc: "Launched enterprise-grade Salesforce App; integrated Apex with .NET microservices.",
  },
  {
    period: "2021",
    desc: "Developed multi-tenant SaaS on Ruby on Rails; migrated .NET app to cloud.",
  },
  {
    period: "2019-2020",
    desc: "Worked on Spring Boot REST APIs, scalable event-driven services, and Angular-web client integrations.",
  },
  {
    period: "2017-2019",
    desc: "Built data-driven platforms for FinTech startups; designed secure API layers in Java.",
  },
];

// PUBLIC_INTERFACE
function SkillsTimeline() {
  return (
    <div className="skills-timeline-container">
      <div className="skills-timeline-title">Timeline of Skills & Experience</div>
      <div className="timeline">
        {TIMELINE.map((item, idx) => (
          <div className="timeline-item" style={{ animationDelay: `${0.04 * idx + 0.1}s` }} key={idx}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <strong>{item.period}</strong>
              <div>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsTimeline;
