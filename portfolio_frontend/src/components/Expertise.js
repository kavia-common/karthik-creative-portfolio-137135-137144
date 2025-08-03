import React from "react";

const EXPERTISE = [
  { label: "Java & Spring Boot" },
  { label: ".NET Framework & C#" },
  { label: "Apex (Salesforce Dev)" },
  { label: "Ruby on Rails" },
  { label: "Salesforce Apps" },
  { label: "Web Apps on Any Tech" },
  { label: "API Design & Integration" },
  { label: "Full-stack Architecture" },
];

// PUBLIC_INTERFACE
function Expertise() {
  return (
    <div className="expertise-container">
      <div className="expertise-title">My Expertise</div>
      <div className="expertise-list">
        {EXPERTISE.map((skill, idx) => (
          <div className="expertise-item" style={{ animationDelay: `${0.07 * idx + 0.3}s` }} key={skill.label}>
            {skill.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
